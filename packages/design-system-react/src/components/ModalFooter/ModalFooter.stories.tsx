import type { Meta, StoryObj } from '@storybook/react-vite';
import React, { useState } from 'react';

import { Box, BoxBackgroundColor, BoxFlexDirection } from '../Box';
import { Checkbox } from '../Checkbox';

import { ModalFooter } from './ModalFooter';
import type { ModalFooterProps } from './ModalFooter.types';
import README from './README.mdx';

const meta: Meta<ModalFooterProps> = {
  title: 'React Components/ModalFooter',
  component: ModalFooter,
  parameters: {
    docs: {
      page: README,
    },
  },
  argTypes: {
    className: { control: 'text' },
    submitButtonProps: { control: 'object' },
    cancelButtonProps: { control: 'object' },
    onSubmit: { action: 'onSubmit' },
    onCancel: { action: 'onCancel' },
  },
};

export default meta;

type Story = StoryObj<ModalFooterProps>;

export const Default: Story = {
  args: {
    onSubmit: () => undefined,
    onCancel: () => undefined,
  },
};

export const OnSubmit: Story = {
  args: {
    onSubmit: () => undefined,
  },
};

export const OnCancel: Story = {
  args: {
    onCancel: () => undefined,
  },
};

export const SubmitButtonPropsCancelButtonProps: Story = {
  args: {
    onSubmit: () => undefined,
    onCancel: () => undefined,
    submitButtonProps: { children: 'I want to approve' },
    cancelButtonProps: { children: 'Cancel this' },
  },
};

export const ContainerProps: Story = {
  args: {
    onSubmit: () => undefined,
    onCancel: () => undefined,
  },
  render: (args) => (
    <Box flexDirection={BoxFlexDirection.Column} gap={4}>
      <ModalFooter
        {...args}
        backgroundColor={BoxBackgroundColor.PrimaryMuted}
        containerProps={{
          backgroundColor: BoxBackgroundColor.ErrorMuted,
          className: 'max-w-[480px]',
        }}
      />
      <ModalFooter
        {...args}
        backgroundColor={BoxBackgroundColor.PrimaryMuted}
        containerProps={{
          backgroundColor: BoxBackgroundColor.ErrorMuted,
          className: 'max-w-[720px]',
        }}
      />
      <ModalFooter
        {...args}
        backgroundColor={BoxBackgroundColor.PrimaryMuted}
        containerProps={{
          backgroundColor: BoxBackgroundColor.ErrorMuted,
          className: 'max-w-full',
        }}
      />
    </Box>
  ),
};

export const Children: Story = {
  args: {
    onSubmit: () => undefined,
    onCancel: () => undefined,
  },
  render: (args) => {
    const [isSelected, setIsSelected] = useState(false);
    return (
      <ModalFooter {...args}>
        <Box className="mx-auto mb-4 max-w-[360px]">
          <Checkbox
            id="modal-footer-terms"
            label="I agree to the terms and conditions"
            isSelected={isSelected}
            onChange={() => setIsSelected(!isSelected)}
          />
        </Box>
      </ModalFooter>
    );
  },
};
