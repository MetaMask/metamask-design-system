import type { Meta, StoryObj } from '@storybook/react-native';
import { View } from 'react-native';

import AvatarAccount from './AvatarAccount';
import {
  DEFAULT_AVATARACCOUNT_PROPS,
  SAMPLE_AVATARACCOUNT_ADDRESSES,
} from './AvatarAccount.constants';
import type { AvatarAccountProps } from './AvatarAccount.types';
import { AvatarSize } from '../../shared/enums';
import { AvatarAccountVariant } from './AvatarAccount.types';

const meta: Meta<AvatarAccountProps> = {
  title: 'Components/AvatarAccount',
  component: AvatarAccount,
  argTypes: {
    size: {
      control: 'select',
      options: AvatarSize,
    },
    variant: {
      control: 'select',
      options: AvatarAccountVariant,
    },
    twClassName: {
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<AvatarAccountProps>;
export const Default: Story = {
  args: {
    size: DEFAULT_AVATARACCOUNT_PROPS.size,
    variant: DEFAULT_AVATARACCOUNT_PROPS.variant,
    twClassName: '',
  },
  render: (args) => {
    return (
      <AvatarAccount {...args} address={SAMPLE_AVATARACCOUNT_ADDRESSES[0]} />
    );
  },
};

export const Sizes: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      {Object.keys(AvatarSize).map((sizeKey) => (
        <View key={sizeKey} style={{ flexDirection: 'row', gap: 8 }}>
          <AvatarAccount
            size={AvatarSize[sizeKey as keyof typeof AvatarSize]}
            variant={AvatarAccountVariant.Blockies}
            address={SAMPLE_AVATARACCOUNT_ADDRESSES[0]}
          />
          <AvatarAccount
            size={AvatarSize[sizeKey as keyof typeof AvatarSize]}
            variant={AvatarAccountVariant.Jazzicon}
            address={SAMPLE_AVATARACCOUNT_ADDRESSES[0]}
          />
        </View>
      ))}
    </View>
  ),
};

export const Variants: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      {Object.keys(AvatarAccountVariant).map((variantKey) => (
        <AvatarAccount
          key={variantKey}
          variant={
            AvatarAccountVariant[
              variantKey as keyof typeof AvatarAccountVariant
            ]
          }
          address={SAMPLE_AVATARACCOUNT_ADDRESSES[0]}
        />
      ))}
    </View>
  ),
};

export const SampleAddresses: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      {SAMPLE_AVATARACCOUNT_ADDRESSES.map((address) => (
        <View key={address} style={{ flexDirection: 'row', gap: 8 }}>
          <AvatarAccount
            variant={AvatarAccountVariant.Blockies}
            address={address}
          />
          <AvatarAccount
            variant={AvatarAccountVariant.Jazzicon}
            address={address}
          />
        </View>
      ))}
    </View>
  ),
};
