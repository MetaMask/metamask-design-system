import { render, screen } from '@testing-library/react';
import React from 'react';

import { TextColor } from '../text';
import { BadgeCount } from './BadgeCount';
import { TWCLASSMAP_BADGECOUNT_SIZE_CONTAINER } from './BadgeCount.constants';
import { BadgeCountSize } from './BadgeCount.types';

describe('BadgeCount', () => {
  it('renders the correct count', () => {
    render(<BadgeCount count={7} data-testid="badge" />);
    expect(screen.getByText('7')).toBeInTheDocument();
  });

  it('displays max+ when count exceeds max', () => {
    render(<BadgeCount count={150} max={99} />);
    expect(screen.getByText('99+')).toBeInTheDocument();
  });

  it('uses default max of 99 if max is not provided', () => {
    render(<BadgeCount count={100} />);
    expect(screen.getByText('99+')).toBeInTheDocument();
  });

  it('applies size classes correctly', () => {
    const { rerender } = render(
      <BadgeCount size={BadgeCountSize.Md} count={1} data-testid="badge" />,
    );

    Object.entries(TWCLASSMAP_BADGECOUNT_SIZE_CONTAINER).forEach(
      ([size, expectedClasses]) => {
        rerender(
          <BadgeCount
            size={size as BadgeCountSize}
            count={1}
            data-testid="badge"
          />,
        );
        const badge = screen.getByTestId('badge');
        expectedClasses.split(' ').forEach((className) => {
          expect(badge).toHaveClass(className);
        });
      },
    );
  });

  it('applies textProps correctly', () => {
    render(
      <BadgeCount
        count={5}
        textProps={{
          color: TextColor.PrimaryDefault,
          'data-testid': 'badge-text',
        }}
      />,
    );
    const text = screen.getByTestId('badge-text');
    expect(text).toHaveClass('text-primary-default');
  });
  it('merges custom className with default classes', () => {
    render(
      <BadgeCount count={9} className="custom-class" data-testid="badge" />,
    );
    const badge = screen.getByTestId('badge');
    expect(badge).toHaveClass('custom-class');
    expect(badge).toHaveClass('bg-error-default');
  });

  it('applies inline style if provided', () => {
    render(
      <BadgeCount
        count={4}
        style={{ backgroundColor: 'green' }}
        data-testid="badge"
      />,
    );
    const badge = screen.getByTestId('badge');
    expect(badge).toHaveStyle({ backgroundColor: 'green' });
  });
});
