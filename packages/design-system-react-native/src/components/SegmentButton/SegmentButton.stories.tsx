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
        onPress={noopPress}
      >
        Primary / selected
      </SegmentButton>
      <SegmentButton
        variant={SegmentButtonVariant.Primary}
        isSelected={false}
        onPress={noopPress}
      >
        Primary / unselected
      </SegmentButton>
      <SegmentButton
        variant={SegmentButtonVariant.Secondary}
        isSelected
        onPress={noopPress}
      >
        Secondary / selected
      </SegmentButton>
      <SegmentButton
        variant={SegmentButtonVariant.Secondary}
        isSelected={false}
        onPress={noopPress}
      >
        Secondary / unselected
      </SegmentButton>
    </SegmentButtonStoryWrapper>
  ),
};

export const IsSelected: Story = {
  render: () => (
    <SegmentButtonStoryWrapper>
      <SegmentButton
        variant={SegmentButtonVariant.Primary}
        isSelected
        onPress={noopPress}
      >
        Selected
      </SegmentButton>
      <SegmentButton
        variant={SegmentButtonVariant.Primary}
        isSelected={false}
        onPress={noopPress}
      >
        Unselected
      </SegmentButton>
    </SegmentButtonStoryWrapper>
  ),
};

export const IsDisabled: Story = {
  render: () => (
    <SegmentButtonStoryWrapper>
      <SegmentButton variant={SegmentButtonVariant.Primary} onPress={noopPress}>
        Enabled
      </SegmentButton>
      <SegmentButton
        variant={SegmentButtonVariant.Primary}
        isDisabled
        onPress={noopPress}
      >
        Disabled
      </SegmentButton>
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
        onPress={noopPress}
      >
        Loading
      </SegmentButton>
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
        onPress={noopPress}
      >
        With icon
      </SegmentButton>
      <SegmentButton
        variant={SegmentButtonVariant.Primary}
        isSelected={false}
        startAccessory={<Icon name={IconName.Wallet} size={IconSize.Sm} />}
        onPress={noopPress}
      >
        Custom start
      </SegmentButton>
    </SegmentButtonStoryWrapper>
  ),
};
