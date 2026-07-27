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

const headerProps = {
  title: figma.string('title'),
  onBack: figma.boolean('onBack', { true: () => undefined, false: undefined }),
  onClose: figma.boolean('onClose', {
    true: () => undefined,
    false: undefined,
  }),
};

const footerNestedProps = {
  primaryButton: figma.nestedProps(
    'childrenWrapper/primaryButton/_ButtonBase',
    {
      children: figma.string('label'),
    },
  ),
  secondaryButton: figma.nestedProps(
    'childrenWrapper/secondaryButton/_ButtonBase',
    {
      children: figma.string('label'),
    },
  ),
};

// Header shown, Footer shown
figma.connect(BottomSheetDialog, FIGMA_URL, {
  variant: {
    'show BottomSheetHeader (Figma Only)': true,
    'show BottomSheetFooter (Figma Only)': true,
  },
  props: {
    isInteractable: figma.boolean('isInteractable'),
    header: figma.nestedProps('BottomSheetHeader', headerProps),
    footer: figma.nestedProps('BottomSheetFooter', footerNestedProps),
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
      <BottomSheetFooter
        secondaryButtonProps={{
          children: footer.secondaryButton.children,
          onPress: () => undefined,
        }}
        primaryButtonProps={{
          children: footer.primaryButton.children,
          onPress: () => undefined,
        }}
      />
    </BottomSheetDialog>
  ),
});

// Header shown, Footer hidden
figma.connect(BottomSheetDialog, FIGMA_URL, {
  variant: {
    'show BottomSheetHeader (Figma Only)': true,
    'show BottomSheetFooter (Figma Only)': false,
  },
  props: {
    isInteractable: figma.boolean('isInteractable'),
    header: figma.nestedProps('BottomSheetHeader', headerProps),
  },
  example: ({ isInteractable, header }) => (
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
    </BottomSheetDialog>
  ),
});

// Header hidden, Footer shown
figma.connect(BottomSheetDialog, FIGMA_URL, {
  variant: {
    'show BottomSheetHeader (Figma Only)': false,
    'show BottomSheetFooter (Figma Only)': true,
  },
  props: {
    isInteractable: figma.boolean('isInteractable'),
    footer: figma.nestedProps('BottomSheetFooter', footerNestedProps),
  },
  example: ({ isInteractable, footer }) => (
    <BottomSheetDialog isInteractable={isInteractable}>
      <Box twClassName="p-4">
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
      </Box>
      <BottomSheetFooter
        secondaryButtonProps={{
          children: footer.secondaryButton.children,
          onPress: () => undefined,
        }}
        primaryButtonProps={{
          children: footer.primaryButton.children,
          onPress: () => undefined,
        }}
      />
    </BottomSheetDialog>
  ),
});

// Header hidden, Footer hidden
figma.connect(BottomSheetDialog, FIGMA_URL, {
  variant: {
    'show BottomSheetHeader (Figma Only)': false,
    'show BottomSheetFooter (Figma Only)': false,
  },
  props: {
    isInteractable: figma.boolean('isInteractable'),
  },
  example: ({ isInteractable }) => (
    <BottomSheetDialog isInteractable={isInteractable}>
      <Box twClassName="p-4">
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
      </Box>
    </BottomSheetDialog>
  ),
});
