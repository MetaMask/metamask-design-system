import type { Preview } from '@storybook/react';

import '../docs/fonts/fonts.css';
import '../src/css/index.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    storySort: {
      order: [
        'Getting Started',
        ['Introduction'],
        'Colors',
        'Shadows',
        'Typography',
        'Doc Components',
      ],
    },
  },

  tags: ['autodocs'],
};

export default preview;
