import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { renderHook } from '@testing-library/react-hooks';
import { render, fireEvent } from '@testing-library/react-native';
import React from 'react';

import { ButtonBaseSize } from '../../../../types';

import { ButtonTertiary } from './ButtonTertiary';

describe('ButtonTertiary', () => {
  let tw: ReturnType<typeof useTailwind>;

  beforeAll(() => {
    const { result } = renderHook(() => useTailwind());
    tw = result.current;
  });

  /**
   *
   * @param styleProp
   */
  function flattenStyles(styleProp: any): Record<string, any>[] {
    if (styleProp == null) {
      return [];
    }
    if (Array.isArray(styleProp)) {
      return styleProp.flatMap((item) => flattenStyles(item));
    }
    if (typeof styleProp === 'object') {
      return [styleProp];
    }
    return [];
  }

  /**
   *
   * @param styleProp
   * @param tailwindClass
   */
  function expectBackground(styleProp: any, tailwindClass: string) {
    const expected = tw`${tailwindClass}`;
    const all = flattenStyles(styleProp);
    expect(all).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ backgroundColor: expected.backgroundColor }),
      ]),
    );
  }

  /**
   *
   * @param styleProp
   * @param tailwindClass
   */
  function expectBorder(styleProp: any, tailwindClass: string) {
    const expected = tw`${tailwindClass}`;
    const all = flattenStyles(styleProp);
    expect(all).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ borderColor: expected.borderColor }),
      ]),
    );
  }

  it('renders default (transparent bg + transparent border)', () => {
    const { getByTestId } = render(
      <ButtonTertiary size={ButtonBaseSize.Lg} testID="button-tertiary">
        Default
      </ButtonTertiary>,
    );
    const btn = getByTestId('button-tertiary');
    expectBackground(btn.props.style, 'bg-transparent');
    expectBorder(btn.props.style, 'border-transparent');
  });

  it('renders danger (transparent bg + transparent border)', () => {
    const { getByTestId } = render(
      <ButtonTertiary isDanger testID="button-tertiary">
        Danger
      </ButtonTertiary>,
    );
    const btn = getByTestId('button-tertiary');
    expectBackground(btn.props.style, 'bg-transparent');
    expectBorder(btn.props.style, 'border-transparent');
  });

  it('renders inverse (transparent bg + primary-inverse border)', () => {
    const { getByTestId } = render(
      <ButtonTertiary isInverse testID="button-tertiary">
        Inverse
      </ButtonTertiary>,
    );
    const btn = getByTestId('button-tertiary');
    expectBackground(btn.props.style, 'bg-transparent');
    expectBorder(btn.props.style, 'border-primary-inverse');
  });

  it('renders inverse+danger (bg-background-default + border-background-default)', () => {
    const { getByTestId } = render(
      <ButtonTertiary isInverse isDanger testID="button-tertiary">
        Both
      </ButtonTertiary>,
    );
    const btn = getByTestId('button-tertiary');
    expectBackground(btn.props.style, 'bg-background-default');
    expectBorder(btn.props.style, 'border-background-default');
  });

  it('toggles pressed styles (default)', () => {
    const { getByTestId } = render(
      <ButtonTertiary testID="button-tertiary">Press me</ButtonTertiary>,
    );
    const btn = getByTestId('button-tertiary');

    fireEvent(btn, 'pressIn');
    expectBackground(btn.props.style, 'bg-background-pressed');
    expectBorder(btn.props.style, 'border-background-pressed');

    fireEvent(btn, 'pressOut');
    expectBackground(btn.props.style, 'bg-transparent');
    expectBorder(btn.props.style, 'border-transparent');
  });

  it('toggles pressed styles (danger)', () => {
    const { getByTestId } = render(
      <ButtonTertiary isDanger testID="button-tertiary">
        Danger
      </ButtonTertiary>,
    );
    const btn = getByTestId('button-tertiary');

    fireEvent(btn, 'pressIn');
    expectBackground(btn.props.style, 'bg-error-mutedPressed');
    expectBorder(btn.props.style, 'border-error-mutedPressed');

    fireEvent(btn, 'pressOut');
    expectBackground(btn.props.style, 'bg-transparent');
    expectBorder(btn.props.style, 'border-transparent');
  });

  it('toggles pressed styles (inverse)', () => {
    const { getByTestId } = render(
      <ButtonTertiary isInverse testID="button-tertiary">
        Inverse
      </ButtonTertiary>,
    );
    const btn = getByTestId('button-tertiary');

    fireEvent(btn, 'pressIn');
    expectBackground(btn.props.style, 'bg-background-pressed');
    expectBorder(btn.props.style, 'border-primary-inverse');

    fireEvent(btn, 'pressOut');
    expectBackground(btn.props.style, 'bg-transparent');
    expectBorder(btn.props.style, 'border-primary-inverse');
  });

  it('shows spinner + hides content when loading', () => {
    const spinnerTW =
      'absolute inset-0 flex items-center justify-center opacity-100';
    const contentTW = 'flex-row items-center justify-center gap-x-2 opacity-0';

    const { getByTestId } = render(
      <ButtonTertiary
        isLoading
        spinnerProps={{ twClassName: spinnerTW }}
        testID="button-tertiary"
      >
        Loading
      </ButtonTertiary>,
    );

    const spinner = getByTestId('spinner-container');
    const spinnerStyles = flattenStyles(spinner.props.style);
    expect(spinnerStyles).toEqual(
      expect.arrayContaining([expect.objectContaining(tw`${spinnerTW}`)]),
    );

    const content = getByTestId('content-container');
    const contentStyles = flattenStyles(content.props.style);
    expect(contentStyles).toEqual(
      expect.arrayContaining([expect.objectContaining(tw`${contentTW}`)]),
    );

    expect(
      getByTestId('button-tertiary').props.accessibilityState.disabled,
    ).toBe(true);
  });

  it('renders danger+loading', () => {
    const { getByTestId } = render(
      <ButtonTertiary isDanger isLoading testID="button-tertiary">
        Hi
      </ButtonTertiary>,
    );
    const btn = getByTestId('button-tertiary');
    expectBackground(btn.props.style, 'bg-error-mutedPressed');
    expectBorder(btn.props.style, 'border-error-mutedPressed');
  });

  it('renders inverse+loading', () => {
    const { getByTestId } = render(
      <ButtonTertiary isInverse isLoading testID="button-tertiary">
        Hi
      </ButtonTertiary>,
    );
    const btn = getByTestId('button-tertiary');
    expectBackground(btn.props.style, 'bg-background-pressed');
    expectBorder(btn.props.style, 'border-primary-inverse');
  });

  it('renders inverse+danger+loading', () => {
    const { getByTestId } = render(
      <ButtonTertiary isInverse isDanger isLoading testID="button-tertiary">
        Hi
      </ButtonTertiary>,
    );
    const btn = getByTestId('button-tertiary');
    expectBackground(btn.props.style, 'bg-background-defaultPressed');
    expectBorder(btn.props.style, 'border-background-defaultPressed');
  });
});
