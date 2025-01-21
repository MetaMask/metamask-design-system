import { useTailwind } from '@metamask/design-system-twrnc-preset';
import type { Meta, StoryObj } from '@storybook/react-native';
import { View } from 'react-native';

import { IconName, IconSize } from '../../Icon';
import ButtonIcon from './ButtonIcon';
import { DEFAULT_BUTTONICON_PROPS } from './ButtonIcon.constants';
import { ButtonIconVariant } from './ButtonIcon.types';
import type { ButtonIconProps } from './ButtonIcon.types';

const meta: Meta<ButtonIconProps> = {
  title: 'Components/Button Icon',
  component: ButtonIcon,
  argTypes: {
    variant: {
      control: 'select',
      options: ButtonIconVariant,
    },
    size: {
      control: 'select',
      options: IconSize,
    },
    isLoading: {
      control: 'boolean',
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
    variant: DEFAULT_BUTTONICON_PROPS.variant,
    size: DEFAULT_BUTTONICON_PROPS.size,
    isLoading: DEFAULT_BUTTONICON_PROPS.isLoading,
    iconName: IconName.Add,
    isDisabled: DEFAULT_BUTTONICON_PROPS.isDisabled,
    isInverse: DEFAULT_BUTTONICON_PROPS.isInverse,
  },
  render: (args) => <ButtonIconStory {...args} />,
};

export const Variants: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      <ButtonIcon variant={ButtonIconVariant.Primary} iconName={IconName.Add} />
      <ButtonIcon
        variant={ButtonIconVariant.Secondary}
        iconName={IconName.Add}
      />
    </View>
  ),
};

export const IsLoading: Story = {
  render: () => <ButtonIcon iconName={IconName.Add} isLoading />,
};

export const isDisabled: Story = {
  render: () => <ButtonIcon iconName={IconName.Add} isDisabled />,
};

export const isInverse: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      <ButtonIconStory
        variant={ButtonIconVariant.Primary}
        iconName={IconName.Add}
        isInverse
      />
      <ButtonIconStory
        variant={ButtonIconVariant.Secondary}
        iconName={IconName.Add}
        isInverse
      />
    </View>
  ),
};
