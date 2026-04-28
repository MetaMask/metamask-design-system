import { fireEvent, render, screen } from '@testing-library/react';
import React, { createRef } from 'react';

import { ModalOverlay } from './ModalOverlay';

describe('ModalOverlay', () => {
  it('renders without crashing', () => {
    render(<ModalOverlay data-testid="modal-overlay" />);
    expect(screen.getByTestId('modal-overlay')).toBeInTheDocument();
  });

  it('applies overlay positioning, z-index, and motion-safe fade-in classes', () => {
    render(<ModalOverlay data-testid="modal-overlay" />);
    expect(screen.getByTestId('modal-overlay')).toHaveClass(
      'fixed',
      'inset-0',
      'z-[1050]',
      'motion-safe:animate-fade-in',
    );
  });

  it('applies the overlay-default background color', () => {
    render(<ModalOverlay data-testid="modal-overlay" />);
    expect(screen.getByTestId('modal-overlay')).toHaveClass(
      'bg-overlay-default',
    );
  });

  it('marks the overlay as decorative for assistive tech', () => {
    render(<ModalOverlay data-testid="modal-overlay" />);
    expect(screen.getByTestId('modal-overlay')).toHaveAttribute(
      'aria-hidden',
      'true',
    );
  });

  it('merges custom className alongside default classes', () => {
    render(<ModalOverlay data-testid="modal-overlay" className="opacity-50" />);
    const overlay = screen.getByTestId('modal-overlay');
    expect(overlay).toHaveClass('opacity-50');
    expect(overlay).toHaveClass('fixed', 'inset-0');
  });

  it('fires the onClick handler when clicked', () => {
    const handleClick = jest.fn();
    render(<ModalOverlay data-testid="modal-overlay" onClick={handleClick} />);
    fireEvent.click(screen.getByTestId('modal-overlay'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('forwards ref to the underlying element', () => {
    const ref = createRef<HTMLDivElement>();
    render(<ModalOverlay ref={ref} data-testid="modal-overlay" />);
    expect(ref.current).toBe(screen.getByTestId('modal-overlay'));
  });

  it('forwards arbitrary HTML attributes to the underlying element', () => {
    render(
      <ModalOverlay
        data-testid="modal-overlay"
        id="overlay"
        role="presentation"
      />,
    );
    const overlay = screen.getByTestId('modal-overlay');
    expect(overlay).toHaveAttribute('id', 'overlay');
    expect(overlay).toHaveAttribute('role', 'presentation');
  });
});
