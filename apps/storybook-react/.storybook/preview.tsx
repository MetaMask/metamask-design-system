import React, { useEffect } from 'react';
import '../../../packages/design-tokens/dist/styles.css';
import '../tailwind.css';

import { PureBlackProvider } from '@metamask/design-system-react';
import { Preview } from '@storybook/react-vite';
import { StoryContext, StoryFn } from '@storybook/react-vite';

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
  isPureBlack: {
    name: 'Pure black',
    description: 'Use pure black dark theme (OLED)',
    defaultValue: false,
    toolbar: {
      icon: 'contrast',
      items: [
        { value: false, title: 'Grey dark' },
        { value: true, title: 'Pure black' },
      ],
      showName: true,
    },
  },
};

/** Storybook may serialize toolbar booleans as strings in URL/globals. */
function parseIsPureBlack(value: unknown): boolean {
  return value === true || value === 'true';
}

/**
 * Storybook-only: Modal and other portaled UI render on document.body, outside
 * the decorator wrapper. Mirror dark / pure-black theme attrs on <html> so CSS
 * variables resolve the same as in the extension (which sets .dark on the root).
 */
function StorybookDocumentThemeSync({
  isPureBlack,
}: {
  isPureBlack: boolean;
}) {
  useEffect(() => {
    document.documentElement.classList.add('dark');

    if (isPureBlack) {
      document.documentElement.setAttribute('data-pure-black', 'true');
    } else {
      document.documentElement.removeAttribute('data-pure-black');
    }

    return () => {
      document.documentElement.classList.remove('dark');
      document.documentElement.removeAttribute('data-pure-black');
    };
  }, [isPureBlack]);

  return null;
}

function withColorScheme(Story: StoryFn, context: StoryContext) {
  const storyColorScheme = context.parameters.colorScheme;
  const globalColorScheme = context.globals.colorScheme;
  const isPureBlack = parseIsPureBlack(context.globals.isPureBlack);

  // Use story-level parameter if available, otherwise fall back to global
  const colorScheme = storyColorScheme || globalColorScheme;

  function Wrapper({
    children,
    className,
    syncDocumentTheme = false,
  }: {
    children: React.ReactNode;
    className?: 'light' | 'dark';
    syncDocumentTheme?: boolean;
  }) {
    const inner = (
      <div
        style={{
          padding: '1rem',
          backgroundColor: 'var(--color-background-default)',
        }}
      >
        {children}
      </div>
    );

    if (className === 'light') {
      return <div className="light">{inner}</div>;
    }

    // Pure-black CSS requires [data-pure-black] inside .dark (see pure-black-dark-theme-colors.css).
    return (
      <>
        {syncDocumentTheme && (
          <StorybookDocumentThemeSync isPureBlack={isPureBlack} />
        )}
        <div className="dark">
          <PureBlackProvider isPureBlack={isPureBlack}>{inner}</PureBlackProvider>
        </div>
      </>
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
      <Wrapper className="dark" syncDocumentTheme>
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
    // Enable accessibility testing
    a11y: {
      test: 'error', // Fail tests when accessibility violations are found
    },
  },
};

export default preview;
