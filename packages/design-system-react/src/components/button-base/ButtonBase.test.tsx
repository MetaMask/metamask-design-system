import { render, screen } from '@testing-library/react';
import React from 'react';

import { IconName } from '..';
import { ButtonBase } from './ButtonBase';
import { ButtonBaseSize } from './ButtonBase.types';

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

    rerender(<ButtonBase size={ButtonBaseSize.Lg}>Button</ButtonBase>);
    expect(screen.getByRole('button')).toHaveClass('h-12');
  });

  it('applies medium size by default', () => {
    render(<ButtonBase>Default Size</ButtonBase>);
    expect(screen.getByRole('button')).toHaveClass('h-10');
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
      <ButtonBase isLoading loadingText="Please wait...">
        Submit
      </ButtonBase>,
    );
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByText('Please wait...')).toBeInTheDocument();
    expect(screen.queryByText('Submit')).not.toBeInTheDocument();
  });

  it('shows loading state with children when no loading text provided', () => {
    render(<ButtonBase isLoading>Submit</ButtonBase>);
    expect(screen.getByRole('img')).toBeInTheDocument();
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
          className: 'custom-class',
          'data-testid': 'custom-loading-icon',
        }}
      >
        Submit
      </ButtonBase>,
    );

    const loadingIcon = screen.getByTestId('custom-loading-icon');
    expect(loadingIcon).toBeInTheDocument();
    expect(loadingIcon).toHaveClass('custom-class');
  });

  it('merges loading icon classes correctly', () => {
    render(
      <ButtonBase
        isLoading
        loadingIconProps={{
          className: 'custom-class',
          'data-testid': 'custom-loading-icon',
        }}
      >
        Submit
      </ButtonBase>,
    );

    const loadingIcon = screen.getByTestId('custom-loading-icon');
    expect(loadingIcon).toHaveClass('custom-class');
  });

  it('disables the button when isLoading is true', () => {
    render(<ButtonBase isLoading>Loading Button</ButtonBase>);

    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(button).toHaveClass('opacity-50', 'cursor-not-allowed');
  });

  it('applies disabled styles for both isDisabled and isLoading states', () => {
    const { rerender } = render(
      <ButtonBase isDisabled>Disabled Button</ButtonBase>,
    );

    let button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(button).toHaveClass('opacity-50', 'cursor-not-allowed');

    rerender(<ButtonBase isLoading>Loading Button</ButtonBase>);
    button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(button).toHaveClass('opacity-50', 'cursor-not-allowed');
  });

  it('wraps string children in Text component', () => {
    render(<ButtonBase>Click me</ButtonBase>);
    expect(screen.getByText('Click me')).toHaveClass(
      'text-default text-s-body-md font-s-body-md leading-s-body-md tracking-s-body-md md:text-l-body-md',
    );
  });

  it('passes textProps to Text component when children is string', () => {
    render(
      <ButtonBase textProps={{ className: 'custom-text-class' }}>
        Click me
      </ButtonBase>,
    );
    expect(screen.getByText('Click me')).toHaveClass('custom-text-class');
  });

  it('does not wrap non-string children in Text component', () => {
    render(
      <ButtonBase>
        <div data-testid="custom-child">Custom Element</div>
      </ButtonBase>,
    );
    const customChild = screen.getByTestId('custom-child');
    expect(customChild.parentElement).not.toHaveClass('text-base');
  });
});
