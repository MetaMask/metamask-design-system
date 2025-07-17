import { beforeAll } from 'vitest';
import { setProjectAnnotations } from '@storybook/react-vite';
import * as previewAnnotations from './preview';
import * as addonA11y from '@storybook/addon-a11y/preview';

const annotations = setProjectAnnotations([addonA11y, previewAnnotations]);

// Run Storybook's beforeAll hook
beforeAll(annotations.beforeAll);
