import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { fireEvent, render, renderHook } from '@testing-library/react-native';
import React from 'react';

import { IconName } from '../Icon';

import { ButtonHero } from './ButtonHero';

describe('ButtonHero', () => {
  let tw: ReturnType<typeof useTailwind>;

  beforeAll(async () => {
    const { result } = await renderHook(() => useTailwind());
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
  it('renders children correctly', async () => {
    const { getByText } = await render(<ButtonHero>Button Hero</ButtonHero>);
    expect(getByText('Button Hero')).toBeDefined();
  });

  it('renders as a button with correct accessibility role', async () => {
    const { getByRole } = await render(<ButtonHero>Click me</ButtonHero>);
    const button = getByRole('button');
    expect(button).toBeDefined();
  });

  it('handles press events', async () => {
    const handlePress = jest.fn();
    const { getByRole } = await render(
      <ButtonHero onPress={handlePress}>Click me</ButtonHero>,
    );

    const button = getByRole('button');
    await fireEvent.press(button);

    expect(handlePress).toHaveBeenCalledTimes(1);
  });

  it('handles disabled state correctly', async () => {
    const handlePress = jest.fn();
    const { getByRole } = await render(
      <ButtonHero isDisabled onPress={handlePress}>
        Disabled Button
      </ButtonHero>,
    );

    const button = getByRole('button');
    expect(button.props.accessibilityState).toMatchObject({ disabled: true });
  });

  it('handles loading state correctly', async () => {
    const { getByRole, getByTestId } = await render(
      <ButtonHero
        isLoading
        loadingText="Loading..."
        loadingWrapperProps={{ testID: 'spinner-container' }}
      >
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

  it('displays loading text when provided', async () => {
    const { getByText } = await render(
      <ButtonHero isLoading loadingText="Please wait...">
        Submit
      </ButtonHero>,
    );

    expect(getByText('Please wait...')).toBeDefined();
  });

  it('uses light theme primary background color', async () => {
    const { getByTestId } = await render(
      <ButtonHero testID="button-hero">Hero Button</ButtonHero>,
    );
    const btn = getByTestId('button-hero');
    expectBackground(btn.props.style, 'bg-primary-default');
    expect(btn).toBeDefined();
  });

  it('passes accessibility props correctly', async () => {
    const { getByTestId } = await render(
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

  it('supports isFullWidth prop', async () => {
    const { getByRole } = await render(
      <ButtonHero isFullWidth testID="full-width-btn">
        Full Width
      </ButtonHero>,
    );

    const button = getByRole('button');
    expect(button).toBeDefined();
  });

  it('renders start icon when startIconName is provided', async () => {
    const { getByTestId } = await render(
      <ButtonHero
        startIconName={IconName.Add}
        startIconProps={{ testID: 'start-icon' }}
      >
        With Start Icon
      </ButtonHero>,
    );

    expect(getByTestId('start-icon')).toBeDefined();
  });

  it('renders end icon when endIconName is provided', async () => {
    const { getByTestId } = await render(
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
