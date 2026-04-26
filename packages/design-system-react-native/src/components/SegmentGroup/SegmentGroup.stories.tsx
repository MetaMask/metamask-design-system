import {
  SelectButtonEndArrow,
  SegmentButtonVariant,
} from '@metamask/design-system-shared';
import type { Meta, StoryObj } from '@storybook/react-native';
import React, { useState } from 'react';
import type { ViewProps } from 'react-native';
import { View } from 'react-native';

import { ChartSegmentButton } from '../ChartSegmentButton';
import { ChartSelectButton } from '../ChartSelectButton';
import { FilterSegmentButton } from '../FilterSegmentButton';
import { FilterSelectButton } from '../FilterSelectButton';
import { SegmentButton } from '../SegmentButton';
import { SelectButton } from '../SelectButton';

import { SegmentGroup } from './SegmentGroup';
import type { SegmentGroupProps } from './SegmentGroup.types';

const noopPress = () => undefined;

const meta: Meta<SegmentGroupProps> = {
  title: 'Components/SegmentGroup',
  component: SegmentGroup,
  argTypes: {
    value: { control: 'text' },
  },
};

export default meta;

const SegmentGroupStoryWrapper: React.FC<ViewProps> = ({
  children,
  ...props
}) => (
  <View {...props} style={[{ padding: 16 }, props.style]}>
    {children}
  </View>
);

type Story = StoryObj<SegmentGroupProps>;

const ControlledSegmentGroup = (args: Partial<SegmentGroupProps>) => {
  const [value, setValue] = useState(args.value ?? 'all');

  return (
    <SegmentGroupStoryWrapper>
      <SegmentGroup {...args} value={value} onChange={setValue}>
        <SegmentButton value="all" onPress={noopPress}>
          All
        </SegmentButton>
        <SegmentButton value="tokens" onPress={noopPress}>
          Tokens
        </SegmentButton>
        <SegmentButton value="nfts" onPress={noopPress}>
          NFTs
        </SegmentButton>
        <SelectButton
          endArrowDirection={SelectButtonEndArrow.Down}
          onPress={noopPress}
        >
          Filter
        </SelectButton>
      </SegmentGroup>
    </SegmentGroupStoryWrapper>
  );
};

export const Default: Story = {
  args: {
    value: 'all',
  },
  render: (args) => <ControlledSegmentGroup {...args} />,
};

export const Variant: Story = {
  render: () => {
    const [value, setValue] = useState('a');

    return (
      <SegmentGroupStoryWrapper>
        <SegmentGroup
          value={value}
          onChange={setValue}
          variant={SegmentButtonVariant.Secondary}
        >
          <SegmentButton value="a" onPress={noopPress}>
            A
          </SegmentButton>
          <SegmentButton value="b" onPress={noopPress}>
            B
          </SegmentButton>
        </SegmentGroup>
      </SegmentGroupStoryWrapper>
    );
  },
};

export const WithFilterControls: Story = {
  render: () => {
    const [value, setValue] = useState('all');

    return (
      <SegmentGroupStoryWrapper>
        <SegmentGroup value={value} onChange={setValue}>
          <FilterSegmentButton value="all" onPress={noopPress}>
            All
          </FilterSegmentButton>
          <FilterSegmentButton value="tokens" onPress={noopPress}>
            Tokens
          </FilterSegmentButton>
          <FilterSegmentButton value="nfts" onPress={noopPress}>
            NFTs
          </FilterSegmentButton>
          <FilterSelectButton
            endArrowDirection={SelectButtonEndArrow.Down}
            onPress={noopPress}
          >
            Filter
          </FilterSelectButton>
        </SegmentGroup>
      </SegmentGroupStoryWrapper>
    );
  },
};

export const WithChartControls: Story = {
  render: () => {
    const [value, setValue] = useState('1d');

    return (
      <SegmentGroupStoryWrapper>
        <SegmentGroup value={value} onChange={setValue}>
          <ChartSegmentButton value="1d" onPress={noopPress}>
            1D
          </ChartSegmentButton>
          <ChartSegmentButton value="1w" onPress={noopPress}>
            1W
          </ChartSegmentButton>
          <ChartSegmentButton value="1m" onPress={noopPress}>
            1M
          </ChartSegmentButton>
          <ChartSelectButton
            endArrowDirection={SelectButtonEndArrow.Down}
            onPress={noopPress}
          >
            Range
          </ChartSelectButton>
        </SegmentGroup>
      </SegmentGroupStoryWrapper>
    );
  },
};
