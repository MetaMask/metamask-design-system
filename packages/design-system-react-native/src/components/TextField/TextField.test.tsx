import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { renderHook } from '@testing-library/react-hooks';
import { render, fireEvent } from '@testing-library/react-native';
import React, { createRef } from 'react';
import { TextInput, View } from 'react-native';

import { TextField } from './TextField';

const ROOT_TEST_ID = 'textfield';

describe('TextField', () => {
  let tw: ReturnType<typeof useTailwind>;

  beforeAll(() => {
    tw = renderHook(() => useTailwind()).result.current;
  });

  describe('rendering', () => {
    it('renders with default props', () => {
      const { getByTestId } = render(
        <TextField value="" testID={ROOT_TEST_ID} placeholder="Enter text" />,
      );

      expect(getByTestId(ROOT_TEST_ID)).toBeOnTheScreen();
    });

    it('passes testID to the root element', () => {
      const { getByTestId } = render(
        <TextField value="" testID="custom-test-id" />,
      );

      expect(getByTestId('custom-test-id')).toBeOnTheScreen();
    });

    it('renders custom inputElement when provided', () => {
      const { getByTestId } = render(
        <TextField
          value=""
          testID={ROOT_TEST_ID}
          inputElement={<View testID="custom-input" />}
        />,
      );

      expect(getByTestId('custom-input')).toBeOnTheScreen();
    });

    it('forwards props to the inner Input', () => {
      const { getByPlaceholderText } = render(
        <TextField value="" placeholder="forwarded-placeholder" />,
      );

      expect(getByPlaceholderText('forwarded-placeholder')).toBeOnTheScreen();
    });
  });

  describe('single-line input', () => {
    it('sets numberOfLines to 1 on the inner input', () => {
      const { getByPlaceholderText } = render(
        <TextField
          value=""
          placeholder="single-line"
          multiline
          numberOfLines={4}
        />,
      );

      expect(getByPlaceholderText('single-line')).toHaveProp(
        'numberOfLines',
        1,
      );
    });

    it('sets multiline to false on the inner input', () => {
      const { getByPlaceholderText } = render(
        <TextField
          value=""
          placeholder="single-line"
          multiline
          numberOfLines={4}
        />,
      );

      expect(getByPlaceholderText('single-line')).toHaveProp(
        'multiline',
        false,
      );
    });
  });

  describe('Input props', () => {
    it('forwards secureTextEntry to the inner Input', () => {
      const { getByPlaceholderText } = render(
        <TextField value="" placeholder="secure" secureTextEntry />,
      );

      expect(getByPlaceholderText('secure')).toHaveProp(
        'secureTextEntry',
        true,
      );
    });

    it('forwards isReadonly to the inner Input', () => {
      const { getByPlaceholderText } = render(
        <TextField value="" placeholder="readonly-test" isReadonly />,
      );

      expect(getByPlaceholderText('readonly-test')).toHaveProp(
        'editable',
        false,
      );
    });
  });

  describe('ref', () => {
    it('exposes TextInput ref via forwardRef', () => {
      const ref = createRef<TextInput>();
      render(<TextField value="" ref={ref} placeholder="ref-test" />);

      expect(ref.current).not.toBeNull();
      expect(ref.current).toBeInstanceOf(TextInput);
    });

    it('allows calling focus() via the forwarded ref', () => {
      const ref = createRef<TextInput>();
      render(<TextField value="" ref={ref} placeholder="ref-focus" />);

      expect(() => ref.current?.focus()).not.toThrow();
    });
  });

  describe('container styles', () => {
    it('applies fixed 48px row height', () => {
      const { getByTestId } = render(
        <TextField value="" testID={ROOT_TEST_ID} />,
      );

      expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(tw`h-12`);
    });

    it('shows error border when isError is true', () => {
      const { getByTestId } = render(
        <TextField value="" testID={ROOT_TEST_ID} isError />,
      );

      expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(tw`border-error-default`);
    });

    it('keeps error border when focused and isError', () => {
      const { getByTestId, getByPlaceholderText } = render(
        <TextField
          value=""
          testID={ROOT_TEST_ID}
          isError
          placeholder="error-focus"
        />,
      );

      fireEvent(getByPlaceholderText('error-focus'), 'focus');

      expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(tw`border-error-default`);
    });

    it('applies opacity when isDisabled is true', () => {
      const { getByTestId } = render(
        <TextField value="" testID={ROOT_TEST_ID} isDisabled />,
      );

      expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(tw`opacity-50`);
    });

    it('omits disabled opacity when isDisabled is false', () => {
      const { getByTestId } = render(
        <TextField value="" testID={ROOT_TEST_ID} />,
      );

      expect(getByTestId(ROOT_TEST_ID)).not.toHaveStyle(tw`opacity-50`);
    });

    it('uses muted border when disabled even if autoFocus is true', () => {
      const { getByTestId } = render(
        <TextField value="" testID={ROOT_TEST_ID} isDisabled autoFocus />,
      );

      expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(tw`border-muted`);
      expect(getByTestId(ROOT_TEST_ID)).not.toHaveStyle(tw`border-default`);
    });

    it('applies focus border when focused', () => {
      const { getByTestId, getByPlaceholderText } = render(
        <TextField value="" testID={ROOT_TEST_ID} placeholder="focus-border" />,
      );

      fireEvent(getByPlaceholderText('focus-border'), 'focus');

      expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(tw`border-default`);
    });

    it('reverts to muted resting border after blur', () => {
      const { getByTestId, getByPlaceholderText } = render(
        <TextField value="" testID={ROOT_TEST_ID} placeholder="blur-border" />,
      );

      fireEvent(getByPlaceholderText('blur-border'), 'focus');
      fireEvent(getByPlaceholderText('blur-border'), 'blur');

      expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(tw`border-muted`);
    });

    it('starts with focus border when autoFocus is true', () => {
      const { getByTestId } = render(
        <TextField value="" testID={ROOT_TEST_ID} autoFocus />,
      );

      expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(tw`border-default`);
    });

    it('applies twClassName to the container', () => {
      const { getByTestId } = render(
        <TextField value="" testID={ROOT_TEST_ID} twClassName="mt-4" />,
      );

      expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(tw`mt-4`);
    });

    it('merges custom style prop with container styles', () => {
      const customStyle = { marginBottom: 20 };
      const { getByTestId } = render(
        <TextField value="" testID={ROOT_TEST_ID} style={customStyle} />,
      );

      expect(getByTestId(ROOT_TEST_ID)).toHaveStyle({ marginBottom: 20 });
    });
  });

  describe('accessories', () => {
    it('renders startAccessory when provided', () => {
      const { getByTestId } = render(
        <TextField
          value=""
          testID={ROOT_TEST_ID}
          startAccessory={<View testID="start-accessory" />}
        />,
      );

      expect(getByTestId('start-accessory')).toBeOnTheScreen();
    });

    it('renders endAccessory when provided', () => {
      const { getByTestId } = render(
        <TextField
          value=""
          testID={ROOT_TEST_ID}
          endAccessory={<View testID="end-accessory" />}
        />,
      );

      expect(getByTestId('end-accessory')).toBeOnTheScreen();
    });

    it('omits accessories when not provided', () => {
      const { queryByTestId } = render(
        <TextField value="" testID={ROOT_TEST_ID} />,
      );

      expect(queryByTestId('start-accessory')).toBeNull();
      expect(queryByTestId('end-accessory')).toBeNull();
    });
  });

  describe('focus and blur', () => {
    it('calls onFocus when input receives focus', () => {
      const onFocus = jest.fn();
      const { getByPlaceholderText } = render(
        <TextField value="" placeholder="focus-test" onFocus={onFocus} />,
      );

      fireEvent(getByPlaceholderText('focus-test'), 'focus');

      expect(onFocus).toHaveBeenCalledTimes(1);
    });

    it('calls onBlur when input loses focus', () => {
      const onBlur = jest.fn();
      const { getByPlaceholderText } = render(
        <TextField value="" placeholder="blur-test" onBlur={onBlur} />,
      );

      fireEvent(getByPlaceholderText('blur-test'), 'focus');
      fireEvent(getByPlaceholderText('blur-test'), 'blur');

      expect(onBlur).toHaveBeenCalledTimes(1);
    });

    it('does not call onFocus when disabled', () => {
      const onFocus = jest.fn();
      const { getByPlaceholderText } = render(
        <TextField
          value=""
          placeholder="disabled-focus"
          isDisabled
          onFocus={onFocus}
        />,
      );

      fireEvent(getByPlaceholderText('disabled-focus'), 'focus');

      expect(onFocus).not.toHaveBeenCalled();
    });

    it('does not call onBlur when disabled', () => {
      const onBlur = jest.fn();
      const { getByPlaceholderText } = render(
        <TextField
          value=""
          placeholder="disabled-blur"
          isDisabled
          onBlur={onBlur}
        />,
      );

      fireEvent(getByPlaceholderText('disabled-blur'), 'focus');
      fireEvent(getByPlaceholderText('disabled-blur'), 'blur');

      expect(onBlur).not.toHaveBeenCalled();
    });

    it('passes event argument to onFocus callback', () => {
      const onFocus = jest.fn();
      const { getByPlaceholderText } = render(
        <TextField value="" placeholder="event-focus" onFocus={onFocus} />,
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
        <TextField value="" placeholder="event-blur" onBlur={onBlur} />,
      );

      fireEvent(getByPlaceholderText('event-blur'), 'focus');
      fireEvent(getByPlaceholderText('event-blur'), 'blur', {
        nativeEvent: {},
      });

      expect(onBlur).toHaveBeenCalledWith(
        expect.objectContaining({ nativeEvent: {} }),
      );
    });

    it('handles focus when onFocus is omitted', () => {
      const { getByPlaceholderText } = render(
        <TextField value="" placeholder="no-focus-cb" />,
      );

      expect(() => {
        fireEvent(getByPlaceholderText('no-focus-cb'), 'focus');
      }).not.toThrow();
    });

    it('handles blur when onBlur is omitted', () => {
      const { getByPlaceholderText } = render(
        <TextField value="" placeholder="no-blur-cb" />,
      );

      expect(() => {
        fireEvent(getByPlaceholderText('no-blur-cb'), 'focus');
        fireEvent(getByPlaceholderText('no-blur-cb'), 'blur');
      }).not.toThrow();
    });
  });

  describe('pressable root', () => {
    it('disables the root Pressable when isDisabled is true', () => {
      const { getByTestId } = render(
        <TextField value="" testID={ROOT_TEST_ID} isDisabled />,
      );

      expect(getByTestId(ROOT_TEST_ID)).toBeDisabled();
    });

    it('forwards pressableProps to the root Pressable', () => {
      const hitSlop = { top: 4, bottom: 4, left: 4, right: 4 };
      const { getByTestId } = render(
        <TextField
          value=""
          testID={ROOT_TEST_ID}
          pressableProps={{ hitSlop }}
        />,
      );

      expect(getByTestId(ROOT_TEST_ID)).toHaveProp('hitSlop', hitSlop);
    });

    it('focuses the input when the container is pressed', () => {
      const ref = createRef<TextInput>();
      const onFocus = jest.fn();
      const { getByTestId } = render(
        <TextField
          value=""
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
          value=""
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

    it('handles press when inputElement replaces the default Input', () => {
      const { getByTestId } = render(
        <TextField
          value=""
          testID={ROOT_TEST_ID}
          inputElement={<View testID="custom-input" />}
        />,
      );

      expect(() => {
        fireEvent.press(getByTestId(ROOT_TEST_ID));
      }).not.toThrow();
    });
  });
});
