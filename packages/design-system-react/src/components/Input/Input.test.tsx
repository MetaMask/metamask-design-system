import { render, screen, fireEvent } from '@testing-library/react';
import React, { createRef } from 'react';

import { TextVariant } from '../../types';

import { Input } from './Input';
import { INPUT_TEST_ID } from './Input.constants';

describe('Input', () => {
  it('renders with default props', () => {
    render(<Input placeholder="Enter value" />);
    const input = screen.getByTestId(INPUT_TEST_ID);
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('placeholder', 'Enter value');
    expect(input).not.toBeDisabled();
    expect(input).not.toHaveAttribute('readonly');
  });

  it('applies disabled state when isDisabled is true', () => {
    render(<Input isDisabled placeholder="Disabled" />);
    const input = screen.getByTestId(INPUT_TEST_ID);
    expect(input).toBeDisabled();
    expect(input).toHaveClass('opacity-50', 'cursor-not-allowed');
  });

  it('applies readOnly when isReadonly is true', () => {
    render(<Input isReadonly placeholder="Readonly" defaultValue="Locked" />);
    const input = screen.getByTestId(INPUT_TEST_ID);
    expect(input).toHaveAttribute('readonly');
    expect(input).toHaveValue('Locked');
  });

  it('merges className with default classes', () => {
    render(<Input className="custom-class" data-testid={INPUT_TEST_ID} />);
    const input = screen.getByTestId(INPUT_TEST_ID);
    expect(input).toHaveClass('custom-class');
  });

  it('forwards ref to the input element', () => {
    const ref = createRef<HTMLInputElement>();
    render(<Input ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });

  it('applies textVariant typography classes', () => {
    render(
      <Input textVariant={TextVariant.HeadingSm} data-testid={INPUT_TEST_ID} />,
    );
    const input = screen.getByTestId(INPUT_TEST_ID);
    expect(input).toHaveClass('text-s-heading-sm');
  });

  it('calls onChange when value changes', () => {
    const onChange = jest.fn();
    render(<Input onChange={onChange} data-testid={INPUT_TEST_ID} />);
    const input = screen.getByTestId(INPUT_TEST_ID);
    fireEvent.change(input, { target: { value: 'test' } });
    expect(onChange).toHaveBeenCalled();
  });
});
