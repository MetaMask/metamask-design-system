import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import { ButtonIconSize, ButtonIconVariant } from '../../types';
import { IconName } from '../Icon';

import { ButtonIcon } from './ButtonIcon';
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
    variant: {
      control: 'select',
      options: Object.keys(ButtonIconVariant),
      mapping: ButtonIconVariant,
      description: 'Optional prop to control the visual variant of the button',
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

export const Floating: Story = {
  render: () => (
    <div className="flex gap-2">
      <ButtonIcon
        iconName={IconName.Close}
        variant={ButtonIconVariant.Floating}
        ariaLabel="Close"
      />
    </div>
  ),
};

export const Filled: Story = {
  render: () => (
    <div className="flex gap-2">
      <ButtonIcon
        iconName={IconName.Close}
        variant={ButtonIconVariant.Filled}
        ariaLabel="Close"
      />
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
