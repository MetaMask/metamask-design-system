import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { renderHook } from '@testing-library/react-hooks';
import { render, fireEvent } from '@testing-library/react-native';
import React, { createRef } from 'react';
import { TextInput, View } from 'react-native';
import type { StyleProp, ViewStyle } from 'react-native';
import { act, create } from 'react-test-renderer';

import { Input } from '../Input';

import { TextField } from './TextField';
import { TWCLASSMAP_TEXTFIELD_SIZE } from './TextField.constants';
import { TextFieldSize } from './TextField.types';

const ROOT_TEST_ID = 'textfield';

function flattenStyle(style: StyleProp<ViewStyle>): ViewStyle[] {
  if (style === null || style === undefined) {
    return [];
  }
  if (Array.isArray(style)) {
    return style.flatMap((s) => flattenStyle(s as StyleProp<ViewStyle>));
  }
  return [style as ViewStyle];
}

describe('TextField', () => {
  const tw = renderHook(() => useTailwind()).result.current;

  // ── Rendering ──────────────────────────────────────────────────────

  it('renders with default props', () => {
    const { getByTestId } = render(
      <TextField testID={ROOT_TEST_ID} placeholder="Enter text" />,
    );
    expect(getByTestId(ROOT_TEST_ID)).toBeDefined();
  });

  it('passes testID to the root element', () => {
    const { getByTestId } = render(<TextField testID="custom-test-id" />);
    expect(getByTestId('custom-test-id')).toBeDefined();
  });

  it('renders custom inputElement when provided', () => {
    const { getByTestId } = render(
      <TextField
        testID={ROOT_TEST_ID}
        inputElement={<View testID="custom-input" />}
      />,
    );
    expect(getByTestId('custom-input')).toBeDefined();
  });

  it('forwards props to the inner Input', () => {
    const { getByPlaceholderText } = render(
      <TextField placeholder="forwarded-placeholder" />,
    );
    expect(getByPlaceholderText('forwarded-placeholder')).toBeDefined();
  });

  // ── Ref forwarding ────────────────────────────────────────────────

  it('exposes TextInput ref via forwardRef', () => {
    const ref = createRef<TextInput>();
    render(<TextField ref={ref} placeholder="ref-test" />);
    expect(ref.current).toBeDefined();
    expect(ref.current).toBeInstanceOf(TextInput);
  });

  it('allows calling focus() via the forwarded ref', () => {
    const ref = createRef<TextInput>();
    render(<TextField ref={ref} placeholder="ref-focus" />);
    // Should not throw
    expect(() => ref.current?.focus()).not.toThrow();
  });

  // ── Size ───────────────────────────────────────────────────────────

  it('applies the correct size class for each TextFieldSize', () => {
    for (const size of Object.values(TextFieldSize)) {
      const { getByTestId, unmount } = render(
        <TextField testID={ROOT_TEST_ID} size={size} />,
      );
      const root = getByTestId(ROOT_TEST_ID);
      const styles = flattenStyle(root.props.style);
      const expectedHeight = (
        tw.style(TWCLASSMAP_TEXTFIELD_SIZE[size]) as ViewStyle
      ).height;
      expect(styles).toContainEqual(
        expect.objectContaining({ height: expectedHeight }),
      );
      unmount();
    }
  });

  it('defaults to TextFieldSize.Md when no size is provided', () => {
    const { getByTestId } = render(<TextField testID={ROOT_TEST_ID} />);
    const root = getByTestId(ROOT_TEST_ID);
    const styles = flattenStyle(root.props.style);
    const expectedHeight = (
      tw.style(TWCLASSMAP_TEXTFIELD_SIZE[TextFieldSize.Md]) as ViewStyle
    ).height;
    expect(styles).toContainEqual(
      expect.objectContaining({ height: expectedHeight }),
    );
  });

  // ── Error state ────────────────────────────────────────────────────

  it('shows error border when isError is true', () => {
    const { getByTestId } = render(<TextField testID={ROOT_TEST_ID} isError />);
    const root = getByTestId(ROOT_TEST_ID);
    const styles = flattenStyle(root.props.style);
    const errorBorder = tw.style('border-error-default') as ViewStyle;
    expect(styles).toContainEqual(
      expect.objectContaining({ borderColor: errorBorder.borderColor }),
    );
  });

  it('shows focus border over error border when focused and isError', () => {
    const { getByTestId, getByPlaceholderText } = render(
      <TextField testID={ROOT_TEST_ID} isError placeholder="error-focus" />,
    );
    fireEvent(getByPlaceholderText('error-focus'), 'focus');
    const root = getByTestId(ROOT_TEST_ID);
    const styles = flattenStyle(root.props.style);
    const focusBorder = tw.style('border-primary-default') as ViewStyle;
    expect(styles).toContainEqual(
      expect.objectContaining({ borderColor: focusBorder.borderColor }),
    );
  });

  // ── Disabled state ─────────────────────────────────────────────────

  it('applies opacity when isDisabled is true', () => {
    const { getByTestId } = render(
      <TextField testID={ROOT_TEST_ID} isDisabled />,
    );
    const root = getByTestId(ROOT_TEST_ID);
    const styles = flattenStyle(root.props.style);
    expect(styles).toContainEqual(
      expect.objectContaining({ opacity: tw`opacity-50`.opacity }),
    );
  });

  it('does not apply opacity when isDisabled is false', () => {
    const { getByTestId } = render(<TextField testID={ROOT_TEST_ID} />);
    const root = getByTestId(ROOT_TEST_ID);
    const styles = flattenStyle(root.props.style);
    const hasOpacity50 = styles.some(
      (s) => s.opacity === tw`opacity-50`.opacity,
    );
    expect(hasOpacity50).toBe(false);
  });

  it('does not show focus border when disabled even if isFocused is true', () => {
    const { getByTestId } = render(
      <TextField testID={ROOT_TEST_ID} isDisabled autoFocus />,
    );
    const root = getByTestId(ROOT_TEST_ID);
    const styles = flattenStyle(root.props.style);
    const focusBorder = tw.style('border-primary-default') as ViewStyle;
    const hasFocusBorder = styles.some(
      (s) => s.borderColor === focusBorder.borderColor,
    );
    expect(hasFocusBorder).toBe(false);
  });

  // ── Accessories ────────────────────────────────────────────────────

  it('renders startAccessory when provided', () => {
    const { getByTestId } = render(
      <TextField
        testID={ROOT_TEST_ID}
        startAccessory={<View testID="start-accessory" />}
      />,
    );
    expect(getByTestId('start-accessory')).toBeDefined();
  });

  it('renders endAccessory when provided', () => {
    const { getByTestId } = render(
      <TextField
        testID={ROOT_TEST_ID}
        endAccessory={<View testID="end-accessory" />}
      />,
    );
    expect(getByTestId('end-accessory')).toBeDefined();
  });

  it('does not render accessories when not provided', () => {
    const { queryByTestId } = render(<TextField testID={ROOT_TEST_ID} />);
    expect(queryByTestId('start-accessory')).toBeNull();
    expect(queryByTestId('end-accessory')).toBeNull();
  });

  // ── Focus / Blur handlers ─────────────────────────────────────────

  it('calls onFocus when input receives focus', () => {
    const onFocus = jest.fn();
    const { getByPlaceholderText } = render(
      <TextField placeholder="focus-test" onFocus={onFocus} />,
    );
    fireEvent(getByPlaceholderText('focus-test'), 'focus');
    expect(onFocus).toHaveBeenCalledTimes(1);
  });

  it('calls onBlur when input loses focus', () => {
    const onBlur = jest.fn();
    const { getByPlaceholderText } = render(
      <TextField placeholder="blur-test" onBlur={onBlur} />,
    );
    fireEvent(getByPlaceholderText('blur-test'), 'focus');
    fireEvent(getByPlaceholderText('blur-test'), 'blur');
    expect(onBlur).toHaveBeenCalledTimes(1);
  });

  it('does not call onFocus when disabled', () => {
    const onFocus = jest.fn();
    const { getByPlaceholderText } = render(
      <TextField placeholder="disabled-focus" isDisabled onFocus={onFocus} />,
    );
    fireEvent(getByPlaceholderText('disabled-focus'), 'focus');
    expect(onFocus).not.toHaveBeenCalled();
  });

  it('does not call onBlur when disabled', () => {
    const onBlur = jest.fn();
    const { getByPlaceholderText } = render(
      <TextField placeholder="disabled-blur" isDisabled onBlur={onBlur} />,
    );
    fireEvent(getByPlaceholderText('disabled-blur'), 'focus');
    fireEvent(getByPlaceholderText('disabled-blur'), 'blur');
    expect(onBlur).not.toHaveBeenCalled();
  });

  it('passes event argument to onFocus callback', () => {
    const onFocus = jest.fn();
    const { getByPlaceholderText } = render(
      <TextField placeholder="event-focus" onFocus={onFocus} />,
    );
    fireEvent(getByPlaceholderText('event-focus'), 'focus', {
      nativeEvent: {},
    });
    expect(onFocus).toHaveBeenCalledWith(
      expect.objectContaining({ nativeEvent: {} }),
    );
  });

  it('passes event argument to onBlur callback', () => {
    const onBlur = jest.fn();
    const { getByPlaceholderText } = render(
      <TextField placeholder="event-blur" onBlur={onBlur} />,
    );
    fireEvent(getByPlaceholderText('event-blur'), 'focus');
    fireEvent(getByPlaceholderText('event-blur'), 'blur', {
      nativeEvent: {},
    });
    expect(onBlur).toHaveBeenCalledWith(
      expect.objectContaining({ nativeEvent: {} }),
    );
  });

  it('handles focus without onFocus callback (optional chaining)', () => {
    const { getByPlaceholderText } = render(
      <TextField placeholder="no-focus-cb" />,
    );
    // Should not throw when no onFocus is provided
    expect(() => {
      fireEvent(getByPlaceholderText('no-focus-cb'), 'focus');
    }).not.toThrow();
  });

  it('handles blur without onBlur callback (optional chaining)', () => {
    const { getByPlaceholderText } = render(
      <TextField placeholder="no-blur-cb" />,
    );
    // Should not throw when no onBlur is provided
    expect(() => {
      fireEvent(getByPlaceholderText('no-blur-cb'), 'focus');
      fireEvent(getByPlaceholderText('no-blur-cb'), 'blur');
    }).not.toThrow();
  });

  // ── Disabled handler branches (direct invocation) ──────────────────

  it('onBlurHandler is a no-op when isDisabled is true', () => {
    const onBlur = jest.fn();
    const tree = create(
      <TextField
        isDisabled
        onBlur={onBlur}
        placeholder="disabled-blur-direct"
      />,
    );
    const inputNode = tree.root.findByType(Input);
    // inputNode.props.onBlur IS TextField's onBlurHandler
    act(() => {
      inputNode.props.onBlur({ nativeEvent: {} });
    });
    expect(onBlur).not.toHaveBeenCalled();
  });

  it('onFocusHandler is a no-op when isDisabled is true', () => {
    const onFocus = jest.fn();
    const tree = create(
      <TextField
        isDisabled
        onFocus={onFocus}
        placeholder="disabled-focus-direct"
      />,
    );
    const inputNode = tree.root.findByType(Input);
    // inputNode.props.onFocus IS TextField's onFocusHandler
    act(() => {
      inputNode.props.onFocus({ nativeEvent: {} });
    });
    expect(onFocus).not.toHaveBeenCalled();
  });

  // ── Focus border styling ──────────────────────────────────────────

  it('applies focus border when focused', () => {
    const { getByTestId, getByPlaceholderText } = render(
      <TextField testID={ROOT_TEST_ID} placeholder="focus-border" />,
    );
    fireEvent(getByPlaceholderText('focus-border'), 'focus');
    const root = getByTestId(ROOT_TEST_ID);
    const styles = flattenStyle(root.props.style);
    const focusBorder = tw.style('border-primary-default') as ViewStyle;
    expect(styles).toContainEqual(
      expect.objectContaining({ borderColor: focusBorder.borderColor }),
    );
  });

  it('reverts to default border after blur', () => {
    const { getByTestId, getByPlaceholderText } = render(
      <TextField testID={ROOT_TEST_ID} placeholder="blur-border" />,
    );
    fireEvent(getByPlaceholderText('blur-border'), 'focus');
    fireEvent(getByPlaceholderText('blur-border'), 'blur');
    const root = getByTestId(ROOT_TEST_ID);
    const styles = flattenStyle(root.props.style);
    const defaultBorder = tw.style('border-default') as ViewStyle;
    expect(styles).toContainEqual(
      expect.objectContaining({ borderColor: defaultBorder.borderColor }),
    );
  });

  // ── autoFocus ──────────────────────────────────────────────────────

  it('starts with focus border when autoFocus is true', () => {
    const { getByTestId } = render(
      <TextField testID={ROOT_TEST_ID} autoFocus />,
    );
    const root = getByTestId(ROOT_TEST_ID);
    const styles = flattenStyle(root.props.style);
    const focusBorder = tw.style('border-primary-default') as ViewStyle;
    expect(styles).toContainEqual(
      expect.objectContaining({ borderColor: focusBorder.borderColor }),
    );
  });

  // ── onPress (tap-to-focus) ─────────────────────────────────────────

  it('focuses the input when the container is pressed', () => {
    const ref = createRef<TextInput>();
    const onFocus = jest.fn();
    const { getByTestId } = render(
      <TextField
        ref={ref}
        testID={ROOT_TEST_ID}
        placeholder="press-test"
        onFocus={onFocus}
      />,
    );
    expect(ref.current).not.toBeNull();
    const focusSpy = jest.spyOn(ref.current as TextInput, 'focus');
    fireEvent.press(getByTestId(ROOT_TEST_ID));
    expect(focusSpy).toHaveBeenCalled();
    focusSpy.mockRestore();
  });

  it('does not focus the input when pressed while disabled', () => {
    const ref = createRef<TextInput>();
    const { getByTestId } = render(
      <TextField
        ref={ref}
        testID={ROOT_TEST_ID}
        placeholder="disabled-press"
        isDisabled
      />,
    );
    expect(ref.current).not.toBeNull();
    const focusSpy = jest.spyOn(ref.current as TextInput, 'focus');
    fireEvent.press(getByTestId(ROOT_TEST_ID));
    expect(focusSpy).not.toHaveBeenCalled();
    focusSpy.mockRestore();
  });

  it('does not crash when pressed with custom inputElement (no inputRef)', () => {
    const { getByTestId } = render(
      <TextField
        testID={ROOT_TEST_ID}
        inputElement={<View testID="custom-input" />}
      />,
    );
    // Pressing should not throw even when inputRef.current is null
    expect(() => {
      fireEvent.press(getByTestId(ROOT_TEST_ID));
    }).not.toThrow();
  });

  // ── twClassName ────────────────────────────────────────────────────

  it('applies twClassName to the container', () => {
    const { getByTestId } = render(
      <TextField testID={ROOT_TEST_ID} twClassName="mt-4" />,
    );
    const root = getByTestId(ROOT_TEST_ID);
    const styles = flattenStyle(root.props.style);
    const expectedMargin = (tw.style('mt-4') as ViewStyle).marginTop;
    expect(styles).toContainEqual(
      expect.objectContaining({ marginTop: expectedMargin }),
    );
  });

  // ── style prop ─────────────────────────────────────────────────────

  it('merges custom style prop with container styles', () => {
    const customStyle = { marginBottom: 20 };
    const { getByTestId } = render(
      <TextField testID={ROOT_TEST_ID} style={customStyle} />,
    );
    const root = getByTestId(ROOT_TEST_ID);
    const styles = flattenStyle(root.props.style);
    expect(styles).toContainEqual(
      expect.objectContaining({ marginBottom: 20 }),
    );
  });

  // ── isReadonly forwarding ──────────────────────────────────────────

  it('forwards isReadonly to the inner Input', () => {
    const { getByPlaceholderText } = render(
      <TextField placeholder="readonly-test" isReadonly />,
    );
    const input = getByPlaceholderText('readonly-test');
    expect(input.props.editable).toBe(false);
  });
});
