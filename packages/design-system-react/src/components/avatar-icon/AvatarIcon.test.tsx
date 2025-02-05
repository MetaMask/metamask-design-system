import { render, screen } from '@testing-library/react';
import React from 'react';

import { IconName } from '../icon';
import { AvatarIcon } from './AvatarIcon';
import {
  AVATAR_ICON_SEVERITY_CLASSNAME_MAP,
  AVATAR_ICON_SIZE_TO_ICON_SIZE_CLASSNAME_MAP,
} from './AvatarIcon.constants';
import { AvatarIconSeverity } from './AvatarIcon.types';
import { AvatarIconSize } from '.';
import { ICON_SIZE_CLASS_MAP } from '../icon/Icon.constants';

describe('AvatarIcon', () => {
  it('renders with default props', () => {
    render(
      <AvatarIcon iconName={IconName.AddSquare} data-testid="avatar-icon" />,
    );
    const avatarIcon = screen.getByTestId('avatar-icon');
    expect(avatarIcon).toBeInTheDocument();
    expect(avatarIcon).toHaveClass(
      AVATAR_ICON_SEVERITY_CLASSNAME_MAP[AvatarIconSeverity.Default].background,
    );
  });

  it('renders icon correctly', () => {
    render(
      <AvatarIcon
        iconName={IconName.AddSquare}
        iconProps={{ 'data-testid': 'icon' }}
      />,
    );
    const icon = screen.getByTestId('icon');
    expect(icon).toBeInTheDocument();
  });

  describe('Sizes', () => {
    Object.values(AvatarIconSize).forEach((size) => {
      it(`applies ${size} size correctly`, () => {
        render(
          <AvatarIcon
            iconName={IconName.AddSquare}
            size={size}
            iconProps={{ 'data-testid': 'icon' }}
          />,
        );
        const icon = screen.getByTestId('icon');
        expect(icon).toHaveClass(ICON_SIZE_CLASS_MAP[size]);
      });
    });
  });

  describe('Severities', () => {
    Object.values(AvatarIconSeverity).forEach((severity) => {
      it(`applies ${severity} severity correctly`, () => {
        render(
          <AvatarIcon
            iconName={IconName.AddSquare}
            severity={severity}
            data-testid="avatar-icon"
            iconProps={{ 'data-testid': 'icon' }}
          />,
        );
        const avatarIcon = screen.getByTestId('avatar-icon');
        const icon = screen.getByTestId('icon');
        expect(avatarIcon).toHaveClass(
          AVATAR_ICON_SEVERITY_CLASSNAME_MAP[severity].background,
        );
        expect(icon).toHaveClass(
          AVATAR_ICON_SEVERITY_CLASSNAME_MAP[severity].iconColor,
        );
      });
    });
  });

  it('applies custom className', () => {
    render(
      <AvatarIcon
        iconName={IconName.AddSquare}
        className="custom-class"
        data-testid="avatar-icon"
      />,
    );
    const avatarIcon = screen.getByTestId('avatar-icon');
    expect(avatarIcon).toHaveClass('custom-class');
  });

  it('applies custom icon props', () => {
    render(
      <AvatarIcon
        iconName={IconName.AddSquare}
        iconProps={{
          className: 'custom-icon-class',
          'data-testid': 'icon',
        }}
      />,
    );
    const icon = screen.getByTestId('icon');
    expect(icon).toHaveClass('custom-icon-class');
  });

  it('forwards ref to AvatarBase', () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<AvatarIcon ref={ref} iconName={IconName.AddSquare} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});
