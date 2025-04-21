import { Text, TextColor } from '@metamask/design-system-react';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import README from './Shadows.mdx';

type ShadowSwatchProps = {
  children: React.ReactNode;
  className?: string;
};

const ShadowSwatch: React.FC<ShadowSwatchProps> = ({
  children,
  className = '',
}) => (
  <div
    className={`bg-background-default grid h-[100px] place-content-center rounded text-center ${className}`}
  >
    {children}
  </div>
);

const meta: Meta<typeof ShadowSwatch> = {
  title: 'Design Tokens/Shadows/Shadows',
  component: ShadowSwatch,
  parameters: {
    docs: {
      page: README,
    },
  },
};

export default meta;

export const DefaultStory: StoryObj<typeof ShadowSwatch> = {
  name: 'Default',
  args: {
    className: 'shadow-xs',
  },
  render: (args) => (
    <div className="grid grid-cols-[repeat(auto-fill,200px)] gap-8">
      <ShadowSwatch {...args}>
        <Text>Shadow</Text>
      </ShadowSwatch>
    </div>
  ),
};

export const Size: StoryObj<typeof ShadowSwatch> = {
  render: () => (
    <div className="grid grid-cols-[repeat(auto-fill,200px)] gap-8">
      <ShadowSwatch className="shadow-xs">
        <Text>XS</Text>
      </ShadowSwatch>
      <ShadowSwatch className="shadow-sm">
        <Text>SM</Text>
      </ShadowSwatch>
      <ShadowSwatch className="shadow-md">
        <Text>MD</Text>
      </ShadowSwatch>
      <ShadowSwatch className="shadow-lg">
        <Text>LG</Text>
      </ShadowSwatch>
    </div>
  ),
};

export const Color: StoryObj<typeof ShadowSwatch> = {
  render: () => (
    <div className="grid grid-cols-[repeat(auto-fill,200px)] gap-8">
      <ShadowSwatch className="shadow-xs">
        <Text>Default</Text>
      </ShadowSwatch>
      <ShadowSwatch className="bg-primary-default shadow-xs shadow-primary">
        <Text color={TextColor.PrimaryInverse}>Primary</Text>
      </ShadowSwatch>
      <ShadowSwatch className="bg-error-default shadow-xs shadow-error">
        <Text color={TextColor.ErrorInverse}>Error/Danger</Text>
      </ShadowSwatch>
    </div>
  ),
};

export const ExampleUsage = {
  render: () => (
    <div>
      <div className="mb-16 grid grid-cols-[repeat(auto-fill,200px)] gap-8">
        <ShadowSwatch className="shadow-xs">
          <Text>Card</Text>
        </ShadowSwatch>
        <ShadowSwatch className="shadow-sm">
          <Text>Dropdown</Text>
        </ShadowSwatch>
        <ShadowSwatch className="shadow-md">
          <Text>Toast</Text>
        </ShadowSwatch>
        <ShadowSwatch className="shadow-lg">
          <Text>Modal</Text>
        </ShadowSwatch>
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,200px)] gap-8">
        <ShadowSwatch className="bg-primary-default shadow-xs shadow-primary">
          <Text color={TextColor.PrimaryInverse}>Button Primary Hover</Text>
        </ShadowSwatch>
        <ShadowSwatch className="bg-error-default shadow-xs shadow-error">
          <Text color={TextColor.ErrorInverse}>Button Error/Danger Hover</Text>
        </ShadowSwatch>
      </div>
    </div>
  ),
};
