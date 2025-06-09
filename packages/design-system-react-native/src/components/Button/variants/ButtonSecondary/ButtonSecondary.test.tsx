import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { renderHook } from '@testing-library/react-hooks';
import { render, fireEvent } from '@testing-library/react-native';
import React from 'react';

import { ButtonBaseSize } from '../../../../types';

import { ButtonSecondary } from './ButtonSecondary';

describe('ButtonSecondary', () => {
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
      // flatten one level deep
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
    const allStyles = flattenStyles(styleProp);
    expect(allStyles).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          backgroundColor: expected.backgroundColor,
        }),
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
    const allStyles = flattenStyles(styleProp);
    expect(allStyles).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          borderColor: expected.borderColor,
        }),
      ]),
    );
  }

  it('renders default background & border', () => {
    const { getByTestId } = render(
      <ButtonSecondary size={ButtonBaseSize.Lg} testID="button-secondary">
        Press me
      </ButtonSecondary>,
    );
    const btn = getByTestId('button-secondary');
    expectBackground(btn.props.style, 'bg-transparent');
    expectBorder(btn.props.style, 'border-icon-default');
  });

  it('renders danger background & border', () => {
    const { getByTestId } = render(
      <ButtonSecondary isDanger testID="button-secondary">
        Danger
      </ButtonSecondary>,
    );
    const btn = getByTestId('button-secondary');
    expectBackground(btn.props.style, 'bg-transparent');
    expectBorder(btn.props.style, 'border-error-default');
  });

  it('renders inverse background & border', () => {
    const { getByTestId } = render(
      <ButtonSecondary isInverse testID="button-secondary">
        Inverse
      </ButtonSecondary>,
    );
    const btn = getByTestId('button-secondary');
    expectBackground(btn.props.style, 'bg-transparent');
    expectBorder(btn.props.style, 'border-primary-inverse');
  });

  it('renders inverse+danger background & border', () => {
    const { getByTestId } = render(
      <ButtonSecondary isInverse isDanger testID="button-secondary">
        Both
      </ButtonSecondary>,
    );
    const btn = getByTestId('button-secondary');
    expectBackground(btn.props.style, 'bg-default');
    expectBorder(btn.props.style, 'border-background-default');
  });

  it('toggles pressed styles (default)', () => {
    const { getByTestId } = render(
      <ButtonSecondary testID="button-secondary">Press me</ButtonSecondary>,
    );
    const btn = getByTestId('button-secondary');

    fireEvent(btn, 'pressIn');
    expectBackground(btn.props.style, 'bg-pressed');
    expectBorder(btn.props.style, 'border-icon-default');

    fireEvent(btn, 'pressOut');
    expectBackground(btn.props.style, 'bg-transparent');
    expectBorder(btn.props.style, 'border-icon-default');
  });

  it('toggles pressed styles (danger)', () => {
    const { getByTestId } = render(
      <ButtonSecondary isDanger testID="button-secondary">
        Danger
      </ButtonSecondary>,
    );
    const btn = getByTestId('button-secondary');

    fireEvent(btn, 'pressIn');
    expectBackground(btn.props.style, 'bg-error-muted-pressed');
    expectBorder(btn.props.style, 'border-error-default-pressed');

    fireEvent(btn, 'pressOut');
    expectBackground(btn.props.style, 'bg-transparent');
    expectBorder(btn.props.style, 'border-error-default');
  });

  it('toggles pressed styles (inverse)', () => {
    const { getByTestId } = render(
      <ButtonSecondary isInverse testID="button-secondary">
        Inverse
      </ButtonSecondary>,
    );
    const btn = getByTestId('button-secondary');

    fireEvent(btn, 'pressIn');
    expectBackground(btn.props.style, 'bg-pressed');
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
    expect(spinnerStyles).toEqual(
      expect.arrayContaining([expect.objectContaining(tw`${spinnerTW}`)]),
    );

    const content = getByTestId('content-container');
    const contentStyles = flattenStyles(content.props.style);
    expect(contentStyles).toEqual(
      expect.arrayContaining([expect.objectContaining(tw`${contentTW}`)]),
    );

    expect(
      getByTestId('button-secondary').props.accessibilityState.disabled,
    ).toBe(true);
  });

  it('renders danger+loading background & border', () => {
    const { getByTestId } = render(
      <ButtonSecondary isDanger isLoading testID="button-secondary">
        Hi
      </ButtonSecondary>,
    );
    const btn = getByTestId('button-secondary');
    expectBackground(btn.props.style, 'bg-error-muted-pressed');
    expectBorder(btn.props.style, 'border-error-default-pressed');
  });

  it('renders inverse+loading background & border', () => {
    const { getByTestId } = render(
      <ButtonSecondary isInverse isLoading testID="button-secondary">
        Hi
      </ButtonSecondary>,
    );
    const btn = getByTestId('button-secondary');
    expectBackground(btn.props.style, 'bg-pressed');
    expectBorder(btn.props.style, 'border-primary-inverse');
  });

  it('renders inverse+danger+loading background & border', () => {
    const { getByTestId } = render(
      <ButtonSecondary isInverse isDanger isLoading testID="button-secondary">
        Hi
      </ButtonSecondary>,
    );
    const btn = getByTestId('button-secondary');
    expectBackground(btn.props.style, 'bg-default-pressed');
    expectBorder(btn.props.style, 'border-background-default-pressed');
  });
});
