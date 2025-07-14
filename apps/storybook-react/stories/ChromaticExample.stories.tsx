import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

// Example component for demonstrating Chromatic best practices
const ExampleComponent = ({ 
  title, 
  variant = 'primary', 
  size = 'medium',
  isLoading = false 
}: {
  title: string;
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'small' | 'medium' | 'large';
  isLoading?: boolean;
}) => {
  const baseStyles = 'rounded-lg font-medium transition-colors';
  const variantStyles = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    danger: 'bg-red-500 text-white hover:bg-red-600'
  };
  const sizeStyles = {
    small: 'px-3 py-1 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg'
  };

  return (
    <div className="p-4">
      <button
        className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${
          isLoading ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        disabled={isLoading}
      >
        {isLoading ? 'Loading...' : title}
      </button>
    </div>
  );
};

const meta: Meta<typeof ExampleComponent> = {
  title: 'Examples/Chromatic Best Practices',
  component: ExampleComponent,
  parameters: {
    docs: {
      description: {
        component: 'Example component demonstrating Chromatic visual testing best practices.',
      },
    },
    // Global Chromatic parameters
    chromatic: {
      // Disable animations for consistent screenshots
      pauseAnimationAtEnd: true,
      // Wait for component to settle
      delay: 300,
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'danger'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    isLoading: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ExampleComponent>;

// Basic story with consistent data
export const Default: Story = {
  args: {
    title: 'Click Me',
    variant: 'primary',
    size: 'medium',
  },
};

// Test all variants
export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <ExampleComponent title="Primary Button" variant="primary" />
      <ExampleComponent title="Secondary Button" variant="secondary" />
      <ExampleComponent title="Danger Button" variant="danger" />
    </div>
  ),
  parameters: {
    chromatic: {
      // Increase delay for complex layouts
      delay: 500,
    },
  },
};

// Test all sizes
export const AllSizes: Story = {
  render: () => (
    <div className="space-y-4">
      <ExampleComponent title="Small" size="small" />
      <ExampleComponent title="Medium" size="medium" />
      <ExampleComponent title="Large" size="large" />
    </div>
  ),
};

// Test loading state
export const LoadingState: Story = {
  args: {
    title: 'Submit',
    isLoading: true,
  },
  parameters: {
    chromatic: {
      // Disable this story if loading animations are problematic
      // disable: true,
    },
  },
};

// Test responsive behavior
export const ResponsiveDesign: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <ExampleComponent title="Button 1" variant="primary" />
      <ExampleComponent title="Button 2" variant="secondary" />
      <ExampleComponent title="Button 3" variant="danger" />
    </div>
  ),
  parameters: {
    // Test different viewport sizes
    chromatic: {
      viewports: [320, 768, 1024, 1440],
    },
  },
};

// Story with specific chromatic configuration
export const SpecificConfiguration: Story = {
  args: {
    title: 'Custom Config',
    variant: 'primary',
  },
  parameters: {
    chromatic: {
      // Skip this story in Chromatic
      disable: false,
      // Force include even if no changes detected
      forcedColors: 'active',
      // Specific delay for this story
      delay: 1000,
      // Disable for specific modes
      modes: {
        'dark': { disable: true },
      },
    },
  },
};

// Matrix testing - testing multiple prop combinations
export const MatrixTesting: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-4">
      {(['primary', 'secondary', 'danger'] as const).map((variant) =>
        (['small', 'medium', 'large'] as const).map((size) => (
          <ExampleComponent
            key={`${variant}-${size}`}
            title={`${variant} ${size}`}
            variant={variant}
            size={size}
          />
        ))
      )}
    </div>
  ),
  parameters: {
    chromatic: {
      delay: 600,
    },
  },
};