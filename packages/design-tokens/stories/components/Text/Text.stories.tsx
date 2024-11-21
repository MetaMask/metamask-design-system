import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Text } from '.';

export default {
  title: 'Documentation Components/Text',
  argTypes: {
    children: {
      control: 'text',
    },
    as: {
      control: 'select',
      options: ['h1', 'h2', 'p', 'a', 'li'],
    },
    style: {
      control: 'object',
    },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const DefaultStory = Template.bind({});

DefaultStory.args = {
  children: 'Text',
};

DefaultStory.storyName = 'Default';
