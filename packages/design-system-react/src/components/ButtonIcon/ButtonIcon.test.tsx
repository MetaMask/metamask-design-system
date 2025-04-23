import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';

import { ButtonIconSize, IconName } from '../../types';
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

  it('combines floating + inverse styles', () => {
    render(
      <ButtonIcon
        iconName={IconName.Close}
        ariaLabel="FloatInverse"
        isFloating
        isInverse
      />,
    );
    const btn = screen.getByRole('button');
    expect(btn).toHaveClass(
      'rounded-full',
      'bg-icon-default',
      'text-background-default',
    );
  });

  it('applies disabled styles, disables hover/active, and disables click', () => {
    const handle = jest.fn();
    render(
      <ButtonIcon
        iconName={IconName.Close}
        ariaLabel="Disabled"
        isDisabled
        onClick={handle}
      />,
    );
    const btn = screen.getByRole('button');
    expect(btn).toBeDisabled();
    expect(btn).toHaveClass('opacity-50', 'cursor-not-allowed');
    expect(btn).not.toHaveClass('hover:bg-hover', 'active:bg-pressed');

    fireEvent.click(btn);
    expect(handle).not.toHaveBeenCalled();
  });

  it('merges custom className only (style prop is not passed through)', () => {
    render(
      <ButtonIcon
        iconName={IconName.Close}
        ariaLabel="Custom"
        className="my-btn"
        style={{ margin: 4 }}
      />,
    );
    const btn = screen.getByRole('button');
    expect(btn).toHaveClass('my-btn');
    expect(btn).not.toHaveStyle({ margin: '4px' });
  });

  it('forwards onClick when enabled', () => {
    const onClick = jest.fn();
    render(
      <ButtonIcon
        iconName={IconName.Close}
        ariaLabel="ClickMe"
        onClick={onClick}
      />,
    );
    fireEvent.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
