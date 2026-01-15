import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { renderHook } from '@testing-library/react-hooks';
import { render } from '@testing-library/react-native';
import React from 'react';
import * as ReactTestRenderer from 'react-test-renderer';

import { ButtonBaseSize } from '../../../../types';

import { ButtonTertiary } from './ButtonTertiary';

describe('ButtonTertiary', () => {
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
      return 'border-2 border-warning-default';
    }
    return 'border border-alternative';
  };

  it('renders default background', () => {
    const { getByTestId } = render(
      <ButtonTertiary size={ButtonBaseSize.Lg} testID="button-tertiary">
        Press me
      </ButtonTertiary>,
    );
    const btn = getByTestId('button-tertiary');
    expectBackground(btn.props.style, 'bg-transparent');

    expect(btn).toBeDefined();
  });

  it('renders danger background', () => {
    const { getByTestId } = render(
      <ButtonTertiary isDanger testID="button-tertiary">
        Danger
      </ButtonTertiary>,
    );
    const btn = getByTestId('button-tertiary');
    expectBackground(btn.props.style, 'bg-transparent');

    expect(btn).toBeDefined();
  });

  it('renders inverse background', () => {
    const { getByTestId } = render(
      <ButtonTertiary isInverse testID="button-tertiary">
        Inverse
      </ButtonTertiary>,
    );
    const btn = getByTestId('button-tertiary');
    expectBackground(btn.props.style, 'bg-transparent');

    expect(btn).toBeDefined();
  });

  it('renders inverse+danger fallback background', () => {
    const { getByTestId } = render(
      <ButtonTertiary isInverse isDanger testID="button-tertiary">
        Both
      </ButtonTertiary>,
    );
    const btn = getByTestId('button-tertiary');
    expectBackground(btn.props.style, 'bg-default');

    expect(btn).toBeDefined();
  });

  it('toggles pressed styles (default)', () => {
    const tree = ReactTestRenderer.create(
      <ButtonTertiary>Press me</ButtonTertiary>,
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

    expectBackground(defaultStyles, 'bg-transparent');
    expectBackground(pressedStyles, 'bg-pressed');

    expect(defaultStyles).toBeDefined();
    expect(pressedStyles).toBeDefined();
  });

  it('toggles pressed styles (danger)', () => {
    const tree = ReactTestRenderer.create(
      <ButtonTertiary isDanger>Danger</ButtonTertiary>,
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
    expectBackground(pressedStyles, 'bg-error-muted-pressed');

    expect(defaultStyles).toBeDefined();
    expect(pressedStyles).toBeDefined();
  });

  it('toggles pressed styles (inverse)', () => {
    const tree = ReactTestRenderer.create(
      <ButtonTertiary isInverse>Inverse</ButtonTertiary>,
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

  it('toggles pressed styles (inverse+danger)', () => {
    const tree = ReactTestRenderer.create(
      <ButtonTertiary isInverse isDanger>
        Inverse+Danger
      </ButtonTertiary>,
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
    const spinnerTW = 'absolute inset-0 flex items-center justify-center';

    const { getByTestId, getByText } = render(
      <ButtonTertiary
        isLoading
        spinnerProps={{ twClassName: spinnerTW }}
        testID="button-tertiary"
      >
        Loading
      </ButtonTertiary>,
    );

    // Verify spinner is present
    const spinner = getByTestId('spinner-container');
    const spinnerStyles = flattenStyles(spinner.props.style);
    expect(spinnerStyles).toStrictEqual(
      expect.arrayContaining([expect.objectContaining(tw`${spinnerTW}`)]),
    );

    // Verify content is hidden with opacity-0
    const text = getByText('Loading');
    const textStyles = flattenStyles(text.props.style);
    expect(textStyles).toStrictEqual(
      expect.arrayContaining([expect.objectContaining({ opacity: 0 })]),
    );

    expect(
      getByTestId('button-tertiary').props.accessibilityState.disabled,
    ).toBe(true);
  });

  it('renders danger+loading background', () => {
    const { getByTestId } = render(
      <ButtonTertiary isDanger isLoading testID="button-tertiary">
        Hi
      </ButtonTertiary>,
    );
    const btn = getByTestId('button-tertiary');
    expectBackground(btn.props.style, 'bg-error-muted-pressed');

    expect(btn).toBeDefined();
  });

  it('renders inverse+loading background', () => {
    const { getByTestId } = render(
      <ButtonTertiary isInverse isLoading testID="button-tertiary">
        Hi
      </ButtonTertiary>,
    );
    const btn = getByTestId('button-tertiary');
    expectBackground(btn.props.style, 'bg-pressed');

    expect(btn).toBeDefined();
  });

  it('renders inverse+danger+loading background', () => {
    const { getByTestId } = render(
      <ButtonTertiary isInverse isDanger isLoading testID="button-tertiary">
        Hi
      </ButtonTertiary>,
    );
    const btn = getByTestId('button-tertiary');
    expectBackground(btn.props.style, 'bg-default-pressed');

    expect(btn).toBeDefined();
  });

  it('handles function-based twClassName', () => {
    const dynamicClassName = createDynamicClassName();

    const { getByTestId } = render(
      <ButtonTertiary twClassName={dynamicClassName} testID="button-tertiary">
        Dynamic Class
      </ButtonTertiary>,
    );
    const btn = getByTestId('button-tertiary');
    expect(btn).toBeDefined();
  });
});
