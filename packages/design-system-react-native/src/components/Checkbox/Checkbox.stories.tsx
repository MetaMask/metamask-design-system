import type { Meta, StoryObj } from '@storybook/react-native';
import { useState, useRef } from 'react';
import { View } from 'react-native';

import { ButtonVariant } from '../../types';
import { Button } from '../Button';

import { Checkbox } from './Checkbox';
import type { CheckboxProps } from './Checkbox.types';

const meta: Meta<CheckboxProps> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {
    isDisabled: {
      control: 'boolean',
    },
    isInvalid: {
      control: 'boolean',
    },
    label: {
      control: 'text',
    },
    twClassName: {
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<CheckboxProps>;
const CheckboxStory: React.FC<Omit<CheckboxProps, 'onChange'>> = (args) => {
  const [isSelected, setIsSelected] = useState(args.isSelected);
  return (
    <Checkbox
      {...args}
      isSelected={isSelected}
      onChange={() => setIsSelected(!isSelected)}
    />
  );
};

export const Default: Story = {
  render: (args) => <CheckboxStory {...args} />,
  args: {
    label: 'Checkbox',
  },
};

export const IsSelected: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      <CheckboxStory isSelected={false} label="Unchecked" />
      <CheckboxStory isSelected label="Checked" />
    </View>
  ),
};

export const IsDisabled: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      <CheckboxStory isSelected={false} label="Enabled" />
      <CheckboxStory isSelected={false} isDisabled label="Disabled" />
    </View>
  ),
};

export const IsInvalid: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      <CheckboxStory isSelected={false} label="Normal" />
      <CheckboxStory isSelected={false} isInvalid label="Invalid" />
    </View>
  ),
};

export const Label: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      <CheckboxStory isSelected={false} />
      <CheckboxStory isSelected={false} label="Checkbox with label" />
    </View>
  ),
};

export const Ref: Story = {
  render: () => {
    const [isSelected, setIsSelected] = useState(false);
    const checkboxRef = useRef<{ toggle: () => void }>(null);

    return (
      <View style={{ gap: 16 }}>
        <Checkbox
          ref={checkboxRef}
          isSelected={isSelected}
          onChange={() => setIsSelected(!isSelected)}
          label="Toggle me via ref"
        />
        <Button
          variant={ButtonVariant.Primary}
          onPress={() => checkboxRef.current?.toggle()}
        >
          Toggle checkbox
        </Button>
      </View>
    );
  },
};
