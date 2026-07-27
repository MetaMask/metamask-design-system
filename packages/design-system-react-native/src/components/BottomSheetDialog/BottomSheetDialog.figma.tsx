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
      header: figma.boolean('show BottomSheetHeader (Figma Only)', {
        true: (
          <BottomSheetHeader onClose={() => undefined}>
            Header Title
          </BottomSheetHeader>
        ),
        false: undefined,
      }),
      footer: figma.boolean('show BottomSheetFooter (Figma Only)', {
        true: (
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
        ),
        false: undefined,
      }),
    },
    example: ({ isInteractable, header, footer }) => (
      <BottomSheetDialog isInteractable={isInteractable}>
        {header}
        <Box twClassName="p-4">
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </Box>
        {footer}
      </BottomSheetDialog>
    ),
  },
);
