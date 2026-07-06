import { TextVariant } from '@metamask/design-system-shared';
import type { Meta, StoryObj } from '@storybook/react-native';
import { View } from 'react-native';

import { Text } from '../Text';

import { TextButton } from './TextButton';
import type { TextButtonProps } from './TextButton.types';

const meta: Meta<TextButtonProps> = {
  title: 'Components/TextButton',
  component: TextButton,
  argTypes: {
    children: {
      control: 'text',
    },
    variant: {
      control: 'select',
      options: Object.values(TextVariant),
    },
    onPress: { action: 'pressed' },
    suppressHighlighting: {
      control: 'boolean',
    },
  },
};

export default meta;

type Story = StoryObj<TextButtonProps>;

export const Default: Story = {
  args: {
    children: 'Sample TextButton',
    onPress: () => undefined,
    suppressHighlighting: true,
  },
};

export const Variant: Story = {
  render: () => (
    <View style={{ gap: 8 }}>
      <TextButton variant={TextVariant.BodyXs} onPress={() => undefined}>
        BodyXs
      </TextButton>
      <TextButton variant={TextVariant.BodySm} onPress={() => undefined}>
        BodySm
      </TextButton>
      <TextButton variant={TextVariant.BodyMd} onPress={() => undefined}>
        BodyMd
      </TextButton>
      <TextButton variant={TextVariant.BodyLg} onPress={() => undefined}>
        BodyLg
      </TextButton>
    </View>
  ),
};

export const InlineWithText: Story = {
  render: () => (
    <Text>
      Pre TextButton text{' '}
      <TextButton onPress={() => undefined}>Text Button</TextButton> Post
      TextButton text
    </Text>
  ),
};
