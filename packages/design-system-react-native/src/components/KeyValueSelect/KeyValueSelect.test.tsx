import { SelectButtonEndArrow } from '@metamask/design-system-shared';
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { fireEvent, render, renderHook } from '@testing-library/react-native';
import React, { createRef } from 'react';
import { View } from 'react-native';

import { MAP_SELECTBUTTON_END_ARROW_DIRECTION_TO_ICON_NAME } from '../SelectButton/SelectButton.constants';

import { KeyValueSelect } from './KeyValueSelect';

const ROOT_TEST_ID = 'key-value-select';
const noopPress = () => undefined;
const defaultSelectButtonProps = { placeholder: 'Select network' };

describe('KeyValueSelect', () => {
  let tw: ReturnType<typeof useTailwind>;

  beforeAll(() => {
    tw = renderHook(() => useTailwind()).result.current;
  });

  describe('when rendering content', () => {
    it('renders keyLabel and placeholder', () => {
      const { getByText } = render(
        <KeyValueSelect
          keyLabel="Network"
          selectButtonProps={defaultSelectButtonProps}
          onPress={noopPress}
          testID={ROOT_TEST_ID}
        />,
      );

      expect(getByText('Network')).toBeOnTheScreen();
      expect(getByText('Select network')).toBeOnTheScreen();
    });

    it('renders value when set', () => {
      const { getByText, queryByText } = render(
        <KeyValueSelect
          keyLabel="Network"
          value="Ethereum Mainnet"
          selectButtonProps={defaultSelectButtonProps}
          onPress={noopPress}
        />,
      );

      expect(getByText('Ethereum Mainnet')).toBeOnTheScreen();
      expect(queryByText('Select network')).toBeNull();
    });

    it('renders valueStartAccessory', () => {
      const { getByTestId } = render(
        <KeyValueSelect
          keyLabel="Asset"
          valueStartAccessory={<View testID="start-accessory" />}
          selectButtonProps={{ placeholder: 'Select' }}
          onPress={noopPress}
        />,
      );

      expect(getByTestId('start-accessory')).toBeOnTheScreen();
    });

    it('renders valueEndAccessory when end arrow is hidden', () => {
      const { getByTestId } = render(
        <KeyValueSelect
          keyLabel="Asset"
          valueEndAccessory={<View testID="end-accessory" />}
          selectButtonProps={{
            placeholder: 'Select',
            hideEndArrow: true,
          }}
          onPress={noopPress}
        />,
      );

      expect(getByTestId('end-accessory')).toBeOnTheScreen();
    });

    it('renders trailing arrow from selectButtonProps endArrowDirection', () => {
      const { getByTestId } = render(
        <KeyValueSelect
          keyLabel="Network"
          value="Ethereum"
          selectButtonProps={{
            placeholder: 'Select',
            endArrowDirection: SelectButtonEndArrow.Right,
            endArrowDirectionIconProps: { testID: 'end-arrow' },
          }}
          onPress={noopPress}
        />,
      );

      expect(getByTestId('end-arrow')).toHaveProp(
        'name',
        MAP_SELECTBUTTON_END_ARROW_DIRECTION_TO_ICON_NAME[
          SelectButtonEndArrow.Right
        ],
      );
    });
  });

  describe('when pressed', () => {
    it('calls onPress from the root', () => {
      const onPress = jest.fn();
      const { getByTestId } = render(
        <KeyValueSelect
          keyLabel="Network"
          selectButtonProps={{ placeholder: 'Select' }}
          onPress={onPress}
          testID={ROOT_TEST_ID}
        />,
      );

      fireEvent.press(getByTestId(ROOT_TEST_ID));
      expect(onPress).toHaveBeenCalledTimes(1);
    });

    it('calls outer onPress when pressing the select value label', () => {
      const onPress = jest.fn();
      const { getByText } = render(
        <KeyValueSelect
          keyLabel="Network"
          value="Ethereum"
          selectButtonProps={{ placeholder: 'Select' }}
          onPress={onPress}
          testID={ROOT_TEST_ID}
        />,
      );

      fireEvent.press(getByText('Ethereum'));
      expect(onPress).toHaveBeenCalledTimes(1);
    });
  });

  describe('when isDisabled is true', () => {
    it('does not call onPress', () => {
      const onPress = jest.fn();
      const { getByTestId } = render(
        <KeyValueSelect
          keyLabel="Network"
          value="Ethereum"
          isDisabled
          selectButtonProps={{ placeholder: 'Select' }}
          onPress={onPress}
          testID={ROOT_TEST_ID}
        />,
      );

      fireEvent.press(getByTestId(ROOT_TEST_ID));
      expect(onPress).not.toHaveBeenCalled();
    });

    it('disables the root Pressable', () => {
      const { getByTestId } = render(
        <KeyValueSelect
          keyLabel="Network"
          isDisabled
          selectButtonProps={{ placeholder: 'Select' }}
          onPress={noopPress}
          testID={ROOT_TEST_ID}
        />,
      );

      expect(getByTestId(ROOT_TEST_ID)).toBeDisabled();
    });
  });

  describe('when forwarding a ref', () => {
    it('exposes the root Pressable via forwardRef', () => {
      const ref = createRef<View>();

      render(
        <KeyValueSelect
          ref={ref}
          keyLabel="Network"
          selectButtonProps={{ placeholder: 'Select' }}
          onPress={noopPress}
        />,
      );

      expect(ref.current).not.toBeNull();
      expect(ref.current).toBeInstanceOf(View);
    });
  });

  describe('when rendering the root', () => {
    it('applies full-width edge padding (16px leading, 4px trailing)', () => {
      const { getByTestId } = render(
        <KeyValueSelect
          keyLabel="Network"
          selectButtonProps={{ placeholder: 'Select' }}
          onPress={noopPress}
          testID={ROOT_TEST_ID}
        />,
      );

      expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(
        tw.style('w-full pl-4 pr-1'),
      );
    });

    it('merges twClassName with default root padding', () => {
      const { getByTestId } = render(
        <KeyValueSelect
          keyLabel="Network"
          selectButtonProps={{ placeholder: 'Select' }}
          twClassName="rounded-lg"
          onPress={noopPress}
          testID={ROOT_TEST_ID}
        />,
      );

      expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(
        tw.style('w-full pl-4 pr-1', 'rounded-lg'),
      );
    });

    it('applies bg-pressed when pressed', () => {
      const { getByTestId } = render(
        <KeyValueSelect
          keyLabel="Network"
          selectButtonProps={{ placeholder: 'Select' }}
          onPress={noopPress}
          testOnly_pressed
          testID={ROOT_TEST_ID}
        />,
      );

      expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(
        tw.style('w-full pl-4 pr-1', 'bg-pressed'),
      );
    });

    it('merges user style with base pressable style', () => {
      const { getByTestId } = render(
        <KeyValueSelect
          keyLabel="Network"
          selectButtonProps={{ placeholder: 'Select' }}
          onPress={noopPress}
          style={{ marginTop: 8 }}
          testID={ROOT_TEST_ID}
        />,
      );

      expect(getByTestId(ROOT_TEST_ID)).toHaveStyle([
        tw.style('w-full pl-4 pr-1'),
        { marginTop: 8 },
      ]);
    });

    it('merges user function style for pressed state', () => {
      const { getByTestId } = render(
        <KeyValueSelect
          keyLabel="Network"
          selectButtonProps={{ placeholder: 'Select' }}
          onPress={noopPress}
          testOnly_pressed
          style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1 })}
          testID={ROOT_TEST_ID}
        />,
      );

      expect(getByTestId(ROOT_TEST_ID)).toHaveStyle({ opacity: 0.5 });
    });

    it('merges user function style at rest', () => {
      const { getByTestId } = render(
        <KeyValueSelect
          keyLabel="Network"
          selectButtonProps={{ placeholder: 'Select' }}
          onPress={noopPress}
          style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1 })}
          testID={ROOT_TEST_ID}
        />,
      );

      expect(getByTestId(ROOT_TEST_ID)).toHaveStyle({ opacity: 1 });
    });
  });
});
