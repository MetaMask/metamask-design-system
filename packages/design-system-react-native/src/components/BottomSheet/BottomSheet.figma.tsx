// import figma needs to remain as figma otherwise it breaks code connect
// eslint-disable-next-line import-x/no-named-as-default
import figma from '@figma/code-connect';
import React from 'react';

import { BottomSheetFooter } from '../BottomSheetFooter';
import { BottomSheetHeader } from '../BottomSheetHeader';

import { BottomSheet } from './BottomSheet';

figma.connect(
  BottomSheet,
  'https://www.figma.com/design/1D6tnzXqWgnUC3spaAOELN/%F0%9F%A6%8A-MMDS-Components?node-id=16571-1026',
  {
    props: {
      isFullscreen: figma.boolean('isFullscreen'),
      header: figma.nestedProps('BottomSheetDialog/BottomSheetHeader', {
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
      // nestedProps cannot be nested — use full layer path from BottomSheet root
      primaryButton: figma.nestedProps(
        'BottomSheetDialog/BottomSheetFooter/childrenWrapper/primaryButton/_ButtonBase',
        { children: figma.string('label') },
      ),
      secondaryButton: figma.nestedProps(
        'BottomSheetDialog/BottomSheetFooter/childrenWrapper/secondaryButton/_ButtonBase',
        { children: figma.string('label') },
      ),
    },
    example: ({ isFullscreen, header, primaryButton, secondaryButton }) => (
      <BottomSheet isFullscreen={isFullscreen} onClose={() => undefined}>
        <BottomSheetHeader onBack={header.onBack} onClose={header.onClose}>
          {header.title}
        </BottomSheetHeader>
        {/* Add your custom content here */}
        {/* Remove BottomSheetFooter if not needed — Code Connect limitation */}
        <BottomSheetFooter
          secondaryButtonProps={{
            children: secondaryButton.children,
            onPress: () => undefined,
          }}
          primaryButtonProps={{
            children: primaryButton.children,
            onPress: () => undefined,
          }}
        />
      </BottomSheet>
    ),
  },
);
