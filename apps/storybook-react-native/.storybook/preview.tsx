import React from 'react';
import type { Preview } from '@storybook/react';
import { StorybookProvider } from './StorybookProvider';

const preview: Preview = {
  decorators: [
    (Story) => (
      <StorybookProvider>
        <Story />
      </StorybookProvider>
    ),
  ],
};

export default preview;
