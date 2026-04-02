/**
 * TextareaResize - resize
 * Controls the resize behavior of the textarea element.
 */
export const TextareaResize = {
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
export type TextareaResize =
  (typeof TextareaResize)[keyof typeof TextareaResize];

/**
 * Maps TextareaResize values to Tailwind CSS resize classes.
 */
export const CLASSMAP_TEXTAREA_RESIZE: Record<TextareaResize, string> = {
  [TextareaResize.None]: 'resize-none',
  [TextareaResize.Both]: 'resize',
  [TextareaResize.Horizontal]: 'resize-x',
  [TextareaResize.Vertical]: 'resize-y',
};
