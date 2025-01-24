import { render, screen } from '@testing-library/react';
import React from 'react';

import { ButtonTertiarySize, IconName } from '..';
import { ButtonTertiary } from './ButtonTertiary';

describe('ButtonTertiary', () => {
  it('renders with button tertiary styles by default', () => {
    render(<ButtonTertiary>Button Tertiary</ButtonTertiary>);

    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-transparent', 'text-primary-default');
  });

  it('renders with danger styles when isDanger is true', () => {
    render(<ButtonTertiary isDanger>Danger Button Tertiary</ButtonTertiary>);

    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-transparent', 'text-error-default');
  });

  it('merges custom className with default styles', () => {
    render(
      <ButtonTertiary className="custom-class">Button Tertiary</ButtonTertiary>,
    );

    const button = screen.getByRole('button');
    expect(button).toHaveClass('custom-class');
    expect(button).toHaveClass('bg-transparent');
  });

  it('applies disabled styles while preserving variant-specific classes', () => {
    render(
      <ButtonTertiary isDisabled>Disabled Button Tertiary</ButtonTertiary>,
    );

    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(button).toHaveClass(
      'bg-transparent',
      'text-primary-default',
      'opacity-50',
      'cursor-not-allowed',
    );
  });

  it('applies loading styles while preserving variant-specific classes', () => {
    render(<ButtonTertiary isLoading>Button</ButtonTertiary>);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(button).toHaveClass(
      'text-primary-default',
      'bg-pressed',
      'cursor-not-allowed',
    );
  });

  it('renders with correct size classes', () => {
    const { rerender } = render(
      <ButtonTertiary size={ButtonTertiarySize.Sm}>Small</ButtonTertiary>,
    );
    expect(screen.getByRole('button')).toHaveClass('h-8');

    rerender(
      <ButtonTertiary size={ButtonTertiarySize.Md}>Medium</ButtonTertiary>,
    );
    expect(screen.getByRole('button')).toHaveClass('h-10');

    rerender(
      <ButtonTertiary size={ButtonTertiarySize.Lg}>Large</ButtonTertiary>,
    );
    expect(screen.getByRole('button')).toHaveClass('h-12');
  });

  it('renders start icon when startIconName is provided', () => {
    render(
      <ButtonTertiary
        startIconName={IconName.AddSquare}
        startIconProps={{ 'data-testid': 'icon-add-square' }}
      >
        With Icon
      </ButtonTertiary>,
    );
    const icon = screen.getByTestId('icon-add-square');
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveClass('mr-2');
  });

  it('renders end icon when endIconName is provided', () => {
    render(
      <ButtonTertiary
        endIconName={IconName.AddSquare}
        endIconProps={{ 'data-testid': 'icon-add-square' }}
      >
        With Icon
      </ButtonTertiary>,
    );
    const icon = screen.getByTestId('icon-add-square');
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveClass('ml-2');
  });

  it('applies full width class correctly', () => {
    render(<ButtonTertiary isFullWidth>Full Width</ButtonTertiary>);
    expect(screen.getByRole('button')).toHaveClass('w-full');
  });

  describe('interactive states', () => {
    it('applies interactive styles when neither disabled nor loading', () => {
      render(<ButtonTertiary>Button</ButtonTertiary>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass(
        'transition-[transform,colors,opacity]',
        'duration-100',
        'ease-linear',
        'active:scale-[0.97]',
      );
    });

    it('does not apply interactive styles when disabled', () => {
      render(<ButtonTertiary isDisabled>Disabled Button</ButtonTertiary>);

      const button = screen.getByRole('button');
      expect(button).not.toHaveClass('hover:bg-hover');
      expect(button).not.toHaveClass('active:bg-pressed');
    });

    it('does not apply interactive styles when loading', () => {
      render(<ButtonTertiary isLoading>Loading Button</ButtonTertiary>);

      const button = screen.getByRole('button');
      expect(button).not.toHaveClass('hover:bg-hover');
      expect(button).not.toHaveClass('active:bg-pressed');
    });
  });

  describe('ref forwarding', () => {
    it('forwards ref to the button element', () => {
      const ref = React.createRef<HTMLButtonElement>();
      render(<ButtonTertiary ref={ref}>Button with Ref</ButtonTertiary>);

      expect(ref.current).toBeInstanceOf(HTMLButtonElement);
      expect(ref.current).toBe(screen.getByRole('button'));
    });
  });

  describe('style prop handling', () => {
    it('applies custom styles when style prop is provided', () => {
      render(
        <ButtonTertiary style={{ marginTop: '10px' }}>
          Styled Button
        </ButtonTertiary>,
      );

      const button = screen.getByRole('button');
      expect(button).toHaveStyle({ marginTop: '10px' });
    });
  });

  describe('accessibility', () => {
    it('maintains button role and disabled state when loading', () => {
      render(
        <ButtonTertiary isLoading loadingText="Loading...">
          Click Me
        </ButtonTertiary>,
      );

      const button = screen.getByRole('button');
      expect(button).toBeDisabled();
    });

    it('properly handles aria-label when provided', () => {
      render(
        <ButtonTertiary aria-label="Custom Label">
          <span>♥</span>
        </ButtonTertiary>,
      );

      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('aria-label', 'Custom Label');
    });
  });

  describe('edge cases', () => {
    it('handles both isDanger and isDisabled states', () => {
      render(
        <ButtonTertiary isDanger isDisabled>
          Danger Disabled
        </ButtonTertiary>,
      );

      const button = screen.getByRole('button');
      expect(button).toHaveClass('text-error-default', 'opacity-50');
      expect(button).toBeDisabled();
    });
  });

  it('renders with inverse styles when isInverse is true', () => {
    render(<ButtonTertiary isInverse>Inverse</ButtonTertiary>);

    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-transparent', 'text-primary-inverse');
  });

  it('renders with inverse danger styles when both isInverse and isDanger are true', () => {
    render(
      <ButtonTertiary isInverse isDanger>
        Inverse Danger
      </ButtonTertiary>,
    );

    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-default', 'text-error-default');
  });

  describe('variant combinations', () => {
    it('applies correct styles for all variant combinations', () => {
      const { rerender } = render(<ButtonTertiary>Button</ButtonTertiary>);

      // Default
      expect(screen.getByRole('button')).toHaveClass('text-primary-default');

      // Danger
      rerender(<ButtonTertiary isDanger>Button</ButtonTertiary>);
      expect(screen.getByRole('button')).toHaveClass('text-error-default');

      // Inverse
      rerender(<ButtonTertiary isInverse>Button</ButtonTertiary>);
      expect(screen.getByRole('button')).toHaveClass('text-primary-inverse');

      // Danger + Inverse
      rerender(
        <ButtonTertiary isDanger isInverse>
          Button
        </ButtonTertiary>,
      );
      expect(screen.getByRole('button')).toHaveClass(
        'text-error-default',
        'bg-default',
      );
    });
  });

  describe('loading states', () => {
    it('applies correct loading styles for all variants', () => {
      const { rerender } = render(
        <ButtonTertiary isLoading>Loading Button</ButtonTertiary>,
      );

      // Default loading
      let button = screen.getByRole('button');
      expect(button).toHaveClass('bg-pressed', 'cursor-not-allowed');
      expect(button).not.toHaveClass('hover:bg-hover', 'active:bg-pressed');
      expect(button).toBeDisabled();

      // Danger loading
      rerender(
        <ButtonTertiary isLoading isDanger>
          Loading Button
        </ButtonTertiary>,
      );
      button = screen.getByRole('button');
      expect(button).toHaveClass(
        'bg-error-muted-pressed',
        'text-error-default-pressed',
        'cursor-not-allowed',
      );

      // Inverse loading
      rerender(
        <ButtonTertiary isLoading isInverse>
          Loading Button
        </ButtonTertiary>,
      );
      button = screen.getByRole('button');
      expect(button).toHaveClass('bg-pressed', 'cursor-not-allowed');

      // Inverse danger loading
      rerender(
        <ButtonTertiary isLoading isInverse isDanger>
          Loading Button
        </ButtonTertiary>,
      );
      button = screen.getByRole('button');
      expect(button).toHaveClass('bg-default-pressed', 'cursor-not-allowed');
    });
  });

  describe('className combinations', () => {
    it('handles all isDanger and isInverse combinations', () => {
      const { rerender } = render(<ButtonTertiary>Button</ButtonTertiary>);

      // Default state (both false)
      expect(screen.getByRole('button')).toHaveClass('text-primary-default');

      // Only isDanger
      rerender(<ButtonTertiary isDanger>Button</ButtonTertiary>);
      expect(screen.getByRole('button')).toHaveClass('text-error-default');

      // Only isInverse
      rerender(<ButtonTertiary isInverse>Button</ButtonTertiary>);
      expect(screen.getByRole('button')).toHaveClass('text-primary-inverse');

      // Both isDanger and isInverse
      rerender(
        <ButtonTertiary isDanger isInverse>
          Button
        </ButtonTertiary>,
      );
      expect(screen.getByRole('button')).toHaveClass('text-error-default');
      expect(screen.getByRole('button')).toHaveClass('bg-default');
    });

    it('handles all interactive state combinations', () => {
      const { rerender } = render(<ButtonTertiary>Button</ButtonTertiary>);

      // Default interactive state
      let button = screen.getByRole('button');
      expect(button).toHaveClass('text-primary-default');
      // Check for transition classes instead of specific hover states
      expect(button).toHaveClass('transition-[transform,colors,opacity]');
      expect(button).toHaveClass('duration-100');
      expect(button).toHaveClass('ease-linear');
      expect(button).toHaveClass('active:scale-[0.97]');
      expect(button).toHaveClass('active:ease-[cubic-bezier(0.3,0.8,0.3,1)]');

      // Disabled
      rerender(<ButtonTertiary isDisabled>Button</ButtonTertiary>);
      button = screen.getByRole('button');
      expect(button).not.toHaveClass('transition-[transform,colors,opacity]');

      // Loading
      rerender(<ButtonTertiary isLoading>Button</ButtonTertiary>);
      button = screen.getByRole('button');
      expect(button).not.toHaveClass('transition-[transform,colors,opacity]');
    });
  });
});
