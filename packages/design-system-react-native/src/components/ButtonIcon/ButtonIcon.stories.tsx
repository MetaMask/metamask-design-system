import { useTailwind } from '@metamask/design-system-twrnc-preset';
import type { Meta, StoryObj } from '@storybook/react-native';
import { View } from 'react-native';

import { ButtonIconSize } from '../../types';
import { IconName } from '../Icon';
import ButtonIcon from './ButtonIcon';
import type { ButtonIconProps } from './ButtonIcon.types';

const meta: Meta<ButtonIconProps> = {
  title: 'Components/Button Icon',
  component: ButtonIcon,
  argTypes: {
    size: {
      control: 'select',
      options: ButtonIconSize,
    },
    iconName: {
      control: 'select',
      options: IconName,
    },
    isDisabled: {
      control: 'boolean',
    },
    isInverse: {
      control: 'boolean',
    },
    isFloating: {
      control: 'boolean',
    },
    twClassName: {
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<ButtonIconProps>;
const ButtonIconStory: React.FC<ButtonIconProps> = ({
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
      <ButtonIcon isInverse={isInverse} {...props} />
    </View>
  );
};

export const Default: Story = {
  args: {
    size: ButtonIconSize.Md,
    iconName: IconName.Close,
    isDisabled: false,
    isInverse: false,
    isFloating: false,
  },
  render: (args) => <ButtonIconStory {...args} />,
};

export const Sizes: Story = {
  render: () => (
    <View style={{ gap: 8 }}>
      {Object.values(ButtonIconSize).map((size) => (
        <View key={size}>
          <ButtonIconStory iconName={IconName.Close} size={size} />
        </View>
      ))}
    </View>
  ),
};

export const isDisabled: Story = {
  render: () => <ButtonIconStory iconName={IconName.Close} isDisabled />,
};

export const isInverse: Story = {
  render: () => <ButtonIconStory iconName={IconName.Close} isInverse />,
};

export const isFloating: Story = {
  render: () => <ButtonIconStory iconName={IconName.Close} isFloating />,
};
