import React from 'react';

export enum TextVariant {
  // Display Sizes
  DisplayMd = 'display-md',

  // Heading Sizes
  HeadingLg = 'heading-lg',
  HeadingMd = 'heading-md',
  HeadingSm = 'heading-sm',

  // Font Sizes
  BodyLg = 'body-lg',
  BodyMd = 'body-md',
  BodySm = 'body-sm',
  BodyXs = 'body-xs',
}

export interface TextProps {
  variant: TextVariant;
  children: React.ReactNode;
  className?: string;
}

// Create a mapping from TextVariant to Tailwind class names
const typographyClassMap: Record<TextVariant, string> = {
  [TextVariant.DisplayMd]:
    'text-s-display-md font-s-display-md leading-s-display-md tracking-s-display-md lg:text-l-display-md lg:font-l-display-md lg:leading-l-display-md lg:tracking-l-display-md',
  [TextVariant.HeadingLg]:
    'text-s-heading-lg font-s-heading-lg leading-s-heading-lg tracking-s-heading-lg lg:text-l-heading-lg lg:font-l-heading-lg lg:leading-l-heading-lg lg:tracking-l-heading-lg',
  [TextVariant.HeadingMd]:
    'text-s-heading-md font-s-heading-md leading-s-heading-md tracking-s-heading-md lg:text-l-heading-md lg:font-l-heading-md lg:leading-l-heading-md lg:tracking-l-heading-md',
  [TextVariant.HeadingSm]:
    'text-s-heading-sm font-s-heading-sm leading-s-heading-sm tracking-s-heading-sm lg:text-l-heading-sm lg:font-l-heading-sm lg:leading-l-heading-sm lg:tracking-l-heading-sm',
  [TextVariant.BodyLg]:
    'text-s-body-lg font-s-body-lg leading-s-body-lg tracking-s-body-lg lg:text-l-body-lg lg:font-l-body-lg lg:leading-l-body-lg lg:tracking-l-body-lg',
  [TextVariant.BodyMd]:
    'text-s-body-md font-s-body-md leading-s-body-md tracking-s-body-md lg:text-l-body-md lg:font-l-body-md lg:leading-l-body-md lg:tracking-l-body-md',
  [TextVariant.BodySm]:
    'text-s-body-sm font-s-body-sm leading-s-body-sm tracking-s-body-sm lg:text-l-body-sm lg:font-l-body-sm lg:leading-l-body-sm lg:tracking-l-body-sm',
  [TextVariant.BodyXs]:
    'text-s-body-xs font-s-body-xs leading-s-body-xs tracking-s-body-xs lg:text-l-body-xs lg:font-l-body-xs lg:leading-l-body-xs lg:tracking-l-body-xs',
};

// Update the Text component to use the TextVariant enum
export const Text: React.FC<TextProps> = ({ variant, children, className }) => {
  // Map the TextVariant to corresponding class names from typography.ts
  const variantClass = typographyClassMap[variant];

  return <p className={`${variantClass} ${className}`}>{children}</p>;
};
