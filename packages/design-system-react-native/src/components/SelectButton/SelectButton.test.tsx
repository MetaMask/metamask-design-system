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
    it('renders placeholder when value is omitted', () => {
      const { getByText } = render(
        <SelectButton
          testID={ROOT_TEST_ID}
          onPress={noopPress}
          placeholder="Select"
        />,
      );

      expect(getByText('Select')).toHaveTextContent('Select');
    });

    it('renders value when value is set', () => {
      const { getByText, queryByText } = render(
        <SelectButton
          testID={ROOT_TEST_ID}
          onPress={noopPress}
          placeholder="Select"
          value="Ethereum"
        />,
      );

      expect(getByText('Ethereum')).toHaveTextContent('Ethereum');
      expect(queryByText('Select')).toBeNull();
    });

    it('renders placeholder when value is null', () => {
      const { getByText } = render(
        <SelectButton
          testID={ROOT_TEST_ID}
          onPress={noopPress}
          placeholder="Select"
          value={null}
        />,
      );

      expect(getByText('Select')).toHaveTextContent('Select');
    });

    it('exposes testID on the root pressable', () => {
      const { getByTestId } = render(
        <SelectButton
          testID="custom-select-button"
          onPress={noopPress}
          placeholder="Label"
        />,
      );

      expect(getByTestId('custom-select-button')).toBeOnTheScreen();
    });

    it('renders startAccessory before the label', () => {
      const { getByTestId } = render(
        <SelectButton
          testID={ROOT_TEST_ID}
          onPress={noopPress}
          placeholder="With accessory"
          startAccessory={<View testID="start-accessory" />}
        />,
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
            placeholder="Label"
          />,
        );

        expect(getByTestId('end-arrow')).toHaveProp('name', iconName);
      },
    );
  });

  describe('when endArrowDirection is omitted', () => {
    it('defaults the trailing icon to ArrowDown', () => {
      const { getByTestId } = render(
        <SelectButton
          testID={ROOT_TEST_ID}
          onPress={noopPress}
          endArrowDirectionIconProps={{ testID: 'end-arrow' }}
          placeholder="Label"
        />,
      );

      expect(getByTestId('end-arrow')).toHaveProp(
        'name',
        MAP_SELECTBUTTON_END_ARROW_DIRECTION_TO_ICON_NAME[
          SelectButtonEndArrow.Down
        ],
      );
    });
  });

  describe('when hideEndArrow is true', () => {
    it('does not render a trailing icon', () => {
      const { queryByTestId } = render(
        <SelectButton
          testID={ROOT_TEST_ID}
          onPress={noopPress}
          hideEndArrow
          endArrowDirectionIconProps={{ testID: 'end-arrow' }}
          placeholder="Label"
        />,
      );

      expect(queryByTestId('end-arrow')).toBeNull();
    });

    it('still renders endAccessory when provided', () => {
      const { getByTestId, queryByTestId } = render(
        <SelectButton
          testID={ROOT_TEST_ID}
          onPress={noopPress}
          hideEndArrow
          endAccessory={<View testID="end-accessory" />}
          endArrowDirectionIconProps={{ testID: 'end-arrow' }}
          placeholder="Label"
        />,
      );

      expect(getByTestId('end-accessory')).toBeOnTheScreen();
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
          placeholder="With end accessory"
        />,
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
          placeholder="Label"
        />,
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
          placeholder="Label"
        />,
      );

      expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(tw`bg-muted`);
    });

    it('secondary variant uses a transparent container like ButtonTertiary', () => {
      const { getByTestId } = render(
        <SelectButton
          testID={ROOT_TEST_ID}
          onPress={noopPress}
          variant={SelectButtonVariant.Secondary}
          placeholder="Label"
        />,
      );

      expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(tw`bg-transparent`);
    });

    it('tertiary variant uses a transparent container like ButtonTertiary', () => {
      const { getByTestId } = render(
        <SelectButton
          testID={ROOT_TEST_ID}
          onPress={noopPress}
          variant={SelectButtonVariant.Tertiary}
          placeholder="Label"
        />,
      );

      expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(tw`bg-transparent`);
    });

    it('tertiary variant applies alternative color to string label text', () => {
      const { getByText } = render(
        <SelectButton
          testID={ROOT_TEST_ID}
          onPress={noopPress}
          variant={SelectButtonVariant.Tertiary}
          placeholder="Label"
        />,
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
          placeholder="Label"
        />,
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
        <SelectButton
          testID={ROOT_TEST_ID}
          onPress={noopPress}
          placeholder="Label"
        />,
      );

      const root = getByTestId(ROOT_TEST_ID);
      expect(root).toHaveStyle(tw`rounded-xl`);
      expect(root).toHaveStyle(tw`bg-muted`);
    });

    it('applies disabled opacity when isDisabled is true', () => {
      const { getByTestId } = render(
        <SelectButton
          testID={ROOT_TEST_ID}
          onPress={noopPress}
          isDisabled
          placeholder="Label"
        />,
      );

      expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(tw`opacity-50`);
    });

    it('does not apply disabled opacity when isDisabled is false', () => {
      const { getByTestId } = render(
        <SelectButton
          testID={ROOT_TEST_ID}
          onPress={noopPress}
          placeholder="Label"
        />,
      );

      expect(getByTestId(ROOT_TEST_ID)).not.toHaveStyle(tw`opacity-50`);
    });

    it('merges twClassName onto the root', () => {
      const { getByTestId } = render(
        <SelectButton
          testID={ROOT_TEST_ID}
          onPress={noopPress}
          twClassName="mt-4"
          placeholder="Label"
        />,
      );

      expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(tw`mt-4`);
    });

    it('merges twClassName when it is a function for primary variant', () => {
      const twClassName = jest.fn(() => 'mt-2');
      const { getByTestId } = render(
        <SelectButton
          testID={ROOT_TEST_ID}
          onPress={noopPress}
          variant={SelectButtonVariant.Primary}
          twClassName={twClassName}
          placeholder="Label"
        />,
      );

      expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(tw`mt-2`);
      expect(twClassName).toHaveBeenCalled();
    });

    it('merges twClassName when it is a function for secondary variant', () => {
      const twClassName = jest.fn(() => 'mt-3');
      const { getByTestId } = render(
        <SelectButton
          testID={ROOT_TEST_ID}
          onPress={noopPress}
          variant={SelectButtonVariant.Secondary}
          twClassName={twClassName}
          placeholder="Label"
        />,
      );

      expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(tw`mt-3`);
      expect(twClassName).toHaveBeenCalled();
    });

    it('merges twClassName when it is a function for tertiary variant', () => {
      const twClassName = jest.fn(() => 'mt-5');
      const { getByTestId } = render(
        <SelectButton
          testID={ROOT_TEST_ID}
          onPress={noopPress}
          variant={SelectButtonVariant.Tertiary}
          twClassName={twClassName}
          placeholder="Label"
        />,
      );

      expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(tw`mt-5`);
      expect(twClassName).toHaveBeenCalled();
    });

    it('merges the style prop after tailwind styles', () => {
      const customStyle = { marginBottom: 20 };

      const { getByTestId } = render(
        <SelectButton
          testID={ROOT_TEST_ID}
          onPress={noopPress}
          style={customStyle}
          placeholder="Label"
        />,
      );

      expect(getByTestId(ROOT_TEST_ID)).toHaveStyle({ marginBottom: 20 });
    });
  });

  describe('when pressed', () => {
    it('invokes onPress', () => {
      const onPress = jest.fn();

      const { getByTestId } = render(
        <SelectButton
          testID={ROOT_TEST_ID}
          onPress={onPress}
          placeholder="Label"
        />,
      );

      fireEvent.press(getByTestId(ROOT_TEST_ID));

      expect(onPress).toHaveBeenCalledTimes(1);
    });

    it('applies secondary variant pressed background on pressIn', () => {
      const { getByTestId } = render(
        <SelectButton
          testID={ROOT_TEST_ID}
          onPress={noopPress}
          variant={SelectButtonVariant.Secondary}
          placeholder="Label"
        />,
      );

      const root = getByTestId(ROOT_TEST_ID);
      fireEvent(root, 'pressIn');
      expect(root).toHaveStyle(tw`bg-pressed`);
    });

    it('applies primary variant pressed background on pressIn', () => {
      const { getByTestId } = render(
        <SelectButton
          testID={ROOT_TEST_ID}
          onPress={noopPress}
          placeholder="Label"
        />,
      );

      const root = getByTestId(ROOT_TEST_ID);
      fireEvent(root, 'pressIn');
      expect(root).toHaveStyle(tw`bg-muted-pressed`);
    });

    it('does not throw when onPress is omitted', () => {
      const { getByTestId } = render(
        <SelectButton testID={ROOT_TEST_ID} placeholder="Label" />,
      );

      expect(() => {
        fireEvent.press(getByTestId(ROOT_TEST_ID));
      }).not.toThrow();
    });

    it('does not throw when isDisabled is true and onPress is omitted', () => {
      const { getByTestId } = render(
        <SelectButton testID={ROOT_TEST_ID} isDisabled placeholder="Label" />,
      );

      expect(() => {
        fireEvent.press(getByTestId(ROOT_TEST_ID));
      }).not.toThrow();
    });

    it('does not invoke onPress when isDisabled is true', () => {
      const onPress = jest.fn();

      const { getByTestId } = render(
        <SelectButton
          testID={ROOT_TEST_ID}
          onPress={onPress}
          isDisabled
          placeholder="Label"
        />,
      );

      fireEvent.press(getByTestId(ROOT_TEST_ID));

      expect(onPress).not.toHaveBeenCalled();
    });
  });

  describe('when isDisabled is true', () => {
    it('disables the root pressable', () => {
      const { getByTestId } = render(
        <SelectButton
          testID={ROOT_TEST_ID}
          onPress={noopPress}
          isDisabled
          placeholder="Label"
        />,
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
          placeholder="Label"
        />,
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
          placeholder="Label"
        />,
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
