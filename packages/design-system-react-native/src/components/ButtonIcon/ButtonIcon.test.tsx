import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { renderHook } from '@testing-library/react-hooks';
import { render, fireEvent } from '@testing-library/react-native';
import React from 'react';

import { ButtonIconSize } from '../../types';
import { IconName } from '../Icon';
import ButtonIcon from './ButtonIcon';
import { TWCLASSMAP_BUTTONICON_SIZE_DIMENSION } from './ButtonIcon.constants';

describe('ButtonIcon', () => {
  it('renders default state correctly', () => {
    const { result } = renderHook(() => useTailwind());
    const tw = result.current;
    const expected = tw`items-center justify-center ${TWCLASSMAP_BUTTONICON_SIZE_DIMENSION[ButtonIconSize.Md]} rounded-sm bg-transparent opacity-100`;

    const { getByTestId } = render(
      <ButtonIcon
        iconName={IconName.Close}
        iconProps={{ testID: 'icon' }}
        testID="button-icon"
      />,
    );
    const btn = getByTestId('button-icon');
    expect(btn.props.style[0]).toStrictEqual(expected);

    const icon = getByTestId('icon');
    expect(icon.props.name).toStrictEqual(IconName.Close);
  });

  it('applies isDisabled state', () => {
    const { result } = renderHook(() => useTailwind());
    const tw = result.current;
    const expected = tw`items-center justify-center ${TWCLASSMAP_BUTTONICON_SIZE_DIMENSION[ButtonIconSize.Md]} rounded-sm bg-transparent opacity-50`;

    const { getByTestId } = render(
      <ButtonIcon
        iconName={IconName.Close}
        iconProps={{ testID: 'icon' }}
        isDisabled
        testID="button-icon"
      />,
    );
    const btn = getByTestId('button-icon');
    expect(btn.props.style[0]).toStrictEqual(expected);
    expect(btn.props.accessibilityState.disabled).toBe(true);
  });

  it('applies isFloating state', () => {
    const { result } = renderHook(() => useTailwind());
    const tw = result.current;
    const expected = tw`items-center justify-center ${TWCLASSMAP_BUTTONICON_SIZE_DIMENSION[ButtonIconSize.Md]} bg-icon-default rounded-full opacity-100`;

    const { getByTestId } = render(
      <ButtonIcon iconName={IconName.Close} isFloating testID="button-icon" />,
    );
    const btn = getByTestId('button-icon');
    expect(btn.props.style[0]).toStrictEqual(expected);
  });

  it('applies isInverse state', () => {
    const { result } = renderHook(() => useTailwind());
    const tw = result.current;
    // isInverse does not change container styling beyond default
    const expected = tw`items-center justify-center ${TWCLASSMAP_BUTTONICON_SIZE_DIMENSION[ButtonIconSize.Md]} rounded-sm bg-transparent opacity-100`;

    const { getByTestId } = render(
      <ButtonIcon
        iconName={IconName.Close}
        iconProps={{ testID: 'icon' }}
        isInverse
        testID="button-icon"
      />,
    );
    const btn = getByTestId('button-icon');
    expect(btn.props.style[0]).toStrictEqual(expected);
  });

  it('forwards style and twClassName', () => {
    const { result } = renderHook(() => useTailwind());
    const tw = result.current;
    const expected = tw`items-center justify-center ${TWCLASSMAP_BUTTONICON_SIZE_DIMENSION[ButtonIconSize.Md]} custom-class rounded-sm bg-transparent opacity-100`;

    const { getByTestId } = render(
      <ButtonIcon
        iconName={IconName.Close}
        iconProps={{ testID: 'icon' }}
        twClassName="custom-class"
        style={{ margin: 5 }}
        testID="button-icon"
      />,
    );
    const btn = getByTestId('button-icon');
    expect(btn.props.style[0]).toStrictEqual(expected);
    expect(btn.props.style[1]).toStrictEqual({ margin: 5 });
  });

  it('calls onPressIn and onPressOut handlers', () => {
    const onPressIn = jest.fn();
    const onPressOut = jest.fn();
    const { getByTestId } = render(
      <ButtonIcon
        iconName={IconName.Close}
        iconProps={{ testID: 'icon' }}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        testID="button-icon"
      />,
    );
    const btn = getByTestId('button-icon');
    fireEvent(btn, 'pressIn');
    expect(onPressIn).toHaveBeenCalledTimes(1);
    fireEvent(btn, 'pressOut');
    expect(onPressOut).toHaveBeenCalledTimes(1);
  });
});
