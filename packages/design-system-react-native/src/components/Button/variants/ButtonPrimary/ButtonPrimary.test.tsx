import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { renderHook } from '@testing-library/react-hooks';
import { render } from '@testing-library/react-native';
import React from 'react';
import * as ReactTestRenderer from 'react-test-renderer';

import { ButtonBaseSize } from '../../../../types';

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

  it('toggles pressed styles (default)', () => {
    const tree = ReactTestRenderer.create(
      <ButtonPrimary>Press me</ButtonPrimary>,
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

    expectBackground(defaultStyles, 'bg-icon-default');
    expectBackground(pressedStyles, 'bg-icon-default-pressed');

    expect(defaultStyles).toBeDefined();
    expect(pressedStyles).toBeDefined();
  });

  it('toggles pressed styles (danger)', () => {
    const tree = ReactTestRenderer.create(
      <ButtonPrimary isDanger>Danger</ButtonPrimary>,
    );

    const buttonAnimated = tree.root.findByProps({
      accessibilityRole: 'button',
    });
    const styleFn = buttonAnimated.props.style as (p: {
      pressed: boolean;
    }) => unknown[];

    const defaultStyles = flattenStyles(styleFn({ pressed: false }));
    const pressedStyles = flattenStyles(styleFn({ pressed: true }));

    expectBackground(defaultStyles, 'bg-error-default');
    expectBackground(pressedStyles, 'bg-error-default-pressed');

    expect(defaultStyles).toBeDefined();
    expect(pressedStyles).toBeDefined();
  });

  it('toggles pressed styles (inverse)', () => {
    const tree = ReactTestRenderer.create(
      <ButtonPrimary isInverse>Inverse</ButtonPrimary>,
    );

    const buttonAnimated = tree.root.findByProps({
      accessibilityRole: 'button',
    });
    const styleFn = buttonAnimated.props.style as (p: {
      pressed: boolean;
    }) => unknown[];

    const defaultStyles = flattenStyles(styleFn({ pressed: false }));
    const pressedStyles = flattenStyles(styleFn({ pressed: true }));

    expectBackground(defaultStyles, 'bg-default');
    expectBackground(pressedStyles, 'bg-default-pressed');

    expect(defaultStyles).toBeDefined();
    expect(pressedStyles).toBeDefined();
  });

  it('shows spinner + hides content when loading', () => {
    const spinnerTW =
      'absolute inset-0 flex items-center justify-center opacity-100';
    const contentTW = 'flex-row items-center justify-center gap-x-2 opacity-0';

    const { getByTestId } = render(
      <ButtonPrimary
        isLoading
        spinnerProps={{ twClassName: spinnerTW }}
        testID="button-primary"
      >
        Loading
      </ButtonPrimary>,
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
      getByTestId('button-primary').props.accessibilityState.disabled,
    ).toBe(true);
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
});
