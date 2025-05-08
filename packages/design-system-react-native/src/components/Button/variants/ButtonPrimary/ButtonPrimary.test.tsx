import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { renderHook } from '@testing-library/react-hooks';
import { render, fireEvent } from '@testing-library/react-native';
import React from 'react';

import { ButtonBaseSize } from '../../../../types';
import { ButtonPrimary } from './ButtonPrimary';

describe('ButtonPrimary', () => {
  let tw: ReturnType<typeof useTailwind>;

  beforeAll(() => {
    const { result } = renderHook(() => useTailwind());
    tw = result.current;
  });

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

  it('renders default background', () => {
    const { getByTestId } = render(
      <ButtonPrimary size={ButtonBaseSize.Lg} testID="button-primary">
        Press me
      </ButtonPrimary>,
    );
    const btn = getByTestId('button-primary');
    expectBackground(btn.props.style, 'bg-primary-default');
  });

  it('renders danger background', () => {
    const { getByTestId } = render(
      <ButtonPrimary isDanger testID="button-primary">
        Danger
      </ButtonPrimary>,
    );
    const btn = getByTestId('button-primary');
    expectBackground(btn.props.style, 'bg-error-default');
  });

  it('renders inverse background', () => {
    const { getByTestId } = render(
      <ButtonPrimary isInverse testID="button-primary">
        Inverse
      </ButtonPrimary>,
    );
    const btn = getByTestId('button-primary');
    expectBackground(btn.props.style, 'bg-background-default');
  });

  it('renders inverse+danger fallback background', () => {
    const { getByTestId } = render(
      <ButtonPrimary isInverse isDanger testID="button-primary">
        Both
      </ButtonPrimary>,
    );
    const btn = getByTestId('button-primary');
    expectBackground(btn.props.style, 'bg-background-default');
  });

  it('toggles pressed styles (default)', () => {
    const { getByTestId } = render(
      <ButtonPrimary testID="button-primary">Press me</ButtonPrimary>,
    );
    const btn = getByTestId('button-primary');

    fireEvent(btn, 'pressIn');
    expectBackground(btn.props.style, 'bg-primary-defaultPressed');

    fireEvent(btn, 'pressOut');
    expectBackground(btn.props.style, 'bg-primary-default');
  });

  it('toggles pressed styles (danger)', () => {
    const { getByTestId } = render(
      <ButtonPrimary isDanger testID="button-primary">
        Danger
      </ButtonPrimary>,
    );
    const btn = getByTestId('button-primary');

    fireEvent(btn, 'pressIn');
    expectBackground(btn.props.style, 'bg-error-defaultPressed');

    fireEvent(btn, 'pressOut');
    expectBackground(btn.props.style, 'bg-error-default');
  });

  it('toggles pressed styles (inverse)', () => {
    const { getByTestId } = render(
      <ButtonPrimary isInverse testID="button-primary">
        Inverse
      </ButtonPrimary>,
    );
    const btn = getByTestId('button-primary');

    fireEvent(btn, 'pressIn');
    expectBackground(btn.props.style, 'bg-background-defaultPressed');

    fireEvent(btn, 'pressOut');
    expectBackground(btn.props.style, 'bg-background-default');
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
    expect(spinnerStyles).toEqual(
      expect.arrayContaining([expect.objectContaining(tw`${spinnerTW}`)]),
    );

    const content = getByTestId('content-container');
    const contentStyles = flattenStyles(content.props.style);
    expect(contentStyles).toEqual(
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
    expectBackground(btn.props.style, 'bg-error-defaultPressed');
  });

  it('renders inverse+loading background', () => {
    const { getByTestId } = render(
      <ButtonPrimary isInverse isLoading testID="button-primary">
        Hi
      </ButtonPrimary>,
    );
    const btn = getByTestId('button-primary');
    expectBackground(btn.props.style, 'bg-background-defaultPressed');
  });

  it('renders inverse+danger+loading background', () => {
    const { getByTestId } = render(
      <ButtonPrimary isInverse isDanger isLoading testID="button-primary">
        Hi
      </ButtonPrimary>,
    );
    const btn = getByTestId('button-primary');
    expectBackground(btn.props.style, 'bg-background-defaultPressed');
  });
});
