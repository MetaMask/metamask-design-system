import type { Meta, StoryObj } from '@storybook/react-native';
import { useEffect, useState } from 'react';
import { View } from 'react-native';

import { TextFieldSearch } from './TextFieldSearch';
import type { TextFieldSearchProps } from './TextFieldSearch.types';

const noop = () => undefined;

function ControlledTextFieldSearch(props: TextFieldSearchProps) {
  const [value, setValue] = useState(props.value ?? '');
  useEffect(() => {
    setValue(props.value ?? '');
  }, [props.value]);

  return (
    <TextFieldSearch
      {...props}
      value={value}
      onChangeText={setValue}
      onPressClearButton={() => {
        setValue('');
        props.onPressClearButton();
      }}
    />
  );
}

const meta: Meta<TextFieldSearchProps> = {
  title: 'Components/TextFieldSearch',
  component: TextFieldSearch,
  argTypes: {
    isError: {
      control: 'boolean',
    },
    isDisabled: {
      control: 'boolean',
    },
    isReadOnly: {
      control: 'boolean',
    },
    value: {
      control: 'text',
    },
    placeholder: {
      control: 'text',
    },
    twClassName: {
      control: 'text',
    },
    inputProps: {
      control: 'object',
    },
  },
};

export default meta;

type Story = StoryObj<TextFieldSearchProps>;

export const Default: Story = {
  args: {
    value: '',
    placeholder: 'Search',
    onPressClearButton: noop,
  },
  render: (args) => <ControlledTextFieldSearch {...args} />,
};

export const IsError: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      <ControlledTextFieldSearch
        value=""
        placeholder="Default"
        onPressClearButton={noop}
      />
      <ControlledTextFieldSearch
        value=""
        placeholder="Error state"
        isError
        onPressClearButton={noop}
      />
    </View>
  ),
};

export const IsDisabled: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      <ControlledTextFieldSearch
        value="Editable"
        placeholder="Enabled"
        onPressClearButton={noop}
      />
      <TextFieldSearch
        value="Not editable"
        placeholder="Disabled"
        isDisabled
        onPressClearButton={noop}
      />
    </View>
  ),
};

export const IsReadOnly: Story = {
  args: {
    placeholder: 'Search readonly',
    value: 'Search query',
    isReadOnly: true,
    onPressClearButton: noop,
  },
  render: (args) => <ControlledTextFieldSearch {...args} />,
};

export const WithValue: Story = {
  args: {
    placeholder: 'Search...',
    value: 'Search text',
    onPressClearButton: noop,
  },
  render: (args) => <ControlledTextFieldSearch {...args} />,
};
