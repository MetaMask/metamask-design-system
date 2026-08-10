import { BoxBorderColor } from '@metamask/design-system-shared';
import { render } from '@testing-library/react';
import React, { createRef } from 'react';

import { SectionDivider } from './SectionDivider';

const ROOT_TEST_ID = 'section-divider';

describe('SectionDivider', () => {
  describe('when rendered with defaults', () => {
    it('applies default border and vertical margin classes', () => {
      const { getByTestId } = render(
        <SectionDivider data-testid={ROOT_TEST_ID} />,
      );

      expect(getByTestId(ROOT_TEST_ID)).toHaveClass(
        'my-5',
        'border-t',
        'border-muted',
      );
    });

    it('applies cross-axis stretch to the root', () => {
      const { getByTestId } = render(
        <SectionDivider data-testid={ROOT_TEST_ID} />,
      );

      expect(getByTestId(ROOT_TEST_ID)).toHaveClass('self-stretch');
    });
  });

  describe('when marginVertical is 0', () => {
    it('applies my-0 instead of default my-5', () => {
      const { getByTestId } = render(
        <SectionDivider data-testid={ROOT_TEST_ID} marginVertical={0} />,
      );

      expect(getByTestId(ROOT_TEST_ID)).toHaveClass('my-0');
      expect(getByTestId(ROOT_TEST_ID)).not.toHaveClass('my-5');
    });
  });

  describe('when borderWidth is 0', () => {
    it('keeps zero border width instead of defaulting to 1', () => {
      const { getByTestId } = render(
        <SectionDivider data-testid={ROOT_TEST_ID} borderWidth={0} />,
      );

      expect(getByTestId(ROOT_TEST_ID)).toHaveClass('border-t-0');
      expect(getByTestId(ROOT_TEST_ID)).not.toHaveClass('border-t');
    });
  });

  describe('when borderWidth is greater than 1', () => {
    it('maps the width to a border-t-* class', () => {
      const { getByTestId } = render(
        <SectionDivider data-testid={ROOT_TEST_ID} borderWidth={2} />,
      );

      expect(getByTestId(ROOT_TEST_ID)).toHaveClass('border-t-2');
    });
  });

  describe('when borderColor is overridden', () => {
    it('applies the given border color token', () => {
      const { getByTestId } = render(
        <SectionDivider
          data-testid={ROOT_TEST_ID}
          borderColor={BoxBorderColor.BorderDefault}
        />,
      );

      expect(getByTestId(ROOT_TEST_ID)).toHaveClass('border-default');
    });
  });

  describe('when className is provided', () => {
    it('merges className into resolved classes', () => {
      const { getByTestId } = render(
        <SectionDivider data-testid={ROOT_TEST_ID} className="opacity-50" />,
      );

      expect(getByTestId(ROOT_TEST_ID)).toHaveClass('opacity-50');
    });

    it('lets className override default self-stretch', () => {
      const { getByTestId } = render(
        <SectionDivider data-testid={ROOT_TEST_ID} className="self-center" />,
      );

      expect(getByTestId(ROOT_TEST_ID)).toHaveClass('self-center');
      expect(getByTestId(ROOT_TEST_ID)).not.toHaveClass('self-stretch');
    });
  });

  describe('ref forwarding', () => {
    it('exposes the underlying element on ref', () => {
      const ref = createRef<HTMLDivElement>();

      render(<SectionDivider ref={ref} data-testid={ROOT_TEST_ID} />);

      expect(ref.current).not.toBeNull();
      expect(ref.current).toBeInstanceOf(HTMLDivElement);
    });
  });
});
