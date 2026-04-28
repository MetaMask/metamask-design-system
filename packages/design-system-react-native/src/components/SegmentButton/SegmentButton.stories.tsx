import { SegmentButtonVariant } from '@metamask/design-system-shared';
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import type { Meta, StoryObj } from '@storybook/react-native';
import type { ViewProps } from 'react-native';
import { View } from 'react-native';

import { Icon, IconName, IconSize } from '../Icon';

import { SegmentButton } from './SegmentButton';
import type { SegmentButtonProps } from './SegmentButton.types';

const noopPress = () => undefined;

const meta: Meta<SegmentButtonProps> = {
  title: 'Components/SegmentButton',
  component: SegmentButton,
  argTypes: {
    variant: {
      control: 'select',
      options: Object.values(SegmentButtonVariant),
    },
    isSelected: {
      control: 'boolean',
    },
    isDisabled: {
      control: 'boolean',
    },
    isLoading: {
      control: 'boolean',
    },
  },
};

export default meta;

const SegmentButtonStoryWrapper: React.FC<ViewProps> = ({
  children,
  ...props
}) => {
  const tw = useTailwind();
  return (
    <View {...props} style={[tw`flex-row flex-wrap gap-2 p-4`, props.style]}>
      {children}
    </View>
  );
};

type Story = StoryObj<SegmentButtonProps>;

export const Default: Story = {
  args: {
    children: 'Segment',
    variant: SegmentButtonVariant.Primary,
    isSelected: true,
    isDisabled: false,
    isLoading: false,
    onPress: noopPress,
  },
  render: (args) => (
    <SegmentButtonStoryWrapper>
      <SegmentButton {...args} />
    </SegmentButtonStoryWrapper>
  ),
};

export const Variant: Story = {
  render: () => (
    <SegmentButtonStoryWrapper>
      <SegmentButton
        variant={SegmentButtonVariant.Primary}
        isSelected
        children="Primary selected"
        onPress={noopPress}
      />
      <SegmentButton
        variant={SegmentButtonVariant.Primary}
        isSelected={false}
        children="Primary unselected"
        onPress={noopPress}
      />
      <SegmentButton
        variant={SegmentButtonVariant.Secondary}
        isSelected
        children="Secondary selected"
        onPress={noopPress}
      />
      <SegmentButton
        variant={SegmentButtonVariant.Secondary}
        isSelected={false}
        children="Secondary unselected"
        onPress={noopPress}
      />
    </SegmentButtonStoryWrapper>
  ),
};

export const IsSelected: Story = {
  render: () => (
    <SegmentButtonStoryWrapper>
      <SegmentButton
        variant={SegmentButtonVariant.Primary}
        isSelected
        children="Selected"
        onPress={noopPress}
      />
      <SegmentButton
        variant={SegmentButtonVariant.Primary}
        isSelected={false}
        children="Unselected"
        onPress={noopPress}
      />
    </SegmentButtonStoryWrapper>
  ),
};

export const IsDisabled: Story = {
  render: () => (
    <SegmentButtonStoryWrapper>
      <SegmentButton
        variant={SegmentButtonVariant.Primary}
        children="Enabled"
        onPress={noopPress}
      />
      <SegmentButton
        variant={SegmentButtonVariant.Primary}
        isDisabled
        children="Disabled"
        onPress={noopPress}
      />
    </SegmentButtonStoryWrapper>
  ),
};

export const IsLoading: Story = {
  render: () => (
    <SegmentButtonStoryWrapper>
      <SegmentButton
        variant={SegmentButtonVariant.Primary}
        isSelected
        isLoading
        children="Loading"
        onPress={noopPress}
      />
    </SegmentButtonStoryWrapper>
  ),
};

export const StartAccessory: Story = {
  render: () => (
    <SegmentButtonStoryWrapper>
      <SegmentButton
        variant={SegmentButtonVariant.Secondary}
        isSelected={false}
        startIconName={IconName.Search}
        startIconProps={{ testID: 'segment-start-icon' }}
        children="With icon"
        onPress={noopPress}
      />
      <SegmentButton
        variant={SegmentButtonVariant.Primary}
        isSelected={false}
        startAccessory={<Icon name={IconName.Wallet} size={IconSize.Sm} />}
        children="Custom start"
        onPress={noopPress}
      />
    </SegmentButtonStoryWrapper>
  ),
};
