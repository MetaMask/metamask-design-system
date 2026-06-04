import { ButtonBaseSize } from '@metamask/design-system-shared';
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { render, renderHook } from '@testing-library/react-native';
import React from 'react';

import { ButtonPrimary } from './ButtonPrimary';

describe('ButtonPrimary', () => {
  let tw: ReturnType<typeof useTailwind>;

  beforeAll(() => {
    const { result } = renderHook(() => useTailwind());
    tw = result.current;
  });

  /**
   * Flatten style objects recursively
   *
   * @param styleProp - The style prop to flatten
   * @returns Flattened array of style objects
   */
  function flattenStyles(styleProp: unknown): Record<string, unknown>[] {
    if (styleProp === null || styleProp === undefined) {
      return [];
    }
    if (Array.isArray(styleProp)) {
      // flatten one level deep
      return styleProp.flatMap((item) => flattenStyles(item));
    }
    if (typeof styleProp === 'object') {
      return [styleProp as Record<string, unknown>];
    }
    return [];
  }

  /**
   * Expect background color to match tailwind class
   *
   * @param styleProp - The style prop to check
   * @param tailwindClass - The tailwind class to match against
   */
  function expectBackground(styleProp: unknown, tailwindClass: string) {
    const expected = tw`${tailwindClass}`;
    const allStyles = flattenStyles(styleProp);
    expect(allStyles).toStrictEqual(
      expect.arrayContaining([
        expect.objectContaining({
          backgroundColor: expected.backgroundColor,
        }),
      ]),
    );
  }

  const createDynamicClassName = () => (pressed: boolean) => {
    if (pressed) {
      return 'border-2 border-error-default';
    }
    return 'border border-primary-default';
  };

  it('renders default background', () => {
    const { getByTestId } = render(
      <ButtonPrimary size={ButtonBaseSize.Lg} testID="button-primary">
        Press me
      </ButtonPrimary>,
    );
    const btn = getByTestId('button-primary');
    expectBackground(btn.props.style, 'bg-icon-default');
    expect(btn).toBeDefined();
  });

  it('renders danger background', () => {
    const { getByTestId } = render(
      <ButtonPrimary isDanger testID="button-primary">
        Danger
      </ButtonPrimary>,
    );
    const btn = getByTestId('button-primary');
    expectBackground(btn.props.style, 'bg-error-default');
    expect(btn).toBeDefined();
  });

  it('renders inverse background', () => {
    const { getByTestId } = render(
      <ButtonPrimary isInverse testID="button-primary">
        Inverse
      </ButtonPrimary>,
    );
    const btn = getByTestId('button-primary');
    expectBackground(btn.props.style, 'bg-default');
    expect(btn).toBeDefined();
  });

  it('renders inverse+danger fallback background', () => {
    const { getByTestId } = render(
      <ButtonPrimary isInverse isDanger testID="button-primary">
        Both
      </ButtonPrimary>,
    );
    const btn = getByTestId('button-primary');
    expectBackground(btn.props.style, 'bg-default');
    expect(btn).toBeDefined();
  });

  it('renders danger+loading background', () => {
    const { getByTestId } = render(
      <ButtonPrimary isDanger isLoading testID="button-primary">
        Hi
      </ButtonPrimary>,
    );
    const btn = getByTestId('button-primary');
    expectBackground(btn.props.style, 'bg-error-default-pressed');

    expect(btn).toBeDefined();
  });

  it('renders inverse+loading background', () => {
    const { getByTestId } = render(
      <ButtonPrimary isInverse isLoading testID="button-primary">
        Hi
      </ButtonPrimary>,
    );
    const btn = getByTestId('button-primary');
    expectBackground(btn.props.style, 'bg-default-pressed');

    expect(btn).toBeDefined();
  });

  it('renders inverse+danger+loading background', () => {
    const { getByTestId } = render(
      <ButtonPrimary isInverse isDanger isLoading testID="button-primary">
        Hi
      </ButtonPrimary>,
    );
    const btn = getByTestId('button-primary');
    expectBackground(btn.props.style, 'bg-default-pressed');

    expect(btn).toBeDefined();
  });

  it('handles function-based twClassName', () => {
    const dynamicClassName = createDynamicClassName();

    const { getByTestId } = render(
      <ButtonPrimary twClassName={dynamicClassName} testID="button-primary">
        Dynamic Class
      </ButtonPrimary>,
    );
    const btn = getByTestId('button-primary');
    expect(btn).toBeDefined();
  });
});
