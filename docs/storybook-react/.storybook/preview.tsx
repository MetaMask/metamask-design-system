import React from 'react';

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
      icon: 'circlehollow',
    },
  },
};

function withColorScheme(Story, context) {
  const { colorScheme } = context.globals;

  function Flex(props) {
    return (
      <div
        {...props}
        style={{
          display: 'flex',
          justifyContent: 'center',
          padding: '2rem 0 2rem',
        }}
      />
    );
  }

  if (colorScheme === 'light') {
    return (
      <Flex className="color-scheme--light">
        <Story {...context} />
      </Flex>
    );
  }

  if (colorScheme === 'dark') {
    return (
      <Flex className="color-scheme--dark">
        <Story {...context} />
      </Flex>
    );
  }

  return (
    <div>
      <Flex className="color-scheme--light">
        <Story {...context} />
      </Flex>
      <Flex className="color-scheme--dark">
        <Story {...context} />
      </Flex>
    </div>
  );
}

const preview: Preview = {
  decorators: [withColorScheme],
};

export default preview;
