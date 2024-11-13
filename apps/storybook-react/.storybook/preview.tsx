import React from 'react';
import '@metamask/design-tokens/dist/styles.css';
import '../tailwind.css';

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
      <Wrapper className="light">
        <Story {...context} />
      </Wrapper>
    );
  }

  if (colorScheme === 'dark') {
    return (
      <Wrapper className="dark">
        <Story {...context} />
      </Wrapper>
    );
  }

  return (
    <>
      <Wrapper className="light">
        <Story {...context} />
      </Wrapper>
      <Wrapper className="dark">
        <Story {...context} />
      </Wrapper>
    </>
  );
}

const preview: Preview = {
  decorators: [withColorScheme],
  tags: ['autodocs'],
  parameters: {
    controls: { expanded: true },
  },
};

export default preview;
