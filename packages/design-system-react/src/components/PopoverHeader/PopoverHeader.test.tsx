import { fireEvent, render, screen } from '@testing-library/react';
import React, { createRef } from 'react';

import { PopoverHeader } from './PopoverHeader';

describe('PopoverHeader', () => {
  it('renders without crashing', () => {
    render(<PopoverHeader data-testid="popover-header" />);
    expect(screen.getByTestId('popover-header')).toBeInTheDocument();
  });

  it('renders as a <header> element with no outer padding utilities', () => {
    render(<PopoverHeader data-testid="popover-header" />);
    const header = screen.getByTestId('popover-header');
    expect(header.tagName).toBe('HEADER');
    // PopoverHeader does not bake in padding — popover surfaces own spacing.
    expect(header).not.toHaveClass('px-4');
    expect(header).not.toHaveClass('pb-4');
  });

  it('uses the three-column grid layout on the root', () => {
    render(<PopoverHeader data-testid="popover-header" />);
    expect(screen.getByTestId('popover-header')).toHaveClass(
      'grid',
      'grid-cols-[1fr_auto_1fr]',
      'items-center',
    );
  });

  it('wraps a string `children` in a centered HeadingSm Text that inherits color', () => {
    render(<PopoverHeader>Popover title</PopoverHeader>);
    const title = screen.getByText('Popover title');
    expect(title).toHaveClass('text-center', 'text-inherit');
  });

  it('renders a non-string `children` as-is', () => {
    render(
      <PopoverHeader>
        <span data-testid="custom-title">Custom title</span>
      </PopoverHeader>,
    );
    expect(screen.getByTestId('custom-title')).toHaveTextContent(
      'Custom title',
    );
  });

  it('renders the back button when onBack + backButtonProps are provided and fires onClick', () => {
    const onBack = jest.fn();
    render(
      <PopoverHeader
        onBack={onBack}
        backButtonProps={{
          ariaLabel: 'Back',
          'data-testid': 'back-button',
        }}
      >
        Title
      </PopoverHeader>,
    );
    const back = screen.getByTestId('back-button');
    expect(back).toHaveAttribute('aria-label', 'Back');
    // Auto-rendered icon button inherits surface color by default.
    expect(back).toHaveClass('text-inherit');
    fireEvent.click(back);
    expect(onBack).toHaveBeenCalledTimes(1);
  });

  it('renders the close button when onClose + closeButtonProps are provided and fires onClick', () => {
    const onClose = jest.fn();
    render(
      <PopoverHeader
        onClose={onClose}
        closeButtonProps={{
          ariaLabel: 'Close',
          'data-testid': 'close-button',
        }}
      >
        Title
      </PopoverHeader>,
    );
    const close = screen.getByTestId('close-button');
    expect(close).toHaveAttribute('aria-label', 'Close');
    expect(close).toHaveClass('text-inherit');
    fireEvent.click(close);
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('lets `closeButtonProps.className` override the inherit-color default', () => {
    render(
      <PopoverHeader
        onClose={() => undefined}
        closeButtonProps={{
          ariaLabel: 'Close',
          'data-testid': 'close-button',
          className: 'text-error-default',
        }}
      >
        Title
      </PopoverHeader>,
    );
    const close = screen.getByTestId('close-button');
    expect(close).toHaveClass('text-error-default');
    expect(close).not.toHaveClass('text-inherit');
  });

  it('does not render the back/close buttons when their callbacks are not provided', () => {
    render(<PopoverHeader>Title</PopoverHeader>);
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  it('startAccessory overrides the auto-rendered back button', () => {
    const onBack = jest.fn();
    render(
      <PopoverHeader
        startAccessory={<span data-testid="custom-start">start</span>}
        onBack={onBack}
        backButtonProps={{
          ariaLabel: 'Back',
          'data-testid': 'back-button',
        }}
      >
        Title
      </PopoverHeader>,
    );
    expect(screen.getByTestId('custom-start')).toBeInTheDocument();
    expect(screen.queryByTestId('back-button')).not.toBeInTheDocument();
  });

  it('endAccessory overrides the auto-rendered close button', () => {
    const onClose = jest.fn();
    render(
      <PopoverHeader
        endAccessory={<span data-testid="custom-end">end</span>}
        onClose={onClose}
        closeButtonProps={{
          ariaLabel: 'Close',
          'data-testid': 'close-button',
        }}
      >
        Title
      </PopoverHeader>,
    );
    expect(screen.getByTestId('custom-end')).toBeInTheDocument();
    expect(screen.queryByTestId('close-button')).not.toBeInTheDocument();
  });

  it('places start/title/end into columns 1/2/3 of the grid', () => {
    render(
      <PopoverHeader
        startAccessory={<span data-testid="start">s</span>}
        endAccessory={<span data-testid="end">e</span>}
      >
        Title
      </PopoverHeader>,
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
    render(
      <PopoverHeader data-testid="popover-header" className="opacity-50" />,
    );
    const header = screen.getByTestId('popover-header');
    expect(header).toHaveClass(
      'opacity-50',
      'grid',
      'grid-cols-[1fr_auto_1fr]',
    );
  });

  it('forwards arbitrary HTML attributes to the root', () => {
    render(
      <PopoverHeader
        data-testid="popover-header"
        id="header-id"
        role="banner"
        aria-label="Popover header"
      />,
    );
    const header = screen.getByTestId('popover-header');
    expect(header).toHaveAttribute('id', 'header-id');
    expect(header).toHaveAttribute('role', 'banner');
    expect(header).toHaveAttribute('aria-label', 'Popover header');
  });

  it('forwards ref to the underlying <header> element', () => {
    const ref = createRef<HTMLElement>();
    render(<PopoverHeader ref={ref} data-testid="popover-header" />);
    expect(ref.current).toBe(screen.getByTestId('popover-header'));
    expect(ref.current?.tagName).toBe('HEADER');
  });
});
