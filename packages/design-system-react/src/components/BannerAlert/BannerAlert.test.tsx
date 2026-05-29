import { BoxBackgroundColor } from '@metamask/design-system-shared';
import { render } from '@testing-library/react';
import React from 'react';

import { IconColor } from '../../types';

import { BannerAlert } from './BannerAlert';

import { BannerAlertSeverity } from '.';

const ICON_TEST_ID = 'banner-alert-icon';

describe('BannerAlert', () => {
  it('renders with info severity styles by default', () => {
    const { container, getByTestId } = render(
      <BannerAlert
        title="Default info"
        iconProps={{ 'data-testid': ICON_TEST_ID }}
      />,
    );

    expect(container.firstElementChild).toHaveClass(
      BoxBackgroundColor.PrimaryMuted,
    );

    const icon = getByTestId(ICON_TEST_ID);
    expect(icon).toHaveClass(IconColor.PrimaryDefault);
  });

  it.each([
    {
      severity: BannerAlertSeverity.Info,
      iconColor: IconColor.PrimaryDefault,
      backgroundColor: BoxBackgroundColor.PrimaryMuted,
    },
    {
      severity: BannerAlertSeverity.Success,
      iconColor: IconColor.SuccessDefault,
      backgroundColor: BoxBackgroundColor.SuccessMuted,
    },
    {
      severity: BannerAlertSeverity.Warning,
      iconColor: IconColor.WarningDefault,
      backgroundColor: BoxBackgroundColor.WarningMuted,
    },
    {
      severity: BannerAlertSeverity.Danger,
      iconColor: IconColor.ErrorDefault,
      backgroundColor: BoxBackgroundColor.ErrorMuted,
    },
  ])(
    'applies expected icon and background for $severity severity',
    ({ severity, iconColor, backgroundColor }) => {
      const { container, getByTestId } = render(
        <BannerAlert
          severity={severity}
          title={`${severity} banner`}
          iconProps={{ 'data-testid': ICON_TEST_ID }}
        />,
      );

      expect(container.firstElementChild).toHaveClass(backgroundColor);

      const icon = getByTestId(ICON_TEST_ID);
      expect(icon).toHaveClass(iconColor);
    },
  );
});
