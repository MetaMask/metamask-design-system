import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { renderHook } from '@testing-library/react-hooks';
import { render } from '@testing-library/react-native';
import React from 'react';
import type { StyleProp, TextStyle } from 'react-native';

import { TextVariant } from '../../types';

import { Input } from './Input';
import { INPUT_TEST_ID } from './Input.constants';

function flattenStyle(style: StyleProp<TextStyle>): TextStyle[] {
  if (style == null) {
    return [];
  }
  if (Array.isArray(style)) {
    return style.flatMap(flattenStyle);
  }
  return [style as TextStyle];
}

describe('Input', () => {
  const tw = renderHook(() => useTailwind()).result.current;

  it('renders correctly', () => {
    const { toJSON } = render(<Input />);
    expect(toJSON()).toMatchSnapshot();
  });

  it('renders with the correct TextVariant', () => {
    const { getByTestId } = render(
      <Input textVariant={TextVariant.HeadingSm} defaultValue="Sample" />,
    );
    const input = getByTestId(INPUT_TEST_ID);
    expect(input).toBeDefined();
    const styles = flattenStyle(input.props.style);
    const expectedFontSize = (tw`text-${TextVariant.HeadingSm}` as TextStyle)
      .fontSize;
    expect(styles).toContainEqual(
      expect.objectContaining({ fontSize: expectedFontSize }),
    );
  });

  it('renders correct disabled state when isDisabled is true', () => {
    const { getByTestId } = render(<Input isDisabled placeholder="Disabled" />);
    const input = getByTestId(INPUT_TEST_ID);
    expect(input.props.editable).toBe(false);
    const styles = flattenStyle(input.props.style);
    expect(styles).toContainEqual(
      expect.objectContaining({ opacity: tw`opacity-50`.opacity }),
    );
  });

  it('does not apply state styles when isStateStylesDisabled is true', () => {
    const { getByTestId } = render(
      <Input isDisabled isStateStylesDisabled placeholder="Disabled" />,
    );
    const input = getByTestId(INPUT_TEST_ID);
    expect(input.props.editable).toBe(false);
    const styles = flattenStyle(input.props.style);
    expect(styles).not.toContainEqual(
      expect.objectContaining({ opacity: 0.5 }),
    );
  });
});
