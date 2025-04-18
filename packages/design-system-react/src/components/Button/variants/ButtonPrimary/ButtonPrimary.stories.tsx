import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { ButtonPrimarySize } from '../../../../types';
import { IconName } from '../../../Icon';
import { ButtonPrimary } from './ButtonPrimary';
import README from './README.mdx';

const meta: Meta<typeof ButtonPrimary> = {
  title: 'React Components/ButtonPrimary',
  component: ButtonPrimary,
  parameters: {
    docs: {
      page: README,
    },
  },
  argTypes: {
    children: {
      control: 'text',
      description:
        'Required prop for the content to be rendered within the ButtonPrimary',
    },
    className: {
      control: 'text',
      description:
        'Optional prop for additional CSS classes to be applied to the ButtonPrimary component',
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
      options: Object.keys(ButtonPrimarySize),
      mapping: ButtonPrimarySize,
      description: 'Optional prop to control the size of the ButtonPrimary',
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
  },
};

export default meta;
type Story = StoryObj<typeof ButtonPrimary>;

export const Default: Story = {
  args: {
    children: 'Primary Button',
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
    <div className="flex gap-2 rounded bg-primary-default p-4">
      <ButtonPrimary {...args} isInverse>
        Inverse Button
      </ButtonPrimary>
      <ButtonPrimary {...args} isInverse isDanger>
        Inverse Danger Button
      </ButtonPrimary>
    </div>
  ),
};

export const Size: Story = {
  render: (args) => (
    <div className="flex gap-2">
      <ButtonPrimary {...args} size={ButtonPrimarySize.Sm}>
        Small
      </ButtonPrimary>
      <ButtonPrimary {...args} size={ButtonPrimarySize.Md}>
        Medium
      </ButtonPrimary>
      <ButtonPrimary {...args} size={ButtonPrimarySize.Lg}>
        Large
      </ButtonPrimary>
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
