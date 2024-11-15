// utils/tw-merge.ts

import { extendTailwindMerge } from 'tailwind-merge';

// TODO create a test that checks against typographyMap in Text.tsx
const variantClassGroups = [
  's-display-md',
  's-heading-lg',
  's-heading-md',
  's-heading-sm',
  's-body-lg',
  's-body-md',
  's-body-sm',
  's-body-xs',
  'l-display-md',
  'l-heading-lg',
  'l-heading-md',
  'l-heading-sm',
  'l-body-lg',
  'l-body-md',
  'l-body-sm',
  'l-body-xs',
];

export const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      'text-color': ['text-default', 'text-alternative', 'text-muted'],
      'font-size': [
        {
          text: variantClassGroups,
        },
      ],
      'font-weight': [
        // Standard Tailwind font weights
        'font-thin',
        'font-extralight',
        'font-light',
        'font-normal',
        'font-medium',
        'font-semibold',
        'font-bold',
        'font-extrabold',
        'font-black',
        // Custom typography classes
        {
          font: variantClassGroups,
        },
      ],
    },
    conflictingClassGroups: {
      'text-color': ['text-color'],
      'font-size': ['font-size'],
      'font-weight': ['font-weight'],
    },
  },
});