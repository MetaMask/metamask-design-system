import {
  ButtonIconSize,
  IconName,
  ButtonIconVariant,
} from '@metamask/design-system-shared';
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { fireEvent, render, renderHook } from '@testing-library/react-native';
import React from 'react';

import { ButtonIcon } from './ButtonIcon';
import { TWCLASSMAP_BUTTONICON_SIZE_DIMENSION } from './ButtonIcon.constants';

describe('ButtonIcon', () => {
  it('renders default state correctly', () => {
    const { result } = renderHook(() => useTailwind());
    const tw = result.current;
    const expected = tw.style(
      'items-center justify-center',
      TWCLASSMAP_BUTTONICON_SIZE_DIMENSION[ButtonIconSize.Md],
      'rounded-lg bg-transparent opacity-100',
    );

    const { getByTestId } = render(
      <ButtonIcon
        iconName={IconName.Close}
        iconProps={{ testID: 'icon' }}
        testID="button-icon"
      />,
    );
    const btn = getByTestId('button-icon');
    expect(btn).toHaveStyle(expected);

    const icon = getByTestId('icon');
    expect(icon.props.name).toStrictEqual(IconName.Close);
  });

  it('renders with different sizes', () => {
    const { result } = renderHook(() => useTailwind());
    const tw = result.current;

    const { getByTestId, rerender } = render(
      <ButtonIcon
        iconName={IconName.Close}
        size={ButtonIconSize.Xs}
        testID="button-icon"
      />,
    );
    let btn = getByTestId('button-icon');
    let expected = tw.style(
      'items-center justify-center',
      TWCLASSMAP_BUTTONICON_SIZE_DIMENSION[ButtonIconSize.Xs],
      'rounded-lg bg-transparent opacity-100',
    );
    expect(btn).toHaveStyle(expected);

    rerender(
      <ButtonIcon
        iconName={IconName.Close}
        size={ButtonIconSize.Sm}
        testID="button-icon"
      />,
    );
    btn = getByTestId('button-icon');
    expected = tw.style(
      'items-center justify-center',
      TWCLASSMAP_BUTTONICON_SIZE_DIMENSION[ButtonIconSize.Sm],
      'rounded-lg bg-transparent opacity-100',
    );
    expect(btn).toHaveStyle(expected);

    rerender(
      <ButtonIcon
        iconName={IconName.Close}
        size={ButtonIconSize.Lg}
        testID="button-icon"
      />,
    );
    btn = getByTestId('button-icon');
    expected = tw.style(
      'items-center justify-center',
      TWCLASSMAP_BUTTONICON_SIZE_DIMENSION[ButtonIconSize.Lg],
      'rounded-lg bg-transparent opacity-100',
    );
    expect(btn).toHaveStyle(expected);
  });

  it('applies isDisabled state', () => {
    const { result } = renderHook(() => useTailwind());
    const tw = result.current;
    const expected = tw.style(
      'items-center justify-center',
      TWCLASSMAP_BUTTONICON_SIZE_DIMENSION[ButtonIconSize.Md],
      'rounded-lg bg-transparent opacity-50',
    );

    const { getByTestId } = render(
      <ButtonIcon
        iconName={IconName.Close}
        iconProps={{ testID: 'icon' }}
        isDisabled
        testID="button-icon"
      />,
    );
    const btn = getByTestId('button-icon');
    expect(btn).toHaveStyle(expected);
    expect(btn).toBeDisabled();
  });

  it('applies Floating variant', () => {
    const { result } = renderHook(() => useTailwind());
    const tw = result.current;
    const expected = tw.style(
      'items-center justify-center',
      TWCLASSMAP_BUTTONICON_SIZE_DIMENSION[ButtonIconSize.Md],
      'rounded-full bg-icon-default opacity-100',
    );

    const { getByTestId } = render(
      <ButtonIcon
        iconName={IconName.Close}
        variant={ButtonIconVariant.Floating}
        testID="button-icon"
      />,
    );
    const btn = getByTestId('button-icon');
    expect(btn).toHaveStyle(expected);
  });

  it('applies Filled variant', () => {
    const { result } = renderHook(() => useTailwind());
    const tw = result.current;
    const expected = tw.style(
      'items-center justify-center',
      TWCLASSMAP_BUTTONICON_SIZE_DIMENSION[ButtonIconSize.Md],
      'rounded-full bg-muted opacity-100',
    );

    const { getByTestId } = render(
      <ButtonIcon
        iconName={IconName.Close}
        variant={ButtonIconVariant.Filled}
        testID="button-icon"
      />,
    );
    const btn = getByTestId('button-icon');
    expect(btn).toHaveStyle(expected);
  });

  it('applies Filled variant pressed state', () => {
    const { result } = renderHook(() => useTailwind());
    const tw = result.current;
    const expected = tw.style(
      'items-center justify-center',
      TWCLASSMAP_BUTTONICON_SIZE_DIMENSION[ButtonIconSize.Md],
      'rounded-full bg-muted-pressed opacity-100',
    );

    const { getByTestId } = render(
      <ButtonIcon
        iconName={IconName.Close}
        variant={ButtonIconVariant.Filled}
        testID="button-icon"
      />,
    );
    const btn = getByTestId('button-icon');
    fireEvent(btn, 'pressIn');
    expect(btn).toHaveStyle(expected);
  });

  it('forwards style and twClassName', () => {
    const { result } = renderHook(() => useTailwind());
    const tw = result.current;
    const expected = tw.style(
      'items-center justify-center',
      TWCLASSMAP_BUTTONICON_SIZE_DIMENSION[ButtonIconSize.Md],
      'rounded-lg bg-transparent opacity-100',
      'text-primary-default',
    );

    const { getByTestId } = render(
      <ButtonIcon
        iconName={IconName.Close}
        iconProps={{ testID: 'icon' }}
        twClassName="text-primary-default"
        style={{ margin: 5 }}
        testID="button-icon"
      />,
    );
    const btn = getByTestId('button-icon');
    expect(btn).toHaveStyle([expected, { margin: 5 }]);
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
