import {
  SelectButtonEndArrow,
  SelectButtonVariant,
  TextColor,
} from '@metamask/design-system-shared';
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { fireEvent, render, renderHook } from '@testing-library/react-native';
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

  beforeAll(async () => {
    const { result } = await renderHook(() => useTailwind());

    tw = result.current;
  });

  describe('when rendering the label', () => {
    it('renders placeholder when value prop is omitted', async () => {
      const { getByText } = await render(
        <SelectButton
          testID={ROOT_TEST_ID}
          onPress={noopPress}
          placeholder="Select"
        />,
      );

      expect(getByText('Select')).toHaveTextContent('Select');
    });

    it('renders value when value is set', async () => {
      const { getByText, queryByText } = await render(
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

    it('renders placeholder when value is null', async () => {
      const { getByText } = await render(
        <SelectButton
          testID={ROOT_TEST_ID}
          onPress={noopPress}
          placeholder="Select"
          value={null}
        />,
      );

      expect(getByText('Select')).toHaveTextContent('Select');
    });

    it('exposes testID on the root pressable', async () => {
      const { getByTestId } = await render(
        <SelectButton
          testID="custom-select-button"
          onPress={noopPress}
          placeholder="Label"
        />,
      );

      expect(getByTestId('custom-select-button')).toBeOnTheScreen();
    });

    it('renders startAccessory before the label', async () => {
      const { getByTestId } = await render(
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
      async ({ endArrowDirection, iconName }) => {
        const { getByTestId } = await render(
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
    it('defaults the trailing icon to ArrowDown', async () => {
      const { getByTestId } = await render(
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
    it('does not render a trailing icon', async () => {
      const { queryByTestId } = await render(
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

    it('still renders endAccessory when provided', async () => {
      const { getByTestId, queryByTestId } = await render(
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
    it('renders when endArrowDirection is omitted', async () => {
      const { getByTestId } = await render(
        <SelectButton
          testID={ROOT_TEST_ID}
          onPress={noopPress}
          endAccessory={<View testID="end-accessory" />}
          placeholder="With end accessory"
        />,
      );

      expect(getByTestId('end-accessory')).toBeOnTheScreen();
    });

    it('is ignored when endArrowDirection is set', async () => {
      const { getByTestId, queryByTestId } = await render(
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

  describe('when using variant', () => {
    it('uses muted background for primary variant', async () => {
      const { getByTestId } = await render(
        <SelectButton
          testID={ROOT_TEST_ID}
          onPress={noopPress}
          variant={SelectButtonVariant.Primary}
          placeholder="Label"
        />,
      );

      expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(tw`bg-muted`);
    });

    it('uses transparent background for secondary variant', async () => {
      const { getByTestId } = await render(
        <SelectButton
          testID={ROOT_TEST_ID}
          onPress={noopPress}
          variant={SelectButtonVariant.Secondary}
          placeholder="Label"
        />,
      );

      expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(tw`bg-transparent`);
    });

    it('uses transparent background for tertiary variant', async () => {
      const { getByTestId } = await render(
        <SelectButton
          testID={ROOT_TEST_ID}
          onPress={noopPress}
          variant={SelectButtonVariant.Tertiary}
          placeholder="Label"
        />,
      );

      expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(tw`bg-transparent`);
    });

    it('tertiary variant applies alternative color to string label text', async () => {
      const { getByText } = await render(
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

    it('tertiary variant applies alternative color to trailing arrow icon', async () => {
      const { getByTestId } = await render(
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

  describe('when rendering root pressable styles', () => {
    it('uses default primary container radius and background', async () => {
      const { getByTestId } = await render(
        <SelectButton
          testID={ROOT_TEST_ID}
          onPress={noopPress}
          placeholder="Label"
        />,
      );

      const root = getByTestId(ROOT_TEST_ID);
      expect(root).toHaveStyle(tw`rounded-lg`);
      expect(root).toHaveStyle(tw`bg-muted`);
    });

    it('applies disabled opacity when isDisabled is true', async () => {
      const { getByTestId } = await render(
        <SelectButton
          testID={ROOT_TEST_ID}
          onPress={noopPress}
          isDisabled
          placeholder="Label"
        />,
      );

      expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(tw`opacity-50`);
    });

    it('does not apply disabled opacity when isDisabled is false', async () => {
      const { getByTestId } = await render(
        <SelectButton
          testID={ROOT_TEST_ID}
          onPress={noopPress}
          placeholder="Label"
        />,
      );

      expect(getByTestId(ROOT_TEST_ID)).not.toHaveStyle(tw`opacity-50`);
    });

    it('merges twClassName onto the root', async () => {
      const { getByTestId } = await render(
        <SelectButton
          testID={ROOT_TEST_ID}
          onPress={noopPress}
          twClassName="mt-4"
          placeholder="Label"
        />,
      );

      expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(tw`mt-4`);
    });

    it('merges twClassName when it is a function for primary variant', async () => {
      const twClassName = jest.fn(() => 'mt-2');
      const { getByTestId } = await render(
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

    it('merges twClassName when it is a function for secondary variant', async () => {
      const twClassName = jest.fn(() => 'mt-3');
      const { getByTestId } = await render(
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

    it('merges twClassName when it is a function for tertiary variant', async () => {
      const twClassName = jest.fn(() => 'mt-5');
      const { getByTestId } = await render(
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

    it('merges the style prop after tailwind styles', async () => {
      const customStyle = { marginBottom: 20 };

      const { getByTestId } = await render(
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

  describe('when the root receives a press', () => {
    it('invokes onPress', async () => {
      const onPress = jest.fn();

      const { getByTestId } = await render(
        <SelectButton
          testID={ROOT_TEST_ID}
          onPress={onPress}
          placeholder="Label"
        />,
      );

      expect(await fireEvent.press(getByTestId(ROOT_TEST_ID))).toBeUndefined();

      expect(onPress).toHaveBeenCalledTimes(1);
    });

    it('applies secondary variant pressed background on pressIn', async () => {
      const { getByTestId } = await render(
        <SelectButton
          testID={ROOT_TEST_ID}
          onPress={noopPress}
          variant={SelectButtonVariant.Secondary}
          placeholder="Label"
        />,
      );

      const root = getByTestId(ROOT_TEST_ID);
      await fireEvent(root, 'pressIn');
      expect(root).toHaveStyle(tw`bg-pressed`);
    });

    it('applies primary variant pressed background on pressIn', async () => {
      const { getByTestId } = await render(
        <SelectButton
          testID={ROOT_TEST_ID}
          onPress={noopPress}
          placeholder="Label"
        />,
      );

      const root = getByTestId(ROOT_TEST_ID);
      await fireEvent(root, 'pressIn');
      expect(root).toHaveStyle(tw`bg-muted-pressed`);
    });

    it('does not throw when onPress is omitted', async () => {
      const { getByTestId } = await render(
        <SelectButton testID={ROOT_TEST_ID} placeholder="Label" />,
      );

      expect(await fireEvent.press(getByTestId(ROOT_TEST_ID))).toBeUndefined();
    });

    it('does not throw when isDisabled is true and onPress is omitted', async () => {
      const { getByTestId } = await render(
        <SelectButton testID={ROOT_TEST_ID} isDisabled placeholder="Label" />,
      );

      expect(await fireEvent.press(getByTestId(ROOT_TEST_ID))).toBeUndefined();
    });

    it('does not invoke onPress when isDisabled is true', async () => {
      const onPress = jest.fn();

      const { getByTestId } = await render(
        <SelectButton
          testID={ROOT_TEST_ID}
          onPress={onPress}
          isDisabled
          placeholder="Label"
        />,
      );

      await fireEvent.press(getByTestId(ROOT_TEST_ID));

      expect(onPress).not.toHaveBeenCalled();
    });
  });

  describe('when disabled', () => {
    it('disables the root pressable', async () => {
      const { getByTestId } = await render(
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

  describe('when forwarding pressable props', () => {
    it('forwards hitSlop to the root', async () => {
      const hitSlop = { top: 4, bottom: 4, left: 4, right: 4 };

      const { getByTestId } = await render(
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
    it('applies size to the trailing icon', async () => {
      const { getByTestId } = await render(
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
