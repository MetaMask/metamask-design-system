import { useTailwind } from '@metamask/design-system-twrnc-preset';
import type { Meta, StoryObj } from '@storybook/react-native';
import { View } from 'react-native';

import { IconName } from '../Icon';
import Text from '../Text';
import TextButton from './TextButton';
import { DEFAULT_TEXTBUTTON_PROPS } from './TextButton.constants';
import type { TextButtonProps } from './TextButton.types';

const meta: Meta<TextButtonProps> = {
  title: 'Components/TextButton',
  component: TextButton,
  argTypes: {
    children: {
      control: 'text',
    },
    isLoading: {
      control: 'boolean',
    },
    loadingText: {
      control: 'text',
    },
    startIconName: {
      control: 'select',
      options: IconName,
    },
    endIconName: {
      control: 'select',
      options: IconName,
    },
    isDisabled: {
      control: 'boolean',
    },
    isInverse: {
      control: 'boolean',
    },
    twClassName: {
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<TextButtonProps>;
const TextButtonStory: React.FC<TextButtonProps> = ({
  isInverse,
  ...props
}) => {
  const tw = useTailwind();
  return (
    <View
      style={[
        tw`${isInverse ? `bg-primary-default` : 'bg-background-default'}`,
      ]}
    >
      <TextButton isInverse={isInverse} {...props} />
    </View>
  );
};

export const Default: Story = {
  args: {
    children: 'Sample TextButton Text',
    isLoading: DEFAULT_TEXTBUTTON_PROPS.isLoading,
    loadingText: 'Loading',
    startIconName: IconName.Add,
    endIconName: IconName.AddSquare,
    isDisabled: DEFAULT_TEXTBUTTON_PROPS.isDisabled,
  },
  render: (args) => <TextButtonStory {...args} />,
};

export const IsLoading: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      <TextButton isLoading>TextButton</TextButton>
      <TextButton isLoading loadingText="With Loading Text">
        TextButton
      </TextButton>
    </View>
  ),
};

export const WithoutAccessories: Story = {
  render: () => <TextButton>TextButton</TextButton>,
};

export const WithStartAccessory: Story = {
  render: () => (
    <TextButton startIconName={IconName.Add}>TextButton</TextButton>
  ),
};

export const WithEndAccessory: Story = {
  render: () => <TextButton endIconName={IconName.Add}>TextButton</TextButton>,
};

export const WithStartAndEndAccessory: Story = {
  render: () => (
    <TextButton startIconName={IconName.Add} endIconName={IconName.AddSquare}>
      TextButton
    </TextButton>
  ),
};

export const isDisabled: Story = {
  render: () => <TextButton isDisabled>TextButton</TextButton>,
};

export const InlineWithText: Story = {
  render: () => (
    <Text>
      Pre TextButton text
      <TextButton startIconName={IconName.Add} endIconName={IconName.AddSquare}>
        Text Button
      </TextButton>
      Post TextButton text
    </Text>
  ),
};
