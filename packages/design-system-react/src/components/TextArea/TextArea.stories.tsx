import { TextVariant } from '@metamask/design-system-shared';
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
      onChange={(event) => setValue(event.target.value)}
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
    textVariant: {
      control: 'select',
      options: Object.values(TextVariant),
      description: 'Typography variant for the textarea text',
    },
    resize: {
      control: 'select',
      options: Object.values(TextAreaResize),
      description: 'Controls the resize behavior of the textarea',
    },
    isDisabled: {
      control: 'boolean',
      description: 'When true, disables the textarea',
    },
    isReadOnly: {
      control: 'boolean',
      description: 'When true, makes the textarea read-only',
    },
    isError: {
      control: 'boolean',
      description: 'When true, applies error styling to the textarea',
    },
    placeholder: {
      control: 'text',
    },
    value: {
      control: 'text',
    },
    rows: {
      control: 'number',
    },
  },
};

export default meta;

type Story = StoryObj<TextAreaProps>;

export const Default: Story = {
  args: {
    value: '',
    placeholder: 'Sample placeholder',
  },
  render: (args) => <ControlledTextArea {...args} />,
};

export const TextVariantStory: Story = {
  name: 'TextVariant',
  render: () => (
    <div className="flex flex-col gap-4">
      <ControlledTextArea
        placeholder="BodyMd (default)"
        textVariant={TextVariant.BodyMd}
        value="Sample text"
      />
      <ControlledTextArea
        placeholder="BodySm"
        textVariant={TextVariant.BodySm}
        value="Sample text"
      />
      <ControlledTextArea
        placeholder="HeadingSm"
        textVariant={TextVariant.HeadingSm}
        value="Sample text"
      />
    </div>
  ),
};

export const Resize: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <ControlledTextArea
        placeholder="Vertical resize (default)"
        resize={TextAreaResize.Vertical}
        value="Resize vertical only"
      />
      <ControlledTextArea
        placeholder="Horizontal resize"
        resize={TextAreaResize.Horizontal}
        value="Resize horizontal only"
      />
      <ControlledTextArea
        placeholder="Both directions"
        resize={TextAreaResize.Both}
        value="Resize in both directions"
      />
      <ControlledTextArea
        placeholder="No resize"
        resize={TextAreaResize.None}
        value="Cannot be resized"
      />
    </div>
  ),
};

export const IsDisabled: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <ControlledTextArea placeholder="Enabled" value="Editable" />
      <TextArea placeholder="Disabled" value="Not editable" isDisabled />
    </div>
  ),
};

export const IsReadOnly: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <ControlledTextArea placeholder="Editable" value="" />
      <TextArea placeholder="Read-only" value="Read-only value" isReadOnly />
    </div>
  ),
};

export const IsError: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <ControlledTextArea placeholder="Default state" value="Normal textarea" />
      <ControlledTextArea
        placeholder="Error state"
        value="This field has an error"
        isError
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
