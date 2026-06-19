// import figma needs to remain as figma otherwise it breaks code connect
// eslint-disable-next-line import-x/no-named-as-default
import figma from '@figma/code-connect';
import React from 'react';

import { SectionDivider } from './SectionDivider';

/**
 * React Native implementation of SectionDivider (`figma.connect` for Figma Dev Mode).
 *
 * [MMDS SectionDivider in Figma](https://www.figma.com/design/1D6tnzXqWgnUC3spaAOELN/%F0%9F%A6%8A-MMDS-Components?node-id=15701-23)
 *
 * Root Figma props: `withMargin (Figma only)`. Property names must match Dev Mode exactly.
 *
 * - **`withMargin (Figma only)`** maps to `marginVertical` (`true` → `5`, `false` → `0`).
 */
figma.connect(
  SectionDivider,
  'https://www.figma.com/design/1D6tnzXqWgnUC3spaAOELN/%F0%9F%A6%8A-MMDS-Components?node-id=15701-23',
  {
    props: {
      marginVertical: figma.boolean('withMargin (Figma only)', {
        true: 5,
        false: 0,
      }),
    },
    example: ({ marginVertical }) => (
      <SectionDivider marginVertical={marginVertical} />
    ),
  },
);
