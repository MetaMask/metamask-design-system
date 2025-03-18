import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { AvatarGroupSize } from './AvatarGroup.types';
import { AvatarGroup } from './AvatarGroup';
import {
  SAMPLE_AVATARGROUP_AVATARFAVICONPROPSARR,
  SAMPLE_AVATARGROUP_AVATARNETWORKPROPSARR,
  SAMPLE_AVATARGROUP_AVATARTOKENPROPSARR,
} from './AvatarGroup.constants';
import type { AvatarGroupProps } from './AvatarGroup.types';
import { AvatarGroupVariant } from './AvatarGroup.types';

const meta: Meta<AvatarGroupProps> = {
  title: 'React Components/AvatarGroup',
  component: AvatarGroup,
  argTypes: {
    variant: {
      control: 'select',
      options: Object.keys(AvatarGroupVariant),
      mapping: AvatarGroupVariant,
      description:
        'Storybook-only prop to control which variant of Avatar to show in a group',
    },
    size: {
      control: 'select',
      options: Object.keys(AvatarGroupSize),
      mapping: AvatarGroupSize,
      description: 'Optional enum to select between Avatar Group sizes',
    },
    max: {
      control: 'number',
      description:
        'Optional enum to select max number of Avatars visible before the overflow counter being displayed',
    },
    isReverse: {
      control: 'boolean',
      description: 'Optional prop to reverse the direction of the AvatarGroup',
    },
    className: {
      control: 'text',
      description: `Optional prop for additional CSS classes to be applied to the AvatarGroup component. These classes will be merged with the component's default classes using twMerge`,
    },
  },
};

export default meta;
type Story = StoryObj<AvatarGroupProps>;

const AvatarGroupStory: React.FC<Omit<AvatarGroupProps, 'avatarPropsArr'>> = ({
  variant,
  ...props
}) => {
  switch (variant) {
    case AvatarGroupVariant.Favicon:
      return (
        <AvatarGroup
          {...props}
          variant={variant}
          avatarPropsArr={SAMPLE_AVATARGROUP_AVATARFAVICONPROPSARR}
        />
      );
    case AvatarGroupVariant.Network:
      return (
        <AvatarGroup
          {...props}
          variant={variant}
          avatarPropsArr={SAMPLE_AVATARGROUP_AVATARNETWORKPROPSARR}
        />
      );
    case AvatarGroupVariant.Token:
      return (
        <AvatarGroup
          {...props}
          variant={variant}
          avatarPropsArr={SAMPLE_AVATARGROUP_AVATARTOKENPROPSARR}
        />
      );
  }
};

export const Default: Story = {
  args: {
    variant: AvatarGroupVariant.Favicon,
    size: AvatarGroupSize.Md,
    max: 4,
    isReverse: false,
    className: '',
  },
  render: (args: Omit<AvatarGroupProps, 'avatarPropsArr'>) => (
    <AvatarGroupStory {...args} />
  ),
};

export const Variants: Story = {
  render: () => (
    <div style={{ gap: 16 }}>
      {Object.keys(AvatarGroupVariant).map((variantKey) => (
        <AvatarGroupStory
          key={variantKey}
          variant={
            AvatarGroupVariant[variantKey as keyof typeof AvatarGroupVariant]
          }
        />
      ))}
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div>
      {Object.keys(AvatarGroupSize).map((sizeKey) => (
        <div key={sizeKey} style={{ gap: 4, marginBottom: 16 }}>
          <AvatarGroupStory
            variant={AvatarGroupVariant.Favicon}
            size={AvatarGroupSize[sizeKey as keyof typeof AvatarGroupSize]}
          />
          <AvatarGroupStory
            variant={AvatarGroupVariant.Network}
            size={AvatarGroupSize[sizeKey as keyof typeof AvatarGroupSize]}
          />
          <AvatarGroupStory
            variant={AvatarGroupVariant.Token}
            size={AvatarGroupSize[sizeKey as keyof typeof AvatarGroupSize]}
          />
        </div>
      ))}
    </div>
  ),
};

export const IsReverse: Story = {
  render: () => (
    <div style={{ gap: 16 }}>
      <div style={{ gap: 4, alignItems: 'flex-start' }}>
        <AvatarGroupStory variant={AvatarGroupVariant.Favicon} />
        <AvatarGroupStory variant={AvatarGroupVariant.Favicon} isReverse />
      </div>
      <div style={{ gap: 4, alignItems: 'flex-start' }}>
        <AvatarGroupStory variant={AvatarGroupVariant.Network} />
        <AvatarGroupStory variant={AvatarGroupVariant.Network} isReverse />
      </div>
      <div style={{ gap: 4, alignItems: 'flex-start' }}>
        <AvatarGroupStory variant={AvatarGroupVariant.Token} />
        <AvatarGroupStory variant={AvatarGroupVariant.Token} isReverse />
      </div>
    </div>
  ),
};
