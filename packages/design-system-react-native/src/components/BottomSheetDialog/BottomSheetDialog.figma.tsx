// import figma needs to remain as figma otherwise it breaks code connect
// eslint-disable-next-line import-x/no-named-as-default
import figma from '@figma/code-connect';
import React from 'react';

import { BottomSheetFooter } from '../BottomSheetFooter';
import { BottomSheetHeader } from '../BottomSheetHeader';

import { BottomSheetDialog } from './BottomSheetDialog';

figma.connect(
  BottomSheetDialog,
  'https://www.figma.com/design/1D6tnzXqWgnUC3spaAOELN/%F0%9F%A6%8A-MMDS-Components?node-id=16571-1745',
  {
    props: {
      isInteractable: figma.boolean('isInteractable'),
      // figma.boolean + figma.nestedProps reflects live Figma values when shown;
      // the false fallback keeps property access safe without optional chaining
      // (Code Connect parser rejects ?.)
      header: figma.boolean('show BottomSheetHeader (Figma Only)', {
        true: figma.nestedProps('BottomSheetHeader', {
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
        false: { title: undefined, onBack: undefined, onClose: undefined },
      }),
      // nestedProps cannot be nested — use the full layer path from the
      // BottomSheetDialog root to reach the button instances inside BottomSheetFooter
      children: figma.slot('BottomSheetContent').connectedInstances,
      primaryButton: figma.nestedProps(
        'BottomSheetFooter/childrenWrapper/primaryButton/_ButtonBase',
        { children: figma.string('label') },
      ),
      secondaryButton: figma.nestedProps(
        'BottomSheetFooter/childrenWrapper/secondaryButton/_ButtonBase',
        { children: figma.string('label') },
      ),
    },
    example: ({ isInteractable, header, children, primaryButton, secondaryButton }) => (
      <BottomSheetDialog isInteractable={isInteractable}>
        {/* Remove if BottomSheetHeader layer is not visible — Code Connect limitation */}
        <BottomSheetHeader onBack={header.onBack} onClose={header.onClose}>
          {header.title}
        </BottomSheetHeader>
        {children}
        {/* Remove if BottomSheetFooter layer is not visible — Code Connect limitation */}
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
      </BottomSheetDialog>
    ),
  },
);
