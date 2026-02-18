import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import { Box } from '../Box';
import { ButtonIcon, ButtonIconSize } from '../ButtonIcon';
import { IconName } from '../Icon';
import { Text, TextVariant } from '../Text';

import { HeaderBase } from './HeaderBase';
import type { HeaderBaseProps } from './HeaderBase.types';
import README from './README.mdx';

const meta: Meta<HeaderBaseProps> = {
  title: 'React Components/HeaderBase',
  component: HeaderBase,
  parameters: {
    docs: {
      page: README,
    },
  },
  argTypes: {
    children: {
      control: 'text',
    },
    className: {
      control: 'text',
    },
    includesTopInset: {
      control: 'boolean',
    },
  },
};

export default meta;

type Story = StoryObj<HeaderBaseProps>;

const noop = (): void => undefined;

export const Default: Story = {
  args: {
    children: 'Header Title',
  },
  render: (args) => <HeaderBase {...args} />,
};

export const ClassName: Story = {
  render: () => (
    <HeaderBase className="bg-info-default px-4">
      Header with Custom Styles
    </HeaderBase>
  ),
};

export const StartButtonIconProps: Story = {
  render: () => (
    <HeaderBase
      startButtonIconProps={{
        iconName: IconName.ArrowLeft,
        ariaLabel: 'Back',
        onClick: noop,
      }}
    >
      With Start Button
    </HeaderBase>
  ),
};

export const EndButtonIconProps: Story = {
  render: () => (
    <HeaderBase
      endButtonIconProps={[
        {
          iconName: IconName.Close,
          ariaLabel: 'Close',
          onClick: noop,
        },
      ]}
    >
      With End Button
    </HeaderBase>
  ),
};

export const MultipleEndButtonIconProps: Story = {
  render: () => (
    <HeaderBase
      endButtonIconProps={[
        {
          iconName: IconName.Close,
          ariaLabel: 'Close',
          onClick: noop,
        },
        {
          iconName: IconName.Search,
          ariaLabel: 'Search',
          onClick: noop,
        },
        {
          iconName: IconName.Setting,
          ariaLabel: 'Settings',
          onClick: noop,
        },
      ]}
    >
      Multiple End Buttons
    </HeaderBase>
  ),
};

export const StartAccessory: Story = {
  render: () => (
    <HeaderBase
      startAccessory={
        <ButtonIcon
          iconName={IconName.ArrowLeft}
          size={ButtonIconSize.Md}
          ariaLabel="Back"
          onClick={noop}
        />
      }
    >
      With Start Accessory
    </HeaderBase>
  ),
};

export const EndAccessory: Story = {
  render: () => (
    <HeaderBase
      endAccessory={
        <ButtonIcon
          iconName={IconName.Close}
          size={ButtonIconSize.Md}
          ariaLabel="Close"
          onClick={noop}
        />
      }
    >
      With End Accessory
    </HeaderBase>
  ),
};

export const BothAccessories: Story = {
  render: () => (
    <HeaderBase
      startAccessory={
        <ButtonIcon
          iconName={IconName.ArrowLeft}
          size={ButtonIconSize.Md}
          ariaLabel="Back"
          onClick={noop}
        />
      }
      endAccessory={
        <ButtonIcon
          iconName={IconName.Close}
          size={ButtonIconSize.Md}
          ariaLabel="Close"
          onClick={noop}
        />
      }
    >
      Both Accessories
    </HeaderBase>
  ),
};

export const Children: Story = {
  render: () => (
    <HeaderBase
      startButtonIconProps={{
        iconName: IconName.ArrowLeft,
        ariaLabel: 'Back',
        onClick: noop,
      }}
    >
      <Box className="flex flex-col items-center">
        <Text variant={TextVariant.HeadingSm}>Custom Title</Text>
        <Text variant={TextVariant.BodySm}>Subtitle text</Text>
      </Box>
    </HeaderBase>
  ),
};
