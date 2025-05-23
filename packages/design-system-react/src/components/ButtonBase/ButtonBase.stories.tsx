import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { ButtonBaseSize } from '../../types';
import { Icon, IconName } from '../Icon';
import { Text } from '../Text';

import { ButtonBase } from './ButtonBase';
import README from './README.mdx';

const meta: Meta<typeof ButtonBase> = {
  title: 'React Components/ButtonBase',
  component: ButtonBase,
  parameters: {
    docs: {
      page: README,
    },
  },
  argTypes: {
    children: {
      control: 'text',
      description:
        'Required prop for the content to be rendered within the ButtonBase',
    },
    className: {
      control: 'text',
      description:
        'Optional prop for additional CSS classes to be applied to the ButtonBase component',
    },
    size: {
      control: 'select',
      options: Object.keys(ButtonBaseSize),
      mapping: ButtonBaseSize,
      description: 'Optional prop to control the size of the ButtonBase',
    },
    isFullWidth: {
      control: 'boolean',
      description:
        'Optional prop that when true, makes the ButtonBase take up the full width of its container',
    },
    asChild: {
      control: 'boolean',
      description:
        'Optional boolean that determines if the component should merge its props onto its immediate child instead of rendering a ButtonBase element',
    },
    isLoading: {
      control: 'boolean',
      description: 'Optional prop that when true, shows a loading spinner',
    },
    loadingText: {
      control: 'text',
      description:
        'Optional prop for text to display when ButtonBase is in loading state',
    },
    startIconName: {
      control: 'select',
      options: Object.keys(IconName),
      mapping: IconName,
      description:
        'Optional prop to specify an icon to show at the start of the ButtonBase',
    },
    startIconProps: {
      control: 'object',
      description:
        'Optional prop to pass additional properties to the start icon',
    },
    startAccessory: {
      control: 'text',
      description:
        'Optional prop for a custom element to show at the start of the ButtonBase',
    },
    endIconName: {
      control: 'select',
      options: Object.keys(IconName),
      mapping: IconName,
      description:
        'Optional prop to specify an icon to show at the end of the ButtonBase',
    },
    endIconProps: {
      control: 'object',
      description:
        'Optional prop to pass additional properties to the end icon',
    },
    endAccessory: {
      control: 'text',
      description:
        'Optional prop for a custom element to show at the end of the ButtonBase',
    },
    isDisabled: {
      control: 'boolean',
      description: 'Optional prop that when true, disables the ButtonBase',
    },
    loadingIconProps: {
      control: 'object',
      description:
        'Optional prop to pass additional properties to the loading icon',
    },
    textProps: {
      control: 'object',
      description:
        'Optional props to be passed to the Text component when children is a string',
      table: {
        type: { summary: 'Partial<TextProps>' },
      },
    },
    loadingTextProps: {
      control: 'object',
      description: 'Optional props to be passed to the loading Text component',
      table: {
        type: { summary: 'Partial<TextProps>' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ButtonBase>;

export const Default: Story = {
  args: {
    children: 'Button Base',
  },
};

export const Children: Story = {
  render: (args) => (
    <div className="flex gap-2">
      <ButtonBase {...args}>Children</ButtonBase>
      <ButtonBase {...args} className="h-auto rounded-lg py-2">
        <div className="flex flex-col items-center gap-2">
          <Icon name={IconName.Arrow2UpRight} />
          <Text asChild>
            <span>Send</span>
          </Text>
        </div>
      </ButtonBase>
    </div>
  ),
};

export const Size: Story = {
  render: (args) => (
    <div className="flex gap-2">
      <ButtonBase {...args} size={ButtonBaseSize.Sm}>
        Small
      </ButtonBase>
      <ButtonBase {...args} size={ButtonBaseSize.Md}>
        Medium
      </ButtonBase>
      <ButtonBase {...args}>Large</ButtonBase>
    </div>
  ),
};
export const IsFullWidth: Story = {
  args: {
    children: 'Full Width Button',
    isFullWidth: true,
  },
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

export const StartAccessory: Story = {
  args: {
    children: 'With Start Accessory',
    startAccessory: '→',
  },
};

export const EndAccessory: Story = {
  args: {
    children: 'With End Accessory',
    endAccessory: '←',
  },
};

export const IsLoading: Story = {
  render: (args) => (
    <div className="flex gap-2">
      <ButtonBase {...args} isLoading>
        Submit this form
      </ButtonBase>
      <ButtonBase {...args} isLoading loadingText="Submitting...">
        Submit this form
      </ButtonBase>
    </div>
  ),
};

export const IsDisabled: Story = {
  args: {
    children: 'Disabled Button',
    isDisabled: true,
  },
};

export const AsChild: Story = {
  render: (args) => (
    <ButtonBase {...args} asChild>
      <a href="#" target="_blank" rel="noopener noreferrer">
        Custom Anchor Link
      </a>
    </ButtonBase>
  ),
};
