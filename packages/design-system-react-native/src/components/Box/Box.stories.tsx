import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';

import { Text } from '../Text';
import {
  BoxFlexDirection,
  BoxFlexWrap,
  BoxAlignItems,
  BoxJustifyContent,
  BoxBorderColor,
  BoxBorderRadius,
  BoxBorderStyle,
  BoxBackgroundColor,
} from '../../types';
import type { BoxProps } from './Box.types';
import { Box } from './Box';

const meta: Meta<BoxProps> = {
  title: 'Components/Box',
  component: Box,
  argTypes: {
    flexDirection: { control: 'select', options: BoxFlexDirection },
    flexWrap: { control: 'select', options: BoxFlexWrap },
    gap: { control: 'number', min: 0, max: 12 },
    margin: { control: 'number', min: 0, max: 12 },
    marginTop: { control: 'number', min: 0, max: 12 },
    marginBottom: { control: 'number', min: 0, max: 12 },
    marginLeft: { control: 'number', min: 0, max: 12 },
    marginRight: { control: 'number', min: 0, max: 12 },
    padding: { control: 'number', min: 0, max: 12 },
    paddingTop: { control: 'number', min: 0, max: 12 },
    paddingBottom: { control: 'number', min: 0, max: 12 },
    paddingLeft: { control: 'number', min: 0, max: 12 },
    paddingRight: { control: 'number', min: 0, max: 12 },
    borderColor: { control: 'select', options: BoxBorderColor },
    borderWidth: { control: 'number', min: 0, max: 12 },
    borderRadius: { control: 'select', options: BoxBorderRadius },
    borderStyle: { control: 'select', options: BoxBorderStyle },
    alignItems: { control: 'select', options: BoxAlignItems },
    justifyContent: { control: 'select', options: BoxJustifyContent },
    width: { control: 'number', min: 0, max: 12 },
    minWidth: { control: 'number', min: 0, max: 12 },
    height: { control: 'number', min: 0, max: 12 },
    minHeight: { control: 'number', min: 0, max: 12 },
    backgroundColor: { control: 'select', options: BoxBackgroundColor },
    twClassName: { control: 'text' },
    children: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<BoxProps>;
const BoxStory: React.FC<BoxProps> = (args) => {
  return (
    <Box {...args}>
      <Text>Box Component</Text>
    </Box>
  );
};

export const Default: Story = {
  args: {
    padding: 2,
    backgroundColor: BoxBackgroundColor.BackgroundDefault,
  },
  render: (args) => <BoxStory {...args} />,
};
