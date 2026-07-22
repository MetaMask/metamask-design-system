import {
  BoxBackgroundColor,
  ButtonBaseSize,
  ButtonVariant,
  ContentVariant,
  IconName,
  IconSize,
  TextVariant,
} from '@metamask/design-system-shared';
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import { View } from 'react-native';

import { Box } from '../Box';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { Text } from '../Text';

import { Content } from './Content';
import type { ContentProps } from './Content.types';

const meta: Meta<ContentProps> = {
  title: 'Components/Content',
  component: Content,
  args: {
    title: 'Label',
    description: 'Secondary text',
    value: 'Value',
    variant: ContentVariant.TwoLines,
  },
  argTypes: {
    variant: {
      control: 'select',
      options: Object.keys(ContentVariant),
      mapping: ContentVariant,
    },
    title: { control: 'text' },
    description: { control: 'text' },
    value: { control: 'text' },
    subvalue: { control: 'text' },
  },
  decorators: [
    (Story) => (
      <Box
        twClassName="w-full"
        backgroundColor={BoxBackgroundColor.BackgroundDefault}
      >
        <Story />
      </Box>
    ),
  ],
};

export default meta;

type Story = StoryObj<ContentProps>;

const StoryWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const tw = useTailwind();
  return <View style={tw`p-4`}>{children}</View>;
};

export const Default: Story = {
  render: (args: ContentProps) => (
    <StoryWrapper>
      <Content {...args} />
    </StoryWrapper>
  ),
};

export const Title: Story = {
  render: (args: ContentProps) => (
    <StoryWrapper>
      <Content
        {...args}
        title="Title only"
        description={undefined}
        value={undefined}
      />
    </StoryWrapper>
  ),
};

export const Description: Story = {
  render: (args: ContentProps) => (
    <StoryWrapper>
      <Content
        {...args}
        title="Title"
        description="Description with secondary styling"
      />
    </StoryWrapper>
  ),
};

export const Value: Story = {
  render: (args: ContentProps) => (
    <StoryWrapper>
      <Content
        {...args}
        title="Amount"
        value="$10.00"
        description={undefined}
      />
    </StoryWrapper>
  ),
};

export const Subvalue: Story = {
  render: (args: ContentProps) => (
    <StoryWrapper>
      <Content
        {...args}
        title="Network"
        value="1.234 ETH"
        subvalue="~$2,500"
        description={undefined}
      />
      <Content
        {...args}
        title={undefined}
        description={undefined}
        value={undefined}
        avatar={
          <Box twClassName="h-10 w-10 items-center justify-center rounded-full bg-primary-alternative">
            <Icon name={IconName.AttachMoney} size={IconSize.Sm} />
          </Box>
        }
        subvalue={
          <Button
            variant={ButtonVariant.Secondary}
            size={ButtonBaseSize.Sm}
            onPress={() => undefined}
          >
            3% bonus
          </Button>
        }
      />
    </StoryWrapper>
  ),
};

const listItemAvatarPlaceholder = (
  <Box twClassName="h-12 w-12 rounded-lg bg-primary-default" />
);

const contentLeadingIcon = (
  <Box twClassName="h-6 items-center justify-center">
    <Icon name={IconName.Setting} size={IconSize.Md} />
  </Box>
);

export const Variant: Story = {
  render: (args: ContentProps) => (
    <StoryWrapper>
      <Content
        {...args}
        variant={ContentVariant.OneLine}
        avatar={contentLeadingIcon}
        title="One line"
        description="Omitted in one-line variant"
        value="Value"
        subvalue="Omitted"
      />
      <Content
        {...args}
        variant={ContentVariant.TwoLines}
        avatar={listItemAvatarPlaceholder}
        title="Two lines"
        description="Secondary line"
        value="Value"
        subvalue="Subvalue"
      />
      <Content
        {...args}
        variant={ContentVariant.MultiLine}
        avatar={listItemAvatarPlaceholder}
        title="Multi line"
        description={
          <>
            <Text variant={TextVariant.BodySm}>Secondary line</Text>
            <Text variant={TextVariant.BodySm}>Third line</Text>
          </>
        }
        value="Value"
        subvalue="Subvalue"
      />
    </StoryWrapper>
  ),
};

export const Avatar: Story = {
  render: (args: ContentProps) => (
    <StoryWrapper>
      <Content
        {...args}
        avatar={<Box twClassName="h-10 w-10 rounded-full bg-primary-default" />}
        title="With avatar"
        value="Value"
        description={undefined}
      />
    </StoryWrapper>
  ),
};

export const TitleStartAccessory: Story = {
  render: (args: ContentProps) => (
    <StoryWrapper>
      <Content
        {...args}
        titleStartAccessory={<Icon name={IconName.Info} />}
        title="Title with start accessory"
        value="Value"
        description={undefined}
      />
    </StoryWrapper>
  ),
};

export const TitleEndAccessory: Story = {
  render: (args: ContentProps) => (
    <StoryWrapper>
      <Content
        {...args}
        titleEndAccessory={<Icon name={IconName.Question} />}
        title="Title with end accessory"
        value="Value"
        description={undefined}
      />
    </StoryWrapper>
  ),
};

export const DescriptionStartAccessory: Story = {
  render: (args: ContentProps) => (
    <StoryWrapper>
      <Content
        {...args}
        title="Network"
        description="Ethereum Mainnet"
        descriptionStartAccessory={<Icon name={IconName.Info} />}
        value="1.234 ETH"
      />
    </StoryWrapper>
  ),
};

export const DescriptionEndAccessory: Story = {
  render: (args: ContentProps) => (
    <StoryWrapper>
      <Content
        {...args}
        title="Network"
        description="Ethereum Mainnet"
        descriptionEndAccessory={<Icon name={IconName.Question} />}
        value="1.234 ETH"
      />
    </StoryWrapper>
  ),
};

export const ValueStartAccessory: Story = {
  render: (args: ContentProps) => (
    <StoryWrapper>
      <Content
        {...args}
        title="Label"
        valueStartAccessory={<Icon name={IconName.Check} />}
        value="100"
        description={undefined}
      />
    </StoryWrapper>
  ),
};

export const ValueEndAccessory: Story = {
  render: (args: ContentProps) => (
    <StoryWrapper>
      <Content
        {...args}
        title="Label"
        value="100"
        valueEndAccessory={<Icon name={IconName.Info} />}
        description={undefined}
      />
    </StoryWrapper>
  ),
};

export const SubvalueStartAccessory: Story = {
  render: (args: ContentProps) => (
    <StoryWrapper>
      <Content
        {...args}
        title="Amount"
        value="$10.00"
        subvalue="~$0.50 fee"
        subvalueStartAccessory={<Icon name={IconName.Info} />}
        description={undefined}
      />
    </StoryWrapper>
  ),
};

export const SubvalueEndAccessory: Story = {
  render: (args: ContentProps) => (
    <StoryWrapper>
      <Content
        {...args}
        title="Amount"
        value="$10.00"
        subvalue="~$0.50 fee"
        subvalueEndAccessory={<Icon name={IconName.Question} />}
        description={undefined}
      />
    </StoryWrapper>
  ),
};
