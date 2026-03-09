import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { renderHook } from '@testing-library/react-hooks';
import { render } from '@testing-library/react-native';
import React from 'react';

import { ButtonBaseSize } from '../../../../types';

import { ButtonPrimary } from './ButtonPrimary';

describe('ButtonPrimary', () => {
  let tw: ReturnType<typeof useTailwind>;

  beforeAll(() => {
    const { result } = renderHook(() => useTailwind());
    tw = result.current;
  });

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

    expect(btn).toHaveStyle(tw`bg-icon-default`);
  });

  it('renders danger background', () => {
    const { getByTestId } = render(
      <ButtonPrimary isDanger testID="button-primary">
        Danger
      </ButtonPrimary>,
    );

    const btn = getByTestId('button-primary');

    expect(btn).toHaveStyle(tw`bg-error-default`);
  });

  it('renders inverse background', () => {
    const { getByTestId } = render(
      <ButtonPrimary isInverse testID="button-primary">
        Inverse
      </ButtonPrimary>,
    );

    const btn = getByTestId('button-primary');

    expect(btn).toHaveStyle(tw`bg-default`);
  });

  it('renders inverse+danger fallback background', () => {
    const { getByTestId } = render(
      <ButtonPrimary isInverse isDanger testID="button-primary">
        Both
      </ButtonPrimary>,
    );

    const btn = getByTestId('button-primary');

    expect(btn).toHaveStyle(tw`bg-default`);
  });

  it('shows spinner + hides content when loading', () => {
    const spinnerTW = 'absolute inset-0 flex items-center justify-center';

    const { getByTestId, getByText } = render(
      <ButtonPrimary
        isLoading
        spinnerProps={{ twClassName: spinnerTW }}
        testID="button-primary"
      >
        Loading
      </ButtonPrimary>,
    );

    const spinner = getByTestId('spinner-container');
    const text = getByText('Loading');

    expect(spinner).toHaveStyle(tw`${spinnerTW}`);
    expect(text).toHaveStyle({ opacity: 0 });
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

    expect(btn).toHaveStyle(tw`bg-error-default-pressed`);
  });

  it('renders inverse+loading background', () => {
    const { getByTestId } = render(
      <ButtonPrimary isInverse isLoading testID="button-primary">
        Hi
      </ButtonPrimary>,
    );

    const btn = getByTestId('button-primary');

    expect(btn).toHaveStyle(tw`bg-default-pressed`);
  });

  it('renders inverse+danger+loading background', () => {
    const { getByTestId } = render(
      <ButtonPrimary isInverse isDanger isLoading testID="button-primary">
        Hi
      </ButtonPrimary>,
    );

    const btn = getByTestId('button-primary');

    expect(btn).toHaveStyle(tw`bg-default-pressed`);
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
