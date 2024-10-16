import type { Meta, StoryObj } from '@storybook/react';
import { ComponentTemplate } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/ComponentTemplate',
  component: ComponentTemplate,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    className: { control: 'text' },
  },
  args: {
    title: 'Component Template Storybook',
  },
} satisfies Meta<typeof ComponentTemplate>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: 'Component Template Storybook',
  },
};
