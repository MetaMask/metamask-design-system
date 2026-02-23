import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { renderHook } from '@testing-library/react-hooks';
import { render, fireEvent } from '@testing-library/react-native';
import React from 'react';
import type { StyleProp, ViewStyle } from 'react-native';

import { RadioButton } from './RadioButton';

describe('RadioButton', () => {
  let tw: ReturnType<typeof useTailwind>;

  beforeAll(() => {
    tw = renderHook(() => useTailwind()).result.current;
  });

  /**
   * Flatten a style prop into an array of style objects.
   *
   * @param styleProp - The style prop to flatten.
   * @returns A list of style objects.
   */
  function flattenStyles(
    styleProp: StyleProp<ViewStyle> | undefined,
  ): ViewStyle[] {
    if (styleProp === null || styleProp === undefined) {
      return [];
    }
    if (Array.isArray(styleProp)) {
      return styleProp.flatMap((item) =>
        flattenStyles(item as StyleProp<ViewStyle>),
      );
    }
    if (typeof styleProp === 'object') {
      return [styleProp as ViewStyle];
    }
    return [];
  }

  it('renders label when provided', () => {
    const { getByText } = render(<RadioButton label="Option A" />);
    expect(getByText('Option A')).toBeDefined();
  });

  it('does not render label when not provided', () => {
    const { queryByText } = render(<RadioButton />);
    expect(queryByText('Option A')).toBeNull();
  });

  it('fires onPress when pressed', () => {
    const onPress = jest.fn();
    const { getByTestId } = render(
      <RadioButton
        onPress={onPress}
        touchableOpacityProps={{ testID: 'radio-touchable' }}
      />,
    );
    fireEvent.press(getByTestId('radio-touchable'));
    expect(onPress).toHaveBeenCalledTimes(1);
  });

  it('does not fire onPress when disabled', () => {
    const onPress = jest.fn();
    const { getByTestId } = render(
      <RadioButton
        onPress={onPress}
        isDisabled
        touchableOpacityProps={{ testID: 'radio-touchable' }}
      />,
    );
    fireEvent.press(getByTestId('radio-touchable'));
    expect(onPress).not.toHaveBeenCalled();
  });

  it('does not fire onPress when readOnly', () => {
    const onPress = jest.fn();
    const { getByTestId } = render(
      <RadioButton
        onPress={onPress}
        isReadOnly
        touchableOpacityProps={{ testID: 'radio-touchable' }}
      />,
    );
    fireEvent.press(getByTestId('radio-touchable'));
    expect(onPress).not.toHaveBeenCalled();
  });

  it('passes testID to root View via ViewProps', () => {
    const { getByTestId } = render(<RadioButton testID="radio-root" />);
    expect(getByTestId('radio-root')).toBeDefined();
  });

  it('passes testID to TouchableOpacity via touchableOpacityProps', () => {
    const { getByTestId } = render(
      <RadioButton
        testID="radio-root"
        touchableOpacityProps={{ testID: 'radio-touchable' }}
      />,
    );
    expect(getByTestId('radio-root')).toBeDefined();
    expect(getByTestId('radio-touchable')).toBeDefined();
  });

  it('shows inner dot when isChecked is true', () => {
    const { getByTestId } = render(
      <RadioButton
        isChecked
        radioButtonContainerProps={{ testID: 'radio-circle' }}
      />,
    );
    const circle = getByTestId('radio-circle');
    expect(circle.children.length).toBeGreaterThan(0);
  });

  it('does not show inner dot when isChecked is false', () => {
    const { getByTestId } = render(
      <RadioButton radioButtonContainerProps={{ testID: 'radio-circle' }} />,
    );
    const circle = getByTestId('radio-circle');
    expect(circle.children).toHaveLength(0);
  });

  it('applies disabled opacity to root', () => {
    const { getByTestId } = render(
      <RadioButton isDisabled testID="radio-root" />,
    );
    const root = getByTestId('radio-root');
    const styles = flattenStyles(root.props.style);
    expect(styles).toStrictEqual(
      expect.arrayContaining([
        expect.objectContaining(tw`flex-row items-center opacity-50`),
      ]),
    );
  });

  it('applies checked border styles', () => {
    const { getByTestId } = render(
      <RadioButton
        isChecked
        radioButtonContainerProps={{ testID: 'radio-circle' }}
      />,
    );
    const circle = getByTestId('radio-circle');
    const styles = flattenStyles(circle.props.style);
    expect(styles).toStrictEqual(
      expect.arrayContaining([
        expect.objectContaining(
          tw`size-5 items-center justify-center rounded-full border-2 border-primary-default bg-default`,
        ),
      ]),
    );
  });

  it('applies readOnly border and dot styles', () => {
    const { getByTestId } = render(
      <RadioButton
        isChecked
        isReadOnly
        radioButtonContainerProps={{ testID: 'radio-circle' }}
      />,
    );
    const circle = getByTestId('radio-circle');
    const styles = flattenStyles(circle.props.style);
    expect(styles).toStrictEqual(
      expect.arrayContaining([
        expect.objectContaining(
          tw`size-5 items-center justify-center rounded-full border-2 border-background-default bg-default`,
        ),
      ]),
    );
  });

  it('applies danger border styles', () => {
    const { getByTestId } = render(
      <RadioButton
        isChecked
        isDanger
        radioButtonContainerProps={{ testID: 'radio-circle' }}
      />,
    );
    const circle = getByTestId('radio-circle');
    const styles = flattenStyles(circle.props.style);
    expect(styles).toStrictEqual(
      expect.arrayContaining([
        expect.objectContaining(
          tw`size-5 items-center justify-center rounded-full border-2 border-error-default bg-default`,
        ),
      ]),
    );
  });

  it('sets accessibility props correctly', () => {
    const { getByTestId } = render(
      <RadioButton
        isChecked
        label="Option A"
        touchableOpacityProps={{ testID: 'radio-touchable' }}
      />,
    );
    const touchable = getByTestId('radio-touchable');
    expect(touchable.props.accessibilityRole).toBe('radio');
    expect(touchable.props.accessibilityState).toMatchObject({
      checked: true,
      disabled: false,
    });
    expect(touchable.props.accessibilityLabel).toBe('Option A');
  });

  it('merges custom style with root', () => {
    const { getByTestId } = render(
      <RadioButton testID="radio-root" style={{ margin: 8 }} />,
    );
    const root = getByTestId('radio-root');
    const styles = flattenStyles(root.props.style);
    expect(styles).toStrictEqual(
      expect.arrayContaining([expect.objectContaining({ margin: 8 })]),
    );
  });
});
