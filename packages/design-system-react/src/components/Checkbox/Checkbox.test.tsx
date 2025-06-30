import { render, screen, fireEvent } from '@testing-library/react';
import React, { createRef } from 'react';

import { Checkbox } from './Checkbox';

describe('Checkbox', () => {
  it('renders label when provided', () => {
    render(
      <Checkbox
        id="test-checkbox"
        onChange={jest.fn()}
        isSelected={false}
        label="Accept"
      />,
    );
    expect(screen.getByText('Accept')).toBeInTheDocument();
  });

  it('toggles selection state when pressed', () => {
    const onChange = jest.fn();
    const { rerender } = render(
      <Checkbox
        id="test-checkbox"
        isSelected={false}
        onChange={onChange}
        inputProps={{ 'data-testid': 'chk-input' }}
      />,
    );
    const input = screen.getByTestId('chk-input');
    fireEvent.click(input);
    expect(onChange).toHaveBeenCalledWith(true);
    expect(input).not.toBeChecked();

    rerender(
      <Checkbox
        id="test-checkbox"
        isSelected
        onChange={onChange}
        inputProps={{ 'data-testid': 'chk-input' }}
      />,
    );
    expect(input).toBeChecked();
  });

  it('toggles when label is clicked', () => {
    const onChange = jest.fn();
    render(
      <Checkbox
        id="test-checkbox"
        isSelected={false}
        onChange={onChange}
        label="Click me"
        data-testid="chk-label"
      />,
    );
    const label = screen.getByTestId('chk-label');
    fireEvent.click(label);
    expect(onChange).toHaveBeenCalledWith(true);
  });

  it('ignores clicks when disabled', () => {
    const onChange = jest.fn();
    render(
      <Checkbox
        id="test-checkbox"
        isSelected={false}
        isDisabled
        onChange={onChange}
        inputProps={{ 'data-testid': 'chk-input' }}
      />,
    );
    const input = screen.getByTestId('chk-input');
    fireEvent.click(input);
    expect(onChange).not.toHaveBeenCalled();
    expect(input).toBeDisabled();
  });

  it('applies invalid border styles', () => {
    render(
      <Checkbox
        id="test-checkbox"
        onChange={jest.fn()}
        isSelected={false}
        isInvalid
        checkboxContainerProps={{ 'data-testid': 'inner' }}
      />,
    );
    expect(screen.getByTestId('inner')).toHaveClass('border-error-default');
  });

  it('applies selected container styles', () => {
    render(
      <Checkbox
        id="test-checkbox"
        onChange={jest.fn()}
        isSelected
        checkboxContainerProps={{ 'data-testid': 'inner' }}
      />,
    );
    expect(screen.getByTestId('inner')).toHaveClass(
      'bg-primary-default',
      'border-primary-default',
    );
  });

  it('sets aria-invalid on input when isInvalid is true', () => {
    render(
      <Checkbox
        id="test-checkbox"
        onChange={jest.fn()}
        isSelected={false}
        isInvalid
        inputProps={{ 'data-testid': 'chk-input' }}
      />,
    );
    expect(screen.getByTestId('chk-input')).toHaveAttribute(
      'aria-invalid',
      'true',
    );
  });

  it('merges className and style on label container', () => {
    render(
      <Checkbox
        id="test-checkbox"
        onChange={jest.fn()}
        isSelected={false}
        label="Test"
        className="bg-default"
        style={{ marginLeft: 4 }}
        data-testid="chk-label"
      />,
    );
    const label = screen.getByTestId('chk-label');
    expect(label).toHaveClass('bg-default');
    expect(label).toHaveStyle({ marginLeft: '4px' });
  });

  it('merges checkboxContainerProps className', () => {
    render(
      <Checkbox
        id="test-checkbox"
        onChange={jest.fn()}
        isSelected={false}
        checkboxContainerProps={{ className: 'p-2', 'data-testid': 'inner' }}
      />,
    );
    expect(screen.getByTestId('inner')).toHaveClass('p-2');
  });

  it('merges inputProps on the input element', () => {
    render(
      <Checkbox
        id="test-checkbox"
        onChange={jest.fn()}
        isSelected={false}
        inputProps={{
          className: 'custom-input',
          'data-testid': 'chk-input',
          'aria-describedby': 'help-text',
        }}
      />,
    );
    const input = screen.getByTestId('chk-input');
    expect(input).toHaveClass('custom-input');
    expect(input).toHaveAttribute('aria-describedby', 'help-text');
  });

  it('uses the provided id for input and label association', () => {
    render(
      <Checkbox
        id="custom-checkbox-id"
        onChange={jest.fn()}
        isSelected={false}
        label="Test label"
        data-testid="chk-label"
      />,
    );
    const label = screen.getByTestId('chk-label');
    const input = screen.getByRole('checkbox');

    expect(input).toHaveAttribute('id', 'custom-checkbox-id');
    expect(label).toHaveAttribute('for', 'custom-checkbox-id');
  });

  it('exposes toggle method via ref', () => {
    const ref = createRef<{ toggle: () => void }>();
    const onChange = jest.fn();
    render(
      <Checkbox
        id="test-checkbox"
        isSelected={false}
        ref={ref}
        onChange={onChange}
      />,
    );
    expect(ref.current).not.toBeNull();
    ref.current?.toggle();
    expect(onChange).toHaveBeenCalledWith(true);
  });

  it('does not toggle when disabled via ref', () => {
    const ref = createRef<{ toggle: () => void }>();
    const onChange = jest.fn();
    render(
      <Checkbox
        id="test-checkbox"
        isSelected={false}
        ref={ref}
        onChange={onChange}
        isDisabled
      />,
    );
    ref.current?.toggle();
    expect(onChange).not.toHaveBeenCalled();
  });

  it('handles keyboard Enter key on input', () => {
    const onChange = jest.fn();
    render(
      <Checkbox
        id="test-checkbox"
        isSelected={false}
        onChange={onChange}
        inputProps={{ 'data-testid': 'chk-input' }}
      />,
    );
    const input = screen.getByTestId('chk-input');
    fireEvent.keyDown(input, { key: 'Enter' });
    expect(onChange).toHaveBeenCalledWith(true);
  });
});
