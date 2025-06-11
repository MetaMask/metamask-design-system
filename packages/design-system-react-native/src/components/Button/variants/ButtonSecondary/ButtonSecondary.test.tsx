import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { renderHook } from '@testing-library/react-hooks';
import { render } from '@testing-library/react-native';
import React from 'react';
import * as ReactTestRenderer from 'react-test-renderer';

import { ButtonBaseSize } from '../../../../types';

import { ButtonSecondary } from './ButtonSecondary';

describe('ButtonSecondary', () => {
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

  it('renders default background', () => {
    const { getByTestId } = render(
      <ButtonSecondary size={ButtonBaseSize.Lg} testID="button-secondary">
        Press me
      </ButtonSecondary>,
    );
    const btn = getByTestId('button-secondary');
    expectBackground(btn.props.style, 'bg-muted');

    expect(btn).toBeDefined();
  });

  it('renders danger background', () => {
    const { getByTestId } = render(
      <ButtonSecondary isDanger testID="button-secondary">
        Danger
      </ButtonSecondary>,
    );
    const btn = getByTestId('button-secondary');
    expectBackground(btn.props.style, 'bg-muted');

    expect(btn).toBeDefined();
  });

  it('renders inverse background', () => {
    const { getByTestId } = render(
      <ButtonSecondary isInverse testID="button-secondary">
        Inverse
      </ButtonSecondary>,
    );
    const btn = getByTestId('button-secondary');
    expectBackground(btn.props.style, 'bg-transparent');

    expect(btn).toBeDefined();
  });

  it('renders inverse+danger fallback background', () => {
    const { getByTestId } = render(
      <ButtonSecondary isInverse isDanger testID="button-secondary">
        Both
      </ButtonSecondary>,
    );
    const btn = getByTestId('button-secondary');
    expectBackground(btn.props.style, 'bg-default');

    expect(btn).toBeDefined();
  });

  it('toggles pressed styles (default)', () => {
    const tree = ReactTestRenderer.create(
      <ButtonSecondary>Press me</ButtonSecondary>,
    );

    // Find the ButtonAnimated component which has the style function
    const buttonAnimated = tree.root.findByProps({
      accessibilityRole: 'button',
    });
    const styleFn = buttonAnimated.props.style as (p: {
      pressed: boolean;
    }) => unknown[];

    const defaultStyles = flattenStyles(styleFn({ pressed: false }));
    const pressedStyles = flattenStyles(styleFn({ pressed: true }));

    expectBackground(defaultStyles, 'bg-muted');
    expectBackground(pressedStyles, 'bg-muted-pressed');

    expect(defaultStyles).toBeDefined();
    expect(pressedStyles).toBeDefined();
  });

  it('toggles pressed styles (danger)', () => {
    const tree = ReactTestRenderer.create(
      <ButtonSecondary isDanger>Danger</ButtonSecondary>,
    );

    const buttonAnimated = tree.root.findByProps({
      accessibilityRole: 'button',
    });
    const styleFn = buttonAnimated.props.style as (p: {
      pressed: boolean;
    }) => unknown[];

    const defaultStyles = flattenStyles(styleFn({ pressed: false }));
    const pressedStyles = flattenStyles(styleFn({ pressed: true }));

    expectBackground(defaultStyles, 'bg-muted');
    expectBackground(pressedStyles, 'bg-muted-pressed');

    expect(defaultStyles).toBeDefined();
    expect(pressedStyles).toBeDefined();
  });

  it('toggles pressed styles (inverse)', () => {
    const tree = ReactTestRenderer.create(
      <ButtonSecondary isInverse>Inverse</ButtonSecondary>,
    );

    const buttonAnimated = tree.root.findByProps({
      accessibilityRole: 'button',
    });
    const styleFn = buttonAnimated.props.style as (p: {
      pressed: boolean;
    }) => unknown[];

    const defaultStyles = flattenStyles(styleFn({ pressed: false }));
    const pressedStyles = flattenStyles(styleFn({ pressed: true }));

    expectBackground(defaultStyles, 'bg-transparent');
    expectBackground(pressedStyles, 'bg-pressed');

    expect(defaultStyles).toBeDefined();
    expect(pressedStyles).toBeDefined();
  });

  it('shows spinner + hides content when loading', () => {
    const spinnerTW =
      'absolute inset-0 flex items-center justify-center opacity-100';
    const contentTW = 'flex-row items-center justify-center gap-x-2 opacity-0';

    const { getByTestId } = render(
      <ButtonSecondary
        isLoading
        spinnerProps={{ twClassName: spinnerTW }}
        testID="button-secondary"
      >
        Loading
      </ButtonSecondary>,
    );

    const spinner = getByTestId('spinner-container');
    const spinnerStyles = flattenStyles(spinner.props.style);
    expect(spinnerStyles).toStrictEqual(
      expect.arrayContaining([expect.objectContaining(tw`${spinnerTW}`)]),
    );

    const content = getByTestId('content-container');
    const contentStyles = flattenStyles(content.props.style);
    expect(contentStyles).toStrictEqual(
      expect.arrayContaining([expect.objectContaining(tw`${contentTW}`)]),
    );

    expect(
      getByTestId('button-secondary').props.accessibilityState.disabled,
    ).toBe(true);
  });

  it('renders danger+loading background', () => {
    const { getByTestId } = render(
      <ButtonSecondary isDanger isLoading testID="button-secondary">
        Hi
      </ButtonSecondary>,
    );
    const btn = getByTestId('button-secondary');
    expectBackground(btn.props.style, 'bg-muted-pressed');

    expect(btn).toBeDefined();
  });

  it('renders inverse+loading background', () => {
    const { getByTestId } = render(
      <ButtonSecondary isInverse isLoading testID="button-secondary">
        Hi
      </ButtonSecondary>,
    );
    const btn = getByTestId('button-secondary');
    expectBackground(btn.props.style, 'bg-pressed');

    expect(btn).toBeDefined();
  });

  it('renders inverse+danger+loading background', () => {
    const { getByTestId } = render(
      <ButtonSecondary isInverse isDanger isLoading testID="button-secondary">
        Hi
      </ButtonSecondary>,
    );
    const btn = getByTestId('button-secondary');
    expectBackground(btn.props.style, 'bg-default-pressed');

    expect(btn).toBeDefined();
  });
});
