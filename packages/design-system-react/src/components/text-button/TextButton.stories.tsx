import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { IconName, Text, TextVariant } from '..';
import README from './README.mdx';
import { TextButton } from './TextButton';

const meta: Meta<typeof TextButton> = {
  title: 'React Components/TextButton',
  component: TextButton,
  parameters: {
    docs: {
      page: README,
    },
  },
  argTypes: {
    children: {
      control: 'text',
      description:
        'Required prop for the content to be rendered within the TextButton',
    },
    className: {
      control: 'text',
      description:
        'Optional prop for additional CSS classes to be applied to the TextButton component',
    },
    isInverse: {
      control: 'boolean',
      description:
        'Optional prop that when true, applies inverse styling to the button',
    },
    textVariant: {
      control: 'select',
      options: Object.keys(TextVariant),
      mapping: TextVariant,
      description: 'Optional prop to specify the text variant',
    },
    isLoading: {
      control: 'boolean',
      description: 'Optional prop that when true, shows a loading spinner',
    },
    loadingText: {
      control: 'text',
      description:
        'Optional prop for text to display when button is in loading state',
    },
    startIconName: {
      control: 'select',
      options: Object.keys(IconName),
      mapping: IconName,
      description:
        'Optional prop to specify an icon to show at the start of the button',
    },
    endIconName: {
      control: 'select',
      options: Object.keys(IconName),
      mapping: IconName,
      description:
        'Optional prop to specify an icon to show at the end of the button',
    },
    isDisabled: {
      control: 'boolean',
      description: 'Optional prop that when true, disables the button',
    },
  },
};

export default meta;
type Story = StoryObj<typeof TextButton>;

export const Default: Story = {
  args: {
    children: 'Text Button',
  },
};

export const TextVariantStory: Story = {
  render: (args) => (
    <div className="space-y-8">
      <div className="flex flex-col gap-2 items-start">
        <TextButton {...args} textVariant={TextVariant.BodyLg}>
          BodyLg
        </TextButton>
        <TextButton {...args} textVariant={TextVariant.BodyMd}>
          BodyMd (Default)
        </TextButton>
        <TextButton {...args} textVariant={TextVariant.BodySm}>
          BodySm
        </TextButton>
        <TextButton {...args} textVariant={TextVariant.BodyXs}>
          BodyXs
        </TextButton>
      </div>
    </div>
  ),
  storyName: 'TextVariant',
};

export const AsChild: Story = {
  render: () => (
    <div className="space-y-4">
      <Text variant={TextVariant.BodySm}>
        To learn more about web3, visit{' '}
        <TextButton textVariant={TextVariant.BodySm} asChild>
          <a href="https://metamask.io">MetaMask Learn</a>
        </TextButton>
      </Text>

      <TextButton asChild endIconName={IconName.Arrow2UpRight}>
        <a
          href="https://portfolio.metamask.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          Portfolio
        </a>
      </TextButton>
    </div>
  ),
};

export const IsInverse: Story = {
  render: (args) => (
    <div className="bg-primary-default p-4 rounded">
      <TextButton {...args} isInverse>
        Inverse Button
      </TextButton>
    </div>
  ),
};

export const StartIconName: Story = {
  args: {
    children: 'With Start Icon',
    startIconName: IconName.AddSquare,
  },
};

export const EndIconName: Story = {
  args: {
    children: 'With End Icon',
    endIconName: IconName.AddSquare,
  },
};

export const IsLoading: Story = {
  args: {
    children: 'Loading Button',
    isLoading: true,
    loadingText: 'Loading...',
  },
};

export const IsDisabled: Story = {
  args: {
    children: 'Disabled Button',
    isDisabled: true,
  },
};
