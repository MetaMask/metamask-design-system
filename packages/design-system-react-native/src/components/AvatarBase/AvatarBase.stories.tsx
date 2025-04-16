import type { Meta, StoryObj } from '@storybook/react-native';
import { Image, ImageSourcePropType, View } from 'react-native';

import { AvatarBaseSize, AvatarBaseShape } from '../../types';
import Icon, { IconName } from '../Icon';
import AvatarBase from './AvatarBase';
import { DEFAULT_AVATARBASE_PROPS } from './AvatarBase.constants';
import type { AvatarBaseProps } from './AvatarBase.types';

const meta: Meta<AvatarBaseProps> = {
  title: 'Components/AvatarBase',
  component: AvatarBase,
  argTypes: {
    size: {
      control: 'select',
      options: AvatarBaseSize,
    },
    shape: {
      control: 'select',
      options: AvatarBaseShape,
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
      {Object.keys(AvatarBaseSize).map((sizeKey) => (
        <View style={{ flexDirection: 'row', gap: 16 }} key={sizeKey}>
          <AvatarBase
            key={`${sizeKey}-${AvatarBaseShape.Circle}`}
            shape={AvatarBaseShape.Circle}
            size={AvatarBaseSize[sizeKey as keyof typeof AvatarBaseSize]}
            fallbackText={sizeKey}
          />
          <AvatarBase
            key={`${sizeKey}-${AvatarBaseShape.Square}`}
            shape={AvatarBaseShape.Square}
            size={AvatarBaseSize[sizeKey as keyof typeof AvatarBaseSize]}
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
      {Object.keys(AvatarBaseShape).map((shapeKey) => (
        <View style={{ flexDirection: 'row', gap: 16 }} key={shapeKey}>
          <AvatarBase
            key={`${shapeKey}-${AvatarBaseSize.Xs}`}
            shape={AvatarBaseShape[shapeKey as keyof typeof AvatarBaseShape]}
            size={AvatarBaseSize.Xs}
          >
            {TestImage}
          </AvatarBase>
          <AvatarBase
            key={`${shapeKey}-${AvatarBaseSize.Sm}`}
            shape={AvatarBaseShape[shapeKey as keyof typeof AvatarBaseShape]}
            size={AvatarBaseSize.Sm}
          >
            {TestImage}
          </AvatarBase>
          <AvatarBase
            key={`${shapeKey}-${AvatarBaseSize.Md}`}
            shape={AvatarBaseShape[shapeKey as keyof typeof AvatarBaseShape]}
            size={AvatarBaseSize.Md}
          >
            {TestImage}
          </AvatarBase>
          <AvatarBase
            key={`${shapeKey}-${AvatarBaseSize.Lg}`}
            shape={AvatarBaseShape[shapeKey as keyof typeof AvatarBaseShape]}
            size={AvatarBaseSize.Lg}
          >
            {TestImage}
          </AvatarBase>
          <AvatarBase
            key={`${shapeKey}-${AvatarBaseSize.Xl}`}
            shape={AvatarBaseShape[shapeKey as keyof typeof AvatarBaseShape]}
            size={AvatarBaseSize.Xl}
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
      <AvatarBase shape={AvatarBaseShape.Circle} fallbackText="A" />
      <AvatarBase shape={AvatarBaseShape.Square} fallbackText="A" />
    </View>
  ),
};

export const Children: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      <AvatarBase fallbackText="A" />
      <AvatarBase>
        <Image
          source={storyImageSource}
          style={{ width: '100%', height: '100%' }}
          resizeMode="contain"
        />
      </AvatarBase>
      <AvatarBase>
        <Icon name={IconName.User} />
      </AvatarBase>
    </View>
  ),
};
