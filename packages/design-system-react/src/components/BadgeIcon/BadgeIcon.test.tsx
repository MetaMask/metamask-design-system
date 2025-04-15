// BadgeIcon.test.tsx
import { render, screen } from '@testing-library/react';
import React from 'react';

import { IconName, IconColor } from '../Icon';
import { ICON_SIZE_CLASS_MAP } from '../Icon/Icon.constants';
import { BadgeIcon } from './BadgeIcon';

describe('BadgeIcon', () => {
  it('renders with default props', () => {
    render(<BadgeIcon iconName={IconName.User} data-testid="badge-icon" />);
    const badgeIcon = screen.getByTestId('badge-icon');
    expect(badgeIcon).toBeInTheDocument();
    expect(badgeIcon).toHaveClass(
      'bg-icon-default',
      'rounded-full',
      'h-4',
      'w-4',
    );
  });

  it('renders the icon correctly', () => {
    render(
      <BadgeIcon
        iconName={IconName.User}
        iconProps={{ 'data-testid': 'icon' }}
      />,
    );
    const icon = screen.getByTestId('icon');
    expect(icon).toBeInTheDocument();
  });

  it('applies custom icon props', () => {
    render(
      <BadgeIcon
        iconName={IconName.User}
        iconProps={{
          className: 'custom-icon-class',
          color: IconColor.ErrorDefault,
          'data-testid': 'icon',
        }}
      />,
    );
    const icon = screen.getByTestId('icon');
    expect(icon).toHaveClass('custom-icon-class text-error-default');
  });

  it('applies custom className', () => {
    render(
      <BadgeIcon
        iconName={IconName.User}
        className="custom-class"
        data-testid="badge-icon"
      />,
    );
    const badgeIcon = screen.getByTestId('badge-icon');
    expect(badgeIcon).toHaveClass('custom-class');
  });

  it('forwards ref to the root div', () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<BadgeIcon ref={ref} iconName={IconName.User} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it('renders correctly with multiple iconName values', () => {
    Object.values(IconName)
      .slice(0, 3)
      .forEach((iconName) => {
        render(
          <BadgeIcon iconName={iconName} data-testid={`icon-${iconName}`} />,
        );
        const icon = screen
          .getByTestId(`icon-${iconName}`)
          .querySelector('svg');
        expect(icon).toBeInTheDocument();
      });
  });

  it('uses correct icon size class', () => {
    render(
      <BadgeIcon
        iconName={IconName.User}
        iconProps={{ 'data-testid': 'icon', className: ICON_SIZE_CLASS_MAP.xs }}
      />,
    );
    const icon = screen.getByTestId('icon');
    expect(icon).toHaveClass(ICON_SIZE_CLASS_MAP.xs);
  });
});
