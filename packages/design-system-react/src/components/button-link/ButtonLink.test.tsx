import { render, screen } from '@testing-library/react';
import React from 'react';

import { ButtonLinkSize, IconName } from '..';
import { ButtonLink } from './ButtonLink';

describe('ButtonLink', () => {
  it('renders with link button styles by default', () => {
    render(<ButtonLink>Link Button</ButtonLink>);

    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-transparent', 'text-primary-default');
  });

  it('renders with danger styles when isDanger is true', () => {
    render(<ButtonLink isDanger>Danger Link</ButtonLink>);

    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-transparent', 'text-error-default');
  });

  it('merges custom className with default styles', () => {
    render(<ButtonLink className="custom-class">Link Button</ButtonLink>);

    const button = screen.getByRole('button');
    expect(button).toHaveClass('custom-class');
    expect(button).toHaveClass('bg-transparent');
  });

  it('applies disabled styles while preserving variant-specific classes', () => {
    render(<ButtonLink isDisabled>Disabled Link</ButtonLink>);

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
    render(
      <ButtonLink isLoading loadingText="Loading...">
        Loading Link
      </ButtonLink>,
    );

    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(button).toHaveClass(
      'bg-transparent',
      'text-primary-default',
      'opacity-50',
      'cursor-not-allowed',
    );
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('renders with correct size classes', () => {
    const { rerender } = render(
      <ButtonLink size={ButtonLinkSize.Sm}>Small</ButtonLink>,
    );
    expect(screen.getByRole('button')).toHaveClass('h-8');

    rerender(<ButtonLink size={ButtonLinkSize.Md}>Medium</ButtonLink>);
    expect(screen.getByRole('button')).toHaveClass('h-10');

    rerender(<ButtonLink size={ButtonLinkSize.Lg}>Large</ButtonLink>);
    expect(screen.getByRole('button')).toHaveClass('h-12');
  });

  it('renders with icons correctly', () => {
    render(
      <ButtonLink
        startIconName={IconName.AddSquare}
        endIconName={IconName.AddSquare}
      >
        With Icons
      </ButtonLink>,
    );

    const icons = screen.getAllByRole('img');
    expect(icons).toHaveLength(2);
    expect(icons[0]).toHaveClass('mr-2'); // start icon
    expect(icons[1]).toHaveClass('ml-2'); // end icon
  });

  it('applies full width class correctly', () => {
    render(<ButtonLink isFullWidth>Full Width</ButtonLink>);
    expect(screen.getByRole('button')).toHaveClass('w-full');
  });

  describe('interactive states', () => {
    it('applies interactive styles when neither disabled nor loading', () => {
      render(<ButtonLink>Interactive Button</ButtonLink>);

      const button = screen.getByRole('button');
      expect(button).toHaveClass(
        'transition-[transform,colors,opacity]',
        'duration-100',
        'ease-linear',
        'hover:bg-hover',
        'active:bg-pressed',
        'active:scale-95',
      );
    });

    it('does not apply interactive styles when disabled', () => {
      render(<ButtonLink isDisabled>Disabled Button</ButtonLink>);

      const button = screen.getByRole('button');
      expect(button).not.toHaveClass('hover:bg-hover');
      expect(button).not.toHaveClass('active:bg-pressed');
    });

    it('does not apply interactive styles when loading', () => {
      render(<ButtonLink isLoading>Loading Button</ButtonLink>);

      const button = screen.getByRole('button');
      expect(button).not.toHaveClass('hover:bg-hover');
      expect(button).not.toHaveClass('active:bg-pressed');
    });
  });

  describe('ref forwarding', () => {
    it('forwards ref to the button element', () => {
      const ref = React.createRef<HTMLButtonElement>();
      render(<ButtonLink ref={ref}>Button with Ref</ButtonLink>);

      expect(ref.current).toBeInstanceOf(HTMLButtonElement);
      expect(ref.current).toBe(screen.getByRole('button'));
    });
  });

  describe('style prop handling', () => {
    it('applies custom styles when style prop is provided', () => {
      render(
        <ButtonLink style={{ marginTop: '10px' }}>Styled Button</ButtonLink>,
      );

      const button = screen.getByRole('button');
      expect(button).toHaveStyle({ marginTop: '10px' });
    });
  });

  describe('accessibility', () => {
    it('maintains button role and disabled state when loading', () => {
      render(
        <ButtonLink isLoading loadingText="Loading...">
          Click Me
        </ButtonLink>,
      );

      const button = screen.getByRole('button');
      expect(button).toBeDisabled();
    });

    it('properly handles aria-label when provided', () => {
      render(
        <ButtonLink aria-label="Custom Label">
          <span>♥</span>
        </ButtonLink>,
      );

      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('aria-label', 'Custom Label');
    });
  });

  describe('edge cases', () => {
    it('handles both isDanger and isDisabled states', () => {
      render(
        <ButtonLink isDanger isDisabled>
          Danger Disabled
        </ButtonLink>,
      );

      const button = screen.getByRole('button');
      expect(button).toHaveClass('text-error-default', 'opacity-50');
      expect(button).toBeDisabled();
    });
  });
});
