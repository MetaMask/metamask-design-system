import { render, screen } from '@testing-library/react';
import React from 'react';

import { BadgeStatusSize, BadgeStatusStatus } from '../../types';
import { BadgeStatus } from './BadgeStatus';
import {
  CLASSMAP_BADGESTATUS_SIZE,
  CLASSMAP_BADGESTATUS_STATUS_CIRCLE,
} from './BadgeStatus.constants';

describe('BadgeStatus', () => {
  it('renders with default props', () => {
    render(
      <BadgeStatus
        status={BadgeStatusStatus.Active}
        data-testid="badge-status"
      />,
    );
    const badge = screen.getByTestId('badge-status');
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveClass('border-2', 'border-background-default');
  });

  describe('Statuses', () => {
    Object.values(BadgeStatusStatus).forEach((status) => {
      it(`applies ${status} status styles correctly`, () => {
        render(<BadgeStatus status={status} data-testid="badge-status" />);
        const circle = screen
          .getByTestId('badge-status')
          .querySelector('div:last-child');
        const expectedClasses =
          CLASSMAP_BADGESTATUS_STATUS_CIRCLE[status].split(' ');
        expectedClasses.forEach((cls) => {
          expect(circle).toHaveClass(cls);
        });
      });
    });
  });

  describe('Sizes', () => {
    Object.values(BadgeStatusSize).forEach((size) => {
      it(`applies ${size} size styles correctly`, () => {
        render(
          <BadgeStatus
            size={size}
            status={BadgeStatusStatus.New}
            data-testid="badge-status"
          />,
        );
        const circle = screen
          .getByTestId('badge-status')
          .querySelector('div:last-child');
        const expectedClasses = CLASSMAP_BADGESTATUS_SIZE[size].split(' ');
        expectedClasses.forEach((cls) => {
          expect(circle).toHaveClass(cls);
        });
      });
    });
  });

  it('renders without border when hasBorder is false', () => {
    render(
      <BadgeStatus
        status={BadgeStatusStatus.Inactive}
        hasBorder={false}
        data-testid="badge-status"
      />,
    );
    const badge = screen.getByTestId('badge-status');
    expect(badge).not.toHaveClass('border-2', 'border-background-default');
  });

  it('applies custom className', () => {
    render(
      <BadgeStatus
        status={BadgeStatusStatus.New}
        className="custom-class"
        data-testid="badge-status"
      />,
    );
    const badge = screen.getByTestId('badge-status');
    expect(badge).toHaveClass('custom-class');
  });

  it('applies inline styles when provided', () => {
    render(
      <BadgeStatus
        status={BadgeStatusStatus.Attention}
        style={{ backgroundColor: 'red' }}
        data-testid="badge-status"
      />,
    );
    const badge = screen.getByTestId('badge-status');
    expect(badge).toHaveStyle({ backgroundColor: 'red' });
  });

  it('forwards ref to the root div', () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<BadgeStatus ref={ref} status={BadgeStatusStatus.Active} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});
