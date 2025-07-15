import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import {
  BoxFlexDirection,
  BoxFlexWrap,
  BoxAlignItems,
  BoxJustifyContent,
  BoxBackgroundColor,
  BoxBorderColor,
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
    margin: {
      control: 'number',
      description: 'The margin of the component on all sides.',
    },
    marginTop: {
      control: 'number',
      description: 'The top margin of the component.',
    },
    marginRight: {
      control: 'number',
      description: 'The right margin of the component.',
    },
    marginBottom: {
      control: 'number',
      description: 'The bottom margin of the component.',
    },
    marginLeft: {
      control: 'number',
      description: 'The left margin of the component.',
    },
    marginHorizontal: {
      control: 'number',
      description: 'The horizontal margin of the component.',
    },
    marginVertical: {
      control: 'number',
      description: 'The vertical margin of the component.',
    },
    padding: {
      control: 'number',
      description: 'The padding of the component on all sides.',
    },
    paddingTop: {
      control: 'number',
      description: 'The top padding of the component.',
    },
    paddingRight: {
      control: 'number',
      description: 'The right padding of the component.',
    },
    paddingBottom: {
      control: 'number',
      description: 'The bottom padding of the component.',
    },
    paddingLeft: {
      control: 'number',
      description: 'The left padding of the component.',
    },
    paddingHorizontal: {
      control: 'number',
      description: 'The horizontal padding of the component.',
    },
    paddingVertical: {
      control: 'number',
      description: 'The vertical padding of the component.',
    },
    borderWidth: {
      control: 'number',
      description: 'The border width of the component.',
    },
    borderColor: {
      control: 'select',
      options: Object.keys(BoxBorderColor),
      mapping: BoxBorderColor,
      description: 'The border color of the component.',
    },
    backgroundColor: {
      control: 'select',
      options: Object.keys(BoxBackgroundColor),
      mapping: BoxBackgroundColor,
      description: 'The background color of the component.',
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
  render: (args: BoxProps) => <BoxStory {...args} />,
};

export const FlexDirection: Story = {
  args: {
    flexDirection: BoxFlexDirection.Row,
    gap: 2,
  },
  render: (args: BoxProps) => <BoxStory {...args} />,
};

export const FlexWrap: Story = {
  args: {
    flexDirection: BoxFlexDirection.Row,
    flexWrap: BoxFlexWrap.Wrap,
    gap: 2,
    className: 'w-1/2',
  },
  render: (args: BoxProps) => (
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
  render: (args: BoxProps) => <BoxStory {...args} />,
};

export const AlignItems: Story = {
  args: {
    alignItems: BoxAlignItems.Center,
    className: 'h-1/2',
  },
  render: (args: BoxProps) => <BoxStory {...args} />,
};

export const JustifyContent: Story = {
  args: {
    flexDirection: BoxFlexDirection.Row,
    justifyContent: BoxJustifyContent.Between,
  },
  render: (args: BoxProps) => <BoxStory {...args} />,
};

export const Margin: Story = {
  args: {
    margin: 4,
    backgroundColor: BoxBackgroundColor.PrimaryMuted,
  },
  render: (args: BoxProps) => (
    <Box backgroundColor={BoxBackgroundColor.Alternative} padding={2}>
      <Text>Outer container</Text>
      <Box {...args}>
        <Text>Inner box with margin</Text>
      </Box>
    </Box>
  ),
};

export const MarginDirectional: Story = {
  args: {
    marginTop: 2,
    marginBottom: 4,
    marginLeft: 3,
    marginRight: 1,
    backgroundColor: BoxBackgroundColor.WarningMuted,
  },
  render: (args: BoxProps) => (
    <Box backgroundColor={BoxBackgroundColor.Alternative} padding={2}>
      <Text>Outer container</Text>
      <Box {...args}>
        <Text>Box with directional margins</Text>
      </Box>
    </Box>
  ),
};

export const Padding: Story = {
  args: {
    padding: 6,
    backgroundColor: BoxBackgroundColor.SuccessMuted,
  },
  render: (args: BoxProps) => (
    <Box {...args}>
      <Text>Box with padding</Text>
    </Box>
  ),
};

export const PaddingDirectional: Story = {
  args: {
    paddingTop: 2,
    paddingBottom: 4,
    paddingHorizontal: 6,
    backgroundColor: BoxBackgroundColor.InfoMuted,
  },
  render: (args: BoxProps) => (
    <Box {...args}>
      <Text>Box with directional padding</Text>
    </Box>
  ),
};

export const Border: Story = {
  args: {
    borderWidth: 2,
    borderColor: BoxBorderColor.PrimaryDefault,
    padding: 4,
  },
  render: (args: BoxProps) => (
    <Box {...args}>
      <Text>Box with border</Text>
    </Box>
  ),
};

export const BackgroundColor: Story = {
  args: {
    backgroundColor: BoxBackgroundColor.PrimaryDefault,
    padding: 4,
  },
  render: (args: BoxProps) => (
    <Box {...args}>
      <Text>Box with background color</Text>
    </Box>
  ),
};

export const ClassName: Story = {
  args: {
    className:
      'p-4 bg-primary-muted border-2 border-primary-default rounded-lg',
  },
  render: (args: BoxProps) => <BoxStory {...args} />,
};
