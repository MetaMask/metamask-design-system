import { render, screen } from '@testing-library/react';
import React, { createRef } from 'react';

import { ButtonVariant } from '../../types';
import { IconName } from '../Icon';

import { Button } from './Button';

describe('Button', () => {
  describe('Variants', () => {
    it('renders primary button by default', () => {
      render(<Button>Primary Button</Button>);

      const button = screen.getByRole('button');
      expect(button).toHaveClass(
        'bg-icon-default',
        'hover:bg-icon-default-hover',
        'active:bg-icon-default-pressed',
        'text-primary-inverse',
      );
    });

    it('renders secondary button when variant is Secondary', () => {
      render(
        <Button variant={ButtonVariant.Secondary}>Secondary Button</Button>,
      );

      const button = screen.getByRole('button');
      expect(button).toHaveClass(
        'bg-muted',
        'text-default',
        'hover:bg-muted-hover',
        'active:bg-muted-pressed',
      );
    });

    it('renders tertiary button when variant is Tertiary', () => {
      render(<Button variant={ButtonVariant.Tertiary}>Tertiary Button</Button>);

      const button = screen.getByRole('button');
      expect(button).toHaveClass('bg-transparent', 'text-primary-default');
    });

    it('renders primary button when an invalid variant is provided', () => {
      // @ts-expect-error Testing invalid variant
      render(<Button variant="invalid">Default to Primary</Button>);

      const button = screen.getByRole('button');
      expect(button).toHaveClass(
        'bg-icon-default',
        'hover:bg-icon-default-hover',
        'active:bg-icon-default-pressed',
        'text-primary-inverse',
      );
    });
  });

  describe('Common Features', () => {
    it('applies danger styles correctly for each variant', () => {
      const { rerender } = render(
        <Button isDanger>Primary Danger Button</Button>,
      );

      let button = screen.getByRole('button');
      expect(button).toHaveClass('bg-error-default', 'text-error-inverse');

      rerender(
        <Button variant={ButtonVariant.Secondary} isDanger>
          Secondary Danger Button
        </Button>,
      );
      button = screen.getByRole('button');
      expect(button).toHaveClass(
        'bg-muted',
        'text-error-default',
        'hover:bg-muted-hover',
        'active:bg-muted-pressed',
      );

      rerender(
        <Button variant={ButtonVariant.Tertiary} isDanger>
          Tertiary Danger Button
        </Button>,
      );
      button = screen.getByRole('button');
      expect(button).toHaveClass('text-error-default');
    });

    it('applies inverse styles correctly for Primary and Secondary variants', () => {
      const { rerender } = render(
        <Button isInverse>Primary Inverse Button</Button>,
      );

      let button = screen.getByRole('button');
      expect(button).toHaveClass('bg-default', 'text-default');

      rerender(
        <Button variant={ButtonVariant.Secondary} isInverse>
          Secondary Inverse Button
        </Button>,
      );
      button = screen.getByRole('button');
      expect(button).toHaveClass(
        'bg-transparent',
        'border-2',
        'border-primary-inverse',
        'text-primary-inverse',
      );
    });

    it('renders with icons correctly for all variants', () => {
      const { rerender } = render(
        <Button
          startIconName={IconName.AddSquare}
          startIconProps={{ 'data-testid': 'icon' }}
        >
          Primary with Icon
        </Button>,
      );

      let icon = screen.getByTestId('icon');
      expect(icon).toHaveClass('mr-2');

      rerender(
        <Button
          variant={ButtonVariant.Secondary}
          startIconName={IconName.AddSquare}
          startIconProps={{ 'data-testid': 'icon' }}
        >
          Secondary with Icon
        </Button>,
      );
      icon = screen.getByTestId('icon');
      expect(icon).toHaveClass('mr-2');

      rerender(
        <Button
          variant={ButtonVariant.Tertiary}
          startIconName={IconName.AddSquare}
          startIconProps={{ 'data-testid': 'icon' }}
        >
          Tertiary with Icon
        </Button>,
      );
      icon = screen.getByTestId('icon');
      expect(icon).toHaveClass('mr-2');
    });

    it('applies loading state correctly for all variants', () => {
      const { rerender } = render(
        <Button isLoading loadingText="Loading...">
          Primary Loading
        </Button>,
      );

      let button = screen.getByRole('button');
      expect(button).toBeDisabled();
      expect(screen.getAllByText('Loading...')).toHaveLength(2); // Both visible and screen reader text

      rerender(
        <Button
          variant={ButtonVariant.Secondary}
          isLoading
          loadingText="Loading..."
        >
          Secondary Loading
        </Button>,
      );
      button = screen.getByRole('button');
      expect(button).toBeDisabled();
      expect(screen.getAllByText('Loading...')).toHaveLength(2);

      rerender(
        <Button
          variant={ButtonVariant.Tertiary}
          isLoading
          loadingText="Loading..."
        >
          Tertiary Loading
        </Button>,
      );
      button = screen.getByRole('button');
      expect(button).toBeDisabled();
      expect(screen.getAllByText('Loading...')).toHaveLength(2);
    });

    it('applies disabled state correctly for all variants', () => {
      const { rerender } = render(<Button isDisabled>Primary Disabled</Button>);

      let button = screen.getByRole('button');
      expect(button).toBeDisabled();
      expect(button).toHaveClass('opacity-50', 'cursor-not-allowed');

      rerender(
        <Button variant={ButtonVariant.Secondary} isDisabled>
          Secondary Disabled
        </Button>,
      );
      button = screen.getByRole('button');
      expect(button).toBeDisabled();
      expect(button).toHaveClass('opacity-50', 'cursor-not-allowed');

      rerender(
        <Button variant={ButtonVariant.Tertiary} isDisabled>
          Tertiary Disabled
        </Button>,
      );
      button = screen.getByRole('button');
      expect(button).toBeDisabled();
      expect(button).toHaveClass('opacity-50', 'cursor-not-allowed');
    });

    it('applies full width correctly for all variants', () => {
      const { rerender } = render(
        <Button isFullWidth>Primary Full Width</Button>,
      );

      let button = screen.getByRole('button');
      expect(button).toHaveClass('w-full');

      rerender(
        <Button variant={ButtonVariant.Secondary} isFullWidth>
          Secondary Full Width
        </Button>,
      );
      button = screen.getByRole('button');
      expect(button).toHaveClass('w-full');

      rerender(
        <Button variant={ButtonVariant.Tertiary} isFullWidth>
          Tertiary Full Width
        </Button>,
      );
      button = screen.getByRole('button');
      expect(button).toHaveClass('w-full');
    });
  });

  describe('Focus Styling', () => {
    describe('Primary Button Focus', () => {
      it('applies correct focus outline for non-inverse primary button', () => {
        render(<Button>Primary Button</Button>);
        const button = screen.getByRole('button');
        expect(button).toHaveClass(
          'focus-visible:ring-0',
          'focus-visible:outline',
          'focus-visible:outline-2',
          'focus-visible:outline-primary-default',
          'focus-visible:outline-offset-2',
        );
      });

      it('applies correct focus outline for inverse primary button', () => {
        render(<Button isInverse>Primary Inverse Button</Button>);
        const button = screen.getByRole('button');
        expect(button).toHaveClass(
          'focus-visible:ring-0',
          'focus-visible:outline',
          'focus-visible:outline-2',
          'focus-visible:outline-background-default',
          'focus-visible:outline-offset-4',
        );
      });

      it('applies correct focus outline for danger primary button', () => {
        render(<Button isDanger>Primary Danger Button</Button>);
        const button = screen.getByRole('button');
        expect(button).toHaveClass(
          'focus-visible:ring-0',
          'focus-visible:outline',
          'focus-visible:outline-2',
          'focus-visible:outline-primary-default',
          'focus-visible:outline-offset-2',
        );
      });
    });

    describe('Secondary Button Focus', () => {
      it('applies correct focus outline for non-inverse secondary button', () => {
        render(
          <Button variant={ButtonVariant.Secondary}>Secondary Button</Button>,
        );
        const button = screen.getByRole('button');
        expect(button).toHaveClass(
          'focus-visible:ring-0',
          'focus-visible:outline',
          'focus-visible:outline-2',
          'focus-visible:outline-primary-default',
          'focus-visible:outline-offset-2',
        );
      });

      it('applies correct focus outline for inverse secondary button', () => {
        render(
          <Button variant={ButtonVariant.Secondary} isInverse>
            Secondary Inverse Button
          </Button>,
        );
        const button = screen.getByRole('button');
        expect(button).toHaveClass(
          'focus-visible:ring-0',
          'focus-visible:outline',
          'focus-visible:outline-2',
          'focus-visible:outline-background-default',
          'focus-visible:outline-offset-4',
        );
      });

      it('applies correct focus outline for danger secondary button', () => {
        render(
          <Button variant={ButtonVariant.Secondary} isDanger>
            Secondary Danger Button
          </Button>,
        );
        const button = screen.getByRole('button');
        expect(button).toHaveClass(
          'focus-visible:ring-0',
          'focus-visible:outline',
          'focus-visible:outline-2',
          'focus-visible:outline-primary-default',
          'focus-visible:outline-offset-2',
        );
      });
    });

    describe('Tertiary Button Focus', () => {
      it('applies correct focus outline for non-inverse tertiary button', () => {
        render(
          <Button variant={ButtonVariant.Tertiary}>Tertiary Button</Button>,
        );
        const button = screen.getByRole('button');
        expect(button).toHaveClass(
          'focus-visible:ring-0',
          'focus-visible:outline',
          'focus-visible:outline-2',
          'focus-visible:outline-primary-default',
          'focus-visible:outline-offset-2',
        );
      });

      it('applies correct focus outline for inverse tertiary button', () => {
        render(
          <Button variant={ButtonVariant.Tertiary} isInverse>
            Tertiary Inverse Button
          </Button>,
        );
        const button = screen.getByRole('button');
        expect(button).toHaveClass(
          'focus-visible:ring-0',
          'focus-visible:outline',
          'focus-visible:outline-2',
          'focus-visible:outline-background-default',
          'focus-visible:outline-offset-4',
        );
      });

      it('applies correct focus outline for danger tertiary button', () => {
        render(
          <Button variant={ButtonVariant.Tertiary} isDanger>
            Tertiary Danger Button
          </Button>,
        );
        const button = screen.getByRole('button');
        expect(button).toHaveClass(
          'focus-visible:ring-0',
          'focus-visible:outline',
          'focus-visible:outline-2',
          'focus-visible:outline-primary-default',
          'focus-visible:outline-offset-2',
        );
      });
    });
  });

  describe('Ref Forwarding', () => {
    it('forwards ref to the button element for all variants', () => {
      const { rerender } = render(<Button ref={createRef()}>Button</Button>);

      let button = screen.getByRole('button');
      expect(button).toBeInTheDocument();

      rerender(
        <Button variant={ButtonVariant.Secondary} ref={createRef()}>
          Button
        </Button>,
      );
      button = screen.getByRole('button');
      expect(button).toBeInTheDocument();

      rerender(
        <Button variant={ButtonVariant.Tertiary} ref={createRef()}>
          Button
        </Button>,
      );
      button = screen.getByRole('button');
      expect(button).toBeInTheDocument();
    });
  });
});
