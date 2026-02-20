import { render, screen, fireEvent } from '@testing-library/react';
import React, { createRef } from 'react';

import { TextVariant } from '../../types';

import { Input } from './Input';

const TEST_ID = 'input';

describe('Input', () => {
  it('renders with default props', () => {
    render(<Input data-testid={TEST_ID} placeholder="Enter value" />);
    const input = screen.getByTestId(TEST_ID);
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('placeholder', 'Enter value');
    expect(input).not.toBeDisabled();
    expect(input).not.toHaveAttribute('readonly');
  });

  it('applies disabled state when isDisabled is true', () => {
    render(<Input data-testid={TEST_ID} isDisabled placeholder="Disabled" />);
    const input = screen.getByTestId(TEST_ID);
    expect(input).toBeDisabled();
    expect(input).toHaveClass('opacity-50', 'cursor-not-allowed');
  });

  it('applies readOnly when isReadonly is true', () => {
    render(
      <Input
        data-testid={TEST_ID}
        isReadonly
        placeholder="Readonly"
        defaultValue="Locked"
      />,
    );
    const input = screen.getByTestId(TEST_ID);
    expect(input).toHaveAttribute('readonly');
    expect(input).toHaveValue('Locked');
  });

  it('merges className with default classes', () => {
    render(<Input data-testid={TEST_ID} className="mt-4" />);
    const input = screen.getByTestId(TEST_ID);
    expect(input).toHaveClass('mt-4');
  });

  it('forwards ref to the input element', () => {
    const ref = createRef<HTMLInputElement>();
    render(<Input ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });

  it('applies textVariant typography classes', () => {
    render(<Input data-testid={TEST_ID} textVariant={TextVariant.HeadingSm} />);
    const input = screen.getByTestId(TEST_ID);
    expect(input).toHaveClass('text-s-heading-sm');
  });

  it('calls onChange when value changes', () => {
    const onChange = jest.fn();
    render(<Input data-testid={TEST_ID} onChange={onChange} />);
    const input = screen.getByTestId(TEST_ID);
    fireEvent.change(input, { target: { value: 'test' } });
    expect(onChange).toHaveBeenCalled();
  });
});
