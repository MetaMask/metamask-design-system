import {
  SelectButtonEndArrow,
  SelectButtonVariant,
  FilterButtonVariant,
} from '@metamask/design-system-shared';
import type { Meta, StoryObj } from '@storybook/react-native';
import React, { useEffect, useState } from 'react';
import type { ViewProps } from 'react-native';
import { View } from 'react-native';

import { FilterButton } from '../FilterButton';
import { SelectButton } from '../SelectButton';

import { FilterButtonGroup } from './FilterButtonGroup';
import type { FilterButtonGroupProps } from './FilterButtonGroup.types';

const noopPress = () => undefined;

const meta: Meta<FilterButtonGroupProps> = {
  title: 'Components/FilterButtonGroup',
  component: FilterButtonGroup,
  argTypes: {
    value: { control: 'text' },
  },
};

export default meta;

const FilterButtonGroupStoryWrapper: React.FC<ViewProps> = ({
  children,
  ...props
}) => (
  <View {...props} style={[{ padding: 16 }, props.style]}>
    {children}
  </View>
);

type Story = StoryObj<FilterButtonGroupProps>;

const ControlledFilterButtonGroup = (args: Partial<FilterButtonGroupProps>) => {
  const [value, setValue] = useState(args.value ?? 'all');

  useEffect(() => {
    setValue(args.value ?? 'all');
  }, [args.value]);

  return (
    <FilterButtonGroupStoryWrapper>
      <FilterButtonGroup {...args} value={value} onChange={setValue}>
        <FilterButton value="all" onPress={noopPress}>
          All
        </FilterButton>
        <FilterButton value="tokens" onPress={noopPress}>
          Tokens
        </FilterButton>
        <FilterButton value="nfts" onPress={noopPress}>
          NFTs
        </FilterButton>
        <SelectButton
          endArrowDirection={SelectButtonEndArrow.Down}
          onPress={noopPress}
          placeholder="Filter"
        />
      </FilterButtonGroup>
    </FilterButtonGroupStoryWrapper>
  );
};

export const Default: Story = {
  args: {
    value: 'all',
  },
  render: (args: FilterButtonGroupProps) => <ControlledFilterButtonGroup {...args} />,
};

export const Variant: Story = {
  render: () => {
    const [filterValue, setFilterValue] = useState('all');
    const [chartValue, setChartValue] = useState('1d');

    return (
      <FilterButtonGroupStoryWrapper style={{ gap: 24 }}>
        <FilterButtonGroup
          value={filterValue}
          onChange={setFilterValue}
          variant={FilterButtonVariant.Primary}
        >
          <FilterButton value="all" onPress={noopPress}>
            All
          </FilterButton>
          <FilterButton value="tokens" onPress={noopPress}>
            Tokens
          </FilterButton>
          <FilterButton value="nfts" onPress={noopPress}>
            NFTs
          </FilterButton>
          <SelectButton
            endArrowDirection={SelectButtonEndArrow.Down}
            onPress={noopPress}
            placeholder="Filter"
          />
        </FilterButtonGroup>
        <FilterButtonGroup
          value={chartValue}
          onChange={setChartValue}
          variant={FilterButtonVariant.Secondary}
        >
          <FilterButton value="1d" onPress={noopPress}>
            1D
          </FilterButton>
          <FilterButton value="1w" onPress={noopPress}>
            1W
          </FilterButton>
          <FilterButton value="1m" onPress={noopPress}>
            1M
          </FilterButton>
          <SelectButton
            variant={SelectButtonVariant.Tertiary}
            endArrowDirection={SelectButtonEndArrow.Down}
            onPress={noopPress}
            placeholder="Range"
          />
        </FilterButtonGroup>
      </FilterButtonGroupStoryWrapper>
    );
  },
};
