import { render, screen } from '@testing-library/react';
import React, { createRef } from 'react';

import { HeaderBase } from './HeaderBase';

describe('HeaderBase', () => {
  it('renders without crashing', () => {
    render(<HeaderBase data-testid="header-base" />);
    expect(screen.getByTestId('header-base')).toBeInTheDocument();
  });

  it('applies the three-column grid container utilities by default', () => {
    render(<HeaderBase data-testid="header-base" />);
    expect(screen.getByTestId('header-base')).toHaveClass(
      'grid',
      'grid-cols-[1fr_auto_1fr]',
      'items-center',
    );
  });

  it('renders children inside the title slot pinned to column 2', () => {
    render(
      <HeaderBase childrenWrapperProps={{ 'data-testid': 'title' }}>
        <span>Title</span>
      </HeaderBase>,
    );
    const title = screen.getByTestId('title');
    expect(title).toHaveTextContent('Title');
    expect(title).toHaveClass('col-start-2', 'col-end-3');
  });

  it('renders startAccessory pinned to column 1 with start justification', () => {
    render(
      <HeaderBase
        startAccessory={<span data-testid="start">start</span>}
        startAccessoryWrapperProps={{ 'data-testid': 'start-wrapper' }}
      />,
    );
    expect(screen.getByTestId('start')).toBeInTheDocument();
    expect(screen.getByTestId('start-wrapper')).toHaveClass(
      'col-start-1',
      'justify-self-start',
    );
  });

  it('renders endAccessory pinned to column 3 with end justification', () => {
    render(
      <HeaderBase
        endAccessory={<span data-testid="end">end</span>}
        endAccessoryWrapperProps={{ 'data-testid': 'end-wrapper' }}
      />,
    );
    expect(screen.getByTestId('end')).toBeInTheDocument();
    expect(screen.getByTestId('end-wrapper')).toHaveClass(
      'col-start-3',
      'justify-self-end',
    );
  });

  it('renders all three slots together with the title still in column 2', () => {
    render(
      <HeaderBase
        startAccessory={<span data-testid="start">start</span>}
        endAccessory={<span data-testid="end">end</span>}
        childrenWrapperProps={{ 'data-testid': 'title' }}
      >
        Title
      </HeaderBase>,
    );
    expect(screen.getByTestId('start')).toBeInTheDocument();
    expect(screen.getByTestId('end')).toBeInTheDocument();
    expect(screen.getByTestId('title')).toHaveClass('col-start-2', 'col-end-3');
  });

  it('does not render the start/end/title slot when its prop is omitted', () => {
    render(
      <HeaderBase
        startAccessoryWrapperProps={{ 'data-testid': 'start-wrapper' }}
        endAccessoryWrapperProps={{ 'data-testid': 'end-wrapper' }}
        childrenWrapperProps={{ 'data-testid': 'title' }}
        data-testid="header-base"
      />,
    );
    expect(screen.queryByTestId('start-wrapper')).not.toBeInTheDocument();
    expect(screen.queryByTestId('end-wrapper')).not.toBeInTheDocument();
    expect(screen.queryByTestId('title')).not.toBeInTheDocument();
    // The container itself still renders.
    expect(screen.getByTestId('header-base')).toBeInTheDocument();
  });

  it('merges custom className alongside default container utilities', () => {
    render(<HeaderBase data-testid="header-base" className="opacity-50" />);
    const container = screen.getByTestId('header-base');
    expect(container).toHaveClass('opacity-50');
    expect(container).toHaveClass('grid', 'grid-cols-[1fr_auto_1fr]');
  });

  it('merges custom slot wrapper className alongside slot defaults', () => {
    render(
      <HeaderBase
        startAccessory={<span>start</span>}
        startAccessoryWrapperProps={{
          'data-testid': 'start-wrapper',
          className: 'opacity-75',
        }}
      />,
    );
    const wrapper = screen.getByTestId('start-wrapper');
    expect(wrapper).toHaveClass('opacity-75');
    expect(wrapper).toHaveClass('col-start-1', 'justify-self-start');
  });

  it('forwards arbitrary HTML attributes to the root', () => {
    render(
      <HeaderBase
        data-testid="header-base"
        id="header-id"
        role="banner"
        aria-label="Page header"
      />,
    );
    const container = screen.getByTestId('header-base');
    expect(container).toHaveAttribute('id', 'header-id');
    expect(container).toHaveAttribute('role', 'banner');
    expect(container).toHaveAttribute('aria-label', 'Page header');
  });

  it('forwards ref to the underlying div', () => {
    const ref = createRef<HTMLDivElement>();
    render(<HeaderBase ref={ref} data-testid="header-base" />);
    expect(ref.current).toBe(screen.getByTestId('header-base'));
    expect(ref.current?.tagName).toBe('DIV');
  });
});
