/* eslint-disable func-name-matching */
import type { Meta, StoryObj } from '@storybook/react-vite';
import React, { useEffect, useState } from 'react';

import { Box } from '../Box';

import README from './README.mdx';
import { TextArea } from './TextArea';
import { TextAreaResize } from './TextArea.constants';
import type { TextAreaProps } from './TextArea.types';

const meta: Meta<TextAreaProps> = {
  title: 'React Components/TextArea',
  component: TextArea,
  parameters: {
    docs: {
      page: README,
    },
  },
  argTypes: {
    autoFocus: {
      control: 'boolean',
    },
    isError: {
      control: 'boolean',
      description: 'When true, applies error styling to the textarea',
    },
    isDisabled: {
      control: 'boolean',
      description: 'When true, disables the textarea',
    },
    isReadOnly: {
      control: 'boolean',
      description: 'When true, makes the textarea read-only',
    },
    value: {
      control: 'text',
    },
    placeholder: {
      control: 'text',
    },
    resize: {
      control: 'select',
      options: Object.values(TextAreaResize),
      description: 'Controls the resize behavior of the textarea',
    },
    rows: {
      control: 'number',
    },
    maxLength: {
      control: 'number',
    },
    required: {
      control: 'boolean',
    },
  },
};

export default meta;

type Story = StoryObj<TextAreaProps>;

export const Default: Story = {
  args: {
    value: '',
    placeholder: 'Enter multiple lines...',
  },
  render: function Render(args) {
    const [value, setValue] = useState(args.value ?? '');
    useEffect(() => {
      setValue(args.value ?? '');
    }, [args.value]);

    return (
      <TextArea
        {...args}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    );
  },
};

export const AutoFocus: Story = {
  args: {
    autoFocus: true,
    placeholder: 'Auto focus',
    value: '',
  },
  render: function Render(args) {
    const [value, setValue] = useState(args.value ?? '');
    useEffect(() => {
      setValue(args.value ?? '');
    }, [args.value]);

    return (
      <TextArea
        {...args}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    );
  },
};

export const Rows: Story = {
  args: {
    rows: 8,
    placeholder: 'rows: 8',
    value: '',
  },
  render: function Render(args) {
    const [value, setValue] = useState(args.value ?? '');
    useEffect(() => {
      setValue(args.value ?? '');
    }, [args.value]);

    return (
      <TextArea
        {...args}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    );
  },
};

export const IsError: Story = {
  render: function Render() {
    const [defaultValue, setDefaultValue] = useState('');
    const [errorValue, setErrorValue] = useState('');

    return (
      <Box className="flex flex-col gap-4">
        <TextArea
          value={defaultValue}
          placeholder="Default"
          onChange={(event) => setDefaultValue(event.target.value)}
        />
        <TextArea
          value={errorValue}
          placeholder="Error state"
          isError
          onChange={(event) => setErrorValue(event.target.value)}
        />
      </Box>
    );
  },
};

export const IsDisabled: Story = {
  render: function Render() {
    const [value, setValue] = useState('Editable');

    return (
      <Box className="flex flex-col gap-4">
        <TextArea
          value={value}
          placeholder="Enabled"
          onChange={(event) => setValue(event.target.value)}
        />
        <TextArea
          value="Not editable"
          placeholder="Disabled"
          isDisabled
          onChange={() => undefined}
        />
      </Box>
    );
  },
};

export const MaxLength: Story = {
  args: {
    maxLength: 13,
    value: 'Max length 13',
  },
  render: function Render(args) {
    const [value, setValue] = useState(args.value ?? '');
    useEffect(() => {
      setValue(args.value ?? '');
    }, [args.value]);

    return (
      <TextArea
        {...args}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    );
  },
};

export const IsReadOnly: Story = {
  render: function Render() {
    const [value, setValue] = useState('Editable');

    return (
      <Box className="flex flex-col gap-4">
        <TextArea
          value={value}
          placeholder="Editable field"
          onChange={(event) => setValue(event.target.value)}
        />
        <TextArea
          value="Cannot edit this value"
          placeholder="Read-only"
          isReadOnly
          onChange={() => undefined}
        />
      </Box>
    );
  },
};

// eslint-disable-next-line @typescript-eslint/no-shadow
export const Required: Story = {
  args: {
    required: true,
    placeholder: 'Required',
    value: '',
  },
  render: function Render(args) {
    const [value, setValue] = useState(args.value ?? '');
    useEffect(() => {
      setValue(args.value ?? '');
    }, [args.value]);

    return (
      <TextArea
        {...args}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    );
  },
};

export const Resize: Story = {
  render: function Render() {
    const [noneValue, setNoneValue] = useState('Cannot be resized');
    const [verticalValue, setVerticalValue] = useState('Resize vertical only');
    const [horizontalValue, setHorizontalValue] = useState(
      'Resize horizontal only',
    );
    const [bothValue, setBothValue] = useState('Resize in both directions');

    return (
      <Box className="flex flex-col gap-4">
        <TextArea
          value={noneValue}
          placeholder="No resize (default)"
          resize={TextAreaResize.None}
          onChange={(event) => setNoneValue(event.target.value)}
        />
        <TextArea
          value={verticalValue}
          placeholder="Vertical resize"
          resize={TextAreaResize.Vertical}
          onChange={(event) => setVerticalValue(event.target.value)}
        />
        <TextArea
          value={horizontalValue}
          placeholder="Horizontal resize"
          resize={TextAreaResize.Horizontal}
          onChange={(event) => setHorizontalValue(event.target.value)}
        />
        <TextArea
          value={bothValue}
          placeholder="Both directions"
          resize={TextAreaResize.Both}
          onChange={(event) => setBothValue(event.target.value)}
        />
      </Box>
    );
  },
};
