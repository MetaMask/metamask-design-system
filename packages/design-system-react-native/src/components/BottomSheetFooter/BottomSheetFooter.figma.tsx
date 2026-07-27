// import figma needs to remain as figma otherwise it breaks code connect
// eslint-disable-next-line import-x/no-named-as-default
import figma from '@figma/code-connect';
import React from 'react';

import { BottomSheetFooter } from './BottomSheetFooter';

import { ButtonsAlignment } from '.';

const FIGMA_URL =
  'https://www.figma.com/design/1D6tnzXqWgnUC3spaAOELN/%F0%9F%A6%8A-MMDS-Components?node-id=16571-1069';

figma.connect(BottomSheetFooter, FIGMA_URL, {
  variant: { 'variant (Figma only)': 'both' },
  props: {
    buttonsAlignment: figma.enum('buttonAlignment', {
      horizontal: ButtonsAlignment.Horizontal,
      vertical: ButtonsAlignment.Vertical,
    }),
    primaryButton: figma.nestedProps('primaryButton/_ButtonBase', {
      children: figma.string('label'),
    }),
    secondaryButton: figma.nestedProps('secondaryButton/_ButtonBase', {
      children: figma.string('label'),
    }),
  },
  example: ({ buttonsAlignment, primaryButton, secondaryButton }) => (
    <BottomSheetFooter
      buttonsAlignment={buttonsAlignment}
      secondaryButtonProps={{
        children: secondaryButton.children,
        onPress: () => undefined,
      }}
      primaryButtonProps={{
        children: primaryButton.children,
        onPress: () => undefined,
      }}
    />
  ),
});

figma.connect(BottomSheetFooter, FIGMA_URL, {
  variant: { 'variant (Figma only)': 'primary' },
  props: {
    primaryButton: figma.nestedProps('primaryButton/_ButtonBase', {
      children: figma.string('label'),
    }),
  },
  example: ({ primaryButton }) => (
    <BottomSheetFooter
      primaryButtonProps={{
        children: primaryButton.children,
        onPress: () => undefined,
      }}
    />
  ),
});

figma.connect(BottomSheetFooter, FIGMA_URL, {
  variant: { 'variant (Figma only)': 'secondary' },
  props: {
    secondaryButton: figma.nestedProps('secondaryButton/_ButtonBase', {
      children: figma.string('label'),
    }),
  },
  example: ({ secondaryButton }) => (
    <BottomSheetFooter
      secondaryButtonProps={{
        children: secondaryButton.children,
        onPress: () => undefined,
      }}
    />
  ),
});
