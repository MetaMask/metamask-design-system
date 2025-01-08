import { render, screen } from '@testing-library/react';
import React from 'react';

import { IconName } from '..';
import { Button } from './Button';
import { ButtonVariant } from './Button.types';

describe('Button', () => {
  describe('Variants', () => {
    it('renders primary button by default', () => {
      render(<Button>Primary Button</Button>);

      const button = screen.getByRole('button');
      expect(button).toHaveClass(
        'bg-primary-default',
        'hover:bg-primary-default-hover',
        'active:bg-primary-default-pressed',
        'text-primary-inverse',
      );
    });

    it('renders secondary button when variant is Secondary', () => {
      render(
        <Button variant={ButtonVariant.Secondary}>Secondary Button</Button>,
      );

      const button = screen.getByRole('button');
      expect(button).toHaveClass(
        'bg-default',
        'border-2',
        'border-muted',
        'text-default',
      );
    });

    it('renders link button when variant is Link', () => {
      render(<Button variant={ButtonVariant.Link}>Link Button</Button>);

      const button = screen.getByRole('button');
      expect(button).toHaveClass('bg-transparent', 'text-primary-default');
    });

    it('renders primary button when an invalid variant is provided', () => {
      // @ts-expect-error Testing invalid variant
      render(<Button variant="invalid">Default to Primary</Button>);

      const button = screen.getByRole('button');
      expect(button).toHaveClass(
        'bg-primary-default',
        'hover:bg-primary-default-hover',
        'active:bg-primary-default-pressed',
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
        'bg-default',
        'border-2',
        'border-error-default',
        'text-error-default',
      );

      rerender(
        <Button variant={ButtonVariant.Link} isDanger>
          Link Danger Button
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
        <Button startIconName={IconName.AddSquare}>Primary with Icon</Button>,
      );

      let icon = screen.getByRole('img');
      expect(icon).toHaveClass('mr-2');

      rerender(
        <Button
          variant={ButtonVariant.Secondary}
          startIconName={IconName.AddSquare}
        >
          Secondary with Icon
        </Button>,
      );
      icon = screen.getByRole('img');
      expect(icon).toHaveClass('mr-2');

      rerender(
        <Button variant={ButtonVariant.Link} startIconName={IconName.AddSquare}>
          Link with Icon
        </Button>,
      );
      icon = screen.getByRole('img');
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
      expect(screen.getByText('Loading...')).toBeInTheDocument();

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
      expect(screen.getByText('Loading...')).toBeInTheDocument();

      rerender(
        <Button variant={ButtonVariant.Link} isLoading loadingText="Loading...">
          Link Loading
        </Button>,
      );
      button = screen.getByRole('button');
      expect(button).toBeDisabled();
      expect(screen.getByText('Loading...')).toBeInTheDocument();
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
        <Button variant={ButtonVariant.Link} isDisabled>
          Link Disabled
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
        <Button variant={ButtonVariant.Link} isFullWidth>
          Link Full Width
        </Button>,
      );
      button = screen.getByRole('button');
      expect(button).toHaveClass('w-full');
    });
  });

  describe('Ref Forwarding', () => {
    it('forwards ref to the button element for all variants', () => {
      const { rerender } = render(
        <Button ref={React.createRef()}>Button</Button>,
      );

      let button = screen.getByRole('button');
      expect(button).toBeInTheDocument();

      rerender(
        <Button variant={ButtonVariant.Secondary} ref={React.createRef()}>
          Button
        </Button>,
      );
      button = screen.getByRole('button');
      expect(button).toBeInTheDocument();

      rerender(
        <Button variant={ButtonVariant.Link} ref={React.createRef()}>
          Button
        </Button>,
      );
      button = screen.getByRole('button');
      expect(button).toBeInTheDocument();
    });
  });

  describe('Edge Cases', () => {
    it('handles both isDanger and isInverse states for Primary and Secondary variants', () => {
      const { rerender } = render(
        <Button isDanger isInverse>
          Primary Danger Inverse
        </Button>,
      );

      let button = screen.getByRole('button');
      expect(button).toHaveClass('bg-default', 'text-error-default');

      rerender(
        <Button variant={ButtonVariant.Secondary} isDanger isInverse>
          Secondary Danger Inverse
        </Button>,
      );
      button = screen.getByRole('button');
      expect(button).toHaveClass(
        'bg-transparent',
        'border-2',
        'border-error-inverse',
        'text-error-inverse',
      );
    });
  });
});
