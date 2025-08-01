import { extendTailwindMerge } from 'tailwind-merge';

const variantClassGroups = [
  's-display-lg',
  's-display-md',
  's-heading-lg',
  's-heading-md',
  's-heading-sm',
  's-body-lg',
  's-body-md',
  's-body-sm',
  's-body-xs',
  'l-display-lg',
  'l-display-md',
  'l-heading-lg',
  'l-heading-md',
  'l-heading-sm',
  'l-body-lg',
  'l-body-md',
  'l-body-sm',
  'l-body-xs',
  's-page-heading',
  's-section-heading',
  's-button-label-md',
  's-button-label-lg',
  's-amount-display-lg',
  'l-page-heading',
  'l-section-heading',
  'l-button-label-md',
  'l-button-label-lg',
  'l-amount-display-lg',
];

/**
 * Custom Tailwind Merge configuration to handle our design system's typography classes.
 * This extends the default Tailwind Merge behavior to properly handle conflicts between:
 * 1. Custom text color classes (text-default, text-alternative, text-muted)
 * 2. Typography variant classes for font sizes (e.g., s-body-md, l-heading-lg)
 * 3. Standard and custom font weight classes
 *
 * Without this configuration, Tailwind Merge wouldn't know these classes are meant
 * to override each other, potentially leading to multiple conflicting classes
 * being applied simultaneously.
 */
export const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      'text-color': ['text-default', 'text-alternative', 'text-muted'],
      'font-size': [
        {
          text: variantClassGroups,
        },
      ],
      'font-family': ['font-default', 'font-accent', 'font-hero'],
      'font-weight': [
        'font-thin',
        'font-extralight',
        'font-light',
        'font-normal',
        'font-regular',
        'font-medium',
        'font-semibold',
        'font-bold',
        'font-extrabold',
        'font-black',
      ],
    },
    conflictingClassGroups: {
      'text-color': ['text-color'],
      'font-size': ['font-size'],
      'font-family': ['font-family'],
      'font-weight': ['font-weight'],
    },
  },
});
