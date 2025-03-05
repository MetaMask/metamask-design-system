import { render } from '@testing-library/react-native';

import Text from '../../components/Text';
import {
  MAP_AVATARBASE_SIZE_BORDERWIDTH,
  TWCLASSMAP_AVATARBASE_SIZE_SHAPE,
} from '../../primitives/AvatarBase/AvatarBase.constants';
import { AvatarGroupSize } from '../../shared/enums';
import {
  generateAvatarGroupContainerClassNames,
  generateAvatarGroupOverflowTextContainerClassNames,
} from './AvatarGroup.utilities';
import AvatarGroup from './AvatarGroup';
import {
  MAP_AVATARGROUP_SIZE_SPACEBETWEENAVATARS,
  DEFAULT_AVATARGROUP_PROPS,
  SAMPLE_AVATARGROUP_AVATARACCOUNTPROPSARR,
  SAMPLE_AVATARGROUP_AVATARFAVICONPROPSARR,
  SAMPLE_AVATARGROUP_AVATARNETWORKPROPSARR,
  SAMPLE_AVATARGROUP_AVATARTOKENPROPSARR,
} from './AvatarGroup.constants';
import { AvatarGroupVariant } from './AvatarGroup.types';

describe('AvatarGroup', () => {
  describe('generateAvatarGroupContainerClassNames', () => {
    it('returns correct class names for default state', () => {
      const classNames = generateAvatarGroupContainerClassNames({});
      expect(classNames).toContain('flex-row');
      expect(classNames).toContain(
        `gap-[${MAP_AVATARGROUP_SIZE_SPACEBETWEENAVATARS[DEFAULT_AVATARGROUP_PROPS.size]}px]`,
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
        `w-[${Number(DEFAULT_AVATARGROUP_PROPS.size) + MAP_AVATARBASE_SIZE_BORDERWIDTH[DEFAULT_AVATARGROUP_PROPS.size] * 2}px]`,
      );
      expect(classNames).toContain('border-background-default');
      expect(classNames).toContain(
        `border-[${MAP_AVATARBASE_SIZE_BORDERWIDTH[DEFAULT_AVATARGROUP_PROPS.size]}px]`,
      );
      expect(classNames).toContain('rounded-full'); // Default shape
    });

    it('applies correct size and border width for given size', () => {
      Object.values(AvatarGroupSize).forEach((size) => {
        const expectedTotalSize =
          Number(size) + MAP_AVATARBASE_SIZE_BORDERWIDTH[size] * 2;
        const expectedBorderWidth = MAP_AVATARBASE_SIZE_BORDERWIDTH[size];

        const classNames = generateAvatarGroupOverflowTextContainerClassNames({
          size,
        });
        expect(classNames).toContain(`w-[${expectedTotalSize}px]`);
        expect(classNames).toContain(`h-[${expectedTotalSize}px]`);
        expect(classNames).toContain(`border-[${expectedBorderWidth}px]`);
      });
    });

    it('applies correct border radius for network variant', () => {
      Object.values(AvatarGroupSize).forEach((size) => {
        const expectedBorderRadius = TWCLASSMAP_AVATARBASE_SIZE_SHAPE[size];

        const classNames = generateAvatarGroupOverflowTextContainerClassNames({
          size,
          variant: AvatarGroupVariant.Network,
        });
        expect(classNames).toContain(expectedBorderRadius);
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
      const expectedTotalSize =
        Number(size) + MAP_AVATARBASE_SIZE_BORDERWIDTH[size] * 2;
      const expectedBorderWidth = MAP_AVATARBASE_SIZE_BORDERWIDTH[size];
      const expectedBorderRadius = TWCLASSMAP_AVATARBASE_SIZE_SHAPE[size];

      const classNames = generateAvatarGroupOverflowTextContainerClassNames({
        size,
        variant: AvatarGroupVariant.Network,
      });

      expect(classNames).toContain(
        'bg-icon-default items-center justify-center overflow-hidden',
      );
      expect(classNames).toContain(`w-[${expectedTotalSize}px]`);
      expect(classNames).toContain(`h-[${expectedTotalSize}px]`);
      expect(classNames).toContain(`border-[${expectedBorderWidth}px]`);
      expect(classNames).toContain(expectedBorderRadius);
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
      expect(container.children.length).toStrictEqual(
        DEFAULT_AVATARGROUP_PROPS.max + 1,
      );

      const overflowText = getByTestId('avatar-overflow-text');
      expect(overflowText).toBeDefined();
      expect(overflowText.props.children).toStrictEqual(
        `+${SAMPLE_AVATARGROUP_AVATARACCOUNTPROPSARR.length - DEFAULT_AVATARGROUP_PROPS.max}`,
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
