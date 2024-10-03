import React from 'react';
import '@metamask/design-tokens/dist/styles.css';

import { Preview } from '@storybook/react';

export const globalTypes = {
  colorScheme: {
    name: 'Color scheme',
    description: 'The color scheme for the component',
    defaultValue: 'both',
    toolbar: {
      items: [
        { value: 'light', right: '🌞', title: 'Light' },
        { value: 'dark', right: '🌚', title: 'Dark' },
        { value: 'both', right: '🌞🌚', title: 'Both' },
      ],
      dynamicTitle: true,
      icon: 'paintbrush',
    },
  },
};

function withColorScheme(Story, context) {
  const { colorScheme } = context.globals;

  function Wrapper(props) {
    return (
      <div
        {...props}
        style={{
          padding: '1rem',
          backgroundColor: 'var(--color-background-default)',
        }}
      />
    );
  }

  if (colorScheme === 'light') {
    return (
      <Wrapper data-theme="light">
        <Story {...context} />
      </Wrapper>
    );
  }

  if (colorScheme === 'dark') {
    return (
      <Wrapper data-theme="dark">
        <Story {...context} />
      </Wrapper>
    );
  }

  return (
    <>
      <Wrapper data-theme="light">
        <Story {...context} />
      </Wrapper>
      <Wrapper data-theme="dark">
        <Story {...context} />
      </Wrapper>
    </>
  );
}

const preview: Preview = {
  decorators: [withColorScheme],
};

export default preview;
