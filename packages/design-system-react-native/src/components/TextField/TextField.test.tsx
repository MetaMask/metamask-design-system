import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { renderHook } from '@testing-library/react-hooks';
import { render, fireEvent } from '@testing-library/react-native';
import React, { createRef } from 'react';
import { TextInput, View } from 'react-native';
import { act, create } from 'react-test-renderer';

import { Input } from '../Input';

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

    it('forwards inputProps to the inner Input', () => {
      const { getByPlaceholderText } = render(
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
    it('sets numberOfLines to 1 on the inner input', () => {
      const { getByPlaceholderText } = render(
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

    it('sets multiline to false on the inner input', () => {
      const { getByPlaceholderText } = render(
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
    it('notifies when the text changes', () => {
      const onChangeText = jest.fn();
      const { getByPlaceholderText } = render(
        <TextField
          value="a"
          onChangeText={onChangeText}
          placeholder="change-me"
        />,
      );

      fireEvent.changeText(getByPlaceholderText('change-me'), 'ab');

      expect(onChangeText).toHaveBeenCalledTimes(1);
      expect(onChangeText).toHaveBeenCalledWith('ab');
    });
  });

  describe('Input props', () => {
    it('forwards secureTextEntry to the inner Input', () => {
      const { getByPlaceholderText } = render(
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
          onFocus={onFocus}
          isDisabled
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
          onBlur={onBlur}
          isDisabled
        />,
      );

      fireEvent(getByPlaceholderText('disabled-blur'), 'focus');
      fireEvent(getByPlaceholderText('disabled-blur'), 'blur');

      expect(onBlur).not.toHaveBeenCalled();
    });

    it('no-ops TextField blur wiring when disabled if the handler is invoked directly', () => {
      const onBlur = jest.fn();
      const tree = create(
        <TextField
          value=""
          isDisabled
          placeholder="disabled-blur-direct"
          onBlur={onBlur}
        />,
      );
      const inputNode = tree.root.findByType(Input);
      act(() => {
        inputNode.props.onBlur({ nativeEvent: {} });
      });
      expect(onBlur).not.toHaveBeenCalled();
    });

    it('no-ops TextField focus wiring when disabled if the handler is invoked directly', () => {
      const onFocus = jest.fn();
      const tree = create(
        <TextField
          value=""
          isDisabled
          placeholder="disabled-focus-direct"
          onFocus={onFocus}
        />,
      );
      const inputNode = tree.root.findByType(Input);
      act(() => {
        inputNode.props.onFocus({ nativeEvent: {} });
      });
      expect(onFocus).not.toHaveBeenCalled();
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

  describe('disabled state', () => {
    it('disables the inner Input when isDisabled is true', () => {
      const { getByPlaceholderText } = render(
        <TextField value="" placeholder="disabled-input" isDisabled />,
      );

      expect(getByPlaceholderText('disabled-input')).toHaveProp(
        'editable',
        false,
      );
    });
  });
});
