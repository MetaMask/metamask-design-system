import {
  baselineFromManifests,
  comparePackage,
  DEFAULT_ALLOWLIST,
  isAllowlisted,
} from './baseline';
import type { ComponentsManifest, ManifestBaseline } from './baseline';

const baseline: ManifestBaseline = {
  description: 'test',
  allowlist: DEFAULT_ALLOWLIST,
  packages: {
    react: {
      'react-components-button': {
        name: 'Button',
        props: ['children', 'variant'],
      },
    },
    'react-native': {},
  },
};

function manifest(
  components: ComponentsManifest['components'],
): ComponentsManifest {
  return { components };
}

describe('components manifest baseline', () => {
  it('skips pattern, token, and docs entries from the allowlist', () => {
    expect(
      isAllowlisted({ id: 'patterns-marketing-moments' }, DEFAULT_ALLOWLIST),
    ).toBe(true);
    expect(
      isAllowlisted(
        { id: 'design-tokens-color-brand-colors' },
        DEFAULT_ALLOWLIST,
      ),
    ).toBe(true);
    expect(isAllowlisted({ id: 'docs-introduction' }, DEFAULT_ALLOWLIST)).toBe(
      true,
    );
    expect(
      isAllowlisted({ id: 'react-components-button' }, DEFAULT_ALLOWLIST),
    ).toBe(false);
  });

  it('fails when a component has no props, loses a baseline prop, or has a docgen error', () => {
    const failures = comparePackage(
      'react',
      manifest({
        'react-components-button': {
          id: 'react-components-button',
          name: 'Button',
          reactDocgenTypescript: { props: { variant: {} } },
        },
        'react-components-box': {
          id: 'react-components-box',
          name: 'Box',
          reactDocgenTypescript: { props: {} },
        },
        'react-components-icon': {
          id: 'react-components-icon',
          name: 'Icon',
          error: { name: 'No component import found', message: 'missing' },
          reactDocgenTypescript: { props: { name: {} } },
        },
        'patterns-marketing-moments': {
          id: 'patterns-marketing-moments',
          name: 'MarketingMoment',
          error: { name: 'No component import found' },
        },
      }),
      baseline,
    );

    expect(failures.map((failure) => failure.message)).toStrictEqual([
      'Button lost 1 prop(s): children',
      'Box has 0 props',
      'Box is not in the baseline. Run yarn components-manifest:update after confirming its props.',
      'Icon docgen error: No component import found — missing',
      'Icon is not in the baseline. Run yarn components-manifest:update after confirming its props.',
    ]);
  });

  it('passes when every baseline prop is still present', () => {
    const failures = comparePackage(
      'react',
      manifest({
        'react-components-button': {
          id: 'react-components-button',
          name: 'Button',
          reactDocgenTypescript: {
            props: { children: {}, variant: {}, size: {} },
          },
        },
      }),
      baseline,
    );
    expect(failures).toStrictEqual([]);
  });

  it('records prop names and omits allowlisted entries when creating a baseline', () => {
    const created = baselineFromManifests(
      {
        react: manifest({
          'react-components-box': {
            id: 'react-components-box',
            name: 'Box',
            reactDocgenTypescript: { props: { padding: {}, className: {} } },
          },
          'patterns-wallet-home': {
            id: 'patterns-wallet-home',
            name: '() => null',
            error: { name: 'No component import found' },
          },
        }),
        'react-native': manifest({}),
      },
      DEFAULT_ALLOWLIST,
    );
    expect(created.packages.react['react-components-box']).toStrictEqual({
      name: 'Box',
      props: ['className', 'padding'],
    });
    expect(created.packages.react['patterns-wallet-home']).toBeUndefined();
  });
});
