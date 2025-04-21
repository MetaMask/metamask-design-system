import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { render } from '@testing-library/react-native';
import React from 'react';

import { IconColor, IconName, IconSize } from '../../types';
import Icon from './Icon';
import { generateIconClassNames } from './Icon.utilities';

describe('Icon', () => {
  describe('generateIconClassNames', () => {
    it('returns default class names when no props are provided', () => {
      const classNames = generateIconClassNames({});
      expect(classNames).toBe(
        generateIconClassNames({
          color: IconColor.IconDefault,
          size: IconSize.Md,
        }),
      );
    });

    it('generates class names correctly for each color', () => {
      Object.values(IconColor).forEach((color) => {
        const classNames = generateIconClassNames({ color });
        expect(classNames).toContain(color);
      });
    });

    it('generates class names correctly for each size', () => {
      Object.values(IconSize)
        .filter((size): size is IconSize => typeof size === 'number') // Ensure only numbers
        .forEach((size) => {
          const classNames = generateIconClassNames({ size });
          expect(classNames).toContain(size.toString()); // Convert number to string for comparison
        });
    });

    it('includes twClassName', () => {
      const classNames = generateIconClassNames({
        twClassName: 'text-primary-default',
      });
      expect(classNames).toContain('text-primary-default');
    });
  });

  describe('Icon Component', () => {
    it('renders the specified icon', () => {
      const { getByTestId } = render(
        <Icon name={IconName.Add} testID="icon" />,
      );
      const iconElement = getByTestId('icon');
      expect(iconElement.props.name).toBe(IconName.Add);
    });

    it('applies default size and color', () => {
      let expectedStyles;

      const TestComponent = () => {
        const tw = useTailwind();
        const expectedClassNames = generateIconClassNames({});
        expectedStyles = tw`${expectedClassNames}`;
        return <Icon name={IconName.Add} testID="icon" />;
      };

      const { getByTestId } = render(<TestComponent />);
      const iconElement = getByTestId('icon');

      expect(expectedStyles).toBeDefined();
      expect(iconElement.props.style[0]).toStrictEqual(expectedStyles);
    });

    Object.values(IconSize).forEach((size) => {
      it(`applies size ${size} correctly`, () => {
        let expectedStyles;

        const TestComponent = () => {
          const tw = useTailwind();
          const expectedClassNames = generateIconClassNames({
            size: size as IconSize,
          });
          expectedStyles = tw`${expectedClassNames}`;
          return (
            <Icon name={IconName.Add} testID="icon" size={size as IconSize} />
          );
        };

        const { getByTestId } = render(<TestComponent />);
        const textElement = getByTestId('icon');

        expect(expectedStyles).toBeDefined();
        expect(textElement.props.style[0]).toStrictEqual(expectedStyles);
      });
    });

    Object.values(IconColor).forEach((color) => {
      it(`applies color ${color} correctly`, () => {
        let expectedStyles;

        const TestComponent = () => {
          const tw = useTailwind();
          const expectedClassNames = generateIconClassNames({ color });
          expectedStyles = tw`${expectedClassNames}`;
          return <Icon name={IconName.Add} testID="icon" color={color} />;
        };

        const { getByTestId } = render(<TestComponent />);
        const textElement = getByTestId('icon');

        expect(expectedStyles).toBeDefined();
        expect(textElement.props.style[0]).toStrictEqual(expectedStyles);
      });
    });

    it('applies custom styles based on props', () => {
      let expectedStyles;
      const props = {
        size: IconSize.Lg,
        color: IconColor.ErrorDefault,
      };

      const TestComponent = () => {
        const tw = useTailwind();
        const expectedClassNames = generateIconClassNames(props);
        expectedStyles = tw`${expectedClassNames}`;
        return <Icon name={IconName.Add} testID="icon" {...props} />;
      };

      const { getByTestId } = render(<TestComponent />);
      const textElement = getByTestId('icon');

      expect(expectedStyles).toBeDefined();
      expect(textElement.props.style[0]).toStrictEqual(expectedStyles);
    });
  });
});
