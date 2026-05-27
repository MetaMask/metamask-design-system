import { fireEvent, render, screen } from '@testing-library/react';
import React, { createRef } from 'react';

import { TextField } from './TextField';
import { TextFieldSize, TextFieldType } from './TextField.types';

const ROOT_TEST_ID = 'textfield';
const noop = () => undefined;

describe('TextField', () => {
  describe('rendering', () => {
    it('renders with default props', () => {
      render(<TextField data-testid={ROOT_TEST_ID} onChange={noop} value="" />);

      expect(screen.getByTestId(ROOT_TEST_ID)).toBeInTheDocument();
      expect(screen.getByRole('textbox')).toBeInTheDocument();
    });

    it('renders placeholder and value on inner input', () => {
      render(
        <TextField
          placeholder="Enter value"
          value="hello"
          onChange={() => undefined}
        />,
      );

      expect(screen.getByRole('textbox')).toHaveAttribute(
        'placeholder',
        'Enter value',
      );
      expect(screen.getByRole('textbox')).toHaveValue('hello');
    });

    it('renders start and end accessories', () => {
      render(
        <TextField
          data-testid={ROOT_TEST_ID}
          onChange={noop}
          value=""
          startAccessory={<span data-testid="start">$</span>}
          endAccessory={<span data-testid="end">USD</span>}
        />,
      );

      expect(screen.getByTestId('start')).toBeInTheDocument();
      expect(screen.getByTestId('end')).toBeInTheDocument();
    });

    it('renders a custom inputElement when provided', () => {
      render(
        <TextField
          value=""
          inputElement={<input data-testid="custom-input" />}
        />,
      );

      expect(screen.getByTestId('custom-input')).toBeInTheDocument();
      expect(screen.queryByRole('textbox')).toBe(
        screen.getByTestId('custom-input'),
      );
    });
  });

  describe('size', () => {
    const cases: { size: TextFieldSize; heightClass: string }[] = [
      { size: TextFieldSize.Sm, heightClass: 'h-8' },
      { size: TextFieldSize.Md, heightClass: 'h-10' },
      { size: TextFieldSize.Lg, heightClass: 'h-12' },
    ];

    cases.forEach(({ size, heightClass }) => {
      it(`applies the ${heightClass} height for size ${size}`, () => {
        render(
          <TextField
            data-testid={ROOT_TEST_ID}
            size={size}
            onChange={noop}
            value=""
          />,
        );

        expect(screen.getByTestId(ROOT_TEST_ID)).toHaveClass(heightClass);
      });
    });
  });

  describe('type', () => {
    it('forwards type to the inner input', () => {
      render(
        <TextField
          data-testid={ROOT_TEST_ID}
          type={TextFieldType.Password}
          onChange={noop}
          value=""
        />,
      );

      expect(
        screen.getByTestId(ROOT_TEST_ID).querySelector('input'),
      ).toHaveAttribute('type', 'password');
    });
  });

  describe('state', () => {
    it('applies the error border when isError is true', () => {
      render(
        <TextField
          data-testid={ROOT_TEST_ID}
          isError
          onChange={noop}
          value=""
        />,
      );

      expect(screen.getByTestId(ROOT_TEST_ID)).toHaveClass(
        'border-error-default',
      );
      expect(screen.getByRole('textbox')).toHaveAttribute(
        'aria-invalid',
        'true',
      );
    });

    it('applies the disabled state when isDisabled is true', () => {
      render(
        <TextField
          data-testid={ROOT_TEST_ID}
          isDisabled
          onChange={noop}
          value=""
        />,
      );

      expect(screen.getByTestId(ROOT_TEST_ID)).toHaveClass(
        'cursor-not-allowed',
        'opacity-50',
      );
      expect(screen.getByRole('textbox')).toBeDisabled();
    });

    it('marks the inner input as readonly when isReadOnly is true', () => {
      render(<TextField isReadOnly value="locked" />);

      expect(screen.getByRole('textbox')).toHaveAttribute('readonly');
    });

    it('applies the focused border on focus and removes it on blur', () => {
      render(<TextField data-testid={ROOT_TEST_ID} onChange={noop} value="" />);

      const root = screen.getByTestId(ROOT_TEST_ID);
      const input = screen.getByRole('textbox');

      fireEvent.focus(input);
      expect(root).toHaveClass('border-default');
      expect(root).not.toHaveClass('border-muted');

      fireEvent.blur(input);
      expect(root).toHaveClass('border-muted');
      expect(root).not.toHaveClass('border-default');
    });

    it('clears focused state when isDisabled becomes true', () => {
      const { rerender } = render(
        <TextField data-testid={ROOT_TEST_ID} onChange={noop} value="" />,
      );
      fireEvent.focus(screen.getByRole('textbox'));
      expect(screen.getByTestId(ROOT_TEST_ID)).toHaveClass('border-default');

      rerender(
        <TextField
          data-testid={ROOT_TEST_ID}
          isDisabled
          onChange={noop}
          value=""
        />,
      );

      expect(screen.getByTestId(ROOT_TEST_ID)).not.toHaveClass(
        'border-default',
      );
    });
  });

  describe('truncate', () => {
    it('applies the truncate class on the inner input by default', () => {
      render(<TextField onChange={noop} value="" />);

      expect(screen.getByRole('textbox')).toHaveClass('truncate');
    });

    it('omits the truncate class when truncate is false', () => {
      render(<TextField truncate={false} onChange={noop} value="" />);

      expect(screen.getByRole('textbox')).not.toHaveClass('truncate');
    });
  });

  describe('events', () => {
    it('calls onChange when the inner input changes', () => {
      const onChange = jest.fn();
      render(<TextField onChange={onChange} value="" />);

      fireEvent.change(screen.getByRole('textbox'), {
        target: { value: 'next' },
      });

      expect(onChange).toHaveBeenCalledTimes(1);
    });

    it('focuses the inner input when the container is clicked', () => {
      render(<TextField data-testid={ROOT_TEST_ID} onChange={noop} value="" />);

      fireEvent.click(screen.getByTestId(ROOT_TEST_ID));

      expect(screen.getByRole('textbox')).toHaveFocus();
    });

    it('calls onClick when the container is clicked and not disabled', () => {
      const onClick = jest.fn();
      render(
        <TextField
          data-testid={ROOT_TEST_ID}
          onClick={onClick}
          onChange={noop}
          value=""
        />,
      );

      fireEvent.click(screen.getByTestId(ROOT_TEST_ID));

      expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('does not focus or call onClick when isDisabled', () => {
      const onClick = jest.fn();
      render(
        <TextField
          data-testid={ROOT_TEST_ID}
          isDisabled
          onClick={onClick}
          onChange={noop}
          value=""
        />,
      );

      fireEvent.click(screen.getByTestId(ROOT_TEST_ID));

      expect(onClick).not.toHaveBeenCalled();
      expect(screen.getByRole('textbox')).not.toHaveFocus();
    });

    it('calls onFocus and onBlur', () => {
      const onFocus = jest.fn();
      const onBlur = jest.fn();
      render(
        <TextField
          onBlur={onBlur}
          onFocus={onFocus}
          onChange={noop}
          value=""
        />,
      );

      fireEvent.focus(screen.getByRole('textbox'));
      expect(onFocus).toHaveBeenCalledTimes(1);

      fireEvent.blur(screen.getByRole('textbox'));
      expect(onBlur).toHaveBeenCalledTimes(1);
    });
  });

  describe('refs', () => {
    it('forwards ref to the root element', () => {
      const ref = createRef<HTMLDivElement>();
      render(<TextField ref={ref} onChange={noop} value="" />);

      expect(ref.current).toBeInstanceOf(HTMLDivElement);
    });

    it('forwards inputRef to the inner input (object ref)', () => {
      const inputRef = createRef<HTMLInputElement>();
      render(<TextField inputRef={inputRef} onChange={noop} value="" />);

      expect(inputRef.current).toBeInstanceOf(HTMLInputElement);
    });

    it('forwards inputRef to the inner input (callback ref)', () => {
      const inputRef = jest.fn();
      render(<TextField inputRef={inputRef} onChange={noop} value="" />);

      expect(inputRef).toHaveBeenCalledWith(expect.any(HTMLInputElement));
    });
  });

  describe('inputProps', () => {
    it('merges inputProps.className with the inner input default classes', () => {
      render(
        <TextField
          inputProps={{ className: 'mt-2' }}
          onChange={noop}
          value=""
        />,
      );

      expect(screen.getByRole('textbox')).toHaveClass('mt-2', 'flex-1');
    });
  });

  describe('className', () => {
    it('merges custom className onto the root container', () => {
      render(
        <TextField
          data-testid={ROOT_TEST_ID}
          className="ring-2"
          onChange={noop}
          value=""
        />,
      );

      expect(screen.getByTestId(ROOT_TEST_ID)).toHaveClass('ring-2');
    });
  });
});
