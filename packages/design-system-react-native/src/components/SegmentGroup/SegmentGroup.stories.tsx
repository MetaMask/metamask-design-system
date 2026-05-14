import {
  SelectButtonEndArrow,
  SelectButtonVariant,
  SegmentButtonVariant,
} from '@metamask/design-system-shared';
import type { Meta, StoryObj } from '@storybook/react-native';
import React, { useState } from 'react';
import type { ViewProps } from 'react-native';
import { View } from 'react-native';

import { AvatarNetworkSize } from '../../types';
import { AvatarNetwork } from '../AvatarNetwork';
import { SAMPLE_AVATARNETWORK_URIS } from '../AvatarNetwork/AvatarNetwork.dev';
import { SegmentButton } from '../SegmentButton';
import { SelectButton } from '../SelectButton';

import { SegmentGroup } from './SegmentGroup';
import type { SegmentGroupProps } from './SegmentGroup.types';

const noopPress = () => undefined;

const NETWORK_SEGMENT_DEMO = [
  { value: 'arbitrum', networkName: 'Arbitrum' },
  { value: 'avalanche', networkName: 'Avalanche' },
  { value: 'bnb', networkName: 'BNB' },
  { value: 'ethereum', networkName: 'Ethereum' },
  { value: 'linea', networkName: 'Linea' },
  { value: 'optimism', networkName: 'Optimism' },
  { value: 'polygon', networkName: 'Polygon' },
] as const;

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

export const WithFilterControls: Story = {
  render: () => {
    const [value, setValue] = useState('all');

    return (
      <SegmentGroupStoryWrapper>
        <SegmentGroup value={value} onChange={setValue}>
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
  },
};

export const WithChartControls: Story = {
  render: () => {
    const [value, setValue] = useState('1d');

    return (
      <SegmentGroupStoryWrapper>
        <SegmentGroup
          value={value}
          onChange={setValue}
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

export const WithNetworkControls: Story = {
  render: () => {
    const [value, setValue] = useState('ethereum');

    return (
      <SegmentGroupStoryWrapper>
        <SegmentGroup value={value} onChange={setValue}>
          {NETWORK_SEGMENT_DEMO.map((option, index) => (
            <SegmentButton
              key={option.value}
              value={option.value}
              onPress={noopPress}
              startAccessory={
                <AvatarNetwork
                  src={SAMPLE_AVATARNETWORK_URIS[index]}
                  name={option.networkName}
                  size={AvatarNetworkSize.Xs}
                  twClassName="mr-1"
                />
              }
            >
              {option.networkName}
            </SegmentButton>
          ))}
        </SegmentGroup>
      </SegmentGroupStoryWrapper>
    );
  },
};
