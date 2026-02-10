import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { render } from '@testing-library/react-native';
import React from 'react';

import { IconColor, IconName, IconSize } from '../../types';

import { Icon } from './Icon';

describe('Icon', () => {
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
        expectedStyles = tw.style(
          IconColor.IconDefault,
          `w-[${IconSize.Md}px]`,
          `h-[${IconSize.Md}px]`,
        );
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
        const sizeNum = size as IconSize;

        const TestComponent = () => {
          const tw = useTailwind();
          expectedStyles = tw.style(
            IconColor.IconDefault,
            `w-[${sizeNum}px]`,
            `h-[${sizeNum}px]`,
          );
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
          expectedStyles = tw.style(
            color,
            `w-[${IconSize.Md}px]`,
            `h-[${IconSize.Md}px]`,
          );
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
        expectedStyles = tw.style(
          props.color,
          `w-[${props.size}px]`,
          `h-[${props.size}px]`,
        );
        return <Icon name={IconName.Add} testID="icon" {...props} />;
      };

      const { getByTestId } = render(<TestComponent />);
      const textElement = getByTestId('icon');

      expect(expectedStyles).toBeDefined();
      expect(textElement.props.style[0]).toStrictEqual(expectedStyles);
    });
  });
});
