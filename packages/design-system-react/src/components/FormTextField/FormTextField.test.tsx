import { fireEvent, render, screen } from '@testing-library/react';
import React, { createRef } from 'react';

import { FormTextField } from './FormTextField';

const ROOT_TEST_ID = 'form-text-field';
const noop = () => undefined;

describe('FormTextField', () => {
  describe('rendering', () => {
    it('renders the inner TextField when no label is provided', () => {
      render(
        <FormTextField data-testid={ROOT_TEST_ID} onChange={noop} value="" />,
      );

      expect(screen.getByTestId(ROOT_TEST_ID)).toBeInTheDocument();
      expect(screen.getByRole('textbox')).toBeInTheDocument();
      expect(screen.queryByText(/.+/u)).toBeNull();
    });

    it('renders the label and associates it with the inner input', () => {
      render(
        <FormTextField id="amount" label="Amount" onChange={noop} value="" />,
      );

      const label = screen.getByText('Amount');
      expect(label).toBeInTheDocument();
      expect(label.closest('label')).toHaveAttribute('for', 'amount');
      expect(screen.getByRole('textbox')).toHaveAttribute('id', 'amount');
    });

    it('renders helpText below the field', () => {
      render(
        <FormTextField helpText="Some help text" onChange={noop} value="" />,
      );

      expect(screen.getByText('Some help text')).toBeInTheDocument();
    });

    it('forwards inputElement to the inner TextField, replacing the default input', () => {
      render(
        <FormTextField
          data-testid={ROOT_TEST_ID}
          inputElement={<input data-testid="custom-input" />}
          onChange={noop}
          value=""
        />,
      );

      expect(screen.getByTestId('custom-input')).toBeInTheDocument();
      expect(screen.queryByRole('textbox')).toBe(
        screen.getByTestId('custom-input'),
      );
    });
  });

  describe('error', () => {
    it('renders helpText with the danger severity color when isError is true', () => {
      render(
        <FormTextField helpText="Required" isError onChange={noop} value="" />,
      );

      expect(screen.getByText('Required')).toHaveClass('text-error-default');
      expect(screen.getByRole('textbox')).toHaveAttribute(
        'aria-invalid',
        'true',
      );
    });

    it('renders helpText with the default color when isError is false', () => {
      render(<FormTextField helpText="Optional" onChange={noop} value="" />);

      expect(screen.getByText('Optional')).not.toHaveClass(
        'text-error-default',
      );
    });
  });

  describe('state', () => {
    it('disables the inner input when isDisabled is true', () => {
      render(<FormTextField isDisabled onChange={noop} value="" />);

      expect(screen.getByRole('textbox')).toBeDisabled();
    });

    it('marks the inner input as readonly when isReadOnly is true', () => {
      render(<FormTextField isReadOnly value="locked" />);

      expect(screen.getByRole('textbox')).toHaveAttribute('readonly');
    });
  });

  describe('events', () => {
    it('calls onChange when the inner input changes', () => {
      const onChange = jest.fn();
      render(<FormTextField onChange={onChange} value="" />);

      fireEvent.change(screen.getByRole('textbox'), {
        target: { value: 'next' },
      });

      expect(onChange).toHaveBeenCalledTimes(1);
    });
  });

  describe('refs', () => {
    it('forwards ref to the root element', () => {
      const ref = createRef<HTMLDivElement>();
      render(<FormTextField ref={ref} onChange={noop} value="" />);

      expect(ref.current).toBeInstanceOf(HTMLDivElement);
    });

    it('forwards inputRef to the inner input', () => {
      const inputRef = createRef<HTMLInputElement>();
      render(<FormTextField inputRef={inputRef} onChange={noop} value="" />);

      expect(inputRef.current).toBeInstanceOf(HTMLInputElement);
    });
  });

  describe('forwarded props', () => {
    it('merges labelProps.className with the default label margin class', () => {
      render(
        <FormTextField
          id="amount"
          label="Amount"
          labelProps={{ className: 'text-error-default' }}
          onChange={noop}
          value=""
        />,
      );

      const label = screen.getByText('Amount').closest('label');
      expect(label).toHaveClass('mb-1', 'text-error-default');
    });

    it('merges helpTextProps.className with the default helpText margin class', () => {
      render(
        <FormTextField
          helpText="hint"
          helpTextProps={{ className: 'italic' }}
          onChange={noop}
          value=""
        />,
      );

      expect(screen.getByText('hint')).toHaveClass('mt-1', 'italic');
    });

    it('forwards textFieldProps to the inner TextField', () => {
      render(
        <FormTextField
          onChange={noop}
          textFieldProps={{ title: 'inner-text-field', className: 'ring-2' }}
          value=""
        />,
      );

      expect(screen.getByTitle('inner-text-field')).toHaveClass('ring-2');
    });
  });

  describe('className', () => {
    it('merges custom className onto the root container', () => {
      render(
        <FormTextField
          className="gap-2"
          data-testid={ROOT_TEST_ID}
          onChange={noop}
          value=""
        />,
      );

      expect(screen.getByTestId(ROOT_TEST_ID)).toHaveClass('flex', 'gap-2');
    });
  });
});
