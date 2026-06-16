import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import { FontWeight, TextVariant } from '../Text';

import { TextButton } from './TextButton';

describe('TextButton', () => {
  it('renders with text button styles by default', () => {
    render(<TextButton>Text Button</TextButton>);

    const button = screen.getByRole('button');
    expect(button).toHaveClass(
      'text-primary-default',
      'bg-transparent',
      'p-0',
      'border-0',
    );
  });

  it('fires onClick when clicked', async () => {
    const onClick = jest.fn();
    render(<TextButton onClick={onClick}>Tap</TextButton>);

    await userEvent.click(screen.getByRole('button', { name: 'Tap' }));

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('applies the specified text variant', () => {
    render(<TextButton variant={TextVariant.BodyLg}>BodyLg</TextButton>);

    const button = screen.getByRole('button', { name: 'BodyLg' });
    expect(button).toHaveClass(
      'text-s-body-lg',
      'leading-s-body-lg',
      'tracking-s-body-lg',
    );
  });

  it('uses medium font weight by default', () => {
    render(<TextButton>Medium Button</TextButton>);

    expect(screen.getByRole('button')).toHaveClass('font-medium');
  });

  it('allows overriding font weight', () => {
    render(<TextButton fontWeight={FontWeight.Bold}>Bold Button</TextButton>);

    expect(screen.getByRole('button')).toHaveClass('font-bold');
  });

  it('renders as child component when asChild is true', () => {
    render(
      <TextButton asChild>
        <a href="https://metamask.io">MetaMask</a>
      </TextButton>,
    );

    const link = screen.getByRole('link', { name: 'MetaMask' });
    expect(link).toHaveAttribute('href', 'https://metamask.io');
    expect(link).toHaveClass('text-primary-default', 'font-medium');
  });
});
