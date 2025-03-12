import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { IconName } from '../icon';
import { TextVariant } from '../text';
import { ButtonBase } from './ButtonBase';
import { ButtonBaseSize } from './ButtonBase.types';
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
        'Optional prop that when true, makes the button take up the full width of its container',
    },
    asChild: {
      control: 'boolean',
      description:
        'Optional boolean that determines if the component should merge its props onto its immediate child instead of rendering a button element',
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
    startIconProps: {
      control: 'object',
      description:
        'Optional prop to pass additional properties to the start icon',
    },
    startAccessory: {
      control: 'text',
      description:
        'Optional prop for a custom element to show at the start of the button',
    },
    endIconName: {
      control: 'select',
      options: Object.keys(IconName),
      mapping: IconName,
      description:
        'Optional prop to specify an icon to show at the end of the button',
    },
    endIconProps: {
      control: 'object',
      description:
        'Optional prop to pass additional properties to the end icon',
    },
    endAccessory: {
      control: 'text',
      description:
        'Optional prop for a custom element to show at the end of the button',
    },
    isDisabled: {
      control: 'boolean',
      description: 'Optional prop that when true, disables the button',
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
  },
};

export default meta;
type Story = StoryObj<typeof ButtonBase>;

export const Default: Story = {
  args: {
    children: 'Button Base',
  },
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

export const TextProps: Story = {
  args: {
    children: 'Button with custom text variant',
    textProps: {
      variant: TextVariant.BodySm,
    },
  },
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
  args: {
    children: 'Submit',
    isLoading: true,
    loadingText: 'Submitting...',
  },
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
