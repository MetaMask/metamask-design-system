import {
  SelectButtonEndArrow,
  SelectButtonVariant,
  TextColor,
} from '@metamask/design-system-shared';
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { renderHook } from '@testing-library/react-hooks';
import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import { View } from 'react-native';

import { IconColor, IconName, IconSize } from '../../types';
import { TWCLASSMAP_ICON_SIZE_DIMENSION } from '../Icon/Icon.constants';

import { SelectButton } from './SelectButton';
import { MAP_SELECTBUTTON_END_ARROW_DIRECTION_TO_ICON_NAME } from './SelectButton.constants';

const ROOT_TEST_ID = 'select-button';

const noopPress = () => undefined;

describe('SelectButton', () => {
  let tw: ReturnType<typeof useTailwind>;

  beforeAll(() => {
    tw = renderHook(() => useTailwind()).result.current;
  });

  describe('label slot', () => {
    it('renders string children', () => {
      const { getByText } = render(
        <SelectButton testID={ROOT_TEST_ID} onPress={noopPress}>
          Select
        </SelectButton>,
      );

      expect(getByText('Select')).toHaveTextContent('Select');
    });

    it('exposes testID on the root pressable', () => {
      const { getByTestId } = render(
        <SelectButton testID="custom-select-button" onPress={noopPress}>
          Label
        </SelectButton>,
      );

      expect(getByTestId('custom-select-button')).toBeOnTheScreen();
    });

    it('renders startAccessory before the label', () => {
      const { getByTestId } = render(
        <SelectButton
          testID={ROOT_TEST_ID}
          onPress={noopPress}
          startAccessory={<View testID="start-accessory" />}
        >
          With accessory
        </SelectButton>,
      );

      expect(getByTestId('start-accessory')).toBeOnTheScreen();
    });
  });

  describe('when endArrowDirection is set', () => {
    const cases: {
      endArrowDirection: (typeof SelectButtonEndArrow)[keyof typeof SelectButtonEndArrow];
      iconName: IconName;
    }[] = [
      {
        endArrowDirection: SelectButtonEndArrow.Up,
        iconName: IconName.ArrowUp,
      },
      {
        endArrowDirection: SelectButtonEndArrow.Down,
        iconName: IconName.ArrowDown,
      },
      {
        endArrowDirection: SelectButtonEndArrow.Left,
        iconName: IconName.ArrowLeft,
      },
      {
        endArrowDirection: SelectButtonEndArrow.Right,
        iconName: IconName.ArrowRight,
      },
    ];

    it.each(cases)(
      'maps endArrowDirection $endArrowDirection to trailing icon $iconName',
      ({ endArrowDirection, iconName }) => {
        const { getByTestId } = render(
          <SelectButton
            testID={ROOT_TEST_ID}
            onPress={noopPress}
            endArrowDirection={endArrowDirection}
            endArrowDirectionIconProps={{ testID: 'end-arrow' }}
          >
            Label
          </SelectButton>,
        );

        expect(getByTestId('end-arrow')).toHaveProp('name', iconName);
      },
    );
  });

  describe('when endArrowDirection is omitted', () => {
    it('does not render a trailing icon', () => {
      const { queryByTestId } = render(
        <SelectButton
          testID={ROOT_TEST_ID}
          onPress={noopPress}
          endArrowDirectionIconProps={{ testID: 'end-arrow' }}
        >
          Label
        </SelectButton>,
      );

      expect(queryByTestId('end-arrow')).toBeNull();
    });
  });

  describe('when endAccessory is used', () => {
    it('renders when endArrowDirection is omitted', () => {
      const { getByTestId } = render(
        <SelectButton
          testID={ROOT_TEST_ID}
          onPress={noopPress}
          endAccessory={<View testID="end-accessory" />}
        >
          With end accessory
        </SelectButton>,
      );

      expect(getByTestId('end-accessory')).toBeOnTheScreen();
    });

    it('is ignored when endArrowDirection is set', () => {
      const { getByTestId, queryByTestId } = render(
        <SelectButton
          testID={ROOT_TEST_ID}
          onPress={noopPress}
          endArrowDirection={SelectButtonEndArrow.Down}
          endAccessory={<View testID="end-accessory" />}
          endArrowDirectionIconProps={{ testID: 'end-arrow' }}
        >
          Label
        </SelectButton>,
      );

      expect(getByTestId('end-arrow')).toHaveProp(
        'name',
        MAP_SELECTBUTTON_END_ARROW_DIRECTION_TO_ICON_NAME[
          SelectButtonEndArrow.Down
        ],
      );
      expect(queryByTestId('end-accessory')).toBeNull();
    });
  });

  describe('variant', () => {
    it('primary variant uses a muted container like ButtonSecondary', () => {
      const { getByTestId } = render(
        <SelectButton
          testID={ROOT_TEST_ID}
          onPress={noopPress}
          variant={SelectButtonVariant.Primary}
        >
          Label
        </SelectButton>,
      );

      expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(tw`bg-muted`);
    });

    it('secondary variant uses a transparent container like ButtonTertiary', () => {
      const { getByTestId } = render(
        <SelectButton
          testID={ROOT_TEST_ID}
          onPress={noopPress}
          variant={SelectButtonVariant.Secondary}
        >
          Label
        </SelectButton>,
      );

      expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(tw`bg-transparent`);
    });

    it('tertiary variant uses a transparent container like ButtonTertiary', () => {
      const { getByTestId } = render(
        <SelectButton
          testID={ROOT_TEST_ID}
          onPress={noopPress}
          variant={SelectButtonVariant.Tertiary}
        >
          Label
        </SelectButton>,
      );

      expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(tw`bg-transparent`);
    });

    it('tertiary variant applies alternative color to string label text', () => {
      const { getByText } = render(
        <SelectButton
          testID={ROOT_TEST_ID}
          onPress={noopPress}
          variant={SelectButtonVariant.Tertiary}
        >
          Label
        </SelectButton>,
      );

      expect(getByText('Label')).toHaveStyle(
        tw.style(TextColor.TextAlternative),
      );
    });

    it('tertiary variant applies alternative color to trailing arrow icon', () => {
      const { getByTestId } = render(
        <SelectButton
          testID={ROOT_TEST_ID}
          onPress={noopPress}
          variant={SelectButtonVariant.Tertiary}
          endArrowDirection={SelectButtonEndArrow.Down}
          endArrowDirectionIconProps={{ testID: 'end-arrow' }}
        >
          Label
        </SelectButton>,
      );

      expect(getByTestId('end-arrow')).toHaveStyle(
        tw.style(
          IconColor.IconAlternative,
          TWCLASSMAP_ICON_SIZE_DIMENSION[IconSize.Sm],
        ),
      );
    });
  });

  describe('root pressable styles', () => {
    it('inherits ButtonBase container presentation for default primary variant', () => {
      const { getByTestId } = render(
        <SelectButton testID={ROOT_TEST_ID} onPress={noopPress}>
          Label
        </SelectButton>,
      );

      const root = getByTestId(ROOT_TEST_ID);
      expect(root).toHaveStyle(tw`rounded-xl`);
      expect(root).toHaveStyle(tw`bg-muted`);
    });

    it('applies disabled opacity when isDisabled is true', () => {
      const { getByTestId } = render(
        <SelectButton testID={ROOT_TEST_ID} onPress={noopPress} isDisabled>
          Label
        </SelectButton>,
      );

      expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(tw`opacity-50`);
    });

    it('does not apply disabled opacity when isDisabled is false', () => {
      const { getByTestId } = render(
        <SelectButton testID={ROOT_TEST_ID} onPress={noopPress}>
          Label
        </SelectButton>,
      );

      expect(getByTestId(ROOT_TEST_ID)).not.toHaveStyle(tw`opacity-50`);
    });

    it('merges twClassName onto the root', () => {
      const { getByTestId } = render(
        <SelectButton
          testID={ROOT_TEST_ID}
          onPress={noopPress}
          twClassName="mt-4"
        >
          Label
        </SelectButton>,
      );

      expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(tw`mt-4`);
    });

    it('merges the style prop after tailwind styles', () => {
      const customStyle = { marginBottom: 20 };

      const { getByTestId } = render(
        <SelectButton
          testID={ROOT_TEST_ID}
          onPress={noopPress}
          style={customStyle}
        >
          Label
        </SelectButton>,
      );

      expect(getByTestId(ROOT_TEST_ID)).toHaveStyle({ marginBottom: 20 });
    });
  });

  describe('when pressed', () => {
    it('invokes onPress', () => {
      const onPress = jest.fn();

      const { getByTestId } = render(
        <SelectButton testID={ROOT_TEST_ID} onPress={onPress}>
          Label
        </SelectButton>,
      );

      fireEvent.press(getByTestId(ROOT_TEST_ID));

      expect(onPress).toHaveBeenCalledTimes(1);
    });

    it('does not throw when onPress is omitted', () => {
      const { getByTestId } = render(
        <SelectButton testID={ROOT_TEST_ID}>Label</SelectButton>,
      );

      expect(() => {
        fireEvent.press(getByTestId(ROOT_TEST_ID));
      }).not.toThrow();
    });

    it('does not throw when isDisabled is true and onPress is omitted', () => {
      const { getByTestId } = render(
        <SelectButton testID={ROOT_TEST_ID} isDisabled>
          Label
        </SelectButton>,
      );

      expect(() => {
        fireEvent.press(getByTestId(ROOT_TEST_ID));
      }).not.toThrow();
    });

    it('does not invoke onPress when isDisabled is true', () => {
      const onPress = jest.fn();

      const { getByTestId } = render(
        <SelectButton testID={ROOT_TEST_ID} onPress={onPress} isDisabled>
          Label
        </SelectButton>,
      );

      fireEvent.press(getByTestId(ROOT_TEST_ID));

      expect(onPress).not.toHaveBeenCalled();
    });
  });

  describe('when isDisabled is true', () => {
    it('disables the root pressable', () => {
      const { getByTestId } = render(
        <SelectButton testID={ROOT_TEST_ID} onPress={noopPress} isDisabled>
          Label
        </SelectButton>,
      );

      expect(getByTestId(ROOT_TEST_ID)).toBeDisabled();
    });
  });

  describe('Pressable prop forwarding to root', () => {
    it('forwards hitSlop to the root', () => {
      const hitSlop = { top: 4, bottom: 4, left: 4, right: 4 };

      const { getByTestId } = render(
        <SelectButton
          testID={ROOT_TEST_ID}
          onPress={noopPress}
          hitSlop={hitSlop}
        >
          Label
        </SelectButton>,
      );

      expect(getByTestId(ROOT_TEST_ID)).toHaveProp('hitSlop', hitSlop);
    });
  });

  describe('when endArrowDirectionIconProps is provided', () => {
    it('applies size to the trailing icon', () => {
      const { getByTestId } = render(
        <SelectButton
          testID={ROOT_TEST_ID}
          onPress={noopPress}
          endArrowDirection={SelectButtonEndArrow.Down}
          endArrowDirectionIconProps={{
            testID: 'end-arrow',
            size: IconSize.Sm,
          }}
        >
          Label
        </SelectButton>,
      );

      expect(getByTestId('end-arrow')).toHaveStyle(
        tw.style(
          IconColor.IconDefault,
          TWCLASSMAP_ICON_SIZE_DIMENSION[IconSize.Sm],
        ),
      );
    });
  });
});
