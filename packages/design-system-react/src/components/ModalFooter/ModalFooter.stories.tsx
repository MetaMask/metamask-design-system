import type { Meta, StoryObj } from '@storybook/react-vite';
import React, { useState } from 'react';

import { Box, BoxFlexDirection } from '../Box';
import { Checkbox } from '../Checkbox';

import { ModalFooter } from './ModalFooter';
import { ButtonsAlignment } from './ModalFooter.types';
import type { ModalFooterProps } from './ModalFooter.types';
import README from './README.mdx';

const meta: Meta<ModalFooterProps> = {
  title: 'React Components/ModalFooter',
  component: ModalFooter,
  parameters: {
    docs: {
      page: README,
    },
    a11y: {
      config: {
        rules: [
          {
            id: 'landmark-no-duplicate-contentinfo',
            enabled: false, // Storybook renders light + dark themes simultaneously, duplicating the <footer>
          },
          {
            id: 'landmark-unique',
            enabled: false, // Same reason — single ModalFooter in production, duplicated by theme decorator
          },
        ],
      },
    },
  },
  // Wrap each story in a dialog landmark so the `<footer>` inside is scoped
  // to its parent role and is not treated as a top-level `contentinfo`
  // landmark by axe. This mirrors real usage — `ModalFooter` always lives
  // inside a `Modal`/`<dialog>`.
  decorators: [
    (Story, context) => (
      <div
        role="dialog"
        aria-modal="true"
        aria-label={`ModalFooter — ${context.name}`}
      >
        <Story />
      </div>
    ),
  ],
  argTypes: {
    className: { control: 'text' },
    buttonsAlignment: {
      control: 'radio',
      options: Object.values(ButtonsAlignment),
    },
    primaryButtonProps: { control: 'object' },
    secondaryButtonProps: { control: 'object' },
  },
};

export default meta;

type Story = StoryObj<ModalFooterProps>;

export const Default: Story = {
  args: {
    primaryButtonProps: {
      children: 'Confirm',
      onClick: () => undefined,
    },
    secondaryButtonProps: {
      children: 'Cancel',
      onClick: () => undefined,
    },
  },
};

export const PrimaryOnly: Story = {
  args: {
    primaryButtonProps: {
      children: 'Confirm',
      onClick: () => undefined,
    },
  },
};

export const SecondaryOnly: Story = {
  args: {
    secondaryButtonProps: {
      children: 'Cancel',
      onClick: () => undefined,
    },
  },
};

export const HorizontalAlignment: Story = {
  args: {
    buttonsAlignment: ButtonsAlignment.Horizontal,
    primaryButtonProps: {
      children: 'I want to approve',
      onClick: () => undefined,
    },
    secondaryButtonProps: {
      children: 'Cancel this',
      onClick: () => undefined,
    },
  },
};

export const VerticalAlignment: Story = {
  args: {
    buttonsAlignment: ButtonsAlignment.Vertical,
    primaryButtonProps: {
      children: 'I want to approve',
      onClick: () => undefined,
    },
    secondaryButtonProps: {
      children: 'Cancel this',
      onClick: () => undefined,
    },
  },
};

export const Children: Story = {
  args: {
    primaryButtonProps: {
      children: 'Confirm',
      onClick: () => undefined,
    },
    secondaryButtonProps: {
      children: 'Cancel',
      onClick: () => undefined,
    },
  },
  render: (args) => {
    const [isSelected, setIsSelected] = useState(false);
    return (
      <ModalFooter {...args}>
        <Box flexDirection={BoxFlexDirection.Row} gap={2} className="mb-4">
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
