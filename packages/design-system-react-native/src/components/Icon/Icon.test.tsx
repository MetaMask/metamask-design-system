import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { render } from '@testing-library/react-native';
import React from 'react';

import { IconColor, IconName, IconSize } from '../../types';

import { Icon } from './Icon';
import { TWCLASSMAP_ICON_SIZE_DIMENSION } from './Icon.constants';

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
          TWCLASSMAP_ICON_SIZE_DIMENSION[IconSize.Md],
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

        const TestComponent = () => {
          const tw = useTailwind();
          expectedStyles = tw.style(
            IconColor.IconDefault,
            TWCLASSMAP_ICON_SIZE_DIMENSION[size],
          );
          return <Icon name={IconName.Add} testID="icon" size={size} />;
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
            TWCLASSMAP_ICON_SIZE_DIMENSION[IconSize.Md],
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
          TWCLASSMAP_ICON_SIZE_DIMENSION[props.size],
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
