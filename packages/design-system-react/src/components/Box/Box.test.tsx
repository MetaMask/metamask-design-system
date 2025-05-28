import { render, screen } from '@testing-library/react';
import React from 'react';

import {
  BoxAlignItems,
  BoxBackgroundColor,
  BoxBorderColor,
  BoxBorderRadius,
  BoxBorderStyle,
  BoxFlexDirection,
  BoxFlexWrap,
  BoxJustifyContent,
} from '../../types';
import {
  TWCLASSMAP_BOX_BORDERWIDTH,
  TWCLASSMAP_BOX_GAP,
  TWCLASSMAP_BOX_HEIGHT,
  TWCLASSMAP_BOX_MARGIN,
  TWCLASSMAP_BOX_MARGINBOTTOM,
  TWCLASSMAP_BOX_MARGINLEFT,
  TWCLASSMAP_BOX_MARGINRIGHT,
  TWCLASSMAP_BOX_MARGINTOP,
  TWCLASSMAP_BOX_MINHEIGHT,
  TWCLASSMAP_BOX_MINWIDTH,
  TWCLASSMAP_BOX_PADDING,
  TWCLASSMAP_BOX_PADDINGBOTTOM,
  TWCLASSMAP_BOX_PADDINGLEFT,
  TWCLASSMAP_BOX_PADDINGRIGHT,
  TWCLASSMAP_BOX_PADDINGTOP,
  TWCLASSMAP_BOX_WIDTH,
} from './Box.constants';
import { Box } from './Box';

describe('Box', () => {
  it('renders children and style', () => {
    render(
      <Box data-testid="box" style={{ margin: 4 }}>
        <span>Hello</span>
      </Box>,
    );
    expect(screen.getByText('Hello')).toBeInTheDocument();
    expect(screen.getByTestId('box')).toHaveStyle({ margin: '4px' });
  });

  it('applies all style props', () => {
    render(
      <Box
        data-testid="box"
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
        borderWidth={2}
        borderRadius={BoxBorderRadius.Lg}
        borderStyle={BoxBorderStyle.Dashed}
        alignItems={BoxAlignItems.Center}
        justifyContent={BoxJustifyContent.Between}
        width={1}
        minWidth={2}
        height={3}
        minHeight={4}
        backgroundColor={BoxBackgroundColor.SuccessDefault}
        className="extra"
      />,
    );

    const box = screen.getByTestId('box');
    const expectedClasses = [
      BoxFlexDirection.Row,
      BoxFlexWrap.Wrap,
      TWCLASSMAP_BOX_GAP[1],
      TWCLASSMAP_BOX_MARGIN[2],
      TWCLASSMAP_BOX_MARGINTOP[3],
      TWCLASSMAP_BOX_MARGINBOTTOM[4],
      TWCLASSMAP_BOX_MARGINLEFT[5],
      TWCLASSMAP_BOX_MARGINRIGHT[6],
      TWCLASSMAP_BOX_PADDING[7],
      TWCLASSMAP_BOX_PADDINGTOP[8],
      TWCLASSMAP_BOX_PADDINGBOTTOM[9],
      TWCLASSMAP_BOX_PADDINGLEFT[10],
      TWCLASSMAP_BOX_PADDINGRIGHT[11],
      BoxBorderColor.PrimaryDefault,
      TWCLASSMAP_BOX_BORDERWIDTH[2],
      BoxBorderRadius.Lg,
      BoxBorderStyle.Dashed,
      BoxAlignItems.Center,
      BoxJustifyContent.Between,
      TWCLASSMAP_BOX_WIDTH[1],
      TWCLASSMAP_BOX_MINWIDTH[2],
      TWCLASSMAP_BOX_HEIGHT[3],
      TWCLASSMAP_BOX_MINHEIGHT[4],
      BoxBackgroundColor.SuccessDefault,
      'extra',
    ];

    expectedClasses.forEach((className) => {
      className.split(' ').forEach((c) => {
        if (c && c !== 'border') {
          expect(box).toHaveClass(c);
        }
      });
    });
  });
});
