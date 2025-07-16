import { render, screen } from '@testing-library/react';
import React from 'react';

import { ButtonBaseSize } from '../../types';
import { IconName } from '../Icon';

import { ButtonBase } from './ButtonBase';

describe('ButtonBase', () => {
  it('renders children correctly', () => {
    render(<ButtonBase>Click me</ButtonBase>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('applies size classes correctly', () => {
    const { rerender } = render(
      <ButtonBase size={ButtonBaseSize.Sm}>Button</ButtonBase>,
    );
    expect(screen.getByRole('button')).toHaveClass('h-8');

    rerender(<ButtonBase size={ButtonBaseSize.Md}>Button</ButtonBase>);
    expect(screen.getByRole('button')).toHaveClass('h-10');

    rerender(<ButtonBase>Button</ButtonBase>);
    expect(screen.getByRole('button')).toHaveClass('h-12');
  });

  it('applies large size by default', () => {
    render(<ButtonBase>Default Size</ButtonBase>);
    expect(screen.getByRole('button')).toHaveClass('h-12');
  });

  it('renders as child component when asChild is true', () => {
    render(
      <ButtonBase asChild>
        <a href="#" target="_blank" rel="noopener noreferrer">
          Link
        </a>
      </ButtonBase>,
    );
    const link = screen.getByRole('link');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '#');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('shows loading state with loading text', () => {
    render(
      <ButtonBase
        isLoading
        loadingText="Please wait..."
        loadingIconProps={{ 'data-testid': 'loading-spinner' }}
      >
        Submit
      </ButtonBase>,
    );
    expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();
    const loadingTexts = screen.getAllByText('Please wait...');
    expect(loadingTexts).toHaveLength(2);
    expect(screen.getByText('Submit')).toHaveClass('invisible');
  });

  it('shows loading state with children when no loading text provided', () => {
    render(
      <ButtonBase
        isLoading
        loadingIconProps={{ 'data-testid': 'loading-spinner' }}
      >
        Submit
      </ButtonBase>,
    );
    expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();
    expect(screen.getByText('Submit')).toBeInTheDocument();
  });

  it('renders start icon when startIconName is provided', () => {
    render(
      <ButtonBase
        startIconName={IconName.AddSquare}
        startIconProps={{ 'data-testid': 'icon-add-square' }}
      >
        With Icon
      </ButtonBase>,
    );
    const icon = screen.getByTestId('icon-add-square');
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveClass('mr-2');
  });

  it('renders end icon when endIconName is provided', () => {
    render(
      <ButtonBase
        endIconName={IconName.AddSquare}
        endIconProps={{ 'data-testid': 'icon-add-square' }}
      >
        With Icon
      </ButtonBase>,
    );
    const icon = screen.getByTestId('icon-add-square');
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveClass('ml-2');
  });

  it('renders start accessory when provided', () => {
    render(<ButtonBase startAccessory="→">With Accessory</ButtonBase>);
    const accessory = screen.getByText('→');
    expect(accessory).toBeInTheDocument();
    expect(accessory).toHaveClass('mr-2');
  });

  it('renders end accessory when provided', () => {
    render(<ButtonBase endAccessory="←">With Accessory</ButtonBase>);
    const accessory = screen.getByText('←');
    expect(accessory).toBeInTheDocument();
    expect(accessory).toHaveClass('ml-2');
  });

  it('applies disabled state', () => {
    render(<ButtonBase isDisabled>Disabled Button</ButtonBase>);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(button).toHaveClass('opacity-50', 'cursor-not-allowed');
  });

  it('applies full width class when isFullWidth is true', () => {
    render(<ButtonBase isFullWidth>Full Width Button</ButtonBase>);
    expect(screen.getByRole('button')).toHaveClass('w-full');
  });

  it('does not apply full width class by default', () => {
    render(<ButtonBase>Default Width Button</ButtonBase>);
    expect(screen.getByRole('button')).not.toHaveClass('w-full');
  });

  it('applies custom loading icon props', () => {
    render(
      <ButtonBase
        isLoading
        loadingIconProps={{
          className: 'bg-default',
          'data-testid': 'custom-loading-icon',
        }}
      >
        Submit
      </ButtonBase>,
    );

    const loadingIcon = screen.getByTestId('custom-loading-icon');
    expect(loadingIcon).toBeInTheDocument();
    expect(loadingIcon).toHaveClass('bg-default');
  });

  it('merges loading icon classes correctly', () => {
    render(
      <ButtonBase
        isLoading
        loadingIconProps={{
          className: 'bg-default',
          'data-testid': 'custom-loading-icon',
        }}
      >
        Submit
      </ButtonBase>,
    );

    const loadingIcon = screen.getByTestId('custom-loading-icon');
    expect(loadingIcon).toHaveClass('bg-default');
  });

  it('disables the button when isLoading is true', () => {
    render(<ButtonBase isLoading>Loading Button</ButtonBase>);

    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(button).toHaveClass('cursor-not-allowed');
  });

  it('applies disabled styles for both isDisabled and isLoading states', () => {
    const { rerender } = render(
      <ButtonBase isDisabled>Disabled Button</ButtonBase>,
    );

    let button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(button).toHaveClass('cursor-not-allowed');

    rerender(
      <ButtonBase
        isLoading
        loadingText="Loading"
        loadingTextProps={{ className: 'custom-text-class' }}
      >
        Loading Button
      </ButtonBase>,
    );
    button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(button).toHaveClass('cursor-not-allowed');
    const visibleLoadingText = screen
      .getAllByText('Loading')
      .find((element) => !element.classList.contains('sr-only'));
    expect(visibleLoadingText).toHaveClass('custom-text-class');
  });

  it('handles text children correctly', () => {
    // Test basic text wrapping and styling
    const { rerender } = render(<ButtonBase>Click me</ButtonBase>);
    const textElement = screen.getByText('Click me');

    expect(textElement.tagName).toBe('SPAN');
    expect(textElement).toHaveClass(
      'text-inherit',
      'text-s-body-md',
      'leading-s-body-md',
      'tracking-s-body-md',
      'md:text-l-body-md',
      'font-medium',
    );

    // Test custom text props
    rerender(
      <ButtonBase textProps={{ className: 'custom-text-class' }}>
        Click me
      </ButtonBase>,
    );
    expect(screen.getByText('Click me')).toHaveClass('custom-text-class');

    // Test non-string children
    rerender(
      <ButtonBase>
        <div data-testid="custom-child">Custom Element</div>
      </ButtonBase>,
    );
    const customChild = screen.getByTestId('custom-child');
    expect(customChild.parentElement).not.toHaveClass(
      'text-inherit',
      'text-s-body-md',
      'font-s-body-md',
      'leading-s-body-md',
      'tracking-s-body-md',
      'md:text-l-body-md',
    );
  });

  // Accessibility tests
  describe('Accessibility', () => {
    it('applies aria-label when provided', () => {
      render(
        <ButtonBase aria-label="Save document">
          <span>💾</span>
        </ButtonBase>,
      );
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('aria-label', 'Save document');
    });

    it('applies aria-labelledby when provided', () => {
      render(
        <div>
          <div id="button-label">Save your work</div>
          <ButtonBase aria-labelledby="button-label">Save</ButtonBase>
        </div>,
      );
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('aria-labelledby', 'button-label');
    });

    it('applies aria-describedby when provided', () => {
      render(
        <div>
          <ButtonBase aria-describedby="button-description">Save</ButtonBase>
          <div id="button-description">This will save your current work</div>
        </div>,
      );
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('aria-describedby', 'button-description');
    });

    it('applies aria-pressed for toggle buttons', () => {
      const { rerender } = render(
        <ButtonBase aria-pressed={false}>Toggle</ButtonBase>,
      );
      let button = screen.getByRole('button');
      expect(button).toHaveAttribute('aria-pressed', 'false');

      rerender(<ButtonBase aria-pressed={true}>Toggle</ButtonBase>);
      button = screen.getByRole('button');
      expect(button).toHaveAttribute('aria-pressed', 'true');

      rerender(<ButtonBase aria-pressed="mixed">Toggle</ButtonBase>);
      button = screen.getByRole('button');
      expect(button).toHaveAttribute('aria-pressed', 'mixed');
    });

    it('applies aria-expanded when provided', () => {
      const { rerender } = render(
        <ButtonBase aria-expanded={false}>Expand Menu</ButtonBase>,
      );
      let button = screen.getByRole('button');
      expect(button).toHaveAttribute('aria-expanded', 'false');

      rerender(<ButtonBase aria-expanded={true}>Expand Menu</ButtonBase>);
      button = screen.getByRole('button');
      expect(button).toHaveAttribute('aria-expanded', 'true');
    });

    it('applies aria-controls when provided', () => {
      render(
        <div>
          <ButtonBase aria-controls="menu-panel">Menu</ButtonBase>
          <div id="menu-panel">Menu items...</div>
        </div>,
      );
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('aria-controls', 'menu-panel');
    });

    it('applies aria-haspopup when provided', () => {
      const { rerender } = render(
        <ButtonBase aria-haspopup="menu">Open Menu</ButtonBase>,
      );
      let button = screen.getByRole('button');
      expect(button).toHaveAttribute('aria-haspopup', 'menu');

      rerender(<ButtonBase aria-haspopup={true}>Open Dialog</ButtonBase>);
      button = screen.getByRole('button');
      expect(button).toHaveAttribute('aria-haspopup', 'true');

      rerender(<ButtonBase aria-haspopup="dialog">Open Dialog</ButtonBase>);
      button = screen.getByRole('button');
      expect(button).toHaveAttribute('aria-haspopup', 'dialog');
    });

    it('applies aria-disabled when isDisabled is true', () => {
      render(<ButtonBase isDisabled>Disabled Button</ButtonBase>);
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('aria-disabled', 'true');
    });

    it('applies aria-busy when isLoading is true', () => {
      render(<ButtonBase isLoading>Loading Button</ButtonBase>);
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('aria-busy', 'true');
    });

    it('does not apply aria-disabled when not disabled', () => {
      render(<ButtonBase>Active Button</ButtonBase>);
      const button = screen.getByRole('button');
      expect(button).not.toHaveAttribute('aria-disabled');
    });

    it('does not apply aria-busy when not loading', () => {
      render(<ButtonBase>Ready Button</ButtonBase>);
      const button = screen.getByRole('button');
      expect(button).not.toHaveAttribute('aria-busy');
    });

    it('hides decorative icons from screen readers', () => {
      render(
        <ButtonBase
          startIconName={IconName.AddSquare}
          startIconProps={{ 'data-testid': 'start-icon' }}
          endIconName={IconName.AddSquare}
          endIconProps={{ 'data-testid': 'end-icon' }}
        >
          With Icons
        </ButtonBase>,
      );

      const startIcon = screen.getByTestId('start-icon');
      const endIcon = screen.getByTestId('end-icon');

      expect(startIcon).toHaveAttribute('aria-hidden', 'true');
      expect(endIcon).toHaveAttribute('aria-hidden', 'true');
    });

    it('hides accessories from screen readers', () => {
      render(
        <ButtonBase
          startAccessory={<span data-testid="start-accessory">→</span>}
          endAccessory={<span data-testid="end-accessory">←</span>}
        >
          With Accessories
        </ButtonBase>,
      );

      const startAccessory =
        screen.getByTestId('start-accessory').parentElement;
      const endAccessory = screen.getByTestId('end-accessory').parentElement;

      expect(startAccessory).toHaveAttribute('aria-hidden', 'true');
      expect(endAccessory).toHaveAttribute('aria-hidden', 'true');
    });

    it('provides screen reader announcement for loading state', () => {
      render(
        <ButtonBase isLoading loadingText="Saving your changes">
          Save
        </ButtonBase>,
      );

      const announcement = screen
        .getAllByText('Saving your changes')
        .find((element) => element.classList.contains('sr-only'));
      expect(announcement).toHaveClass('sr-only');
      expect(announcement).toHaveAttribute('aria-live', 'polite');
      expect(announcement).toHaveAttribute('aria-atomic', 'true');
    });

    it('uses default loading announcement when no loadingText provided', () => {
      render(<ButtonBase isLoading>Save</ButtonBase>);

      const announcement = screen
        .getAllByText('Loading')
        .find((element) => element.classList.contains('sr-only'));
      expect(announcement).toHaveClass('sr-only');
      expect(announcement).toHaveAttribute('aria-live', 'polite');
      expect(announcement).toHaveAttribute('aria-atomic', 'true');
    });

    it('hides loading visual content from screen readers', () => {
      render(
        <ButtonBase
          isLoading
          loadingText="Please wait"
          loadingIconProps={{ 'data-testid': 'loading-spinner' }}
        >
          Submit
        </ButtonBase>,
      );

      // The loading container (visual loading content) should be hidden from screen readers
      const loadingSpinner = screen.getByTestId('loading-spinner');
      const loadingContainer = loadingSpinner.closest('[aria-hidden="true"]');
      expect(loadingContainer).toHaveAttribute('aria-hidden', 'true');
    });

    it('sets proper tabindex for disabled buttons', () => {
      const { rerender } = render(
        <ButtonBase isDisabled>Disabled Button</ButtonBase>,
      );
      let button = screen.getByRole('button');
      expect(button).toHaveAttribute('tabindex', '-1');

      rerender(<ButtonBase>Active Button</ButtonBase>);
      button = screen.getByRole('button');
      expect(button).not.toHaveAttribute('tabindex');
    });

    it('does not set role and tabindex when asChild is true', () => {
      render(
        <ButtonBase asChild>
          <a href="#" data-testid="custom-link">
            Link
          </a>
        </ButtonBase>,
      );

      const link = screen.getByTestId('custom-link');
      expect(link).not.toHaveAttribute('role');
      expect(link).not.toHaveAttribute('tabindex');
    });

    it('sets proper role for button elements', () => {
      render(<ButtonBase>Button</ButtonBase>);
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('role', 'button');
    });
  });
});
