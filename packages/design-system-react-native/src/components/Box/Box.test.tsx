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
  BoxBackgroundColor,
  BoxBorderColor,
} from '../../types';

import { Box } from './Box';
import {
  TWCLASSMAP_BOX_GAP,
  TWCLASSMAP_BOX_MARGIN,
  TWCLASSMAP_BOX_MARGIN_TOP,
  TWCLASSMAP_BOX_MARGIN_RIGHT,
  TWCLASSMAP_BOX_MARGIN_BOTTOM,
  TWCLASSMAP_BOX_MARGIN_LEFT,
  TWCLASSMAP_BOX_MARGIN_HORIZONTAL,
  TWCLASSMAP_BOX_MARGIN_VERTICAL,
  TWCLASSMAP_BOX_PADDING,
  TWCLASSMAP_BOX_PADDING_TOP,
  TWCLASSMAP_BOX_PADDING_RIGHT,
  TWCLASSMAP_BOX_PADDING_BOTTOM,
  TWCLASSMAP_BOX_PADDING_LEFT,
  TWCLASSMAP_BOX_PADDING_HORIZONTAL,
  TWCLASSMAP_BOX_PADDING_VERTICAL,
  TWCLASSMAP_BOX_BORDER_WIDTH,
} from './Box.constants';

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

  // Margin tests
  it('applies margin', () => {
    const { getByTestId } = render(<Box testID="box" margin={4} />);
    const box = getByTestId('box');
    const styles = flattenStyles(box.props.style);
    expect(styles[0]).toStrictEqual(tw`flex ${TWCLASSMAP_BOX_MARGIN[4]}`);
  });

  it('applies marginTop', () => {
    const { getByTestId } = render(<Box testID="box" marginTop={3} />);
    const box = getByTestId('box');
    const styles = flattenStyles(box.props.style);
    expect(styles[0]).toStrictEqual(tw`flex ${TWCLASSMAP_BOX_MARGIN_TOP[3]}`);
  });

  it('applies marginRight', () => {
    const { getByTestId } = render(<Box testID="box" marginRight={2} />);
    const box = getByTestId('box');
    const styles = flattenStyles(box.props.style);
    expect(styles[0]).toStrictEqual(tw`flex ${TWCLASSMAP_BOX_MARGIN_RIGHT[2]}`);
  });

  it('applies marginBottom', () => {
    const { getByTestId } = render(<Box testID="box" marginBottom={5} />);
    const box = getByTestId('box');
    const styles = flattenStyles(box.props.style);
    expect(styles[0]).toStrictEqual(
      tw`flex ${TWCLASSMAP_BOX_MARGIN_BOTTOM[5]}`,
    );
  });

  it('applies marginLeft', () => {
    const { getByTestId } = render(<Box testID="box" marginLeft={1} />);
    const box = getByTestId('box');
    const styles = flattenStyles(box.props.style);
    expect(styles[0]).toStrictEqual(tw`flex ${TWCLASSMAP_BOX_MARGIN_LEFT[1]}`);
  });

  it('applies marginHorizontal', () => {
    const { getByTestId } = render(<Box testID="box" marginHorizontal={6} />);
    const box = getByTestId('box');
    const styles = flattenStyles(box.props.style);
    expect(styles[0]).toStrictEqual(
      tw`flex ${TWCLASSMAP_BOX_MARGIN_HORIZONTAL[6]}`,
    );
  });

  it('applies marginVertical', () => {
    const { getByTestId } = render(<Box testID="box" marginVertical={8} />);
    const box = getByTestId('box');
    const styles = flattenStyles(box.props.style);
    expect(styles[0]).toStrictEqual(
      tw`flex ${TWCLASSMAP_BOX_MARGIN_VERTICAL[8]}`,
    );
  });

  // Padding tests
  it('applies padding', () => {
    const { getByTestId } = render(<Box testID="box" padding={4} />);
    const box = getByTestId('box');
    const styles = flattenStyles(box.props.style);
    expect(styles[0]).toStrictEqual(tw`flex ${TWCLASSMAP_BOX_PADDING[4]}`);
  });

  it('applies paddingTop', () => {
    const { getByTestId } = render(<Box testID="box" paddingTop={3} />);
    const box = getByTestId('box');
    const styles = flattenStyles(box.props.style);
    expect(styles[0]).toStrictEqual(tw`flex ${TWCLASSMAP_BOX_PADDING_TOP[3]}`);
  });

  it('applies paddingRight', () => {
    const { getByTestId } = render(<Box testID="box" paddingRight={2} />);
    const box = getByTestId('box');
    const styles = flattenStyles(box.props.style);
    expect(styles[0]).toStrictEqual(
      tw`flex ${TWCLASSMAP_BOX_PADDING_RIGHT[2]}`,
    );
  });

  it('applies paddingBottom', () => {
    const { getByTestId } = render(<Box testID="box" paddingBottom={5} />);
    const box = getByTestId('box');
    const styles = flattenStyles(box.props.style);
    expect(styles[0]).toStrictEqual(
      tw`flex ${TWCLASSMAP_BOX_PADDING_BOTTOM[5]}`,
    );
  });

  it('applies paddingLeft', () => {
    const { getByTestId } = render(<Box testID="box" paddingLeft={1} />);
    const box = getByTestId('box');
    const styles = flattenStyles(box.props.style);
    expect(styles[0]).toStrictEqual(tw`flex ${TWCLASSMAP_BOX_PADDING_LEFT[1]}`);
  });

  it('applies paddingHorizontal', () => {
    const { getByTestId } = render(<Box testID="box" paddingHorizontal={6} />);
    const box = getByTestId('box');
    const styles = flattenStyles(box.props.style);
    expect(styles[0]).toStrictEqual(
      tw`flex ${TWCLASSMAP_BOX_PADDING_HORIZONTAL[6]}`,
    );
  });

  it('applies paddingVertical', () => {
    const { getByTestId } = render(<Box testID="box" paddingVertical={8} />);
    const box = getByTestId('box');
    const styles = flattenStyles(box.props.style);
    expect(styles[0]).toStrictEqual(
      tw`flex ${TWCLASSMAP_BOX_PADDING_VERTICAL[8]}`,
    );
  });

  // Border tests
  it('applies borderWidth', () => {
    const { getByTestId } = render(<Box testID="box" borderWidth={2} />);
    const box = getByTestId('box');
    const styles = flattenStyles(box.props.style);
    expect(styles[0]).toStrictEqual(tw`flex ${TWCLASSMAP_BOX_BORDER_WIDTH[2]}`);
  });

  it('applies borderColor', () => {
    const { getByTestId } = render(
      <Box testID="box" borderColor={BoxBorderColor.PrimaryDefault} />,
    );
    const box = getByTestId('box');
    const styles = flattenStyles(box.props.style);
    expect(styles[0]).toStrictEqual(tw`flex ${BoxBorderColor.PrimaryDefault}`);
  });

  // Background color tests
  it('applies backgroundColor', () => {
    const { getByTestId } = render(
      <Box testID="box" backgroundColor={BoxBackgroundColor.PrimaryDefault} />,
    );
    const box = getByTestId('box');
    const styles = flattenStyles(box.props.style);
    expect(styles[0]).toStrictEqual(
      tw`flex ${BoxBackgroundColor.PrimaryDefault}`,
    );
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

  it('applies all new props together', () => {
    const { getByTestId } = render(
      <Box
        testID="box"
        margin={2}
        padding={4}
        borderWidth={1}
        borderColor={BoxBorderColor.PrimaryDefault}
        backgroundColor={BoxBackgroundColor.Alternative}
      />,
    );
    const box = getByTestId('box');
    const expectedClasses = `
      flex
      ${TWCLASSMAP_BOX_MARGIN[2]}
      ${TWCLASSMAP_BOX_PADDING[4]}
      ${TWCLASSMAP_BOX_BORDER_WIDTH[1]}
      ${BoxBorderColor.PrimaryDefault}
      ${BoxBackgroundColor.Alternative}
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

  it('handles undefined margin prop', () => {
    const { getByTestId } = render(<Box testID="box" margin={undefined} />);
    const box = getByTestId('box');
    const styles = flattenStyles(box.props.style);
    expect(styles[0]).toStrictEqual(tw`flex`);
  });

  it('handles undefined padding prop', () => {
    const { getByTestId } = render(<Box testID="box" padding={undefined} />);
    const box = getByTestId('box');
    const styles = flattenStyles(box.props.style);
    expect(styles[0]).toStrictEqual(tw`flex`);
  });

  it('handles undefined borderWidth prop', () => {
    const { getByTestId } = render(
      <Box testID="box" borderWidth={undefined} />,
    );
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

  it('handles zero margin', () => {
    const { getByTestId } = render(<Box testID="box" margin={0} />);
    const box = getByTestId('box');
    const styles = flattenStyles(box.props.style);
    expect(styles[0]).toStrictEqual(tw`flex ${TWCLASSMAP_BOX_MARGIN[0]}`);
  });

  it('handles zero padding', () => {
    const { getByTestId } = render(<Box testID="box" padding={0} />);
    const box = getByTestId('box');
    const styles = flattenStyles(box.props.style);
    expect(styles[0]).toStrictEqual(tw`flex ${TWCLASSMAP_BOX_PADDING[0]}`);
  });

  it('handles zero borderWidth', () => {
    const { getByTestId } = render(<Box testID="box" borderWidth={0} />);
    const box = getByTestId('box');
    const styles = flattenStyles(box.props.style);
    expect(styles[0]).toStrictEqual(tw`flex ${TWCLASSMAP_BOX_BORDER_WIDTH[0]}`);
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
