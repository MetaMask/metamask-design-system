import React from 'react';
import '@metamask/design-tokens/src/css/index.css';
import '../tailwind.css';

import { Preview } from '@storybook/react';
import { StoryContext, StoryFn } from '@storybook/react';

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

function withColorScheme(Story: StoryFn, context: StoryContext) {
  const storyColorScheme = context.parameters.colorScheme;
  const globalColorScheme = context.globals.colorScheme;

  // Use story-level parameter if available, otherwise fall back to global
  const colorScheme = storyColorScheme || globalColorScheme;

  function Wrapper({
    children,
    ...props
  }: { children: React.ReactNode } & Record<string, any>) {
    return (
      <div
        {...props}
        style={{
          padding: '1rem',
          backgroundColor: 'var(--color-background-default)',
        }}
      >
        {children}
      </div>
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
    options: {
      storySort: {
        order: [
          'Getting Started',
          'Design Tokens',
          'React Components',
          'Docs Components',
          '*', // All other stories
        ],
      },
    },
    layout: 'fullscreen', // removes default padding around stories
  },
};

export default preview;
