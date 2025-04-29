import type { Meta, StoryObj } from '@storybook/react-native';
import { ScrollView, View } from 'react-native';

import { AvatarGroupSize, AvatarGroupVariant } from '../../types';
import AvatarGroup from './AvatarGroup';
import {
  SAMPLE_AVATARGROUP_AVATARACCOUNTPROPSARR,
  SAMPLE_AVATARGROUP_AVATARFAVICONPROPSARR,
  SAMPLE_AVATARGROUP_AVATARNETWORKPROPSARR,
  SAMPLE_AVATARGROUP_AVATARTOKENPROPSARR,
} from './AvatarGroup.dev';
import type { AvatarGroupProps } from './AvatarGroup.types';

const meta: Meta<AvatarGroupProps> = {
  title: 'Components/AvatarGroup',
  component: AvatarGroup,
  argTypes: {
    variant: {
      control: 'select',
      options: AvatarGroupVariant,
    },
    size: {
      control: 'select',
      options: AvatarGroupSize,
    },
    max: {
      control: 'number',
    },
    isReverse: {
      control: 'boolean',
    },
    twClassName: {
      control: 'text',
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
    twClassName: '',
  },
  render: (args) => <AvatarGroupStory {...args} />,
};

export const Variants: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      {Object.keys(AvatarGroupVariant).map((variantKey) => (
        <AvatarGroupStory
          key={variantKey}
          variant={
            AvatarGroupVariant[variantKey as keyof typeof AvatarGroupVariant]
          }
        />
      ))}
    </View>
  ),
};

export const Sizes: Story = {
  render: () => (
    <ScrollView>
      {Object.keys(AvatarGroupSize).map((sizeKey) => (
        <View key={sizeKey} style={{ gap: 4, marginBottom: 16 }}>
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
        </View>
      ))}
    </ScrollView>
  ),
};

export const IsReverse: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      <View style={{ gap: 4, alignItems: 'flex-start' }}>
        <AvatarGroupStory variant={AvatarGroupVariant.Account} />
        <AvatarGroupStory variant={AvatarGroupVariant.Account} isReverse />
      </View>
      <View style={{ gap: 4, alignItems: 'flex-start' }}>
        <AvatarGroupStory variant={AvatarGroupVariant.Favicon} />
        <AvatarGroupStory variant={AvatarGroupVariant.Favicon} isReverse />
      </View>
      <View style={{ gap: 4, alignItems: 'flex-start' }}>
        <AvatarGroupStory variant={AvatarGroupVariant.Network} />
        <AvatarGroupStory variant={AvatarGroupVariant.Network} isReverse />
      </View>
      <View style={{ gap: 4, alignItems: 'flex-start' }}>
        <AvatarGroupStory variant={AvatarGroupVariant.Token} />
        <AvatarGroupStory variant={AvatarGroupVariant.Token} isReverse />
      </View>
    </View>
  ),
};
