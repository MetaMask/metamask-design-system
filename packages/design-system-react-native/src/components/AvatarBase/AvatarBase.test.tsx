import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { renderHook } from '@testing-library/react-hooks';
import { render } from '@testing-library/react-native';
import React from 'react';

import { AvatarBaseSize, AvatarBaseShape } from '../../types';
import Text, { TextColor, TextVariant } from '../Text';
import AvatarBase from './AvatarBase';
import {
  TWCLASSMAP_AVATARBASE_SIZE_DIMENSION,
  TWCLASSMAP_AVATARBASE_HASBORDER_SIZE_DIMENSION,
  TWCLASSMAP_AVATARBASE_SIZE_BORDERRADIUSS_SQUARE,
  TWCLASSMAP_AVATARBASE_SIZE_BORDER,
} from './AvatarBase.constants';

describe('AvatarBase', () => {
  it('renders children when no fallbackText is provided', () => {
    const { getByText } = render(
      <AvatarBase>
        <Text testID="child">Hello</Text>
      </AvatarBase>,
    );
    expect(getByText('Hello')).toBeTruthy();
  });

  it('renders fallbackText with correct Text props and twClassName', () => {
    const { result } = renderHook(() => useTailwind());
    const tw = result.current;
    const fallback = 'XYZ';
    const { getByTestId, getByText } = render(
      <AvatarBase
        fallbackText={fallback}
        fallbackTextProps={{
          testID: 'fb',
          twClassName: 'mt-1',
        }}
      >
        <Text>Should not render</Text>
      </AvatarBase>,
    );
    const fallbackText = getByTestId('fb');
    expect(fallbackText.props.children).toBe(fallback);
    const expectedTextColor = tw`${TextColor.TextMuted}`.color;
    const expectedFontSize = tw`text-${TextVariant.BodySm}`.fontSize;
    const expectedMargin = tw`mt-1`.marginTop;
    expect(fallbackText.props.style[0].color).toBe(expectedTextColor);
    expect(fallbackText.props.style[0].fontSize).toBe(expectedFontSize);
    expect(fallbackText.props.style[0].marginTop).toBe(expectedMargin);
    expect(() => getByText('Should not render')).toThrow();
  });

  it('applies correct container style for all shapes & sizes without border', () => {
    const { result } = renderHook(() => useTailwind());
    const tw = result.current;

    Object.values(AvatarBaseShape).forEach((shape) => {
      Object.values(AvatarBaseSize).forEach((size) => {
        const shapeClass =
          shape === AvatarBaseShape.Circle
            ? 'rounded-full'
            : TWCLASSMAP_AVATARBASE_SIZE_BORDERRADIUSS_SQUARE[size];

        const dimensionClass = TWCLASSMAP_AVATARBASE_SIZE_DIMENSION[size];

        const classString = [
          'items-center',
          'justify-center',
          'overflow-hidden',
          'bg-background-muted',
          shapeClass,
          dimensionClass,
        ]
          .filter(Boolean)
          .join(' ');

        const expectedStyle = tw`${classString}`;

        const { getByTestId } = render(
          <AvatarBase shape={shape} size={size} testID="avatar" />,
        );
        const avatar = getByTestId('avatar');
        expect(avatar.props.style[0]).toStrictEqual(expectedStyle);
      });
    });
  });

  it('applies correct container style for all shapes & sizes with border', () => {
    const { result } = renderHook(() => useTailwind());
    const tw = result.current;

    Object.values(AvatarBaseShape).forEach((shape) => {
      Object.values(AvatarBaseSize).forEach((size) => {
        const shapeClass =
          shape === AvatarBaseShape.Circle
            ? 'rounded-full'
            : TWCLASSMAP_AVATARBASE_SIZE_BORDERRADIUSS_SQUARE[size];

        const dimensionClass =
          TWCLASSMAP_AVATARBASE_HASBORDER_SIZE_DIMENSION[size];

        const borderClass = TWCLASSMAP_AVATARBASE_SIZE_BORDER[size];

        const classString = [
          'items-center',
          'justify-center',
          'overflow-hidden',
          'bg-background-muted',
          shapeClass,
          dimensionClass,
          borderClass,
        ]
          .filter(Boolean)
          .join(' ');

        const expectedStyle = tw`${classString}`;

        const { getByTestId } = render(
          <AvatarBase shape={shape} size={size} hasBorder testID="avatar" />,
        );
        const avatar = getByTestId('avatar');
        expect(avatar.props.style[0]).toStrictEqual(expectedStyle);
      });
    });
  });

  it('applies custom twClassName and style, forwards extra View props', () => {
    const { result } = renderHook(() => useTailwind());
    const tw = result.current;

    const baseClasses = [
      'items-center',
      'justify-center',
      'overflow-hidden',
      'bg-background-muted',
      'rounded-full',
      TWCLASSMAP_AVATARBASE_SIZE_DIMENSION[AvatarBaseSize.Md],
    ].join(' ');
    const customClasses = baseClasses + ' extra-class';
    const expectedStyle = tw`${customClasses}`;

    const customStyle = { margin: 42 };
    const { getByTestId } = render(
      <AvatarBase
        twClassName="extra-class"
        style={customStyle}
        accessibilityLabel="my-avatar"
        testID="avatar"
      >
        <Text>Hi</Text>
      </AvatarBase>,
    );
    const container = getByTestId('avatar');
    expect(container.props.style[0]).toStrictEqual(expectedStyle);
    expect(container.props.style[1]).toStrictEqual(customStyle);
    expect(container.props.accessibilityLabel).toBe('my-avatar');
  });
});
