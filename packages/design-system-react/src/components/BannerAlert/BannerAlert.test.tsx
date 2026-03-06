import { render } from '@testing-library/react';
import React from 'react';

import { BoxBackgroundColor, IconColor, IconName } from '../../types';

import { BannerAlert } from './BannerAlert';
import { BANNER_ALERT_ICON_TEST_ID } from './BannerAlert.constants';

import { BannerAlertSeverity } from '.';

jest.mock('../Icon', () => {
  const actual = jest.requireActual('../Icon');

  return {
    ...actual,
    Icon: ({
      name,
      color,
      'data-testid': dataTestId,
    }: {
      name: string;
      color: string;
      'data-testid'?: string;
    }) => <div data-testid={dataTestId} data-name={name} className={color} />,
  };
});

describe('BannerAlert', () => {
  it('renders with info severity styles by default', () => {
    const { container, getByTestId } = render(
      <BannerAlert title="Default info" />,
    );

    expect(container.firstElementChild).toHaveClass(
      BoxBackgroundColor.PrimaryMuted,
    );

    const icon = getByTestId(BANNER_ALERT_ICON_TEST_ID);
    expect(icon).toHaveClass(IconColor.PrimaryDefault);
    expect(icon).toHaveAttribute('data-name', IconName.Info);
  });

  it.each([
    {
      severity: BannerAlertSeverity.Info,
      iconName: IconName.Info,
      iconColor: IconColor.PrimaryDefault,
      backgroundColor: BoxBackgroundColor.PrimaryMuted,
    },
    {
      severity: BannerAlertSeverity.Success,
      iconName: IconName.Confirmation,
      iconColor: IconColor.SuccessDefault,
      backgroundColor: BoxBackgroundColor.SuccessMuted,
    },
    {
      severity: BannerAlertSeverity.Warning,
      iconName: IconName.Danger,
      iconColor: IconColor.WarningDefault,
      backgroundColor: BoxBackgroundColor.WarningMuted,
    },
    {
      severity: BannerAlertSeverity.Danger,
      iconName: IconName.Danger,
      iconColor: IconColor.ErrorDefault,
      backgroundColor: BoxBackgroundColor.ErrorMuted,
    },
  ])(
    'applies expected icon and background for $severity severity',
    ({ severity, iconName, iconColor, backgroundColor }) => {
      const { container, getByTestId } = render(
        <BannerAlert severity={severity} title={`${severity} banner`} />,
      );

      expect(container.firstElementChild).toHaveClass(backgroundColor);

      const icon = getByTestId(BANNER_ALERT_ICON_TEST_ID);
      expect(icon).toHaveClass(iconColor);
      expect(icon).toHaveAttribute('data-name', iconName);
    },
  );
});
