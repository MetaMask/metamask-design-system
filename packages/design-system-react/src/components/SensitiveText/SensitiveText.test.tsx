import { SensitiveTextLength } from '@metamask/design-system-shared';
import { render, screen } from '@testing-library/react';
import React from 'react';

import { SensitiveText } from './SensitiveText';

describe('SensitiveText', () => {
  describe('isHidden', () => {
    it('renders the children when false', () => {
      render(<SensitiveText>Sensitive Information</SensitiveText>);

      expect(screen.getByText('Sensitive Information')).toBeInTheDocument();
    });

    it('replaces children with bullets when true', () => {
      render(<SensitiveText isHidden>Sensitive Information</SensitiveText>);

      expect(
        screen.queryByText('Sensitive Information'),
      ).not.toBeInTheDocument();
      expect(screen.getByText('••••••')).toBeInTheDocument();
    });
  });

  describe('length', () => {
    it.each(Object.entries(SensitiveTextLength))(
      'renders %s bullets for SensitiveTextLength.%s',
      (_key, value) => {
        render(
          <SensitiveText isHidden length={value}>
            Hidden
          </SensitiveText>,
        );

        expect(screen.getByText('•'.repeat(Number(value)))).toBeInTheDocument();
      },
    );

    it('renders the requested number of bullets for a custom numeric string', () => {
      render(
        <SensitiveText isHidden length="15">
          Hidden
        </SensitiveText>,
      );

      expect(screen.getByText('•'.repeat(15))).toBeInTheDocument();
    });

    it('renders no bullets when length is a non-numeric key of SensitiveTextLength', () => {
      // Passing the key name "Short" (instead of its value "6") satisfies the
      // `in` check but `Number("Short")` is NaN, so the fallback string is empty.
      render(
        <SensitiveText
          isHidden
          length={'Short' as unknown as string}
          data-testid="nan-test"
        >
          Hidden
        </SensitiveText>,
      );

      expect(screen.getByTestId('nan-test')).toHaveTextContent('');
    });

    it('falls back to Short and warns for an invalid custom length', () => {
      const consoleSpy = jest.spyOn(console, 'warn').mockImplementation();

      render(
        <SensitiveText isHidden length="abc">
          Hidden
        </SensitiveText>,
      );

      expect(
        screen.getByText('•'.repeat(Number(SensitiveTextLength.Short))),
      ).toBeInTheDocument();
      expect(consoleSpy).toHaveBeenCalledWith(
        'Invalid length provided: abc. Falling back to Short.',
      );

      consoleSpy.mockRestore();
    });
  });

  describe('forwarded props', () => {
    it('forwards additional props to the underlying Text', () => {
      render(
        <SensitiveText data-testid="sensitive-text">Visible</SensitiveText>,
      );

      expect(screen.getByTestId('sensitive-text')).toBeInTheDocument();
    });
  });
});
