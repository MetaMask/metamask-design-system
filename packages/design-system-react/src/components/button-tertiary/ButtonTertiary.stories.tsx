import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { ButtonTertiarySize } from '.';
import { IconName } from '../icon';
import { ButtonTertiary } from './ButtonTertiary';
import README from './README.mdx';

const meta: Meta<typeof ButtonTertiary> = {
  title: 'React Components/ButtonTertiary',
  component: ButtonTertiary,
  parameters: {
    docs: {
      page: README,
    },
  },
  argTypes: {
    children: {
      control: 'text',
      description:
        'Required prop for the content to be rendered within the ButtonTertiary',
    },
    className: {
      control: 'text',
      description:
        'Optional prop for additional CSS classes to be applied to the ButtonTertiary component',
    },
    isDanger: {
      control: 'boolean',
      description:
        'Optional prop that when true, applies error/danger styling to the button',
    },
    size: {
      control: 'select',
      options: Object.values(ButtonTertiarySize),
      description: 'Optional prop to control the size of the ButtonTertiary',
    },
    isFullWidth: {
      control: 'boolean',
      description:
        'Optional prop that when true, makes the button take up the full width of its container',
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
      options: Object.values(IconName),
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
      options: Object.values(IconName),
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
  },
};

export default meta;
type Story = StoryObj<typeof ButtonTertiary>;

export const Default: Story = {
  args: {
    children: 'Button Tertiary',
  },
};

export const IsDanger: Story = {
  args: {
    children: 'Danger',
    isDanger: true,
  },
};

export const Size: Story = {
  render: (args) => (
    <div className="flex gap-2">
      <ButtonTertiary {...args} size={ButtonTertiarySize.Sm}>
        Small
      </ButtonTertiary>
      <ButtonTertiary {...args} size={ButtonTertiarySize.Md}>
        Medium
      </ButtonTertiary>
      <ButtonTertiary {...args} size={ButtonTertiarySize.Lg}>
        Large
      </ButtonTertiary>
    </div>
  ),
};

export const IsInverse: Story = {
  render: (args) => (
    <div className="bg-primary-default p-4 rounded flex gap-2">
      <ButtonTertiary {...args} isInverse>
        Inverse
      </ButtonTertiary>
      <ButtonTertiary {...args} isInverse isDanger>
        Inverse Danger
      </ButtonTertiary>
    </div>
  ),
};

export const IsFullWidth: Story = {
  args: {
    children: 'Full Width',
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

export const IsLoading: Story = {
  args: {
    children: 'Loading',
    isLoading: true,
    loadingText: 'Loading...',
  },
};

export const IsDisabled: Story = {
  args: {
    children: 'Disabled Button Tertiary',
    isDisabled: true,
  },
};
