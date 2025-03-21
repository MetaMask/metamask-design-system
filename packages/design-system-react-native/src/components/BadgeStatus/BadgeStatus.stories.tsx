import type { Meta, StoryObj } from '@storybook/react-native';
import { View, ViewProps } from 'react-native';
import { useTailwind } from '@metamask/design-system-twrnc-preset';

import BadgeStatus from './BadgeStatus';
import type { BadgeStatusProps } from './BadgeStatus.types';
import { BadgeStatusStatus, BadgeStatusSize } from './BadgeStatus.types';

const meta: Meta<BadgeStatusProps> = {
  title: 'Components/BadgeStatus',
  component: BadgeStatus,
  argTypes: {
    size: {
      control: 'select',
      options: BadgeStatusSize,
    },
    status: {
      control: 'select',
      options: BadgeStatusStatus,
    },
    hasBorder: {
      control: 'boolean',
    },
    twClassName: {
      control: 'text',
    },
  },
};

export default meta;

const BadgeStatusStoryWrapper: React.FC<ViewProps> = ({
  children,
  ...props
}) => {
  const tw = useTailwind();
  return (
    <View {...props} style={[tw`bg-warning-muted`, props.style]}>
      {children}
    </View>
  );
};

type Story = StoryObj<BadgeStatusProps>;

export const Default: Story = {
  args: {
    size: BadgeStatusSize.Md,
    status: BadgeStatusStatus.Active,
    hasBorder: true,
    twClassName: '',
  },
  render: (args) => (
    <BadgeStatusStoryWrapper>
      <BadgeStatus {...args} />
    </BadgeStatusStoryWrapper>
  ),
};

export const Sizes: Story = {
  render: () => (
    <BadgeStatusStoryWrapper style={{ gap: 16 }}>
      {Object.keys(BadgeStatusSize).map((sizeKey) => (
        <BadgeStatus
          key={sizeKey}
          size={BadgeStatusSize[sizeKey as keyof typeof BadgeStatusSize]}
          status={BadgeStatusStatus.Active}
        />
      ))}
    </BadgeStatusStoryWrapper>
  ),
};

export const Statuses: Story = {
  render: () => (
    <BadgeStatusStoryWrapper style={{ gap: 16 }}>
      {Object.keys(BadgeStatusStatus).map((statusKey) => (
        <BadgeStatus
          key={statusKey}
          status={
            BadgeStatusStatus[statusKey as keyof typeof BadgeStatusStatus]
          }
        />
      ))}
    </BadgeStatusStoryWrapper>
  ),
};

export const HasBorder: Story = {
  render: () => (
    <BadgeStatusStoryWrapper style={{ gap: 16 }}>
      {Object.keys(BadgeStatusStatus).map((statusKey) => (
        <View key={statusKey} style={{ gap: 4 }}>
          <BadgeStatus
            status={
              BadgeStatusStatus[statusKey as keyof typeof BadgeStatusStatus]
            }
          />
          <BadgeStatus
            status={
              BadgeStatusStatus[statusKey as keyof typeof BadgeStatusStatus]
            }
            hasBorder={false}
          />
        </View>
      ))}
    </BadgeStatusStoryWrapper>
  ),
};
