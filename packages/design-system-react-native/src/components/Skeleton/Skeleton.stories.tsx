// Third party dependencies.
import React, { useState } from 'react';
import { View } from 'react-native';

// External dependencies.
import { Text } from '../Text';
import { Button, ButtonVariant } from '../Button';

// Internal dependencies.
import { default as SkeletonComponent } from './Skeleton';

const SkeletonMeta = {
  title: 'Components/Skeleton',
  component: SkeletonComponent,
  argTypes: {
    height: {
      control: { type: 'number' },
    },
    width: {
      control: { type: 'number' },
    },
    hideChildren: {
      control: { type: 'boolean' },
    },
    autoPlay: {
      control: { type: 'boolean' },
    },
    twClassName: {
      control: 'text',
    },
  },
};

export default SkeletonMeta;

export const Default = {
  args: {
    width: 300,
    height: 32,
  },
};

export const WidthHeight = {
  render: () => (
    <View style={{ gap: 8 }}>
      <SkeletonComponent height={32} width={300} />
      <SkeletonComponent height={16} width={250} />
      <SkeletonComponent height={16} width={250} />
    </View>
  ),
};

export const HideChildren = {
  render: () => {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
      <View>
        <Button
          variant={ButtonVariant.Secondary}
          onPress={() => setIsLoaded(!isLoaded)}
          style={{ marginBottom: 16 }}
        >
          Toggle Loading
        </Button>
        {isLoaded ? (
          <Text>Content to load</Text>
        ) : (
          <SkeletonComponent hideChildren style={{ alignSelf: 'flex-start' }}>
            <Text>Content to load</Text>
          </SkeletonComponent>
        )}
      </View>
    );
  },
};

export const TwClassName = {
  render: () => (
    <SkeletonComponent height={32} width={300} twClassName="rounded-lg" />
  ),
};

export const AutoPlayDisabled = {
  render: () => (
    <SkeletonComponent height={32} width={300} autoPlay={false} />
  ),
};
