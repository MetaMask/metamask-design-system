import { render } from '@testing-library/react-native';

import Text from '../../components/Text';
import { AvatarSize, AvatarShape } from '../../shared/enums';
import { generateAvatarBaseContainerClassNames } from './AvatarBase.utilities';
import {
  DEFAULT_AVATARBASE_PROPS,
  TWCLASSMAP_AVATARBASE_SIZE_SHAPE,
} from './AvatarBase.constants';
import AvatarBase from './AvatarBase';

describe('AvatarBase', () => {
  describe('generateAvatarBaseContainerClassNames', () => {
    it('returns correct class names for default state', () => {
      const classNames = generateAvatarBaseContainerClassNames({});
      expect(classNames).toContain(
        'items-center justify-center overflow-hidden',
      );
      expect(classNames).toContain('bg-background-muted');
      expect(classNames).toContain(`h-[${DEFAULT_AVATARBASE_PROPS.size}px]`);
      expect(classNames).toContain(`w-[${DEFAULT_AVATARBASE_PROPS.size}px]`);
      expect(classNames).toContain('rounded-full'); // Default shape
    });

    it('applies correct shape class when circle', () => {
      const classNames = generateAvatarBaseContainerClassNames({
        shape: AvatarShape.Circle,
      });
      expect(classNames).toContain('rounded-full');
    });

    it('applies correct shape class when not a circle', () => {
      const size = AvatarSize.Lg;
      const expectedShapeClass = TWCLASSMAP_AVATARBASE_SIZE_SHAPE[size];
      const classNames = generateAvatarBaseContainerClassNames({
        size,
        shape: AvatarShape.Square,
      });
      expect(classNames).toContain(expectedShapeClass);
    });

    it('applies correct size styles', () => {
      const size = AvatarSize.Xl;
      const classNames = generateAvatarBaseContainerClassNames({ size });
      expect(classNames).toContain(`h-[${size}px]`);
      expect(classNames).toContain(`w-[${size}px]`);
    });

    it('appends additional Tailwind class names', () => {
      const classNames = generateAvatarBaseContainerClassNames({
        twClassName: 'shadow-lg ring-2',
      });
      expect(classNames).toContain('shadow-lg ring-2');
    });

    it('applies all styles together correctly', () => {
      const classNames = generateAvatarBaseContainerClassNames({
        size: AvatarSize.Md,
        shape: AvatarShape.Square,
        twClassName: 'border border-blue-500',
      });
      expect(classNames).toContain(
        'items-center justify-center overflow-hidden',
      );
      expect(classNames).toContain('bg-background-muted');
      expect(classNames).toContain(`h-[${AvatarSize.Md}px]`);
      expect(classNames).toContain(`w-[${AvatarSize.Md}px]`);
      expect(classNames).toContain(
        TWCLASSMAP_AVATARBASE_SIZE_SHAPE[AvatarSize.Md],
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
