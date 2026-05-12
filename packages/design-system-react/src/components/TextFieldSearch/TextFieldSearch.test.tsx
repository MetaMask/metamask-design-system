import { fireEvent, render, screen } from '@testing-library/react';
import React, { createRef } from 'react';

import { TextFieldSearch } from './TextFieldSearch';

const ROOT_TEST_ID = 'text-field-search';
const CLEAR_BUTTON_TEST_ID = 'text-field-search-clear-button';
const noop = () => undefined;

describe('TextFieldSearch', () => {
  describe('rendering', () => {
    it('renders root container and inner search input', () => {
      render(
        <TextFieldSearch data-testid={ROOT_TEST_ID} onChange={noop} value="" />,
      );

      expect(screen.getByTestId(ROOT_TEST_ID)).toBeInTheDocument();
      expect(screen.getByRole('searchbox')).toBeInTheDocument();
    });

    it('renders the default search icon as start accessory', () => {
      const { container } = render(
        <TextFieldSearch onChange={noop} value="" />,
      );

      // Icon renders an <svg>; assert one exists before the input.
      expect(container.querySelector('svg')).toBeInTheDocument();
    });

    it('allows overriding the start accessory', () => {
      render(
        <TextFieldSearch
          onChange={noop}
          value=""
          startAccessory={<span data-testid="custom-start">$</span>}
        />,
      );

      expect(screen.getByTestId('custom-start')).toBeInTheDocument();
    });

    it('forwards refs to the root container', () => {
      const ref = createRef<HTMLDivElement>();
      render(
        <TextFieldSearch
          ref={ref}
          data-testid={ROOT_TEST_ID}
          onChange={noop}
          value=""
        />,
      );

      expect(ref.current).toBe(screen.getByTestId(ROOT_TEST_ID));
    });
  });

  describe('clear button', () => {
    it('is hidden when value is empty', () => {
      render(<TextFieldSearch onChange={noop} value="" />);

      expect(
        screen.queryByTestId(CLEAR_BUTTON_TEST_ID),
      ).not.toBeInTheDocument();
    });

    it('is shown when value is truthy', () => {
      render(<TextFieldSearch onChange={noop} value="hello" />);

      expect(screen.getByTestId(CLEAR_BUTTON_TEST_ID)).toBeInTheDocument();
    });

    it('is hidden when showClearButton is false even with a value', () => {
      render(
        <TextFieldSearch
          onChange={noop}
          value="hello"
          showClearButton={false}
        />,
      );

      expect(
        screen.queryByTestId(CLEAR_BUTTON_TEST_ID),
      ).not.toBeInTheDocument();
    });

    it('calls clearButtonOnClick when pressed', () => {
      const onClick = jest.fn();
      render(
        <TextFieldSearch
          onChange={noop}
          value="hello"
          clearButtonOnClick={onClick}
        />,
      );

      fireEvent.click(screen.getByTestId(CLEAR_BUTTON_TEST_ID));

      expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('uses a default "Clear" aria-label', () => {
      render(<TextFieldSearch onChange={noop} value="hello" />);

      expect(screen.getByRole('button', { name: 'Clear' })).toBeInTheDocument();
    });

    it('disables the clear button when isDisabled is true', () => {
      const onClick = jest.fn();
      render(
        <TextFieldSearch
          onChange={noop}
          value="hello"
          isDisabled
          clearButtonOnClick={onClick}
        />,
      );

      const clearButton = screen.getByTestId(CLEAR_BUTTON_TEST_ID);

      expect(clearButton).toBeDisabled();

      fireEvent.click(clearButton);
      expect(onClick).not.toHaveBeenCalled();
    });

    it('allows overriding the clear button aria-label via clearButtonProps', () => {
      render(
        <TextFieldSearch
          onChange={noop}
          value="hello"
          clearButtonProps={{ ariaLabel: 'Clear search' }}
        />,
      );

      expect(
        screen.getByRole('button', { name: 'Clear search' }),
      ).toBeInTheDocument();
    });
  });

  describe('end accessory composition', () => {
    it('renders provided endAccessory alongside the clear button', () => {
      render(
        <TextFieldSearch
          onChange={noop}
          value="hello"
          endAccessory={<span data-testid="custom-end">extra</span>}
        />,
      );

      expect(screen.getByTestId(CLEAR_BUTTON_TEST_ID)).toBeInTheDocument();
      expect(screen.getByTestId('custom-end')).toBeInTheDocument();
    });

    it('renders endAccessory when there is no clear button', () => {
      render(
        <TextFieldSearch
          onChange={noop}
          value=""
          endAccessory={<span data-testid="custom-end">extra</span>}
        />,
      );

      expect(screen.getByTestId('custom-end')).toBeInTheDocument();
      expect(
        screen.queryByTestId(CLEAR_BUTTON_TEST_ID),
      ).not.toBeInTheDocument();
    });
  });

  describe('forwarding to TextField', () => {
    it('sets the input type to "search"', () => {
      render(<TextFieldSearch onChange={noop} value="" />);

      expect(screen.getByRole('searchbox')).toHaveAttribute('type', 'search');
    });

    it('forwards onChange events from the inner input', () => {
      const onChange = jest.fn();
      render(<TextFieldSearch onChange={onChange} value="" />);

      fireEvent.change(screen.getByRole('searchbox'), {
        target: { value: 'h' },
      });

      expect(onChange).toHaveBeenCalledTimes(1);
    });
  });
});
