import { ContentVerticalAlignment } from '@metamask/design-system-shared';
import type { Meta, StoryObj } from '@storybook/react-native';

import { AvatarToken, AvatarTokenSize } from '../AvatarToken';
import { SAMPLE_AVATARTOKEN_URIS } from '../AvatarToken/AvatarToken.dev';
import { Box } from '../Box';
import { Icon, IconName } from '../Icon';

import type { ListItemProps } from './ListItem.types';

import { ListItem } from '.';

const noopPress = () => undefined;

const listItemAvatar = (
  <AvatarToken
    name="ETH"
    src={SAMPLE_AVATARTOKEN_URIS[1]}
    size={AvatarTokenSize.Lg}
  />
);

const meta: Meta<ListItemProps> = {
  title: 'Components/ListItem',
  component: ListItem,
  args: {
    title: 'Label',
    description: 'Secondary text',
    value: 'Value',
    verticalAlignment: ContentVerticalAlignment.Center,
  },
  argTypes: {
    verticalAlignment: {
      control: 'select',
      options: Object.keys(ContentVerticalAlignment),
      mapping: ContentVerticalAlignment,
    },
    title: { control: 'text' },
    description: { control: 'text' },
    value: { control: 'text' },
    subvalue: { control: 'text' },
    isInteractive: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<ListItemProps>;

export const Default: Story = {};

export const IsInteractive: Story = {
  render: (args: ListItemProps) => (
    <ListItem {...args} isInteractive onPress={noopPress} />
  ),
};

export const Children: Story = {
  render: (args: ListItemProps) => (
    <ListItem {...args} title="Row title" description="Primary row">
      <Box twClassName="mt-2 rounded bg-background-muted px-3 py-2">
        <Icon name={IconName.Info} />
      </Box>
    </ListItem>
  ),
};

export const StartAccessory: Story = {
  render: (args: ListItemProps) => (
    <ListItem
      {...args}
      startAccessory={<Icon name={IconName.Coin} />}
      title="With start accessory"
      description={undefined}
      value={undefined}
    />
  ),
};

export const EndAccessory: Story = {
  render: (args: ListItemProps) => (
    <ListItem
      {...args}
      endAccessory={<Icon name={IconName.ArrowRight} />}
      title="With end accessory"
      description={undefined}
      value={undefined}
    />
  ),
};

export const TopAccessory: Story = {
  render: (args: ListItemProps) => (
    <ListItem
      {...args}
      topAccessory={
        <Box twClassName="rounded bg-warning-muted px-2 py-1">
          <Icon name={IconName.Info} />
        </Box>
      }
      title="With top accessory"
      description={undefined}
      value={undefined}
    />
  ),
};

export const BottomAccessory: Story = {
  render: (args: ListItemProps) => (
    <ListItem
      {...args}
      bottomAccessory={<Icon name={IconName.Question} />}
      title="With bottom accessory"
      description={undefined}
      value={undefined}
    />
  ),
};

export const Avatar: Story = {
  render: (args: ListItemProps) => (
    <ListItem
      {...args}
      avatar={listItemAvatar}
      title="Ethereum"
      value="0.24 ETH"
      description={undefined}
    />
  ),
};

const verticalAlignmentExamples: Record<
  ContentVerticalAlignment,
  { title: string; description: string }
> = {
  [ContentVerticalAlignment.Center]: {
    title: 'Center',
    description: 'Default for one- or two-line rows',
  },
  [ContentVerticalAlignment.Top]: {
    title: 'Top',
    description:
      'Use for three or more lines, or when row height is 88dp or more',
  },
};

export const VerticalAlignment: Story = {
  render: (args: ListItemProps) => (
    <>
      {Object.values(ContentVerticalAlignment).map((alignment) => {
        const { title, description } = verticalAlignmentExamples[alignment];

        return (
          <ListItem
            key={alignment}
            {...args}
            verticalAlignment={alignment}
            avatar={listItemAvatar}
            title={title}
            description={description}
            value="Value"
          />
        );
      })}
    </>
  ),
};
