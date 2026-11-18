/*
 * Regression test for `'worklet'` exports surviving the CommonJS build.
 *
 * MetaMask Mobile runs the react-native-worklets Babel plugin over this
 * package's pre-built dist and resolves it through the `require` (CJS)
 * condition. TypeScript 5.9's CommonJS emit hoists every `exports.name = name`
 * assignment to the top of the file, before the declarations, and the worklets
 * plugin rewrites each `'worklet'` function declaration into
 * `var name = <worklet factory>` at the same position — so hoisted assignments
 * capture the still-undefined `var` and every exported worklet becomes
 * `undefined`. Slider then crashed with "resolveValueToTrackPercent is not a
 * function" (see MetaMask Mobile #40068, which carries a metro/jest workaround
 * that can be dropped once this package publishes a fixed build).
 *
 * Worklet helpers must therefore be exported from `const` bindings (whose
 * export assignments stay after initialization, and whose intra-module calls
 * keep worklet closures free of the `exports` object) — see the export block at
 * the bottom of Slider.utilities.ts.
 *
 * This suite runs every built `.cjs` module that contains a `'worklet'`
 * directive through the react-native-worklets Babel plugin that consumers run
 * over dist, and asserts the module still exports exactly what the same module
 * emits without the plugin. It needs `yarn build` to have produced `dist/`;
 * without it the suite is skipped (CI always builds before testing).
 */

import { transformSync } from '@babel/core';
import { readFileSync, readdirSync } from 'node:fs';
import { createRequire } from 'node:module';
import path from 'node:path';

const distDir = path.resolve(__dirname, '..', '..', '..', 'dist');
const utilitiesFile = path.join(
  distDir,
  'components',
  'Slider',
  'Slider.utilities.cjs',
);

/** Exported worklet helpers of Slider.utilities.ts, in declaration order. */
const SLIDER_UTILITIES_WORKLETS = [
  'clampTrackPercent',
  'defaultMapValueToTrackPercent',
  'defaultMapTrackPercentToValue',
  'resolveTrackPercentToValue',
  'resolveValueToTrackPercent',
  'trackPercentToPosition',
  'positionToTrackPercent',
  'clampGesturePosition',
  'interpolateMarkColor',
];

type Exports = Record<string, unknown>;
type RequireFn = (request: string) => unknown;
type ModuleFactory = (
  requireFn: RequireFn,
  moduleObject: { exports: Exports },
  exportsObject: Exports,
) => void;

/**
 * A value that tolerates any access, call, or construction, so unrelated
 * modules can load without stubbing each export individually.
 *
 * @returns Recursive proxy stub.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any -- a stub must accept any property access, call, or construction
const makeStub = (): any => {
  const stub = function stub() {
    return makeStub();
  };
  return new Proxy(stub, {
    get(target, property) {
      if (property === 'prototype') {
        return target.prototype;
      }
      if (property === 'name') {
        return 'stub';
      }
      if (typeof property === 'symbol') {
        // Keep numeric/string coercion and iterables from throwing.
        if (property === Symbol.toPrimitive) {
          return () => '';
        }
        return undefined;
      }
      // Awaiting or JSON-serializing a stub must not loop forever.
      if (
        property === 'then' ||
        property === 'toJSON' ||
        property === 'catch' ||
        property === 'finally'
      ) {
        return undefined;
      }
      return makeStub();
    },
    apply() {
      return makeStub();
    },
    construct() {
      return makeStub();
    },
  });
};

/**
 * Lists every `.cjs` file under the directory, recursively.
 *
 * @param directory - Directory to walk.
 * @returns Absolute paths of `.cjs` files.
 */
const listCjsFiles = (directory: string): string[] => {
  const files: string[] = [];
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...listCjsFiles(entryPath));
    } else if (entry.name.endsWith('.cjs')) {
      files.push(entryPath);
    }
  }
  return files;
};

/**
 * Transforms a built module with the consumer Babel pipeline and evaluates it
 * with stubbed dependencies, returning the resulting `exports` object.
 *
 * Consumers order `react-native-worklets/plugin` last after
 * `@react-native/babel-preset`; that preset cannot be loaded inside the Jest
 * sandbox (Babel loads it as ESM, which Jest's module registry breaks), so the
 * harness pairs the plugin with `@babel/preset-react` instead — enough to
 * compile the JSX in component dist files. The worklets plugin is the behavior
 * under test and is identical in both setups.
 *
 * @param source - Built module source.
 * @param filename - Real dist path (feeds preset/plugin detection).
 * @param requireOverrides - Stub replacements by module specifier.
 * @param withWorkletsPlugin - Whether the worklets plugin runs (consumers: yes).
 * @returns The module's `exports` object.
 */
const evaluateModule = (
  source: string,
  filename: string,
  requireOverrides: Record<string, unknown> = {},
  withWorkletsPlugin = true,
): Exports => {
  const { code } = transformSync(source, {
    filename,
    babelrc: false,
    configFile: false,
    presets: [require.resolve('@babel/preset-react')],
    plugins: withWorkletsPlugin
      ? [require.resolve('react-native-worklets/plugin')]
      : [],
  });
  const fakeModule = { exports: {} as Exports };
  // The built module is CommonJS, so it is evaluated with a fresh module shape
  // and stubbed dependencies instead of a real module registry.
  // eslint-disable-next-line no-new-func, @typescript-eslint/no-implied-eval -- evaluates built dist output in isolation
  const runModule = new Function(
    'require',
    'module',
    'exports',
    code,
  ) as unknown as ModuleFactory;
  runModule(
    (request: string) => {
      if (request in requireOverrides) {
        return requireOverrides[request];
      }
      return makeStub();
    },
    fakeModule,
    fakeModule.exports,
  );
  return fakeModule.exports;
};

