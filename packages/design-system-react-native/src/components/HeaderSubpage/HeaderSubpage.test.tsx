// Third party dependencies.
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { fireEvent, render, renderHook } from '@testing-library/react-native';
import React from 'react';
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// External dependencies.
import { IconName } from '../Icon';

// Internal dependencies.
import { HeaderSubpage } from './HeaderSubpage';

const CONTAINER_TEST_ID = 'header-subpage-container';
const BACK_BUTTON_TEST_ID = 'header-subpage-back-button';
const CLOSE_BUTTON_TEST_ID = 'header-subpage-close-button';
const AVATAR_TEST_ID = 'header-subpage-avatar';

describe('HeaderSubpage', () => {
  let tw: ReturnType<typeof useTailwind>;

  beforeAll(() => {
    tw = renderHook(() => useTailwind()).result.current;
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('content passthrough', () => {
    it('renders title', () => {
      const { getByText } = render(
        <HeaderSubpage title="Send" testID={CONTAINER_TEST_ID} />,
      );

      expect(getByText('Send')).toBeOnTheScreen();
    });

    it('renders avatar and description', () => {
      const { getByTestId, getByText } = render(
        <HeaderSubpage
          title="Send"
          description="Ethereum"
          avatar={<View testID={AVATAR_TEST_ID} />}
          testID={CONTAINER_TEST_ID}
        />,
      );

      expect(getByTestId(AVATAR_TEST_ID)).toBeOnTheScreen();
      expect(getByText('Ethereum')).toBeOnTheScreen();
    });

    it('forwards titleProps to Content', () => {
      const { getByTestId } = render(
        <HeaderSubpage
          title="Send"
          titleProps={{ testID: 'header-subpage-title' }}
          testID={CONTAINER_TEST_ID}
        />,
      );

      expect(getByTestId('header-subpage-title')).toBeOnTheScreen();
    });
  });

  describe('back button', () => {
    it('renders back button when onBack provided', () => {
      const { getByTestId } = render(
        <HeaderSubpage
          title="Send"
          onBack={jest.fn()}
          backButtonProps={{ testID: BACK_BUTTON_TEST_ID }}
          testID={CONTAINER_TEST_ID}
        />,
      );

      expect(getByTestId(BACK_BUTTON_TEST_ID)).toBeOnTheScreen();
    });

    it('renders back button when only onBack is provided', () => {
      const { getByTestId } = render(
        <HeaderSubpage
          title="Send"
          onBack={jest.fn()}
          testID={CONTAINER_TEST_ID}
        />,
      );

      expect(getByTestId('button-icon')).toBeOnTheScreen();
    });

    it('renders back button when only backButtonProps is provided', () => {
      const { getByTestId } = render(
        <HeaderSubpage
          title="Send"
          backButtonProps={{ onPress: jest.fn(), testID: BACK_BUTTON_TEST_ID }}
          testID={CONTAINER_TEST_ID}
        />,
      );

      expect(getByTestId(BACK_BUTTON_TEST_ID)).toBeOnTheScreen();
    });

    it('calls onBack when back button pressed', () => {
      const onBack = jest.fn();
      const { getByTestId } = render(
        <HeaderSubpage
          title="Send"
          onBack={onBack}
          backButtonProps={{ testID: BACK_BUTTON_TEST_ID }}
          testID={CONTAINER_TEST_ID}
        />,
      );

      fireEvent.press(getByTestId(BACK_BUTTON_TEST_ID));

      expect(onBack).toHaveBeenCalledTimes(1);
    });

    it('uses backButtonProps.onPress over onBack when both provided', () => {
      const onBack = jest.fn();
      const onPress = jest.fn();
      const { getByTestId } = render(
        <HeaderSubpage
          title="Send"
          onBack={onBack}
          backButtonProps={{ onPress, testID: BACK_BUTTON_TEST_ID }}
          testID={CONTAINER_TEST_ID}
        />,
      );

      fireEvent.press(getByTestId(BACK_BUTTON_TEST_ID));

      expect(onPress).toHaveBeenCalledTimes(1);
      expect(onBack).not.toHaveBeenCalled();
    });

    it('startAccessory takes priority over onBack', () => {
      const onBack = jest.fn();
      const { getByTestId, queryByTestId } = render(
        <HeaderSubpage
          title="Send"
          onBack={onBack}
          backButtonProps={{ testID: BACK_BUTTON_TEST_ID }}
          startAccessory={<Text testID="custom-start-accessory">Back</Text>}
          testID={CONTAINER_TEST_ID}
        />,
      );

      expect(getByTestId('custom-start-accessory')).toBeOnTheScreen();
      expect(queryByTestId(BACK_BUTTON_TEST_ID)).not.toBeOnTheScreen();
    });
  });

  describe('close button', () => {
    it('renders close button when onClose provided', () => {
      const { getByTestId } = render(
        <HeaderSubpage
          title="Send"
          onClose={jest.fn()}
          closeButtonProps={{ testID: CLOSE_BUTTON_TEST_ID }}
          testID={CONTAINER_TEST_ID}
        />,
      );

      expect(getByTestId(CLOSE_BUTTON_TEST_ID)).toBeOnTheScreen();
    });

    it('renders close button when only onClose is provided', () => {
      const { getByTestId } = render(
        <HeaderSubpage
          title="Send"
          onClose={jest.fn()}
          testID={CONTAINER_TEST_ID}
        />,
      );

      expect(getByTestId('button-icon')).toBeOnTheScreen();
    });

    it('renders close button when only closeButtonProps is provided', () => {
      const { getByTestId } = render(
        <HeaderSubpage
          title="Send"
          closeButtonProps={{
            onPress: jest.fn(),
            testID: CLOSE_BUTTON_TEST_ID,
          }}
          testID={CONTAINER_TEST_ID}
        />,
      );

      expect(getByTestId(CLOSE_BUTTON_TEST_ID)).toBeOnTheScreen();
    });

    it('calls onClose when close button pressed', () => {
      const onClose = jest.fn();
      const { getByTestId } = render(
        <HeaderSubpage
          title="Send"
          onClose={onClose}
          closeButtonProps={{ testID: CLOSE_BUTTON_TEST_ID }}
          testID={CONTAINER_TEST_ID}
        />,
      );

      fireEvent.press(getByTestId(CLOSE_BUTTON_TEST_ID));

      expect(onClose).toHaveBeenCalledTimes(1);
    });

    it('uses closeButtonProps.onPress over onClose when both provided', () => {
      const onClose = jest.fn();
      const onPress = jest.fn();
      const { getByTestId } = render(
        <HeaderSubpage
          title="Send"
          onClose={onClose}
          closeButtonProps={{ onPress, testID: CLOSE_BUTTON_TEST_ID }}
          testID={CONTAINER_TEST_ID}
        />,
      );

      fireEvent.press(getByTestId(CLOSE_BUTTON_TEST_ID));

      expect(onPress).toHaveBeenCalledTimes(1);
      expect(onClose).not.toHaveBeenCalled();
    });

    it('endAccessory takes priority over onClose', () => {
      const { getByTestId, queryByTestId } = render(
        <HeaderSubpage
          title="Send"
          onClose={jest.fn()}
          closeButtonProps={{ testID: CLOSE_BUTTON_TEST_ID }}
          endAccessory={<Text testID="custom-end-accessory">Close</Text>}
          testID={CONTAINER_TEST_ID}
        />,
      );

      expect(getByTestId('custom-end-accessory')).toBeOnTheScreen();
      expect(queryByTestId(CLOSE_BUTTON_TEST_ID)).not.toBeOnTheScreen();
    });
  });

  describe('endButtonIconProps', () => {
    it('renders endButtonIconProps when close props are omitted', () => {
      const { getByTestId } = render(
        <HeaderSubpage
          title="Send"
          endButtonIconProps={[
            {
              iconName: IconName.Search,
              onPress: jest.fn(),
              testID: 'header-subpage-search',
            },
          ]}
          testID={CONTAINER_TEST_ID}
        />,
      );

      expect(getByTestId('header-subpage-search')).toBeOnTheScreen();
    });

    it('renders close button and endButtonIconProps together', () => {
      const { getByTestId } = render(
        <HeaderSubpage
          title="Send"
          onClose={jest.fn()}
          closeButtonProps={{ testID: CLOSE_BUTTON_TEST_ID }}
          endButtonIconProps={[
            {
              iconName: IconName.Search,
              onPress: jest.fn(),
              testID: 'header-subpage-search',
            },
          ]}
          testID={CONTAINER_TEST_ID}
        />,
      );

      expect(getByTestId(CLOSE_BUTTON_TEST_ID)).toBeOnTheScreen();
      expect(getByTestId('header-subpage-search')).toBeOnTheScreen();
    });
  });

  describe('layout', () => {
    it('applies pl-4 and pr-4 when no button icon accessories are present', () => {
      const { getByTestId } = render(
        <HeaderSubpage title="Send" testID={CONTAINER_TEST_ID} />,
      );

      expect(getByTestId(CONTAINER_TEST_ID)).toHaveStyle(
        tw.style('px-4 py-3', 'min-h-14 w-full pl-4 pr-4 py-0 justify-center'),
      );
    });

    it('applies pl-2 when a start button icon is present', () => {
      const { getByTestId } = render(
        <HeaderSubpage
          title="Send"
          onBack={jest.fn()}
          testID={CONTAINER_TEST_ID}
        />,
      );

      expect(getByTestId(CONTAINER_TEST_ID)).toHaveStyle(
        tw.style('px-4 py-3', 'min-h-14 w-full pl-2 pr-4 py-0 justify-center'),
      );
    });

    it('applies pr-2 when end button icons are present', () => {
      const { getByTestId } = render(
        <HeaderSubpage
          title="Send"
          onClose={jest.fn()}
          testID={CONTAINER_TEST_ID}
        />,
      );

      expect(getByTestId(CONTAINER_TEST_ID)).toHaveStyle(
        tw.style('px-4 py-3', 'min-h-14 w-full pl-4 pr-2 py-0 justify-center'),
      );
    });

    it('applies pl-2 and pr-2 when both button icon accessories are present', () => {
      const { getByTestId } = render(
        <HeaderSubpage
          title="Send"
          onBack={jest.fn()}
          onClose={jest.fn()}
          testID={CONTAINER_TEST_ID}
        />,
      );

      expect(getByTestId(CONTAINER_TEST_ID)).toHaveStyle(
        tw.style('px-4 py-3', 'min-h-14 w-full pl-2 pr-2 py-0 justify-center'),
      );
    });

    it('applies pl-4 when a custom startAccessory is provided', () => {
      const { getByTestId } = render(
        <HeaderSubpage
          title="Send"
          startAccessory={<Text testID="custom-start">Back</Text>}
          testID={CONTAINER_TEST_ID}
        />,
      );

      expect(getByTestId(CONTAINER_TEST_ID)).toHaveStyle(
        tw.style('px-4 py-3', 'min-h-14 w-full pl-4 pr-4 py-0 justify-center'),
      );
    });

    it('merges custom twClassName on the ListItem root', () => {
      const { getByTestId } = render(
        <HeaderSubpage
          title="Send"
          testID={CONTAINER_TEST_ID}
          twClassName="border-b border-muted"
        />,
      );

      expect(getByTestId(CONTAINER_TEST_ID)).toHaveStyle(
        tw.style(
          'px-4 py-3',
          'min-h-14 w-full pl-4 pr-4 py-0 justify-center border-b border-muted',
        ),
      );
    });

    it('accepts custom testID on the ListItem root', () => {
      const { getByTestId } = render(
        <HeaderSubpage title="Send" testID="custom-header-subpage" />,
      );

      expect(getByTestId('custom-header-subpage')).toBeOnTheScreen();
    });
  });

  describe('includesTopInset', () => {
    beforeEach(() => {
      jest.mocked(useSafeAreaInsets).mockReturnValue({
        top: 50,
        bottom: 0,
        left: 0,
        right: 0,
      });
    });

    it('applies marginTop when includesTopInset is true', () => {
      const { getByTestId } = render(
        <HeaderSubpage
          title="Send"
          testID={CONTAINER_TEST_ID}
          includesTopInset
        />,
      );

      expect(getByTestId(CONTAINER_TEST_ID)).toHaveStyle({ marginTop: 50 });
    });

    it('does not apply marginTop when includesTopInset is false', () => {
      const { getByTestId } = render(
        <HeaderSubpage title="Send" testID={CONTAINER_TEST_ID} />,
      );

      expect(getByTestId(CONTAINER_TEST_ID)).not.toHaveStyle({ marginTop: 50 });
    });
  });
});
