import { PureBlackContext } from '@metamask/design-system-shared';
import type { Decorator } from '@storybook/react';
import React from 'react';

// Supplies PureBlackContext and data-pure-black for theme color stories.
// Requires the isPureBlack Storybook global and the preview .dark wrapper.
export const withPureBlackContext: Decorator = (Story, context) => {
  const isPureBlack =
    context.globals.isPureBlack === true ||
    context.globals.isPureBlack === 'true';

  return (
    <PureBlackContext.Provider value={{ isPureBlack }}>
      <div
        data-pure-black={isPureBlack ? 'true' : undefined}
        style={{ display: 'contents' }}
      >
        <Story {...context} />
      </div>
    </PureBlackContext.Provider>
  );
};
