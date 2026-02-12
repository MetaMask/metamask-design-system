// Third party dependencies.
import React, { useState } from 'react';

// External dependencies.

// Internal dependencies.
import { Box, BoxAlignItems, BoxJustifyContent } from '../../Box';
import { Button, ButtonVariant } from '../../Button';
import { Text } from '../../Text';
import BottomSheetFooter from '../BottomSheetFooter';
import BottomSheetHeader from '../BottomSheetHeader';

import BottomSheet from './BottomSheet';
import { BottomSheetProps, BottomSheetRef } from './BottomSheet.types';

const BottomSheetMeta = {
  title: 'Components/BottomSheets/BottomSheet',
  component: BottomSheet,
  argTypes: {
    isInteractable: {
      control: { type: 'boolean' },
      defaultValue: true,
    },
  },
};
export default BottomSheetMeta;

export const Default = {
  render: (
    args: JSX.IntrinsicAttributes &
      BottomSheetProps &
      React.RefAttributes<BottomSheetRef>,
  ) => {
    const [isVisible, setIsVisible] = useState(false);

    const openBottomSheet = () => setIsVisible(true);
    const closeBottomSheet = () => setIsVisible(false);
    return (
      <>
        <Button
          variant={ButtonVariant.Primary}
          onPress={openBottomSheet}
          twClassName="mb-4"
        >
          Open BottomSheet
        </Button>
        {isVisible && (
          <BottomSheet
            {...args}
            onClose={closeBottomSheet}
            shouldNavigateBack={false}
          >
            <BottomSheetHeader
              onClose={closeBottomSheet}
              onBack={closeBottomSheet}
            >
              BottomSheetHeader
            </BottomSheetHeader>
            <Box
              alignItems={BoxAlignItems.Center}
              justifyContent={BoxJustifyContent.Center}
              twClassName="h-20"
            >
              <Text>
                BottomSheetContent: Lorem ipsum dolor sit amet, consectetur
                adipiscing elit.
              </Text>
            </Box>
            <BottomSheetFooter
              buttonPropsArray={[
                {
                  children: 'Cancel',
                  variant: ButtonVariant.Secondary,
                  onPress: closeBottomSheet,
                },
                {
                  children: 'Confirm',
                  variant: ButtonVariant.Primary,
                  onPress: closeBottomSheet,
                },
              ]}
            />
            {/* TODO: This is a hack to make the bottom sheet visible */}
            <Box twClassName="h-35" />
          </BottomSheet>
        )}
      </>
    );
  },
};
