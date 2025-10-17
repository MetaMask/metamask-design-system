import { extendTailwindMerge } from 'tailwind-merge';

const variantClassGroups = [
  'display-lg',
  'display-md',
  'heading-lg',
  'heading-md',
  'heading-sm',
  'body-lg',
  'body-md',
  'body-sm',
  'body-xs',
  'page-heading',
  'section-heading',
  'button-label-md',
  'button-label-lg',
  'amount-display-lg',
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
