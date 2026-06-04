import { SensitiveTextLength } from '@metamask/design-system-shared';
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { render, renderHook } from '@testing-library/react-native';
import React from 'react';

import { TextVariant, TextColor } from '../Text';

import { SensitiveText } from './SensitiveText';

describe('SensitiveText', () => {
  it('renders correctly', async () => {
    const { getByTestId } = await render(
      <SensitiveText testID="sensitive-text">
        Sensitive Information
      </SensitiveText>,
    );
    expect(getByTestId('sensitive-text')).toBeDefined();
  });

  it('passes testID to the root Text element', async () => {
    const { getByTestId } = await render(
      <SensitiveText testID="custom-test-id">Content</SensitiveText>,
    );
    expect(getByTestId('custom-test-id')).toBeDefined();
  });

  it('displays the text when isHidden is false', async () => {
    const { getByText } = await render(
      <SensitiveText>Sensitive Information</SensitiveText>,
    );
    expect(getByText('Sensitive Information')).toBeDefined();
  });

  it('hides the text when isHidden is true', async () => {
    const { queryByText, getByText } = await render(
      <SensitiveText isHidden>Sensitive Information</SensitiveText>,
    );
    expect(queryByText('Sensitive Information')).toBeNull();
    expect(getByText('••••••')).toBeDefined();
  });

  it('renders the correct number of bullets for each predefined length', async () => {
    for (const [key, value] of Object.entries(SensitiveTextLength)) {
      const { getByText } = await render(
        <SensitiveText isHidden length={value}>
          {`Hidden (${key})`}
        </SensitiveText>,
      );
      expect(getByText('•'.repeat(Number(value)))).toBeDefined();
    }
  });

  it('handles custom length as a string', async () => {
    const { getByText } = await render(
      <SensitiveText isHidden length="15">
        Custom Length
      </SensitiveText>,
    );
    expect(getByText('•••••••••••••••')).toBeDefined();
  });

  it('falls back to Short length for invalid custom length', async () => {
    const consoleSpy = jest.spyOn(console, 'warn').mockImplementation();
    const { getByText } = await render(
      <SensitiveText isHidden length="invalid">
        Invalid Length
      </SensitiveText>,
    );
    expect(getByText('••••••')).toBeDefined();
    consoleSpy.mockRestore();
  });

  it('logs a warning for invalid custom length', async () => {
    const consoleSpy = jest.spyOn(console, 'warn').mockImplementation();
    await render(
      <SensitiveText isHidden length="abc">
        Warning Test
      </SensitiveText>,
    );
    expect(consoleSpy).toHaveBeenCalledWith(
      'Invalid length provided: abc. Falling back to Short.',
    );
    consoleSpy.mockRestore();
  });

  it('renders empty fallback when length is a non-numeric key of SensitiveTextLength', async () => {
    // Passing a key name like "Short" instead of a value like "6"
    // passes the `in` check but Number("Short") is NaN
    const { getByTestId } = await render(
      <SensitiveText isHidden length={'Short' as string} testID="nan-test">
        NaN Length
      </SensitiveText>,
    );
    expect(getByTestId('nan-test').children).toStrictEqual([]);
  });

  it('applies the correct text color', async () => {
    const { result } = await renderHook(() => useTailwind());
    const tw = result.current;
    const { getByText } = await render(
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

  it('applies text variant', async () => {
    const { getByText } = await render(
      <SensitiveText variant={TextVariant.HeadingSm}>
        Heading Text
      </SensitiveText>,
    );
    expect(getByText('Heading Text')).toBeDefined();
  });

  it('passes accessibilityLabel to the root element', async () => {
    const { getByLabelText } = await render(
      <SensitiveText accessibilityLabel="balance" isHidden>
        $1,234.56
      </SensitiveText>,
    );
    expect(getByLabelText('balance')).toBeDefined();
  });
});
