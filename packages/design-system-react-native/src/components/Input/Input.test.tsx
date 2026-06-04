import { TextVariant } from '@metamask/design-system-shared';
import {
  Theme,
  ThemeProvider,
  useTailwind,
} from '@metamask/design-system-twrnc-preset';
import { darkTheme } from '@metamask/design-tokens';
import { fireEvent, render, renderHook } from '@testing-library/react-native';
import React from 'react';
import { Platform } from 'react-native';
import type { TextStyle } from 'react-native';

import { Input } from './Input';

const TEST_ID = 'input';

describe('Input', () => {
  let tw: ReturnType<typeof useTailwind>;

  beforeAll(async () => {
    const { result } = await renderHook(() => useTailwind());
    tw = result.current;
  });

  it('renders with the correct TextVariant', async () => {
    const { getByTestId } = await render(
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

  it('renders correct disabled state when isDisabled is true', async () => {
    const { getByTestId } = await render(
      <Input value="" testID={TEST_ID} isDisabled placeholder="Disabled" />,
    );

    const input = getByTestId(TEST_ID);

    expect(input).toBeDisabled();
    const expectedOpacity = (tw.style('opacity-50') as TextStyle).opacity;
    expect(input).toHaveStyle({ opacity: expectedOpacity });
  });

  describe('iOS placeholder lineHeight workaround', () => {
    const originalOS = Platform.OS;

    afterEach(() => {
      Platform.OS = originalOS;
    });

    it('applies iOS placeholder lineHeight workaround when placeholder is visible and multiline is false', async () => {
      Platform.OS = 'ios';

      const { getByTestId } = await render(
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

    it('does not apply placeholder lineHeight workaround outside iOS', async () => {
      Platform.OS = 'android';

      const { getByTestId } = await render(
        <Input testID={TEST_ID} value="" placeholder="Disabled" />,
      );

      const input = getByTestId(TEST_ID);

      expect(input).not.toHaveStyle({ lineHeight: 0 });
    });
  });

  it('when multiline is true, does not apply lineHeight zero for visible placeholder', async () => {
    const { getByTestId } = await render(
      <Input testID={TEST_ID} value="" multiline placeholder="Placeholder" />,
    );

    const input = getByTestId(TEST_ID);

    expect(input).not.toHaveStyle({ lineHeight: 0 });
  });

  it('when multiline is true, applies BodyMd paragraph lineHeight', async () => {
    const { getByTestId } = await render(
      <Input testID={TEST_ID} value="" multiline placeholder="p" />,
    );

    const input = getByTestId(TEST_ID);
    const expectedLineHeight = (tw.style('text-body-md') as TextStyle)
      .lineHeight;

    expect(input).toHaveStyle({ lineHeight: expectedLineHeight });
  });

  it('removes placeholder lineHeight workaround after value changes from empty to non-empty', async () => {
    const { getByTestId, rerender } = await render(
      <Input testID={TEST_ID} value="" placeholder="Transition" />,
    );

    await rerender(
      <Input testID={TEST_ID} value="A" placeholder="Transition" />,
    );

    const input = getByTestId(TEST_ID);

    expect(input).not.toHaveStyle({ lineHeight: 0 });
  });

  it('handles multiline placeholder-to-text transitions without persisting lineHeight', async () => {
    const { getByTestId, rerender } = await render(
      <Input testID={TEST_ID} value="" placeholder="Multiline" multiline />,
    );

    await rerender(
      <Input testID={TEST_ID} value="A" placeholder="Multiline" multiline />,
    );

    const input = getByTestId(TEST_ID);

    expect(input).not.toHaveStyle({ lineHeight: 0 });
  });

  it('does not apply state styles when isStateStylesDisabled is true', async () => {
    const { getByTestId } = await render(
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

  it('calls onBlur when input loses focus', async () => {
    const onBlur = jest.fn();
    const { getByTestId } = await render(
      <Input value="" testID={TEST_ID} onBlur={onBlur} />,
    );

    const input = getByTestId(TEST_ID);

    await fireEvent(input, 'focus');
    await fireEvent(input, 'blur');

    expect(onBlur).toHaveBeenCalled();
  });

  it('calls onFocus when input receives focus', async () => {
    const onFocus = jest.fn();
    const { getByTestId } = await render(
      <Input value="" testID={TEST_ID} onFocus={onFocus} />,
    );

    const input = getByTestId(TEST_ID);

    await fireEvent(input, 'focus');

    expect(onFocus).toHaveBeenCalled();
  });

  it('does not apply focused state styles on mount when autoFocus is false', async () => {
    const { getByTestId } = await render(<Input value="" testID={TEST_ID} />);

    const input = getByTestId(TEST_ID);

    expect(input).toHaveStyle(tw`border-transparent`);
    expect(input).not.toHaveStyle(tw`border-primary-default`);
  });

  it('applies focused state styles on mount when autoFocus is true', async () => {
    const { getByTestId } = await render(
      <Input value="" testID={TEST_ID} autoFocus />,
    );

    const input = getByTestId(TEST_ID);

    expect(input).toHaveStyle(tw`border-primary-default`);
  });

  it('clears focused state when input becomes disabled', async () => {
    const { getByTestId, rerender } = await render(
      <Input value="" testID={TEST_ID} placeholder="Focus me" />,
    );

    const input = getByTestId(TEST_ID);

    await fireEvent(input, 'focus');
    expect(input).toHaveStyle(tw`border-primary-default`);

    await rerender(
      <Input value="" testID={TEST_ID} isDisabled placeholder="Focus me" />,
    );

    expect(input).not.toHaveStyle(tw`border-primary-default`);
  });

  it('uses dark theme placeholder color when ThemeProvider has theme dark', async () => {
    const { getByTestId } = await render(
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

  it('does not call onBlur when disabled and blur fires', async () => {
    const onBlur = jest.fn();
    const { getByTestId } = await render(
      <Input value="" testID={TEST_ID} isDisabled onBlur={onBlur} />,
    );

    const input = getByTestId(TEST_ID);

    await fireEvent(input, 'focus');
    await fireEvent(input, 'blur');

    expect(onBlur).not.toHaveBeenCalled();
  });

  it('does not call onFocus when disabled and focus fires', async () => {
    const onFocus = jest.fn();
    const { getByTestId } = await render(
      <Input value="" testID={TEST_ID} isDisabled onFocus={onFocus} />,
    );

    const input = getByTestId(TEST_ID);

    await fireEvent(input, 'focus');

    expect(onFocus).not.toHaveBeenCalled();
  });

  it('invokes onBlur with event when not disabled', async () => {
    const onBlur = jest.fn();
    const { getByTestId } = await render(
      <Input value="" testID={TEST_ID} onBlur={onBlur} />,
    );

    const input = getByTestId(TEST_ID);

    await fireEvent(input, 'focus');
    await fireEvent(input, 'blur', { nativeEvent: {} });

    expect(onBlur).toHaveBeenCalledTimes(1);
    expect(onBlur).toHaveBeenCalledWith(
      expect.objectContaining({ nativeEvent: {} }),
    );
  });

  it('invokes onFocus with event when not disabled', async () => {
    const onFocus = jest.fn();
    const { getByTestId } = await render(
      <Input value="" testID={TEST_ID} onFocus={onFocus} />,
    );

    const input = getByTestId(TEST_ID);

    await fireEvent(input, 'focus', { nativeEvent: {} });

    expect(onFocus).toHaveBeenCalledTimes(1);
    expect(onFocus).toHaveBeenCalledWith(
      expect.objectContaining({ nativeEvent: {} }),
    );
  });

  it('does not throw when focus and blur fire without callbacks', async () => {
    const { getByTestId } = await render(<Input value="" testID={TEST_ID} />);

    const input = getByTestId(TEST_ID);

    await fireEvent(input, 'focus');
    await fireEvent(input, 'blur');

    expect(input).toBeOnTheScreen();
  });
});
