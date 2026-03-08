import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { renderHook } from '@testing-library/react-hooks';
import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';

import { ButtonFilter } from './ButtonFilter';

describe('ButtonFilter', () => {
  let tw: ReturnType<typeof useTailwind>;

  const defaultProps = {
    children: 'All',
    onPress: jest.fn(),
  };

  beforeAll(() => {
    const { result } = renderHook(() => useTailwind());
    tw = result.current;
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  function flattenStyles(styleProp: unknown): Record<string, unknown>[] {
    if (styleProp === null || styleProp === undefined) {
      return [];
    }

    if (Array.isArray(styleProp)) {
      return styleProp.flatMap((item) => flattenStyles(item));
    }

    if (typeof styleProp === 'object') {
      return [styleProp as Record<string, unknown>];
    }

    return [];
  }

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

  function expectTextColor(styleProp: unknown, tailwindClass: string) {
    const expected = tw`${tailwindClass}`;
    const allStyles = flattenStyles(styleProp);

    expect(allStyles).toStrictEqual(
      expect.arrayContaining([
        expect.objectContaining({
          color: expected.color,
        }),
      ]),
    );
  }

  it('renders with children prop', () => {
    const { getByRole, getByText } = render(<ButtonFilter {...defaultProps} />);

    expect(getByRole('button')).toBeDefined();
    expect(getByText('All')).toBeDefined();
  });

  it('renders correctly in active state', () => {
    const { getByRole } = render(<ButtonFilter {...defaultProps} isActive />);
    const button = getByRole('button');

    expect(button).toBeDefined();
    expectBackground(button.props.style, 'bg-icon-default');
  });

  it('renders correctly in inactive state', () => {
    const { getByRole } = render(
      <ButtonFilter {...defaultProps} isActive={false} />,
    );
    const button = getByRole('button');

    expect(button).toBeDefined();
    expectBackground(button.props.style, 'bg-background-muted');
  });

  it('calls onPress when pressed', () => {
    const onPress = jest.fn();
    const { getByRole } = render(
      <ButtonFilter {...defaultProps} onPress={onPress} />,
    );

    fireEvent.press(getByRole('button'));
    expect(onPress).toHaveBeenCalledTimes(1);
  });

  it('verifies disabled state prevents interaction', () => {
    const onPress = jest.fn();
    const { getByTestId } = render(
      <ButtonFilter
        {...defaultProps}
        testID="filter-button"
        onPress={onPress}
        isDisabled
      />,
    );

    const button = getByTestId('filter-button');
    expect(button.props.accessibilityState).toMatchObject({ disabled: true });

    fireEvent.press(button);
    expect(onPress).not.toHaveBeenCalled();
  });

  it('supports twClassName and textProps overrides', () => {
    const { getByRole, getByText } = render(
      <ButtonFilter
        {...defaultProps}
        twClassName="bg-error-default"
        textProps={{ twClassName: 'text-error-default' }}
      />,
    );

    const button = getByRole('button');
    const label = getByText('All');

    expect(button).toBeDefined();
    expect(label).toBeDefined();
    expectBackground(button.props.style, 'bg-error-default');
    expectTextColor(label.props.style, 'text-error-default');
  });
});
