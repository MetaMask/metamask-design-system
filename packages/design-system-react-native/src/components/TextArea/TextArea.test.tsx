import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { render, fireEvent, renderHook } from '@testing-library/react-native';
import React, { createRef } from 'react';
import { TextInput } from 'react-native';
import { act } from 'react-test-renderer';

import { createRenderer } from '../../test-utils/createRenderer';
import { Input } from '../Input';

import { TextArea } from './TextArea';

const ROOT_TEST_ID = 'text-area';

describe('TextArea', () => {
  let tw: ReturnType<typeof useTailwind>;

  beforeAll(() => {
    tw = renderHook(() => useTailwind()).result.current;
  });

  describe('rendering', () => {
    it('renders with default props', () => {
      const { getByTestId } = render(
        <TextArea value="" testID={ROOT_TEST_ID} placeholder="Enter text" />,
      );

      expect(getByTestId(ROOT_TEST_ID)).toBeOnTheScreen();
    });

    it('passes testID to the root element', () => {
      const { getByTestId } = render(
        <TextArea value="" testID="custom-test-id" />,
      );

      expect(getByTestId('custom-test-id')).toBeOnTheScreen();
    });

    it('forwards TextInput props to the input', () => {
      const { getByPlaceholderText } = render(
        <TextArea
          value=""
          placeholder="forwarded-placeholder"
          keyboardType="default"
        />,
      );

      expect(getByPlaceholderText('forwarded-placeholder')).toHaveProp(
        'keyboardType',
        'default',
      );
    });

    it('applies TextArea chrome classes to the input', () => {
      const { getByTestId } = render(
        <TextArea
          value=""
          testID={ROOT_TEST_ID}
          placeholder="tw-class-merge"
          twClassName="mt-2"
        />,
      );

      expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(tw`mt-2`);
    });

    it('uses the default chrome classes on the input', () => {
      const { getByTestId } = render(
        <TextArea
          value=""
          testID={ROOT_TEST_ID}
          placeholder="no-input-props"
        />,
      );

      expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(tw`min-h-24 rounded-lg`);
    });
  });

  describe('multiline input', () => {
    it('sets multiline to true on the input', () => {
      const { getByPlaceholderText } = render(
        <TextArea value="" placeholder="multiline-field" />,
      );

      expect(getByPlaceholderText('multiline-field')).toHaveProp(
        'multiline',
        true,
      );
    });

    it('sets textAlignVertical to top on the input', () => {
      const { getByPlaceholderText } = render(
        <TextArea value="" placeholder="top-align" />,
      );

      expect(getByPlaceholderText('top-align')).toHaveProp(
        'textAlignVertical',
        'top',
      );
    });
  });

  describe('onChangeText', () => {
    it('notifies when the text changes', () => {
      const onChangeText = jest.fn();
      const { getByPlaceholderText } = render(
        <TextArea
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

  describe('TextInput props', () => {
    it('forwards secureTextEntry to the input', () => {
      const { getByPlaceholderText } = render(
        <TextArea value="" placeholder="secure" secureTextEntry />,
      );

      expect(getByPlaceholderText('secure')).toHaveProp(
        'secureTextEntry',
        true,
      );
    });

    it('forwards isReadOnly to the input', () => {
      const { getByPlaceholderText } = render(
        <TextArea value="" placeholder="readonly-test" isReadOnly />,
      );

      expect(getByPlaceholderText('readonly-test')).toHaveProp(
        'editable',
        false,
      );
    });
  });

  describe('ref', () => {
    it('exposes the root TextInput ref via forwardRef', () => {
      const ref = createRef<TextInput>();
      render(
        <TextArea
          value=""
          ref={ref}
          testID={ROOT_TEST_ID}
          placeholder="ref-test"
        />,
      );

      expect(ref.current).not.toBeNull();
      expect(ref.current).toBeInstanceOf(TextInput);
    });
  });

  describe('container styles', () => {
    it('applies minimum height for multiline layout', () => {
      const { getByTestId } = render(
        <TextArea value="" testID={ROOT_TEST_ID} />,
      );

      expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(tw`min-h-24`);
    });

    it('shows error border when isError is true', () => {
      const { getByTestId } = render(
        <TextArea value="" testID={ROOT_TEST_ID} isError />,
      );

      expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(tw`border-error-default`);
    });

    it('keeps error border when focused and isError', () => {
      const { getByTestId, getByPlaceholderText } = render(
        <TextArea
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
        <TextArea value="" testID={ROOT_TEST_ID} isDisabled />,
      );

      expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(tw`opacity-50`);
    });

    it('omits disabled opacity when isDisabled is false', () => {
      const { getByTestId } = render(
        <TextArea value="" testID={ROOT_TEST_ID} />,
      );

      expect(getByTestId(ROOT_TEST_ID)).not.toHaveStyle(tw`opacity-50`);
    });

    it('uses muted border when disabled even if autoFocus is true', () => {
      const { getByTestId } = render(
        <TextArea value="" testID={ROOT_TEST_ID} isDisabled autoFocus />,
      );

      expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(tw`border-muted`);
      expect(getByTestId(ROOT_TEST_ID)).not.toHaveStyle(tw`border-default`);
    });

    it('applies focus border when focused', () => {
      const { getByTestId, getByPlaceholderText } = render(
        <TextArea value="" testID={ROOT_TEST_ID} placeholder="focus-border" />,
      );

      fireEvent(getByPlaceholderText('focus-border'), 'focus');

      expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(tw`border-default`);
    });

    it('clears container focus styling after isDisabled toggles following focus', () => {
      const { getByTestId, getByPlaceholderText, rerender } = render(
        <TextArea
          value=""
          testID={ROOT_TEST_ID}
          placeholder="toggle-disabled"
        />,
      );

      fireEvent(getByPlaceholderText('toggle-disabled'), 'focus');
      expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(tw`border-default`);

      rerender(
        <TextArea
          value=""
          testID={ROOT_TEST_ID}
          placeholder="toggle-disabled"
          isDisabled
        />,
      );
      expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(tw`border-muted`);

      rerender(
        <TextArea
          value=""
          testID={ROOT_TEST_ID}
          placeholder="toggle-disabled"
        />,
      );
      expect(getByTestId(ROOT_TEST_ID)).not.toHaveStyle(tw`border-default`);
      expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(tw`border-muted`);
    });

    it('clears container focus styling after isReadOnly toggles following focus', () => {
      const { getByTestId, getByPlaceholderText, rerender } = render(
        <TextArea
          value=""
          testID={ROOT_TEST_ID}
          placeholder="toggle-readonly"
        />,
      );

      fireEvent(getByPlaceholderText('toggle-readonly'), 'focus');
      expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(tw`border-default`);

      rerender(
        <TextArea
          value=""
          testID={ROOT_TEST_ID}
          placeholder="toggle-readonly"
          isReadOnly
        />,
      );
      expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(tw`border-muted`);

      rerender(
        <TextArea
          value=""
          testID={ROOT_TEST_ID}
          placeholder="toggle-readonly"
        />,
      );
      expect(getByTestId(ROOT_TEST_ID)).not.toHaveStyle(tw`border-default`);
      expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(tw`border-muted`);
    });

    it('reverts to muted resting border after blur', () => {
      const { getByTestId, getByPlaceholderText } = render(
        <TextArea value="" testID={ROOT_TEST_ID} placeholder="blur-border" />,
      );

      fireEvent(getByPlaceholderText('blur-border'), 'focus');
      fireEvent(getByPlaceholderText('blur-border'), 'blur');

      expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(tw`border-muted`);
    });

    it('starts with focus border when autoFocus is true', () => {
      const { getByTestId } = render(
        <TextArea value="" testID={ROOT_TEST_ID} autoFocus />,
      );

      expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(tw`border-default`);
    });

    it('applies twClassName to the input', () => {
      const { getByTestId } = render(
        <TextArea value="" testID={ROOT_TEST_ID} twClassName="mt-4" />,
      );

      expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(tw`mt-4`);
    });

    it('merges custom style prop with root Input styles', () => {
      const customStyle = { marginBottom: 20 };
      const { getByTestId } = render(
        <TextArea value="" testID={ROOT_TEST_ID} style={customStyle} />,
      );

      expect(getByTestId(ROOT_TEST_ID)).toHaveStyle({ marginBottom: 20 });
    });

    it('merges twClassName and style on the input', () => {
      const customStyle = { marginBottom: 12 };
      const { getByTestId } = render(
        <TextArea
          value=""
          testID={ROOT_TEST_ID}
          twClassName="mt-2"
          style={customStyle}
        />,
      );

      const root = getByTestId(ROOT_TEST_ID);

      expect(root).toHaveStyle(tw`mt-2`);
      expect(root).toHaveStyle({ marginBottom: 12 });
    });
  });

  describe('focus and blur', () => {
    it('calls onFocus when input receives focus', () => {
      const onFocus = jest.fn();
      const { getByPlaceholderText } = render(
        <TextArea value="" placeholder="focus-test" onFocus={onFocus} />,
      );

      fireEvent(getByPlaceholderText('focus-test'), 'focus');

      expect(onFocus).toHaveBeenCalledTimes(1);
    });

    it('calls onBlur when input loses focus', () => {
      const onBlur = jest.fn();
      const { getByPlaceholderText } = render(
        <TextArea value="" placeholder="blur-test" onBlur={onBlur} />,
      );

      fireEvent(getByPlaceholderText('blur-test'), 'focus');
      fireEvent(getByPlaceholderText('blur-test'), 'blur');

      expect(onBlur).toHaveBeenCalledTimes(1);
    });

    it('does not call onFocus when disabled', () => {
      const onFocus = jest.fn();
      const { getByPlaceholderText } = render(
        <TextArea
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
        <TextArea
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

    it('no-ops TextArea blur wiring when disabled if the handler is invoked directly', () => {
      const onBlur = jest.fn();
      const tree = createRenderer(
        <TextArea
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

    it('no-ops TextArea focus wiring when disabled if the handler is invoked directly', () => {
      const onFocus = jest.fn();
      const tree = createRenderer(
        <TextArea
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
        <TextArea value="" placeholder="event-focus" onFocus={onFocus} />,
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
        <TextArea value="" placeholder="event-blur" onBlur={onBlur} />,
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
        <TextArea value="" placeholder="no-focus-cb" />,
      );

      expect(() => {
        fireEvent(getByPlaceholderText('no-focus-cb'), 'focus');
      }).not.toThrow();
    });

    it('handles blur when onBlur is omitted', () => {
      const { getByPlaceholderText } = render(
        <TextArea value="" placeholder="no-blur-cb" />,
      );

      expect(() => {
        fireEvent(getByPlaceholderText('no-blur-cb'), 'focus');
        fireEvent(getByPlaceholderText('no-blur-cb'), 'blur');
      }).not.toThrow();
    });
  });

  describe('disabled state', () => {
    it('disables the input when isDisabled is true', () => {
      const { getByPlaceholderText } = render(
        <TextArea value="" placeholder="disabled-input" isDisabled />,
      );

      expect(getByPlaceholderText('disabled-input')).toBeDisabled();
    });
  });
});
