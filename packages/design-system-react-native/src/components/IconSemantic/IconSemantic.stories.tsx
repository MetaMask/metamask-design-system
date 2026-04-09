import { IconSemanticSemantic } from '@metamask/design-system-shared';
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import type { Meta, StoryObj } from '@storybook/react-native';
import type { ViewProps } from 'react-native';
import React from 'react';
import { View } from 'react-native';

import { IconSize } from '../../types';

import { IconSemantic } from './IconSemantic';
import type { IconSemanticProps } from './IconSemantic.types';

const meta: Meta<IconSemanticProps> = {
  title: 'Components/IconSemantic',
  component: IconSemantic,
  args: {
    semantic: IconSemanticSemantic.Info,
    size: IconSize.Md,
  },
  argTypes: {
    semantic: {
      control: 'select',
      options: Object.values(IconSemanticSemantic),
    },
    size: {
      control: 'select',
      options: Object.values(IconSize),
    },
  },
};

export default meta;

const IconSemanticStoryWrapper: React.FC<ViewProps> = ({
  children,
  ...props
}) => {
  const tw = useTailwind();
  return (
    <View {...props} style={[tw`bg-default p-4`, props.style]}>
      {children}
    </View>
  );
};

type Story = StoryObj<IconSemanticProps>;

export const Default: Story = {
  render: (args) => (
    <IconSemanticStoryWrapper>
      <IconSemantic {...args} />
    </IconSemanticStoryWrapper>
  ),
};

export const Semantic: Story = {
  render: () => (
    <IconSemanticStoryWrapper
      style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 16 }}
    >
      {Object.values(IconSemanticSemantic).map((semantic) => (
        <View key={semantic} style={{ alignItems: 'center', gap: 8 }}>
          <IconSemantic semantic={semantic} size={IconSize.Xl} />
        </View>
      ))}
    </IconSemanticStoryWrapper>
  ),
};

export const Size: Story = {
  render: () => (
    <IconSemanticStoryWrapper style={{ gap: 16 }}>
      {Object.values(IconSize).map((size) => (
        <IconSemantic
          key={size}
          semantic={IconSemanticSemantic.Info}
          size={size}
        />
      ))}
    </IconSemanticStoryWrapper>
  ),
};
