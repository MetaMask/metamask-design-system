/**
 * HeaderSearch variants (ADR-0003).
 */
export const HeaderSearchVariant = {
  Screen: 'screen',
  Inline: 'inline',
} as const;

export type HeaderSearchVariant =
  (typeof HeaderSearchVariant)[keyof typeof HeaderSearchVariant];

/**
 * Screen variant shared props (ADR-0004).
 */
export type HeaderSearchScreenPropsShared = {
  variant: typeof HeaderSearchVariant.Screen;
};

/**
 * Inline variant shared props (ADR-0004).
 */
export type HeaderSearchInlinePropsShared = {
  variant: typeof HeaderSearchVariant.Inline;
};

/**
 * Discriminated shared props for HeaderSearch.
 */
export type HeaderSearchPropsShared =
  | HeaderSearchScreenPropsShared
  | HeaderSearchInlinePropsShared;
