import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { AvatarGroupSize, AvatarGroupVariant } from '../../types';
import { AvatarGroup } from './AvatarGroup';
import {
  SAMPLE_AVATARGROUP_AVATARACCOUNTPROPSARR,
  SAMPLE_AVATARGROUP_AVATARFAVICONPROPSARR,
  SAMPLE_AVATARGROUP_AVATARNETWORKPROPSARR,
  SAMPLE_AVATARGROUP_AVATARTOKENPROPSARR,
} from './AvatarGroup.dev';
import type { AvatarGroupProps } from './AvatarGroup.types';
import README from './README.mdx';

const meta: Meta<AvatarGroupProps> = {
  title: 'React Components/AvatarGroup',
  component: AvatarGroup,
  parameters: {
    docs: {
      page: README,
    },
  },
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
    case AvatarGroupVariant.Account:
      return (
        <AvatarGroup
          {...props}
          variant={variant}
          avatarPropsArr={SAMPLE_AVATARGROUP_AVATARACCOUNTPROPSARR}
        />
      );
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

export const Variant: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
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

export const AvatarPropsArr: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
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

export const Size: Story = {
  render: () => (
    <div>
      {Object.keys(AvatarGroupSize).map((sizeKey) => (
        <div
          key={sizeKey}
          className="flex flex-col gap-1 mb-4"
        >
          <AvatarGroupStory
            variant={AvatarGroupVariant.Account}
            size={AvatarGroupSize[sizeKey as keyof typeof AvatarGroupSize]}
          />
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

export const Max: Story = {
  render: () => (
    <div className="flex flex-col gap-1">
      {' '}
      <AvatarGroupStory variant={AvatarGroupVariant.Account} />
      <AvatarGroupStory variant={AvatarGroupVariant.Account} max={1} />
      <AvatarGroupStory variant={AvatarGroupVariant.Account} max={10} />
    </div>
  ),
};

export const IsReverse: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1 items-start">
        <AvatarGroupStory variant={AvatarGroupVariant.Account} />
        <AvatarGroupStory variant={AvatarGroupVariant.Account} isReverse />
      </div>
      <div className="flex flex-col gap-1 items-start">
        <AvatarGroupStory variant={AvatarGroupVariant.Favicon} />
        <AvatarGroupStory variant={AvatarGroupVariant.Favicon} isReverse />
      </div>
      <div className="flex flex-col gap-1 items-start">
        <AvatarGroupStory variant={AvatarGroupVariant.Network} />
        <AvatarGroupStory variant={AvatarGroupVariant.Network} isReverse />
      </div>
      <div className="flex flex-col gap-1 items-start">
        <AvatarGroupStory variant={AvatarGroupVariant.Token} />
        <AvatarGroupStory variant={AvatarGroupVariant.Token} isReverse />
      </div>
    </div>
  ),
};
