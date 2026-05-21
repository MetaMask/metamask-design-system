import {
  SelectButtonEndArrow,
  SelectButtonVariant,
  SegmentButtonVariant,
} from '@metamask/design-system-shared';
import type { Meta, StoryObj } from '@storybook/react-native';
import React, { useEffect, useState } from 'react';
import type { ViewProps } from 'react-native';
import { View } from 'react-native';

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

  useEffect(() => {
    setValue(args.value ?? 'all');
  }, [args.value]);

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
          placeholder="Filter"
        />
      </SegmentGroup>
    </SegmentGroupStoryWrapper>
  );
};

export const Default: Story = {
  args: {
    value: 'all',
  },
  render: (args: SegmentGroupProps) => <ControlledSegmentGroup {...args} />,
};

export const Variant: Story = {
  render: () => {
    const [filterValue, setFilterValue] = useState('all');
    const [chartValue, setChartValue] = useState('1d');

    return (
      <SegmentGroupStoryWrapper style={{ gap: 24 }}>
        <SegmentGroup
          value={filterValue}
          onChange={setFilterValue}
          variant={SegmentButtonVariant.Primary}
        >
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
            placeholder="Filter"
          />
        </SegmentGroup>
        <SegmentGroup
          value={chartValue}
          onChange={setChartValue}
          variant={SegmentButtonVariant.Secondary}
        >
          <SegmentButton value="1d" onPress={noopPress}>
            1D
          </SegmentButton>
          <SegmentButton value="1w" onPress={noopPress}>
            1W
          </SegmentButton>
          <SegmentButton value="1m" onPress={noopPress}>
            1M
          </SegmentButton>
          <SelectButton
            variant={SelectButtonVariant.Tertiary}
            endArrowDirection={SelectButtonEndArrow.Down}
            onPress={noopPress}
            placeholder="Range"
          />
        </SegmentGroup>
      </SegmentGroupStoryWrapper>
    );
  },
};
