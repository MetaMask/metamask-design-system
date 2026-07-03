import React, { useLayoutEffect } from 'react';
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
 * Storybook-only: mirrors extension `setTheme` on `document.documentElement`.
 * Portaled UI (Modal, Popover) renders on `document.body` and inherits CSS
 * variables from the document root, not the decorator wrapper.
 */
function applyStorybookDocumentTheme({
  theme,
  isPureBlack,
}: {
  theme: 'light' | 'dark';
  isPureBlack: boolean;
}) {
  const root = document.documentElement;
  root.setAttribute('data-theme', theme);

  if (theme === 'dark' && isPureBlack) {
    root.setAttribute('data-pure-black', 'true');
  } else {
    root.removeAttribute('data-pure-black');
  }
}

function StorybookDocumentThemeSync({
  theme,
  isPureBlack,
}: {
  theme: 'light' | 'dark';
  isPureBlack: boolean;
}) {
  useLayoutEffect(() => {
    applyStorybookDocumentTheme({ theme, isPureBlack });

    return () => {
      document.documentElement.removeAttribute('data-theme');
      document.documentElement.removeAttribute('data-pure-black');
    };
  }, [theme, isPureBlack]);

  return null;
}

function withColorScheme(Story: StoryFn, context: StoryContext) {
  const storyColorScheme = context.parameters.colorScheme;
  const globalColorScheme = context.globals.colorScheme;
  const isPureBlack = parseIsPureBlack(context.globals.isPureBlack);

  // Use story-level parameter if available, otherwise fall back to global
  const colorScheme = storyColorScheme || globalColorScheme;

  const storyCanvas = (
    <div
      style={{
        padding: '1rem',
        backgroundColor: 'var(--color-background-default)',
      }}
    >
      <Story {...context} />
    </div>
  );

  function ScopedThemeWrapper({
    children,
    theme,
  }: {
    children: React.ReactNode;
    theme: 'light' | 'dark';
  }) {
    if (theme === 'dark') {
      return (
        <div
          data-theme="dark"
          // Both mode: scoped wrapper must carry data-pure-black — context-only
          // PureBlackProvider no longer sets DOM attributes (see #1312).
          data-pure-black={isPureBlack ? 'true' : undefined}
        >
          <PureBlackProvider isPureBlack={isPureBlack}>
            {children}
          </PureBlackProvider>
        </div>
      );
    }

    return <div data-theme="light">{children}</div>;
  }

  if (colorScheme === 'light') {
    return (
      <>
        <StorybookDocumentThemeSync theme="light" isPureBlack={false} />
        {storyCanvas}
      </>
    );
  }

  if (colorScheme === 'dark') {
    return (
      <>
        <StorybookDocumentThemeSync theme="dark" isPureBlack={isPureBlack} />
        <PureBlackProvider isPureBlack={isPureBlack}>
          {storyCanvas}
        </PureBlackProvider>
      </>
    );
  }

  // Both mode: document root cannot represent two themes; use scoped wrappers.
  // Portaled UI will not match the side-by-side preview (known limitation).
  return (
    <>
      <ScopedThemeWrapper theme="light">{storyCanvas}</ScopedThemeWrapper>
      <ScopedThemeWrapper theme="dark">{storyCanvas}</ScopedThemeWrapper>
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
