import { TextVariant } from '@metamask/design-system-shared';
import {
  Theme,
  ThemeProvider,
  useTailwind,
} from '@metamask/design-system-twrnc-preset';
import { darkTheme } from '@metamask/design-tokens';
import { renderHook } from '@testing-library/react-hooks';
import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import { Platform } from 'react-native';
import type { TextStyle } from 'react-native';

import { Input } from './Input';

const TEST_ID = 'input';

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
    const expectedFontSize = (tw.style('text-heading-sm') as TextStyle)
      .fontSize;

    expect(input).toBeOnTheScreen();
    expect(input).toHaveStyle({ fontSize: expectedFontSize });
  });

  it('renders correct disabled state when isDisabled is true', () => {
    const { getByTestId } = render(
      <Input value="" testID={TEST_ID} isDisabled placeholder="Disabled" />,
    );

    const input = getByTestId(TEST_ID);

    expect(input).toBeDisabled();
    expect(input).toHaveStyle({ opacity: tw`opacity-50`.opacity });
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

    expect(input).toHaveStyle({ lineHeight: 0 });
  });

  it('does not apply placeholder lineHeight workaround outside iOS', () => {
    if (Platform.OS === 'ios') {
      return;
    }

    const { getByTestId } = render(
      <Input testID={TEST_ID} value="" placeholder="Disabled" />,
    );

    const input = getByTestId(TEST_ID);

    expect(input).not.toHaveStyle({ lineHeight: 0 });
  });

  it('when multiline is true, does not apply lineHeight zero for visible placeholder on iOS', () => {
    const { getByTestId } = render(
      <Input testID={TEST_ID} value="" multiline placeholder="Placeholder" />,
    );
    const input = getByTestId(TEST_ID);
    const lineHeight = getStyleProp(input.props.style, 'lineHeight');
    expect(Platform.OS === 'ios' ? lineHeight !== 0 : true).toBe(true);
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

    expect(input).not.toHaveStyle({ lineHeight: 0 });
  });

  it('handles multiline placeholder-to-text transitions without persisting lineHeight', () => {
    const { getByTestId, rerender } = render(
      <Input testID={TEST_ID} value="" placeholder="Multiline" multiline />,
    );

    rerender(
      <Input testID={TEST_ID} value="A" placeholder="Multiline" multiline />,
    );

    const input = getByTestId(TEST_ID);

    expect(input).not.toHaveStyle({ lineHeight: 0 });
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

    expect(input).toBeDisabled();
    expect(input).not.toHaveStyle({ opacity: 0.5 });
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

  it('does not apply focused state styles on mount when autoFocus is false', () => {
    const { getByTestId } = render(<Input value="" testID={TEST_ID} />);

    const input = getByTestId(TEST_ID);

    expect(input).toHaveStyle(tw`border-transparent`);
    expect(input).not.toHaveStyle(tw`border-primary-default`);
  });

  it('applies focused state styles on mount when autoFocus is true', () => {
    const { getByTestId } = render(
      <Input value="" testID={TEST_ID} autoFocus />,
    );

    const input = getByTestId(TEST_ID);

    expect(input).toHaveStyle(tw`border-primary-default`);
  });

  it('clears focused state when input becomes disabled', () => {
    const { getByTestId, rerender } = render(
      <Input value="" testID={TEST_ID} placeholder="Focus me" />,
    );

    const input = getByTestId(TEST_ID);

    fireEvent(input, 'focus');
    expect(input).toHaveStyle(tw`border-primary-default`);

    rerender(
      <Input value="" testID={TEST_ID} isDisabled placeholder="Focus me" />,
    );

    expect(input).not.toHaveStyle(tw`border-primary-default`);
  });

  it('uses dark theme placeholder color when ThemeProvider has theme dark', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={Theme.Dark}>
        <Input value="" testID={TEST_ID} placeholder="Dark theme" />
      </ThemeProvider>,
    );

    const input = getByTestId(TEST_ID);

    expect(input).toHaveProp(
      'placeholderTextColor',
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

  it('does not throw when focus and blur fire without callbacks', () => {
    const { getByTestId } = render(<Input value="" testID={TEST_ID} />);

    const input = getByTestId(TEST_ID);

    fireEvent(input, 'focus');
    fireEvent(input, 'blur');

    expect(input).toBeOnTheScreen();
  });
});