// jest-circus runs describe callbacks even for skipped suites, so everything
// touching dist/ must be guarded by the existence check, not just describe.skip.
const hasUtilitiesDist = (() => {
  try {
    readFileSync(utilitiesFile);
    return true;
  } catch {
    return false;
  }
})();

if (!hasUtilitiesDist) {
  // Keep the reason visible in test output instead of failing fresh checkouts.
  console.log(
    'Skipping distCjsWorklets tests: dist/ not found — run `yarn build` first.',
  );
}

const workletFiles = hasUtilitiesDist
  ? listCjsFiles(distDir).filter((file) =>
      readFileSync(file, 'utf8').includes("'worklet'"),
    )
  : [];

// react-native-reanimated is a native module that cannot load in Node; the
// worklets under test only need the pure interpolation seam below. A plain
// recording function is used instead of jest.fn because the package Jest config
// resets mocks (including implementations) before every test.
const interpolateColorCalls: unknown[][] = [];
const interpolateColor = (...args: unknown[]) => {
  interpolateColorCalls.push(args);
  return 'interpolated';
};

const nodeRequire = createRequire(__filename);
const requireOverrides: Record<string, unknown> = hasUtilitiesDist
  ? {
      'react-native-reanimated': { interpolateColor },
      './Slider.constants.cjs': nodeRequire(
        path.join(distDir, 'components', 'Slider', 'Slider.constants.cjs'),
      ),
    }
  : {};

// A broken build can make even evaluating the transformed module throw (hoisted
// exports hitting a TDZ binding); evaluation is captured once here and reported
// through assertions instead of crashing suite collection.
let utilitiesEvalError: unknown;
let utilitiesExports: Exports = {};
if (hasUtilitiesDist) {
  try {
    utilitiesExports = evaluateModule(
      readFileSync(utilitiesFile, 'utf8'),
      utilitiesFile,
      requireOverrides,
    );
  } catch (error) {
    utilitiesEvalError = error;
  }
}

describe('built CJS modules survive the worklets Babel plugin', () => {
  // When dist/ has not been built yet, tests that read it return early (the
  // load-time note above explains why); CI always builds before running tests.
  it('finds at least one worklet module to check', () => {
    if (!hasUtilitiesDist) {
      return;
    }
    expect(workletFiles).toContain(utilitiesFile);
  });

  it.each(workletFiles.map((file) => path.relative(distDir, file)))(
    'keeps every export of %s after the worklets transform',
    (relativePath) => {
      if (!hasUtilitiesDist) {
        return;
      }
      const file = path.join(distDir, relativePath);
      const source = readFileSync(file, 'utf8');
      const baseline = evaluateModule(source, file, requireOverrides, false);
      const transformed = evaluateModule(source, file, requireOverrides, true);

      expect(Object.keys(transformed).sort()).toStrictEqual(
        Object.keys(baseline).sort(),
      );
      for (const name of Object.keys(baseline)) {
        expect(transformed[name]).toBeDefined();
        expect(typeof transformed[name]).toBe(typeof baseline[name]);
      }
    },
  );

  it('evaluates the transformed Slider.utilities.cjs', () => {
    if (!hasUtilitiesDist) {
      return;
    }
    expect(utilitiesEvalError).toBeUndefined();
  });

  it.each(SLIDER_UTILITIES_WORKLETS)(
    'exports Slider.utilities.cjs %s as a function',
    (name) => {
      if (!hasUtilitiesDist) {
        return;
      }
      expect(typeof utilitiesExports[name]).toBe('function');
    },
  );

  it('runs the transformed Slider.utilities.cjs worklets', () => {
    if (!hasUtilitiesDist) {
      return;
    }
    const worklets = utilitiesExports as Record<
      string,
      (...args: unknown[]) => unknown
    >;
    expect(worklets.clampTrackPercent(-10)).toBe(0);
    expect(worklets.clampTrackPercent(110)).toBe(100);
    expect(worklets.resolveValueToTrackPercent(50, 0, 100)).toBe(50);
    expect(
      worklets.resolveValueToTrackPercent(80, 0, 100, (value) => value * 0.5),
    ).toBe(40);
    expect(worklets.resolveTrackPercentToValue(50, 0, 100, 10)).toBe(50);
  });

  it('captures worklet closures without the module exports object', () => {
    if (!hasUtilitiesDist) {
      return;
    }
    // A worklet body referencing `exports.*` would drag the whole exports
    // object into the worklet closure; only worklets and import namespaces
    // may be captured.
    for (const name of SLIDER_UTILITIES_WORKLETS) {
      const worklet = utilitiesExports[name] as { __closure?: Exports };
      const closure = worklet.__closure ?? {};
      expect(Object.keys(closure)).not.toContain('exports');
    }
  });

  it('interpolates mark colors through the captured reanimated import', () => {
    if (!hasUtilitiesDist) {
      return;
    }
    const worklets = utilitiesExports as Record<
      string,
      (...args: unknown[]) => unknown
    >;
    const color = worklets.interpolateMarkColor(50, [
      { step: 0, color: '#ff0000' },
      { step: 100, color: '#00ff00' },
    ]);
    expect(color).toBe('interpolated');
    expect(interpolateColorCalls.length).toBeGreaterThan(0);
  });
});
