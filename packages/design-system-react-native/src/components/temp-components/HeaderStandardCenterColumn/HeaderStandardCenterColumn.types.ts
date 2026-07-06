// Third party dependencies.
import React from 'react';

// External dependencies.
import type { TextProps } from '../../Text';

/**
 * Shared title/subtitle fields for header center content (see HeaderStandard, HeaderStandardAnimated).
 */
export type HeaderStandardCenterColumnFields = {
  /**
   * Title to display in the header. Can be a string or a React node.
   * Used as children if children prop is not provided.
   * When string: rendered with TextVariant.BodyMd and FontWeight.Bold by default; titleProps apply.
   * When node: rendered as-is; titleProps are not applied.
   */
  title?: string | React.ReactNode;
  /**
   * Additional props to pass to the title Text component.
   * Props are spread to the Text component and can override default values.
   * Only applied when title is a string.
   */
  titleProps?: Partial<TextProps>;
  /**
   * Subtitle to display below the title. Can be a string or a React node.
   * When string: rendered with TextVariant.BodySm and TextColor.TextAlternative by default; subtitleProps apply.
   * When node: rendered as-is; subtitleProps are not applied (add spacing on your root if needed, e.g. twClassName).
   */
  subtitle?: string | React.ReactNode;
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
  title: React.ReactNode;
};
