import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { ButtonSize } from '.';
import { IconName } from '../icon';
import { Button } from './Button';
import { ButtonVariant } from './Button.types';
import README from './README.mdx';

const meta: Meta<typeof Button> = {
  title: 'React Components/Button',
  component: Button,
  parameters: {
    docs: {
      page: README,
    },
  },
  argTypes: {
    children: {
      control: 'text',
      description:
        'Required prop for the content to be rendered within the Button',
    },
    variant: {
      control: 'select',
      options: Object.keys(ButtonVariant),
      mapping: ButtonVariant,
      description: 'Optional prop to control the variant of the Button',
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
      options: Object.keys(ButtonSize),
      mapping: ButtonSize,
      description: 'Optional prop to control the size of the Button',
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
    endIconName: {
      control: 'select',
      options: Object.keys(IconName),
      mapping: IconName,
      description:
        'Optional prop to specify an icon to show at the end of the button',
    },
    className: {
      control: 'text',
      description:
        'Optional prop for additional CSS classes to be applied to the Button',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Button',
  },
};

export const Variant: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex gap-2">
        <Button variant={ButtonVariant.Primary}>Primary</Button>
        <Button variant={ButtonVariant.Secondary}>Secondary</Button>
        <Button variant={ButtonVariant.Tertiary}>Tertiary</Button>
      </div>
    </div>
  ),
};

export const Size: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex gap-2">
        <Button size={ButtonSize.Sm}>Small</Button>
        <Button size={ButtonSize.Md}>Medium</Button>
        <Button size={ButtonSize.Lg}>Large</Button>
      </div>
      <div className="flex gap-2">
        <Button variant={ButtonVariant.Secondary} size={ButtonSize.Sm}>
          Small
        </Button>
        <Button variant={ButtonVariant.Secondary} size={ButtonSize.Md}>
          Medium
        </Button>
        <Button variant={ButtonVariant.Secondary} size={ButtonSize.Lg}>
          Large
        </Button>
      </div>
      <div className="flex gap-2">
        <Button variant={ButtonVariant.Tertiary} size={ButtonSize.Sm}>
          Small
        </Button>
        <Button variant={ButtonVariant.Tertiary} size={ButtonSize.Md}>
          Medium
        </Button>
        <Button variant={ButtonVariant.Tertiary} size={ButtonSize.Lg}>
          Large
        </Button>
      </div>
    </div>
  ),
};

export const IsDanger: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex gap-2">
        <Button isDanger>Primary Danger</Button>
        <Button variant={ButtonVariant.Secondary} isDanger>
          Secondary Danger
        </Button>
        <Button variant={ButtonVariant.Tertiary} isDanger>
          Tertiary Danger
        </Button>
      </div>
    </div>
  ),
};

export const IsInverse: Story = {
  render: () => (
    <div className="bg-primary-default p-4 space-y-4">
      <div className="flex gap-2">
        <Button isInverse>Primary Inverse</Button>
        <Button variant={ButtonVariant.Secondary} isInverse>
          Secondary Inverse
        </Button>
        <Button variant={ButtonVariant.Tertiary} isInverse>
          Tertiary Inverse
        </Button>
      </div>
      <div className="flex gap-2">
        <Button isDanger isInverse>
          Primary Danger Inverse
        </Button>
        <Button variant={ButtonVariant.Secondary} isDanger isInverse>
          Secondary Danger Inverse
        </Button>
        <Button variant={ButtonVariant.Tertiary} isDanger isInverse>
          Tertiary Danger Inverse
        </Button>
      </div>
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
  render: () => (
    <div className="space-y-4">
      <div className="flex gap-2">
        <Button isLoading loadingText="Loading...">
          Primary
        </Button>
        <Button
          variant={ButtonVariant.Secondary}
          isLoading
          loadingText="Loading..."
        >
          Secondary
        </Button>
        <Button
          variant={ButtonVariant.Tertiary}
          isLoading
          loadingText="Loading..."
        >
          Tertiary
        </Button>
      </div>
    </div>
  ),
};

export const IsDisabled: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex gap-2">
        <Button isDisabled>Primary</Button>
        <Button variant={ButtonVariant.Secondary} isDisabled>
          Secondary
        </Button>
        <Button variant={ButtonVariant.Tertiary} isDisabled>
          Tertiary
        </Button>
      </div>
    </div>
  ),
};

export const IsFullWidth: Story = {
  render: () => (
    <div className="space-y-4">
      <Button isFullWidth>Full Width Primary</Button>
      <Button variant={ButtonVariant.Secondary} isFullWidth>
        Full Width Secondary
      </Button>
      <Button variant={ButtonVariant.Tertiary} isFullWidth>
        Full Width Tertiary
      </Button>
    </div>
  ),
};
