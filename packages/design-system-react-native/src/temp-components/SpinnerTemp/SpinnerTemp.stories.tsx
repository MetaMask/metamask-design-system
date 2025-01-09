import { useTailwind } from '@metamask/design-system-twrnc-preset';
import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import { View } from 'react-native';

import { IconColor } from '../../components/Icons/Icon';
import SpinnerTemp from './SpinnerTemp';
import type { SpinnerTempProps } from './SpinnerTemp.types';

const meta: Meta<SpinnerTempProps> = {
  title: 'Temp Components / SpinnerTemp',
  component: SpinnerTemp,
  argTypes: {
    color: {
      control: 'select',
      options: IconColor,
    },
    loadingText: {
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<SpinnerTempProps>;
const SpinnerTempStory: React.FC<SpinnerTempProps> = ({ color, ...props }) => {
  const tw = useTailwind();
  return (
    <View
      style={[
        tw`${
          color?.endsWith('-inverse')
            ? `bg-${color.replace('inverse', 'default')}`
            : 'bg-background-default'
        }`,
      ]}
    >
      <SpinnerTemp color={color} {...props} />
    </View>
  );
};

export const Default: Story = {
  args: {
    color: IconColor.IconDefault,
    loadingText: 'Loading...',
  },
  render: (args) => <SpinnerTemp {...args} />,
};

export const WithLoadingText: Story = {
  args: {
    loadingText: 'Fetching data...',
  },
  render: (args) => <SpinnerTemp {...args} />,
};

export const Colors: Story = {
  render: () => (
    <View style={{ gap: 8 }}>
      {Object.values(IconColor).map((color) => (
        <SpinnerTempStory color={color} key={color} />
      ))}
    </View>
  ),
};
