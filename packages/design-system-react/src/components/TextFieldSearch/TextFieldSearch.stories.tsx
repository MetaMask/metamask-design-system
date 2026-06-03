import type { Meta, StoryObj } from '@storybook/react-vite';
import React, { useEffect, useState } from 'react';

import { TextFieldSize } from '../TextField';

import README from './README.mdx';
import { TextFieldSearch } from './TextFieldSearch';
import type { TextFieldSearchProps } from './TextFieldSearch.types';

type ControlledTextFieldSearchProps = Omit<
  TextFieldSearchProps,
  'clearButtonOnClick'
> & {
  clearButtonOnClick?: TextFieldSearchProps['clearButtonOnClick'];
};

function ControlledTextFieldSearch(props: ControlledTextFieldSearchProps) {
  const [value, setValue] = useState(props.value ?? '');

  useEffect(() => {
    setValue(props.value ?? '');
  }, [props.value]);

  return (
    <TextFieldSearch
      {...props}
      value={value}
      onChange={(event) => {
        setValue(event.target.value);
        props.onChange?.(event);
      }}
      clearButtonOnClick={(event) => {
        setValue('');
        props.clearButtonOnClick?.(event);
      }}
    />
  );
}

const meta: Meta<TextFieldSearchProps> = {
  title: 'React Components/TextFieldSearch',
  component: TextFieldSearch,
  parameters: {
    docs: {
      page: README,
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: Object.values(TextFieldSize),
    },
    isDisabled: { control: 'boolean' },
    isReadOnly: { control: 'boolean' },
    isError: { control: 'boolean' },
    placeholder: { control: 'text' },
    value: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<TextFieldSearchProps>;

export const Default: Story = {
  args: {
    placeholder: 'Search',
    value: '',
  },
  render: (args) => <ControlledTextFieldSearch {...args} />,
};

export const Size: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <ControlledTextFieldSearch
        placeholder="Sm"
        size={TextFieldSize.Sm}
        value=""
      />
      <ControlledTextFieldSearch
        placeholder="Md"
        size={TextFieldSize.Md}
        value=""
      />
      <ControlledTextFieldSearch
        placeholder="Lg"
        size={TextFieldSize.Lg}
        value=""
      />
    </div>
  ),
};

export const IsDisabled: Story = {
  render: () => (
    <ControlledTextFieldSearch placeholder="Search" value="hello" isDisabled />
  ),
};

export const IsError: Story = {
  render: () => (
    <ControlledTextFieldSearch placeholder="Search" value="hello" isError />
  ),
};

export const ClearButtonProps: Story = {
  render: () => (
    <ControlledTextFieldSearch
      placeholder="Search"
      value="hello"
      clearButtonProps={{ ariaLabel: 'Clear search' }}
    />
  ),
};
