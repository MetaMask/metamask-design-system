import assert from 'node:assert/strict';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { designSystemBarrelImportsPlugin } from './vite-plugin-design-system-barrel-imports';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const componentsIndexPath = path.resolve(
  __dirname,
  '../../../packages/design-system-react-native/src/components/index.ts',
);

const plugin = designSystemBarrelImportsPlugin(componentsIndexPath);
const transform = plugin.transform;
assert.ok(transform, 'expected transform hook');

const input = `import {
  Box,
  BoxAlignItems,
  Button,
  ButtonVariant,
  Text,
} from '@metamask/design-system-react-native';
`;

const result = transform.call(
  { ...plugin },
  input,
  '/workspace/apps/storybook-react-native/stories/Backgrounds.stories.tsx',
);

assert.ok(result);
assert.match(result.code!, /from '@metamask\/design-system-react-native\/components\/Box'/);
assert.match(
  result.code!,
  /from '@metamask\/design-system-react-native\/components\/Button'/,
);
assert.match(result.code!, /from '@metamask\/design-system-react-native\/components\/Text'/);
assert.doesNotMatch(
  result.code!,
  /from '@metamask\/design-system-react-native'/,
);

console.log('vite-plugin-design-system-barrel-imports: ok');
