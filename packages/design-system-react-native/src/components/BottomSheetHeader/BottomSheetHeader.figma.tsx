// import figma needs to remain as figma otherwise it breaks code connect
// eslint-disable-next-line import-x/no-named-as-default
import figma from '@figma/code-connect';
import React from 'react';

import { BottomSheetHeader } from './BottomSheetHeader';

figma.connect(
  BottomSheetHeader,
  'https://www.figma.com/design/1D6tnzXqWgnUC3spaAOELN/%F0%9F%A6%8A-MMDS-Components?node-id=16572-21288',
  {
    props: {
      children: figma.string('title'),
      onBack: figma.boolean('onBack', {
        true: () => undefined,
        false: undefined,
      }),
      onClose: figma.boolean('onClose', {
        true: () => undefined,
        false: undefined,
      }),
    },
    example: ({ children, onBack, onClose }) => (
      <BottomSheetHeader onBack={onBack} onClose={onClose}>
        {children}
      </BottomSheetHeader>
    ),
  },
);
