import { IconAlertSeverity, IconSize } from '@metamask/design-system-shared';
import { render, screen } from '@testing-library/react';
import React from 'react';

import { TWCLASSMAP_ICON_SIZE_DIMENSION } from '../Icon/Icon.constants';

import { IconAlert } from './IconAlert';
import { ICON_ALERT_SEVERITY_MAP } from './IconAlert.constants';

type IconAlertSeverityUnion =
  (typeof IconAlertSeverity)[keyof typeof IconAlertSeverity];

describe('IconAlert', () => {
  describe('when a severity is provided', () => {
    it.each(Object.values(IconAlertSeverity) as IconAlertSeverityUnion[])(
      'renders %s with the mapped color class',
      (severity) => {
        render(<IconAlert severity={severity} data-testid="icon-alert" />);

        const icon = screen.getByTestId('icon-alert');
        const { color } = ICON_ALERT_SEVERITY_MAP[severity];

        expect(icon).toBeInTheDocument();
        expect(icon).toHaveClass(
          color,
          TWCLASSMAP_ICON_SIZE_DIMENSION[IconSize.Md],
        );
      },
    );
  });

  describe('when size is Lg', () => {
    it('applies large icon dimensions for Info severity', () => {
      render(
        <IconAlert
          severity={IconAlertSeverity.Info}
          size={IconSize.Lg}
          data-testid="icon-alert"
        />,
      );

      const icon = screen.getByTestId('icon-alert');
      const { color } = ICON_ALERT_SEVERITY_MAP[IconAlertSeverity.Info];

      expect(icon).toBeInTheDocument();
      expect(icon).toHaveClass(
        color,
        TWCLASSMAP_ICON_SIZE_DIMENSION[IconSize.Lg],
      );
    });
  });

  it('merges custom className', () => {
    render(
      <IconAlert
        severity={IconAlertSeverity.Info}
        className="opacity-70"
        data-testid="icon-alert"
      />,
    );

    expect(screen.getByTestId('icon-alert')).toHaveClass('opacity-70');
  });
});
