import { render, screen } from '@testing-library/react';
import React from 'react';

import {
  BoxAlignItems,
  BoxBackgroundColor,
  BoxBorderColor,
  BoxBorderRadius,
  BoxBorderWidth,
  BoxBorderStyle,
  BoxFlexDirection,
  BoxFlexWrap,
  BoxJustifyContent,
  BoxBlockSize,
} from '../../types';

import { Box } from './Box';
import {
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
        className="extra"
      />,
    );

    const box = screen.getByTestId('box');
    const expectedClasses = [
      'flex',
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
      BoxBorderWidth.Lg,
      BoxBorderRadius.Lg,
      BoxBorderStyle.Dashed,
      BoxAlignItems.Center,
      BoxJustifyContent.Between,
      TWCLASSMAP_BOX_WIDTH[BoxBlockSize.Half],
      TWCLASSMAP_BOX_MINWIDTH[BoxBlockSize.OneFourth],
      TWCLASSMAP_BOX_HEIGHT[BoxBlockSize.Full],
      TWCLASSMAP_BOX_MINHEIGHT[BoxBlockSize.Auto],
      BoxBackgroundColor.SuccessDefault,
      'extra',
    ];

    const classes = expectedClasses.flatMap((className) =>
      className
        .split(' ')
        .filter(Boolean)
        .filter((c) => c !== 'border'),
    );

    classes.forEach((c) => {
      expect(box).toHaveClass(c);
    });
  });
});
