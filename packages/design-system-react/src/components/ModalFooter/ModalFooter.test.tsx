import { fireEvent, render, screen } from '@testing-library/react';
import React, { createRef } from 'react';

import { ModalFooter } from './ModalFooter';

describe('ModalFooter', () => {
  it('renders without crashing', () => {
    render(<ModalFooter data-testid="modal-footer" />);
    expect(screen.getByTestId('modal-footer')).toBeInTheDocument();
  });

  it('renders as a footer element with default padding utilities', () => {
    render(<ModalFooter data-testid="modal-footer" />);
    const footer = screen.getByTestId('modal-footer');
    expect(footer.tagName).toBe('FOOTER');
    expect(footer).toHaveClass('px-4', 'pt-4');
  });

  it('renders custom children above the button row', () => {
    render(
      <ModalFooter>
        <span data-testid="child">extra content</span>
      </ModalFooter>,
    );
    expect(screen.getByTestId('child')).toBeInTheDocument();
  });

  it('does not render any button when neither onSubmit nor onCancel is provided', () => {
    render(<ModalFooter />);
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  it('renders the submit button with the default label and fires onSubmit when clicked', () => {
    const onSubmit = jest.fn();
    render(<ModalFooter onSubmit={onSubmit} />);
    const button = screen.getByRole('button', { name: 'Confirm' });
    fireEvent.click(button);
    expect(onSubmit).toHaveBeenCalledTimes(1);
  });

  it('renders the cancel button with the default label and fires onCancel when clicked', () => {
    const onCancel = jest.fn();
    render(<ModalFooter onCancel={onCancel} />);
    const button = screen.getByRole('button', { name: 'Cancel' });
    fireEvent.click(button);
    expect(onCancel).toHaveBeenCalledTimes(1);
  });

  it('uses submitButtonProps.children / cancelButtonProps.children as the button labels', () => {
    render(
      <ModalFooter
        onSubmit={jest.fn()}
        submitButtonProps={{ children: 'Approve' }}
        onCancel={jest.fn()}
        cancelButtonProps={{ children: 'Reject' }}
      />,
    );
    expect(screen.getByRole('button', { name: 'Approve' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Reject' })).toBeInTheDocument();
  });

  it('forwards additional submitButtonProps and cancelButtonProps to the buttons', () => {
    render(
      <ModalFooter
        onSubmit={jest.fn()}
        submitButtonProps={{ 'data-testid': 'confirm-button' }}
        onCancel={jest.fn()}
        cancelButtonProps={{ 'data-testid': 'cancel-button' }}
      />,
    );
    expect(screen.getByTestId('confirm-button')).toBeInTheDocument();
    expect(screen.getByTestId('cancel-button')).toBeInTheDocument();
  });

  it('merges custom button className alongside the internal flex utility', () => {
    render(
      <ModalFooter
        onSubmit={jest.fn()}
        submitButtonProps={{ className: 'opacity-50' }}
      />,
    );
    const submit = screen.getByRole('button', { name: 'Confirm' });
    expect(submit).toHaveClass('flex-[1_0_auto]', 'opacity-50');
  });

  it('forwards arbitrary props to the inner container Box', () => {
    render(<ModalFooter containerProps={{ 'data-testid': 'container' }} />);
    expect(screen.getByTestId('container')).toBeInTheDocument();
  });

  it('lets containerProps.className override the default max-width', () => {
    render(
      <ModalFooter
        containerProps={{ 'data-testid': 'container', className: 'max-w-full' }}
      />,
    );
    const container = screen.getByTestId('container');
    expect(container).toHaveClass('max-w-full');
    expect(container).not.toHaveClass('max-w-[360px]');
  });

  it('merges custom className alongside default footer classes', () => {
    render(<ModalFooter data-testid="modal-footer" className="opacity-50" />);
    const footer = screen.getByTestId('modal-footer');
    expect(footer).toHaveClass('opacity-50', 'px-4', 'pt-4');
  });

  it('forwards ref to the underlying footer element', () => {
    const ref = createRef<HTMLElement>();
    render(<ModalFooter ref={ref} data-testid="modal-footer" />);
    expect(ref.current).toBe(screen.getByTestId('modal-footer'));
  });
});
