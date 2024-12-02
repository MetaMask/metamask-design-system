import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { brandColor as brandColorJS } from '../src/js';
import README from './BrandColors.mdx';
import { ColorSwatchGroup, ColorSwatch } from './components';
import {
  getCSSVariablesFromStylesheet,
  getContrastYIQ,
  useJsonColor,
} from './test-utils';

const meta: Meta<typeof ColorSwatchGroup> = {
  title: 'Design Tokens/Color/Brand Colors',
  component: ColorSwatchGroup,
  parameters: {
    docs: {
      page: README,
    },
  },
};

export default meta;

type Story = StoryObj<typeof ColorSwatchGroup>;

export const Figma: Story = {
  render: () => {
    const { brandColor } = useJsonColor();
    return <ColorSwatchGroup swatchData={brandColor} />;
  },
  parameters: {
    colorScheme: 'light',
  },
};

export const CSS: Story = {
  render: () => {
    const cssBrandColors = getCSSVariablesFromStylesheet('--brand-colors');
    return (
      <div className="grid gap-4 grid-cols-[repeat(auto-fill,300px)]">
        {/* Mapping through each brand color and rendering a ColorSwatch component for it */}
        {Object.values(cssBrandColors).map(({ color, name }) => (
          <ColorSwatch
            key={name}
            color={color}
            backgroundColor={name}
            textBackgroundColor="transparent"
            textColor={getContrastYIQ(color, color)}
            name={name}
          />
        ))}
      </div>
    );
  },
  parameters: {
    colorScheme: 'light',
  },
};

export const JS: Story = {
  render: () => (
    <div className="grid gap-4 grid-cols-[repeat(auto-fill,300px)]">
      {/* Mapping through each brand color and rendering a ColorSwatch component for it */}
      {Object.entries(brandColorJS).map(([name, color]) => (
        <ColorSwatch
          key={name}
          color={color}
          textBackgroundColor="transparent"
          textColor={getContrastYIQ(color, color)}
          name={`brandColor.${name}`}
        />
      ))}
    </div>
  ),
  parameters: {
    colorScheme: 'light',
  },
};
