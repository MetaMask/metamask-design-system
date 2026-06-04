import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { render, fireEvent, renderHook } from '@testing-library/react-native';
import React, { createRef } from 'react';
import { TextInput } from 'react-native';

import { TextArea } from './TextArea';

const ROOT_TEST_ID = 'text-area';

describe('TextArea', () => {
  let tw: ReturnType<typeof useTailwind>;

  beforeAll(async () => {
    const { result } = await renderHook(() => useTailwind());

    tw = result.current;
  });

  describe('rendering', () => {
    it('renders with default props', async () => {
      const { getByTestId } = await render(
        <TextArea value="" testID={ROOT_TEST_ID} placeholder="Enter text" />,
      );

      expect(getByTestId(ROOT_TEST_ID)).toBeOnTheScreen();
    });

    it('passes testID to the root element', async () => {
      const { getByTestId } = await render(
        <TextArea value="" testID="custom-test-id" />,
      );

      expect(getByTestId('custom-test-id')).toBeOnTheScreen();
    });

    it('forwards TextInput props to the input', async () => {
      const { getByPlaceholderText } = await render(
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
  });

  describe('multiline input', () => {
    it('sets multiline to true on the input', async () => {
      const { getByPlaceholderText } = await render(
        <TextArea value="" placeholder="multiline-field" />,
      );

      expect(getByPlaceholderText('multiline-field')).toHaveProp(
        'multiline',
        true,
      );
    });

    it('sets textAlignVertical to top on the input', async () => {
      const { getByPlaceholderText } = await render(
        <TextArea value="" placeholder="top-align" />,
      );

      expect(getByPlaceholderText('top-align')).toHaveProp(
        'textAlignVertical',
        'top',
      );
    });
  });

  describe('onChangeText', () => {
    it('notifies when the text changes', async () => {
      const onChangeText = jest.fn();
      const { getByPlaceholderText } = await render(
        <TextArea
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

  describe('TextInput props', () => {
    it('forwards secureTextEntry to the input', async () => {
      const { getByPlaceholderText } = await render(
        <TextArea value="" placeholder="secure" secureTextEntry />,
      );

      expect(getByPlaceholderText('secure')).toHaveProp(
        'secureTextEntry',
        true,
      );
    });

    it('forwards isReadOnly to the input', async () => {
      const { getByPlaceholderText } = await render(
        <TextArea value="" placeholder="readonly-test" isReadOnly />,
      );

      expect(getByPlaceholderText('readonly-test')).toHaveProp(
        'editable',
        false,
      );
    });
  });

  describe('ref', () => {
    it('exposes the root TextInput ref via forwardRef', async () => {
      const ref = createRef<TextInput>();
      await render(
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
    it('applies minimum height for multiline layout', async () => {
      const { getByTestId } = await render(
        <TextArea value="" testID={ROOT_TEST_ID} />,
      );

      expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(tw`min-h-24`);
    });

    it('shows error border when isError is true', async () => {
      const { getByTestId } = await render(
        <TextArea value="" testID={ROOT_TEST_ID} isError />,
      );

      expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(tw`border-error-default`);
    });

    it('keeps error border when focused and isError', async () => {
      const { getByTestId, getByPlaceholderText } = await render(
        <TextArea
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
        <TextArea value="" testID={ROOT_TEST_ID} isDisabled />,
      );

      expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(tw`opacity-50`);
    });

    it('omits disabled opacity when isDisabled is false', async () => {
      const { getByTestId } = await render(
        <TextArea value="" testID={ROOT_TEST_ID} />,
      );

      expect(getByTestId(ROOT_TEST_ID)).not.toHaveStyle(tw`opacity-50`);
    });

    it('uses muted border when disabled even if autoFocus is true', async () => {
      const { getByTestId } = await render(
        <TextArea value="" testID={ROOT_TEST_ID} isDisabled autoFocus />,
      );

      expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(tw`border-muted`);
      expect(getByTestId(ROOT_TEST_ID)).not.toHaveStyle(tw`border-default`);
    });

    it('applies focus border when focused', async () => {
      const { getByTestId, getByPlaceholderText } = await render(
        <TextArea value="" testID={ROOT_TEST_ID} placeholder="focus-border" />,
      );

      await fireEvent(getByPlaceholderText('focus-border'), 'focus');

      expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(tw`border-default`);
    });

    it('clears container focus styling after isDisabled toggles following focus', async () => {
      const { getByTestId, getByPlaceholderText, rerender } = await render(
        <TextArea
          value=""
          testID={ROOT_TEST_ID}
          placeholder="toggle-disabled"
        />,
      );

      await fireEvent(getByPlaceholderText('toggle-disabled'), 'focus');
      expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(tw`border-default`);

      await rerender(
        <TextArea
          value=""
          testID={ROOT_TEST_ID}
          placeholder="toggle-disabled"
          isDisabled
        />,
      );
      expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(tw`border-muted`);

      await rerender(
        <TextArea
          value=""
          testID={ROOT_TEST_ID}
          placeholder="toggle-disabled"
        />,
      );
      expect(getByTestId(ROOT_TEST_ID)).not.toHaveStyle(tw`border-default`);
      expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(tw`border-muted`);
    });

    it('clears container focus styling after isReadOnly toggles following focus', async () => {
      const { getByTestId, getByPlaceholderText, rerender } = await render(
        <TextArea
          value=""
          testID={ROOT_TEST_ID}
          placeholder="toggle-readonly"
        />,
      );

      await fireEvent(getByPlaceholderText('toggle-readonly'), 'focus');
      expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(tw`border-default`);

      await rerender(
        <TextArea
          value=""
          testID={ROOT_TEST_ID}
          placeholder="toggle-readonly"
          isReadOnly
        />,
      );
      expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(tw`border-muted`);

      await rerender(
        <TextArea
          value=""
          testID={ROOT_TEST_ID}
          placeholder="toggle-readonly"
        />,
      );
      expect(getByTestId(ROOT_TEST_ID)).not.toHaveStyle(tw`border-default`);
      expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(tw`border-muted`);
    });

    it('reverts to muted resting border after blur', async () => {
      const { getByTestId, getByPlaceholderText } = await render(
        <TextArea value="" testID={ROOT_TEST_ID} placeholder="blur-border" />,
      );

      await fireEvent(getByPlaceholderText('blur-border'), 'focus');
      await fireEvent(getByPlaceholderText('blur-border'), 'blur');

      expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(tw`border-muted`);
    });

    it('starts with focus border when autoFocus is true', async () => {
      const { getByTestId } = await render(
        <TextArea value="" testID={ROOT_TEST_ID} autoFocus />,
      );

      expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(tw`border-default`);
    });

    it('applies twClassName to the input', async () => {
      const { getByTestId } = await render(
        <TextArea value="" testID={ROOT_TEST_ID} twClassName="mt-4" />,
      );

      expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(tw`mt-4`);
    });

    it('merges custom style prop with root Input styles', async () => {
      const customStyle = { marginBottom: 20 };
      const { getByTestId } = await render(
        <TextArea value="" testID={ROOT_TEST_ID} style={customStyle} />,
      );

      expect(getByTestId(ROOT_TEST_ID)).toHaveStyle({ marginBottom: 20 });
    });

    it('merges twClassName and style on the input', async () => {
      const customStyle = { marginBottom: 12 };
      const { getByTestId } = await render(
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
    it('calls onFocus when input receives focus', async () => {
      const onFocus = jest.fn();
      const { getByPlaceholderText } = await render(
        <TextArea value="" placeholder="focus-test" onFocus={onFocus} />,
      );

      await fireEvent(getByPlaceholderText('focus-test'), 'focus');

      expect(onFocus).toHaveBeenCalledTimes(1);
    });

    it('calls onBlur when input loses focus', async () => {
      const onBlur = jest.fn();
      const { getByPlaceholderText } = await render(
        <TextArea value="" placeholder="blur-test" onBlur={onBlur} />,
      );

      await fireEvent(getByPlaceholderText('blur-test'), 'focus');
      await fireEvent(getByPlaceholderText('blur-test'), 'blur');

      expect(onBlur).toHaveBeenCalledTimes(1);
    });

    it('does not call onFocus when disabled', async () => {
      const onFocus = jest.fn();
      const { getByPlaceholderText } = await render(
        <TextArea
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
        <TextArea
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
        <TextArea value="" placeholder="event-focus" onFocus={onFocus} />,
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
        <TextArea value="" placeholder="event-blur" onBlur={onBlur} />,
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
        <TextArea value="" placeholder="no-focus-cb" />,
      );

      expect(
        await fireEvent(getByPlaceholderText('no-focus-cb'), 'focus'),
      ).toBeUndefined();
    });

    it('handles blur when onBlur is omitted', async () => {
      const { getByPlaceholderText } = await render(
        <TextArea value="" placeholder="no-blur-cb" />,
      );

      await fireEvent(getByPlaceholderText('no-blur-cb'), 'focus');
      expect(
        await fireEvent(getByPlaceholderText('no-blur-cb'), 'blur'),
      ).toBeUndefined();
    });
  });

  describe('disabled state', () => {
    it('disables the input when isDisabled is true', async () => {
      const { getByPlaceholderText } = await render(
        <TextArea value="" placeholder="disabled-input" isDisabled />,
      );

      expect(getByPlaceholderText('disabled-input')).toBeDisabled();
    });
  });
});
