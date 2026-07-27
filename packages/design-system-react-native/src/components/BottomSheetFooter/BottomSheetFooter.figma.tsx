// import figma needs to remain as figma otherwise it breaks code connect
// eslint-disable-next-line import-x/no-named-as-default
import figma from '@figma/code-connect';
import React from 'react';

import { BottomSheetFooter } from './BottomSheetFooter';

import { ButtonsAlignment } from '.';

figma.connect(
  BottomSheetFooter,
  'https://www.figma.com/design/1D6tnzXqWgnUC3spaAOELN/%F0%9F%A6%8A-MMDS-Components?node-id=16571-1069',
  {
    props: {
      buttonsAlignment: figma.enum('buttonAlignment', {
        horizontal: ButtonsAlignment.Horizontal,
        vertical: ButtonsAlignment.Vertical,
      }),
      // false fallback keeps .children safe without optional chaining (parser rejects ?.)
      primaryButton: figma.boolean('show primaryButton (Figma Only)', {
        true: figma.nestedProps('primaryButton/_ButtonBase', {
          children: figma.string('label'),
        }),
        false: { children: undefined },
      }),
      secondaryButton: figma.boolean('show secondaryButton (Figma Only)', {
        true: figma.nestedProps('secondaryButton/_ButtonBase', {
          children: figma.string('label'),
        }),
        false: { children: undefined },
      }),
    },
    example: ({ buttonsAlignment, primaryButton, secondaryButton }) => (
      <BottomSheetFooter
        buttonsAlignment={buttonsAlignment}
        primaryButtonProps={{
          children: primaryButton.children,
          onPress: () => undefined,
        }}
        secondaryButtonProps={{
          children: secondaryButton.children,
          onPress: () => undefined,
        }}
      />
    ),
  },
);
