// src/components/BottomSheet/BottomSheet.stories.tsx
import React, { useRef } from 'react';
import type { Meta, Story } from '@storybook/react-native';
import { View, Button, Text } from 'react-native';

import BottomSheet, { BottomSheetHandle } from './BottomSheet';
import type { BottomSheetWrapperProps } from './BottomSheet';

export default {
  title: 'Components/BottomSheet',
  component: BottomSheet,
} as Meta<BottomSheetWrapperProps>;

const Template: Story<BottomSheetWrapperProps> = (args) => {
  const sheetRef = useRef<BottomSheetHandle>(null);
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <Button title="Open Sheet" onPress={() => sheetRef.current?.expand()} />
      <BottomSheet ref={sheetRef} {...args}>
        <View style={{ padding: 16 }}>
          <Text>Hello from the bottom sheet 👋</Text>
        </View>
      </BottomSheet>
    </View>
  );
};

export const Default = Template.bind({});
Default.args = {
  snapPoints: ['25%', '50%', '75%'],
  index: 0,
};

export const OpenByDefault = Template.bind({});
OpenByDefault.args = {
  snapPoints: ['20%', '40%', '80%'],
  index: 2,
};
