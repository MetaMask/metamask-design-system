import type { Meta, StoryObj } from '@storybook/react-vite';
import React, { useState } from 'react';

import { Box, BoxBorderColor, BoxFlexDirection } from '../Box';
import { Button, ButtonVariant } from '../Button';
import { Input } from '../Input';
import { Text } from '../Text';

import { ModalFocus } from './ModalFocus';
import type { ModalFocusProps } from './ModalFocus.types';
import README from './README.mdx';

const meta: Meta<ModalFocusProps> = {
  title: 'React Components/ModalFocus',
  component: ModalFocus,
  parameters: {
    docs: {
      page: README,
    },
  },
  argTypes: {
    autoFocus: {
      control: 'boolean',
      description:
        'If true, the first focusable element within children will be auto-focused on mount.',
    },
    restoreFocus: {
      control: 'boolean',
      description:
        'If true, focus is restored to the element that triggered the ModalFocus once it unmounts. Ignored when finalFocusRef is provided.',
    },
  },
};

export default meta;

type Story = StoryObj<ModalFocusProps>;

export const Default: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <Button variant={ButtonVariant.Primary} onClick={() => setIsOpen(true)}>
          Open
        </Button>
        {isOpen && (
          <ModalFocus {...args}>
            <Box
              borderWidth={1}
              borderColor={BoxBorderColor.BorderDefault}
              flexDirection={BoxFlexDirection.Column}
              padding={4}
              gap={4}
            >
              <Text>Modal focus children</Text>
              <Input aria-label="example input" />
              <Text>
                Tab around — focus is trapped inside the ModalFocus subtree.
              </Text>
              <Button
                variant={ButtonVariant.Primary}
                onClick={() => setIsOpen(false)}
              >
                Close
              </Button>
            </Box>
          </ModalFocus>
        )}
      </>
    );
  },
};
