import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { renderHook } from '@testing-library/react-hooks';
import { render, fireEvent } from '@testing-library/react-native';
import React from 'react';
import * as ReactTestRenderer from 'react-test-renderer';

import { IconName } from '../Icon';

import { ButtonHero } from './ButtonHero';

describe('ButtonHero', () => {
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
  it('renders children correctly', () => {
    const { getByText } = render(<ButtonHero>Button Hero</ButtonHero>);
    expect(getByText('Button Hero')).toBeDefined();
  });

  it('renders as a button with correct accessibility role', () => {
    const { getByRole } = render(<ButtonHero>Click me</ButtonHero>);
    const button = getByRole('button');
    expect(button).toBeDefined();
  });

  it('handles press events', () => {
    const handlePress = jest.fn();
    const { getByRole } = render(
      <ButtonHero onPress={handlePress}>Click me</ButtonHero>,
    );

    const button = getByRole('button');
    fireEvent.press(button);

    expect(handlePress).toHaveBeenCalledTimes(1);
  });

  it('handles disabled state correctly', () => {
    const handlePress = jest.fn();
    const { getByRole } = render(
      <ButtonHero isDisabled onPress={handlePress}>
        Disabled Button
      </ButtonHero>,
    );

    const button = getByRole('button');
    expect(button.props.accessibilityState).toMatchObject({ disabled: true });
  });

  it('handles loading state correctly', () => {
    const { getByRole, getByTestId } = render(
      <ButtonHero isLoading loadingText="Loading...">
        Loading Button
      </ButtonHero>,
    );

    const button = getByRole('button');
    expect(button.props.accessibilityState).toMatchObject({
      disabled: true,
      busy: true,
    });
    expect(button.props.accessibilityLabel).toBe('Loading...');
    expect(getByTestId('spinner-container')).toBeDefined();
  });

  it('displays loading text when provided', () => {
    const { getByText } = render(
      <ButtonHero isLoading loadingText="Please wait...">
        Submit
      </ButtonHero>,
    );

    expect(getByText('Please wait...')).toBeDefined();
  });

  it('uses light theme primary background color', () => {
    const { getByTestId } = render(
      <ButtonHero testID="button-hero">Hero Button</ButtonHero>,
    );
    const btn = getByTestId('button-hero');
    expectBackground(btn.props.style, 'bg-primary-default');
    expect(btn).toBeDefined();
  });

  it('toggles pressed background when interactive', () => {
    const tree = ReactTestRenderer.create(<ButtonHero>Press me</ButtonHero>);

    // Find the ButtonAnimated component which has the style function
    const buttonAnimated = tree.root.findByProps({
      accessibilityRole: 'button',
    });
    const styleFn = buttonAnimated.props.style as (p: {
      pressed: boolean;
    }) => unknown[];

    const defaultStyles = flattenStyles(styleFn({ pressed: false }));
    const pressedStyles = flattenStyles(styleFn({ pressed: true }));

    expectBackground(defaultStyles, 'bg-primary-default');
    expectBackground(pressedStyles, 'bg-primary-default-pressed');

    expect(defaultStyles).toBeDefined();
    expect(pressedStyles).toBeDefined();
  });

  it('does not apply pressed background when disabled', () => {
    const tree = ReactTestRenderer.create(
      <ButtonHero isDisabled>Disabled</ButtonHero>,
    );

    const buttonAnimated = tree.root.findByProps({
      accessibilityRole: 'button',
    });
    const styleFn = buttonAnimated.props.style as (p: {
      pressed: boolean;
    }) => unknown[];

    const defaultStyles = flattenStyles(styleFn({ pressed: false }));
    const pressedStyles = flattenStyles(styleFn({ pressed: true }));

    // Both states should have same background when disabled
    expectBackground(defaultStyles, 'bg-primary-default');
    expectBackground(pressedStyles, 'bg-primary-default');

    expect(defaultStyles).toBeDefined();
    expect(pressedStyles).toBeDefined();
  });

  it('does not apply pressed background when loading', () => {
    const tree = ReactTestRenderer.create(
      <ButtonHero isLoading loadingText="Loading...">
        Loading
      </ButtonHero>,
    );

    const buttonAnimated = tree.root.findByProps({
      accessibilityRole: 'button',
    });
    const styleFn = buttonAnimated.props.style as (p: {
      pressed: boolean;
    }) => unknown[];

    const defaultStyles = flattenStyles(styleFn({ pressed: false }));
    const pressedStyles = flattenStyles(styleFn({ pressed: true }));

    // Both states should have same background when loading
    expectBackground(defaultStyles, 'bg-primary-default');
    expectBackground(pressedStyles, 'bg-primary-default');

    expect(defaultStyles).toBeDefined();
    expect(pressedStyles).toBeDefined();
  });

  it('passes accessibility props correctly', () => {
    const { getByTestId } = render(
      <ButtonHero
        testID="hero-btn"
        accessibilityLabel="Primary action"
        accessibilityHint="Performs the main action"
      >
        Hero
      </ButtonHero>,
    );

    const btn = getByTestId('hero-btn');
    expect(btn.props.accessibilityLabel).toBe('Primary action');
    expect(btn.props.accessibilityHint).toBe('Performs the main action');
    expect(btn.props.accessibilityRole).toBe('button');
  });

  it('supports isFullWidth prop', () => {
    const { getByRole } = render(
      <ButtonHero isFullWidth testID="full-width-btn">
        Full Width
      </ButtonHero>,
    );

    const button = getByRole('button');
    expect(button).toBeDefined();
  });

  it('renders start icon when startIconName is provided', () => {
    const { getByTestId } = render(
      <ButtonHero
        startIconName={IconName.Add}
        startIconProps={{ testID: 'start-icon' }}
      >
        With Start Icon
      </ButtonHero>,
    );

    expect(getByTestId('start-icon')).toBeDefined();
  });

  it('renders end icon when endIconName is provided', () => {
    const { getByTestId } = render(
      <ButtonHero
        endIconName={IconName.ArrowRight}
        endIconProps={{ testID: 'end-icon' }}
      >
        With End Icon
      </ButtonHero>,
    );

    expect(getByTestId('end-icon')).toBeDefined();
  });
});
