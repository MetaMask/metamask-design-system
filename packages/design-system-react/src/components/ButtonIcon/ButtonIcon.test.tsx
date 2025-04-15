import { render, screen } from '@testing-library/react';
import React from 'react';

import { ButtonIconSize } from '../../types';
import { IconName } from '../Icon';
import { ButtonIcon } from './ButtonIcon';

describe('ButtonIcon', () => {
  it('renders with default props', () => {
    render(<ButtonIcon iconName={IconName.Close} ariaLabel="Close" />);
    const button = screen.getByRole('button', { name: 'Close' });
    expect(button).toHaveClass(
      'h-8',
      'w-8',
      'rounded',
      'bg-transparent',
      'hover:bg-hover',
      'active:bg-pressed',
      'text-icon-default',
    );
  });

  it('renders with different sizes', () => {
    const { rerender } = render(
      <ButtonIcon
        iconName={IconName.Close}
        size={ButtonIconSize.Sm}
        ariaLabel="Close small"
        iconProps={{ 'data-testid': 'button-icon' }}
      />,
    );
    expect(screen.getByRole('button')).toHaveClass('h-6', 'w-6');
    const icon = screen.getByTestId('button-icon');
    expect(icon).toHaveClass('text-inherit');

    rerender(
      <ButtonIcon
        iconName={IconName.Close}
        size={ButtonIconSize.Md}
        ariaLabel="Close medium"
        iconProps={{ 'data-testid': 'button-icon' }}
      />,
    );
    expect(screen.getByRole('button')).toHaveClass('h-8', 'w-8');

    rerender(
      <ButtonIcon
        iconName={IconName.Close}
        size={ButtonIconSize.Lg}
        ariaLabel="Close large"
        iconProps={{ 'data-testid': 'button-icon' }}
      />,
    );
    expect(screen.getByRole('button')).toHaveClass('h-10', 'w-10');
  });

  it('applies floating styles correctly', () => {
    render(
      <ButtonIcon
        iconName={IconName.Close}
        isFloating
        ariaLabel="Close floating"
      />,
    );
    const button = screen.getByRole('button');
    expect(button).toHaveClass(
      'rounded-full',
      'bg-icon-default',
      'text-background-default',
    );
  });

  it('applies inverse styles correctly', () => {
    render(
      <ButtonIcon
        iconName={IconName.Close}
        isInverse
        ariaLabel="Close inverse"
      />,
    );
    const button = screen.getByRole('button');
    expect(button).toHaveClass('text-background-default');
  });

  it('applies disabled styles correctly', () => {
    render(
      <ButtonIcon
        iconName={IconName.Close}
        isDisabled
        ariaLabel="Close disabled"
      />,
    );
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(button).toHaveClass('opacity-50', 'cursor-not-allowed');
    expect(button).not.toHaveClass('hover:bg-hover', 'active:bg-pressed');
  });

  it('merges custom className with default styles', () => {
    render(
      <ButtonIcon
        iconName={IconName.Close}
        className="custom-class"
        ariaLabel="Close custom"
      />,
    );
    const button = screen.getByRole('button');
    expect(button).toHaveClass('custom-class');
  });

  it('passes additional iconProps correctly', () => {
    render(
      <ButtonIcon
        iconName={IconName.Close}
        iconProps={{
          className: 'custom-icon-class',
          'data-testid': 'custom-icon',
        }}
        ariaLabel="Close with custom icon"
      />,
    );
    const icon = screen.getByTestId('custom-icon');
    expect(icon).toHaveClass('custom-icon-class');
  });

  it('applies aria-label correctly', () => {
    render(<ButtonIcon iconName={IconName.Close} ariaLabel="Close dialog" />);
    expect(
      screen.getByRole('button', { name: 'Close dialog' }),
    ).toBeInTheDocument();
  });

  it('applies floating and inverse styles correctly when both are true', () => {
    render(
      <ButtonIcon
        iconName={IconName.Close}
        isFloating
        isInverse
        ariaLabel="Close floating inverse"
      />,
    );
    const button = screen.getByRole('button');
    expect(button).toHaveClass(
      'rounded-full',
      'bg-icon-default',
      'text-background-default',
    );
  });
});
