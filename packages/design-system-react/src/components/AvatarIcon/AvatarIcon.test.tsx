import { render, screen } from '@testing-library/react';
import React, { createRef } from 'react';

import { AvatarIconSize, AvatarIconSeverity } from '../../types';
import { IconName } from '../Icon';
import { TWCLASSMAP_ICON_SIZE_DIMENSION } from '../Icon/Icon.constants';

import { AvatarIcon } from './AvatarIcon';
import {
  TWCLASSMAP_AVATARICON_SEVERITY_BACKGROUNDCOLOR,
  MAP_AVATARICON_SEVERITY_ICONCOLOR,
} from './AvatarIcon.constants';

describe('AvatarIcon', () => {
  it('renders with default props', () => {
    render(
      <AvatarIcon iconName={IconName.AddSquare} data-testid="avatar-icon" />,
    );
    const avatarIcon = screen.getByTestId('avatar-icon');
    expect(avatarIcon).toBeInTheDocument();
    expect(avatarIcon).toHaveClass(
      TWCLASSMAP_AVATARICON_SEVERITY_BACKGROUNDCOLOR[
        AvatarIconSeverity.Neutral
      ],
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
        expect(icon).toHaveClass(TWCLASSMAP_ICON_SIZE_DIMENSION[size]);
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
          TWCLASSMAP_AVATARICON_SEVERITY_BACKGROUNDCOLOR[severity],
        );
        expect(icon).toHaveClass(MAP_AVATARICON_SEVERITY_ICONCOLOR[severity]);
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
    const ref = createRef<HTMLDivElement>();
    render(<AvatarIcon ref={ref} iconName={IconName.AddSquare} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});
