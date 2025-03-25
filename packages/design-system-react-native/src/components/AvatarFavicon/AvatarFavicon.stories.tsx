import type { Meta, StoryObj } from '@storybook/react-native';
import { ImageSourcePropType, View } from 'react-native';

import AvatarFavicon from './AvatarFavicon';
import {
  DEFAULT_AVATARFAVICON_PROPS,
  SAMPLE_AVATARFAVICON_URIS,
} from './AvatarFavicon.constants';
import type { AvatarFaviconProps } from './AvatarFavicon.types';
import { AvatarSize } from '../../shared/enums';

const meta: Meta<AvatarFaviconProps> = {
  title: 'Components/AvatarFavicon',
  component: AvatarFavicon,
  argTypes: {
    size: {
      control: 'select',
      options: AvatarSize,
    },
    twClassName: {
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<AvatarFaviconProps>;
const storyImageSource: ImageSourcePropType = {
  uri: SAMPLE_AVATARFAVICON_URIS[0],
};

export const Default: Story = {
  args: {
    size: DEFAULT_AVATARFAVICON_PROPS.size,
    twClassName: '',
  },
  render: (args) => <AvatarFavicon {...args} src={storyImageSource} />,
};

export const Sizes: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      {Object.keys(AvatarSize).map((sizeKey) => (
        <AvatarFavicon
          src={storyImageSource}
          key={sizeKey}
          size={AvatarSize[sizeKey as keyof typeof AvatarSize]}
        />
      ))}
    </View>
  ),
};

export const SampleFavicons: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      {SAMPLE_AVATARFAVICON_URIS.map((faviconUri) => (
        <AvatarFavicon
          src={{
            uri: faviconUri,
          }}
          key={faviconUri}
        />
      ))}
    </View>
  ),
};
