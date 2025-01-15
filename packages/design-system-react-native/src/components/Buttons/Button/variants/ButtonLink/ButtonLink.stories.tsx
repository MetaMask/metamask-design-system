import { useTailwind } from '@metamask/design-system-twrnc-preset';
import type { Meta, StoryObj } from '@storybook/react-native';
import { View } from 'react-native';

import { IconName } from '../../../../Icons/Icon';
import { ButtonSize } from '../../Button.types';
import ButtonLink from './ButtonLink';
import { DEFAULT_BUTTONLINK_PROPS } from './ButtonLink.constants';
import type { ButtonLinkProps } from './ButtonLink.types';

const meta: Meta<ButtonLinkProps> = {
  title: 'Components/Button Link',
  component: ButtonLink,
  argTypes: {
    children: {
      control: 'text',
    },
    size: {
      control: 'select',
      options: ButtonSize,
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
    isFullWidth: {
      control: 'boolean',
    },
    isPressed: {
      control: 'boolean',
    },
    isDanger: {
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

type Story = StoryObj<ButtonLinkProps>;
const ButtonLinkStory: React.FC<ButtonLinkProps> = ({
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
      <ButtonLink isInverse={isInverse} {...props} />
    </View>
  );
};

export const Default: Story = {
  args: {
    children: 'Sample ButtonLink Text',
    size: DEFAULT_BUTTONLINK_PROPS.size,
    isLoading: DEFAULT_BUTTONLINK_PROPS.isLoading,
    loadingText: DEFAULT_BUTTONLINK_PROPS.loadingText,
    startIconName: IconName.Add,
    endIconName: IconName.AddSquare,
    isDisabled: DEFAULT_BUTTONLINK_PROPS.isDisabled,
    isFullWidth: DEFAULT_BUTTONLINK_PROPS.isFullWidth,
  },
  render: (args) => <ButtonLinkStory {...args} />,
};

export const Sizes: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      <ButtonLink size={ButtonSize.Sm}>ButtonSize Sm</ButtonLink>
      <ButtonLink size={ButtonSize.Md}>ButtonSize Md</ButtonLink>
      <ButtonLink size={ButtonSize.Lg}>ButtonSize Lg (Default)</ButtonLink>
    </View>
  ),
};

export const IsLoading: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      <ButtonLink isLoading>ButtonLink</ButtonLink>
      <ButtonLink isLoading loadingText="With Loading Text">
        ButtonLink
      </ButtonLink>
    </View>
  ),
};

export const WithStartAccessory: Story = {
  render: () => (
    <ButtonLink startIconName={IconName.Add}>ButtonLink</ButtonLink>
  ),
};

export const WithEndAccessory: Story = {
  render: () => <ButtonLink endIconName={IconName.Add}>ButtonLink</ButtonLink>,
};

export const WithStartAndEndAccessory: Story = {
  render: () => (
    <ButtonLink startIconName={IconName.Add} endIconName={IconName.AddSquare}>
      ButtonLink
    </ButtonLink>
  ),
};

export const isDisabled: Story = {
  render: () => <ButtonLink isDisabled>ButtonLink</ButtonLink>,
};

export const isFullWidth: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      <ButtonLink>ButtonLink</ButtonLink>
      <ButtonLink isFullWidth>ButtonLink</ButtonLink>
    </View>
  ),
};

export const WithLongText: Story = {
  render: () => (
    <ButtonLink startIconName={IconName.Add} endIconName={IconName.AddSquare}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </ButtonLink>
  ),
};
