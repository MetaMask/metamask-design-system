import React from 'react';
import { Button, ButtonVariant } from '@metamask/design-system-react-native';
import { View } from 'react-native';

export default {
  title: 'Components/Button',
  component: Button,
};

export const Primary = () => (
  <View style={{ padding: 16 }}>
    <Button variant={ButtonVariant.Primary} onPress={() => {}}>
      Primary Button
    </Button>
  </View>
);

export const Secondary = () => (
  <View style={{ padding: 16 }}>
    <Button variant={ButtonVariant.Secondary} onPress={() => {}}>
      Secondary Button
    </Button>
  </View>
);
