import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { ButtonHeroSize } from '../../types';
import { IconName } from '../Icon';

import { ButtonHero } from './ButtonHero';
import README from './README.mdx';

const meta: Meta<typeof ButtonHero> = {
  title: 'React Components/ButtonHero',
  component: ButtonHero,
  parameters: {
    docs: {
      page: README,
    },
  },
  argTypes: {
    children: {
      control: 'text',
      description:
        'Required prop for the content to be rendered within the ButtonHero',
    },
    className: {
      control: 'text',
      description:
        'Optional prop for additional CSS classes to be applied to the ButtonHero component',
    },
    size: {
      control: 'select',
      options: Object.keys(ButtonHeroSize),
      mapping: ButtonHeroSize,
      description: 'Optional prop to control the size of the ButtonHero',
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
    isDisabled: {
      control: 'boolean',
      description: 'Optional prop that when true, disables the button',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ButtonHero>;

export const Default: Story = {
  args: {
    children: 'Primary Action',
  },
};

export const Size: Story = {
  render: (args) => (
    <div className="flex gap-2">
      <ButtonHero {...args} size={ButtonHeroSize.Sm}>
        Small
      </ButtonHero>
      <ButtonHero {...args} size={ButtonHeroSize.Md}>
        Medium
      </ButtonHero>
      <ButtonHero {...args} size={ButtonHeroSize.Lg}>
        Large
      </ButtonHero>
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
    children: 'Start Icon',
    startIconName: IconName.AddSquare,
  },
};

export const EndIconName: Story = {
  args: {
    children: 'End Icon',
    endIconName: IconName.AddSquare,
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    isDisabled: true,
  },
};

export const Loading: Story = {
  args: {
    children: 'Submit this form',
    isLoading: true,
    loadingText: 'Submitting...',
  },
};
