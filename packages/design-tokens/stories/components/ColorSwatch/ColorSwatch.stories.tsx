import type { Meta, StoryObj } from '@storybook/react';

import { ColorSwatch } from './ColorSwatch';

const meta: Meta<typeof ColorSwatch> = {
  title: 'Docs Components/ColorSwatch',
  component: ColorSwatch,
};

export default meta;

type Story = StoryObj<typeof ColorSwatch>;

export const Default: Story = {
  render: () => (
    <ColorSwatch
      color="#007bff"
      borderColor="#ced4da"
      textBackgroundColor="#f8f9fa"
      textColor="#212529"
      name="Primary Default"
    />
  ),
};
