import { render, screen } from '@testing-library/react';
import React, { createRef } from 'react';

import { ModalBody } from './ModalBody';

describe('ModalBody', () => {
  it('renders without crashing', () => {
    render(<ModalBody data-testid="modal-body" />);
    expect(screen.getByTestId('modal-body')).toBeInTheDocument();
  });

  it('renders children inside the body', () => {
    render(
      <ModalBody data-testid="modal-body">
        <span data-testid="child">Hello</span>
      </ModalBody>,
    );
    expect(screen.getByTestId('child')).toHaveTextContent('Hello');
  });

  it('applies the default scroll, overflow, and position classes', () => {
    render(<ModalBody data-testid="modal-body" />);
    expect(screen.getByTestId('modal-body')).toHaveClass(
      'relative',
      'max-h-full',
      'overflow-y-auto',
    );
  });

  it('applies the default horizontal padding via Box props', () => {
    render(<ModalBody data-testid="modal-body" />);
    expect(screen.getByTestId('modal-body')).toHaveClass('px-4');
  });

  it('is keyboard-focusable by default so users can scroll the region', () => {
    render(<ModalBody data-testid="modal-body" />);
    expect(screen.getByTestId('modal-body')).toHaveAttribute('tabindex', '0');
  });

  it('allows consumers to override tabIndex', () => {
    render(<ModalBody data-testid="modal-body" tabIndex={-1} />);
    expect(screen.getByTestId('modal-body')).toHaveAttribute('tabindex', '-1');
  });

  it('merges custom className alongside default classes', () => {
    render(<ModalBody data-testid="modal-body" className="opacity-50" />);
    const body = screen.getByTestId('modal-body');
    expect(body).toHaveClass('opacity-50');
    expect(body).toHaveClass('relative', 'max-h-full', 'overflow-y-auto');
  });

  it('forwards ref to the underlying element', () => {
    const ref = createRef<HTMLDivElement>();
    render(<ModalBody ref={ref} data-testid="modal-body" />);
    expect(ref.current).toBe(screen.getByTestId('modal-body'));
  });

  it('forwards arbitrary HTML attributes to the underlying element', () => {
    render(<ModalBody data-testid="modal-body" id="body" role="region" />);
    const body = screen.getByTestId('modal-body');
    expect(body).toHaveAttribute('id', 'body');
    expect(body).toHaveAttribute('role', 'region');
  });
});
