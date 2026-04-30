import { TextVariant } from '@metamask/design-system-shared';
import {
  Theme,
  ThemeProvider,
  useTailwind,
} from '@metamask/design-system-twrnc-preset';
import { darkTheme } from '@metamask/design-tokens';
import { renderHook } from '@testing-library/react-hooks';
import { act, render, fireEvent } from '@testing-library/react-native';
import React from 'react';
import { Platform, TextInput } from 'react-native';
import type { StyleProp, TextStyle } from 'react-native';
import { create } from 'react-test-renderer';

import { Input } from './Input';

const TEST_ID = 'input';

function flattenStyle(style: StyleProp<TextStyle>): TextStyle[] {
  if (style === null || style === undefined) {
    return [];
  }
  if (Array.isArray(style)) {
    return style.flatMap((s) => flattenStyle(s as StyleProp<TextStyle>));
  }
  return [style as TextStyle];
}

function getStyleProp(
  style: StyleProp<TextStyle>,
  key: keyof TextStyle,
): TextStyle[keyof TextStyle] | undefined {
  const styles = flattenStyle(style);
  for (let i = styles.length - 1; i >= 0; i--) {
    const val = styles[i]?.[key];
    if (val !== undefined) {
      return val;
    }
  }
  return undefined;
}

describe('Input', () => {
  const tw = renderHook(() => useTailwind()).result.current;

  it('renders with the correct TextVariant', () => {
    const { getByTestId } = render(
      <Input
        testID={TEST_ID}
        textVariant={TextVariant.HeadingSm}
        value="Sample"
      />,
    );
    const input = getByTestId(TEST_ID);
    expect(input).toBeDefined();
    const styles = flattenStyle(input.props.style);
    const expectedFontSize = (tw.style('text-heading-sm') as TextStyle)
      .fontSize;
    expect(styles).toContainEqual(
      expect.objectContaining({ fontSize: expectedFontSize }),
    );
  });

  it('renders correct disabled state when isDisabled is true', () => {
    const { getByTestId } = render(
      <Input value="" testID={TEST_ID} isDisabled placeholder="Disabled" />,
    );
    const input = getByTestId(TEST_ID);
    expect(input.props.editable).toBe(false);
    const styles = flattenStyle(input.props.style);
    expect(styles).toContainEqual(
      expect.objectContaining({ opacity: tw`opacity-50`.opacity }),
    );
  });

  it('applies iOS placeholder lineHeight workaround when placeholder is visible and multiline is false', () => {
    const { getByTestId } = render(
      <Input
        testID={TEST_ID}
        value=""
        placeholder="Disabled"
        multiline={false}
      />,
    );
    const input = getByTestId(TEST_ID);
    const lineHeight = getStyleProp(input.props.style, 'lineHeight');
    expect(Platform.OS === 'ios' ? lineHeight === 0 : lineHeight !== 0).toBe(
      true,
    );
  });

  it('when multiline is true, does not apply lineHeight zero for visible placeholder on iOS', () => {
    const { getByTestId } = render(
      <Input testID={TEST_ID} value="" multiline placeholder="Placeholder" />,
    );
    const input = getByTestId(TEST_ID);
    const lineHeight = getStyleProp(input.props.style, 'lineHeight');
    if (Platform.OS === 'ios') {
      expect(lineHeight).not.toBe(0);
    }
  });

  it('when multiline is true, resolved style includes non-zero lineHeight for BodyMd', () => {
    const { getByTestId } = render(
      <Input testID={TEST_ID} value="" multiline placeholder="p" />,
    );
    const input = getByTestId(TEST_ID);
    const lineHeight = getStyleProp(input.props.style, 'lineHeight');
    expect(lineHeight).toBeDefined();
    expect(lineHeight).not.toBe(0);
    const expectedParagraphLineHeight = (tw.style('text-body-md') as TextStyle)
      .lineHeight;
    expect(lineHeight).toBe(expectedParagraphLineHeight);
  });

  it('removes placeholder lineHeight workaround after value changes from empty to non-empty', () => {
    const { getByTestId, rerender } = render(
      <Input testID={TEST_ID} value="" placeholder="Transition" />,
    );
    rerender(<Input testID={TEST_ID} value="A" placeholder="Transition" />);
    const input = getByTestId(TEST_ID);
    expect(getStyleProp(input.props.style, 'lineHeight')).not.toBe(0);
  });

  it('handles multiline placeholder-to-text transitions without persisting lineHeight', () => {
    const { getByTestId, rerender } = render(
      <Input testID={TEST_ID} value="" placeholder="Multiline" multiline />,
    );
    rerender(
      <Input testID={TEST_ID} value="A" placeholder="Multiline" multiline />,
    );
    const input = getByTestId(TEST_ID);
    expect(getStyleProp(input.props.style, 'lineHeight')).not.toBe(0);
  });

  it('does not apply state styles when isStateStylesDisabled is true', () => {
    const { getByTestId } = render(
      <Input
        value=""
        testID={TEST_ID}
        isDisabled
        isStateStylesDisabled
        placeholder="Disabled"
      />,
    );
    const input = getByTestId(TEST_ID);
    expect(input.props.editable).toBe(false);
    const styles = flattenStyle(input.props.style);
    expect(styles).not.toContainEqual(
      expect.objectContaining({ opacity: 0.5 }),
    );
  });

  it('calls onBlur when input loses focus', () => {
    const onBlur = jest.fn();
    const { getByTestId } = render(
      <Input value="" testID={TEST_ID} onBlur={onBlur} />,
    );
    const input = getByTestId(TEST_ID);
    fireEvent(input, 'focus');
    fireEvent(input, 'blur');
    expect(onBlur).toHaveBeenCalled();
  });

  it('calls onFocus when input receives focus', () => {
    const onFocus = jest.fn();
    const { getByTestId } = render(
      <Input value="" testID={TEST_ID} onFocus={onFocus} />,
    );
    const input = getByTestId(TEST_ID);
    fireEvent(input, 'focus');
    expect(onFocus).toHaveBeenCalled();
  });

  it('defaults autoFocus to false so focus is not stolen on mount', () => {
    const { getByTestId } = render(<Input value="" testID={TEST_ID} />);
    const input = getByTestId(TEST_ID);
    expect(input.props.autoFocus).toBe(false);
  });

  it('respects autoFocus when set to true', () => {
    const { getByTestId } = render(
      <Input value="" testID={TEST_ID} autoFocus />,
    );
    const input = getByTestId(TEST_ID);
    expect(input.props.autoFocus).toBe(true);
  });

  it('uses dark theme placeholder color when ThemeProvider has theme dark', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={Theme.Dark}>
        <Input value="" testID={TEST_ID} placeholder="Dark theme" />
      </ThemeProvider>,
    );
    const input = getByTestId(TEST_ID);
    expect(input.props.placeholderTextColor).toBe(
      darkTheme.colors.text.alternative,
    );
  });

  it('does not call onBlur when disabled and blur fires', () => {
    const onBlur = jest.fn();
    const { getByTestId } = render(
      <Input value="" testID={TEST_ID} isDisabled onBlur={onBlur} />,
    );
    const input = getByTestId(TEST_ID);
    fireEvent(input, 'focus');
    fireEvent(input, 'blur');
    expect(onBlur).not.toHaveBeenCalled();
  });

  it('does not call onFocus when disabled and focus fires', () => {
    const onFocus = jest.fn();
    const { getByTestId } = render(
      <Input value="" testID={TEST_ID} isDisabled onFocus={onFocus} />,
    );
    const input = getByTestId(TEST_ID);
    fireEvent(input, 'focus');
    expect(onFocus).not.toHaveBeenCalled();
  });

  it('invokes onBlur with event when not disabled', () => {
    const onBlur = jest.fn();
    const { getByTestId } = render(
      <Input value="" testID={TEST_ID} onBlur={onBlur} />,
    );
    const input = getByTestId(TEST_ID);
    fireEvent(input, 'focus');
    fireEvent(input, 'blur', { nativeEvent: {} });
    expect(onBlur).toHaveBeenCalledTimes(1);
    expect(onBlur).toHaveBeenCalledWith(
      expect.objectContaining({ nativeEvent: {} }),
    );
  });

  it('invokes onFocus with event when not disabled', () => {
    const onFocus = jest.fn();
    const { getByTestId } = render(
      <Input value="" testID={TEST_ID} onFocus={onFocus} />,
    );
    const input = getByTestId(TEST_ID);
    fireEvent(input, 'focus', { nativeEvent: {} });
    expect(onFocus).toHaveBeenCalledTimes(1);
    expect(onFocus).toHaveBeenCalledWith(
      expect.objectContaining({ nativeEvent: {} }),
    );
  });

  it('calls onBlur handler when TextInput onBlur prop is invoked', () => {
    const onBlur = jest.fn();
    const { getByTestId } = render(
      <Input value="" testID={TEST_ID} onBlur={onBlur} />,
    );
    const input = getByTestId(TEST_ID);
    const blurEvent = { nativeEvent: { text: '' } };
    act(() => {
      input.props.onBlur(blurEvent);
    });
    expect(onBlur).toHaveBeenCalledWith(blurEvent);
  });

  it('calls onFocus handler when TextInput onFocus prop is invoked', () => {
    const onFocus = jest.fn();
    const { getByTestId } = render(
      <Input value="" testID={TEST_ID} onFocus={onFocus} />,
    );
    const input = getByTestId(TEST_ID);
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
        <Input value="" testID={TEST_ID} onBlur={onBlur} onFocus={onFocus} />
      </ThemeProvider>,
    );
    const input = tree.root.findByProps({ testID: TEST_ID });
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
        <Input value="" testID={TEST_ID} />
      </ThemeProvider>,
    );
    const input = tree.root.findByType(TextInput);
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
