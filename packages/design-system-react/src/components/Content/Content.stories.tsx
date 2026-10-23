import {
  BoxBackgroundColor,
  ButtonSize,
  ButtonVariant,
  ContentVariant,
  IconName,
  IconSize,
  TextVariant,
} from '@metamask/design-system-shared';
import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import { Box } from '../Box';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { Text } from '../Text';

import { Content } from './Content';
import type { ContentProps } from './Content.types';
import README from './README.mdx';

const meta: Meta<ContentProps> = {
  title: 'React Components/Content',
  component: Content,
  parameters: {
    docs: {
      page: README,
    },
  },
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
        className="w-full p-4"
        backgroundColor={BoxBackgroundColor.BackgroundDefault}
      >
        <Story />
      </Box>
    ),
  ],
};

export default meta;

type Story = StoryObj<ContentProps>;

export const Default: Story = {};

export const Title: Story = {
  args: {
    title: 'Title only',
    description: undefined,
    value: undefined,
  },
};

export const Description: Story = {
  args: {
    title: 'Title',
    description: 'Description with secondary styling',
    value: undefined,
  },
};

export const Value: Story = {
  args: {
    title: 'Amount',
    value: '$10.00',
    description: undefined,
  },
};

export const Subvalue: Story = {
  render: (args: ContentProps) => (
    <Box className="flex w-full flex-col gap-4">
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
          <Box className="flex size-10 items-center justify-center rounded-full bg-primary-alternative">
            <Icon name={IconName.AttachMoney} size={IconSize.Sm} />
          </Box>
        }
        subvalue={
          <Button
            variant={ButtonVariant.Secondary}
            size={ButtonSize.Sm}
            onClick={() => undefined}
          >
            3% bonus
          </Button>
        }
      />
    </Box>
  ),
};

export const DescriptionProps: Story = {
  args: {
    title: 'Account',
    description: '0x1234…abcd',
    descriptionProps: { isHidden: true },
    value: undefined,
  },
};

export const ValueProps: Story = {
  args: {
    title: 'Balance',
    value: '$1,234.56',
    valueProps: { isHidden: true },
    description: undefined,
  },
};

export const SubvalueProps: Story = {
  args: {
    title: 'Network',
    value: '1.234 ETH',
    subvalue: '~$2,500',
    subvalueProps: { isHidden: true },
    description: undefined,
  },
};

const listItemAvatarPlaceholder = (
  <Box className="size-12 rounded-lg bg-primary-default" />
);

const contentLeadingIcon = (
  <Box className="flex h-6 items-center justify-center">
    <Icon name={IconName.Setting} size={IconSize.Md} />
  </Box>
);

export const Variant: Story = {
  render: (args: ContentProps) => (
    <Box className="flex w-full flex-col gap-4">
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
    </Box>
  ),
};

export const Avatar: Story = {
  args: {
    avatar: <Box className="size-10 rounded-full bg-primary-default" />,
    title: 'With avatar',
    value: 'Value',
    description: undefined,
  },
};

export const TitleStartAccessory: Story = {
  args: {
    titleStartAccessory: <Icon name={IconName.Info} />,
    title: 'Title with start accessory',
    value: 'Value',
    description: undefined,
  },
};

export const TitleEndAccessory: Story = {
  args: {
    titleEndAccessory: <Icon name={IconName.Question} />,
    title: 'Title with end accessory',
    value: 'Value',
    description: undefined,
  },
};

export const DescriptionStartAccessory: Story = {
  args: {
    title: 'Network',
    description: 'Ethereum Mainnet',
    descriptionStartAccessory: <Icon name={IconName.Info} />,
    value: '1.234 ETH',
  },
};

export const DescriptionEndAccessory: Story = {
  args: {
    title: 'Network',
    description: 'Ethereum Mainnet',
    descriptionEndAccessory: <Icon name={IconName.Question} />,
    value: '1.234 ETH',
  },
};

export const ValueStartAccessory: Story = {
  args: {
    title: 'Label',
    valueStartAccessory: <Icon name={IconName.Check} />,
    value: '100',
    description: undefined,
  },
};

export const ValueEndAccessory: Story = {
  args: {
    title: 'Label',
    value: '100',
    valueEndAccessory: <Icon name={IconName.Info} />,
    description: undefined,
  },
};

export const SubvalueStartAccessory: Story = {
  args: {
    title: 'Amount',
    value: '$10.00',
    subvalue: '~$0.50 fee',
    subvalueStartAccessory: <Icon name={IconName.Info} />,
    description: undefined,
  },
};

export const SubvalueEndAccessory: Story = {
  args: {
    title: 'Amount',
    value: '$10.00',
    subvalue: '~$0.50 fee',
    subvalueEndAccessory: <Icon name={IconName.Question} />,
    description: undefined,
  },
};
