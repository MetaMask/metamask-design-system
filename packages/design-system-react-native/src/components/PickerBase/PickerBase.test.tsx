import { PickerBaseEndArrow } from '@metamask/design-system-shared';
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { renderHook } from '@testing-library/react-hooks';
import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import { View } from 'react-native';

import { IconColor, IconName, IconSize } from '../../types';
import { TWCLASSMAP_ICON_SIZE_DIMENSION } from '../Icon/Icon.constants';

import { PickerBase } from './PickerBase';
import { MAP_PICKERBASE_END_ARROW_TO_ICON_NAME } from './PickerBase.constants';

const ROOT_TEST_ID = 'picker-base';

const noopPress = () => undefined;

describe('PickerBase', () => {
  let tw: ReturnType<typeof useTailwind>;

  beforeAll(() => {
    tw = renderHook(() => useTailwind()).result.current;
  });

  describe('label slot', () => {
    it('renders string children', () => {
      const { getByText } = render(
        <PickerBase testID={ROOT_TEST_ID} onPress={noopPress}>
          Select
        </PickerBase>,
      );

      expect(getByText('Select')).toHaveTextContent('Select');
    });

    it('exposes testID on the root pressable', () => {
      const { getByTestId } = render(
        <PickerBase testID="custom-picker" onPress={noopPress}>
          Label
        </PickerBase>,
      );

      expect(getByTestId('custom-picker')).toBeOnTheScreen();
    });

    it('renders startAccessory before the label', () => {
      const { getByTestId } = render(
        <PickerBase
          testID={ROOT_TEST_ID}
          onPress={noopPress}
          startAccessory={<View testID="start-accessory" />}
        >
          With accessory
        </PickerBase>,
      );

      expect(getByTestId('start-accessory')).toBeOnTheScreen();
    });
  });

  describe('when endArrow is set', () => {
    const cases: {
      endArrow: (typeof PickerBaseEndArrow)[keyof typeof PickerBaseEndArrow];
      iconName: IconName;
    }[] = [
      { endArrow: PickerBaseEndArrow.Up, iconName: IconName.ArrowUp },
      { endArrow: PickerBaseEndArrow.Down, iconName: IconName.ArrowDown },
      { endArrow: PickerBaseEndArrow.Left, iconName: IconName.ArrowLeft },
      { endArrow: PickerBaseEndArrow.Right, iconName: IconName.ArrowRight },
    ];

    it.each(cases)(
      'maps endArrow $endArrow to trailing icon $iconName',
      ({ endArrow, iconName }) => {
        const { getByTestId } = render(
          <PickerBase
            testID={ROOT_TEST_ID}
            onPress={noopPress}
            endArrow={endArrow}
            endArrowIconProps={{ testID: 'end-arrow' }}
          >
            Label
          </PickerBase>,
        );

        expect(getByTestId('end-arrow')).toHaveProp('name', iconName);
      },
    );
  });

  describe('when endArrow is omitted', () => {
    it('does not render a trailing icon', () => {
      const { queryByTestId } = render(
        <PickerBase
          testID={ROOT_TEST_ID}
          onPress={noopPress}
          endArrowIconProps={{ testID: 'end-arrow' }}
        >
          Label
        </PickerBase>,
      );

      expect(queryByTestId('end-arrow')).toBeNull();
    });
  });

  describe('when endAccessory is used', () => {
    it('renders when endArrow is omitted', () => {
      const { getByTestId } = render(
        <PickerBase
          testID={ROOT_TEST_ID}
          onPress={noopPress}
          endAccessory={<View testID="end-accessory" />}
        >
          With end accessory
        </PickerBase>,
      );

      expect(getByTestId('end-accessory')).toBeOnTheScreen();
    });

    it('is ignored when endArrow is set', () => {
      const { getByTestId, queryByTestId } = render(
        <PickerBase
          testID={ROOT_TEST_ID}
          onPress={noopPress}
          endArrow={PickerBaseEndArrow.Down}
          endAccessory={<View testID="end-accessory" />}
          endArrowIconProps={{ testID: 'end-arrow' }}
        >
          Label
        </PickerBase>,
      );

      expect(getByTestId('end-arrow')).toHaveProp(
        'name',
        MAP_PICKERBASE_END_ARROW_TO_ICON_NAME[PickerBaseEndArrow.Down],
      );
      expect(queryByTestId('end-accessory')).toBeNull();
    });
  });

  describe('root pressable styles', () => {
    it('inherits ButtonBase container presentation', () => {
      const { getByTestId } = render(
        <PickerBase testID={ROOT_TEST_ID} onPress={noopPress}>
          Label
        </PickerBase>,
      );

      const root = getByTestId(ROOT_TEST_ID);
      expect(root).toHaveStyle(tw`rounded-xl`);
      expect(root).toHaveStyle(tw`bg-muted`);
    });

    it('applies disabled opacity when isDisabled is true', () => {
      const { getByTestId } = render(
        <PickerBase testID={ROOT_TEST_ID} onPress={noopPress} isDisabled>
          Label
        </PickerBase>,
      );

      expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(tw`opacity-50`);
    });

    it('does not apply disabled opacity when isDisabled is false', () => {
      const { getByTestId } = render(
        <PickerBase testID={ROOT_TEST_ID} onPress={noopPress}>
          Label
        </PickerBase>,
      );

      expect(getByTestId(ROOT_TEST_ID)).not.toHaveStyle(tw`opacity-50`);
    });

    it('merges twClassName onto the root', () => {
      const { getByTestId } = render(
        <PickerBase
          testID={ROOT_TEST_ID}
          onPress={noopPress}
          twClassName="mt-4"
        >
          Label
        </PickerBase>,
      );

      expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(tw`mt-4`);
    });

    it('merges the style prop after tailwind styles', () => {
      const customStyle = { marginBottom: 20 };

      const { getByTestId } = render(
        <PickerBase
          testID={ROOT_TEST_ID}
          onPress={noopPress}
          style={customStyle}
        >
          Label
        </PickerBase>,
      );

      expect(getByTestId(ROOT_TEST_ID)).toHaveStyle({ marginBottom: 20 });
    });
  });

  describe('when pressed', () => {
    it('invokes onPress', () => {
      const onPress = jest.fn();

      const { getByTestId } = render(
        <PickerBase testID={ROOT_TEST_ID} onPress={onPress}>
          Label
        </PickerBase>,
      );

      fireEvent.press(getByTestId(ROOT_TEST_ID));

      expect(onPress).toHaveBeenCalledTimes(1);
    });

    it('does not throw when onPress is omitted', () => {
      const { getByTestId } = render(
        <PickerBase testID={ROOT_TEST_ID}>Label</PickerBase>,
      );

      expect(() => {
        fireEvent.press(getByTestId(ROOT_TEST_ID));
      }).not.toThrow();
    });

    it('does not throw when isDisabled is true and onPress is omitted', () => {
      const { getByTestId } = render(
        <PickerBase testID={ROOT_TEST_ID} isDisabled>
          Label
        </PickerBase>,
      );

      expect(() => {
        fireEvent.press(getByTestId(ROOT_TEST_ID));
      }).not.toThrow();
    });

    it('does not invoke onPress when isDisabled is true', () => {
      const onPress = jest.fn();

      const { getByTestId } = render(
        <PickerBase testID={ROOT_TEST_ID} onPress={onPress} isDisabled>
          Label
        </PickerBase>,
      );

      fireEvent.press(getByTestId(ROOT_TEST_ID));

      expect(onPress).not.toHaveBeenCalled();
    });
  });

  describe('when isDisabled is true', () => {
    it('disables the root pressable', () => {
      const { getByTestId } = render(
        <PickerBase testID={ROOT_TEST_ID} onPress={noopPress} isDisabled>
          Label
        </PickerBase>,
      );

      expect(getByTestId(ROOT_TEST_ID)).toBeDisabled();
    });
  });

  describe('Pressable prop forwarding to root', () => {
    it('forwards hitSlop to the root', () => {
      const hitSlop = { top: 4, bottom: 4, left: 4, right: 4 };

      const { getByTestId } = render(
        <PickerBase testID={ROOT_TEST_ID} onPress={noopPress} hitSlop={hitSlop}>
          Label
        </PickerBase>,
      );

      expect(getByTestId(ROOT_TEST_ID)).toHaveProp('hitSlop', hitSlop);
    });
  });

  describe('when endArrowIconProps is provided', () => {
    it('applies size to the trailing icon', () => {
      const { getByTestId } = render(
        <PickerBase
          testID={ROOT_TEST_ID}
          onPress={noopPress}
          endArrow={PickerBaseEndArrow.Down}
          endArrowIconProps={{ testID: 'end-arrow', size: IconSize.Sm }}
        >
          Label
        </PickerBase>,
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
