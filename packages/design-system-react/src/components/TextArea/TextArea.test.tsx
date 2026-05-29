import { render, screen, fireEvent } from '@testing-library/react';
import React, { createRef } from 'react';

import { TextArea } from './TextArea';
import { TextAreaResize } from './TextArea.constants';

const ROOT_TEST_ID = 'text-area';
const noop = () => undefined;

describe('TextArea', () => {
  describe('rendering', () => {
    it('renders with default props', () => {
      render(
        <TextArea
          data-testid={ROOT_TEST_ID}
          onChange={noop}
          placeholder="Enter text"
          value=""
        />,
      );

      expect(screen.getByTestId(ROOT_TEST_ID)).toBeInTheDocument();
      expect(screen.getByRole('textbox')).toHaveAttribute(
        'placeholder',
        'Enter text',
      );
      expect(screen.getByRole('textbox')).not.toBeDisabled();
      expect(screen.getByRole('textbox')).not.toHaveAttribute('readonly');
      expect(screen.getByRole('textbox')).not.toHaveAttribute('aria-invalid');
    });

    it('renders placeholder and value on the inner textarea', () => {
      render(
        <TextArea placeholder="Enter value" value="hello" onChange={noop} />,
      );

      expect(screen.getByRole('textbox')).toHaveValue('hello');
    });

    it('renders a custom inputElement when provided', () => {
      render(
        <TextArea
          value=""
          inputElement={<textarea data-testid="custom-input" />}
        />,
      );

      expect(screen.getByTestId('custom-input')).toBeInTheDocument();
      expect(screen.queryByRole('textbox')).toBe(
        screen.getByTestId('custom-input'),
      );
    });
  });

  describe('inputProps', () => {
    it('forwards inputProps to the inner textarea', () => {
      render(
        <TextArea
          value=""
          onChange={noop}
          placeholder="forwarded"
          inputProps={{ 'aria-label': 'forwarded-label' }}
        />,
      );

      expect(screen.getByLabelText('forwarded-label')).toBe(
        screen.getByRole('textbox'),
      );
    });

    it('merges inputProps.className with the inner textarea default classes', () => {
      render(
        <TextArea
          value=""
          onChange={noop}
          inputProps={{ className: 'mt-2' }}
        />,
      );

      expect(screen.getByRole('textbox')).toHaveClass('mt-2', 'flex-1');
    });
  });

  describe('resize', () => {
    const cases: { resize: TextAreaResize; resizeClass: string }[] = [
      { resize: TextAreaResize.Vertical, resizeClass: 'resize-y' },
      { resize: TextAreaResize.None, resizeClass: 'resize-none' },
      { resize: TextAreaResize.Both, resizeClass: 'resize' },
      { resize: TextAreaResize.Horizontal, resizeClass: 'resize-x' },
    ];

    cases.forEach(({ resize, resizeClass }) => {
      it(`applies ${resizeClass} when resize is ${resize}`, () => {
        render(<TextArea value="" onChange={noop} resize={resize} />);

        expect(screen.getByRole('textbox')).toHaveClass(resizeClass);
      });
    });

    it('does not allow resize by default', () => {
      render(<TextArea value="" onChange={noop} />);

      expect(screen.getByRole('textbox')).toHaveClass('resize-none');
    });
  });

  describe('state', () => {
    it('applies disabled state when isDisabled is true', () => {
      render(
        <TextArea
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

    it('marks the inner textarea readonly when isReadOnly is true', () => {
      render(<TextArea isReadOnly value="Locked" onChange={noop} />);

      expect(screen.getByRole('textbox')).toHaveAttribute('readonly');
      expect(screen.getByRole('textbox')).toHaveValue('Locked');
    });

    it('applies error styling and aria-invalid when isError is true', () => {
      render(
        <TextArea
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

    it('applies focused border on focus and restores muted border on blur', () => {
      render(<TextArea data-testid={ROOT_TEST_ID} onChange={noop} value="" />);

      const root = screen.getByTestId(ROOT_TEST_ID);
      const textarea = screen.getByRole('textbox');

      fireEvent.focus(textarea);
      expect(root).toHaveClass('border-default');
      expect(root).not.toHaveClass('border-muted');

      fireEvent.blur(textarea);
      expect(root).toHaveClass('border-muted');
      expect(root).not.toHaveClass('border-default');
    });

    it('keeps error border when focused and isError is true', () => {
      render(
        <TextArea
          data-testid={ROOT_TEST_ID}
          isError
          onChange={noop}
          value=""
        />,
      );

      fireEvent.focus(screen.getByRole('textbox'));

      expect(screen.getByTestId(ROOT_TEST_ID)).toHaveClass(
        'border-error-default',
      );
      expect(screen.getByTestId(ROOT_TEST_ID)).not.toHaveClass(
        'border-default',
      );
    });

    it('clears focused state when isDisabled becomes true', () => {
      const { rerender } = render(
        <TextArea data-testid={ROOT_TEST_ID} onChange={noop} value="" />,
      );

      fireEvent.focus(screen.getByRole('textbox'));
      expect(screen.getByTestId(ROOT_TEST_ID)).toHaveClass('border-default');

      rerender(
        <TextArea
          data-testid={ROOT_TEST_ID}
          isDisabled
          onChange={noop}
          value=""
        />,
      );

      expect(screen.getByTestId(ROOT_TEST_ID)).not.toHaveClass(
        'border-default',
      );
      expect(screen.getByTestId(ROOT_TEST_ID)).toHaveClass('border-muted');
    });

    it('clears focused state when isReadOnly becomes true', () => {
      const { rerender } = render(
        <TextArea data-testid={ROOT_TEST_ID} onChange={noop} value="" />,
      );

      fireEvent.focus(screen.getByRole('textbox'));
      expect(screen.getByTestId(ROOT_TEST_ID)).toHaveClass('border-default');

      rerender(
        <TextArea
          data-testid={ROOT_TEST_ID}
          isReadOnly
          onChange={noop}
          value=""
        />,
      );

      expect(screen.getByTestId(ROOT_TEST_ID)).not.toHaveClass(
        'border-default',
      );
      expect(screen.getByTestId(ROOT_TEST_ID)).toHaveClass('border-muted');
    });

    it('starts focused when autoFocus is true', () => {
      render(
        <TextArea
          data-testid={ROOT_TEST_ID}
          autoFocus
          onChange={noop}
          value=""
        />,
      );

      expect(screen.getByTestId(ROOT_TEST_ID)).toHaveClass('border-default');
    });
  });

  describe('textarea attributes', () => {
    it('applies rows, cols, maxLength, name, id, and required', () => {
      render(
        <TextArea
          value=""
          onChange={noop}
          rows={5}
          cols={40}
          maxLength={200}
          name="notes"
          id="notes-id"
          required
        />,
      );

      const textarea = screen.getByRole('textbox');
      expect(textarea).toHaveAttribute('rows', '5');
      expect(textarea).toHaveAttribute('cols', '40');
      expect(textarea).toHaveAttribute('maxlength', '200');
      expect(textarea).toHaveAttribute('name', 'notes');
      expect(textarea).toHaveAttribute('id', 'notes-id');
      expect(textarea).toBeRequired();
    });
  });

  describe('events', () => {
    it('calls onChange when value changes', () => {
      const onChange = jest.fn();
      render(<TextArea value="" onChange={onChange} />);

      fireEvent.change(screen.getByRole('textbox'), {
        target: { value: 'test' },
      });

      expect(onChange).toHaveBeenCalledTimes(1);
    });

    it('calls onFocus and onBlur', () => {
      const onFocus = jest.fn();
      const onBlur = jest.fn();
      render(
        <TextArea value="" onChange={noop} onFocus={onFocus} onBlur={onBlur} />,
      );

      fireEvent.focus(screen.getByRole('textbox'));
      fireEvent.blur(screen.getByRole('textbox'));

      expect(onFocus).toHaveBeenCalledTimes(1);
      expect(onBlur).toHaveBeenCalledTimes(1);
    });

    it('focuses the inner textarea when the container is clicked', () => {
      render(<TextArea data-testid={ROOT_TEST_ID} value="" onChange={noop} />);

      fireEvent.click(screen.getByTestId(ROOT_TEST_ID));

      expect(screen.getByRole('textbox')).toHaveFocus();
    });

    it('calls onClick when the container is clicked and not disabled', () => {
      const onClick = jest.fn();
      render(
        <TextArea
          data-testid={ROOT_TEST_ID}
          value=""
          onChange={noop}
          onClick={onClick}
        />,
      );

      fireEvent.click(screen.getByTestId(ROOT_TEST_ID));

      expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('does not focus or call onClick when isDisabled', () => {
      const onClick = jest.fn();
      render(
        <TextArea
          data-testid={ROOT_TEST_ID}
          isDisabled
          value=""
          onChange={noop}
          onClick={onClick}
        />,
      );

      fireEvent.click(screen.getByTestId(ROOT_TEST_ID));

      expect(onClick).not.toHaveBeenCalled();
      expect(screen.getByRole('textbox')).not.toHaveFocus();
    });
  });

  describe('refs', () => {
    it('forwards ref to the root element', () => {
      const ref = createRef<HTMLDivElement>();
      render(<TextArea ref={ref} value="" onChange={noop} />);

      expect(ref.current).toBeInstanceOf(HTMLDivElement);
    });

    it('forwards inputRef to the inner textarea (object ref)', () => {
      const inputRef = createRef<HTMLTextAreaElement>();
      render(<TextArea inputRef={inputRef} value="" onChange={noop} />);

      expect(inputRef.current).toBeInstanceOf(HTMLTextAreaElement);
    });

    it('forwards inputRef to the inner textarea (callback ref)', () => {
      const inputRef = jest.fn();
      render(<TextArea inputRef={inputRef} value="" onChange={noop} />);

      expect(inputRef).toHaveBeenCalledWith(expect.any(HTMLTextAreaElement));
    });
  });

  describe('className and style', () => {
    it('merges custom className onto the root container', () => {
      render(
        <TextArea
          data-testid={ROOT_TEST_ID}
          className="ring-2"
          value=""
          onChange={noop}
        />,
      );

      expect(screen.getByTestId(ROOT_TEST_ID)).toHaveClass('ring-2');
    });

    it('merges custom style onto the root container', () => {
      render(
        <TextArea
          data-testid={ROOT_TEST_ID}
          style={{ marginBottom: 20 }}
          value=""
          onChange={noop}
        />,
      );

      expect(screen.getByTestId(ROOT_TEST_ID)).toHaveStyle({
        marginBottom: '20px',
      });
    });
  });
});
