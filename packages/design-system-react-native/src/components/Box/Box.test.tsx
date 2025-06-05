import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { renderHook } from '@testing-library/react-hooks';
import { render } from '@testing-library/react-native';
import React from 'react';
import { Text } from 'react-native';
import type { StyleProp, ViewStyle } from 'react-native';

import {
  BoxFlexDirection,
  BoxFlexWrap,
  BoxAlignItems,
  BoxJustifyContent,
} from '../../types';

import { Box } from './Box';
import { TWCLASSMAP_BOX_GAP } from './Box.constants';

/**
 * Flattens a given style prop into a plain array of ViewStyle objects.
 *
 * @param styleProp - The style prop to flatten.
 * @returns An array of flattened ViewStyle objects.
 */
function flattenStyles(
  styleProp: StyleProp<ViewStyle> | undefined,
): ViewStyle[] {
  if (styleProp === null) {
    return [];
  }
  if (Array.isArray(styleProp)) {
    return styleProp.flatMap((item) =>
      flattenStyles(item as StyleProp<ViewStyle>),
    );
  }
  if (typeof styleProp === 'object') {
    return [styleProp as ViewStyle];
  }
  return [];
}

describe('Box', () => {
  let tw: ReturnType<typeof useTailwind>;

  beforeAll(() => {
    tw = renderHook(() => useTailwind()).result.current;
  });

  it('renders children and merges style', () => {
    const { getByTestId, getByText } = render(
      <Box testID="box" style={{ margin: 4 }}>
        <Text>Hello</Text>
      </Box>,
    );
    expect(getByText('Hello')).toBeDefined();
    const box = getByTestId('box');
    const styles = flattenStyles(box.props.style);
    expect(styles[0]).toStrictEqual(tw`flex`);
    expect(styles[1]).toStrictEqual({ margin: 4 });
  });

  it('applies default flex class', () => {
    const { getByTestId } = render(<Box testID="box" />);
    const box = getByTestId('box');
    const styles = flattenStyles(box.props.style);
    expect(styles[0]).toStrictEqual(tw`flex`);
  });

  it('applies flexDirection', () => {
    const { getByTestId } = render(
      <Box testID="box" flexDirection={BoxFlexDirection.Row} />,
    );
    const box = getByTestId('box');
    const styles = flattenStyles(box.props.style);
    expect(styles[0]).toStrictEqual(tw`flex ${BoxFlexDirection.Row}`);
  });

  it('applies flexWrap', () => {
    const { getByTestId } = render(
      <Box testID="box" flexWrap={BoxFlexWrap.Wrap} />,
    );
    const box = getByTestId('box');
    const styles = flattenStyles(box.props.style);
    expect(styles[0]).toStrictEqual(tw`flex ${BoxFlexWrap.Wrap}`);
  });

  it('applies gap', () => {
    const { getByTestId } = render(<Box testID="box" gap={4} />);
    const box = getByTestId('box');
    const styles = flattenStyles(box.props.style);
    expect(styles[0]).toStrictEqual(tw`flex ${TWCLASSMAP_BOX_GAP[4]}`);
  });

  it('applies alignItems', () => {
    const { getByTestId } = render(
      <Box testID="box" alignItems={BoxAlignItems.Center} />,
    );
    const box = getByTestId('box');
    const styles = flattenStyles(box.props.style);
    expect(styles[0]).toStrictEqual(tw`flex ${BoxAlignItems.Center}`);
  });

  it('applies justifyContent', () => {
    const { getByTestId } = render(
      <Box testID="box" justifyContent={BoxJustifyContent.Between} />,
    );
    const box = getByTestId('box');
    const styles = flattenStyles(box.props.style);
    expect(styles[0]).toStrictEqual(tw`flex ${BoxJustifyContent.Between}`);
  });

  it('applies twClassName', () => {
    const { getByTestId } = render(
      <Box testID="box" twClassName="bg-primary-default p-4" />,
    );
    const box = getByTestId('box');
    const styles = flattenStyles(box.props.style);
    expect(styles[0]).toStrictEqual(tw`bg-primary-default flex p-4`);
  });

  it('applies all flex props together', () => {
    const { getByTestId } = render(
      <Box
        testID="box"
        flexDirection={BoxFlexDirection.Row}
        flexWrap={BoxFlexWrap.Wrap}
        gap={2}
        alignItems={BoxAlignItems.Center}
        justifyContent={BoxJustifyContent.Between}
        twClassName="bg-warning-muted p-2"
      />,
    );
    const box = getByTestId('box');
    const expectedClasses = `
      flex
      ${BoxFlexDirection.Row}
      ${BoxFlexWrap.Wrap}
      ${TWCLASSMAP_BOX_GAP[2]}
      ${BoxAlignItems.Center}
      ${BoxJustifyContent.Between}
      p-2 bg-warning-muted
    `.trim();
    const styles = flattenStyles(box.props.style);
    expect(styles).toHaveLength(1);
    expect(styles[0]).toStrictEqual(tw`${expectedClasses}`);
  });

  it('handles undefined gap prop', () => {
    const { getByTestId } = render(<Box testID="box" gap={undefined} />);
    const box = getByTestId('box');
    const styles = flattenStyles(box.props.style);
    expect(styles[0]).toStrictEqual(tw`flex`);
  });

  it('handles zero gap', () => {
    const { getByTestId } = render(<Box testID="box" gap={0} />);
    const box = getByTestId('box');
    const styles = flattenStyles(box.props.style);
    expect(styles[0]).toStrictEqual(tw`flex ${TWCLASSMAP_BOX_GAP[0]}`);
  });

  it('passes through additional ViewProps', () => {
    const { getByTestId } = render(
      <Box testID="box" accessible accessibilityLabel="Test box" />,
    );
    const box = getByTestId('box');
    expect(box.props.accessible).toBe(true);
    expect(box.props.accessibilityLabel).toBe('Test box');
  });
});
