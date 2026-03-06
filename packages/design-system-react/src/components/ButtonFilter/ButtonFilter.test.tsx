import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import { ButtonFilter } from './ButtonFilter';

describe('ButtonFilter', () => {
  const defaultProps = {
    children: 'All',
    onClick: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders with children prop', () => {
    render(<ButtonFilter {...defaultProps} />);

    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText('All')).toBeInTheDocument();
  });

  it('renders correctly in active state', () => {
    render(<ButtonFilter {...defaultProps} isActive />);

    expect(screen.getByRole('button')).toHaveClass(
      'bg-icon-default',
      'text-icon-inverse',
    );
  });

  it('renders correctly in inactive state', () => {
    render(<ButtonFilter {...defaultProps} isActive={false} />);

    expect(screen.getByRole('button')).toHaveClass(
      'bg-background-muted',
      'text-default',
    );
  });

  it('calls onClick when clicked', async () => {
    const user = userEvent.setup();
    const onClick = jest.fn();

    render(<ButtonFilter {...defaultProps} onClick={onClick} />);

    await user.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('verifies disabled state prevents interaction', async () => {
    const user = userEvent.setup();
    const onClick = jest.fn();

    render(<ButtonFilter {...defaultProps} onClick={onClick} isDisabled />);

    const button = screen.getByRole('button');
    expect(button).toBeDisabled();

    await user.click(button);
    expect(onClick).not.toHaveBeenCalled();
  });
});
