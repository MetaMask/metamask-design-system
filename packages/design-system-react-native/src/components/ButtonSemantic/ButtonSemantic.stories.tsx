import { ButtonSemanticSize } from '@metamask/design-system-shared';
import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import { View } from 'react-native';

import { Box } from '../Box';
import { Text, TextVariant, TextColor } from '../Text';

import { ButtonSemantic } from './ButtonSemantic';
import type { ButtonSemanticProps } from './ButtonSemantic.types';
import { ButtonSemanticSeverity } from './ButtonSemantic.types';

const meta: Meta<ButtonSemanticProps> = {
  title: 'Components/ButtonSemantic',
  component: ButtonSemantic,
  args: {
    children: 'Action',
    severity: ButtonSemanticSeverity.Success,
    onPress: () => console.log('Button pressed!'),
  },
  argTypes: {
    severity: {
      control: 'select',
      options: Object.keys(ButtonSemanticSeverity),
      mapping: ButtonSemanticSeverity,
    },
    size: {
      control: 'select',
      options: Object.keys(ButtonSemanticSize),
      mapping: ButtonSemanticSize,
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
    size: ButtonSemanticSize.Lg,
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
      {Object.keys(ButtonSemanticSize).map((sizeKey) => (
        <ButtonSemantic
          key={sizeKey}
          {...args}
          size={ButtonSemanticSize[sizeKey as keyof typeof ButtonSemanticSize]}
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
