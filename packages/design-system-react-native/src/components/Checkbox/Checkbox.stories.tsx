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

export const Default: Story = {
  render(args) {
    const [isSelected, setIsSelected] = useState(false);
    return (
      <Checkbox
        {...args}
        isSelected={isSelected}
        onChange={() => setIsSelected(!isSelected)}
      />
    );
  },
  args: {
    label: 'Checkbox',
  },
};

export const IsSelected: Story = {
  render: () => {
    const [isSelected, setIsSelected] = useState(true);
    return (
      <Checkbox
        isSelected={isSelected}
        onChange={() => setIsSelected(!isSelected)}
        label="isSelected"
      />
    );
  },
};

export const IsDisabled: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      <Checkbox
        onChange={
          (/* isSelected */) => {
            // No action needed for disabled checkboxes
          }
        }
        isSelected={true}
        isDisabled
        label="isDisabled"
      />
      <Checkbox
        onChange={
          (/* isSelected */) => {
            // No action needed for disabled checkboxes
          }
        }
        isSelected={false}
        isDisabled
        label="isDisabled"
      />
    </View>
  ),
};

export const IsInvalid: Story = {
  render: () => {
    const [isSelected, setIsSelected] = useState(false);
    return (
      <Checkbox
        isSelected={isSelected}
        onChange={() => setIsSelected(!isSelected)}
        isInvalid
        label="isInvalid"
      />
    );
  },
};

export const Label: Story = {
  render: () => {
    const [isSelected, setIsSelected] = useState(false);
    return (
      <Checkbox
        isSelected={isSelected}
        onChange={() => setIsSelected(!isSelected)}
        label="Checkbox with label"
      />
    );
  },
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
