import React, { useState } from 'react';
import type { StoryObj } from '@storybook/react';
import { Icon } from './Icon';
import { IconName, IconSize, IconColor } from './Icon.types';
import README from './README.mdx';

const meta = {
  title: 'React Components/Icon',
  component: Icon,
  parameters: {
    docs: {
      page: README,
    },
  },
  args: {
    name: IconName.AddSquare,
  },
  argTypes: {
    name: {
      description:
        'Required prop to specify which icon to render from the icon set',
      control: 'select',
      options: Object.values(IconName),
      table: {
        type: { summary: 'IconName' },
        defaultValue: { summary: 'required' },
      },
    },
    size: {
      description: 'Optional prop to control the size of the icon',
      control: 'select',
      options: Object.values(IconSize),
      table: {
        type: { summary: 'IconSize' },
        defaultValue: { summary: 'IconSize.Md' },
      },
    },
    color: {
      description:
        'Optional prop that sets the color of the icon using predefined theme colors',
      control: 'select',
      options: Object.values(IconColor),
      table: {
        type: { summary: 'IconColor' },
        defaultValue: { summary: 'IconColor.IconDefault' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const [search, setSearch] = useState('');
    const iconList = Object.keys(IconName)
      .filter(
        (item) =>
          search === '' ||
          item.toLowerCase().includes(search.toLowerCase().replace(' ', '_')),
      )
      .sort();

    return (
      <div className="space-y-4">
        <div className="flex flex-col">
          <label className="sr-only">IconName search</label>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search icons..."
            className="border p-2 rounded"
          />
        </div>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-4">
          {iconList.map((iconKey) => (
            <div
              key={iconKey}
              className="flex flex-col items-center justify-center p-4 border rounded"
            >
              <Icon className="mb-2" {...args} />
              <div className="text-xs text-center">{iconKey}</div>
            </div>
          ))}
        </div>
      </div>
    );
  },
  parameters: {
    colorScheme: 'light',
  },
};

export const Name: Story = {
  render: () => (
    <div className="flex items-baseline gap-4">
      <Icon name={IconName.AddSquare} />
    </div>
  ),
};

export const Size: Story = {
  render: () => (
    <div className="flex items-baseline gap-4">
      <Icon name={IconName.AddSquare} size={IconSize.Xs} />
      <Icon name={IconName.AddSquare} size={IconSize.Sm} />
      <Icon name={IconName.AddSquare} size={IconSize.Md} />
      <Icon name={IconName.AddSquare} size={IconSize.Lg} />
      <Icon name={IconName.AddSquare} size={IconSize.Xl} />
    </div>
  ),
};

export const Color: Story = {
  render: () => (
    <div className="flex gap-4">
      <div className="bg-default p-4">
        <Icon name={IconName.AddSquare} color={IconColor.IconDefault} />
      </div>
      <div className="bg-default p-4">
        <Icon name={IconName.AddSquare} color={IconColor.IconAlternative} />
      </div>
      <div className="bg-default p-4">
        <Icon name={IconName.AddSquare} color={IconColor.IconMuted} />
      </div>
      <div className="bg-overlay-default p-4">
        <Icon name={IconName.AddSquare} color={IconColor.OverlayInverse} />
      </div>
      <div className="bg-default p-4">
        <Icon name={IconName.AddSquare} color={IconColor.PrimaryDefault} />
      </div>
      <div className="bg-primary-default p-4">
        <Icon name={IconName.AddSquare} color={IconColor.PrimaryInverse} />
      </div>
      <div className="bg-default p-4">
        <Icon name={IconName.AddSquare} color={IconColor.ErrorDefault} />
      </div>
      <div className="bg-error-default p-4">
        <Icon name={IconName.AddSquare} color={IconColor.ErrorInverse} />
      </div>
      <div className="bg-default p-4">
        <Icon name={IconName.AddSquare} color={IconColor.SuccessDefault} />
      </div>
      <div className="bg-success-default p-4">
        <Icon name={IconName.AddSquare} color={IconColor.SuccessInverse} />
      </div>
      <div className="bg-default p-4">
        <Icon name={IconName.AddSquare} color={IconColor.WarningDefault} />
      </div>
      <div className="bg-warning-default p-4">
        <Icon name={IconName.AddSquare} color={IconColor.WarningInverse} />
      </div>
      <div className="bg-default p-4">
        <Icon name={IconName.AddSquare} color={IconColor.InfoDefault} />
      </div>
      <div className="bg-info-default p-4">
        <Icon name={IconName.AddSquare} color={IconColor.InfoInverse} />
      </div>
    </div>
  ),
};
