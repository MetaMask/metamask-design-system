import { render } from '@testing-library/react-native';

import Text from '../../components/Text';
import { AvatarBaseSize, AvatarBaseShape } from '../../shared/enums';
import { generateAvatarBaseContainerClassNames } from './AvatarBase.utilities';
import {
  DEFAULT_AVATARBASE_PROPS,
  TWCLASSMAP_AVATARBASE_SIZE_SHAPE,
  MAP_AVATARBASE_SIZE_BORDERWIDTH,
} from './AvatarBase.constants';
import AvatarBase from './AvatarBase';

describe('AvatarBase', () => {
  describe('generateAvatarBaseContainerClassNames', () => {
    it('returns correct class names for default state', () => {
      const classNames = generateAvatarBaseContainerClassNames({});
      expect(classNames).toContain(
        'items-center justify-center overflow-hidden',
      );
      expect(classNames).toContain('bg-background-default');
      expect(classNames).toContain(`h-[${DEFAULT_AVATARBASE_PROPS.size}px]`);
      expect(classNames).toContain(`w-[${DEFAULT_AVATARBASE_PROPS.size}px]`);
      expect(classNames).toContain('rounded-full'); // Default shape
      expect(classNames).not.toContain('border'); // No border by default
    });

    it('applies correct shape class when circle', () => {
      const classNames = generateAvatarBaseContainerClassNames({
        shape: AvatarBaseShape.Circle,
      });
      expect(classNames).toContain('rounded-full');
    });

    it('applies correct shape class when not a circle', () => {
      Object.values(AvatarBaseSize).forEach((size) => {
        const expectedShapeClass = TWCLASSMAP_AVATARBASE_SIZE_SHAPE[size];
        const classNames = generateAvatarBaseContainerClassNames({
          size,
          shape: AvatarBaseShape.Square,
        });
        expect(classNames).toContain(expectedShapeClass);
      });
    });

    it('applies correct size styles', () => {
      Object.values(AvatarBaseSize).forEach((size) => {
        const classNames = generateAvatarBaseContainerClassNames({ size });
        expect(classNames).toContain(`h-[${size}px]`);
        expect(classNames).toContain(`w-[${size}px]`);
      });
    });

    it('applies correct size styles with border', () => {
      Object.values(AvatarBaseSize).forEach((size) => {
        const borderWidth = MAP_AVATARBASE_SIZE_BORDERWIDTH[size];
        const expectedSize = borderWidth * 2 + Number(size);
        const classNames = generateAvatarBaseContainerClassNames({
          size,
          hasBorder: true,
        });
        expect(classNames).toContain(`h-[${expectedSize}px]`);
        expect(classNames).toContain(`w-[${expectedSize}px]`);
        expect(classNames).toContain(
          `border-background-default border-[${borderWidth}px]`,
        );
      });
    });

    it('appends additional Tailwind class names', () => {
      const classNames = generateAvatarBaseContainerClassNames({
        twClassName: 'shadow-lg ring-2',
      });
      expect(classNames).toContain('shadow-lg ring-2');
    });

    it('applies all styles together correctly', () => {
      const size = AvatarBaseSize.Lg;
      const borderWidth = MAP_AVATARBASE_SIZE_BORDERWIDTH[size];
      const expectedSize = borderWidth * 2 + Number(size);
      const classNames = generateAvatarBaseContainerClassNames({
        size,
        shape: AvatarBaseShape.Square,
        hasBorder: true,
        twClassName: 'border border-blue-500',
      });
      expect(classNames).toContain(
        'items-center justify-center overflow-hidden',
      );
      expect(classNames).toContain('bg-background-default');
      expect(classNames).toContain(`h-[${expectedSize}px]`);
      expect(classNames).toContain(`w-[${expectedSize}px]`);
      expect(classNames).toContain(TWCLASSMAP_AVATARBASE_SIZE_SHAPE[size]);
      expect(classNames).toContain(
        `border-background-default border-[${borderWidth}px]`,
      );
      expect(classNames).toContain('border border-blue-500');
    });
  });
  describe('AvatarBase Component', () => {
    it('renders children when fallbackText is not provided', () => {
      const { getByText } = render(
        <AvatarBase>
          <Text>Child Content</Text>
        </AvatarBase>,
      );
      expect(getByText('Child Content')).toBeDefined();
    });

    it('renders fallbackText when provided and does not render children', () => {
      const fallback = 'Fallback Text';
      const { getByText, queryByText } = render(
        <AvatarBase fallbackText={fallback}>
          <Text>Child Content</Text>
        </AvatarBase>,
      );
      expect(getByText(fallback)).toBeDefined();
      expect(queryByText('Child Content')).toBeNull();
    });

    it('applies custom style to container', () => {
      const customStyle = { margin: 10 };
      const { getByTestId } = render(
        <AvatarBase style={customStyle} testID="avatar-container">
          <Text>Child</Text>
        </AvatarBase>,
      );
      const container = getByTestId('avatar-container');
      // The container style is an array [twResult, customStyle]. Since we ignore tw,
      // check that the second element is our custom style.
      expect(container.props.style[1]).toStrictEqual(customStyle);
    });
  });
});
