// import figma needs to remain as figma otherwise it breaks code connect
// eslint-disable-next-line import-x/no-named-as-default
import figma from '@figma/code-connect';
import React from 'react';

import { BottomSheetFooter } from '../BottomSheetFooter';
import { BottomSheetHeader } from '../BottomSheetHeader';
import { Box } from '../Box';
import { Text } from '../Text';

import { BottomSheetDialog } from './BottomSheetDialog';

figma.connect(
  BottomSheetDialog,
  'https://www.figma.com/design/1D6tnzXqWgnUC3spaAOELN/%F0%9F%A6%8A-MMDS-Components?node-id=16571-1745',
  {
    props: {
      isInteractable: figma.boolean('isInteractable'),
      hasHeader: figma.boolean('show BottomSheetHeader (Figma Only)'),
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
      hasFooter: figma.boolean('show BottomSheetFooter (Figma Only)'),
    },
    example: ({ isInteractable, hasHeader, header, hasFooter }) => (
      <BottomSheetDialog isInteractable={isInteractable}>
        {hasHeader ? (
          <BottomSheetHeader onBack={header.onBack} onClose={header.onClose}>
            {header.title}
          </BottomSheetHeader>
        ) : null}
        <Box twClassName="p-4">
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </Box>
        {hasFooter ? (
          <BottomSheetFooter
            secondaryButtonProps={{
              children: 'Cancel',
              onPress: () => undefined,
            }}
            primaryButtonProps={{
              children: 'Confirm',
              onPress: () => undefined,
            }}
          />
        ) : null}
      </BottomSheetDialog>
    ),
  },
);
