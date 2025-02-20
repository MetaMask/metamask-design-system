import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { IconName } from '../icon';
import { ButtonIcon } from './ButtonIcon';
import { ButtonIconSize } from './ButtonIcon.types';
import README from './README.mdx';

const meta: Meta<typeof ButtonIcon> = {
  title: 'React Components/ButtonIcon',
  component: ButtonIcon,
  parameters: {
    docs: {
      page: README,
    },
  },
  argTypes: {
    iconName: {
      control: 'select',
      options: Object.keys(IconName),
      mapping: IconName,
      description: 'Required prop to specify the icon to show',
    },
    size: {
      control: 'select',
      options: Object.keys(ButtonIconSize),
      mapping: ButtonIconSize,
      description: 'Optional prop to control the size of the ButtonIcon',
    },
    isDisabled: {
      control: 'boolean',
      description: 'Optional prop that when true, disables the button',
    },
    isInverse: {
      control: 'boolean',
      description:
        'Optional prop that when true, applies inverse styling to the button',
    },
    isFloating: {
      control: 'boolean',
      description:
        'Optional prop that when true, applies floating/contained styling to the button',
    },
    className: {
      control: 'text',
      description:
        'Optional prop for additional CSS classes to be applied to the ButtonIcon',
    },
    ariaLabel: {
      control: 'text',
      description:
        'Required prop to provide an accessible label for the button',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ButtonIcon>;

export const Default: Story = {
  args: {
    iconName: IconName.Close,
    ariaLabel: 'Close',
  },
};

export const Size: Story = {
  render: () => (
    <div className="flex gap-2">
      <ButtonIcon
        iconName={IconName.Close}
        size={ButtonIconSize.Sm}
        ariaLabel="Close small"
      />
      <ButtonIcon
        iconName={IconName.Close}
        size={ButtonIconSize.Md}
        ariaLabel="Close medium"
      />
      <ButtonIcon
        iconName={IconName.Close}
        size={ButtonIconSize.Lg}
        ariaLabel="Close large"
      />
    </div>
  ),
};

export const IsFloating: Story = {
  render: () => (
    <div className="flex gap-2">
      <ButtonIcon iconName={IconName.Close} isFloating ariaLabel="Close" />
    </div>
  ),
};

export const IsInverse: Story = {
  render: () => (
    <div className="bg-primary-default p-4">
      <ButtonIcon iconName={IconName.Close} isInverse ariaLabel="Close" />
    </div>
  ),
};

export const IsDisabled: Story = {
  args: {
    iconName: IconName.Close,
    isDisabled: true,
    ariaLabel: 'Close',
  },
};

export const AriaLabel: Story = {
  args: {
    iconName: IconName.Close,
    ariaLabel: 'Close dialog',
  },
};
