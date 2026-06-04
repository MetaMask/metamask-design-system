import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { render, renderHook } from '@testing-library/react-native';
import React from 'react';

import { Text, TextVariant } from '../Text';

import { AvatarBase } from './AvatarBase';
import {
  TWCLASSMAP_AVATARBASE_SIZE_DIMENSION,
  TWCLASSMAP_AVATARBASE_HASBORDER_SIZE_DIMENSION,
  TWCLASSMAP_AVATARBASE_SIZE_BORDERRADIUSS_SQUARE,
  TWCLASSMAP_AVATARBASE_SIZE_BORDER,
} from './AvatarBase.constants';

import { AvatarBaseSize, AvatarBaseShape } from '.';

describe('AvatarBase', () => {
  it('renders children when no fallbackText is provided', async () => {
    const { getByText } = await render(
      <AvatarBase>
        <Text testID="child">Hello</Text>
      </AvatarBase>,
    );
    expect(getByText('Hello')).toBeDefined();
  });

  it('renders fallbackText with correct Text props and twClassName', async () => {
    const { result } = await renderHook(() => useTailwind());
    const tw = result.current;
    const fallback = 'XYZ';
    const { getByTestId, getByText } = await render(
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
    const expectedTextColor = tw`text-muted`.color;
    // eslint-disable-next-line tailwindcss/no-custom-classname
    const expectedFontSize = tw`text-${TextVariant.BodySm}`.fontSize;
    const expectedMargin = tw`mt-1`.marginTop;
    expect(fallbackText.props.style[0].color).toBe(expectedTextColor);
    expect(fallbackText.props.style[0].fontSize).toBe(expectedFontSize);
    expect(fallbackText.props.style[0].marginTop).toBe(expectedMargin);
    expect(() => getByText('Should not render')).toThrow(
      'Unable to find an element with text: Should not render',
    );
  });

  describe('container style without border', () => {
    let tw: ReturnType<typeof useTailwind>;

    beforeAll(async () => {
      const { result } = await renderHook(() => useTailwind());
      tw = result.current;
    });

    it('applies correct style for Circle Xs', async () => {
      const shape = AvatarBaseShape.Circle;
      const size = AvatarBaseSize.Xs;
      const shapeClass = 'rounded-full';
      const dimensionClass = TWCLASSMAP_AVATARBASE_SIZE_DIMENSION[size];
      const expectedStyle = tw.style(
        'items-center',
        'justify-center',
        'overflow-hidden',
        'bg-alternative',
        shapeClass,
        dimensionClass,
      );
      const { getByTestId } = await render(
        <AvatarBase shape={shape} size={size} testID="avatar" />,
      );
      const avatar = getByTestId('avatar');
      expect(avatar.props.style[0]).toStrictEqual(expectedStyle);
    });

    it('applies correct style for Circle Sm', async () => {
      const shape = AvatarBaseShape.Circle;
      const size = AvatarBaseSize.Sm;
      const shapeClass = 'rounded-full';
      const dimensionClass = TWCLASSMAP_AVATARBASE_SIZE_DIMENSION[size];
      const expectedStyle = tw.style(
        'items-center',
        'justify-center',
        'overflow-hidden',
        'bg-alternative',
        shapeClass,
        dimensionClass,
      );
      const { getByTestId } = await render(
        <AvatarBase shape={shape} size={size} testID="avatar" />,
      );
      const avatar = getByTestId('avatar');
      expect(avatar.props.style[0]).toStrictEqual(expectedStyle);
    });

    it('applies correct style for Circle Md', async () => {
      const shape = AvatarBaseShape.Circle;
      const size = AvatarBaseSize.Md;
      const shapeClass = 'rounded-full';
      const dimensionClass = TWCLASSMAP_AVATARBASE_SIZE_DIMENSION[size];
      const expectedStyle = tw.style(
        'items-center',
        'justify-center',
        'overflow-hidden',
        'bg-alternative',
        shapeClass,
        dimensionClass,
      );
      const { getByTestId } = await render(
        <AvatarBase shape={shape} size={size} testID="avatar" />,
      );
      const avatar = getByTestId('avatar');
      expect(avatar.props.style[0]).toStrictEqual(expectedStyle);
    });

    it('applies correct style for Circle Lg', async () => {
      const shape = AvatarBaseShape.Circle;
      const size = AvatarBaseSize.Lg;
      const shapeClass = 'rounded-full';
      const dimensionClass = TWCLASSMAP_AVATARBASE_SIZE_DIMENSION[size];
      const expectedStyle = tw.style(
        'items-center',
        'justify-center',
        'overflow-hidden',
        'bg-alternative',
        shapeClass,
        dimensionClass,
      );
      const { getByTestId } = await render(
        <AvatarBase shape={shape} size={size} testID="avatar" />,
      );
      const avatar = getByTestId('avatar');
      expect(avatar.props.style[0]).toStrictEqual(expectedStyle);
    });

    it('applies correct style for Circle Xl', async () => {
      const shape = AvatarBaseShape.Circle;
      const size = AvatarBaseSize.Xl;
      const shapeClass = 'rounded-full';
      const dimensionClass = TWCLASSMAP_AVATARBASE_SIZE_DIMENSION[size];
      const expectedStyle = tw.style(
        'items-center',
        'justify-center',
        'overflow-hidden',
        'bg-alternative',
        shapeClass,
        dimensionClass,
      );
      const { getByTestId } = await render(
        <AvatarBase shape={shape} size={size} testID="avatar" />,
      );
      const avatar = getByTestId('avatar');
      expect(avatar.props.style[0]).toStrictEqual(expectedStyle);
    });

    it('applies correct style for Square Xs', async () => {
      const shape = AvatarBaseShape.Square;
      const size = AvatarBaseSize.Xs;
      const shapeClass = TWCLASSMAP_AVATARBASE_SIZE_BORDERRADIUSS_SQUARE[size];
      const dimensionClass = TWCLASSMAP_AVATARBASE_SIZE_DIMENSION[size];
      const expectedStyle = tw.style(
        'items-center',
        'justify-center',
        'overflow-hidden',
        'bg-alternative',
        shapeClass,
        dimensionClass,
      );
      const { getByTestId } = await render(
        <AvatarBase shape={shape} size={size} testID="avatar" />,
      );
      const avatar = getByTestId('avatar');
      expect(avatar.props.style[0]).toStrictEqual(expectedStyle);
    });

    it('applies correct style for Square Sm', async () => {
      const shape = AvatarBaseShape.Square;
      const size = AvatarBaseSize.Sm;
      const shapeClass = TWCLASSMAP_AVATARBASE_SIZE_BORDERRADIUSS_SQUARE[size];
      const dimensionClass = TWCLASSMAP_AVATARBASE_SIZE_DIMENSION[size];
      const expectedStyle = tw.style(
        'items-center',
        'justify-center',
        'overflow-hidden',
        'bg-alternative',
        shapeClass,
        dimensionClass,
      );
      const { getByTestId } = await render(
        <AvatarBase shape={shape} size={size} testID="avatar" />,
      );
      const avatar = getByTestId('avatar');
      expect(avatar.props.style[0]).toStrictEqual(expectedStyle);
    });

    it('applies correct style for Square Md', async () => {
      const shape = AvatarBaseShape.Square;
      const size = AvatarBaseSize.Md;
      const shapeClass = TWCLASSMAP_AVATARBASE_SIZE_BORDERRADIUSS_SQUARE[size];
      const dimensionClass = TWCLASSMAP_AVATARBASE_SIZE_DIMENSION[size];
      const expectedStyle = tw.style(
        'items-center',
        'justify-center',
        'overflow-hidden',
        'bg-alternative',
        shapeClass,
        dimensionClass,
      );
      const { getByTestId } = await render(
        <AvatarBase shape={shape} size={size} testID="avatar" />,
      );
      const avatar = getByTestId('avatar');
      expect(avatar.props.style[0]).toStrictEqual(expectedStyle);
    });

    it('applies correct style for Square Lg', async () => {
      const shape = AvatarBaseShape.Square;
      const size = AvatarBaseSize.Lg;
      const shapeClass = TWCLASSMAP_AVATARBASE_SIZE_BORDERRADIUSS_SQUARE[size];
      const dimensionClass = TWCLASSMAP_AVATARBASE_SIZE_DIMENSION[size];
      const expectedStyle = tw.style(
        'items-center',
        'justify-center',
        'overflow-hidden',
        'bg-alternative',
        shapeClass,
        dimensionClass,
      );
      const { getByTestId } = await render(
        <AvatarBase shape={shape} size={size} testID="avatar" />,
      );
      const avatar = getByTestId('avatar');
      expect(avatar.props.style[0]).toStrictEqual(expectedStyle);
    });

    it('applies correct style for Square Xl', async () => {
      const shape = AvatarBaseShape.Square;
      const size = AvatarBaseSize.Xl;
      const shapeClass = TWCLASSMAP_AVATARBASE_SIZE_BORDERRADIUSS_SQUARE[size];
      const dimensionClass = TWCLASSMAP_AVATARBASE_SIZE_DIMENSION[size];
      const expectedStyle = tw.style(
        'items-center',
        'justify-center',
        'overflow-hidden',
        'bg-alternative',
        shapeClass,
        dimensionClass,
      );
      const { getByTestId } = await render(
        <AvatarBase shape={shape} size={size} testID="avatar" />,
      );
      const avatar = getByTestId('avatar');
      expect(avatar.props.style[0]).toStrictEqual(expectedStyle);
    });
  });

  describe('container style with border', () => {
    let tw: ReturnType<typeof useTailwind>;

    beforeAll(async () => {
      const { result } = await renderHook(() => useTailwind());
      tw = result.current;
    });

    it('applies correct style for Circle Xs with border', async () => {
      const shape = AvatarBaseShape.Circle;
      const size = AvatarBaseSize.Xs;
      const shapeClass = 'rounded-full';
      const dimensionClass =
        TWCLASSMAP_AVATARBASE_HASBORDER_SIZE_DIMENSION[size];
      const borderClass = TWCLASSMAP_AVATARBASE_SIZE_BORDER[size];
      const expectedStyle = tw.style(
        'items-center',
        'justify-center',
        'overflow-hidden',
        'bg-alternative',
        shapeClass,
        dimensionClass,
        borderClass,
      );
      const { getByTestId } = await render(
        <AvatarBase shape={shape} size={size} hasBorder testID="avatar" />,
      );
      const avatar = getByTestId('avatar');
      expect(avatar.props.style[0]).toStrictEqual(expectedStyle);
    });

    it('applies correct style for Circle Sm with border', async () => {
      const shape = AvatarBaseShape.Circle;
      const size = AvatarBaseSize.Sm;
      const shapeClass = 'rounded-full';
      const dimensionClass =
        TWCLASSMAP_AVATARBASE_HASBORDER_SIZE_DIMENSION[size];
      const borderClass = TWCLASSMAP_AVATARBASE_SIZE_BORDER[size];
      const expectedStyle = tw.style(
        'items-center',
        'justify-center',
        'overflow-hidden',
        'bg-alternative',
        shapeClass,
        dimensionClass,
        borderClass,
      );
      const { getByTestId } = await render(
        <AvatarBase shape={shape} size={size} hasBorder testID="avatar" />,
      );
      const avatar = getByTestId('avatar');
      expect(avatar.props.style[0]).toStrictEqual(expectedStyle);
    });

    it('applies correct style for Circle Md with border', async () => {
      const shape = AvatarBaseShape.Circle;
      const size = AvatarBaseSize.Md;
      const shapeClass = 'rounded-full';
      const dimensionClass =
        TWCLASSMAP_AVATARBASE_HASBORDER_SIZE_DIMENSION[size];
      const borderClass = TWCLASSMAP_AVATARBASE_SIZE_BORDER[size];
      const expectedStyle = tw.style(
        'items-center',
        'justify-center',
        'overflow-hidden',
        'bg-alternative',
        shapeClass,
        dimensionClass,
        borderClass,
      );
      const { getByTestId } = await render(
        <AvatarBase shape={shape} size={size} hasBorder testID="avatar" />,
      );
      const avatar = getByTestId('avatar');
      expect(avatar.props.style[0]).toStrictEqual(expectedStyle);
    });

    it('applies correct style for Circle Lg with border', async () => {
      const shape = AvatarBaseShape.Circle;
      const size = AvatarBaseSize.Lg;
      const shapeClass = 'rounded-full';
      const dimensionClass =
        TWCLASSMAP_AVATARBASE_HASBORDER_SIZE_DIMENSION[size];
      const borderClass = TWCLASSMAP_AVATARBASE_SIZE_BORDER[size];
      const expectedStyle = tw.style(
        'items-center',
        'justify-center',
        'overflow-hidden',
        'bg-alternative',
        shapeClass,
        dimensionClass,
        borderClass,
      );
      const { getByTestId } = await render(
        <AvatarBase shape={shape} size={size} hasBorder testID="avatar" />,
      );
      const avatar = getByTestId('avatar');
      expect(avatar.props.style[0]).toStrictEqual(expectedStyle);
    });

    it('applies correct style for Circle Xl with border', async () => {
      const shape = AvatarBaseShape.Circle;
      const size = AvatarBaseSize.Xl;
      const shapeClass = 'rounded-full';
      const dimensionClass =
        TWCLASSMAP_AVATARBASE_HASBORDER_SIZE_DIMENSION[size];
      const borderClass = TWCLASSMAP_AVATARBASE_SIZE_BORDER[size];
      const expectedStyle = tw.style(
        'items-center',
        'justify-center',
        'overflow-hidden',
        'bg-alternative',
        shapeClass,
        dimensionClass,
        borderClass,
      );
      const { getByTestId } = await render(
        <AvatarBase shape={shape} size={size} hasBorder testID="avatar" />,
      );
      const avatar = getByTestId('avatar');
      expect(avatar.props.style[0]).toStrictEqual(expectedStyle);
    });

    it('applies correct style for Square Xs with border', async () => {
      const shape = AvatarBaseShape.Square;
      const size = AvatarBaseSize.Xs;
      const shapeClass = TWCLASSMAP_AVATARBASE_SIZE_BORDERRADIUSS_SQUARE[size];
      const dimensionClass =
        TWCLASSMAP_AVATARBASE_HASBORDER_SIZE_DIMENSION[size];
      const borderClass = TWCLASSMAP_AVATARBASE_SIZE_BORDER[size];
      const expectedStyle = tw.style(
        'items-center',
        'justify-center',
        'overflow-hidden',
        'bg-alternative',
        shapeClass,
        dimensionClass,
        borderClass,
      );
      const { getByTestId } = await render(
        <AvatarBase shape={shape} size={size} hasBorder testID="avatar" />,
      );
      const avatar = getByTestId('avatar');
      expect(avatar.props.style[0]).toStrictEqual(expectedStyle);
    });

    it('applies correct style for Square Sm with border', async () => {
      const shape = AvatarBaseShape.Square;
      const size = AvatarBaseSize.Sm;
      const shapeClass = TWCLASSMAP_AVATARBASE_SIZE_BORDERRADIUSS_SQUARE[size];
      const dimensionClass =
        TWCLASSMAP_AVATARBASE_HASBORDER_SIZE_DIMENSION[size];
      const borderClass = TWCLASSMAP_AVATARBASE_SIZE_BORDER[size];
      const expectedStyle = tw.style(
        'items-center',
        'justify-center',
        'overflow-hidden',
        'bg-alternative',
        shapeClass,
        dimensionClass,
        borderClass,
      );
      const { getByTestId } = await render(
        <AvatarBase shape={shape} size={size} hasBorder testID="avatar" />,
      );
      const avatar = getByTestId('avatar');
      expect(avatar.props.style[0]).toStrictEqual(expectedStyle);
    });

    it('applies correct style for Square Md with border', async () => {
      const shape = AvatarBaseShape.Square;
      const size = AvatarBaseSize.Md;
      const shapeClass = TWCLASSMAP_AVATARBASE_SIZE_BORDERRADIUSS_SQUARE[size];
      const dimensionClass =
        TWCLASSMAP_AVATARBASE_HASBORDER_SIZE_DIMENSION[size];
      const borderClass = TWCLASSMAP_AVATARBASE_SIZE_BORDER[size];
      const expectedStyle = tw.style(
        'items-center',
        'justify-center',
        'overflow-hidden',
        'bg-alternative',
        shapeClass,
        dimensionClass,
        borderClass,
      );
      const { getByTestId } = await render(
        <AvatarBase shape={shape} size={size} hasBorder testID="avatar" />,
      );
      const avatar = getByTestId('avatar');
      expect(avatar.props.style[0]).toStrictEqual(expectedStyle);
    });

    it('applies correct style for Square Lg with border', async () => {
      const shape = AvatarBaseShape.Square;
      const size = AvatarBaseSize.Lg;
      const shapeClass = TWCLASSMAP_AVATARBASE_SIZE_BORDERRADIUSS_SQUARE[size];
      const dimensionClass =
        TWCLASSMAP_AVATARBASE_HASBORDER_SIZE_DIMENSION[size];
      const borderClass = TWCLASSMAP_AVATARBASE_SIZE_BORDER[size];
      const expectedStyle = tw.style(
        'items-center',
        'justify-center',
        'overflow-hidden',
        'bg-alternative',
        shapeClass,
        dimensionClass,
        borderClass,
      );
      const { getByTestId } = await render(
        <AvatarBase shape={shape} size={size} hasBorder testID="avatar" />,
      );
      const avatar = getByTestId('avatar');
      expect(avatar.props.style[0]).toStrictEqual(expectedStyle);
    });

    it('applies correct style for Square Xl with border', async () => {
      const shape = AvatarBaseShape.Square;
      const size = AvatarBaseSize.Xl;
      const shapeClass = TWCLASSMAP_AVATARBASE_SIZE_BORDERRADIUSS_SQUARE[size];
      const dimensionClass =
        TWCLASSMAP_AVATARBASE_HASBORDER_SIZE_DIMENSION[size];
      const borderClass = TWCLASSMAP_AVATARBASE_SIZE_BORDER[size];
      const expectedStyle = tw.style(
        'items-center',
        'justify-center',
        'overflow-hidden',
        'bg-alternative',
        shapeClass,
        dimensionClass,
        borderClass,
      );
      const { getByTestId } = await render(
        <AvatarBase shape={shape} size={size} hasBorder testID="avatar" />,
      );
      const avatar = getByTestId('avatar');
      expect(avatar.props.style[0]).toStrictEqual(expectedStyle);
    });
  });

  it('applies custom twClassName and style, forwards extra View props', async () => {
    const { result } = await renderHook(() => useTailwind());
    const tw = result.current;

    const expectedStyle = tw.style(
      'items-center',
      'justify-center',
      'overflow-hidden',
      'bg-alternative',
      'rounded-full',
      TWCLASSMAP_AVATARBASE_SIZE_DIMENSION[AvatarBaseSize.Md],
      'bg-default',
    );

    const customStyle = { margin: 42 };
    const { getByTestId } = await render(
      <AvatarBase
        twClassName="bg-default"
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
