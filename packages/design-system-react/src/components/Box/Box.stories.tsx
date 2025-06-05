import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import {
  BoxFlexDirection,
  BoxFlexWrap,
  BoxAlignItems,
  BoxJustifyContent,
} from '../../types';
import { Text } from '../Text';

import { Box } from './Box';
import type { BoxProps } from './Box.types';
import README from './README.mdx';

const meta: Meta<BoxProps> = {
  title: 'React Components/Box',
  component: Box,
  parameters: {
    docs: {
      page: README,
    },
  },
  argTypes: {
    flexDirection: {
      control: 'select',
      options: Object.keys(BoxFlexDirection),
      mapping: BoxFlexDirection,
      description: 'The flex-direction style of the component.',
    },
    flexWrap: {
      control: 'select',
      options: Object.keys(BoxFlexWrap),
      mapping: BoxFlexWrap,
      description: 'The flex-wrap style of the component.',
    },
    gap: {
      control: 'number',
      description: `The gap between the component's children.`,
    },
    alignItems: {
      control: 'select',
      options: Object.keys(BoxAlignItems),
      mapping: BoxAlignItems,
      description: 'The align-items style of the component.',
    },
    justifyContent: {
      control: 'select',
      options: Object.keys(BoxJustifyContent),
      mapping: BoxJustifyContent,
      description: 'The justify-content style of the component.',
    },
    className: {
      control: 'text',
      description:
        'Optional prop for additional CSS classes to be applied to the Box component.',
    },
  },
};

export default meta;

type Story = StoryObj<BoxProps>;
const BoxStory: React.FC<BoxProps> = (args) => {
  return (
    <Box {...args}>
      <Text>Text 1</Text>
      <Text>Text 2</Text>
      <Text>Text 3</Text>
    </Box>
  );
};

export const Default: Story = {
  render: (args) => <BoxStory {...args} />,
};

export const FlexDirection: Story = {
  args: {
    flexDirection: BoxFlexDirection.Row,
    gap: 2,
  },
  render: (args) => <BoxStory {...args} />,
};

export const FlexWrap: Story = {
  args: {
    flexDirection: BoxFlexDirection.Row,
    flexWrap: BoxFlexWrap.Wrap,
    gap: 2,
    className: 'w-1/2',
  },
  render: (args) => (
    <Box {...args}>
      <Text>Long text item 1</Text>
      <Text>Long text item 2</Text>
      <Text>Long text item 3</Text>
      <Text>Long text item 4</Text>
    </Box>
  ),
};

export const Gap: Story = {
  args: {
    gap: 4,
  },
  render: (args) => <BoxStory {...args} />,
};

export const AlignItems: Story = {
  args: {
    alignItems: BoxAlignItems.Center,
    className: 'h-1/2',
  },
  render: (args) => <BoxStory {...args} />,
};

export const JustifyContent: Story = {
  args: {
    flexDirection: BoxFlexDirection.Row,
    justifyContent: BoxJustifyContent.Between,
  },
  render: (args) => <BoxStory {...args} />,
};

export const ClassName: Story = {
  args: {
    className:
      'border-2 border-dashed border-warning-default bg-warning-muted p-3',
  },
  render: (args) => <BoxStory {...args} />,
};
