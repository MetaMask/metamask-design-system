import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { fireEvent, render, renderHook } from '@testing-library/react-native';
import React, { createRef } from 'react';
import { TextInput, View } from 'react-native';

import { TextField } from './TextField';

const ROOT_TEST_ID = 'textfield';

describe('TextField', () => {
  let tw: ReturnType<typeof useTailwind>;

  beforeAll(async () => {
    const { result } = await renderHook(() => useTailwind());

    tw = result.current;
  });

  describe('rendering', () => {
    it('renders with default props', async () => {
      const { getByTestId } = await render(
        <TextField value="" testID={ROOT_TEST_ID} placeholder="Enter text" />,
      );

      expect(getByTestId(ROOT_TEST_ID)).toBeOnTheScreen();
    });

    it('passes testID to the root element', async () => {
      const { getByTestId } = await render(
        <TextField value="" testID="custom-test-id" />,
      );

      expect(getByTestId('custom-test-id')).toBeOnTheScreen();
    });

    it('renders custom inputElement when provided', async () => {
      const { getByTestId } = await render(
        <TextField
          value=""
          testID={ROOT_TEST_ID}
          inputElement={<View testID="custom-input" />}
        />,
      );

      expect(getByTestId('custom-input')).toBeOnTheScreen();
    });

    it('forwards inputProps to the inner Input', async () => {
      const { getByPlaceholderText } = await render(
        <TextField
          value=""
          placeholder="forwarded-placeholder"
          inputProps={{ keyboardType: 'number-pad' }}
        />,
      );

      expect(getByPlaceholderText('forwarded-placeholder')).toHaveProp(
        'keyboardType',
        'number-pad',
      );
    });
  });

  describe('single-line input', () => {
    it('sets numberOfLines to 1 on the inner input', async () => {
      const { getByPlaceholderText } = await render(
        <TextField
          value=""
          placeholder="single-line"
          inputProps={{
            multiline: true,
            numberOfLines: 4,
          }}
        />,
      );

      expect(getByPlaceholderText('single-line')).toHaveProp(
        'numberOfLines',
        1,
      );
    });

    it('sets multiline to false on the inner input', async () => {
      const { getByPlaceholderText } = await render(
        <TextField
          value=""
          placeholder="single-line"
          inputProps={{
            multiline: true,
            numberOfLines: 4,
          }}
        />,
      );

      expect(getByPlaceholderText('single-line')).toHaveProp(
        'multiline',
        false,
      );
    });
  });

  describe('onChangeText', () => {
    it('notifies when the text changes', async () => {
      const onChangeText = jest.fn();
      const { getByPlaceholderText } = await render(
        <TextField
          value="a"
          onChangeText={onChangeText}
          placeholder="change-me"
        />,
      );

      await fireEvent.changeText(getByPlaceholderText('change-me'), 'ab');

      expect(onChangeText).toHaveBeenCalledTimes(1);
      expect(onChangeText).toHaveBeenCalledWith('ab');
    });
  });

  describe('Input props', () => {
    it('forwards secureTextEntry to the inner Input', async () => {
      const { getByPlaceholderText } = await render(
        <TextField
          value=""
          placeholder="secure"
          inputProps={{ secureTextEntry: true }}
        />,
      );

      expect(getByPlaceholderText('secure')).toHaveProp(
        'secureTextEntry',
        true,
      );
    });

    it('forwards isReadOnly to the inner Input', async () => {
      const { getByPlaceholderText } = await render(
        <TextField value="" placeholder="readonly-test" isReadOnly />,
      );

      expect(getByPlaceholderText('readonly-test')).toHaveProp(
        'editable',
        false,
      );
    });
  });

  describe('ref', () => {
    it('exposes the root View ref via forwardRef', async () => {
      const ref = createRef<View>();
      await render(
        <TextField
          value=""
          ref={ref}
          testID={ROOT_TEST_ID}
          placeholder="ref-test"
        />,
      );

      expect(ref.current).not.toBeNull();
      expect(ref.current).toBeInstanceOf(View);
    });

    it('exposes the inner TextInput via inputRef', async () => {
      const inputRef = createRef<TextInput>();
      await render(
        <TextField value="" inputRef={inputRef} placeholder="ref-test" />,
      );

      expect(inputRef.current).not.toBeNull();
      expect(inputRef.current).toBeInstanceOf(TextInput);
    });

    it('allows calling focus() via inputRef', async () => {
      const inputRef = createRef<TextInput>();
      await render(
        <TextField value="" inputRef={inputRef} placeholder="ref-focus" />,
      );

      expect(() => inputRef.current?.focus()).not.toThrow();
    });
  });

  describe('container styles', () => {
    it('applies fixed 48px row height', async () => {
      const { getByTestId } = await render(
        <TextField value="" testID={ROOT_TEST_ID} />,
      );

      expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(tw`h-12`);
    });

    it('shows error border when isError is true', async () => {
      const { getByTestId } = await render(
        <TextField value="" testID={ROOT_TEST_ID} isError />,
      );

      expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(tw`border-error-default`);
    });

    it('keeps error border when focused and isError', async () => {
      const { getByTestId, getByPlaceholderText } = await render(
        <TextField
          value=""
          testID={ROOT_TEST_ID}
          isError
          placeholder="error-focus"
        />,
      );

      await fireEvent(getByPlaceholderText('error-focus'), 'focus');

      expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(tw`border-error-default`);
    });

    it('applies opacity when isDisabled is true', async () => {
      const { getByTestId } = await render(
        <TextField value="" testID={ROOT_TEST_ID} isDisabled />,
      );

      expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(tw`opacity-50`);
    });

    it('omits disabled opacity when isDisabled is false', async () => {
      const { getByTestId } = await render(
        <TextField value="" testID={ROOT_TEST_ID} />,
      );

      expect(getByTestId(ROOT_TEST_ID)).not.toHaveStyle(tw`opacity-50`);
    });

    it('uses muted border when disabled even if autoFocus is true', async () => {
      const { getByTestId } = await render(
        <TextField value="" testID={ROOT_TEST_ID} isDisabled autoFocus />,
      );

      expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(tw`border-muted`);
      expect(getByTestId(ROOT_TEST_ID)).not.toHaveStyle(tw`border-default`);
    });

    it('applies focus border when focused', async () => {
      const { getByTestId, getByPlaceholderText } = await render(
        <TextField value="" testID={ROOT_TEST_ID} placeholder="focus-border" />,
      );

      await fireEvent(getByPlaceholderText('focus-border'), 'focus');

      expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(tw`border-default`);
    });

    it('reverts to muted resting border after blur', async () => {
      const { getByTestId, getByPlaceholderText } = await render(
        <TextField value="" testID={ROOT_TEST_ID} placeholder="blur-border" />,
      );

      await fireEvent(getByPlaceholderText('blur-border'), 'focus');
      await fireEvent(getByPlaceholderText('blur-border'), 'blur');

      expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(tw`border-muted`);
    });

    it('starts with focus border when autoFocus is true', async () => {
      const { getByTestId } = await render(
        <TextField value="" testID={ROOT_TEST_ID} autoFocus />,
      );

      expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(tw`border-default`);
    });

    it('applies twClassName to the container', async () => {
      const { getByTestId } = await render(
        <TextField value="" testID={ROOT_TEST_ID} twClassName="mt-4" />,
      );

      expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(tw`mt-4`);
    });

    it('merges custom style prop with container styles', async () => {
      const customStyle = { marginBottom: 20 };
      const { getByTestId } = await render(
        <TextField value="" testID={ROOT_TEST_ID} style={customStyle} />,
      );

      expect(getByTestId(ROOT_TEST_ID)).toHaveStyle({ marginBottom: 20 });
    });
  });

  describe('accessories', () => {
    it('renders startAccessory when provided', async () => {
      const { getByTestId } = await render(
        <TextField
          value=""
          testID={ROOT_TEST_ID}
          startAccessory={<View testID="start-accessory" />}
        />,
      );

      expect(getByTestId('start-accessory')).toBeOnTheScreen();
    });

    it('renders endAccessory when provided', async () => {
      const { getByTestId } = await render(
        <TextField
          value=""
          testID={ROOT_TEST_ID}
          endAccessory={<View testID="end-accessory" />}
        />,
      );

      expect(getByTestId('end-accessory')).toBeOnTheScreen();
    });

    it('omits accessories when not provided', async () => {
      const { queryByTestId } = await render(
        <TextField value="" testID={ROOT_TEST_ID} />,
      );

      expect(queryByTestId('start-accessory')).toBeNull();
      expect(queryByTestId('end-accessory')).toBeNull();
    });
  });

  describe('focus and blur', () => {
    it('calls onFocus when input receives focus', async () => {
      const onFocus = jest.fn();
      const { getByPlaceholderText } = await render(
        <TextField value="" placeholder="focus-test" onFocus={onFocus} />,
      );

      await fireEvent(getByPlaceholderText('focus-test'), 'focus');

      expect(onFocus).toHaveBeenCalledTimes(1);
    });

    it('calls onBlur when input loses focus', async () => {
      const onBlur = jest.fn();
      const { getByPlaceholderText } = await render(
        <TextField value="" placeholder="blur-test" onBlur={onBlur} />,
      );

      await fireEvent(getByPlaceholderText('blur-test'), 'focus');
      await fireEvent(getByPlaceholderText('blur-test'), 'blur');

      expect(onBlur).toHaveBeenCalledTimes(1);
    });

    it('does not call onFocus when disabled', async () => {
      const onFocus = jest.fn();
      const { getByPlaceholderText } = await render(
        <TextField
          value=""
          placeholder="disabled-focus"
          onFocus={onFocus}
          isDisabled
        />,
      );

      await fireEvent(getByPlaceholderText('disabled-focus'), 'focus');

      expect(onFocus).not.toHaveBeenCalled();
    });

    it('does not call onBlur when disabled', async () => {
      const onBlur = jest.fn();
      const { getByPlaceholderText } = await render(
        <TextField
          value=""
          placeholder="disabled-blur"
          onBlur={onBlur}
          isDisabled
        />,
      );

      await fireEvent(getByPlaceholderText('disabled-blur'), 'focus');
      await fireEvent(getByPlaceholderText('disabled-blur'), 'blur');

      expect(onBlur).not.toHaveBeenCalled();
    });

    it('passes event argument to onFocus callback', async () => {
      const onFocus = jest.fn();
      const { getByPlaceholderText } = await render(
        <TextField value="" placeholder="event-focus" onFocus={onFocus} />,
      );

      await fireEvent(getByPlaceholderText('event-focus'), 'focus', {
        nativeEvent: {},
      });

      expect(onFocus).toHaveBeenCalledWith(
        expect.objectContaining({ nativeEvent: {} }),
      );
    });

    it('passes event argument to onBlur callback', async () => {
      const onBlur = jest.fn();
      const { getByPlaceholderText } = await render(
        <TextField value="" placeholder="event-blur" onBlur={onBlur} />,
      );

      await fireEvent(getByPlaceholderText('event-blur'), 'focus');
      await fireEvent(getByPlaceholderText('event-blur'), 'blur', {
        nativeEvent: {},
      });

      expect(onBlur).toHaveBeenCalledWith(
        expect.objectContaining({ nativeEvent: {} }),
      );
    });

    it('handles focus when onFocus is omitted', async () => {
      const { getByPlaceholderText } = await render(
        <TextField value="" placeholder="no-focus-cb" />,
      );

      expect(
        await fireEvent(getByPlaceholderText('no-focus-cb'), 'focus'),
      ).toBeUndefined();
    });

    it('handles blur when onBlur is omitted', async () => {
      const { getByPlaceholderText } = await render(
        <TextField value="" placeholder="no-blur-cb" />,
      );

      await fireEvent(getByPlaceholderText('no-blur-cb'), 'focus');
      expect(
        await fireEvent(getByPlaceholderText('no-blur-cb'), 'blur'),
      ).toBeUndefined();
    });
  });

  describe('disabled state', () => {
    it('disables the inner Input when isDisabled is true', async () => {
      const { getByPlaceholderText } = await render(
        <TextField value="" placeholder="disabled-input" isDisabled />,
      );

      expect(getByPlaceholderText('disabled-input')).toHaveProp(
        'editable',
        false,
      );
    });
  });
});
