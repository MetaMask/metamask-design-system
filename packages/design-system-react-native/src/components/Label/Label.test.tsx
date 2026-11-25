import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { render, renderHook } from '@testing-library/react-native';
import React from 'react';

import { Label } from './Label';

describe('Label', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(
      <Label testID="label">Sample label text</Label>,
    );
    expect(getByTestId('label')).toBeDefined();
  });

  it('renders children content', () => {
    const { getByText } = render(<Label>Sample label text</Label>);
    expect(getByText('Sample label text')).toBeDefined();
  });
});

describe('when className is provided', () => {
  let twClassNames: ReturnType<typeof useTailwind>;

  beforeAll(() => {
    twClassNames = renderHook(() => useTailwind()).result.current;
  });

  it('applies className after twClassName and component classes', () => {
    const { getByTestId } = render(
      <Label testID="label-classes" twClassName="mt-8" className="mt-2">
        Label
      </Label>,
    );

    expect(getByTestId('label-classes')).toHaveStyle(twClassNames`mt-2`);
  });

  it('applies deprecated twClassName on its own', () => {
    const { getByTestId } = render(
      <Label testID="label-classes" twClassName="mt-8">
        Label
      </Label>,
    );

    expect(getByTestId('label-classes')).toHaveStyle(twClassNames`mt-8`);
  });
});
