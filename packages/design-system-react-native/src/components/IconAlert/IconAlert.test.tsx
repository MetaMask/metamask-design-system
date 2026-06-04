import { IconAlertSeverity } from '@metamask/design-system-shared';
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { render, renderHook } from '@testing-library/react-native';
import React from 'react';

import { IconSize } from '../../types';
import { TWCLASSMAP_ICON_SIZE_DIMENSION } from '../Icon/Icon.constants';

import { IconAlert } from './IconAlert';
import { ICON_ALERT_SEVERITY_MAP } from './IconAlert.constants';

type IconAlertSeverityUnion =
  (typeof IconAlertSeverity)[keyof typeof IconAlertSeverity];

describe('IconAlert', () => {
  let tw: ReturnType<typeof useTailwind>;

  beforeAll(async () => {
    const { result } = await renderHook(() => useTailwind());

    tw = result.current;
  });

  describe('when a severity is provided', () => {
    it.each(Object.values(IconAlertSeverity) as IconAlertSeverityUnion[])(
      'renders %s with the mapped color styles',
      async (severity) => {
        const { getByTestId } = await render(
          <IconAlert severity={severity} testID="icon-alert" />,
        );

        const icon = getByTestId('icon-alert');
        const { color } = ICON_ALERT_SEVERITY_MAP[severity];

        expect(icon).toBeOnTheScreen();
        expect(icon).toHaveStyle(
          tw.style(color, TWCLASSMAP_ICON_SIZE_DIMENSION[IconSize.Md]),
        );
      },
    );
  });

  describe('when size is Lg', () => {
    it('applies large icon dimensions for Info severity', async () => {
      const { getByTestId } = await render(
        <IconAlert
          severity={IconAlertSeverity.Info}
          size={IconSize.Lg}
          testID="icon-alert"
        />,
      );

      const icon = getByTestId('icon-alert');
      const { color } = ICON_ALERT_SEVERITY_MAP[IconAlertSeverity.Info];

      expect(icon).toBeOnTheScreen();
      expect(icon).toHaveStyle(
        tw.style(color, TWCLASSMAP_ICON_SIZE_DIMENSION[IconSize.Lg]),
      );
    });
  });
});
