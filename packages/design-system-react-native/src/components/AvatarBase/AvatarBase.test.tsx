import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { renderHook } from '@testing-library/react-hooks';
import { render } from '@testing-library/react-native';
import React from 'react';

import { AvatarBaseSize, AvatarBaseShape } from '../../types';
import { Text } from '../Text';

import { AvatarBase } from './AvatarBase';
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
    expect(getByText('Hello')).toBeDefined();
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
    const expectedTextColor = tw`text-muted`.color;
    const expectedFontSize = tw`text-body-sm`.fontSize;
    const expectedMargin = tw`mt-1`.marginTop;
    expect(fallbackText.props.style[0].color).toBe(expectedTextColor);
    expect(fallbackText.props.style[0].fontSize).toBe(expectedFontSize);
    expect(fallbackText.props.style[0].marginTop).toBe(expectedMargin);
    expect(() => getByText('Should not render')).toThrow(
      'Unable to find an element with text: Should not render',
    );
  });

  describe('container style without border', () => {
    const { result } = renderHook(() => useTailwind());
    const tw = result.current;

    it('applies correct style for Circle Xs', () => {
      const shape = AvatarBaseShape.Circle;
      const size = AvatarBaseSize.Xs;
      const shapeClass = 'rounded-full';
      const dimensionClass = TWCLASSMAP_AVATARBASE_SIZE_DIMENSION[size];
      const classString = [
        'items-center',
        'justify-center',
        'overflow-hidden',
        'bg-section',
        shapeClass,
        dimensionClass,
      ].join(' ');
      const expectedStyle = tw`${classString}`;
      const { getByTestId } = render(
        <AvatarBase shape={shape} size={size} testID="avatar" />,
      );
      const avatar = getByTestId('avatar');
      expect(avatar.props.style[0]).toStrictEqual(expectedStyle);
    });

    it('applies correct style for Circle Sm', () => {
      const shape = AvatarBaseShape.Circle;
      const size = AvatarBaseSize.Sm;
      const shapeClass = 'rounded-full';
      const dimensionClass = TWCLASSMAP_AVATARBASE_SIZE_DIMENSION[size];
      const classString = [
        'items-center',
        'justify-center',
        'overflow-hidden',
        'bg-section',
        shapeClass,
        dimensionClass,
      ].join(' ');
      const expectedStyle = tw`${classString}`;
      const { getByTestId } = render(
        <AvatarBase shape={shape} size={size} testID="avatar" />,
      );
      const avatar = getByTestId('avatar');
      expect(avatar.props.style[0]).toStrictEqual(expectedStyle);
    });

    it('applies correct style for Circle Md', () => {
      const shape = AvatarBaseShape.Circle;
      const size = AvatarBaseSize.Md;
      const shapeClass = 'rounded-full';
      const dimensionClass = TWCLASSMAP_AVATARBASE_SIZE_DIMENSION[size];
      const classString = [
        'items-center',
        'justify-center',
        'overflow-hidden',
        'bg-section',
        shapeClass,
        dimensionClass,
      ].join(' ');
      const expectedStyle = tw`${classString}`;
      const { getByTestId } = render(
        <AvatarBase shape={shape} size={size} testID="avatar" />,
      );
      const avatar = getByTestId('avatar');
      expect(avatar.props.style[0]).toStrictEqual(expectedStyle);
    });

    it('applies correct style for Circle Lg', () => {
      const shape = AvatarBaseShape.Circle;
      const size = AvatarBaseSize.Lg;
      const shapeClass = 'rounded-full';
      const dimensionClass = TWCLASSMAP_AVATARBASE_SIZE_DIMENSION[size];
      const classString = [
        'items-center',
        'justify-center',
        'overflow-hidden',
        'bg-section',
        shapeClass,
        dimensionClass,
      ].join(' ');
      const expectedStyle = tw`${classString}`;
      const { getByTestId } = render(
        <AvatarBase shape={shape} size={size} testID="avatar" />,
      );
      const avatar = getByTestId('avatar');
      expect(avatar.props.style[0]).toStrictEqual(expectedStyle);
    });

    it('applies correct style for Circle Xl', () => {
      const shape = AvatarBaseShape.Circle;
      const size = AvatarBaseSize.Xl;
      const shapeClass = 'rounded-full';
      const dimensionClass = TWCLASSMAP_AVATARBASE_SIZE_DIMENSION[size];
      const classString = [
        'items-center',
        'justify-center',
        'overflow-hidden',
        'bg-section',
        shapeClass,
        dimensionClass,
      ].join(' ');
      const expectedStyle = tw`${classString}`;
      const { getByTestId } = render(
        <AvatarBase shape={shape} size={size} testID="avatar" />,
      );
      const avatar = getByTestId('avatar');
      expect(avatar.props.style[0]).toStrictEqual(expectedStyle);
    });

    it('applies correct style for Square Xs', () => {
      const shape = AvatarBaseShape.Square;
      const size = AvatarBaseSize.Xs;
      const shapeClass = TWCLASSMAP_AVATARBASE_SIZE_BORDERRADIUSS_SQUARE[size];
      const dimensionClass = TWCLASSMAP_AVATARBASE_SIZE_DIMENSION[size];
      const classString = [
        'items-center',
        'justify-center',
        'overflow-hidden',
        'bg-section',
        shapeClass,
        dimensionClass,
      ].join(' ');
      const expectedStyle = tw`${classString}`;
      const { getByTestId } = render(
        <AvatarBase shape={shape} size={size} testID="avatar" />,
      );
      const avatar = getByTestId('avatar');
      expect(avatar.props.style[0]).toStrictEqual(expectedStyle);
    });

    it('applies correct style for Square Sm', () => {
      const shape = AvatarBaseShape.Square;
      const size = AvatarBaseSize.Sm;
      const shapeClass = TWCLASSMAP_AVATARBASE_SIZE_BORDERRADIUSS_SQUARE[size];
      const dimensionClass = TWCLASSMAP_AVATARBASE_SIZE_DIMENSION[size];
      const classString = [
        'items-center',
        'justify-center',
        'overflow-hidden',
        'bg-section',
        shapeClass,
        dimensionClass,
      ].join(' ');
      const expectedStyle = tw`${classString}`;
      const { getByTestId } = render(
        <AvatarBase shape={shape} size={size} testID="avatar" />,
      );
      const avatar = getByTestId('avatar');
      expect(avatar.props.style[0]).toStrictEqual(expectedStyle);
    });

    it('applies correct style for Square Md', () => {
      const shape = AvatarBaseShape.Square;
      const size = AvatarBaseSize.Md;
      const shapeClass = TWCLASSMAP_AVATARBASE_SIZE_BORDERRADIUSS_SQUARE[size];
      const dimensionClass = TWCLASSMAP_AVATARBASE_SIZE_DIMENSION[size];
      const classString = [
        'items-center',
        'justify-center',
        'overflow-hidden',
        'bg-section',
        shapeClass,
        dimensionClass,
      ].join(' ');
      const expectedStyle = tw`${classString}`;
      const { getByTestId } = render(
        <AvatarBase shape={shape} size={size} testID="avatar" />,
      );
      const avatar = getByTestId('avatar');
      expect(avatar.props.style[0]).toStrictEqual(expectedStyle);
    });

    it('applies correct style for Square Lg', () => {
      const shape = AvatarBaseShape.Square;
      const size = AvatarBaseSize.Lg;
      const shapeClass = TWCLASSMAP_AVATARBASE_SIZE_BORDERRADIUSS_SQUARE[size];
      const dimensionClass = TWCLASSMAP_AVATARBASE_SIZE_DIMENSION[size];
      const classString = [
        'items-center',
        'justify-center',
        'overflow-hidden',
        'bg-section',
        shapeClass,
        dimensionClass,
      ].join(' ');
      const expectedStyle = tw`${classString}`;
      const { getByTestId } = render(
        <AvatarBase shape={shape} size={size} testID="avatar" />,
      );
      const avatar = getByTestId('avatar');
      expect(avatar.props.style[0]).toStrictEqual(expectedStyle);
    });

    it('applies correct style for Square Xl', () => {
      const shape = AvatarBaseShape.Square;
      const size = AvatarBaseSize.Xl;
      const shapeClass = TWCLASSMAP_AVATARBASE_SIZE_BORDERRADIUSS_SQUARE[size];
      const dimensionClass = TWCLASSMAP_AVATARBASE_SIZE_DIMENSION[size];
      const classString = [
        'items-center',
        'justify-center',
        'overflow-hidden',
        'bg-section',
        shapeClass,
        dimensionClass,
      ].join(' ');
      const expectedStyle = tw`${classString}`;
      const { getByTestId } = render(
        <AvatarBase shape={shape} size={size} testID="avatar" />,
      );
      const avatar = getByTestId('avatar');
      expect(avatar.props.style[0]).toStrictEqual(expectedStyle);
    });
  });

  describe('container style with border', () => {
    const { result } = renderHook(() => useTailwind());
    const tw = result.current;

    it('applies correct style for Circle Xs with border', () => {
      const shape = AvatarBaseShape.Circle;
      const size = AvatarBaseSize.Xs;
      const shapeClass = 'rounded-full';
      const dimensionClass =
        TWCLASSMAP_AVATARBASE_HASBORDER_SIZE_DIMENSION[size];
      const borderClass = TWCLASSMAP_AVATARBASE_SIZE_BORDER[size];
      const classString = [
        'items-center',
        'justify-center',
        'overflow-hidden',
        'bg-section',
        shapeClass,
        dimensionClass,
        borderClass,
      ].join(' ');
      const expectedStyle = tw`${classString}`;
      const { getByTestId } = render(
        <AvatarBase shape={shape} size={size} hasBorder testID="avatar" />,
      );
      const avatar = getByTestId('avatar');
      expect(avatar.props.style[0]).toStrictEqual(expectedStyle);
    });

    it('applies correct style for Circle Sm with border', () => {
      const shape = AvatarBaseShape.Circle;
      const size = AvatarBaseSize.Sm;
      const shapeClass = 'rounded-full';
      const dimensionClass =
        TWCLASSMAP_AVATARBASE_HASBORDER_SIZE_DIMENSION[size];
      const borderClass = TWCLASSMAP_AVATARBASE_SIZE_BORDER[size];
      const classString = [
        'items-center',
        'justify-center',
        'overflow-hidden',
        'bg-section',
        shapeClass,
        dimensionClass,
        borderClass,
      ].join(' ');
      const expectedStyle = tw`${classString}`;
      const { getByTestId } = render(
        <AvatarBase shape={shape} size={size} hasBorder testID="avatar" />,
      );
      const avatar = getByTestId('avatar');
      expect(avatar.props.style[0]).toStrictEqual(expectedStyle);
    });

    it('applies correct style for Circle Md with border', () => {
      const shape = AvatarBaseShape.Circle;
      const size = AvatarBaseSize.Md;
      const shapeClass = 'rounded-full';
      const dimensionClass =
        TWCLASSMAP_AVATARBASE_HASBORDER_SIZE_DIMENSION[size];
      const borderClass = TWCLASSMAP_AVATARBASE_SIZE_BORDER[size];
      const classString = [
        'items-center',
        'justify-center',
        'overflow-hidden',
        'bg-section',
        shapeClass,
        dimensionClass,
        borderClass,
      ].join(' ');
      const expectedStyle = tw`${classString}`;
      const { getByTestId } = render(
        <AvatarBase shape={shape} size={size} hasBorder testID="avatar" />,
      );
      const avatar = getByTestId('avatar');
      expect(avatar.props.style[0]).toStrictEqual(expectedStyle);
    });

    it('applies correct style for Circle Lg with border', () => {
      const shape = AvatarBaseShape.Circle;
      const size = AvatarBaseSize.Lg;
      const shapeClass = 'rounded-full';
      const dimensionClass =
        TWCLASSMAP_AVATARBASE_HASBORDER_SIZE_DIMENSION[size];
      const borderClass = TWCLASSMAP_AVATARBASE_SIZE_BORDER[size];
      const classString = [
        'items-center',
        'justify-center',
        'overflow-hidden',
        'bg-section',
        shapeClass,
        dimensionClass,
        borderClass,
      ].join(' ');
      const expectedStyle = tw`${classString}`;
      const { getByTestId } = render(
        <AvatarBase shape={shape} size={size} hasBorder testID="avatar" />,
      );
      const avatar = getByTestId('avatar');
      expect(avatar.props.style[0]).toStrictEqual(expectedStyle);
    });

    it('applies correct style for Circle Xl with border', () => {
      const shape = AvatarBaseShape.Circle;
      const size = AvatarBaseSize.Xl;
      const shapeClass = 'rounded-full';
      const dimensionClass =
        TWCLASSMAP_AVATARBASE_HASBORDER_SIZE_DIMENSION[size];
      const borderClass = TWCLASSMAP_AVATARBASE_SIZE_BORDER[size];
      const classString = [
        'items-center',
        'justify-center',
        'overflow-hidden',
        'bg-section',
        shapeClass,
        dimensionClass,
        borderClass,
      ].join(' ');
      const expectedStyle = tw`${classString}`;
      const { getByTestId } = render(
        <AvatarBase shape={shape} size={size} hasBorder testID="avatar" />,
      );
      const avatar = getByTestId('avatar');
      expect(avatar.props.style[0]).toStrictEqual(expectedStyle);
    });

    it('applies correct style for Square Xs with border', () => {
      const shape = AvatarBaseShape.Square;
      const size = AvatarBaseSize.Xs;
      const shapeClass = TWCLASSMAP_AVATARBASE_SIZE_BORDERRADIUSS_SQUARE[size];
      const dimensionClass =
        TWCLASSMAP_AVATARBASE_HASBORDER_SIZE_DIMENSION[size];
      const borderClass = TWCLASSMAP_AVATARBASE_SIZE_BORDER[size];
      const classString = [
        'items-center',
        'justify-center',
        'overflow-hidden',
        'bg-section',
        shapeClass,
        dimensionClass,
        borderClass,
      ].join(' ');
      const expectedStyle = tw`${classString}`;
      const { getByTestId } = render(
        <AvatarBase shape={shape} size={size} hasBorder testID="avatar" />,
      );
      const avatar = getByTestId('avatar');
      expect(avatar.props.style[0]).toStrictEqual(expectedStyle);
    });

    it('applies correct style for Square Sm with border', () => {
      const shape = AvatarBaseShape.Square;
      const size = AvatarBaseSize.Sm;
      const shapeClass = TWCLASSMAP_AVATARBASE_SIZE_BORDERRADIUSS_SQUARE[size];
      const dimensionClass =
        TWCLASSMAP_AVATARBASE_HASBORDER_SIZE_DIMENSION[size];
      const borderClass = TWCLASSMAP_AVATARBASE_SIZE_BORDER[size];
      const classString = [
        'items-center',
        'justify-center',
        'overflow-hidden',
        'bg-section',
        shapeClass,
        dimensionClass,
        borderClass,
      ].join(' ');
      const expectedStyle = tw`${classString}`;
      const { getByTestId } = render(
        <AvatarBase shape={shape} size={size} hasBorder testID="avatar" />,
      );
      const avatar = getByTestId('avatar');
      expect(avatar.props.style[0]).toStrictEqual(expectedStyle);
    });

    it('applies correct style for Square Md with border', () => {
      const shape = AvatarBaseShape.Square;
      const size = AvatarBaseSize.Md;
      const shapeClass = TWCLASSMAP_AVATARBASE_SIZE_BORDERRADIUSS_SQUARE[size];
      const dimensionClass =
        TWCLASSMAP_AVATARBASE_HASBORDER_SIZE_DIMENSION[size];
      const borderClass = TWCLASSMAP_AVATARBASE_SIZE_BORDER[size];
      const classString = [
        'items-center',
        'justify-center',
        'overflow-hidden',
        'bg-section',
        shapeClass,
        dimensionClass,
        borderClass,
      ].join(' ');
      const expectedStyle = tw`${classString}`;
      const { getByTestId } = render(
        <AvatarBase shape={shape} size={size} hasBorder testID="avatar" />,
      );
      const avatar = getByTestId('avatar');
      expect(avatar.props.style[0]).toStrictEqual(expectedStyle);
    });

    it('applies correct style for Square Lg with border', () => {
      const shape = AvatarBaseShape.Square;
      const size = AvatarBaseSize.Lg;
      const shapeClass = TWCLASSMAP_AVATARBASE_SIZE_BORDERRADIUSS_SQUARE[size];
      const dimensionClass =
        TWCLASSMAP_AVATARBASE_HASBORDER_SIZE_DIMENSION[size];
      const borderClass = TWCLASSMAP_AVATARBASE_SIZE_BORDER[size];
      const classString = [
        'items-center',
        'justify-center',
        'overflow-hidden',
        'bg-section',
        shapeClass,
        dimensionClass,
        borderClass,
      ].join(' ');
      const expectedStyle = tw`${classString}`;
      const { getByTestId } = render(
        <AvatarBase shape={shape} size={size} hasBorder testID="avatar" />,
      );
      const avatar = getByTestId('avatar');
      expect(avatar.props.style[0]).toStrictEqual(expectedStyle);
    });

    it('applies correct style for Square Xl with border', () => {
      const shape = AvatarBaseShape.Square;
      const size = AvatarBaseSize.Xl;
      const shapeClass = TWCLASSMAP_AVATARBASE_SIZE_BORDERRADIUSS_SQUARE[size];
      const dimensionClass =
        TWCLASSMAP_AVATARBASE_HASBORDER_SIZE_DIMENSION[size];
      const borderClass = TWCLASSMAP_AVATARBASE_SIZE_BORDER[size];
      const classString = [
        'items-center',
        'justify-center',
        'overflow-hidden',
        'bg-section',
        shapeClass,
        dimensionClass,
        borderClass,
      ].join(' ');
      const expectedStyle = tw`${classString}`;
      const { getByTestId } = render(
        <AvatarBase shape={shape} size={size} hasBorder testID="avatar" />,
      );
      const avatar = getByTestId('avatar');
      expect(avatar.props.style[0]).toStrictEqual(expectedStyle);
    });
  });

  it('applies custom twClassName and style, forwards extra View props', () => {
    const { result } = renderHook(() => useTailwind());
    const tw = result.current;

    const baseClasses = [
      'items-center',
      'justify-center',
      'overflow-hidden',
      'bg-section',
      'rounded-full',
      TWCLASSMAP_AVATARBASE_SIZE_DIMENSION[AvatarBaseSize.Md],
    ].join(' ');
    const customClasses = `${baseClasses} bg-default`;
    const expectedStyle = tw`${customClasses}`;

    const customStyle = { margin: 42 };
    const { getByTestId } = render(
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
