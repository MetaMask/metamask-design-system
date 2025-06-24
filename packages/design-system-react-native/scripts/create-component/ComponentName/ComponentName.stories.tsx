import type { Meta, StoryObj } from '@storybook/react-native';
import { View } from 'react-native';

import { ComponentName } from './ComponentName';
import type { ComponentNameProps } from './ComponentName.types';

const meta: Meta<ComponentNameProps> = {
  title: 'Components/ComponentName',
  component: ComponentName,
  argTypes: {
    twClassName: {
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<ComponentNameProps>;

export const Default: Story = {
  args: {
    children: 'Default ComponentName',
  },
  render: (args) => {
    return <ComponentName {...args} />;
  },
};

export const Children: Story = {
  args: {
    children: 'This is an example of using children with ComponentName',
  },
  render: (args) => {
    return (
      <View style={{ padding: 16 }}>
        <ComponentName {...args} />
      </View>
    );
  },
};