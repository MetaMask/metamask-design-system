import {
  Theme,
  ThemeProvider,
  useTailwind,
} from '@metamask/design-system-twrnc-preset';
import { darkTheme } from '@metamask/design-tokens';
import { renderHook } from '@testing-library/react-hooks';
import { act, render, fireEvent } from '@testing-library/react-native';
import React from 'react';
import type { StyleProp, TextStyle } from 'react-native';
import { create } from 'react-test-renderer';

import { TextVariant } from '../../types';

import { Input } from './Input';
import { INPUT_TEST_ID } from './Input.constants';

function flattenStyle(style: StyleProp<TextStyle>): TextStyle[] {
  if (style === null || style === undefined) {
    return [];
  }
  if (Array.isArray(style)) {
    return style.flatMap((s) => flattenStyle(s as StyleProp<TextStyle>));
  }
  return [style as TextStyle];
}

describe('Input', () => {
  const tw = renderHook(() => useTailwind()).result.current;

  it('renders correctly', () => {
    const { toJSON } = render(<Input />);
    expect(toJSON()).toMatchInlineSnapshot(`
      <TextInput
        autoFocus={false}
        editable={true}
        onBlur={[Function]}
        onFocus={[Function]}
        placeholderTextColor="#686e7d"
        style={
          [
            {
              "backgroundColor": "#ffffff",
              "borderColor": "transparent",
              "borderWidth": 1,
              "color": "#121314",
              "fontFamily": "Geist-Regular",
              "fontSize": 16,
              "fontWeight": 400,
              "letterSpacing": 0,
              "lineHeight": 24,
            },
            {
              "textAlignVertical": "center",
            },
          ]
        }
        testID="input"
      />
    `);
  });

  it('renders with the correct TextVariant', () => {
    const { getByTestId } = render(
      <Input textVariant={TextVariant.HeadingSm} defaultValue="Sample" />,
    );
    const input = getByTestId(INPUT_TEST_ID);
    expect(input).toBeDefined();
    const styles = flattenStyle(input.props.style);
    const expectedFontSize = (tw.style('text-heading-sm') as TextStyle)
      .fontSize;
    expect(styles).toContainEqual(
      expect.objectContaining({ fontSize: expectedFontSize }),
    );
  });

  it('renders correct disabled state when isDisabled is true', () => {
    const { getByTestId } = render(<Input isDisabled placeholder="Disabled" />);
    const input = getByTestId(INPUT_TEST_ID);
    expect(input.props.editable).toBe(false);
    const styles = flattenStyle(input.props.style);
    expect(styles).toContainEqual(
      expect.objectContaining({ opacity: tw`opacity-50`.opacity }),
    );
  });

  it('does not apply state styles when isStateStylesDisabled is true', () => {
    const { getByTestId } = render(
      <Input isDisabled isStateStylesDisabled placeholder="Disabled" />,
    );
    const input = getByTestId(INPUT_TEST_ID);
    expect(input.props.editable).toBe(false);
    const styles = flattenStyle(input.props.style);
    expect(styles).not.toContainEqual(
      expect.objectContaining({ opacity: 0.5 }),
    );
  });

  it('calls onBlur when input loses focus', () => {
    const onBlur = jest.fn();
    const { getByTestId } = render(<Input onBlur={onBlur} />);
    const input = getByTestId(INPUT_TEST_ID);
    fireEvent(input, 'focus');
    fireEvent(input, 'blur');
    expect(onBlur).toHaveBeenCalled();
  });

  it('calls onFocus when input receives focus', () => {
    const onFocus = jest.fn();
    const { getByTestId } = render(<Input onFocus={onFocus} />);
    const input = getByTestId(INPUT_TEST_ID);
    fireEvent(input, 'focus');
    expect(onFocus).toHaveBeenCalled();
  });

  it('defaults autoFocus to false so focus is not stolen on mount', () => {
    const { getByTestId } = render(<Input />);
    const input = getByTestId(INPUT_TEST_ID);
    expect(input.props.autoFocus).toBe(false);
  });

  it('respects autoFocus when set to true', () => {
    const { getByTestId } = render(<Input autoFocus />);
    const input = getByTestId(INPUT_TEST_ID);
    expect(input.props.autoFocus).toBe(true);
  });

  it('uses dark theme placeholder color when ThemeProvider has theme dark', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={Theme.Dark}>
        <Input placeholder="Dark theme" />
      </ThemeProvider>,
    );
    const input = getByTestId(INPUT_TEST_ID);
    expect(input.props.placeholderTextColor).toBe(
      darkTheme.colors.text.alternative,
    );
  });

  it('does not call onBlur when disabled and blur fires', () => {
    const onBlur = jest.fn();
    const { getByTestId } = render(<Input isDisabled onBlur={onBlur} />);
    const input = getByTestId(INPUT_TEST_ID);
    fireEvent(input, 'focus');
    fireEvent(input, 'blur');
    expect(onBlur).not.toHaveBeenCalled();
  });

  it('does not call onFocus when disabled and focus fires', () => {
    const onFocus = jest.fn();
    const { getByTestId } = render(<Input isDisabled onFocus={onFocus} />);
    const input = getByTestId(INPUT_TEST_ID);
    fireEvent(input, 'focus');
    expect(onFocus).not.toHaveBeenCalled();
  });

  it('invokes onBlur with event when not disabled', () => {
    const onBlur = jest.fn();
    const { getByTestId } = render(<Input onBlur={onBlur} />);
    const input = getByTestId(INPUT_TEST_ID);
    fireEvent(input, 'focus');
    fireEvent(input, 'blur', { nativeEvent: {} });
    expect(onBlur).toHaveBeenCalledTimes(1);
    expect(onBlur).toHaveBeenCalledWith(
      expect.objectContaining({ nativeEvent: {} }),
    );
  });

  it('invokes onFocus with event when not disabled', () => {
    const onFocus = jest.fn();
    const { getByTestId } = render(<Input onFocus={onFocus} />);
    const input = getByTestId(INPUT_TEST_ID);
    fireEvent(input, 'focus', { nativeEvent: {} });
    expect(onFocus).toHaveBeenCalledTimes(1);
    expect(onFocus).toHaveBeenCalledWith(
      expect.objectContaining({ nativeEvent: {} }),
    );
  });

  it('calls onBlur handler when TextInput onBlur prop is invoked', () => {
    const onBlur = jest.fn();
    const { getByTestId } = render(<Input onBlur={onBlur} />);
    const input = getByTestId(INPUT_TEST_ID);
    const blurEvent = { nativeEvent: { text: '' } };
    act(() => {
      input.props.onBlur(blurEvent);
    });
    expect(onBlur).toHaveBeenCalledWith(blurEvent);
  });

  it('calls onFocus handler when TextInput onFocus prop is invoked', () => {
    const onFocus = jest.fn();
    const { getByTestId } = render(<Input onFocus={onFocus} />);
    const input = getByTestId(INPUT_TEST_ID);
    const focusEvent = { nativeEvent: { text: '' } };
    act(() => {
      input.props.onFocus(focusEvent);
    });
    expect(onFocus).toHaveBeenCalledWith(focusEvent);
  });

  it('onBlurHandler and onFocusHandler run when invoked via test renderer', () => {
    const onBlur = jest.fn();
    const onFocus = jest.fn();
    const tree = create(
      <ThemeProvider theme={Theme.Light}>
        <Input onBlur={onBlur} onFocus={onFocus} />
      </ThemeProvider>,
    );
    const input = tree.root.findByProps({ testID: INPUT_TEST_ID });
    const blurEvent = { nativeEvent: { text: '' } };
    const focusEvent = { nativeEvent: { text: '' } };
    act(() => {
      input.props.onBlur(blurEvent);
    });
    expect(onBlur).toHaveBeenCalledWith(blurEvent);
    act(() => {
      input.props.onFocus(focusEvent);
    });
    expect(onFocus).toHaveBeenCalledWith(focusEvent);
  });

  it('handlers run without callbacks (optional chaining branches)', () => {
    const tree = create(
      <ThemeProvider theme={Theme.Light}>
        <Input />
      </ThemeProvider>,
    );
    const input = tree.root.findByProps({ testID: INPUT_TEST_ID });
    const event = { nativeEvent: { text: '' } };
    act(() => {
      input.props.onBlur(event);
    });
    act(() => {
      input.props.onFocus(event);
    });
    expect(input.props.onBlur).toBeDefined();
    expect(input.props.onFocus).toBeDefined();
  });
});
