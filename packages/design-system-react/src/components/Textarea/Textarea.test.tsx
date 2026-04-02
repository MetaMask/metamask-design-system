import { render, screen, fireEvent } from '@testing-library/react';
import React, { createRef } from 'react';

import { TextVariant } from '../../types';

import { Textarea } from './Textarea';
import { TextareaResize } from './Textarea.constants';

const TEST_ID = 'textarea';

describe('Textarea', () => {
  it('renders with default props', () => {
    render(<Textarea data-testid={TEST_ID} placeholder="Enter text" />);
    const textarea = screen.getByTestId(TEST_ID);
    expect(textarea).toBeInTheDocument();
    expect(textarea).toHaveAttribute('placeholder', 'Enter text');
    expect(textarea).not.toBeDisabled();
    expect(textarea).not.toHaveAttribute('readonly');
    expect(textarea).not.toHaveAttribute('aria-invalid');
  });

  it('applies disabled state when isDisabled is true', () => {
    render(
      <Textarea data-testid={TEST_ID} isDisabled placeholder="Disabled" />,
    );
    const textarea = screen.getByTestId(TEST_ID);
    expect(textarea).toBeDisabled();
    expect(textarea).toHaveClass('opacity-50', 'cursor-not-allowed');
  });

  it('applies readOnly when isReadOnly is true', () => {
    render(
      <Textarea
        data-testid={TEST_ID}
        isReadOnly
        placeholder="Readonly"
        defaultValue="Locked"
      />,
    );
    const textarea = screen.getByTestId(TEST_ID);
    expect(textarea).toHaveAttribute('readonly');
    expect(textarea).toHaveValue('Locked');
  });

  it('applies error styling and aria-invalid when isError is true', () => {
    render(<Textarea data-testid={TEST_ID} isError />);
    const textarea = screen.getByTestId(TEST_ID);
    expect(textarea).toHaveAttribute('aria-invalid', 'true');
    expect(textarea).toHaveClass('border-error-default');
  });

  it('does not set aria-invalid when isError is false', () => {
    render(<Textarea data-testid={TEST_ID} />);
    const textarea = screen.getByTestId(TEST_ID);
    expect(textarea).not.toHaveAttribute('aria-invalid');
  });

  it('applies vertical resize class by default', () => {
    render(<Textarea data-testid={TEST_ID} />);
    const textarea = screen.getByTestId(TEST_ID);
    expect(textarea).toHaveClass('resize-y');
  });

  it('applies none resize class when resize is None', () => {
    render(<Textarea data-testid={TEST_ID} resize={TextareaResize.None} />);
    const textarea = screen.getByTestId(TEST_ID);
    expect(textarea).toHaveClass('resize-none');
  });

  it('applies both resize class when resize is Both', () => {
    render(<Textarea data-testid={TEST_ID} resize={TextareaResize.Both} />);
    const textarea = screen.getByTestId(TEST_ID);
    expect(textarea).toHaveClass('resize');
  });

  it('applies horizontal resize class when resize is Horizontal', () => {
    render(
      <Textarea data-testid={TEST_ID} resize={TextareaResize.Horizontal} />,
    );
    const textarea = screen.getByTestId(TEST_ID);
    expect(textarea).toHaveClass('resize-x');
  });

  it('applies textVariant typography classes', () => {
    render(
      <Textarea data-testid={TEST_ID} textVariant={TextVariant.HeadingSm} />,
    );
    const textarea = screen.getByTestId(TEST_ID);
    expect(textarea).toHaveClass('text-s-heading-sm');
  });

  it('merges className with default classes', () => {
    render(<Textarea data-testid={TEST_ID} className="mt-4" />);
    const textarea = screen.getByTestId(TEST_ID);
    expect(textarea).toHaveClass('mt-4');
  });

  it('forwards ref to the textarea element', () => {
    const ref = createRef<HTMLTextAreaElement>();
    render(<Textarea ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLTextAreaElement);
  });

  it('applies rows attribute', () => {
    render(<Textarea data-testid={TEST_ID} rows={5} />);
    const textarea = screen.getByTestId(TEST_ID);
    expect(textarea).toHaveAttribute('rows', '5');
  });

  it('applies cols attribute', () => {
    render(<Textarea data-testid={TEST_ID} cols={40} />);
    const textarea = screen.getByTestId(TEST_ID);
    expect(textarea).toHaveAttribute('cols', '40');
  });

  it('applies maxLength attribute', () => {
    render(<Textarea data-testid={TEST_ID} maxLength={200} />);
    const textarea = screen.getByTestId(TEST_ID);
    expect(textarea).toHaveAttribute('maxlength', '200');
  });

  it('applies required attribute', () => {
    render(<Textarea data-testid={TEST_ID} required />);
    const textarea = screen.getByTestId(TEST_ID);
    expect(textarea).toBeRequired();
  });

  it('renders when autoFocus is set', () => {
    render(<Textarea data-testid={TEST_ID} autoFocus />);
    const textarea = screen.getByTestId(TEST_ID);
    expect(textarea).toBeInTheDocument();
  });

  it('calls onChange when value changes', () => {
    const onChange = jest.fn();
    render(<Textarea data-testid={TEST_ID} onChange={onChange} />);
    const textarea = screen.getByTestId(TEST_ID);
    fireEvent.change(textarea, { target: { value: 'test' } });
    expect(onChange).toHaveBeenCalled();
  });

  it('calls onFocus when focused', () => {
    const onFocus = jest.fn();
    render(<Textarea data-testid={TEST_ID} onFocus={onFocus} />);
    const textarea = screen.getByTestId(TEST_ID);
    fireEvent.focus(textarea);
    expect(onFocus).toHaveBeenCalled();
  });

  it('calls onBlur when blurred', () => {
    const onBlur = jest.fn();
    render(<Textarea data-testid={TEST_ID} onBlur={onBlur} />);
    const textarea = screen.getByTestId(TEST_ID);
    fireEvent.blur(textarea);
    expect(onBlur).toHaveBeenCalled();
  });

  it('calls onClick when clicked', () => {
    const onClick = jest.fn();
    render(<Textarea data-testid={TEST_ID} onClick={onClick} />);
    const textarea = screen.getByTestId(TEST_ID);
    fireEvent.click(textarea);
    expect(onClick).toHaveBeenCalled();
  });

  it('renders with defaultValue', () => {
    render(<Textarea data-testid={TEST_ID} defaultValue="Initial content" />);
    const textarea = screen.getByTestId(TEST_ID);
    expect(textarea).toHaveValue('Initial content');
  });

  it('renders as controlled with value', () => {
    const onChange = jest.fn();
    render(
      <Textarea
        data-testid={TEST_ID}
        value="Controlled value"
        onChange={onChange}
      />,
    );
    const textarea = screen.getByTestId(TEST_ID);
    expect(textarea).toHaveValue('Controlled value');
  });
});
