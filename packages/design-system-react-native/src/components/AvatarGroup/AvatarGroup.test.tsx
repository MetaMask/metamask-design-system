import { render } from '@testing-library/react-native';
import React from 'react';

import { AvatarGroupVariant, AvatarGroupSize } from '../../types';
import AvatarGroup from './AvatarGroup';
import {
  SAMPLE_AVATARGROUP_AVATARACCOUNTPROPSARR,
  SAMPLE_AVATARGROUP_AVATARFAVICONPROPSARR,
  SAMPLE_AVATARGROUP_AVATARNETWORKPROPSARR,
  SAMPLE_AVATARGROUP_AVATARTOKENPROPSARR,
} from './AvatarGroup.dev';

describe('AvatarGroup', () => {
  describe('Account variant', () => {
    const variant = AvatarGroupVariant.Account;
    const sampleAvatarGroupAccountArr =
      SAMPLE_AVATARGROUP_AVATARACCOUNTPROPSARR.map((item) => ({
        ...item,
        testID: 'avatar-account',
      }));
    it(`renders exactly max avatars for the Account variant and shows overflow counter`, () => {
      const { getAllByTestId, getByText } = render(
        <AvatarGroup
          variant={variant}
          avatarPropsArr={sampleAvatarGroupAccountArr}
          testID="group"
        />,
      );

      expect(getAllByTestId('avatar-account')).toHaveLength(4);
      expect(
        getByText(`+${sampleAvatarGroupAccountArr.length - 4}`),
      ).toBeTruthy();
    });

    it(`respects custom max and size for Account variant`, () => {
      const customMax = 2;
      const customSize = AvatarGroupSize.Xs;
      const { getAllByTestId, getByText } = render(
        <AvatarGroup
          variant={variant}
          avatarPropsArr={sampleAvatarGroupAccountArr}
          max={customMax}
          size={customSize}
        />,
      );

      expect(getAllByTestId('avatar-account')).toHaveLength(customMax);
      expect(
        getByText(`+${sampleAvatarGroupAccountArr.length - customMax}`),
      ).toBeTruthy();
    });
  });

  describe('Favicon variant', () => {
    const variant = AvatarGroupVariant.Favicon;
    const sampleAvatarGroupFaviconArr =
      SAMPLE_AVATARGROUP_AVATARFAVICONPROPSARR.map((item) => ({
        ...item,
        testID: 'avatar-favicon',
      }));
    it(`renders exactly max avatars for the Favicon variant and shows overflow counter`, () => {
      const { getAllByTestId, getByText } = render(
        <AvatarGroup
          variant={variant}
          avatarPropsArr={sampleAvatarGroupFaviconArr}
          testID="group"
        />,
      );

      expect(getAllByTestId('avatar-favicon')).toHaveLength(4);
      expect(
        getByText(`+${sampleAvatarGroupFaviconArr.length - 4}`),
      ).toBeTruthy();
    });

    it(`respects custom max and size for Favicon variant`, () => {
      const customMax = 2;
      const customSize = AvatarGroupSize.Xs;
      const { getAllByTestId, getByText } = render(
        <AvatarGroup
          variant={variant}
          avatarPropsArr={sampleAvatarGroupFaviconArr}
          max={customMax}
          size={customSize}
        />,
      );

      expect(getAllByTestId('avatar-favicon')).toHaveLength(customMax);
      expect(
        getByText(`+${sampleAvatarGroupFaviconArr.length - customMax}`),
      ).toBeTruthy();
    });
  });

  describe('Network variant', () => {
    const variant = AvatarGroupVariant.Network;
    const sampleAvatarGroupNetworkArr =
      SAMPLE_AVATARGROUP_AVATARNETWORKPROPSARR.map((item) => ({
        ...item,
        testID: 'avatar-network',
      }));
    it(`renders exactly max avatars for the Network variant and shows overflow counter`, () => {
      const { getAllByTestId, getByText } = render(
        <AvatarGroup
          variant={variant}
          avatarPropsArr={sampleAvatarGroupNetworkArr}
          testID="group"
        />,
      );

      expect(getAllByTestId('avatar-network')).toHaveLength(4);
      expect(
        getByText(`+${sampleAvatarGroupNetworkArr.length - 4}`),
      ).toBeTruthy();
    });

    it(`respects custom max and size for Network variant`, () => {
      const customMax = 2;
      const customSize = AvatarGroupSize.Xs;
      const { getAllByTestId, getByText } = render(
        <AvatarGroup
          variant={variant}
          avatarPropsArr={sampleAvatarGroupNetworkArr}
          max={customMax}
          size={customSize}
        />,
      );

      expect(getAllByTestId('avatar-network')).toHaveLength(customMax);
      expect(
        getByText(`+${sampleAvatarGroupNetworkArr.length - customMax}`),
      ).toBeTruthy();
    });
  });

  describe('Token variant', () => {
    const variant = AvatarGroupVariant.Token;
    const sampleAvatarGroupTokenArr =
      SAMPLE_AVATARGROUP_AVATARTOKENPROPSARR.map((item) => ({
        ...item,
        testID: 'avatar-token',
      }));
    it(`renders exactly max avatars for the Token variant and shows overflow counter`, () => {
      const { getAllByTestId, getByText } = render(
        <AvatarGroup
          variant={variant}
          avatarPropsArr={sampleAvatarGroupTokenArr}
          testID="group"
        />,
      );

      expect(getAllByTestId('avatar-token')).toHaveLength(4);
      expect(
        getByText(`+${sampleAvatarGroupTokenArr.length - 4}`),
      ).toBeTruthy();
    });

    it(`respects custom max and size for Token variant`, () => {
      const customMax = 2;
      const customSize = AvatarGroupSize.Xs;
      const { getAllByTestId, getByText } = render(
        <AvatarGroup
          variant={variant}
          avatarPropsArr={sampleAvatarGroupTokenArr}
          max={customMax}
          size={customSize}
        />,
      );

      expect(getAllByTestId('avatar-token')).toHaveLength(customMax);
      expect(
        getByText(`+${sampleAvatarGroupTokenArr.length - customMax}`),
      ).toBeTruthy();
    });
  });

  it('toggles flex direction when isReverse is true', () => {
    const { getByTestId } = render(
      <AvatarGroup
        variant={AvatarGroupVariant.Favicon}
        avatarPropsArr={SAMPLE_AVATARGROUP_AVATARFAVICONPROPSARR}
        isReverse
        testID="group"
      />,
    );

    const container = getByTestId('group');
    const style = Array.isArray(container.props.style)
      ? container.props.style[0]
      : container.props.style;
    expect(style.flexDirection).toBe('row-reverse');
  });

  it('forwards twClassName and style props to container', () => {
    const customStyle = { margin: 10 };
    const { getByTestId } = render(
      <AvatarGroup
        variant={AvatarGroupVariant.Account}
        avatarPropsArr={SAMPLE_AVATARGROUP_AVATARACCOUNTPROPSARR}
        twClassName="bg-red-500"
        style={customStyle}
        testID="group"
      />,
    );

    const container = getByTestId('group');
    expect(Array.isArray(container.props.style)).toBe(true);
    expect(container.props.style[1]).toStrictEqual(customStyle);
  });

  it('does not render overflow when count ≤ max', () => {
    const smallArr = SAMPLE_AVATARGROUP_AVATARACCOUNTPROPSARR.slice(0, 3);
    const { queryByText } = render(
      <AvatarGroup
        variant={AvatarGroupVariant.Account}
        avatarPropsArr={smallArr}
        max={4}
      />,
    );
    expect(queryByText(/\+\d+/)).toBeNull();
  });

  it('throws an error for an invalid variant', () => {
    const invalidVariant = 'InvalidVariant' as unknown as AvatarGroupVariant;

    expect(() =>
      render(
        <AvatarGroup
          variant={invalidVariant}
          avatarPropsArr={[{} as any]}
          testID="avatar-group"
        />,
      ),
    ).toThrow('Invalid Avatar Variant: InvalidVariant.');
  });
});
