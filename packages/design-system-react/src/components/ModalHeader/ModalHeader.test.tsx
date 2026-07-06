import { fireEvent, render, screen } from '@testing-library/react';
import React, { createRef } from 'react';

import { ModalHeader } from './ModalHeader';

describe('ModalHeader', () => {
  it('renders without crashing', () => {
    render(<ModalHeader data-testid="modal-header" />);
    expect(screen.getByTestId('modal-header')).toBeInTheDocument();
  });

  it('renders as a <header> element with default padding utilities', () => {
    render(<ModalHeader data-testid="modal-header" />);
    const header = screen.getByTestId('modal-header');
    expect(header.tagName).toBe('HEADER');
    expect(header).toHaveClass('px-4', 'pb-4');
  });

  it('uses the three-column grid layout on the root', () => {
    render(<ModalHeader data-testid="modal-header" />);
    expect(screen.getByTestId('modal-header')).toHaveClass(
      'grid',
      'grid-cols-[1fr_auto_1fr]',
      'items-center',
    );
  });

  it('wraps a string `children` in a centered HeadingSm Text', () => {
    render(<ModalHeader>Modal title</ModalHeader>);
    const title = screen.getByText('Modal title');
    expect(title).toHaveClass('text-center');
  });

  it('renders a non-string `children` as-is', () => {
    render(
      <ModalHeader>
        <span data-testid="custom-title">Custom title</span>
      </ModalHeader>,
    );
    expect(screen.getByTestId('custom-title')).toHaveTextContent(
      'Custom title',
    );
  });

  it('renders the back button when onBack + backButtonProps are provided and fires onClick', () => {
    const onBack = jest.fn();
    render(
      <ModalHeader
        onBack={onBack}
        backButtonProps={{
          ariaLabel: 'Back',
          'data-testid': 'back-button',
        }}
      >
        Title
      </ModalHeader>,
    );
    const back = screen.getByTestId('back-button');
    expect(back).toHaveAttribute('aria-label', 'Back');
    fireEvent.click(back);
    expect(onBack).toHaveBeenCalledTimes(1);
  });

  it('renders the close button when onClose + closeButtonProps are provided and fires onClick', () => {
    const onClose = jest.fn();
    render(
      <ModalHeader
        onClose={onClose}
        closeButtonProps={{
          ariaLabel: 'Close',
          'data-testid': 'close-button',
        }}
      >
        Title
      </ModalHeader>,
    );
    const close = screen.getByTestId('close-button');
    expect(close).toHaveAttribute('aria-label', 'Close');
    fireEvent.click(close);
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('does not render the back/close buttons when their callbacks are not provided', () => {
    render(<ModalHeader>Title</ModalHeader>);
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  it('startAccessory overrides the auto-rendered back button', () => {
    const onBack = jest.fn();
    render(
      <ModalHeader
        startAccessory={<span data-testid="custom-start">start</span>}
        onBack={onBack}
        backButtonProps={{
          ariaLabel: 'Back',
          'data-testid': 'back-button',
        }}
      >
        Title
      </ModalHeader>,
    );
    expect(screen.getByTestId('custom-start')).toBeInTheDocument();
    expect(screen.queryByTestId('back-button')).not.toBeInTheDocument();
  });

  it('endAccessory overrides the auto-rendered close button', () => {
    const onClose = jest.fn();
    render(
      <ModalHeader
        endAccessory={<span data-testid="custom-end">end</span>}
        onClose={onClose}
        closeButtonProps={{
          ariaLabel: 'Close',
          'data-testid': 'close-button',
        }}
      >
        Title
      </ModalHeader>,
    );
    expect(screen.getByTestId('custom-end')).toBeInTheDocument();
    expect(screen.queryByTestId('close-button')).not.toBeInTheDocument();
  });

  it('places start/title/end into columns 1/2/3 of the grid', () => {
    render(
      <ModalHeader
        startAccessory={<span data-testid="start">s</span>}
        endAccessory={<span data-testid="end">e</span>}
      >
        Title
      </ModalHeader>,
    );
    expect(screen.getByTestId('start').parentElement).toHaveClass(
      'col-start-1',
      'justify-self-start',
    );
    expect(screen.getByText('Title').parentElement).toHaveClass(
      'col-start-2',
      'col-end-3',
      'w-full',
    );
    expect(screen.getByTestId('end').parentElement).toHaveClass(
      'col-start-3',
      'justify-self-end',
    );
  });

  it('merges custom className alongside default header classes', () => {
    render(<ModalHeader data-testid="modal-header" className="opacity-50" />);
    const header = screen.getByTestId('modal-header');
    expect(header).toHaveClass('opacity-50', 'px-4', 'pb-4');
  });

  it('forwards arbitrary HTML attributes to the root', () => {
    render(
      <ModalHeader
        data-testid="modal-header"
        id="header-id"
        role="banner"
        aria-label="Modal header"
      />,
    );
    const header = screen.getByTestId('modal-header');
    expect(header).toHaveAttribute('id', 'header-id');
    expect(header).toHaveAttribute('role', 'banner');
    expect(header).toHaveAttribute('aria-label', 'Modal header');
  });

  it('forwards ref to the underlying <header> element', () => {
    const ref = createRef<HTMLElement>();
    render(<ModalHeader ref={ref} data-testid="modal-header" />);
    expect(ref.current).toBe(screen.getByTestId('modal-header'));
    expect(ref.current?.tagName).toBe('HEADER');
  });
});
