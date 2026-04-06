import {
  Theme,
  ThemeProvider,
  useTailwind,
} from '@metamask/design-system-twrnc-preset';
import { darkTheme } from '@metamask/design-tokens';
import { renderHook } from '@testing-library/react-hooks';
import { act, render, fireEvent } from '@testing-library/react-native';
import React from 'react';
import { TextInput } from 'react-native';
import type { StyleProp, TextStyle } from 'react-native';
import { create } from 'react-test-renderer';

import { TextVariant } from '../../types';

import { Textarea } from './Textarea';

const TEST_ID = 'textarea';

function flattenStyle(style: StyleProp<TextStyle>): TextStyle[] {
  if (style === null || style === undefined) {
    return [];
  }
  if (Array.isArray(style)) {
    return style.flatMap((s) => flattenStyle(s as StyleProp<TextStyle>));
  }
  return [style as TextStyle];
}

describe('Textarea', () => {
  const tw = renderHook(() => useTailwind()).result.current;

  it('renders with multiline enabled', () => {
    const { getByTestId } = render(<Textarea testID={TEST_ID} value="" />);
    const textarea = getByTestId(TEST_ID);
    expect(textarea).toBeOnTheScreen();
    expect(textarea.props.multiline).toBe(true);
  });

  it('sets textAlignVertical to top', () => {
    const { getByTestId } = render(<Textarea testID={TEST_ID} value="" />);
    const textarea = getByTestId(TEST_ID);
    expect(textarea.props.textAlignVertical).toBe('top');
  });

  it('renders with the correct default numberOfLines', () => {
    const { getByTestId } = render(<Textarea testID={TEST_ID} value="" />);
    const textarea = getByTestId(TEST_ID);
    expect(textarea.props.numberOfLines).toBe(4);
  });

  it('renders with a custom numberOfLines', () => {
    const { getByTestId } = render(
      <Textarea testID={TEST_ID} value="" numberOfLines={8} />,
    );
    const textarea = getByTestId(TEST_ID);
    expect(textarea.props.numberOfLines).toBe(8);
  });

  it('renders with the correct TextVariant', () => {
    const { getByTestId } = render(
      <Textarea
        testID={TEST_ID}
        textVariant={TextVariant.HeadingSm}
        value="Sample"
      />,
    );
    const textarea = getByTestId(TEST_ID);
    expect(textarea).toBeDefined();
    const styles = flattenStyle(textarea.props.style);
    const expectedFontSize = (tw.style('text-heading-sm') as TextStyle)
      .fontSize;
    expect(styles).toContainEqual(
      expect.objectContaining({ fontSize: expectedFontSize }),
    );
  });

  it('renders correct disabled state when isDisabled is true', () => {
    const { getByTestId } = render(
      <Textarea value="" testID={TEST_ID} isDisabled placeholder="Disabled" />,
    );
    const textarea = getByTestId(TEST_ID);
    expect(textarea.props.editable).toBe(false);
    const styles = flattenStyle(textarea.props.style);
    expect(styles).toContainEqual(
      expect.objectContaining({ opacity: tw`opacity-50`.opacity }),
    );
  });

  it('renders correct readonly state when isReadOnly is true', () => {
    const { getByTestId } = render(
      <Textarea value="Read-only content" testID={TEST_ID} isReadOnly />,
    );
    const textarea = getByTestId(TEST_ID);
    expect(textarea.props.editable).toBe(false);
  });

  it('applies error border when isError is true', () => {
    const { getByTestId } = render(
      <Textarea value="" testID={TEST_ID} isError />,
    );
    const textarea = getByTestId(TEST_ID);
    const styles = flattenStyle(textarea.props.style);
    const expectedBorderColor = (tw.style('border-error-default') as TextStyle)
      .borderColor;
    expect(styles).toContainEqual(
      expect.objectContaining({ borderColor: expectedBorderColor }),
    );
  });

  it('maintains error border when focused and isError is true', () => {
    const { getByTestId } = render(
      <Textarea value="" testID={TEST_ID} isError />,
    );
    const textarea = getByTestId(TEST_ID);
    fireEvent(textarea, 'focus');
    const styles = flattenStyle(textarea.props.style);
    const expectedBorderColor = (tw.style('border-error-default') as TextStyle)
      .borderColor;
    expect(styles).toContainEqual(
      expect.objectContaining({ borderColor: expectedBorderColor }),
    );
  });

  it('does not apply state styles when isStateStylesDisabled is true', () => {
    const { getByTestId } = render(
      <Textarea
        value=""
        testID={TEST_ID}
        isDisabled
        isStateStylesDisabled
        placeholder="Disabled"
      />,
    );
    const textarea = getByTestId(TEST_ID);
    expect(textarea.props.editable).toBe(false);
    const styles = flattenStyle(textarea.props.style);
    expect(styles).not.toContainEqual(
      expect.objectContaining({ opacity: 0.5 }),
    );
  });

  it('calls onBlur when input loses focus', () => {
    const onBlur = jest.fn();
    const { getByTestId } = render(
      <Textarea value="" testID={TEST_ID} onBlur={onBlur} />,
    );
    const textarea = getByTestId(TEST_ID);
    fireEvent(textarea, 'focus');
    fireEvent(textarea, 'blur');
    expect(onBlur).toHaveBeenCalled();
  });

  it('calls onFocus when input receives focus', () => {
    const onFocus = jest.fn();
    const { getByTestId } = render(
      <Textarea value="" testID={TEST_ID} onFocus={onFocus} />,
    );
    const textarea = getByTestId(TEST_ID);
    fireEvent(textarea, 'focus');
    expect(onFocus).toHaveBeenCalled();
  });

  it('defaults autoFocus to false', () => {
    const { getByTestId } = render(<Textarea value="" testID={TEST_ID} />);
    const textarea = getByTestId(TEST_ID);
    expect(textarea.props.autoFocus).toBe(false);
  });

  it('respects autoFocus when set to true', () => {
    const { getByTestId } = render(
      <Textarea value="" testID={TEST_ID} autoFocus />,
    );
    const textarea = getByTestId(TEST_ID);
    expect(textarea.props.autoFocus).toBe(true);
  });

  it('uses dark theme placeholder color when ThemeProvider has theme dark', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={Theme.Dark}>
        <Textarea value="" testID={TEST_ID} placeholder="Dark theme" />
      </ThemeProvider>,
    );
    const textarea = getByTestId(TEST_ID);
    expect(textarea.props.placeholderTextColor).toBe(
      darkTheme.colors.text.alternative,
    );
  });

  it('does not call onBlur when disabled and blur fires', () => {
    const onBlur = jest.fn();
    const { getByTestId } = render(
      <Textarea value="" testID={TEST_ID} isDisabled onBlur={onBlur} />,
    );
    const textarea = getByTestId(TEST_ID);
    fireEvent(textarea, 'focus');
    fireEvent(textarea, 'blur');
    expect(onBlur).not.toHaveBeenCalled();
  });

  it('does not call onFocus when disabled and focus fires', () => {
    const onFocus = jest.fn();
    const { getByTestId } = render(
      <Textarea value="" testID={TEST_ID} isDisabled onFocus={onFocus} />,
    );
    const textarea = getByTestId(TEST_ID);
    fireEvent(textarea, 'focus');
    expect(onFocus).not.toHaveBeenCalled();
  });

  it('invokes onBlur with event when not disabled', () => {
    const onBlur = jest.fn();
    const { getByTestId } = render(
      <Textarea value="" testID={TEST_ID} onBlur={onBlur} />,
    );
    const textarea = getByTestId(TEST_ID);
    fireEvent(textarea, 'focus');
    fireEvent(textarea, 'blur', { nativeEvent: {} });
    expect(onBlur).toHaveBeenCalledTimes(1);
    expect(onBlur).toHaveBeenCalledWith(
      expect.objectContaining({ nativeEvent: {} }),
    );
  });

  it('invokes onFocus with event when not disabled', () => {
    const onFocus = jest.fn();
    const { getByTestId } = render(
      <Textarea value="" testID={TEST_ID} onFocus={onFocus} />,
    );
    const textarea = getByTestId(TEST_ID);
    fireEvent(textarea, 'focus', { nativeEvent: {} });
    expect(onFocus).toHaveBeenCalledTimes(1);
    expect(onFocus).toHaveBeenCalledWith(
      expect.objectContaining({ nativeEvent: {} }),
    );
  });

  it('calls onBlur handler when TextInput onBlur prop is invoked', () => {
    const onBlur = jest.fn();
    const { getByTestId } = render(
      <Textarea value="" testID={TEST_ID} onBlur={onBlur} />,
    );
    const textarea = getByTestId(TEST_ID);
    const blurEvent = { nativeEvent: { text: '' } };
    act(() => {
      textarea.props.onBlur(blurEvent);
    });
    expect(onBlur).toHaveBeenCalledWith(blurEvent);
  });

  it('calls onFocus handler when TextInput onFocus prop is invoked', () => {
    const onFocus = jest.fn();
    const { getByTestId } = render(
      <Textarea value="" testID={TEST_ID} onFocus={onFocus} />,
    );
    const textarea = getByTestId(TEST_ID);
    const focusEvent = { nativeEvent: { text: '' } };
    act(() => {
      textarea.props.onFocus(focusEvent);
    });
    expect(onFocus).toHaveBeenCalledWith(focusEvent);
  });

  it('onBlurHandler and onFocusHandler run when invoked via test renderer', () => {
    const onBlur = jest.fn();
    const onFocus = jest.fn();
    const tree = create(
      <ThemeProvider theme={Theme.Light}>
        <Textarea value="" testID={TEST_ID} onBlur={onBlur} onFocus={onFocus} />
      </ThemeProvider>,
    );
    const textarea = tree.root.findByProps({ testID: TEST_ID });
    const blurEvent = { nativeEvent: { text: '' } };
    const focusEvent = { nativeEvent: { text: '' } };
    act(() => {
      textarea.props.onBlur(blurEvent);
    });
    expect(onBlur).toHaveBeenCalledWith(blurEvent);
    act(() => {
      textarea.props.onFocus(focusEvent);
    });
    expect(onFocus).toHaveBeenCalledWith(focusEvent);
  });

  it('handlers run without callbacks (optional chaining branches)', () => {
    const tree = create(
      <ThemeProvider theme={Theme.Light}>
        <Textarea value="" testID={TEST_ID} />
      </ThemeProvider>,
    );
    const textarea = tree.root.findByType(TextInput);
    const event = { nativeEvent: { text: '' } };
    act(() => {
      textarea.props.onBlur(event);
    });
    act(() => {
      textarea.props.onFocus(event);
    });
    expect(textarea.props.onBlur).toBeDefined();
    expect(textarea.props.onFocus).toBeDefined();
  });
});
