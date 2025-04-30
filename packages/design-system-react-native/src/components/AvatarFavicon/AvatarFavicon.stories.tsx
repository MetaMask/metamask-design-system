import type { Meta, StoryObj } from '@storybook/react-native';
import { View } from 'react-native';

import { AvatarFaviconSize } from '../../types';
import AvatarFavicon from './AvatarFavicon';
import { SAMPLE_AVATARFAVICON_URIS } from './AvatarFavicon.dev';
import type { AvatarFaviconProps } from './AvatarFavicon.types';

const meta: Meta<AvatarFaviconProps> = {
  title: 'Components/AvatarFavicon',
  component: AvatarFavicon,
  argTypes: {
    size: {
      control: 'select',
      options: AvatarFaviconSize,
    },
    twClassName: {
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<AvatarFaviconProps>;

export const Default: Story = {
  args: {
    size: AvatarFaviconSize.Md,
    twClassName: '',
  },
  render: (args) => (
    <AvatarFavicon {...args} src={SAMPLE_AVATARFAVICON_URIS[0]} />
  ),
};

export const Sizes: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      {Object.keys(AvatarFaviconSize).map((sizeKey) => (
        <AvatarFavicon
          src={SAMPLE_AVATARFAVICON_URIS[0]}
          key={sizeKey}
          size={AvatarFaviconSize[sizeKey as keyof typeof AvatarFaviconSize]}
        />
      ))}
    </View>
  ),
};

export const SampleFavicons: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      {SAMPLE_AVATARFAVICON_URIS.map((faviconSrc, index) => (
        <AvatarFavicon src={faviconSrc} key={`favicon-${index}`} />
      ))}
    </View>
  ),
};
