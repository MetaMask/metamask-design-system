import { fireEvent, render, screen } from '@testing-library/react';
import React, { createRef } from 'react';

import { ModalFooter } from './ModalFooter';
import { ButtonsAlignment } from './ModalFooter.types';

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

  it('renders no button row when neither primary nor secondary props are provided', () => {
    render(<ModalFooter />);
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  it('renders the primary button with the configured label and fires onClick', () => {
    const onClick = jest.fn();
    render(
      <ModalFooter primaryButtonProps={{ children: 'Confirm', onClick }} />,
    );
    const button = screen.getByRole('button', { name: 'Confirm' });
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('renders the secondary button with the configured label and fires onClick', () => {
    const onClick = jest.fn();
    render(
      <ModalFooter secondaryButtonProps={{ children: 'Cancel', onClick }} />,
    );
    const button = screen.getByRole('button', { name: 'Cancel' });
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('renders secondary before primary in DOM order', () => {
    render(
      <ModalFooter
        primaryButtonProps={{
          children: 'Approve',
          'data-testid': 'primary',
        }}
        secondaryButtonProps={{
          children: 'Reject',
          'data-testid': 'secondary',
        }}
      />,
    );
    const buttons = screen.getAllByRole('button');
    expect(buttons[0]).toBe(screen.getByTestId('secondary'));
    expect(buttons[1]).toBe(screen.getByTestId('primary'));
  });

  it('forwards arbitrary props (data-*) on each button', () => {
    render(
      <ModalFooter
        primaryButtonProps={{
          children: 'Confirm',
          'data-testid': 'confirm-button',
        }}
        secondaryButtonProps={{
          children: 'Cancel',
          'data-testid': 'cancel-button',
        }}
      />,
    );
    expect(screen.getByTestId('confirm-button')).toBeInTheDocument();
    expect(screen.getByTestId('cancel-button')).toBeInTheDocument();
  });

  it('uses Horizontal alignment by default — buttons get flex-1, container is flex-row', () => {
    render(
      <ModalFooter
        data-testid="modal-footer"
        primaryButtonProps={{ children: 'Confirm', 'data-testid': 'primary' }}
        secondaryButtonProps={{
          children: 'Cancel',
          'data-testid': 'secondary',
        }}
      />,
    );
    expect(screen.getByTestId('primary')).toHaveClass('flex-1');
    expect(screen.getByTestId('secondary')).toHaveClass('flex-1');
    // The button row container is the parent of the buttons.
    const buttonRow = screen.getByTestId('primary').parentElement;
    expect(buttonRow).toHaveClass('flex-row');
  });

  it('switches to Vertical alignment — buttons get w-full, container is flex-col', () => {
    render(
      <ModalFooter
        buttonsAlignment={ButtonsAlignment.Vertical}
        primaryButtonProps={{ children: 'Confirm', 'data-testid': 'primary' }}
        secondaryButtonProps={{
          children: 'Cancel',
          'data-testid': 'secondary',
        }}
      />,
    );
    expect(screen.getByTestId('primary')).toHaveClass('w-full');
    expect(screen.getByTestId('secondary')).toHaveClass('w-full');
    const buttonRow = screen.getByTestId('primary').parentElement;
    expect(buttonRow).toHaveClass('flex-col');
  });

  it('merges custom button className alongside the internal alignment utility', () => {
    render(
      <ModalFooter
        primaryButtonProps={{
          children: 'Confirm',
          'data-testid': 'primary',
          className: 'opacity-50',
        }}
      />,
    );
    const primary = screen.getByTestId('primary');
    expect(primary).toHaveClass('flex-1', 'opacity-50');
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
