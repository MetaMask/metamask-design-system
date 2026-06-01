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

    it('renders placeholder and value on the textarea', () => {
      render(
        <TextArea placeholder="Enter value" value="hello" onChange={noop} />,
      );

      expect(screen.getByRole('textbox')).toHaveValue('hello');
    });

    it('renders the textarea as the root element', () => {
      render(<TextArea data-testid={ROOT_TEST_ID} value="" onChange={noop} />);

      expect(screen.getByTestId(ROOT_TEST_ID)).toBe(
        screen.getByRole('textbox'),
      );
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

    it('marks the textarea readonly when isReadOnly is true', () => {
      render(<TextArea isReadOnly value="Locked" onChange={noop} />);

      expect(screen.getByRole('textbox')).toHaveAttribute('readonly');
      expect(screen.getByRole('textbox')).toHaveValue('Locked');
      expect(screen.getByRole('textbox')).toHaveClass(
        'read-only:focus:border-muted',
      );
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

    it('declares focus styling through CSS classes instead of component state', () => {
      render(<TextArea data-testid={ROOT_TEST_ID} onChange={noop} value="" />);

      expect(screen.getByRole('textbox')).toHaveClass('border-muted');
      expect(screen.getByRole('textbox')).toHaveClass('focus:border-default');
      expect(screen.getByRole('textbox')).not.toHaveClass('border-default');
    });

    it('keeps error border when isError is true', () => {
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
      expect(screen.getByTestId(ROOT_TEST_ID)).not.toHaveClass(
        'focus:border-default',
      );
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

    it('calls onClick when the textarea is clicked and not disabled', () => {
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

    it('forwards native textarea event props directly to the textarea', () => {
      const onKeyDown = jest.fn();
      render(
        <TextArea
          data-testid={ROOT_TEST_ID}
          value=""
          onChange={noop}
          onKeyDown={onKeyDown}
        />,
      );

      fireEvent.keyDown(screen.getByRole('textbox'), { key: 'Enter' });

      expect(onKeyDown).toHaveBeenCalledTimes(1);
    });
  });

  describe('refs', () => {
    it('forwards ref to the textarea element', () => {
      const ref = createRef<HTMLTextAreaElement>();
      render(<TextArea ref={ref} value="" onChange={noop} />);

      expect(ref.current).toBeInstanceOf(HTMLTextAreaElement);
    });
  });

  describe('className and style', () => {
    it('merges custom className onto the textarea element', () => {
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

    it('merges custom style onto the textarea element', () => {
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
