import { useTailwind } from '@metamask/design-system-twrnc-preset';
import type { Meta, StoryObj } from '@storybook/react-native';
import { View } from 'react-native';

import { ButtonIconSize } from '../../types';
import { IconName } from '../Icon';
import ButtonIcon from './ButtonIcon';
import { DEFAULT_BUTTONICON_PROPS } from './ButtonIcon.constants';
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
    size: DEFAULT_BUTTONICON_PROPS.size,
    iconName: DEFAULT_BUTTONICON_PROPS.iconName,
    isDisabled: DEFAULT_BUTTONICON_PROPS.isDisabled,
    isInverse: DEFAULT_BUTTONICON_PROPS.isInverse,
    isFloating: DEFAULT_BUTTONICON_PROPS.isInverse,
  },
  render: (args) => <ButtonIconStory {...args} />,
};

export const Sizes: Story = {
  render: () => (
    <View style={{ gap: 8 }}>
      {Object.values(ButtonIconSize).map((size) => (
        <View key={size}>
          <ButtonIconStory
            iconName={DEFAULT_BUTTONICON_PROPS.iconName}
            size={size}
          />
        </View>
      ))}
    </View>
  ),
};

export const isDisabled: Story = {
  render: () => (
    <ButtonIconStory iconName={DEFAULT_BUTTONICON_PROPS.iconName} isDisabled />
  ),
};

export const isInverse: Story = {
  render: () => (
    <ButtonIconStory iconName={DEFAULT_BUTTONICON_PROPS.iconName} isInverse />
  ),
};

export const isFloating: Story = {
  render: () => (
    <ButtonIconStory iconName={DEFAULT_BUTTONICON_PROPS.iconName} isFloating />
  ),
};
