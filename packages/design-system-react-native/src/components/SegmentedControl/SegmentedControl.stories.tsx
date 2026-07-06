import { SegmentedControlSize } from '@metamask/design-system-shared';
import type { Meta, StoryObj } from '@storybook/react-native';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

import { Box } from '../Box';
import { FilterButton } from '../FilterButton';

import { SegmentedControl } from './SegmentedControl';
import type { SegmentedControlProps } from './SegmentedControl.types';

const noopPress = () => undefined;

const meta: Meta<SegmentedControlProps> = {
  title: 'Components/SegmentedControl',
  component: SegmentedControl,
  argTypes: {
    value: {
      control: 'text',
      description:
        'Selected segment value matching a child FilterButton value.',
    },
    size: {
      control: 'select',
      options: Object.keys(SegmentedControlSize),
      mapping: SegmentedControlSize,
      description: 'Size of the control and child FilterButton segments.',
    },
    isFullWidth: {
      control: 'boolean',
      description:
        'When true, stretches to the parent width with equal-width segments.',
    },
  },
  decorators: [
    (Story) => (
      <View style={{ padding: 16, alignItems: 'flex-start' }}>
        <Story />
      </View>
    ),
  ],
};

export default meta;

type Story = StoryObj<SegmentedControlProps>;

const ControlledSegmentedControl = ({
  value: valueArg = 'reaches',
  ...args
}: Partial<SegmentedControlProps>) => {
  const [value, setValue] = useState(valueArg);

  useEffect(() => {
    setValue(valueArg);
  }, [valueArg]);

  return (
    <SegmentedControl {...args} value={value} onChange={setValue}>
      <FilterButton value="reaches" onPress={noopPress}>
        Price reaches
      </FilterButton>
      <FilterButton value="change" onPress={noopPress}>
        Price change
      </FilterButton>
    </SegmentedControl>
  );
};

export const Default: Story = {
  args: {
    value: 'reaches',
    size: SegmentedControlSize.Sm,
    isFullWidth: false,
  },
  render: (args) => <ControlledSegmentedControl {...args} />,
};

export const Size: Story = {
  render: () => {
    const [smValue, setSmValue] = useState('reaches');
    const [mdValue, setMdValue] = useState('reaches');
    const [lgValue, setLgValue] = useState('reaches');

    return (
      <Box gap={6}>
        <SegmentedControl
          value={smValue}
          onChange={setSmValue}
          size={SegmentedControlSize.Sm}
        >
          <FilterButton value="reaches" onPress={noopPress}>
            Small
          </FilterButton>
          <FilterButton value="change" onPress={noopPress}>
            Segment
          </FilterButton>
        </SegmentedControl>
        <SegmentedControl
          value={mdValue}
          onChange={setMdValue}
          size={SegmentedControlSize.Md}
        >
          <FilterButton value="reaches" onPress={noopPress}>
            Medium
          </FilterButton>
          <FilterButton value="change" onPress={noopPress}>
            Segment
          </FilterButton>
        </SegmentedControl>
        <SegmentedControl
          value={lgValue}
          onChange={setLgValue}
          size={SegmentedControlSize.Lg}
        >
          <FilterButton value="reaches" onPress={noopPress}>
            Large
          </FilterButton>
          <FilterButton value="change" onPress={noopPress}>
            Segment
          </FilterButton>
        </SegmentedControl>
      </Box>
    );
  },
};

export const IsFullWidth: Story = {
  args: {
    isFullWidth: true,
  },
  decorators: [
    (Story) => (
      <View style={{ padding: 16, alignSelf: 'stretch' }}>
        <Story />
      </View>
    ),
  ],
  render: (args) => <ControlledSegmentedControl {...args} />,
};
