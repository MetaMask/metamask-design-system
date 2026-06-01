import type { Meta, StoryObj } from '@storybook/react-vite';
import React, { useEffect, useState } from 'react';

import README from './README.mdx';
import { TextArea } from './TextArea';
import { TextAreaResize } from './TextArea.constants';
import type { TextAreaProps } from './TextArea.types';

function ControlledTextArea(props: TextAreaProps) {
  const [value, setValue] = useState(props.value ?? '');
  useEffect(() => {
    setValue(props.value ?? '');
  }, [props.value]);

  return (
    <TextArea
      {...props}
      value={value}
      onChange={(event) => {
        setValue(event.target.value);
        props.onChange?.(event);
      }}
    />
  );
}

const meta: Meta<TextAreaProps> = {
  title: 'React Components/TextArea',
  component: TextArea,
  parameters: {
    docs: {
      page: README,
    },
  },
  argTypes: {
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
    className: {
      control: 'text',
      description: 'Additional CSS classes merged with the component defaults',
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
  render: (args) => <ControlledTextArea {...args} />,
};

export const IsError: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <ControlledTextArea value="" placeholder="Default" />
      <ControlledTextArea value="" placeholder="Error state" isError />
    </div>
  ),
};

export const IsDisabled: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <ControlledTextArea value="Editable" placeholder="Enabled" />
      <ControlledTextArea
        value="Not editable"
        placeholder="Disabled"
        isDisabled
      />
    </div>
  ),
};

export const IsReadOnly: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <ControlledTextArea value="Editable" placeholder="Editable field" />
      <ControlledTextArea
        value="Cannot edit this value"
        placeholder="Read-only"
        isReadOnly
      />
    </div>
  ),
};

export const Resize: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <ControlledTextArea
        value="Cannot be resized"
        placeholder="No resize (default)"
        resize={TextAreaResize.None}
      />
      <ControlledTextArea
        value="Resize vertical only"
        placeholder="Vertical resize"
        resize={TextAreaResize.Vertical}
      />
      <ControlledTextArea
        value="Resize horizontal only"
        placeholder="Horizontal resize"
        resize={TextAreaResize.Horizontal}
      />
      <ControlledTextArea
        value="Resize in both directions"
        placeholder="Both directions"
        resize={TextAreaResize.Both}
      />
    </div>
  ),
};

export const Rows: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <ControlledTextArea
        placeholder="3 rows"
        rows={3}
        value="3-row textarea"
      />
      <ControlledTextArea
        placeholder="6 rows"
        rows={6}
        value="6-row textarea for longer content"
      />
    </div>
  ),
};
