import { IconAlertSeverity } from '@metamask/design-system-shared';
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { renderHook } from '@testing-library/react-hooks';
import { render } from '@testing-library/react-native';
import React from 'react';

import { IconSize } from '../../types';
import { TWCLASSMAP_ICON_SIZE_DIMENSION } from '../Icon/Icon.constants';
import type { IconAlertProps } from '../IconAlert';
import { ICON_ALERT_SEVERITY_MAP } from '../IconAlert/IconAlert.constants';

import { HeaderAlert } from './HeaderAlert';

type IconAlertSeverityUnion =
  (typeof IconAlertSeverity)[keyof typeof IconAlertSeverity];

describe('HeaderAlert', () => {
  let tw: ReturnType<typeof useTailwind>;

  beforeAll(() => {
    tw = renderHook(() => useTailwind()).result.current;
  });

  describe('when a severity is provided', () => {
    it.each(Object.values(IconAlertSeverity) as IconAlertSeverityUnion[])(
      'renders IconAlert at Lg with mapped color for %s',
      (severity) => {
        const { getByTestId } = render(
          <HeaderAlert
            severity={severity}
            iconAlertProps={{ testID: 'header-alert-icon' }}
          />,
        );

        const icon = getByTestId('header-alert-icon');
        const { color } = ICON_ALERT_SEVERITY_MAP[severity];

        expect(icon).toBeOnTheScreen();
        expect(icon).toHaveStyle(
          tw.style(color, TWCLASSMAP_ICON_SIZE_DIMENSION[IconSize.Lg]),
        );
      },
    );
  });

  describe('when iconAlertProps includes a severity at runtime', () => {
    it('uses HeaderAlert severity for icon mapping', () => {
      const { getByTestId } = render(
        <HeaderAlert
          severity={IconAlertSeverity.Error}
          iconAlertProps={
            {
              severity: IconAlertSeverity.Info,
              testID: 'header-alert-icon',
            } as IconAlertProps
          }
        />,
      );

      const icon = getByTestId('header-alert-icon');
      const { color } = ICON_ALERT_SEVERITY_MAP[IconAlertSeverity.Error];

      expect(icon).toHaveStyle(
        tw.style(color, TWCLASSMAP_ICON_SIZE_DIMENSION[IconSize.Lg]),
      );
    });
  });

  it('forwards HeaderStandard props such as testID', () => {
    const { getByTestId } = render(
      <HeaderAlert
        severity={IconAlertSeverity.Info}
        testID="header-alert-root"
        iconAlertProps={{ testID: 'header-alert-icon' }}
      />,
    );

    expect(getByTestId('header-alert-root')).toBeOnTheScreen();
    expect(getByTestId('header-alert-icon')).toBeOnTheScreen();
  });
});
