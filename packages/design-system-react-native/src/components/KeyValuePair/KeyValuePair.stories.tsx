import { KeyValuePairOrientation } from '@metamask/design-system-shared';
import type { Meta, StoryObj } from '@storybook/react-native';
import React, { Fragment } from 'react';

import { Box } from '../Box';
import { Icon, IconName, IconSize } from '../Icon';
import { Text } from '../Text';
import { KeyValuePair } from './KeyValuePair';
import type { KeyValuePairProps } from './KeyValuePair.types';

const meta: Meta<KeyValuePairProps> = {
  title: 'Components/KeyValuePair',
  component: KeyValuePair,
  argTypes: {
    keyLabel: { control: 'text' },
    value: { control: 'text' },
    orientation: {
      control: 'select',
      options: Object.keys(KeyValuePairOrientation),
      mapping: KeyValuePairOrientation,
    },
    keyStartAccessory: { control: false },
    keyEndAccessory: { control: false },
    valueStartAccessory: { control: false },
    valueEndAccessory: { control: false },
    keyEndButtonIconProps: { control: false },
    valueEndButtonIconProps: { control: false },
    keyProps: { control: 'object' },
    valueProps: { control: 'object' },
  },
};

export default meta;

type Story = StoryObj<KeyValuePairProps>;

const StoryWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => <Box padding={4}>{children}</Box>;

export const Default: Story = {
  args: {
    keyLabel: 'Network',
    value: 'Ethereum Mainnet',
    orientation: KeyValuePairOrientation.Horizontal,
  },
  render: (args) => (
    <StoryWrapper>
      <KeyValuePair {...args} />
    </StoryWrapper>
  ),
};

export const Orientation: Story = {
  render: () => (
    <StoryWrapper>
      <Box gap={6}>
        <KeyValuePair
          keyLabel="Horizontal"
          value="Key and value in a row with 16px gap"
          orientation={KeyValuePairOrientation.Horizontal}
          keyEndButtonIconProps={{
            iconName: IconName.Question,
            onPress: () => {},
          }}
          valueEndButtonIconProps={{
            iconName: IconName.Info,
            onPress: () => {},
          }}
        />
        <KeyValuePair
          keyLabel="Vertical"
          value="Key above, value below"
          orientation={KeyValuePairOrientation.Vertical}
          keyEndButtonIconProps={{
            iconName: IconName.Question,
            onPress: () => {},
          }}
          valueEndButtonIconProps={{
            iconName: IconName.Info,
            onPress: () => {},
          }}
        />
      </Box>
    </StoryWrapper>
  ),
};

export const Accessories: Story = {
  render: () => (
    <StoryWrapper>
      <KeyValuePair
        keyLabel="Amount"
        value="1.5 ETH"
        keyStartAccessory={<Icon name={IconName.Info} size={IconSize.Sm} />}
        keyEndButtonIconProps={{
          iconName: IconName.Question,
          onPress: () => {},
        }}
        valueStartAccessory={<Icon name={IconName.Wallet} size={IconSize.Sm} />}
        valueEndButtonIconProps={{
          iconName: IconName.Check,
          onPress: () => {},
        }}
      />
    </StoryWrapper>
  ),
};

export const EndButtonIcons: Story = {
  render: () => (
    <StoryWrapper>
      <KeyValuePair
        keyLabel="Label"
        value="Value"
        keyEndButtonIconProps={{
          iconName: IconName.Question,
          onPress: () => {},
        }}
        valueEndButtonIconProps={{
          iconName: IconName.Info,
          onPress: () => {},
        }}
      />
    </StoryWrapper>
  ),
};

export const CustomKeyValueReactNode: Story = {
  render: () => (
    <StoryWrapper>
      <KeyValuePair
        keyLabel={
          <Fragment>
            <Icon name={IconName.Key} size={IconSize.Xs} />
            <Text> Custom key (ReactNode)</Text>
          </Fragment>
        }
        value={<Text>Custom value (ReactNode)</Text>}
      />
    </StoryWrapper>
  ),
};
