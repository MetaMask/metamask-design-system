import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import { View } from 'react-native';

import { Box } from '../Box';
import { Text, TextVariant, TextColor } from '../Text';

import { ButtonSemantic } from './ButtonSemantic';
import type { ButtonSemanticProps } from './ButtonSemantic.types';
import { ButtonSemanticSeverity } from './ButtonSemantic.types';

import { ButtonBaseSize } from '@metamask/design-system-react-native';

const meta: Meta<ButtonSemanticProps> = {
  title: 'ButtonSemantic',
  component: ButtonSemantic,
  args: {
    children: 'Action',
    severity: ButtonSemanticSeverity.Success,
    onPress: () => console.log('Button pressed'),
  },
  argTypes: {
    severity: {
      control: 'select',
      options: Object.keys(ButtonSemanticSeverity),
      mapping: ButtonSemanticSeverity,
    },
    size: {
      control: 'select',
      options: Object.keys(ButtonBaseSize),
      mapping: ButtonBaseSize,
    },
    isDisabled: {
      control: 'boolean',
    },
    isLoading: {
      control: 'boolean',
    },
    isFullWidth: {
      control: 'boolean',
    },
  },
  decorators: [
    (Story) => (
      <View>
        <Text variant={TextVariant.BodySm} color={TextColor.TextAlternative}>
          Content behind semantic button
        </Text>
        <Box gap={2}>
          <Story />
        </Box>
      </View>
    ),
  ],
};

export default meta;

type Story = StoryObj<ButtonSemanticProps>;

export const Default: Story = {
  args: {
    severity: ButtonSemanticSeverity.Success,
    size: ButtonBaseSize.Lg,
    isDisabled: false,
    isLoading: false,
    isFullWidth: false,
  },
};

export const Severity: Story = {
  render: (args) => (
    <Box gap={4}>
      <ButtonSemantic {...args} severity={ButtonSemanticSeverity.Success}>
        Success Button
      </ButtonSemantic>
      <ButtonSemantic {...args} severity={ButtonSemanticSeverity.Danger}>
        Danger Button
      </ButtonSemantic>
    </Box>
  ),
};

export const Size: Story = {
  render: (args) => (
    <Box gap={4}>
      {Object.keys(ButtonBaseSize).map((sizeKey) => (
        <ButtonSemantic
          key={sizeKey}
          {...args}
          size={ButtonBaseSize[sizeKey as keyof typeof ButtonBaseSize]}
        >
          {sizeKey}
        </ButtonSemantic>
      ))}
    </Box>
  ),
};

export const IsDisabled: Story = {
  args: {
    isDisabled: true,
  },
};

export const IsLoading: Story = {
  args: {
    isLoading: true,
  },
  render: (args) => (
    <Box gap={4}>
      <ButtonSemantic {...args}>Action</ButtonSemantic>
      <ButtonSemantic {...args} loadingText="Loading...">
        Action
      </ButtonSemantic>
    </Box>
  ),
};
