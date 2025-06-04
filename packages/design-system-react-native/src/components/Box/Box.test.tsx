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
  BoxBorderRadius,
  BoxBorderWidth,
  BoxBorderStyle,
  BoxBackgroundColor,
  BoxBorderColor,
  BoxBlockSize,
} from '../../types';

import { Box } from './Box';
import {
  TWCLASSMAP_BOX_GAP,
  TWCLASSMAP_BOX_MARGIN,
  TWCLASSMAP_BOX_MARGINTOP,
  TWCLASSMAP_BOX_MARGINBOTTOM,
  TWCLASSMAP_BOX_MARGINLEFT,
  TWCLASSMAP_BOX_MARGINRIGHT,
  TWCLASSMAP_BOX_PADDING,
  TWCLASSMAP_BOX_PADDINGTOP,
  TWCLASSMAP_BOX_PADDINGBOTTOM,
  TWCLASSMAP_BOX_PADDINGLEFT,
  TWCLASSMAP_BOX_PADDINGRIGHT,
  TWCLASSMAP_BOX_WIDTH,
  TWCLASSMAP_BOX_MINWIDTH,
  TWCLASSMAP_BOX_HEIGHT,
  TWCLASSMAP_BOX_MINHEIGHT,
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

  it('applies all style props', () => {
    const { getByTestId } = render(
      <Box
        testID="box"
        flexDirection={BoxFlexDirection.Row}
        flexWrap={BoxFlexWrap.Wrap}
        gap={1}
        margin={2}
        marginTop={3}
        marginBottom={4}
        marginLeft={5}
        marginRight={6}
        padding={7}
        paddingTop={8}
        paddingBottom={9}
        paddingLeft={10}
        paddingRight={11}
        borderColor={BoxBorderColor.PrimaryDefault}
        borderWidth={BoxBorderWidth.Lg}
        borderRadius={BoxBorderRadius.Lg}
        borderStyle={BoxBorderStyle.Dashed}
        alignItems={BoxAlignItems.Center}
        justifyContent={BoxJustifyContent.Between}
        width={BoxBlockSize.Half}
        minWidth={BoxBlockSize.OneFourth}
        height={BoxBlockSize.Full}
        minHeight={BoxBlockSize.Auto}
        backgroundColor={BoxBackgroundColor.SuccessDefault}
        twClassName="extra"
      />,
    );
    const box = getByTestId('box');
    const expectedClasses = `
      flex
      ${BoxFlexDirection.Row}
      ${BoxFlexWrap.Wrap}
      ${TWCLASSMAP_BOX_GAP[1]}
      ${TWCLASSMAP_BOX_MARGIN[2]}
      ${TWCLASSMAP_BOX_MARGINTOP[3]}
      ${TWCLASSMAP_BOX_MARGINBOTTOM[4]}
      ${TWCLASSMAP_BOX_MARGINLEFT[5]}
      ${TWCLASSMAP_BOX_MARGINRIGHT[6]}
      ${TWCLASSMAP_BOX_PADDING[7]}
      ${TWCLASSMAP_BOX_PADDINGTOP[8]}
      ${TWCLASSMAP_BOX_PADDINGBOTTOM[9]}
      ${TWCLASSMAP_BOX_PADDINGLEFT[10]}
      ${TWCLASSMAP_BOX_PADDINGRIGHT[11]}
      ${BoxBorderColor.PrimaryDefault}
      ${BoxBorderWidth.Lg}
      ${BoxBorderRadius.Lg}
      ${BoxBorderStyle.Dashed}
      ${BoxAlignItems.Center}
      ${BoxJustifyContent.Between}
      ${TWCLASSMAP_BOX_WIDTH[BoxBlockSize.Half]}
      ${TWCLASSMAP_BOX_MINWIDTH[BoxBlockSize.OneFourth]}
      ${TWCLASSMAP_BOX_HEIGHT[BoxBlockSize.Full]}
      ${TWCLASSMAP_BOX_MINHEIGHT[BoxBlockSize.Auto]}
      ${BoxBackgroundColor.SuccessDefault}
      extra
    `.trim();
    const styles = flattenStyles(box.props.style);
    expect(styles).toHaveLength(1);
    expect(styles[0]).toStrictEqual(tw`${expectedClasses}`);
  });
});
