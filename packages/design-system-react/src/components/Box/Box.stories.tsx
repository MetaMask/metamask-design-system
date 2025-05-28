import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import {
  BoxBackgroundColor,
  BoxBorderColor,
  BoxBorderRadius,
  BoxBorderWidth,
  BoxBorderStyle,
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
    margin: {
      control: 'number',
      description: 'The margin style of the component.',
    },
    marginTop: {
      control: 'number',
      description: 'The margin-top style of the component.',
    },
    marginBottom: {
      control: 'number',
      description: 'The margin-bottom style of the component.',
    },
    marginLeft: {
      control: 'number',
      description: 'The margin-left style of the component.',
    },
    marginRight: {
      control: 'number',
      description: 'The margin-right style of the component.',
    },
    padding: {
      control: 'number',
      description: 'The padding style of the component.',
    },
    paddingTop: {
      control: 'number',
      description: 'The padding-top style of the component.',
    },
    paddingBottom: {
      control: 'number',
      description: 'The padding-bottom style of the component.',
    },
    paddingLeft: {
      control: 'number',
      description: 'The padding-left style of the component.',
    },
    paddingRight: {
      control: 'number',
      description: 'The padding-right style of the component.',
    },
    borderColor: {
      control: 'select',
      options: Object.keys(BoxBorderColor),
      mapping: BoxBorderColor,
      description: 'The border-color style of the component.',
    },
    borderWidth: {
      control: 'select',
      options: Object.keys(BoxBorderWidth),
      mapping: BoxBorderWidth,
      description: 'The border-width style of the component.',
    },
    borderRadius: {
      control: 'select',
      options: Object.keys(BoxBorderRadius),
      mapping: BoxBorderRadius,
      description: 'The border-radius style of the component.',
    },
    borderStyle: {
      control: 'select',
      options: Object.keys(BoxBorderStyle),
      mapping: BoxBorderStyle,
      description: 'The border-style style of the component.',
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
    width: {
      control: 'number',
      description: 'The width style of the component.',
    },
    minWidth: {
      control: 'number',
      description: 'The min-width style of the component.',
    },
    height: {
      control: 'number',
      description: 'The height style of the component.',
    },
    minHeight: {
      control: 'number',
      description: 'The min-height style of the component.',
    },
    backgroundColor: {
      control: 'select',
      options: Object.keys(BoxBackgroundColor),
      mapping: BoxBackgroundColor,
      description: 'The background-color style of the component.',
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
    flexDirection: BoxFlexDirection.Column,
  },
  render: (args) => <BoxStory {...args} />,
};

export const FlexWrap: Story = {
  args: {
    flexWrap: BoxFlexWrap.Wrap,
  },
  render: (args) => <BoxStory {...args} />,
};

export const Gap: Story = {
  args: {
    gap: 4,
  },
  render: (args) => <BoxStory {...args} />,
};

export const Margin: Story = {
  args: {
    margin: 2,
  },
  render: (args) => <BoxStory {...args} />,
};

export const MarginTop: Story = {
  args: {
    marginTop: 2,
  },
  render: (args) => <BoxStory {...args} />,
};

export const MarginBottom: Story = {
  args: {
    marginBottom: 2,
  },
  render: (args) => <BoxStory {...args} />,
};

export const MarginLeft: Story = {
  args: {
    marginLeft: 2,
  },
  render: (args) => <BoxStory {...args} />,
};

export const MarginRight: Story = {
  args: {
    marginRight: 2,
  },
  render: (args) => <BoxStory {...args} />,
};

export const Padding: Story = {
  args: {
    padding: 2,
  },
  render: (args) => <BoxStory {...args} />,
};

export const PaddingTop: Story = {
  args: {
    paddingTop: 2,
  },
  render: (args) => <BoxStory {...args} />,
};

export const PaddingBottom: Story = {
  args: {
    paddingBottom: 2,
  },
  render: (args) => <BoxStory {...args} />,
};

export const PaddingLeft: Story = {
  args: {
    paddingLeft: 2,
  },
  render: (args) => <BoxStory {...args} />,
};

export const PaddingRight: Story = {
  args: {
    paddingRight: 2,
  },
  render: (args) => <BoxStory {...args} />,
};

export const BorderColor: Story = {
  args: {
    borderColor: BoxBorderColor.PrimaryDefault,
  },
  render: (args) => <BoxStory {...args} />,
};

export const BorderWidth: Story = {
  args: {
    borderWidth: BoxBorderWidth.Lg,
  },
  render: (args) => <BoxStory {...args} />,
};

export const BorderRadius: Story = {
  args: {
    borderRadius: BoxBorderRadius.Lg,
  },
  render: (args) => <BoxStory {...args} />,
};

export const BorderStyle: Story = {
  args: {
    borderStyle: BoxBorderStyle.Dashed,
  },
  render: (args) => <BoxStory {...args} />,
};

export const AlignItems: Story = {
  args: {
    alignItems: BoxAlignItems.Center,
  },
  render: (args) => <BoxStory {...args} />,
};

export const JustifyContent: Story = {
  args: {
    justifyContent: BoxJustifyContent.Between,
  },
  render: (args) => <BoxStory {...args} />,
};

export const Width: Story = {
  args: {
    width: 6,
  },
  render: (args) => <BoxStory {...args} />,
};

export const MinWidth: Story = {
  args: {
    minWidth: 6,
  },
  render: (args) => <BoxStory {...args} />,
};

export const Height: Story = {
  args: {
    height: 6,
  },
  render: (args) => <BoxStory {...args} />,
};

export const MinHeight: Story = {
  args: {
    minHeight: 6,
  },
  render: (args) => <BoxStory {...args} />,
};

export const BackgroundColor: Story = {
  args: {
    backgroundColor: BoxBackgroundColor.PrimaryMuted,
  },
  render: (args) => <BoxStory {...args} />,
};
