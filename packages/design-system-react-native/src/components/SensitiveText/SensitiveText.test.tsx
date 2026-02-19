import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { renderHook } from '@testing-library/react-hooks';
import { render } from '@testing-library/react-native';
import React from 'react';

import { TextVariant, TextColor } from '../Text';

import { SensitiveText } from './SensitiveText';
import { SensitiveTextLength } from './SensitiveText.constants';

describe('SensitiveText', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(
      <SensitiveText testID="sensitive-text">
        Sensitive Information
      </SensitiveText>,
    );
    expect(getByTestId('sensitive-text')).toBeDefined();
  });

  it('passes testID to the root Text element', () => {
    const { getByTestId } = render(
      <SensitiveText testID="custom-test-id">Content</SensitiveText>,
    );
    expect(getByTestId('custom-test-id')).toBeDefined();
  });

  it('displays the text when isHidden is false', () => {
    const { getByText } = render(
      <SensitiveText>Sensitive Information</SensitiveText>,
    );
    expect(getByText('Sensitive Information')).toBeDefined();
  });

  it('hides the text when isHidden is true', () => {
    const { queryByText, getByText } = render(
      <SensitiveText isHidden>Sensitive Information</SensitiveText>,
    );
    expect(queryByText('Sensitive Information')).toBeNull();
    expect(getByText('••••••')).toBeDefined();
  });

  it('renders the correct number of bullets for each predefined length', () => {
    Object.entries(SensitiveTextLength).forEach(([key, value]) => {
      const { getByText } = render(
        <SensitiveText isHidden length={value}>
          {`Hidden (${key})`}
        </SensitiveText>,
      );
      expect(getByText('•'.repeat(Number(value)))).toBeDefined();
    });
  });

  it('handles custom length as a string', () => {
    const { getByText } = render(
      <SensitiveText isHidden length="15">
        Custom Length
      </SensitiveText>,
    );
    expect(getByText('•••••••••••••••')).toBeDefined();
  });

  it('falls back to Short length for invalid custom length', () => {
    const consoleSpy = jest.spyOn(console, 'warn').mockImplementation();
    const { getByText } = render(
      <SensitiveText isHidden length="invalid">
        Invalid Length
      </SensitiveText>,
    );
    expect(getByText('••••••')).toBeDefined();
    consoleSpy.mockRestore();
  });

  it('logs a warning for invalid custom length', () => {
    const consoleSpy = jest.spyOn(console, 'warn').mockImplementation();
    render(
      <SensitiveText isHidden length="abc">
        Warning Test
      </SensitiveText>,
    );
    expect(consoleSpy).toHaveBeenCalledWith(
      'Invalid length provided: abc. Falling back to Short.',
    );
    consoleSpy.mockRestore();
  });

  it('renders empty fallback when length is a non-numeric key of SensitiveTextLength', () => {
    // Passing a key name like "Short" instead of a value like "6"
    // passes the `in` check but Number("Short") is NaN
    const { getByTestId } = render(
      <SensitiveText isHidden length={'Short' as string} testID="nan-test">
        NaN Length
      </SensitiveText>,
    );
    expect(getByTestId('nan-test').children).toStrictEqual([]);
  });

  it('applies the correct text color', () => {
    const tw = renderHook(() => useTailwind()).result.current;
    const { getByText } = render(
      <SensitiveText color={TextColor.TextDefault}>
        Sensitive Information
      </SensitiveText>,
    );
    const textElement = getByText('Sensitive Information');
    const styles = [textElement.props.style].flat();
    const color = styles.find(
      (s: Record<string, unknown>) => s?.color !== undefined,
    )?.color;
    expect(color).toBe(tw.style(TextColor.TextDefault).color);
  });

  it('applies text variant', () => {
    const { getByText } = render(
      <SensitiveText variant={TextVariant.HeadingSm}>
        Heading Text
      </SensitiveText>,
    );
    expect(getByText('Heading Text')).toBeDefined();
  });

  it('passes accessibilityLabel to the root element', () => {
    const { getByLabelText } = render(
      <SensitiveText accessibilityLabel="balance" isHidden>
        $1,234.56
      </SensitiveText>,
    );
    expect(getByLabelText('balance')).toBeDefined();
  });
});
