import React from 'react';
import { withBackgrounds } from '@storybook/addon-ondevice-backgrounds';
import type { Preview } from '@storybook/react';
import { StorybookProvider } from '../.storybook/StorybookProvider';

const preview: Preview = {
  decorators: [
    withBackgrounds,
    (Story) => (
      <StorybookProvider>
        <Story />
      </StorybookProvider>
    ),
  ],
};

export default preview;
