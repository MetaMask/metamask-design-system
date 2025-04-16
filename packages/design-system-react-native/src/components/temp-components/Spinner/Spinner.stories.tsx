import { useTailwind } from '@metamask/design-system-twrnc-preset';
import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import { ScrollView, View } from 'react-native';

import { IconColor } from '../../Icon';
import { TextColor } from '../../Text';
import Spinner from './Spinner';
import { DEFAULT_SPINNER_PROPS } from './Spinner.constants';
import type { SpinnerProps } from './Spinner.types';

const meta: Meta<SpinnerProps> = {
  title: 'Temp Components/Spinner',
  component: Spinner,
  argTypes: {
    color: {
      control: 'select',
      options: IconColor,
    },
    loadingText: {
      control: 'text',
    },
    twClassName: {
      control: 'text',
    },
  },
};

export default meta;

const SpinnerStory: React.FC<SpinnerProps> = ({ color, ...props }) => {
  const tw = useTailwind();
  return (
    <View
      style={[
        tw`p-4 ${
          color?.endsWith('-inverse')
            ? color.replace('inverse', 'default').replace('text', 'bg')
            : 'bg-background-default'
        }`,
      ]}
    >
      <Spinner color={color} {...props} />
    </View>
  );
};

type Story = StoryObj<SpinnerProps>;

export const Default: Story = {
  args: {
    color: DEFAULT_SPINNER_PROPS.color,
    loadingText: DEFAULT_SPINNER_PROPS.loadingText,
    twClassName: DEFAULT_SPINNER_PROPS.twClassName,
  },
  render: (args) => <SpinnerStory {...args} />,
};

export const Colors: Story = {
  render: () => (
    <ScrollView>
      {Object.keys(IconColor).map((colorKey) => (
        <SpinnerStory
          key={colorKey}
          color={IconColor[colorKey as keyof typeof IconColor]}
          loadingText={DEFAULT_SPINNER_PROPS.loadingText}
          loadingTextProps={{
            color: TextColor[colorKey as keyof typeof TextColor],
          }}
        >
          {colorKey}
        </SpinnerStory>
      ))}
    </ScrollView>
  ),
};
