import { render } from '@testing-library/react-native';
import React from 'react';

import { BoxBackgroundColor, IconColor, IconName } from '../../types';
import { BannerBase } from '../BannerBase';

import { BannerAlert } from './BannerAlert';

import { BannerAlertSeverity } from '.';

jest.mock('../BannerBase', () => ({
  BannerBase: jest.fn(() => null),
}));

const ICON_TEST_ID = 'banner-alert-icon';

describe('BannerAlert', () => {
  const mockBannerBase = BannerBase as jest.Mock;

  beforeEach(() => {
    mockBannerBase.mockClear();
  });

  it('uses info severity styles by default', () => {
    render(
      <BannerAlert title="Default info" iconProps={{ testID: ICON_TEST_ID }} />,
    );

    const props = mockBannerBase.mock.calls[0][0];
    expect(props.backgroundColor).toBe(BoxBackgroundColor.PrimaryMuted);
    expect(props.paddingLeft).toBe(2);

    expect(props.startAccessory.props.name).toBe(IconName.Info);
    expect(props.startAccessory.props.color).toBe(IconColor.PrimaryDefault);
    expect(props.startAccessory.props.testID).toBe(ICON_TEST_ID);
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
      render(<BannerAlert severity={severity} title={`${severity} banner`} />);

      const props = mockBannerBase.mock.calls[0][0];
      expect(props.backgroundColor).toBe(backgroundColor);
      expect(props.startAccessory.props.name).toBe(iconName);
      expect(props.startAccessory.props.color).toBe(iconColor);
    },
  );
});
