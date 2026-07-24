import { SensitiveTextLength } from '@metamask/design-system-shared';
import { render } from '@testing-library/react-native';
import React from 'react';

import { Text } from '../../Text';

import { TextOrChildren } from './TextOrChildren';

describe('TextOrChildren', () => {
  it('renders Text component when children is a string', () => {
    const { getByText } = render(<TextOrChildren>Sample Text</TextOrChildren>);
    expect(getByText('Sample Text')).toBeDefined();
  });

  it('hides string children when textProps.isHidden is true', () => {
    const { getByText, queryByText } = render(
      <TextOrChildren textProps={{ isHidden: true }}>
        Sensitive Information
      </TextOrChildren>,
    );

    expect(queryByText('Sensitive Information')).toBeNull();
    expect(getByText('••••••')).toBeDefined();
  });

  it('renders custom bullet length when textProps.length is set with isHidden', () => {
    const { getByText } = render(
      <TextOrChildren
        textProps={{ isHidden: true, length: SensitiveTextLength.Medium }}
      >
        Sensitive Information
      </TextOrChildren>,
    );

    expect(
      getByText('•'.repeat(Number(SensitiveTextLength.Medium))),
    ).toBeDefined();
  });

  it('renders child components when children is not a string', () => {
    const { getByText } = render(
      <TextOrChildren>
        <Text>Nested Text</Text>
      </TextOrChildren>,
    );

    expect(getByText('Nested Text')).toBeDefined();
  });

  it('does not hide ReactNode children when textProps.isHidden is true', () => {
    const { getByText, queryByText } = render(
      <TextOrChildren textProps={{ isHidden: true }}>
        <Text>Nested Text</Text>
      </TextOrChildren>,
    );

    expect(getByText('Nested Text')).toBeDefined();
    expect(queryByText('••••••')).toBeNull();
  });

  it('renders nothing when children is null', () => {
    const { toJSON } = render(<TextOrChildren>{null}</TextOrChildren>);
    expect(toJSON()).toBeNull();
  });
});
