import { useTailwind } from '@metamask/design-system-twrnc-preset';
import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import { View } from 'react-native';

import { Button, ButtonVariant } from '../Button';
import { ButtonBaseSize } from '../ButtonBase';
import { Box } from '../Box';
import { Icon, IconName, IconSize } from '../Icon';

import { ListItemBase } from './ListItemBase';
import type { ListItemBaseProps } from './ListItemBase.types';

const meta: Meta<ListItemBaseProps> = {
  title: 'Components/ListItemBase',
  component: ListItemBase,
  args: {
    title: 'Label',
    subtitle: 'Secondary text',
    value: 'Value',
    supporting: 'Supporting text',
  },
  argTypes: {
    title: { control: 'text' },
    subtitle: { control: 'text' },
    value: { control: 'text' },
    supporting: { control: 'text' },
    titleProps: { control: 'object' },
    subtitleProps: { control: 'object' },
    valueProps: { control: 'object' },
    supportingProps: { control: 'object' },
    startAccessory: { control: false },
    titleStartAccessory: { control: false },
    titleEndAccessory: { control: false },
    subtitleStartAccessory: { control: false },
    subtitleEndAccessory: { control: false },
    valueStartAccessory: { control: false },
    valueEndAccessory: { control: false },
    supportingStartAccessory: { control: false },
    supportingEndAccessory: { control: false },
    twClassName: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<ListItemBaseProps>;

const StoryWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const tw = useTailwind();
  return <View style={tw`p-4`}>{children}</View>;
};

export const Default: Story = {
  render: (args) => (
    <StoryWrapper>
      <ListItemBase {...args} />
    </StoryWrapper>
  ),
};

export const Title: Story = {
  render: (args) => (
    <StoryWrapper>
      <ListItemBase {...args} title="Title only" />
    </StoryWrapper>
  ),
};

export const Subtitle: Story = {
  render: (args) => (
    <StoryWrapper>
      <ListItemBase
        {...args}
        title="Title"
        subtitle="Subtitle with secondary styling"
      />
    </StoryWrapper>
  ),
};

export const SubtitleAccessories: Story = {
  render: (args) => (
    <StoryWrapper>
      <ListItemBase
        {...args}
        title="Network"
        subtitle="Ethereum Mainnet"
        subtitleStartAccessory={<Icon name={IconName.Info} />}
        subtitleEndAccessory={<Icon name={IconName.Question} />}
        value="1.234 ETH"
      />
    </StoryWrapper>
  ),
};

export const Value: Story = {
  render: (args) => (
    <StoryWrapper>
      <ListItemBase {...args} title="Amount" value="$10.00" />
    </StoryWrapper>
  ),
};

export const Supporting: Story = {
  render: (args) => (
    <StoryWrapper>
      <ListItemBase
        {...args}
        title="Network"
        value="1.234 ETH"
        supporting="~$2,500"
      />
    </StoryWrapper>
  ),
};

export const StartAccessory: Story = {
  render: (args) => (
    <StoryWrapper>
      <ListItemBase
        {...args}
        startAccessory={
          <Box twClassName="w-4 h-4 rounded-full bg-primary-default" />
        }
        title="With start icon"
        value="Value"
      />
    </StoryWrapper>
  ),
};

export const TitleAccessories: Story = {
  render: (args) => (
    <StoryWrapper>
      <ListItemBase
        {...args}
        titleStartAccessory={<Icon name={IconName.Info} />}
        titleEndAccessory={<Icon name={IconName.Question} />}
        title="Title with accessories"
        value="Value"
      />
    </StoryWrapper>
  ),
};

export const ValueAccessories: Story = {
  render: (args) => (
    <StoryWrapper>
      <ListItemBase
        {...args}
        title="Label"
        valueStartAccessory={<Icon name={IconName.Check} />}
        value="100"
        valueEndAccessory={<Icon name={IconName.Info} />}
      />
    </StoryWrapper>
  ),
};

export const SupportingAccessories: Story = {
  render: (args) => (
    <StoryWrapper>
      <ListItemBase
        {...args}
        title="Amount"
        value="$10.00"
        supporting="~$0.50 fee"
        supportingStartAccessory={<Icon name={IconName.Info} />}
        supportingEndAccessory={<Icon name={IconName.Question} />}
      />
    </StoryWrapper>
  ),
};

export const SupportingWithButtonSecondary: Story = {
  render: (args) => (
    <StoryWrapper>
      <ListItemBase
        {...args}
        value={undefined}
        startAccessory={
          <Box twClassName="w-10 h-10 rounded-full bg-primary-alternative items-center justify-center">
            <Icon name={IconName.AttachMoney} size={IconSize.Sm} />
          </Box>
        }
        supporting={
          <Button
            variant={ButtonVariant.Secondary}
            size={ButtonBaseSize.Sm}
            onPress={() => {}}
          >
            3% bonus
          </Button>
        }
      />
    </StoryWrapper>
  ),
};

export const Full: Story = {
  render: (args) => (
    <StoryWrapper>
      <ListItemBase
        {...args}
        startAccessory={<Box twClassName="w-4 h-4 rounded bg-icon-default" />}
        title="Token"
        subtitle="Ethereum Mainnet"
        value="100"
        supporting="Balance"
      />
    </StoryWrapper>
  ),
};
