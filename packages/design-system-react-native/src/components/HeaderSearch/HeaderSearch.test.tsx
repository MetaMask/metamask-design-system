import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { fireEvent, render, renderHook } from '@testing-library/react-native';
import React from 'react';

import { HeaderSearch, HeaderSearchVariant } from '.';

const mockTextFieldSearchProps = {
  value: '',
  onChangeText: jest.fn(),
  onPressClearButton: jest.fn(),
  placeholder: 'Search...',
};

describe('HeaderSearch', () => {
  let tw: ReturnType<typeof useTailwind>;

  beforeAll(async () => {
    const { result } = await renderHook(() => useTailwind());

    tw = result.current;
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('when variant is screen', () => {
    it('renders back button from backButtonProps', async () => {
      const onPressBackButton = jest.fn();

      const { getByTestId } = await render(
        <HeaderSearch
          variant={HeaderSearchVariant.Screen}
          onPressBackButton={onPressBackButton}
          textFieldSearchProps={mockTextFieldSearchProps}
          backButtonProps={{ testID: 'back-button' }}
        />,
      );

      expect(getByTestId('back-button')).toBeOnTheScreen();
    });

    it('applies testID to root container', async () => {
      const onPressBackButton = jest.fn();

      const { getByTestId } = await render(
        <HeaderSearch
          variant={HeaderSearchVariant.Screen}
          onPressBackButton={onPressBackButton}
          textFieldSearchProps={mockTextFieldSearchProps}
          testID="header-search"
        />,
      );

      expect(getByTestId('header-search')).toBeOnTheScreen();
    });

    it('invokes onPressBackButton when back button is pressed', async () => {
      const onPressBackButton = jest.fn();

      const { getByTestId } = await render(
        <HeaderSearch
          variant={HeaderSearchVariant.Screen}
          onPressBackButton={onPressBackButton}
          textFieldSearchProps={mockTextFieldSearchProps}
          backButtonProps={{ testID: 'back-button' }}
        />,
      );

      await fireEvent.press(getByTestId('back-button'));

      expect(onPressBackButton).toHaveBeenCalledTimes(1);
    });

    it('forwards backButtonProps to ButtonIcon', async () => {
      const onPressBackButton = jest.fn();

      const { getByTestId } = await render(
        <HeaderSearch
          variant={HeaderSearchVariant.Screen}
          onPressBackButton={onPressBackButton}
          textFieldSearchProps={mockTextFieldSearchProps}
          backButtonProps={{ testID: 'custom-back-button' }}
        />,
      );

      expect(getByTestId('custom-back-button')).toBeOnTheScreen();
    });

    it('does not allow backButtonProps to override onPress', async () => {
      const onPressBackButton = jest.fn();
      const rogueOnPress = jest.fn();

      const { getByTestId } = await render(
        <HeaderSearch
          variant={HeaderSearchVariant.Screen}
          onPressBackButton={onPressBackButton}
          textFieldSearchProps={mockTextFieldSearchProps}
          backButtonProps={
            { testID: 'back-button', onPress: rogueOnPress } as never
          }
        />,
      );

      await fireEvent.press(getByTestId('back-button'));

      expect(onPressBackButton).toHaveBeenCalledTimes(1);
      expect(rogueOnPress).not.toHaveBeenCalled();
    });

    it('passes textFieldSearchProps through to TextFieldSearch', async () => {
      const onPressBackButton = jest.fn();

      const { getByPlaceholderText } = await render(
        <HeaderSearch
          variant={HeaderSearchVariant.Screen}
          onPressBackButton={onPressBackButton}
          textFieldSearchProps={{
            ...mockTextFieldSearchProps,
            placeholder: 'Custom placeholder',
          }}
        />,
      );

      expect(getByPlaceholderText('Custom placeholder')).toBeOnTheScreen();
    });

    it('merges textFieldSearchProps.twClassName with flex-1 on TextFieldSearch', async () => {
      const onPressBackButton = jest.fn();

      const { getByTestId } = await render(
        <HeaderSearch
          variant={HeaderSearchVariant.Screen}
          onPressBackButton={onPressBackButton}
          textFieldSearchProps={{
            ...mockTextFieldSearchProps,
            twClassName: 'mt-1',
          }}
        />,
      );

      const field = getByTestId('textfieldsearch');

      expect(field).toHaveStyle(tw`flex-1`);
      expect(field).toHaveStyle(tw`mt-1`);
    });
  });

  describe('when variant is inline', () => {
    it('renders cancel label', async () => {
      const onPressCancelButton = jest.fn();

      const { getByText } = await render(
        <HeaderSearch
          variant={HeaderSearchVariant.Inline}
          onPressCancelButton={onPressCancelButton}
          textFieldSearchProps={mockTextFieldSearchProps}
        />,
      );

      expect(getByText('Cancel')).toBeOnTheScreen();
    });

    it('applies testID to root container', async () => {
      const onPressCancelButton = jest.fn();

      const { getByTestId } = await render(
        <HeaderSearch
          variant={HeaderSearchVariant.Inline}
          onPressCancelButton={onPressCancelButton}
          textFieldSearchProps={mockTextFieldSearchProps}
          testID="header-search-inline"
        />,
      );

      expect(getByTestId('header-search-inline')).toBeOnTheScreen();
    });

    it('invokes onPressCancelButton when cancel button is pressed', async () => {
      const onPressCancelButton = jest.fn();

      const { getByTestId } = await render(
        <HeaderSearch
          variant={HeaderSearchVariant.Inline}
          onPressCancelButton={onPressCancelButton}
          textFieldSearchProps={mockTextFieldSearchProps}
          cancelButtonProps={{ testID: 'cancel-button' }}
        />,
      );

      await fireEvent.press(getByTestId('cancel-button'));

      expect(onPressCancelButton).toHaveBeenCalledTimes(1);
    });

    it('forwards cancelButtonProps to Button', async () => {
      const onPressCancelButton = jest.fn();

      const { getByTestId } = await render(
        <HeaderSearch
          variant={HeaderSearchVariant.Inline}
          onPressCancelButton={onPressCancelButton}
          textFieldSearchProps={mockTextFieldSearchProps}
          cancelButtonProps={{ testID: 'custom-cancel-button' }}
        />,
      );

      expect(getByTestId('custom-cancel-button')).toBeOnTheScreen();
    });

    it('does not allow cancelButtonProps to override onPress', async () => {
      const onPressCancelButton = jest.fn();
      const rogueOnPress = jest.fn();

      const { getByTestId } = await render(
        <HeaderSearch
          variant={HeaderSearchVariant.Inline}
          onPressCancelButton={onPressCancelButton}
          textFieldSearchProps={mockTextFieldSearchProps}
          cancelButtonProps={
            { testID: 'cancel-button', onPress: rogueOnPress } as never
          }
        />,
      );

      await fireEvent.press(getByTestId('cancel-button'));

      expect(onPressCancelButton).toHaveBeenCalledTimes(1);
      expect(rogueOnPress).not.toHaveBeenCalled();
    });

    it('passes textFieldSearchProps through to TextFieldSearch', async () => {
      const onPressCancelButton = jest.fn();

      const { getByPlaceholderText } = await render(
        <HeaderSearch
          variant={HeaderSearchVariant.Inline}
          onPressCancelButton={onPressCancelButton}
          textFieldSearchProps={{
            ...mockTextFieldSearchProps,
            placeholder: 'Search inline',
          }}
        />,
      );

      expect(getByPlaceholderText('Search inline')).toBeOnTheScreen();
    });

    it('merges textFieldSearchProps.twClassName with flex-1 on TextFieldSearch', async () => {
      const onPressCancelButton = jest.fn();

      const { getByTestId } = await render(
        <HeaderSearch
          variant={HeaderSearchVariant.Inline}
          onPressCancelButton={onPressCancelButton}
          textFieldSearchProps={{
            ...mockTextFieldSearchProps,
            twClassName: 'mt-1',
          }}
        />,
      );

      const field = getByTestId('textfieldsearch');

      expect(field).toHaveStyle(tw`flex-1`);
      expect(field).toHaveStyle(tw`mt-1`);
    });

    it('merges cancelButtonProps.textProps.twClassName with text-default', async () => {
      const onPressCancelButton = jest.fn();

      const { getByText } = await render(
        <HeaderSearch
          variant={HeaderSearchVariant.Inline}
          onPressCancelButton={onPressCancelButton}
          textFieldSearchProps={mockTextFieldSearchProps}
          cancelButtonProps={{
            textProps: { twClassName: 'font-bold' },
          }}
        />,
      );

      const label = getByText('Cancel');

      expect(label).toHaveStyle(tw`text-default`);
      expect(label).toHaveStyle(tw`font-bold`);
    });
  });

  describe('when forwarding Box props', () => {
    it('merges twClassName into root for screen variant', async () => {
      const onPressBackButton = jest.fn();

      const { getByTestId } = await render(
        <HeaderSearch
          variant={HeaderSearchVariant.Screen}
          onPressBackButton={onPressBackButton}
          textFieldSearchProps={mockTextFieldSearchProps}
          testID="container"
          twClassName="bg-error-default"
        />,
      );

      expect(getByTestId('container')).toHaveStyle(tw`bg-error-default`);
    });

    it('merges twClassName into root for inline variant', async () => {
      const onPressCancelButton = jest.fn();

      const { getByTestId } = await render(
        <HeaderSearch
          variant={HeaderSearchVariant.Inline}
          onPressCancelButton={onPressCancelButton}
          textFieldSearchProps={mockTextFieldSearchProps}
          testID="container"
          twClassName="bg-error-default"
        />,
      );

      expect(getByTestId('container')).toHaveStyle(tw`bg-error-default`);
    });
  });
});
