import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Text } from './components';
import README from './Shadows.mdx';

interface ShadowSwatchProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  color?: 'default' | 'primary' | 'error';
}

const ShadowSwatch: React.FC<ShadowSwatchProps> = ({
  children,
  style,
  size = 'xs',
  color = 'default',
}) => (
  <div
    style={{
      height: 100,
      backgroundColor: 'var(--color-background-default)',
      boxShadow:
        color === 'default'
          ? `var(--shadow-size-${size}) var(--color-shadow-default)`
          : `var(--shadow-size-${size}) var(--color-${color}-shadow)`,
      borderRadius: '4px',
      display: 'grid',
      alignContent: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      ...style,
    }}
  >
    {children}
  </div>
);

const meta: Meta<typeof ShadowSwatch> = {
  title: 'Shadows/Shadows',
  component: ShadowSwatch,
  parameters: {
    docs: {
      page: README,
    },
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg'],
    },
    color: {
      control: { type: 'select' },
      options: ['default', 'primary', 'error'],
    },
  },
};

export default meta;

export const DefaultStory: StoryObj<typeof ShadowSwatch> = {
  name: 'Default',
  args: {
    color: 'default',
    size: 'xs',
  },
  render: (args) => (
    <div
      style={{
        display: 'grid',
        gap: '32px',
        gridTemplateColumns: 'repeat(auto-fill, 200px)',
      }}
    >
      <ShadowSwatch {...args}>
        <Text as="p" style={{ margin: 0 }}>
          Shadow
        </Text>
      </ShadowSwatch>
    </div>
  ),
};

export const Size: StoryObj<typeof ShadowSwatch> = {
  render: (args) => (
    <div
      style={{
        display: 'grid',
        gap: '32px',
        gridTemplateColumns: 'repeat(auto-fill, 200px)',
      }}
    >
      <ShadowSwatch color={args.color} size="xs">
        <Text as="p" style={{ margin: 0 }}>
          XS
        </Text>
      </ShadowSwatch>
      <ShadowSwatch color={args.color} size="sm">
        <Text as="p" style={{ margin: 0 }}>
          SM
        </Text>
      </ShadowSwatch>
      <ShadowSwatch color={args.color} size="md">
        <Text as="p" style={{ margin: 0 }}>
          MD
        </Text>
      </ShadowSwatch>
      <ShadowSwatch color={args.color} size="lg">
        <Text as="p" style={{ margin: 0 }}>
          LG
        </Text>
      </ShadowSwatch>
    </div>
  ),
  args: {
    color: 'default',
    size: 'xs',
  },
};

export const Color: StoryObj<typeof ShadowSwatch> = {
  render: (args) => (
    <div
      style={{
        display: 'grid',
        gap: '32px',
        gridTemplateColumns: 'repeat(auto-fill, 200px)',
      }}
    >
      <ShadowSwatch color="default" size={args.size}>
        <Text as="p" style={{ margin: 0 }}>
          Default
        </Text>
      </ShadowSwatch>
      <ShadowSwatch
        color="primary"
        size={args.size}
        style={{
          backgroundColor: 'var(--color-primary-default)',
          color: 'var(--color-primary-inverse)',
        }}
      >
        <Text as="p" style={{ margin: 0 }}>
          Primary
        </Text>
      </ShadowSwatch>
      <ShadowSwatch
        color="error"
        size={args.size}
        style={{
          backgroundColor: 'var(--color-error-default)',
          color: 'var(--color-error-inverse)',
        }}
      >
        <Text as="p" style={{ margin: 0 }}>
          Error/Danger
        </Text>
      </ShadowSwatch>
    </div>
  ),
  args: {
    color: 'default',
    size: 'xs',
  },
};

export const ExampleUsage = {
  render: () => (
    <div>
      <div
        style={{
          display: 'grid',
          gap: '32px',
          gridTemplateColumns: 'repeat(auto-fill, 200px)',
          marginBottom: '64px',
        }}
      >
        <ShadowSwatch
          style={{
            boxShadow: 'var(--shadow-size-xs) var(--color-shadow-default)',
          }}
        >
          <Text as="p" style={{ margin: 0 }}>
            Card
          </Text>
        </ShadowSwatch>
        <ShadowSwatch
          style={{
            boxShadow: 'var(--shadow-size-sm) var(--color-shadow-default)',
          }}
        >
          <Text as="p" style={{ margin: 0 }}>
            Dropdown
          </Text>
        </ShadowSwatch>
        <ShadowSwatch
          style={{
            boxShadow: 'var(--shadow-size-md) var(--color-shadow-default)',
          }}
        >
          <Text as="p" style={{ margin: 0 }}>
            Toast
          </Text>
        </ShadowSwatch>
        <ShadowSwatch
          style={{
            boxShadow: 'var(--shadow-size-lg) var(--color-shadow-default)',
          }}
        >
          <Text as="p" style={{ margin: 0 }}>
            Modal
          </Text>
        </ShadowSwatch>
      </div>
      <div
        style={{
          display: 'grid',
          gap: '32px',
          gridTemplateColumns: 'repeat(auto-fill, 200px)',
        }}
      >
        <ShadowSwatch
          style={{
            boxShadow: 'var(--component-button-primary-shadow)',
            backgroundColor: 'var(--color-primary-default)',
            color: 'var(--color-primary-inverse)',
          }}
        >
          <Text as="p" style={{ margin: 0 }}>
            Button Primary Hover
          </Text>
        </ShadowSwatch>
        <ShadowSwatch
          style={{
            boxShadow: 'var(--component-button-danger-shadow)',
            backgroundColor: 'var(--color-error-default)',
            color: 'var(--color-error-inverse)',
          }}
        >
          <Text as="p" style={{ margin: 0 }}>
            Button Error/Danger Hover
          </Text>
        </ShadowSwatch>
      </div>
    </div>
  ),
};
