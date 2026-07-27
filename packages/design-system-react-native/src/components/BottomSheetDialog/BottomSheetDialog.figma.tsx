// import figma needs to remain as figma otherwise it breaks code connect
// eslint-disable-next-line import-x/no-named-as-default
import figma from '@figma/code-connect';
import React from 'react';

import { BottomSheetFooter } from '../BottomSheetFooter';
import { BottomSheetHeader } from '../BottomSheetHeader';
import { Box } from '../Box';
import { Text } from '../Text';

import { BottomSheetDialog } from './BottomSheetDialog';

const FIGMA_URL =
  'https://www.figma.com/design/1D6tnzXqWgnUC3spaAOELN/%F0%9F%A6%8A-MMDS-Components?node-id=16571-1745';

const footerProps = {
  secondaryButtonProps: {
    children: 'Cancel',
    onPress: () => undefined,
  },
  primaryButtonProps: {
    children: 'Confirm',
    onPress: () => undefined,
  },
};

// Header shown — maps nested title/onBack/onClose from BottomSheetHeader
figma.connect(BottomSheetDialog, FIGMA_URL, {
  variant: { 'show BottomSheetHeader (Figma Only)': true },
  props: {
    isInteractable: figma.boolean('isInteractable'),
    header: figma.nestedProps('BottomSheetHeader', {
      title: figma.string('title'),
      onBack: figma.boolean('onBack', {
        true: () => undefined,
        false: undefined,
      }),
      onClose: figma.boolean('onClose', {
        true: () => undefined,
        false: undefined,
      }),
    }),
    footer: figma.boolean('show BottomSheetFooter (Figma Only)', {
      true: <BottomSheetFooter {...footerProps} />,
      false: undefined,
    }),
  },
  example: ({ isInteractable, header, footer }) => (
    <BottomSheetDialog isInteractable={isInteractable}>
      <BottomSheetHeader onBack={header.onBack} onClose={header.onClose}>
        {header.title}
      </BottomSheetHeader>
      <Box twClassName="p-4">
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
      </Box>
      {footer}
    </BottomSheetDialog>
  ),
});

// Header hidden — no BottomSheetHeader in snippet
figma.connect(BottomSheetDialog, FIGMA_URL, {
  variant: { 'show BottomSheetHeader (Figma Only)': false },
  props: {
    isInteractable: figma.boolean('isInteractable'),
    footer: figma.boolean('show BottomSheetFooter (Figma Only)', {
      true: <BottomSheetFooter {...footerProps} />,
      false: undefined,
    }),
  },
  example: ({ isInteractable, footer }) => (
    <BottomSheetDialog isInteractable={isInteractable}>
      <Box twClassName="p-4">
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
      </Box>
      {footer}
    </BottomSheetDialog>
  ),
});
