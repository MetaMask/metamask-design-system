import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { ButtonSecondarySize } from '.';
import { IconName } from '..';
import { ButtonSecondary } from './ButtonSecondary';
import README from './README.mdx';

const meta: Meta<typeof ButtonSecondary> = {
  title: 'React Components/ButtonSecondary',
  component: ButtonSecondary,
  parameters: {
    docs: {
      page: README,
    },
  },
  argTypes: {
    children: {
      control: 'text',
      description:
        'Required prop for the content to be rendered within the ButtonSecondary',
    },
    className: {
      control: 'text',
      description:
        'Optional prop for additional CSS classes to be applied to the ButtonSecondary component',
    },
    isDanger: {
      control: 'boolean',
      description:
        'Optional prop that when true, applies error/danger styling to the button',
    },
    isInverse: {
      control: 'boolean',
      description:
        'Optional prop that when true, applies inverse styling to the button',
    },
    size: {
      control: 'select',
      options: Object.values(ButtonSecondarySize),
      description: 'Optional prop to control the size of the ButtonSecondary',
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
type Story = StoryObj<typeof ButtonSecondary>;

export const Default: Story = {
  args: {
    children: 'Secondary Button',
  },
};

export const IsDanger: Story = {
  args: {
    children: 'Danger Button',
    isDanger: true,
  },
};

export const IsInverse: Story = {
  render: (args) => (
    <div className="bg-primary-default p-4 rounded flex gap-2">
      <ButtonSecondary {...args} isInverse>
        Inverse Button
      </ButtonSecondary>
      <ButtonSecondary {...args} isInverse isDanger>
        No Inverse Danger Button
      </ButtonSecondary>
    </div>
  ),
};

export const Size: Story = {
  render: (args) => (
    <div className="flex gap-2">
      <ButtonSecondary {...args} size={ButtonSecondarySize.Sm}>
        Small
      </ButtonSecondary>
      <ButtonSecondary {...args} size={ButtonSecondarySize.Md}>
        Medium
      </ButtonSecondary>
      <ButtonSecondary {...args} size={ButtonSecondarySize.Lg}>
        Large
      </ButtonSecondary>
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
