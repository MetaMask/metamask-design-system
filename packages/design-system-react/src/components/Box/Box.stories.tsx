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
  BoxBlockSize,
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
      control: 'select',
      options: Object.keys(BoxBlockSize),
      mapping: BoxBlockSize,
      description: 'The width style of the component.',
    },
    minWidth: {
      control: 'select',
      options: Object.keys(BoxBlockSize),
      mapping: BoxBlockSize,
      description: 'The min-width style of the component.',
    },
    height: {
      control: 'select',
      options: Object.keys(BoxBlockSize),
      mapping: BoxBlockSize,
      description: 'The height style of the component.',
    },
    minHeight: {
      control: 'select',
      options: Object.keys(BoxBlockSize),
      mapping: BoxBlockSize,
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
    flexDirection: BoxFlexDirection.Row,
    gap: 2,
    padding: 3,
    backgroundColor: BoxBackgroundColor.BackgroundAlternative,
  },
  render: (args) => <BoxStory {...args} />,
};

export const FlexWrap: Story = {
  args: {
    flexDirection: BoxFlexDirection.Row,
    flexWrap: BoxFlexWrap.Wrap,
    gap: 2,
    padding: 3,
    backgroundColor: BoxBackgroundColor.BackgroundAlternative,
    width: BoxBlockSize.Half,
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
    padding: 3,
    backgroundColor: BoxBackgroundColor.BackgroundAlternative,
  },
  render: (args) => <BoxStory {...args} />,
};

export const Margin: Story = {
  args: {
    margin: 4,
    padding: 3,
    backgroundColor: BoxBackgroundColor.PrimaryMuted,
  },
  render: (args) => (
    <Box backgroundColor={BoxBackgroundColor.BackgroundAlternative} padding={2}>
      <BoxStory {...args} />
    </Box>
  ),
};

export const MarginTop: Story = {
  args: {
    marginTop: 4,
    padding: 3,
    backgroundColor: BoxBackgroundColor.PrimaryMuted,
  },
  render: (args) => (
    <Box backgroundColor={BoxBackgroundColor.BackgroundAlternative} padding={2}>
      <Box padding={2} backgroundColor={BoxBackgroundColor.InfoMuted}>
        <Text>Reference box above</Text>
      </Box>
      <BoxStory {...args} />
    </Box>
  ),
};

export const MarginBottom: Story = {
  args: {
    marginBottom: 4,
    padding: 3,
    backgroundColor: BoxBackgroundColor.PrimaryMuted,
  },
  render: (args) => (
    <Box backgroundColor={BoxBackgroundColor.BackgroundAlternative} padding={2}>
      <BoxStory {...args} />
      <Box padding={2} backgroundColor={BoxBackgroundColor.InfoMuted}>
        <Text>Reference box below</Text>
      </Box>
    </Box>
  ),
};

export const MarginLeft: Story = {
  args: {
    marginLeft: 4,
    padding: 3,
    backgroundColor: BoxBackgroundColor.PrimaryMuted,
  },
  render: (args) => (
    <Box backgroundColor={BoxBackgroundColor.BackgroundAlternative} padding={2}>
      <BoxStory {...args} />
    </Box>
  ),
};

export const MarginRight: Story = {
  args: {
    marginRight: 4,
    padding: 3,
    backgroundColor: BoxBackgroundColor.PrimaryMuted,
  },
  render: (args) => (
    <Box backgroundColor={BoxBackgroundColor.BackgroundAlternative} padding={2}>
      <BoxStory {...args} />
    </Box>
  ),
};

export const Padding: Story = {
  args: {
    padding: 4,
    backgroundColor: BoxBackgroundColor.PrimaryMuted,
  },
  render: (args) => <BoxStory {...args} />,
};

export const PaddingTop: Story = {
  args: {
    paddingTop: 4,
    padding: 2,
    backgroundColor: BoxBackgroundColor.PrimaryMuted,
  },
  render: (args) => <BoxStory {...args} />,
};

export const PaddingBottom: Story = {
  args: {
    paddingBottom: 4,
    padding: 2,
    backgroundColor: BoxBackgroundColor.PrimaryMuted,
  },
  render: (args) => <BoxStory {...args} />,
};

export const PaddingLeft: Story = {
  args: {
    paddingLeft: 4,
    padding: 2,
    backgroundColor: BoxBackgroundColor.PrimaryMuted,
  },
  render: (args) => <BoxStory {...args} />,
};

