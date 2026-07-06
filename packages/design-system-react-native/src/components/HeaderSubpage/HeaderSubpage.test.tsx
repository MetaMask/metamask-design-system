// Third party dependencies.
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { fireEvent, render, renderHook } from '@testing-library/react-native';
import React from 'react';
import { Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// External dependencies.
import { IconName } from '../Icon';

// Internal dependencies.
import { HeaderSubpage } from './HeaderSubpage';

const CONTAINER_TEST_ID = 'header-subpage-container';
const TITLE_TEST_ID = 'header-subpage-title';
const DESCRIPTION_TEST_ID = 'header-subpage-description';
const AVATAR_TEST_ID = 'header-subpage-avatar';
const BACK_BUTTON_TEST_ID = 'header-subpage-back-button';
const CLOSE_BUTTON_TEST_ID = 'header-subpage-close-button';
const START_ACCESSORY_TEST_ID = 'header-subpage-start-accessory';
const END_ACCESSORY_TEST_ID = 'header-subpage-end-accessory';
const CUSTOM_START_BUTTON_TEST_ID = 'header-subpage-custom-start-button';
const END_SEARCH_BUTTON_TEST_ID = 'header-subpage-end-search';

describe('HeaderSubpage', () => {
  let tw: ReturnType<typeof useTailwind>;

  beforeAll(() => {
    tw = renderHook(() => useTailwind()).result.current;
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('content', () => {
    describe('when title is provided', () => {
      it('renders string title', () => {
        const { getByText } = render(<HeaderSubpage title="Test Title" />);

        expect(getByText('Test Title')).toBeOnTheScreen();
      });

      it('forwards titleProps to title Text', () => {
        const { getByTestId } = render(
          <HeaderSubpage
            title="Test Title"
            titleProps={{ testID: TITLE_TEST_ID }}
          />,
        );

        expect(getByTestId(TITLE_TEST_ID)).toBeOnTheScreen();
      });
    });

    describe('when description is provided', () => {
      it('renders string description', () => {
        const { getByText } = render(
          <HeaderSubpage title="Test Title" description="Test Description" />,
        );

        expect(getByText('Test Description')).toBeOnTheScreen();
      });

      it('forwards descriptionProps to description Text', () => {
        const { getByTestId } = render(
          <HeaderSubpage
            title="Test Title"
            description="Test Description"
            descriptionProps={{ testID: DESCRIPTION_TEST_ID }}
          />,
        );

        expect(getByTestId(DESCRIPTION_TEST_ID)).toBeOnTheScreen();
      });
    });

    describe('when avatar is provided', () => {
      it('renders avatar node', () => {
        const { getByTestId } = render(
          <HeaderSubpage
            title="Test Title"
            avatar={<Text testID={AVATAR_TEST_ID}>Avatar</Text>}
          />,
        );

        expect(getByTestId(AVATAR_TEST_ID)).toBeOnTheScreen();
      });
    });

    describe('when testID is provided', () => {
      it('forwards testID to root ListItem', () => {
        const { getByTestId } = render(
          <HeaderSubpage title="Test Title" testID={CONTAINER_TEST_ID} />,
        );

        expect(getByTestId(CONTAINER_TEST_ID)).toBeOnTheScreen();
      });
    });
  });

  describe('resolvedStartAccessory', () => {
    describe('when onBack is provided', () => {
      it('renders back ButtonIcon', () => {
        const { getByTestId } = render(
          <HeaderSubpage
            title="Title"
            onBack={jest.fn()}
            backButtonProps={{ testID: BACK_BUTTON_TEST_ID }}
          />,
        );

        expect(getByTestId(BACK_BUTTON_TEST_ID)).toBeOnTheScreen();
      });

      it('calls onBack on press', () => {
        const onBack = jest.fn();
        const { getByTestId } = render(
          <HeaderSubpage title="Title" onBack={onBack} />,
        );

        fireEvent.press(getByTestId('button-icon'));

        expect(onBack).toHaveBeenCalledTimes(1);
      });
    });

    describe('when backButtonProps is provided', () => {
      it('renders back ButtonIcon', () => {
        const { getByTestId } = render(
          <HeaderSubpage
            title="Title"
            backButtonProps={{
              onPress: jest.fn(),
              testID: BACK_BUTTON_TEST_ID,
            }}
          />,
        );

        expect(getByTestId(BACK_BUTTON_TEST_ID)).toBeOnTheScreen();
      });

      it('calls backButtonProps.onPress on press', () => {
        const onPress = jest.fn();
        const { getByTestId } = render(
          <HeaderSubpage
            title="Title"
            backButtonProps={{ onPress, testID: BACK_BUTTON_TEST_ID }}
          />,
        );

        fireEvent.press(getByTestId(BACK_BUTTON_TEST_ID));

        expect(onPress).toHaveBeenCalledTimes(1);
      });

      it('prefers backButtonProps.onPress over onBack', () => {
        const onBack = jest.fn();
        const onPress = jest.fn();
        const { getByTestId } = render(
          <HeaderSubpage
            title="Title"
            onBack={onBack}
            backButtonProps={{ onPress, testID: BACK_BUTTON_TEST_ID }}
          />,
        );

        fireEvent.press(getByTestId(BACK_BUTTON_TEST_ID));

        expect(onPress).toHaveBeenCalledTimes(1);
        expect(onBack).not.toHaveBeenCalled();
      });
    });

    describe('when startButtonIconProps is provided', () => {
      it('renders custom start ButtonIcon', () => {
        const { getByTestId } = render(
          <HeaderSubpage
            title="Title"
            startButtonIconProps={{
              iconName: IconName.Menu,
              onPress: jest.fn(),
              testID: CUSTOM_START_BUTTON_TEST_ID,
            }}
          />,
        );

        expect(getByTestId(CUSTOM_START_BUTTON_TEST_ID)).toBeOnTheScreen();
      });

      it('takes priority over onBack', () => {
        const { getByTestId, queryByTestId } = render(
          <HeaderSubpage
            title="Title"
            onBack={jest.fn()}
            backButtonProps={{ testID: BACK_BUTTON_TEST_ID }}
            startButtonIconProps={{
              iconName: IconName.Menu,
              onPress: jest.fn(),
              testID: CUSTOM_START_BUTTON_TEST_ID,
            }}
          />,
        );

        expect(getByTestId(CUSTOM_START_BUTTON_TEST_ID)).toBeOnTheScreen();
        expect(queryByTestId(BACK_BUTTON_TEST_ID)).not.toBeOnTheScreen();
      });
    });

    describe('when startAccessory is provided', () => {
      it('takes priority over startButtonIconProps', () => {
        const { getByTestId, queryByTestId } = render(
          <HeaderSubpage
            title="Title"
            startAccessory={<Text testID={START_ACCESSORY_TEST_ID}>Start</Text>}
            startButtonIconProps={{
              iconName: IconName.Menu,
              onPress: jest.fn(),
              testID: CUSTOM_START_BUTTON_TEST_ID,
            }}
          />,
        );

        expect(getByTestId(START_ACCESSORY_TEST_ID)).toBeOnTheScreen();
        expect(
          queryByTestId(CUSTOM_START_BUTTON_TEST_ID),
        ).not.toBeOnTheScreen();
      });
    });

    describe('when no start props are provided', () => {
      it('omits start accessory', () => {
        const { queryByTestId } = render(<HeaderSubpage title="Title" />);

        expect(queryByTestId(BACK_BUTTON_TEST_ID)).not.toBeOnTheScreen();
        expect(
          queryByTestId(CUSTOM_START_BUTTON_TEST_ID),
        ).not.toBeOnTheScreen();
        expect(queryByTestId(START_ACCESSORY_TEST_ID)).not.toBeOnTheScreen();
      });
    });
  });

  describe('resolvedEndAccessory', () => {
    describe('when onClose is provided', () => {
      it('renders close ButtonIcon', () => {
        const { getByTestId } = render(
          <HeaderSubpage
            title="Title"
            onClose={jest.fn()}
            closeButtonProps={{ testID: CLOSE_BUTTON_TEST_ID }}
          />,
        );

        expect(getByTestId(CLOSE_BUTTON_TEST_ID)).toBeOnTheScreen();
      });

      it('calls onClose on press', () => {
        const onClose = jest.fn();
        const { getByTestId } = render(
          <HeaderSubpage title="Title" onClose={onClose} />,
        );

        fireEvent.press(getByTestId('button-icon'));

        expect(onClose).toHaveBeenCalledTimes(1);
      });
    });

    describe('when closeButtonProps is provided', () => {
      it('renders close ButtonIcon', () => {
        const { getByTestId } = render(
          <HeaderSubpage
            title="Title"
            closeButtonProps={{
              onPress: jest.fn(),
              testID: CLOSE_BUTTON_TEST_ID,
            }}
          />,
        );

        expect(getByTestId(CLOSE_BUTTON_TEST_ID)).toBeOnTheScreen();
      });

      it('prefers closeButtonProps.onPress over onClose', () => {
        const onClose = jest.fn();
        const onPress = jest.fn();
        const { getByTestId } = render(
          <HeaderSubpage
            title="Title"
            onClose={onClose}
            closeButtonProps={{ onPress, testID: CLOSE_BUTTON_TEST_ID }}
          />,
        );

        fireEvent.press(getByTestId(CLOSE_BUTTON_TEST_ID));

        expect(onPress).toHaveBeenCalledTimes(1);
        expect(onClose).not.toHaveBeenCalled();
      });
    });

    describe('when endButtonIconProps is provided', () => {
      it('renders end ButtonIcons', () => {
        const { getByTestId } = render(
          <HeaderSubpage
            title="Title"
            endButtonIconProps={[
              {
                iconName: IconName.Search,
                onPress: jest.fn(),
                testID: END_SEARCH_BUTTON_TEST_ID,
              },
            ]}
          />,
        );

        expect(getByTestId(END_SEARCH_BUTTON_TEST_ID)).toBeOnTheScreen();
      });

      it('appends icons after close shortcut', () => {
        const { getByTestId } = render(
          <HeaderSubpage
            title="Title"
            onClose={jest.fn()}
            closeButtonProps={{ testID: CLOSE_BUTTON_TEST_ID }}
            endButtonIconProps={[
              {
                iconName: IconName.Search,
                onPress: jest.fn(),
                testID: END_SEARCH_BUTTON_TEST_ID,
              },
            ]}
          />,
        );

        expect(getByTestId(CLOSE_BUTTON_TEST_ID)).toBeOnTheScreen();
        expect(getByTestId(END_SEARCH_BUTTON_TEST_ID)).toBeOnTheScreen();
      });

      it('omits end accessory when array is empty', () => {
        const { queryByTestId } = render(
          <HeaderSubpage title="Title" endButtonIconProps={[]} />,
        );

        expect(queryByTestId(CLOSE_BUTTON_TEST_ID)).not.toBeOnTheScreen();
        expect(queryByTestId(END_SEARCH_BUTTON_TEST_ID)).not.toBeOnTheScreen();
      });
    });

    describe('when endAccessory is provided', () => {
      it('takes priority over close shortcuts', () => {
        const { getByTestId, queryByTestId } = render(
          <HeaderSubpage
            title="Title"
            onClose={jest.fn()}
            closeButtonProps={{ testID: CLOSE_BUTTON_TEST_ID }}
            endAccessory={<Text testID={END_ACCESSORY_TEST_ID}>End</Text>}
          />,
        );

        expect(getByTestId(END_ACCESSORY_TEST_ID)).toBeOnTheScreen();
        expect(queryByTestId(CLOSE_BUTTON_TEST_ID)).not.toBeOnTheScreen();
      });
    });

    describe('when no end props are provided', () => {
      it('omits end accessory', () => {
        const { queryByTestId } = render(<HeaderSubpage title="Title" />);

        expect(queryByTestId(CLOSE_BUTTON_TEST_ID)).not.toBeOnTheScreen();
        expect(queryByTestId(END_ACCESSORY_TEST_ID)).not.toBeOnTheScreen();
      });
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

    describe('when includesTopInset is true', () => {
      it('applies marginTop from safe area insets', () => {
        const { getByTestId } = render(
          <HeaderSubpage
            title="Title"
            testID={CONTAINER_TEST_ID}
            includesTopInset
          />,
        );

        expect(getByTestId(CONTAINER_TEST_ID)).toHaveStyle({ marginTop: 50 });
      });
    });

    describe('when includesTopInset is false', () => {
      it('omits marginTop from safe area insets', () => {
        const { getByTestId } = render(
          <HeaderSubpage title="Title" testID={CONTAINER_TEST_ID} />,
        );

        expect(getByTestId(CONTAINER_TEST_ID)).not.toHaveStyle({
          marginTop: 50,
        });
      });
    });
  });

  describe('twClassName', () => {
    it('merges default header shell classes on root ListItem', () => {
      const { getByTestId } = render(
        <HeaderSubpage title="Title" testID={CONTAINER_TEST_ID} />,
      );

      expect(getByTestId(CONTAINER_TEST_ID)).toHaveStyle(
        tw.style('px-4 py-3', 'h-14 px-2 py-0 justify-center'),
      );
    });

    it('merges caller classes with default shell classes', () => {
      const { getByTestId } = render(
        <HeaderSubpage
          title="Title"
          testID={CONTAINER_TEST_ID}
          twClassName="border-b border-muted"
        />,
      );

      expect(getByTestId(CONTAINER_TEST_ID)).toHaveStyle(
        tw.style(
          'px-4 py-3',
          'h-14 px-2 py-0 justify-center',
          'border-b border-muted',
        ),
      );
    });
  });

  describe('style', () => {
    it('merges caller style with root ListItem styles', () => {
      const customStyle = { backgroundColor: 'red' };
      const { getByTestId } = render(
        <HeaderSubpage
          title="Title"
          testID={CONTAINER_TEST_ID}
          style={customStyle}
        />,
      );

      expect(getByTestId(CONTAINER_TEST_ID)).toHaveStyle([
        tw.style('px-4 py-3', 'h-14 px-2 py-0 justify-center'),
        customStyle,
      ]);
    });

    describe('when includesTopInset is true', () => {
      beforeEach(() => {
        jest.mocked(useSafeAreaInsets).mockReturnValue({
          top: 50,
          bottom: 0,
          left: 0,
          right: 0,
        });
      });

      it('merges marginTop with caller style', () => {
        const customStyle = { backgroundColor: 'red' };
        const { getByTestId } = render(
          <HeaderSubpage
            title="Title"
            testID={CONTAINER_TEST_ID}
            includesTopInset
            style={customStyle}
          />,
        );

        expect(getByTestId(CONTAINER_TEST_ID)).toHaveStyle([
          { marginTop: 50 },
          customStyle,
        ]);
      });
    });
  });

  describe('accessoryGap', () => {
    describe('when accessoryGap is provided', () => {
      it('renders start accessory and content', () => {
        const { getByText, getByTestId } = render(
          <HeaderSubpage
            title="Title"
            accessoryGap={0}
            onBack={jest.fn()}
            backButtonProps={{ testID: BACK_BUTTON_TEST_ID }}
          />,
        );

        expect(getByText('Title')).toBeOnTheScreen();
        expect(getByTestId(BACK_BUTTON_TEST_ID)).toBeOnTheScreen();
      });
    });
  });
});
