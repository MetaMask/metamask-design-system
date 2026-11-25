import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { render, renderHook } from '@testing-library/react-native';
import React from 'react';

import { Text, TextVariant } from '../../Text';

import { HeaderStandardCenterColumn } from './HeaderStandardCenterColumn';

describe('HeaderStandardCenterColumn', () => {
  it('renders title', () => {
    const { getByText } = render(<HeaderStandardCenterColumn title="Main" />);

    expect(getByText('Main')).toBeDefined();
  });

  it('renders title and string subtitle', () => {
    const { getByText } = render(
      <HeaderStandardCenterColumn title="Main" subtitle="Sub" />,
    );

    expect(getByText('Main')).toBeDefined();
    expect(getByText('Sub')).toBeDefined();
  });

  it('renders subtitle as a React node', () => {
    const { getByText } = render(
      <HeaderStandardCenterColumn
        title="Main"
        subtitle={<Text variant={TextVariant.BodySm}>Node</Text>}
      />,
    );

    expect(getByText('Node')).toBeDefined();
  });
});

describe('when subtitle className is provided', () => {
  let tw: ReturnType<typeof useTailwind>;

  beforeAll(() => {
    tw = renderHook(() => useTailwind()).result.current;
  });

  it('applies className after twClassName on the subtitle text', () => {
    const { getByTestId } = render(
      <HeaderStandardCenterColumn
        title="Main"
        subtitle="Sub"
        subtitleProps={{
          testID: 'subtitle-text',
          twClassName: 'mt-8',
          className: 'mt-2',
        }}
      />,
    );

    expect(getByTestId('subtitle-text')).toHaveStyle(tw`mt-2`);
  });

  it('applies deprecated twClassName on its own', () => {
    const { getByTestId } = render(
      <HeaderStandardCenterColumn
        title="Main"
        subtitle="Sub"
        subtitleProps={{
          testID: 'subtitle-text-tw',
          twClassName: 'mt-8',
        }}
      />,
    );

    expect(getByTestId('subtitle-text-tw')).toHaveStyle(tw`mt-8`);
  });
});
