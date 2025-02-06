import type { Meta, StoryObj } from '@storybook/react-native';
import { Image, ImageSourcePropType, View } from 'react-native';

import AvatarBase from './AvatarBase';
import { DEFAULT_AVATARBASE_PROPS } from './AvatarBase.constants';
import type { AvatarBaseProps } from './AvatarBase.types';
import { AvatarSize, AvatarShape } from '../../shared/enums';

const meta: Meta<AvatarBaseProps> = {
  title: 'Primitives/AvatarBase',
  component: AvatarBase,
  argTypes: {
    children: {
      control: 'text',
    },
    size: {
      control: 'select',
      options: AvatarSize,
    },
    shape: {
      control: 'select',
      options: AvatarShape,
    },
    fallbackText: {
      control: 'text',
    },
    twClassName: {
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<AvatarBaseProps>;
const storyImageSource: ImageSourcePropType = {
  uri: 'https://assets.coingecko.com/coins/images/279/small/ethereum.png?1595348880',
};
const TestImage = (
  <Image
    source={storyImageSource}
    style={{ width: '100%', height: '100%' }}
    resizeMode="contain"
  />
);

export const Default: Story = {
  args: {
    size: DEFAULT_AVATARBASE_PROPS.size,
    shape: DEFAULT_AVATARBASE_PROPS.shape,
    fallbackText: '',
    twClassName: '',
  },
  render: (args) => <AvatarBase {...args}>{TestImage}</AvatarBase>,
};

export const Sizes: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      {Object.keys(AvatarSize).map((sizeKey) => (
        <View style={{ flexDirection: 'row', gap: 16 }}>
          <AvatarBase
            key={`${sizeKey}-${AvatarShape.Circle}`}
            shape={AvatarShape.Circle}
            size={AvatarSize[sizeKey as keyof typeof AvatarSize]}
            fallbackText={sizeKey}
          />
          <AvatarBase
            key={`${sizeKey}-${AvatarShape.Square}`}
            shape={AvatarShape.Square}
            size={AvatarSize[sizeKey as keyof typeof AvatarSize]}
            fallbackText={sizeKey}
          />
        </View>
      ))}
    </View>
  ),
};

export const Shapes: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      {Object.keys(AvatarShape).map((shapeKey) => (
        <View style={{ flexDirection: 'row', gap: 16 }}>
          <AvatarBase
            key={`${shapeKey}-${AvatarSize.Xs}`}
            shape={AvatarShape[shapeKey as keyof typeof AvatarShape]}
            size={AvatarSize.Xs}
          >
            {TestImage}
          </AvatarBase>
          <AvatarBase
            key={`${shapeKey}-${AvatarSize.Sm}`}
            shape={AvatarShape[shapeKey as keyof typeof AvatarShape]}
            size={AvatarSize.Sm}
          >
            {TestImage}
          </AvatarBase>
          <AvatarBase
            key={`${shapeKey}-${AvatarSize.Md}`}
            shape={AvatarShape[shapeKey as keyof typeof AvatarShape]}
            size={AvatarSize.Md}
          >
            {TestImage}
          </AvatarBase>
          <AvatarBase
            key={`${shapeKey}-${AvatarSize.Lg}`}
            shape={AvatarShape[shapeKey as keyof typeof AvatarShape]}
            size={AvatarSize.Lg}
          >
            {TestImage}
          </AvatarBase>
          <AvatarBase
            key={`${shapeKey}-${AvatarSize.Xl}`}
            shape={AvatarShape[shapeKey as keyof typeof AvatarShape]}
            size={AvatarSize.Xl}
          >
            {TestImage}
          </AvatarBase>
        </View>
      ))}
    </View>
  ),
};

export const FallbackText: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      <AvatarBase shape={AvatarShape.Circle} fallbackText="A" />
      <AvatarBase shape={AvatarShape.Square} fallbackText="A" />
    </View>
  ),
};
