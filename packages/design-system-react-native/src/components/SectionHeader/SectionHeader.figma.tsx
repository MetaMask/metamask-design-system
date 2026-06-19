// import figma needs to remain as figma otherwise it breaks code connect
// eslint-disable-next-line import-x/no-named-as-default
import figma from '@figma/code-connect';
import React from 'react';

import { SectionHeader } from './SectionHeader';

/**
 * React Native implementation of SectionHeader (`figma.connect` for Figma Dev Mode).
 *
 * [MMDS SectionHeader in Figma](https://www.figma.com/design/1D6tnzXqWgnUC3spaAOELN/%F0%9F%A6%8A-MMDS-Components?node-id=9624-8419)
 *
 * Root Figma props: `title`, `startAccessory`, `titleAccessory`, `endAccessory`,
 * `variant (Figma only)`. Property names must match Dev Mode exactly.
 *
 * - **`variant (Figma only)`** is visual-only in Figma; `SectionHeader` has no matching prop.
 * - **`startAccessory`**, **`titleAccessory`**, and **`endAccessory`** booleans render nested
 *   connected child snippets via `figma.children()` (`Icon` and `Tag` are connected separately).
 */
figma.connect(
  SectionHeader,
  'https://www.figma.com/design/1D6tnzXqWgnUC3spaAOELN/%F0%9F%A6%8A-MMDS-Components?node-id=9624-8419',
  {
    props: {
      title: figma.string('title'),
      variant: figma.enum('variant (Figma only)', {
        default: 'default',
        tag: 'tag',
      }),
      startAccessory: figma.boolean('startAccessory', {
        true: figma.children('startAccessory'),
        false: undefined,
      }),
      titleAccessory: figma.boolean('titleAccessory', {
        true: figma.children('titleAccessory'),
        false: undefined,
      }),
      endAccessory: figma.boolean('endAccessory', {
        true: figma.children('endAccessory'),
        false: undefined,
      }),
    },
    example: ({
      title,
      variant: _figmaVariant,
      startAccessory,
      titleAccessory,
      endAccessory,
    }) => (
      <SectionHeader
        title={title}
        startAccessory={startAccessory}
        titleAccessory={titleAccessory}
        endAccessory={endAccessory}
      />
    ),
  },
);
