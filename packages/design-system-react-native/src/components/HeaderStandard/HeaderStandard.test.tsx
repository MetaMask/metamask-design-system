// Third party dependencies.
import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import { Text } from 'react-native';

// External dependencies.
import { IconName } from '../Icon';

// Internal dependencies.
import { HeaderStandard } from './HeaderStandard';

const CONTAINER_TEST_ID = 'header-standard-container';
const TITLE_TEST_ID = 'header-standard-title';
const BACK_BUTTON_TEST_ID = 'header-standard-back-button';
const CLOSE_BUTTON_TEST_ID = 'header-standard-close-button';
const START_ACCESSORY_TEST_ID = 'start-accessory-wrapper';
const END_ACCESSORY_TEST_ID = 'end-accessory-wrapper';
const SUBTITLE_ROW_TEST_ID = 'header-standard-subtitle-row';

describe('HeaderStandard', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('title and subtitle', () => {
    it('renders with title', async () => {
      const { getByText } = await render(<HeaderStandard title="Test Title" />);

      expect(getByText('Test Title')).toBeOnTheScreen();
    });

    it('renders title with testID when provided via titleProps', async () => {
      const { getByTestId } = await render(
        <HeaderStandard
          title="Test Title"
          titleProps={{ testID: TITLE_TEST_ID }}
        />,
      );

      expect(getByTestId(TITLE_TEST_ID)).toBeOnTheScreen();
    });

    it('renders container with testID when provided', async () => {
      const { getByTestId } = await render(
        <HeaderStandard title="Test Title" testID={CONTAINER_TEST_ID} />,
      );

      expect(getByTestId(CONTAINER_TEST_ID)).toBeOnTheScreen();
    });

    it('renders custom children instead of title', async () => {
      const { getByText, queryByText } = await render(
        <HeaderStandard title="Ignored Title">
          <Text>Custom Content</Text>
        </HeaderStandard>,
      );

      expect(getByText('Custom Content')).toBeOnTheScreen();
      expect(queryByText('Ignored Title')).not.toBeOnTheScreen();
    });

    it('renders children when both title and children provided', async () => {
      const { getByText, queryByText } = await render(
        <HeaderStandard title="Title Text">
          <Text>Children Text</Text>
        </HeaderStandard>,
      );

      expect(getByText('Children Text')).toBeOnTheScreen();
      expect(queryByText('Title Text')).not.toBeOnTheScreen();
    });

    it('renders subtitle when provided', async () => {
      const { getByText } = await render(
        <HeaderStandard title="Test Title" subtitle="Test Subtitle" />,
      );

      expect(getByText('Test Subtitle')).toBeOnTheScreen();
    });

    it('does not render subtitle when not provided', async () => {
      const { queryByText } = await render(
        <HeaderStandard title="Test Title" />,
      );

      expect(queryByText('Test Subtitle')).not.toBeOnTheScreen();
    });

    it('renders subtitle with testID when provided via subtitleProps', async () => {
      const { getByTestId } = await render(
        <HeaderStandard
          title="Test Title"
          subtitle="Test Subtitle"
          subtitleProps={{ testID: 'subtitle-test-id' }}
        />,
      );

      expect(getByTestId('subtitle-test-id')).toBeOnTheScreen();
    });

    it('renders both title and subtitle together', async () => {
      const { getByText } = await render(
        <HeaderStandard title="Main Title" subtitle="Supporting Text" />,
      );

      expect(getByText('Main Title')).toBeOnTheScreen();
      expect(getByText('Supporting Text')).toBeOnTheScreen();
    });

    it('renders title when passed as React node', async () => {
      const TITLE_NODE_TEST_ID = 'custom-title-node';
      const { getByTestId, getByText } = await render(
        <HeaderStandard
          title={<Text testID={TITLE_NODE_TEST_ID}>Custom Title Node</Text>}
        />,
      );

      expect(getByTestId(TITLE_NODE_TEST_ID)).toBeOnTheScreen();
      expect(getByText('Custom Title Node')).toBeOnTheScreen();
    });

    it('renders subtitle when passed as React node', async () => {
      const SUBTITLE_NODE_TEST_ID = 'custom-subtitle-node';
      const { getByTestId, getByText } = await render(
        <HeaderStandard
          title="Page Title"
          subtitle={
            <Text testID={SUBTITLE_NODE_TEST_ID}>Custom Subtitle Node</Text>
          }
        />,
      );

      expect(getByTestId(SUBTITLE_NODE_TEST_ID)).toBeOnTheScreen();
      expect(getByText('Custom Subtitle Node')).toBeOnTheScreen();
    });

    it('renders both title and subtitle as React nodes', async () => {
      const TITLE_NODE_TEST_ID = 'title-node';
      const SUBTITLE_NODE_TEST_ID = 'subtitle-node';
      const { getByTestId } = await render(
        <HeaderStandard
          title={<Text testID={TITLE_NODE_TEST_ID}>Node Title</Text>}
          subtitle={<Text testID={SUBTITLE_NODE_TEST_ID}>Node Subtitle</Text>}
        />,
      );

      expect(getByTestId(TITLE_NODE_TEST_ID)).toBeOnTheScreen();
      expect(getByTestId(SUBTITLE_NODE_TEST_ID)).toBeOnTheScreen();
    });

    it('renders no title row when title and children are omitted', async () => {
      const { getByTestId, queryAllByText } = await render(
        <HeaderStandard testID={CONTAINER_TEST_ID} />,
      );

      expect(getByTestId(CONTAINER_TEST_ID)).toBeOnTheScreen();
      expect(queryAllByText(/.+/u)).toHaveLength(0);
    });

    it('does not render subtitle row when subtitle is an empty string', async () => {
      const { getByTestId, queryByTestId } = await render(
        <HeaderStandard
          title="Only Title"
          titleProps={{ testID: TITLE_TEST_ID }}
          subtitle=""
          subtitleProps={{ testID: SUBTITLE_ROW_TEST_ID }}
        />,
      );

      expect(getByTestId(TITLE_TEST_ID)).toBeOnTheScreen();
      expect(queryByTestId(SUBTITLE_ROW_TEST_ID)).not.toBeOnTheScreen();
    });
  });

  describe('back button', () => {
    it('renders back button when onBack provided', async () => {
      const { getByTestId } = await render(
        <HeaderStandard
          title="Title"
          onBack={jest.fn()}
          backButtonProps={{ testID: BACK_BUTTON_TEST_ID }}
        />,
      );

      expect(getByTestId(BACK_BUTTON_TEST_ID)).toBeOnTheScreen();
    });

    it('renders back button when only onBack is provided', async () => {
      const { getByTestId } = await render(
        <HeaderStandard title="Title" onBack={jest.fn()} />,
      );

      expect(getByTestId('button-icon')).toBeOnTheScreen();
    });

    it('calls onBack when only onBack is provided', async () => {
      const onBack = jest.fn();
      const { getByTestId } = await render(
        <HeaderStandard title="Title" onBack={onBack} />,
      );

      await fireEvent.press(getByTestId('button-icon'));

      expect(onBack).toHaveBeenCalledTimes(1);
    });

    it('renders back button when backButtonProps provided', async () => {
      const { getByTestId } = await render(
        <HeaderStandard
          title="Title"
          backButtonProps={{ onPress: jest.fn(), testID: BACK_BUTTON_TEST_ID }}
        />,
      );

      expect(getByTestId(BACK_BUTTON_TEST_ID)).toBeOnTheScreen();
    });

    it('calls onBack when back button pressed', async () => {
      const onBack = jest.fn();
      const { getByTestId } = await render(
        <HeaderStandard
          title="Title"
          onBack={onBack}
          backButtonProps={{ testID: BACK_BUTTON_TEST_ID }}
        />,
      );

      await fireEvent.press(getByTestId(BACK_BUTTON_TEST_ID));

      expect(onBack).toHaveBeenCalledTimes(1);
    });

    it('calls backButtonProps.onPress when back button pressed', async () => {
      const onPress = jest.fn();
      const { getByTestId } = await render(
        <HeaderStandard
          title="Title"
          backButtonProps={{ onPress, testID: BACK_BUTTON_TEST_ID }}
        />,
      );

      await fireEvent.press(getByTestId(BACK_BUTTON_TEST_ID));

      expect(onPress).toHaveBeenCalledTimes(1);
    });

    it('uses backButtonProps.onPress over onBack when both provided', async () => {
      const onBack = jest.fn();
      const onPress = jest.fn();
      const { getByTestId } = await render(
        <HeaderStandard
          title="Title"
          onBack={onBack}
          backButtonProps={{ onPress, testID: BACK_BUTTON_TEST_ID }}
        />,
      );

      await fireEvent.press(getByTestId(BACK_BUTTON_TEST_ID));

      expect(onPress).toHaveBeenCalledTimes(1);
      expect(onBack).not.toHaveBeenCalled();
    });

    it('does not render start accessory when no back button props provided', async () => {
      const { queryByTestId } = await render(
        <HeaderStandard
          title="Title"
          startAccessoryWrapperProps={{ testID: START_ACCESSORY_TEST_ID }}
        />,
      );

      expect(queryByTestId(START_ACCESSORY_TEST_ID)).not.toBeOnTheScreen();
    });

    it('renders startButtonIconProps when provided', async () => {
      const onPress = jest.fn();
      const { getByTestId } = await render(
        <HeaderStandard
          title="Title"
          startButtonIconProps={{
            iconName: IconName.Menu,
            onPress,
            testID: 'custom-start-button',
          }}
        />,
      );

      expect(getByTestId('custom-start-button')).toBeOnTheScreen();
    });

    it('startButtonIconProps takes priority over onBack', async () => {
      const onBack = jest.fn();
      const onPress = jest.fn();
      const { getByTestId, queryByTestId } = await render(
        <HeaderStandard
          title="Title"
          onBack={onBack}
          backButtonProps={{ testID: BACK_BUTTON_TEST_ID }}
          startButtonIconProps={{
            iconName: IconName.Menu,
            onPress,
            testID: 'custom-start-button',
          }}
        />,
      );

      expect(getByTestId('custom-start-button')).toBeOnTheScreen();
      expect(queryByTestId(BACK_BUTTON_TEST_ID)).not.toBeOnTheScreen();
    });
  });

  describe('close button', () => {
    it('renders close button when onClose provided', async () => {
      const { getByTestId } = await render(
        <HeaderStandard
          title="Title"
          onClose={jest.fn()}
          closeButtonProps={{ testID: CLOSE_BUTTON_TEST_ID }}
        />,
      );

      expect(getByTestId(CLOSE_BUTTON_TEST_ID)).toBeOnTheScreen();
    });

    it('renders close button when only onClose is provided', async () => {
      const { getByTestId } = await render(
        <HeaderStandard title="Title" onClose={jest.fn()} />,
      );

      expect(getByTestId('button-icon')).toBeOnTheScreen();
    });

    it('calls onClose when only onClose is provided', async () => {
      const onClose = jest.fn();
      const { getByTestId } = await render(
        <HeaderStandard title="Title" onClose={onClose} />,
      );

      await fireEvent.press(getByTestId('button-icon'));

      expect(onClose).toHaveBeenCalledTimes(1);
    });

    it('renders close button when closeButtonProps provided', async () => {
      const { getByTestId } = await render(
        <HeaderStandard
          title="Title"
          closeButtonProps={{
            onPress: jest.fn(),
            testID: CLOSE_BUTTON_TEST_ID,
          }}
        />,
      );

      expect(getByTestId(CLOSE_BUTTON_TEST_ID)).toBeOnTheScreen();
    });

    it('calls onClose when close button pressed', async () => {
      const onClose = jest.fn();
      const { getByTestId } = await render(
        <HeaderStandard
          title="Title"
          onClose={onClose}
          closeButtonProps={{ testID: CLOSE_BUTTON_TEST_ID }}
        />,
      );

      await fireEvent.press(getByTestId(CLOSE_BUTTON_TEST_ID));

      expect(onClose).toHaveBeenCalledTimes(1);
    });

    it('calls closeButtonProps.onPress when close button pressed', async () => {
      const onPress = jest.fn();
      const { getByTestId } = await render(
        <HeaderStandard
          title="Title"
          closeButtonProps={{ onPress, testID: CLOSE_BUTTON_TEST_ID }}
        />,
      );

      await fireEvent.press(getByTestId(CLOSE_BUTTON_TEST_ID));

      expect(onPress).toHaveBeenCalledTimes(1);
    });

    it('uses closeButtonProps.onPress over onClose when both provided', async () => {
      const onClose = jest.fn();
      const onPress = jest.fn();
      const { getByTestId } = await render(
        <HeaderStandard
          title="Title"
          onClose={onClose}
          closeButtonProps={{ onPress, testID: CLOSE_BUTTON_TEST_ID }}
        />,
      );

      await fireEvent.press(getByTestId(CLOSE_BUTTON_TEST_ID));

      expect(onPress).toHaveBeenCalledTimes(1);
      expect(onClose).not.toHaveBeenCalled();
    });

    it('does not render end accessory when no close button props provided', async () => {
      const { queryByTestId } = await render(
        <HeaderStandard
          title="Title"
          endAccessoryWrapperProps={{ testID: END_ACCESSORY_TEST_ID }}
        />,
      );

      expect(queryByTestId(END_ACCESSORY_TEST_ID)).not.toBeOnTheScreen();
    });

    it('renders endButtonIconProps when onClose and closeButtonProps are omitted', async () => {
      const onPress = jest.fn();
      const { getByTestId } = await render(
        <HeaderStandard
          title="Title"
          endButtonIconProps={[
            {
              iconName: IconName.Search,
              onPress,
              testID: 'header-end-search',
            },
          ]}
          endAccessoryWrapperProps={{ testID: END_ACCESSORY_TEST_ID }}
        />,
      );

      expect(getByTestId(END_ACCESSORY_TEST_ID)).toBeOnTheScreen();
      expect(getByTestId('header-end-search')).toBeOnTheScreen();
    });

    it('does not render end accessory when endButtonIconProps is an empty array', async () => {
      const { queryByTestId } = await render(
        <HeaderStandard
          title="Title"
          endButtonIconProps={[]}
          endAccessoryWrapperProps={{ testID: END_ACCESSORY_TEST_ID }}
        />,
      );

      expect(queryByTestId(END_ACCESSORY_TEST_ID)).not.toBeOnTheScreen();
    });
  });

  describe('props forwarding', () => {
    it('renders start accessory when onBack is provided', async () => {
      const { getByTestId } = await render(
        <HeaderStandard
          title="Title"
          onBack={jest.fn()}
          backButtonProps={{ testID: BACK_BUTTON_TEST_ID }}
          startAccessoryWrapperProps={{ testID: START_ACCESSORY_TEST_ID }}
        />,
      );

      expect(getByTestId(START_ACCESSORY_TEST_ID)).toBeOnTheScreen();
    });

    it('forwards endButtonIconProps and adds close button', async () => {
      const { getByTestId } = await render(
        <HeaderStandard
          title="Title"
          endButtonIconProps={[
            { iconName: IconName.Search, onPress: jest.fn() },
          ]}
          onClose={jest.fn()}
          closeButtonProps={{ testID: CLOSE_BUTTON_TEST_ID }}
          endAccessoryWrapperProps={{ testID: END_ACCESSORY_TEST_ID }}
        />,
      );

      expect(getByTestId(END_ACCESSORY_TEST_ID)).toBeOnTheScreen();
      expect(getByTestId(CLOSE_BUTTON_TEST_ID)).toBeOnTheScreen();
    });

    it('accepts custom testID', async () => {
      const { getByTestId } = await render(
        <HeaderStandard title="Title" testID="custom-header" />,
      );

      expect(getByTestId('custom-header')).toBeOnTheScreen();
    });

    it('applies default horizontal padding and custom twClassName on the root', async () => {
      const { getByTestId } = await render(
        <HeaderStandard
          title="Title"
          testID={CONTAINER_TEST_ID}
          twClassName="  border-b border-muted  "
        />,
      );

      expect(getByTestId(CONTAINER_TEST_ID)).toBeOnTheScreen();
    });
  });
});
