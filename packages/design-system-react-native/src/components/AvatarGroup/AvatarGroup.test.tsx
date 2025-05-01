import { render } from '@testing-library/react-native';

import { AvatarGroupSize, AvatarGroupVariant } from '../../types';
import {
  TWCLASSMAP_AVATARBASE_SIZE_BORDER,
  TWCLASSMAP_AVATARBASE_HASBORDER_SIZE_DIMENSION,
  TWCLASSMAP_AVATARBASE_SIZE_BORDERRADIUSS_SQUARE,
} from '../AvatarBase/AvatarBase.constants';
import AvatarGroup from './AvatarGroup';
import { MAP_AVATARGROUP_SIZE_SPACEBETWEENAVATARS } from './AvatarGroup.constants';
import {
  SAMPLE_AVATARGROUP_AVATARACCOUNTPROPSARR,
  SAMPLE_AVATARGROUP_AVATARFAVICONPROPSARR,
  SAMPLE_AVATARGROUP_AVATARNETWORKPROPSARR,
  SAMPLE_AVATARGROUP_AVATARTOKENPROPSARR,
} from './AvatarGroup.dev';
import {
  generateAvatarGroupContainerClassNames,
  generateAvatarGroupOverflowTextContainerClassNames,
} from './AvatarGroup.utilities';

