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

// Numeric radius aliases from `@metamask/design-tokens`. Inlined to avoid a
// workspace dependency cycle (design-tokens → design-system-react).
const borderRadiusScale = ['2', '4', '6', '8', '12', '16', '24'];

// Tailwind Merge keys border radius by corner, so every corner group needs the
// aliases. Without them `rounded-8 rounded-12` keeps both classes, and so does
// `rounded-lg rounded-12`, since Merge cannot tell the two vocabularies name
// the same property.
const borderRadiusClassGroups = Object.fromEntries(
  [
    'rounded',
    'rounded-s',
    'rounded-e',
    'rounded-t',
    'rounded-r',
    'rounded-b',
    'rounded-l',
    'rounded-ss',
    'rounded-se',
    'rounded-ee',
    'rounded-es',
    'rounded-tl',
    'rounded-tr',
    'rounded-br',
    'rounded-bl',
  ].map((group) => [group, [{ [group]: borderRadiusScale }]]),
);

/**
 * Custom Tailwind Merge configuration to handle our design system's typography classes.
 * This extends the default Tailwind Merge behavior to properly handle conflicts between:
 * 1. Custom text color classes (text-default, text-alternative, text-muted)
 * 2. Typography variant classes for font sizes (e.g., s-body-md, l-heading-lg)
 * 3. Standard and custom font weight classes
 * 4. Radius token classes (e.g., rounded-8, rounded-full)
 *
 * Without this configuration, Tailwind Merge wouldn't know these classes are meant
 * to override each other, potentially leading to multiple conflicting classes
 * being applied simultaneously.
 */
export const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      ...borderRadiusClassGroups,
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
