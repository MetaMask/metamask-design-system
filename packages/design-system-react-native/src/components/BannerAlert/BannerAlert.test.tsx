import { BoxBackgroundColor } from '@metamask/design-system-shared';
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { render } from '@testing-library/react-native';
import React from 'react';

import { IconColor, IconName } from '../../types';
import { BannerBase } from '../BannerBase';

import { BannerAlert } from './BannerAlert';

import { BannerAlertSeverity } from '.';

jest.mock('@metamask/design-system-twrnc-preset');
jest.mock('../BannerBase', () => ({
  BannerBase: jest.fn(() => null),
}));

const ICON_TEST_ID = 'banner-alert-icon';

describe('BannerAlert', () => {
  const mockBannerBase = BannerBase as jest.Mock;
  const mockTwStyle = jest.fn((...args) => args.filter(Boolean));

  beforeEach(() => {
    mockBannerBase.mockClear();
    mockTwStyle.mockClear();
    (useTailwind as jest.Mock).mockReturnValue({
      style: mockTwStyle,
    });
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

  it('applies border styling and passes style prop', () => {
    const customStyle = { marginTop: 8 };
    render(
      <BannerAlert
        severity={BannerAlertSeverity.Info}
        title="Custom styling"
        style={customStyle}
      />,
    );

    // Verify tw.style was called with correct border classes for info severity
    expect(mockTwStyle).toHaveBeenCalledWith(
      'border-l-4 border-primary-default',
    );

    // Verify style array was passed to BannerBase with tw.style result and custom style
    const props = mockBannerBase.mock.calls[0][0];
    expect(Array.isArray(props.style)).toBe(true);
    expect(props.style[1]).toBe(customStyle);
  });
});
