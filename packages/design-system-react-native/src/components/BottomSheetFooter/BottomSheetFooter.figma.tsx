// import figma needs to remain as figma otherwise it breaks code connect
// eslint-disable-next-line import-x/no-named-as-default
import figma from '@figma/code-connect';
import React from 'react';

import { BottomSheetFooter } from './BottomSheetFooter';

import { ButtonsAlignment } from '.';

const BOTTOM_SHEET_FOOTER_URL =
  'https://www.figma.com/design/1D6tnzXqWgnUC3spaAOELN/%F0%9F%A6%8A-MMDS-Components?node-id=16571-1069';

// Both buttons visible
figma.connect(BottomSheetFooter, BOTTOM_SHEET_FOOTER_URL, {
  variant: {
    'show primaryButton (Figma Only)': true,
    'show secondaryButton (Figma Only)': true,
  },
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
      primaryButtonProps={{ children: primaryButton.children, onPress: () => undefined }}
      secondaryButtonProps={{ children: secondaryButton.children, onPress: () => undefined }}
    />
  ),
});

// Primary button only
figma.connect(BottomSheetFooter, BOTTOM_SHEET_FOOTER_URL, {
  variant: {
    'show primaryButton (Figma Only)': true,
    'show secondaryButton (Figma Only)': false,
  },
  props: {
    buttonsAlignment: figma.enum('buttonAlignment', {
      horizontal: ButtonsAlignment.Horizontal,
      vertical: ButtonsAlignment.Vertical,
    }),
    primaryButton: figma.nestedProps('primaryButton/_ButtonBase', {
      children: figma.string('label'),
    }),
  },
  example: ({ buttonsAlignment, primaryButton }) => (
    <BottomSheetFooter
      buttonsAlignment={buttonsAlignment}
      primaryButtonProps={{ children: primaryButton.children, onPress: () => undefined }}
    />
  ),
});

// Secondary button only
figma.connect(BottomSheetFooter, BOTTOM_SHEET_FOOTER_URL, {
  variant: {
    'show primaryButton (Figma Only)': false,
    'show secondaryButton (Figma Only)': true,
  },
  props: {
    buttonsAlignment: figma.enum('buttonAlignment', {
      horizontal: ButtonsAlignment.Horizontal,
      vertical: ButtonsAlignment.Vertical,
    }),
    secondaryButton: figma.nestedProps('secondaryButton/_ButtonBase', {
      children: figma.string('label'),
    }),
  },
  example: ({ buttonsAlignment, secondaryButton }) => (
    <BottomSheetFooter
      buttonsAlignment={buttonsAlignment}
      secondaryButtonProps={{ children: secondaryButton.children, onPress: () => undefined }}
    />
  ),
});
