import { render, screen } from '@testing-library/react';
import React, { createRef } from 'react';

import { Skeleton } from './Skeleton';

describe('Skeleton', () => {
  it('renders the skeleton container when no children are provided', () => {
    render(<Skeleton data-testid="skeleton" />);
    expect(screen.getByTestId('skeleton')).toBeInTheDocument();
  });

  it('renders children directly when hideChildren is false (default)', () => {
    render(
      <Skeleton data-testid="skeleton">
        <div data-testid="content">Real content</div>
      </Skeleton>,
    );
    expect(screen.getByTestId('content')).toHaveTextContent('Real content');
    // The skeleton container itself is not in the DOM in pass-through mode.
    expect(screen.queryByTestId('skeleton')).not.toBeInTheDocument();
  });

  it('renders the skeleton overlay + invisible children when hideChildren is true', () => {
    render(
      <Skeleton data-testid="skeleton" hideChildren>
        <div data-testid="content">Real content</div>
      </Skeleton>,
    );
    const container = screen.getByTestId('skeleton');
    expect(container).toBeInTheDocument();
    // Children are still rendered (for layout) but inside an invisible wrapper.
    const content = screen.getByTestId('content');
    expect(content).toBeInTheDocument();
    expect(content.parentElement).toHaveClass('invisible');
  });

  it('applies the pulse animation by default', () => {
    render(<Skeleton data-testid="skeleton" />);
    const overlay = screen.getByTestId('skeleton').firstElementChild;
    expect(overlay).toHaveClass('motion-safe:animate-skeleton-pulse');
  });

  it('omits the pulse animation when autoPlay is false', () => {
    render(<Skeleton data-testid="skeleton" autoPlay={false} />);
    const overlay = screen.getByTestId('skeleton').firstElementChild;
    expect(overlay).not.toHaveClass('motion-safe:animate-skeleton-pulse');
  });

  it('applies width and height as inline styles (numbers interpreted as px)', () => {
    render(<Skeleton data-testid="skeleton" width={120} height="2rem" />);
    const container = screen.getByTestId('skeleton');
    expect(container).toHaveStyle({ width: '120px', height: '2rem' });
  });

  it('preserves consumer-provided inline style alongside width/height', () => {
    render(
      <Skeleton
        data-testid="skeleton"
        width={120}
        style={{ marginTop: '10px' }}
      />,
    );
    const container = screen.getByTestId('skeleton');
    expect(container).toHaveStyle({ width: '120px', marginTop: '10px' });
  });

  it('applies the icon-alternative background to the animated overlay', () => {
    render(<Skeleton data-testid="skeleton" />);
    const overlay = screen.getByTestId('skeleton').firstElementChild;
    expect(overlay).toHaveClass('bg-icon-alternative');
  });

  it('marks both the container and the inner overlay as aria-hidden', () => {
    render(<Skeleton data-testid="skeleton" />);
    const container = screen.getByTestId('skeleton');
    expect(container).toHaveAttribute('aria-hidden', 'true');
    expect(container.firstElementChild).toHaveAttribute('aria-hidden', 'true');
  });

  it('merges custom className alongside the default container utilities', () => {
    render(<Skeleton data-testid="skeleton" className="opacity-50" />);
    const container = screen.getByTestId('skeleton');
    expect(container).toHaveClass(
      'opacity-50',
      'relative',
      'overflow-hidden',
      'rounded',
    );
  });

  it('forwards arbitrary HTML attributes to the container', () => {
    render(
      <Skeleton data-testid="skeleton" id="skeleton-id" role="presentation" />,
    );
    const container = screen.getByTestId('skeleton');
    expect(container).toHaveAttribute('id', 'skeleton-id');
    expect(container).toHaveAttribute('role', 'presentation');
  });

  it('forwards ref to the underlying div', () => {
    const ref = createRef<HTMLDivElement>();
    render(<Skeleton ref={ref} data-testid="skeleton" />);
    expect(ref.current).toBe(screen.getByTestId('skeleton'));
    expect(ref.current?.tagName).toBe('DIV');
  });
});
