import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { AvatarBaseSize, AvatarBaseShape } from '../../types';
import { Icon, IconName, IconSize } from '../Icon';
import { TextColor } from '../Text';

import { AvatarBase } from './AvatarBase';
import { SAMPLE_AVATARBASE_URIS } from './AvatarBase.dev';
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
        'Optional prop for the content to be rendered within the AvatarBase. Not required if fallbackText is provided',
    },
    fallbackText: {
      control: 'text',
      description: 'Optional text to display when no children are provided',
    },
    fallbackTextProps: {
      control: 'object',
      description:
        'Optional props to be passed to the Text component when rendering fallback text',
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
    hasBorder: {
      control: 'boolean',
      description: 'Optional prop to add a border around the AvatarBase',
    },
  },
};

export default meta;
type Story = StoryObj<typeof AvatarBase>;

export const Default: Story = {
  args: {
    fallbackText: 'A',
  },
};

export const Shape: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <AvatarBase shape={AvatarBaseShape.Circle} fallbackText="C" />
      <AvatarBase shape={AvatarBaseShape.Square} fallbackText="S" />
    </div>
  ),
};

export const Size: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <AvatarBase size={AvatarBaseSize.Xs} fallbackText="XS" />
        <AvatarBase size={AvatarBaseSize.Sm} fallbackText="SM" />
        <AvatarBase size={AvatarBaseSize.Md} fallbackText="MD" />
        <AvatarBase size={AvatarBaseSize.Lg} fallbackText="LG" />
        <AvatarBase size={AvatarBaseSize.Xl} fallbackText="XL" />
      </div>
      <div className="flex items-center gap-2">
        <AvatarBase
          shape={AvatarBaseShape.Square}
          size={AvatarBaseSize.Xs}
          fallbackText="Xs"
        />
        <AvatarBase
          shape={AvatarBaseShape.Square}
          size={AvatarBaseSize.Sm}
          fallbackText="Sm"
        />
        <AvatarBase
          shape={AvatarBaseShape.Square}
          size={AvatarBaseSize.Md}
          fallbackText="Md"
        />
        <AvatarBase
          shape={AvatarBaseShape.Square}
          size={AvatarBaseSize.Lg}
          fallbackText="Lg"
        />
        <AvatarBase
          shape={AvatarBaseShape.Square}
          size={AvatarBaseSize.Xl}
          fallbackText="Xl"
        />
      </div>
    </div>
  ),
};

export const HasBorder: Story = {
  render: () => (
    <div className="flex gap-2 bg-primary-muted p-2">
      <AvatarBase fallbackText="A" />
      <AvatarBase fallbackText="B" hasBorder />
    </div>
  ),
};

export const FallbackText: Story = {
  render: () => (
    <div className="flex gap-2">
      <AvatarBase fallbackText="A" />
      <AvatarBase fallbackText="B" />
      <AvatarBase fallbackText="C" />
    </div>
  ),
};

export const FallbackTextWithProps: Story = {
  render: () => (
    <div className="flex gap-2">
      <AvatarBase
        fallbackText="A"
        fallbackTextProps={{ color: TextColor.PrimaryDefault }}
      />
      <AvatarBase
        fallbackText="B"
        fallbackTextProps={{ color: TextColor.ErrorDefault }}
      />
      <AvatarBase
        fallbackText="C"
        fallbackTextProps={{ color: TextColor.SuccessDefault }}
      />
    </div>
  ),
};

export const Children: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      {/* Text */}
      <AvatarBase fallbackText="A" />
      {/* Image - Network/Token/Favicon */}
      <AvatarBase shape={AvatarBaseShape.Square}>
        <img
          src={SAMPLE_AVATARBASE_URIS[0]}
          alt="Eth"
          className="size-full object-contain"
        />
      </AvatarBase>
      <AvatarBase>
        <img
          src={SAMPLE_AVATARBASE_URIS[0]}
          alt="Eth"
          className="size-full object-contain"
        />
      </AvatarBase>
      <AvatarBase>
        <img
          src={SAMPLE_AVATARBASE_URIS[1]}
          alt="Eth"
          className="size-full object-contain"
        />
      </AvatarBase>
      {/* Icon */}
      <AvatarBase>
        <Icon name={IconName.User} size={IconSize.Sm} />
      </AvatarBase>
    </div>
  ),
};
