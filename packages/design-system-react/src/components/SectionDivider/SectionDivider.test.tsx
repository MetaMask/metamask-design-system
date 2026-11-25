import { BoxBorderColor } from '@metamask/design-system-shared';
import type { BoxBorderWidth } from '@metamask/design-system-shared';
import { render } from '@testing-library/react';
import React, { createRef } from 'react';

import { SectionDivider } from './SectionDivider';

const borderWidthCases: [BoxBorderWidth | undefined, string][] = [
  [undefined, 'border-t'],
  [0, 'border-t-0'],
  [1, 'border-t'],
  [2, 'border-t-2'],
  [4, 'border-t-4'],
  [8, 'border-t-8'],
];

describe('SectionDivider', () => {
  describe('when rendered with defaults', () => {
    it('renders a separator with the default line', () => {
      const { getByRole } = render(<SectionDivider />);

      expect(getByRole('separator')).toHaveClass(
        'my-5',
        'border-t',
        'border-muted',
        'self-stretch',
      );
    });
  });

  describe('when borderWidth is set', () => {
    it.each(borderWidthCases)(
      'maps borderWidth %s to %s',
      (borderWidth, expectedClass) => {
        const { getByRole } = render(
          <SectionDivider borderWidth={borderWidth} />,
        );

        expect(getByRole('separator')).toHaveClass(expectedClass);
      },
    );
  });

  describe('when marginVertical is 0', () => {
    it('applies my-0 instead of the default my-5', () => {
      const { getByRole } = render(<SectionDivider marginVertical={0} />);

      expect(getByRole('separator')).toHaveClass('my-0');
      expect(getByRole('separator')).not.toHaveClass('my-5');
    });
  });

  describe('when borderColor is overridden', () => {
    it('applies the given border color token', () => {
      const { getByRole } = render(
        <SectionDivider borderColor={BoxBorderColor.BorderDefault} />,
      );

      expect(getByRole('separator')).toHaveClass('border-default');
    });
  });

  describe('when className is provided', () => {
    it('merges className into resolved classes', () => {
      const { getByRole } = render(<SectionDivider className="opacity-50" />);

      expect(getByRole('separator')).toHaveClass('opacity-50');
    });

    it('lets className override the default stretch', () => {
      const { getByRole } = render(<SectionDivider className="self-center" />);

      expect(getByRole('separator')).toHaveClass('self-center');
      expect(getByRole('separator')).not.toHaveClass('self-stretch');
    });
  });

  describe('when style is provided', () => {
    it('forwards the style to the separator', () => {
      const { getByRole } = render(<SectionDivider style={{ opacity: 0.4 }} />);

      expect(getByRole('separator')).toHaveStyle({ opacity: '0.4' });
    });
  });

  describe('ref forwarding', () => {
    it('exposes the hr element on ref', () => {
      const ref = createRef<HTMLHRElement>();

      render(<SectionDivider ref={ref} />);

      expect(ref.current).toBeInstanceOf(HTMLHRElement);
    });
  });
});
