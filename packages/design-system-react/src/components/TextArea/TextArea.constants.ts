/**
 * TextAreaResize - resize
 * Controls the resize behavior of the textarea element.
 */
export const TextAreaResize = {
  /**
   * The textarea cannot be resized.
   */
  None: 'none',
  /**
   * The textarea can be resized both horizontally and vertically.
   */
  Both: 'both',
  /**
   * The textarea can only be resized horizontally.
   */
  Horizontal: 'horizontal',
  /**
   * The textarea can only be resized vertically.
   */
  Vertical: 'vertical',
} as const;
export type TextAreaResize =
  (typeof TextAreaResize)[keyof typeof TextAreaResize];

/**
 * Maps TextAreaResize values to Tailwind CSS resize classes.
 */
export const CLASSMAP_TEXTAREA_RESIZE: Record<TextAreaResize, string> = {
  [TextAreaResize.None]: 'resize-none',
  [TextAreaResize.Both]: 'resize',
  [TextAreaResize.Horizontal]: 'resize-x',
  [TextAreaResize.Vertical]: 'resize-y',
};