describe('AvatarGroup', () => {
  describe('generateAvatarGroupContainerClassNames', () => {
    it('returns correct class names for default state', () => {
      const classNames = generateAvatarGroupContainerClassNames({});
      expect(classNames).toContain('flex-row');
      expect(classNames).toContain(
        `gap-[${MAP_AVATARGROUP_SIZE_SPACEBETWEENAVATARS[AvatarGroupSize.Md]}px]`,
      );
    });

    it('applies reverse row style when isReverse is true', () => {
      const classNames = generateAvatarGroupContainerClassNames({
        isReverse: true,
      });
      expect(classNames).toContain('flex-row-reverse');
    });

    it('applies correct spacing for given size', () => {
      Object.values(AvatarGroupSize).forEach((size) => {
        const expectedGap = `gap-[${MAP_AVATARGROUP_SIZE_SPACEBETWEENAVATARS[size]}px]`;
        const classNames = generateAvatarGroupContainerClassNames({ size });
        expect(classNames).toContain(expectedGap);
      });
    });

    it('appends additional Tailwind class names', () => {
      const classNames = generateAvatarGroupContainerClassNames({
        twClassName: 'justify-start',
      });
      expect(classNames).toContain('justify-start');
    });

    it('applies all styles together correctly', () => {
      const size = AvatarGroupSize.Sm;
      const classNames = generateAvatarGroupContainerClassNames({
        size,
        isReverse: true,
        twClassName: 'items-center',
      });
      expect(classNames).toContain('flex-row-reverse');
      expect(classNames).toContain(
        `gap-[${MAP_AVATARGROUP_SIZE_SPACEBETWEENAVATARS[size]}px]`,
      );
      expect(classNames).toContain('items-center');
    });
  });
  describe('generateAvatarGroupOverflowTextContainerClassNames', () => {
    it('returns correct class names for default state', () => {
      const classNames = generateAvatarGroupOverflowTextContainerClassNames({});
      expect(classNames).toContain(
        'bg-icon-default items-center justify-center overflow-hidden',
      );
      expect(classNames).toContain(
        TWCLASSMAP_AVATARBASE_HASBORDER_SIZE_DIMENSION[AvatarGroupSize.Md],
      );
      expect(classNames).toContain(
        TWCLASSMAP_AVATARBASE_SIZE_BORDER[AvatarGroupSize.Md],
      );
      expect(classNames).toContain('rounded-full'); // Default shape
    });

    it('applies correct size and border width for given size', () => {
      Object.values(AvatarGroupSize).forEach((size) => {
        const classNames = generateAvatarGroupOverflowTextContainerClassNames({
          size,
        });
        expect(classNames).toContain(
          TWCLASSMAP_AVATARBASE_HASBORDER_SIZE_DIMENSION[size],
        );
        expect(classNames).toContain(TWCLASSMAP_AVATARBASE_SIZE_BORDER[size]);
      });
    });

    it('applies correct border radius for network variant', () => {
      Object.values(AvatarGroupSize).forEach((size) => {
        const classNames = generateAvatarGroupOverflowTextContainerClassNames({
          size,
          variant: AvatarGroupVariant.Network,
        });
        expect(classNames).toContain(
          TWCLASSMAP_AVATARBASE_SIZE_BORDERRADIUSS_SQUARE[size],
        );
      });
    });

    it('applies rounded-full for non-network variants', () => {
      const classNames = generateAvatarGroupOverflowTextContainerClassNames({
        variant: AvatarGroupVariant.Token,
      });
      expect(classNames).toContain('rounded-full');
    });

    it('applies all styles together correctly', () => {
      const size = AvatarGroupSize.Lg;
      const classNames = generateAvatarGroupOverflowTextContainerClassNames({
        size,
        variant: AvatarGroupVariant.Network,
      });

      expect(classNames).toContain(
        'bg-icon-default items-center justify-center overflow-hidden',
      );
      expect(classNames).toContain(
        TWCLASSMAP_AVATARBASE_HASBORDER_SIZE_DIMENSION[size],
      );
      expect(classNames).toContain(
        TWCLASSMAP_AVATARBASE_SIZE_BORDERRADIUSS_SQUARE[size],
      );
      expect(classNames).toContain(TWCLASSMAP_AVATARBASE_SIZE_BORDER[size]);
    });
  });
  describe('AvatarGroup Component', () => {
    it('renders with default props and no overflow', () => {
      const { getByTestId, queryByTestId } = render(
        <AvatarGroup
          variant={AvatarGroupVariant.Account}
          avatarPropsArr={SAMPLE_AVATARGROUP_AVATARACCOUNTPROPSARR}
          testID="avatar-group"
          max={SAMPLE_AVATARGROUP_AVATARACCOUNTPROPSARR.length + 1}
        />,
      );

      const container = getByTestId('avatar-group');
      expect(container).toBeDefined();

      const overflowText = queryByTestId('avatar-overflow-text');
      expect(overflowText).toBeNull();

      expect(container.children.length).toStrictEqual(
        SAMPLE_AVATARGROUP_AVATARACCOUNTPROPSARR.length,
      );
    });

    it('renders overflow if array length exceeds `max`', () => {
      const { getByTestId } = render(
        <AvatarGroup
          variant={AvatarGroupVariant.Account}
          avatarPropsArr={SAMPLE_AVATARGROUP_AVATARACCOUNTPROPSARR}
          testID="avatar-group"
        />,
      );
      const container = getByTestId('avatar-group');
      // 4 Avatars + 1 OverflowText
      expect(container.children.length).toStrictEqual(5);

      const overflowText = getByTestId('avatar-overflow-text');
      expect(overflowText).toBeDefined();
      expect(overflowText.props.children).toStrictEqual(
        `+${SAMPLE_AVATARGROUP_AVATARACCOUNTPROPSARR.length - 4}`,
      );
    });

    it('renders the Account variant correctly', () => {
      const { getByTestId } = render(
        <AvatarGroup
          variant={AvatarGroupVariant.Account}
          avatarPropsArr={SAMPLE_AVATARGROUP_AVATARACCOUNTPROPSARR}
          testID="avatar-group"
          max={SAMPLE_AVATARGROUP_AVATARACCOUNTPROPSARR.length + 1}
        />,
      );

      const container = getByTestId('avatar-group');
      expect(container).toBeDefined();

      expect(container.children.length).toStrictEqual(
        SAMPLE_AVATARGROUP_AVATARACCOUNTPROPSARR.length,
      );
    });

    it('renders the Favicon variant correctly', () => {
      const { getByTestId } = render(
        <AvatarGroup
          variant={AvatarGroupVariant.Favicon}
          avatarPropsArr={SAMPLE_AVATARGROUP_AVATARFAVICONPROPSARR}
          testID="avatar-group"
          max={SAMPLE_AVATARGROUP_AVATARFAVICONPROPSARR.length + 1}
        />,
      );

      const container = getByTestId('avatar-group');
      expect(container).toBeDefined();

      expect(container.children.length).toStrictEqual(
        SAMPLE_AVATARGROUP_AVATARFAVICONPROPSARR.length,
      );
    });

    it('renders the Network variant correctly', () => {
      const { getByTestId } = render(
        <AvatarGroup
          variant={AvatarGroupVariant.Network}
          avatarPropsArr={SAMPLE_AVATARGROUP_AVATARNETWORKPROPSARR}
          testID="avatar-group"
          max={SAMPLE_AVATARGROUP_AVATARNETWORKPROPSARR.length + 1}
        />,
      );

      const container = getByTestId('avatar-group');
      expect(container).toBeDefined();

      expect(container.children.length).toStrictEqual(
        SAMPLE_AVATARGROUP_AVATARNETWORKPROPSARR.length,
      );
    });

    it('renders the Token variant correctly', () => {
      const { getByTestId } = render(
        <AvatarGroup
          variant={AvatarGroupVariant.Token}
          avatarPropsArr={SAMPLE_AVATARGROUP_AVATARTOKENPROPSARR}
          testID="avatar-group"
          max={SAMPLE_AVATARGROUP_AVATARTOKENPROPSARR.length + 1}
        />,
      );

      const container = getByTestId('avatar-group');
      expect(container).toBeDefined();

      expect(container.children.length).toStrictEqual(
        SAMPLE_AVATARGROUP_AVATARTOKENPROPSARR.length,
      );
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

    it('applies custom style and passes additional props to container', () => {
      const customStyle = { margin: 20 };
      const { getByTestId } = render(
        <AvatarGroup
          variant={AvatarGroupVariant.Account}
          avatarPropsArr={SAMPLE_AVATARGROUP_AVATARACCOUNTPROPSARR}
          style={customStyle}
          testID="avatar-group"
          accessibilityLabel="avatar-group-container"
        />,
      );
      const container = getByTestId('avatar-group');
      expect(container.props.style[1]).toStrictEqual(customStyle);

      expect(container.props.accessibilityLabel).toStrictEqual(
        'avatar-group-container',
      );
    });
  });
});
