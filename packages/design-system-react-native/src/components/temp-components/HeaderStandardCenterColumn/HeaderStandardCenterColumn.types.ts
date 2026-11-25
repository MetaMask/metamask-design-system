import type { HeaderStandardPropsShared } from '@metamask/design-system-shared';
import type { ReactNode } from 'react';

import type { TextProps } from '../../Text';

/**
 * Shared title/subtitle fields for header center content (see HeaderStandard, HeaderStandardAnimated).
 */
export type HeaderStandardCenterColumnFields = Pick<
  HeaderStandardPropsShared,
  'title' | 'subtitle'
> & {
  /**
   * Additional props to pass to the title Text component.
   * Props are spread to the Text component and can override default values.
   * Only applied when title is a string.
   */
  titleProps?: Partial<TextProps>;
  /**
   * Additional props to pass to the subtitle Text component.
   * Props are spread to the Text component and can override default values.
   * Only applied when subtitle is a string.
   */
  subtitleProps?: Partial<TextProps>;
};

/**
 * Props for the presentational center column (requires `title` when rendered).
 */
export type HeaderStandardCenterColumnProps = Omit<
  HeaderStandardCenterColumnFields,
  'title'
> & {
  title: ReactNode;
};