export const PaddingRight: Story = {
  args: {
    paddingRight: 4,
    padding: 2,
    backgroundColor: BoxBackgroundColor.PrimaryMuted,
  },
  render: (args) => <BoxStory {...args} />,
};

export const BorderColor: Story = {
  args: {
    borderColor: BoxBorderColor.PrimaryDefault,
    borderWidth: BoxBorderWidth.Md,
    padding: 3,
  },
  render: (args) => <BoxStory {...args} />,
};

export const BorderWidth: Story = {
  args: {
    borderWidth: BoxBorderWidth.Lg,
    borderColor: BoxBorderColor.PrimaryDefault,
    padding: 3,
  },
  render: (args) => <BoxStory {...args} />,
};

export const BorderRadius: Story = {
  args: {
    borderRadius: BoxBorderRadius.Lg,
    backgroundColor: BoxBackgroundColor.PrimaryMuted,
    padding: 4,
  },
  render: (args) => <BoxStory {...args} />,
};

export const BorderStyle: Story = {
  args: {
    borderStyle: BoxBorderStyle.Dashed,
    borderWidth: BoxBorderWidth.Md,
    borderColor: BoxBorderColor.PrimaryDefault,
    padding: 3,
  },
  render: (args) => <BoxStory {...args} />,
};

export const AlignItems: Story = {
  args: {
    alignItems: BoxAlignItems.Center,
    height: BoxBlockSize.Half,
    backgroundColor: BoxBackgroundColor.BackgroundAlternative,
    padding: 3,
  },
  render: (args) => <BoxStory {...args} />,
};

export const JustifyContent: Story = {
  args: {
    flexDirection: BoxFlexDirection.Row,
    justifyContent: BoxJustifyContent.Between,
    backgroundColor: BoxBackgroundColor.BackgroundAlternative,
    padding: 3,
  },
  render: (args) => <BoxStory {...args} />,
};

export const Width: Story = {
  args: {
    width: BoxBlockSize.Half,
    backgroundColor: BoxBackgroundColor.PrimaryMuted,
    padding: 3,
  },
  render: (args) => (
    <Box backgroundColor={BoxBackgroundColor.BackgroundAlternative} padding={2}>
      <BoxStory {...args} />
    </Box>
  ),
};

export const MinWidth: Story = {
  args: {
    minWidth: BoxBlockSize.Half,
    backgroundColor: BoxBackgroundColor.PrimaryMuted,
    padding: 3,
  },
  render: (args) => (
    <Box backgroundColor={BoxBackgroundColor.BackgroundAlternative} padding={2}>
      <BoxStory {...args} />
    </Box>
  ),
};

export const Height: Story = {
  args: {
    height: BoxBlockSize.Half,
    backgroundColor: BoxBackgroundColor.PrimaryMuted,
    padding: 3,
  },
  render: (args) => (
    <Box
      backgroundColor={BoxBackgroundColor.BackgroundAlternative}
      padding={2}
      style={{ height: '400px' }}
    >
      <BoxStory {...args} />
    </Box>
  ),
};

export const MinHeight: Story = {
  args: {
    minHeight: BoxBlockSize.OneFourth,
    backgroundColor: BoxBackgroundColor.PrimaryMuted,
    padding: 3,
  },
  render: (args) => (
    <Box
      backgroundColor={BoxBackgroundColor.BackgroundAlternative}
      padding={2}
      style={{ height: '200px' }}
    >
      <BoxStory {...args} />
    </Box>
  ),
};

export const BackgroundColor: Story = {
  args: {
    backgroundColor: BoxBackgroundColor.SuccessMuted,
    padding: 4,
  },
  render: (args) => <BoxStory {...args} />,
};

export const CombinedStyles: Story = {
  args: {
    flexDirection: BoxFlexDirection.Row,
    gap: 3,
    padding: 4,
    margin: 2,
    backgroundColor: BoxBackgroundColor.PrimaryMuted,
    borderRadius: BoxBorderRadius.Lg,
    borderWidth: BoxBorderWidth.Sm,
    borderColor: BoxBorderColor.PrimaryDefault,
    alignItems: BoxAlignItems.Center,
    justifyContent: BoxJustifyContent.Between,
  },
  render: (args) => (
    <Box backgroundColor={BoxBackgroundColor.BackgroundAlternative} padding={3}>
      <BoxStory {...args} />
    </Box>
  ),
};
