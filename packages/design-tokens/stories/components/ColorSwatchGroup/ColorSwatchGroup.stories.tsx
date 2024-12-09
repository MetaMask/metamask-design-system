import type { Meta, StoryObj } from '@storybook/react';

import { ColorSwatchGroup } from './ColorSwatchGroup';

const meta: Meta<typeof ColorSwatchGroup> = {
  title: 'Docs Components/ColorSwatchGroup',
  component: ColorSwatchGroup,
};

export default meta;

type Story = StoryObj<typeof ColorSwatchGroup>;

export const Default: Story = {
  render: () => (
    <ColorSwatchGroup
      swatchData={{
        white: {
          white000: {
            value: '#FFFFFF',
            description: '(HEX: #FFFFFF)',
            type: 'color',
          },
          white010: {
            value: '#FCFCFC',
            description: '(HEX: #FCFCFC)',
            type: 'color',
          },
        },
      }}
      borderColor="#ced4da"
      textBackgroundColor="#f8f9fa"
      textColor="#212529"
      name="Color Swatch Group"
    />
  ),
};
