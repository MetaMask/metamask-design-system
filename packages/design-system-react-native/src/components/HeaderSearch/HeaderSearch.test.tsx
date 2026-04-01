import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { renderHook } from '@testing-library/react-hooks';
import { fireEvent, render } from '@testing-library/react-native';
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

  beforeAll(() => {
    tw = renderHook(() => useTailwind()).result.current;
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('when variant is screen', () => {
    it('renders back button from backButtonProps', () => {
      const onPressBackButton = jest.fn();

      const { getByTestId } = render(
        <HeaderSearch
          variant={HeaderSearchVariant.Screen}
          onPressBackButton={onPressBackButton}
          textFieldSearchProps={mockTextFieldSearchProps}
          backButtonProps={{ testID: 'back-button' }}
        />,
      );

      expect(getByTestId('back-button')).toBeOnTheScreen();
    });

    it('applies testID to root container', () => {
      const onPressBackButton = jest.fn();

      const { getByTestId } = render(
        <HeaderSearch
          variant={HeaderSearchVariant.Screen}
          onPressBackButton={onPressBackButton}
          textFieldSearchProps={mockTextFieldSearchProps}
          testID="header-search"
        />,
      );

      expect(getByTestId('header-search')).toBeOnTheScreen();
    });

    it('invokes onPressBackButton when back button is pressed', () => {
      const onPressBackButton = jest.fn();

      const { getByTestId } = render(
        <HeaderSearch
          variant={HeaderSearchVariant.Screen}
          onPressBackButton={onPressBackButton}
          textFieldSearchProps={mockTextFieldSearchProps}
          backButtonProps={{ testID: 'back-button' }}
        />,
      );

      fireEvent.press(getByTestId('back-button'));

      expect(onPressBackButton).toHaveBeenCalledTimes(1);
    });

    it('forwards backButtonProps to ButtonIcon', () => {
      const onPressBackButton = jest.fn();

      const { getByTestId } = render(
        <HeaderSearch
          variant={HeaderSearchVariant.Screen}
          onPressBackButton={onPressBackButton}
          textFieldSearchProps={mockTextFieldSearchProps}
          backButtonProps={{ testID: 'custom-back-button' }}
        />,
      );

      expect(getByTestId('custom-back-button')).toBeOnTheScreen();
    });

    it('passes textFieldSearchProps through to TextFieldSearch', () => {
      const onPressBackButton = jest.fn();

      const { getByPlaceholderText } = render(
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

    it('merges textFieldSearchProps.twClassName with flex-1 on TextFieldSearch', () => {
      const onPressBackButton = jest.fn();

      const { getByTestId } = render(
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
    it('renders cancel label', () => {
      const onPressCancelButton = jest.fn();

      const { getByText } = render(
        <HeaderSearch
          variant={HeaderSearchVariant.Inline}
          onPressCancelButton={onPressCancelButton}
          textFieldSearchProps={mockTextFieldSearchProps}
        />,
      );

      expect(getByText('Cancel')).toBeOnTheScreen();
    });

    it('applies testID to root container', () => {
      const onPressCancelButton = jest.fn();

      const { getByTestId } = render(
        <HeaderSearch
          variant={HeaderSearchVariant.Inline}
          onPressCancelButton={onPressCancelButton}
          textFieldSearchProps={mockTextFieldSearchProps}
          testID="header-search-inline"
        />,
      );

      expect(getByTestId('header-search-inline')).toBeOnTheScreen();
    });

    it('invokes onPressCancelButton when cancel button is pressed', () => {
      const onPressCancelButton = jest.fn();

      const { getByTestId } = render(
        <HeaderSearch
          variant={HeaderSearchVariant.Inline}
          onPressCancelButton={onPressCancelButton}
          textFieldSearchProps={mockTextFieldSearchProps}
          cancelButtonProps={{ testID: 'cancel-button' }}
        />,
      );

      fireEvent.press(getByTestId('cancel-button'));

      expect(onPressCancelButton).toHaveBeenCalledTimes(1);
    });

    it('forwards cancelButtonProps to Button', () => {
      const onPressCancelButton = jest.fn();

      const { getByTestId } = render(
        <HeaderSearch
          variant={HeaderSearchVariant.Inline}
          onPressCancelButton={onPressCancelButton}
          textFieldSearchProps={mockTextFieldSearchProps}
          cancelButtonProps={{ testID: 'custom-cancel-button' }}
        />,
      );

      expect(getByTestId('custom-cancel-button')).toBeOnTheScreen();
    });

    it('passes textFieldSearchProps through to TextFieldSearch', () => {
      const onPressCancelButton = jest.fn();

      const { getByPlaceholderText } = render(
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

    it('merges textFieldSearchProps.twClassName with flex-1 on TextFieldSearch', () => {
      const onPressCancelButton = jest.fn();

      const { getByTestId } = render(
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

    it('merges cancelButtonProps.textProps.twClassName with text-default', () => {
      const onPressCancelButton = jest.fn();

      const { getByText } = render(
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
    it('merges twClassName into root for screen variant', () => {
      const onPressBackButton = jest.fn();

      const { getByTestId } = render(
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

    it('merges twClassName into root for inline variant', () => {
      const onPressCancelButton = jest.fn();

      const { getByTestId } = render(
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
