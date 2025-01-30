import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Icon, IconName, IconSize } from '..';
import { AvatarBase } from './AvatarBase';
import { AvatarBaseSize } from './AvatarBase.types';
import README from './README.mdx';

const meta: Meta<typeof AvatarBase> = {
  title: 'React Components/AvatarBase',
  component: AvatarBase,
  parameters: {
    docs: {
      page: README,
    },
  },
  argTypes: {
    children: {
      control: 'text',
      description:
        'Required prop for the content to be rendered within the AvatarBase',
    },
    className: {
      control: 'text',
      description:
        'Optional prop for additional CSS classes to be applied to the AvatarBase component',
    },
    size: {
      control: 'select',
      options: Object.keys(AvatarBaseSize),
      mapping: AvatarBaseSize,
      description: 'Optional prop to control the size of the AvatarBase',
    },
  },
};

export default meta;
type Story = StoryObj<typeof AvatarBase>;

export const Default: Story = {
  args: {
    children: 'A',
  },
};

export const Size: Story = {
  render: () => (
    <div className="flex gap-2 items-center">
      <AvatarBase size={AvatarBaseSize.Xs}>Xs</AvatarBase>
      <AvatarBase size={AvatarBaseSize.Sm}>Sm</AvatarBase>
      <AvatarBase size={AvatarBaseSize.Md}>Md</AvatarBase>
      <AvatarBase size={AvatarBaseSize.Lg}>Lg</AvatarBase>
      <AvatarBase size={AvatarBaseSize.Xl}>Xl</AvatarBase>
    </div>
  ),
};

export const Children: Story = {
  render: () => (
    <div className="flex gap-2 items-center">
      {/* Text */}
      <AvatarBase>A</AvatarBase>
      {/* Image */}
      <AvatarBase>
        <img
          src="https://cryptologos.cc/logos/avalanche-avax-logo.png?v=040"
          alt="Avalanche"
          className="w-full h-full object-cover"
        />
      </AvatarBase>
      {/* Icon */}
      <AvatarBase>
        <Icon
          name={IconName.User}
          size={IconSize.Sm}
          className="text-inherit"
        />
      </AvatarBase>
    </div>
  ),
};

export const ClassName: Story = {
  render: () => (
    <div className="flex gap-2">
      <AvatarBase className="bg-success-default text-success-inverse">
        S
      </AvatarBase>
      <AvatarBase className="bg-error-default text-error-inverse">E</AvatarBase>
      <AvatarBase className="bg-warning-default text-warning-inverse">
        W
      </AvatarBase>
    </div>
  ),
};
