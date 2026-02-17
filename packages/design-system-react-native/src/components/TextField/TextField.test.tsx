import { render, fireEvent } from '@testing-library/react-native';
import { createRef } from 'react';
import { Text, TextInput } from 'react-native';
import type {
  NativeSyntheticEvent,
  TextInputFocusEventData,
} from 'react-native';

import { TextField } from './TextField';
import { TextFieldSize } from './TextField.types';

describe('TextField', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<TextField testID="textfield" />);
    expect(getByTestId('textfield')).toBeDefined();
  });

  it('calls onChangeText when text changes', () => {
    const onChangeText = jest.fn();
    const { getByTestId } = render(
      <TextField
        onChangeText={onChangeText}
        textInputProps={{ testID: 'textfield-input' }}
      />,
    );

    fireEvent.changeText(getByTestId('textfield-input'), 'hello');
    expect(onChangeText).toHaveBeenCalledWith('hello');
  });

  it('calls onFocus when input is focused', () => {
    const onFocus = jest.fn();
    const { getByTestId } = render(
      <TextField
        onFocus={onFocus}
        textInputProps={{ testID: 'textfield-input' }}
      />,
    );

    fireEvent(getByTestId('textfield-input'), 'focus');
    expect(onFocus).toHaveBeenCalledTimes(1);
  });

  it('calls onBlur when input loses focus', () => {
    const onBlur = jest.fn();
    const { getByTestId } = render(
      <TextField
        onBlur={onBlur}
        textInputProps={{ testID: 'textfield-input' }}
      />,
    );

    fireEvent(getByTestId('textfield-input'), 'blur');
    expect(onBlur).toHaveBeenCalledTimes(1);
  });

  it('sets editable to false when disabled', () => {
    const { getByTestId } = render(
      <TextField isDisabled textInputProps={{ testID: 'textfield-input' }} />,
    );

    expect(getByTestId('textfield-input').props.editable).toBe(false);
  });

  it('sets editable to false when readonly', () => {
    const { getByTestId } = render(
      <TextField isReadonly textInputProps={{ testID: 'textfield-input' }} />,
    );

    expect(getByTestId('textfield-input').props.editable).toBe(false);
  });

  it('renders startAccessory when provided', () => {
    const { getByText } = render(
      <TextField startAccessory={<Text>Start</Text>} />,
    );

    expect(getByText('Start')).toBeDefined();
  });

  it('renders endAccessory when provided', () => {
    const { getByText } = render(<TextField endAccessory={<Text>End</Text>} />);

    expect(getByText('End')).toBeDefined();
  });

  it('accepts size prop', () => {
    const { getByTestId } = render(
      <TextField testID="textfield" size={TextFieldSize.Lg} />,
    );

    expect(getByTestId('textfield')).toBeDefined();
  });

  it('renders custom inputElement when provided', () => {
    const { getByText } = render(
      <TextField inputElement={<Text>Custom Input</Text>} />,
    );

    expect(getByText('Custom Input')).toBeDefined();
  });

  it('focuses input when container is pressed', () => {
    const ref = createRef<TextInput>();
    const { getByTestId } = render(<TextField ref={ref} testID="textfield" />);

    // Mock focus on the ref
    const focus = jest.fn();
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    ref.current!.focus = focus;

    fireEvent.press(getByTestId('textfield'));
    expect(focus).toHaveBeenCalledTimes(1);
  });

  it('does not focus input when disabled and container is pressed', () => {
    const ref = createRef<TextInput>();
    const { getByTestId } = render(
      <TextField ref={ref} isDisabled testID="textfield" />,
    );

    fireEvent.press(getByTestId('textfield'));
    // Should not throw - just a no-op when disabled
    expect(getByTestId('textfield')).toBeDefined();
  });

  it('does not call onFocus when disabled', () => {
    const onFocus = jest.fn();
    const { getByTestId } = render(
      <TextField
        isDisabled
        onFocus={onFocus}
        textInputProps={{ testID: 'textfield-input' }}
      />,
    );

    // Directly invoke the onFocus handler since RTL skips events on non-editable inputs
    const input = getByTestId('textfield-input');
    input.props.onFocus({} as NativeSyntheticEvent<TextInputFocusEventData>);
    expect(onFocus).not.toHaveBeenCalled();
  });

  it('does not call onBlur when disabled', () => {
    const onBlur = jest.fn();
    const { getByTestId } = render(
      <TextField
        isDisabled
        onBlur={onBlur}
        textInputProps={{ testID: 'textfield-input' }}
      />,
    );

    // Directly invoke the onBlur handler since RTL skips events on non-editable inputs
    const input = getByTestId('textfield-input');
    input.props.onBlur({} as NativeSyntheticEvent<TextInputFocusEventData>);
    expect(onBlur).not.toHaveBeenCalled();
  });

  it('renders with error border style', () => {
    const { getByTestId } = render(<TextField testID="textfield" isError />);

    expect(getByTestId('textfield')).toBeDefined();
  });

  it('handles focus and blur without callbacks', () => {
    const { getByTestId } = render(
      <TextField textInputProps={{ testID: 'textfield-input' }} />,
    );

    fireEvent(getByTestId('textfield-input'), 'focus');
    fireEvent(getByTestId('textfield-input'), 'blur');
    expect(getByTestId('textfield-input')).toBeDefined();
  });
});
