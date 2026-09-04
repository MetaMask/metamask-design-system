import { Text, TextVariant } from '@metamask/design-system-react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import README from './BorderRadius.mdx';

type BorderRadiusSwatchProps = {
  label: string;
  className?: string;
};

const BorderRadiusSwatch: React.FC<BorderRadiusSwatchProps> = ({
  label,
  className = '',
}) => (
  <div className="grid gap-2 text-center">
    <div className={`size-24 bg-primary-muted ${className}`} />
    <Text variant={TextVariant.BodyXs}>{label}</Text>
  </div>
);

// Class names are written out in full because Tailwind only generates
// utilities it can find as literal strings when scanning source files.
const SCALE = [
  { label: 'rounded-none', className: 'rounded-none' },
  { label: 'rounded-2', className: 'rounded-2' },
  { label: 'rounded-4', className: 'rounded-4' },
  { label: 'rounded-6', className: 'rounded-6' },
  { label: 'rounded-8', className: 'rounded-8' },
  { label: 'rounded-12', className: 'rounded-12' },
  { label: 'rounded-16', className: 'rounded-16' },
  { label: 'rounded-24', className: 'rounded-24' },
  { label: 'rounded-full', className: 'rounded-full' },
];

const meta: Meta<typeof BorderRadiusSwatch> = {
  title: 'Design Tokens/Border Radius/Border Radius',
  component: BorderRadiusSwatch,
  parameters: {
    docs: {
      page: README,
    },
  },
};

export default meta;

export const DefaultStory: StoryObj<typeof BorderRadiusSwatch> = {
  name: 'Default',
  args: {
    label: 'rounded-8',
    className: 'rounded-8',
  },
  render: (args) => <BorderRadiusSwatch {...args} />,
};

export const Scale: StoryObj<typeof BorderRadiusSwatch> = {
  render: () => (
    <div className="grid grid-cols-[repeat(auto-fill,96px)] gap-8">
      {SCALE.map(({ label, className }) => (
        <BorderRadiusSwatch key={label} label={label} className={className} />
      ))}
    </div>
  ),
};

export const Corners: StoryObj<typeof BorderRadiusSwatch> = {
  render: () => (
    <div className="grid grid-cols-[repeat(auto-fill,96px)] gap-8">
      <BorderRadiusSwatch label="rounded-t-24" className="rounded-t-24" />
      <BorderRadiusSwatch label="rounded-b-16" className="rounded-b-16" />
      <BorderRadiusSwatch label="rounded-tl-12" className="rounded-tl-12" />
      <BorderRadiusSwatch label="rounded-r-full" className="rounded-r-full" />
    </div>
  ),
};
