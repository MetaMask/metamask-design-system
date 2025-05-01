import type { Meta, StoryObj } from '@storybook/react-native';
import { View } from 'react-native';

import { AvatarBaseSize, AvatarBaseShape } from '../../types';
import ImageOrSvg from '../temp-components/ImageOrSvg';
import Icon, { IconName } from '../Icon';
import AvatarBase from './AvatarBase';
import { SAMPLE_AVATARBASE_URIS } from './AvatarBase.dev';
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

export const Default: Story = {
  args: {
    size: AvatarBaseSize.Md,
    shape: AvatarBaseShape.Circle,
    fallbackText: '',
    twClassName: '',
  },
  render: (args) => (
    <AvatarBase {...args}>
      {
        <ImageOrSvg
          src={SAMPLE_AVATARBASE_URIS[0]}
          width="100%"
          height="100%"
          imageProps={{
            resizeMode: 'contain',
          }}
        />
      }
    </AvatarBase>
  ),
};

export const Size: Story = {
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

export const Shape: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      {Object.keys(AvatarBaseShape).map((shapeKey) => (
        <View style={{ flexDirection: 'row', gap: 16 }} key={shapeKey}>
          <AvatarBase
            key={`${shapeKey}-${AvatarBaseSize.Xs}`}
            shape={AvatarBaseShape[shapeKey as keyof typeof AvatarBaseShape]}
            size={AvatarBaseSize.Xs}
          >
            {
              <ImageOrSvg
                src={SAMPLE_AVATARBASE_URIS[0]}
                width="100%"
                height="100%"
                imageProps={{
                  resizeMode: 'contain',
                }}
              />
            }
          </AvatarBase>
          <AvatarBase
            key={`${shapeKey}-${AvatarBaseSize.Sm}`}
            shape={AvatarBaseShape[shapeKey as keyof typeof AvatarBaseShape]}
            size={AvatarBaseSize.Sm}
          >
            {
              <ImageOrSvg
                src={SAMPLE_AVATARBASE_URIS[0]}
                width="100%"
                height="100%"
                imageProps={{
                  resizeMode: 'contain',
                }}
              />
            }
          </AvatarBase>
          <AvatarBase
            key={`${shapeKey}-${AvatarBaseSize.Md}`}
            shape={AvatarBaseShape[shapeKey as keyof typeof AvatarBaseShape]}
            size={AvatarBaseSize.Md}
          >
            {
              <ImageOrSvg
                src={SAMPLE_AVATARBASE_URIS[0]}
                width="100%"
                height="100%"
                imageProps={{
                  resizeMode: 'contain',
                }}
              />
            }
          </AvatarBase>
          <AvatarBase
            key={`${shapeKey}-${AvatarBaseSize.Lg}`}
            shape={AvatarBaseShape[shapeKey as keyof typeof AvatarBaseShape]}
            size={AvatarBaseSize.Lg}
          >
            {
              <ImageOrSvg
                src={SAMPLE_AVATARBASE_URIS[0]}
                width="100%"
                height="100%"
                imageProps={{
                  resizeMode: 'contain',
                }}
              />
            }
          </AvatarBase>
          <AvatarBase
            key={`${shapeKey}-${AvatarBaseSize.Xl}`}
            shape={AvatarBaseShape[shapeKey as keyof typeof AvatarBaseShape]}
            size={AvatarBaseSize.Xl}
          >
            {
              <ImageOrSvg
                src={SAMPLE_AVATARBASE_URIS[0]}
                width="100%"
                height="100%"
                imageProps={{
                  resizeMode: 'contain',
                }}
              />
            }
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
      <AvatarBase shape={AvatarBaseShape.Square}>
        {
          <ImageOrSvg
            src={SAMPLE_AVATARBASE_URIS[0]}
            width="100%"
            height="100%"
            imageProps={{
              resizeMode: 'contain',
            }}
          />
        }
      </AvatarBase>
      <AvatarBase>
        {
          <ImageOrSvg
            src={SAMPLE_AVATARBASE_URIS[0]}
            width="100%"
            height="100%"
            imageProps={{
              resizeMode: 'contain',
            }}
          />
        }
      </AvatarBase>
      <AvatarBase>
        {
          <ImageOrSvg
            src={SAMPLE_AVATARBASE_URIS[1]}
            width="100%"
            height="100%"
            imageProps={{
              resizeMode: 'contain',
            }}
          />
        }
      </AvatarBase>
      <AvatarBase>
        <Icon name={IconName.User} />
      </AvatarBase>
    </View>
  ),
};
