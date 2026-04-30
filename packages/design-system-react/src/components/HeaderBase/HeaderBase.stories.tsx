import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import { Box, BoxBackgroundColor } from '../Box';
import { ButtonIcon, ButtonIconSize } from '../ButtonIcon';
import { IconName } from '../Icon';
import { Text, TextVariant } from '../Text';

import { HeaderBase } from './HeaderBase';
import type { HeaderBaseProps } from './HeaderBase.types';
import README from './README.mdx';

const meta: Meta<HeaderBaseProps> = {
  title: 'React Components/HeaderBase',
  component: HeaderBase,
  parameters: {
    docs: {
      page: README,
    },
  },
  argTypes: {
    className: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<HeaderBaseProps>;

const Title = ({ children }: { children: React.ReactNode }) => (
  <Text variant={TextVariant.HeadingSm}>{children}</Text>
);

export const Default: Story = {
  render: () => (
    <HeaderBase
      startAccessory={
        <ButtonIcon
          size={ButtonIconSize.Sm}
          iconName={IconName.ArrowLeft}
          ariaLabel="back"
        />
      }
      endAccessory={
        <ButtonIcon
          size={ButtonIconSize.Sm}
          iconName={IconName.Close}
          ariaLabel="close"
        />
      }
    >
      <Title>Title is sentence case no period</Title>
    </HeaderBase>
  ),
};

export const Children: Story = {
  render: () => (
    <HeaderBase>
      <Title>Title is sentence case no period</Title>
    </HeaderBase>
  ),
};

export const StartAccessory: Story = {
  render: () => (
    <HeaderBase
      startAccessory={
        <ButtonIcon
          size={ButtonIconSize.Sm}
          iconName={IconName.ArrowLeft}
          ariaLabel="back"
        />
      }
    >
      <Title>Title is sentence case no period</Title>
    </HeaderBase>
  ),
};

export const EndAccessory: Story = {
  render: () => (
    <HeaderBase
      endAccessory={
        <ButtonIcon
          size={ButtonIconSize.Sm}
          iconName={IconName.Close}
          ariaLabel="close"
        />
      }
    >
      <Title>Title is sentence case no period</Title>
    </HeaderBase>
  ),
};

export const UseCaseDemos: Story = {
  render: () => (
    <Box flexDirection="flex-col" gap={4}>
      <Text>children only</Text>
      <Box backgroundColor={BoxBackgroundColor.WarningMuted}>
        <HeaderBase>
          <Title>Title is sentence case no period</Title>
        </HeaderBase>
      </Box>

      <Text>children + endAccessory</Text>
      <Box backgroundColor={BoxBackgroundColor.WarningMuted}>
        <HeaderBase
          endAccessory={
            <ButtonIcon
              size={ButtonIconSize.Sm}
              iconName={IconName.Close}
              ariaLabel="close"
            />
          }
        >
          <Title>Title is sentence case no period</Title>
        </HeaderBase>
      </Box>

      <Text>children + startAccessory</Text>
      <Box backgroundColor={BoxBackgroundColor.WarningMuted}>
        <HeaderBase
          startAccessory={
            <ButtonIcon
              size={ButtonIconSize.Sm}
              iconName={IconName.ArrowLeft}
              ariaLabel="back"
            />
          }
        >
          <Title>Title is sentence case no period</Title>
        </HeaderBase>
      </Box>

      <Text>children + startAccessory + endAccessory</Text>
      <Box backgroundColor={BoxBackgroundColor.WarningMuted}>
        <HeaderBase
          startAccessory={
            <ButtonIcon
              size={ButtonIconSize.Sm}
              iconName={IconName.ArrowLeft}
              ariaLabel="back"
            />
          }
          endAccessory={
            <ButtonIcon
              size={ButtonIconSize.Sm}
              iconName={IconName.Close}
              ariaLabel="close"
            />
          }
        >
          <Title>Title is sentence case no period</Title>
        </HeaderBase>
      </Box>

      <Text>startAccessory + endAccessory only (no title)</Text>
      <Box backgroundColor={BoxBackgroundColor.WarningMuted}>
        <HeaderBase
          startAccessory={
            <ButtonIcon
              size={ButtonIconSize.Sm}
              iconName={IconName.ArrowLeft}
              ariaLabel="back"
            />
          }
          endAccessory={
            <ButtonIcon
              size={ButtonIconSize.Sm}
              iconName={IconName.Close}
              ariaLabel="close"
            />
          }
        />
      </Box>
    </Box>
  ),
};
