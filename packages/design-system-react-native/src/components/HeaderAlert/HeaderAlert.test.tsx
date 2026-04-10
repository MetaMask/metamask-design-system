import { IconAlertSeverity } from '@metamask/design-system-shared';
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { renderHook } from '@testing-library/react-hooks';
import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';

import { IconName, IconSize } from '../../types';
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

  it('forwards HeaderBase props such as testID', () => {
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

  it('merges default px-2 with twClassName on the root', () => {
    const { getByTestId } = render(
      <HeaderAlert
        severity={IconAlertSeverity.Info}
        testID="header-alert-root"
        twClassName="border-b border-muted"
        iconAlertProps={{ testID: 'header-alert-icon' }}
      />,
    );

    expect(getByTestId('header-alert-root')).toHaveStyle(
      tw.style('px-2', 'border-b', 'border-muted'),
    );
  });

  describe('resolved start actions', () => {
    it('uses startButtonIconProps when provided instead of synthesizing from onBack', () => {
      const explicitPress = jest.fn();
      const onBackPress = jest.fn();
      const { getByTestId } = render(
        <HeaderAlert
          severity={IconAlertSeverity.Info}
          iconAlertProps={{ testID: 'header-alert-icon' }}
          startButtonIconProps={{
            iconName: IconName.Add,
            onPress: explicitPress,
            testID: 'explicit-start',
          }}
          onBack={onBackPress}
        />,
      );

      fireEvent.press(getByTestId('explicit-start'));
      expect(explicitPress).toHaveBeenCalledTimes(1);
      expect(onBackPress).not.toHaveBeenCalled();
    });

    it('synthesizes start onPress from onBack when backButtonProps has no onPress', () => {
      const onBack = jest.fn();
      const { getByTestId } = render(
        <HeaderAlert
          severity={IconAlertSeverity.Info}
          iconAlertProps={{ testID: 'header-alert-icon' }}
          onBack={onBack}
          backButtonProps={{ testID: 'synth-start' }}
        />,
      );

      fireEvent.press(getByTestId('synth-start'));
      expect(onBack).toHaveBeenCalledTimes(1);
    });

    it('synthesizes start from onBack when backButtonProps is omitted', () => {
      const onBack = jest.fn();
      const { getByTestId } = render(
        <HeaderAlert
          severity={IconAlertSeverity.Info}
          iconAlertProps={{ testID: 'header-alert-icon' }}
          onBack={onBack}
        />,
      );

      fireEvent.press(getByTestId('button-icon'));
      expect(onBack).toHaveBeenCalledTimes(1);
    });

    it('prefers backButtonProps.onPress over onBack when both are set', () => {
      const onBack = jest.fn();
      const backPropsPress = jest.fn();
      const { getByTestId } = render(
        <HeaderAlert
          severity={IconAlertSeverity.Info}
          iconAlertProps={{ testID: 'header-alert-icon' }}
          onBack={onBack}
          backButtonProps={{ testID: 'synth-start', onPress: backPropsPress }}
        />,
      );

      fireEvent.press(getByTestId('synth-start'));
      expect(backPropsPress).toHaveBeenCalledTimes(1);
      expect(onBack).not.toHaveBeenCalled();
    });

    it('synthesizes start from backButtonProps without onBack', () => {
      const backPress = jest.fn();
      const { getByTestId } = render(
        <HeaderAlert
          severity={IconAlertSeverity.Info}
          iconAlertProps={{ testID: 'header-alert-icon' }}
          backButtonProps={{ testID: 'back-only', onPress: backPress }}
        />,
      );

      fireEvent.press(getByTestId('back-only'));
      expect(backPress).toHaveBeenCalledTimes(1);
    });
  });

  describe('resolved end actions', () => {
    it('synthesizes close onPress from onClose when closeButtonProps has no onPress', () => {
      const onClose = jest.fn();
      const { getByTestId } = render(
        <HeaderAlert
          severity={IconAlertSeverity.Info}
          iconAlertProps={{ testID: 'header-alert-icon' }}
          onClose={onClose}
          closeButtonProps={{ testID: 'synth-close' }}
        />,
      );

      fireEvent.press(getByTestId('synth-close'));
      expect(onClose).toHaveBeenCalledTimes(1);
    });

    it('synthesizes close from onClose when closeButtonProps is omitted', () => {
      const onClose = jest.fn();
      const { getByTestId } = render(
        <HeaderAlert
          severity={IconAlertSeverity.Info}
          iconAlertProps={{ testID: 'header-alert-icon' }}
          onClose={onClose}
        />,
      );

      fireEvent.press(getByTestId('button-icon'));
      expect(onClose).toHaveBeenCalledTimes(1);
    });

    it('prefers closeButtonProps.onPress over onClose when both are set', () => {
      const onClose = jest.fn();
      const closePropsPress = jest.fn();
      const { getByTestId } = render(
        <HeaderAlert
          severity={IconAlertSeverity.Info}
          iconAlertProps={{ testID: 'header-alert-icon' }}
          onClose={onClose}
          closeButtonProps={{ testID: 'synth-close', onPress: closePropsPress }}
        />,
      );

      fireEvent.press(getByTestId('synth-close'));
      expect(closePropsPress).toHaveBeenCalledTimes(1);
      expect(onClose).not.toHaveBeenCalled();
    });

    it('synthesizes close from closeButtonProps without onClose', () => {
      const closePress = jest.fn();
      const { getByTestId } = render(
        <HeaderAlert
          severity={IconAlertSeverity.Info}
          iconAlertProps={{ testID: 'header-alert-icon' }}
          closeButtonProps={{ testID: 'close-only', onPress: closePress }}
        />,
      );

      fireEvent.press(getByTestId('close-only'));
      expect(closePress).toHaveBeenCalledTimes(1);
    });

    it('appends endButtonIconProps after the synthesized close button', () => {
      const onClose = jest.fn();
      const extraPress = jest.fn();
      const { getByTestId } = render(
        <HeaderAlert
          severity={IconAlertSeverity.Info}
          iconAlertProps={{ testID: 'header-alert-icon' }}
          onClose={onClose}
          closeButtonProps={{ testID: 'close-first' }}
          endButtonIconProps={[
            {
              iconName: IconName.Search,
              onPress: extraPress,
              testID: 'end-extra',
            },
          ]}
        />,
      );

      fireEvent.press(getByTestId('close-first'));
      expect(onClose).toHaveBeenCalledTimes(1);
      fireEvent.press(getByTestId('end-extra'));
      expect(extraPress).toHaveBeenCalledTimes(1);
    });

    it('uses only endButtonIconProps when onClose and closeButtonProps are not set', () => {
      const extraPress = jest.fn();
      const { getByTestId } = render(
        <HeaderAlert
          severity={IconAlertSeverity.Info}
          iconAlertProps={{ testID: 'header-alert-icon' }}
          endButtonIconProps={[
            {
              iconName: IconName.Search,
              onPress: extraPress,
              testID: 'only-end',
            },
          ]}
        />,
      );

      fireEvent.press(getByTestId('only-end'));
      expect(extraPress).toHaveBeenCalledTimes(1);
    });
  });

  it('sets displayName', () => {
    expect(HeaderAlert.displayName).toBe('HeaderAlert');
  });
});
