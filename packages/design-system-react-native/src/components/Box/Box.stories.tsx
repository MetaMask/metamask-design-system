import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';

import {
  BoxFlexDirection,
  BoxFlexWrap,
  BoxAlignItems,
  BoxJustifyContent,
  BoxBorderColor,
  BoxBorderRadius,
  BoxBorderWidth,
  BoxBorderStyle,
  BoxBackgroundColor,
  BoxBlockSize,
} from '../../types';
import { Text } from '../Text';

import { Box } from './Box';
import type { BoxProps } from './Box.types';

const meta: Meta<BoxProps> = {
  title: 'Components/Box',
  component: Box,
  argTypes: {
    flexDirection: { control: 'select', options: BoxFlexDirection },
    flexWrap: { control: 'select', options: BoxFlexWrap },
    gap: { control: 'number', min: 0, max: 12 },
    margin: { control: 'number', min: 0, max: 12 },
    marginTop: { control: 'number', min: 0, max: 12 },
    marginBottom: { control: 'number', min: 0, max: 12 },
    marginLeft: { control: 'number', min: 0, max: 12 },
    marginRight: { control: 'number', min: 0, max: 12 },
    padding: { control: 'number', min: 0, max: 12 },
    paddingTop: { control: 'number', min: 0, max: 12 },
    paddingBottom: { control: 'number', min: 0, max: 12 },
    paddingLeft: { control: 'number', min: 0, max: 12 },
    paddingRight: { control: 'number', min: 0, max: 12 },
    borderColor: { control: 'select', options: BoxBorderColor },
    borderWidth: { control: 'select', options: BoxBorderWidth },
    borderRadius: { control: 'select', options: BoxBorderRadius },
    borderStyle: { control: 'select', options: BoxBorderStyle },
    alignItems: { control: 'select', options: BoxAlignItems },
    justifyContent: { control: 'select', options: BoxJustifyContent },
    width: { control: 'select', options: BoxBlockSize },
    minWidth: { control: 'select', options: BoxBlockSize },
    height: { control: 'select', options: BoxBlockSize },
    minHeight: { control: 'select', options: BoxBlockSize },
    backgroundColor: { control: 'select', options: BoxBackgroundColor },
    twClassName: { control: 'text' },
    children: { control: 'text' },
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
      height={BoxBlockSize.Screen}
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
      height={BoxBlockSize.Half}
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

export const TwClassName: Story = {
  args: {
    twClassName:
      'border-2 border-dashed border-warning-default bg-warning-muted',
    padding: 3,
  },
  render: (args) => <BoxStory {...args} />,
};
