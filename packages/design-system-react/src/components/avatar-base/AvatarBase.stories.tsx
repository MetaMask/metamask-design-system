import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Icon, IconName, IconSize, Text, TextVariant, TextColor } from '..';
import { AvatarBase } from './AvatarBase';
import { AvatarBaseSize, AvatarBaseShape } from './AvatarBase.types';
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
    shape: {
      control: 'select',
      options: Object.keys(AvatarBaseShape),
      mapping: AvatarBaseShape,
      description: 'Optional prop to control the shape of the AvatarBase',
    },
  },
};

export default meta;
type Story = StoryObj<typeof AvatarBase>;

export const Default: Story = {
  render: (args) => (
    <AvatarBase {...args}>
      <Text>{args.children}</Text>
    </AvatarBase>
  ),
  args: {
    children: 'A',
  },
};

export const Shape: Story = {
  render: () => (
    <div className="flex gap-2 items-center">
      <AvatarBase shape={AvatarBaseShape.Circle}>
        <Text variant={TextVariant.BodySm}>C</Text>
      </AvatarBase>
      <AvatarBase shape={AvatarBaseShape.Square}>
        <Text variant={TextVariant.BodySm}>S</Text>
      </AvatarBase>
    </div>
  ),
};

export const Size: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2 items-center">
        <AvatarBase size={AvatarBaseSize.Xs}>
          <Text variant={TextVariant.BodyXs}>Xs</Text>
        </AvatarBase>
        <AvatarBase size={AvatarBaseSize.Sm}>
          <Text variant={TextVariant.BodyXs}>Sm</Text>
        </AvatarBase>
        <AvatarBase size={AvatarBaseSize.Md}>
          <Text variant={TextVariant.BodySm}>Md</Text>
        </AvatarBase>
        <AvatarBase size={AvatarBaseSize.Lg}>
          <Text variant={TextVariant.BodyMd}>Lg</Text>
        </AvatarBase>
        <AvatarBase size={AvatarBaseSize.Xl}>
          <Text variant={TextVariant.BodyMd}>Xl</Text>
        </AvatarBase>
      </div>
      <div className="flex gap-2 items-center">
        <AvatarBase shape={AvatarBaseShape.Square} size={AvatarBaseSize.Xs}>
          <Text variant={TextVariant.BodyXs}>Xs</Text>
        </AvatarBase>
        <AvatarBase shape={AvatarBaseShape.Square} size={AvatarBaseSize.Sm}>
          <Text variant={TextVariant.BodyXs}>Sm</Text>
        </AvatarBase>
        <AvatarBase shape={AvatarBaseShape.Square} size={AvatarBaseSize.Md}>
          <Text variant={TextVariant.BodySm}>Md</Text>
        </AvatarBase>
        <AvatarBase shape={AvatarBaseShape.Square} size={AvatarBaseSize.Lg}>
          <Text variant={TextVariant.BodyMd}>Lg</Text>
        </AvatarBase>
        <AvatarBase shape={AvatarBaseShape.Square} size={AvatarBaseSize.Xl}>
          <Text variant={TextVariant.BodyMd}>Xl</Text>
        </AvatarBase>
      </div>
    </div>
  ),
};

export const Children: Story = {
  render: () => (
    <div className="flex gap-2 items-center">
      {/* Text */}
      <AvatarBase>
        <Text>A</Text>
      </AvatarBase>
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
        <Icon name={IconName.User} size={IconSize.Sm} />
      </AvatarBase>
    </div>
  ),
};
