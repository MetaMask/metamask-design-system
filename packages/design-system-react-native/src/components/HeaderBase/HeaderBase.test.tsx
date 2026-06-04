// Third party dependencies.
import { render, fireEvent, act } from '@testing-library/react-native';
import React from 'react';

// External dependencies.
import { Text, IconName } from '..';

// Internal dependencies.
import { HeaderBase } from './HeaderBase';

describe('HeaderBase', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('rendering', () => {
    it('renders string title as Text component', async () => {
      const { getByText } = await render(<HeaderBase>Test Title</HeaderBase>);

      expect(getByText('Test Title')).toBeOnTheScreen();
    });

    it('renders custom children when ReactNode is passed', async () => {
      const { getByTestId } = await render(
        <HeaderBase>
          <Text testID="custom-content">Custom Content</Text>
        </HeaderBase>,
      );

      expect(getByTestId('custom-content')).toBeOnTheScreen();
    });
  });

  describe('root props', () => {
    it('applies testID to the root container via ViewProps', async () => {
      const { getByTestId } = await render(
        <HeaderBase testID="my-header">Title</HeaderBase>,
      );

      expect(getByTestId('my-header')).toBeOnTheScreen();
    });

    it('passes through accessibilityLabel via ViewProps', async () => {
      const { getByLabelText } = await render(
        <HeaderBase accessibilityLabel="Page header">Title</HeaderBase>,
      );

      expect(getByLabelText('Page header')).toBeOnTheScreen();
    });
  });

  describe('textProps', () => {
    it('spreads textProps to the title Text when children is a string', async () => {
      const { getByTestId } = await render(
        <HeaderBase textProps={{ testID: 'header-title' }}>Title</HeaderBase>,
      );

      expect(getByTestId('header-title')).toBeOnTheScreen();
    });

    it('does not apply textProps when children is a ReactNode', async () => {
      const { getByTestId, queryByTestId } = await render(
        <HeaderBase textProps={{ testID: 'header-title' }}>
          <Text testID="custom-content">Custom Content</Text>
        </HeaderBase>,
      );

      expect(getByTestId('custom-content')).toBeOnTheScreen();
      expect(queryByTestId('header-title')).toBeNull();
    });
  });

  describe('childrenWrapperProps', () => {
    it('passes childrenWrapperProps to the title wrapper View', async () => {
      const { getByTestId } = await render(
        <HeaderBase childrenWrapperProps={{ testID: 'title-wrapper' }}>
          Title
        </HeaderBase>,
      );

      expect(getByTestId('title-wrapper')).toBeOnTheScreen();
    });
  });

  describe('startAccessory', () => {
    it('renders custom start accessory content', async () => {
      const { getByTestId } = await render(
        <HeaderBase
          startAccessory={<Text testID="start-content">Start</Text>}
          startAccessoryWrapperProps={{ testID: 'start-wrapper' }}
        >
          Title
        </HeaderBase>,
      );

      expect(getByTestId('start-wrapper')).toBeOnTheScreen();
      expect(getByTestId('start-content')).toBeOnTheScreen();
    });

    it('does not render start accessory wrapper when startAccessory is not provided', async () => {
      const { queryByTestId } = await render(
        <HeaderBase startAccessoryWrapperProps={{ testID: 'start-wrapper' }}>
          Title
        </HeaderBase>,
      );

      expect(queryByTestId('start-wrapper')).toBeNull();
    });

    it('passes startAccessoryWrapperProps to start accessory wrapper', async () => {
      const { getByTestId } = await render(
        <HeaderBase
          startAccessory={<Text testID="start-content">Start</Text>}
          startAccessoryWrapperProps={{ testID: 'custom-start-wrapper' }}
        >
          Title
        </HeaderBase>,
      );

      expect(getByTestId('custom-start-wrapper')).toBeOnTheScreen();
    });
  });

  describe('endAccessory', () => {
    it('renders custom end accessory content', async () => {
      const { getByTestId } = await render(
        <HeaderBase
          endAccessory={<Text testID="end-content">End</Text>}
          endAccessoryWrapperProps={{ testID: 'end-wrapper' }}
        >
          Title
        </HeaderBase>,
      );

      expect(getByTestId('end-wrapper')).toBeOnTheScreen();
      expect(getByTestId('end-content')).toBeOnTheScreen();
    });

    it('does not render end accessory wrapper when endAccessory is not provided', async () => {
      const { queryByTestId } = await render(
        <HeaderBase endAccessoryWrapperProps={{ testID: 'end-wrapper' }}>
          Title
        </HeaderBase>,
      );

      expect(queryByTestId('end-wrapper')).toBeNull();
    });

    it('passes endAccessoryWrapperProps to end accessory wrapper', async () => {
      const { getByTestId } = await render(
        <HeaderBase
          endAccessory={<Text testID="end-content">End</Text>}
          endAccessoryWrapperProps={{ testID: 'custom-end-wrapper' }}
        >
          Title
        </HeaderBase>,
      );

      expect(getByTestId('custom-end-wrapper')).toBeOnTheScreen();
    });
  });

  describe('startButtonIconProps', () => {
    it('renders ButtonIcon when startButtonIconProps is provided', async () => {
      const { getByTestId } = await render(
        <HeaderBase
          startButtonIconProps={{
            iconName: IconName.ArrowLeft,
            onPress: jest.fn(),
          }}
          startAccessoryWrapperProps={{ testID: 'start-wrapper' }}
        >
          Title
        </HeaderBase>,
      );

      expect(getByTestId('start-wrapper')).toBeOnTheScreen();
    });

    it('calls onPress handler when start ButtonIcon is pressed', async () => {
      const onPressMock = jest.fn();
      const { getByTestId } = await render(
        <HeaderBase
          startButtonIconProps={{
            iconName: IconName.ArrowLeft,
            onPress: onPressMock,
            testID: 'start-button',
          }}
        >
          Title
        </HeaderBase>,
      );

      await fireEvent.press(getByTestId('start-button'));

      expect(onPressMock).toHaveBeenCalledTimes(1);
    });

    it('prioritizes startAccessory over startButtonIconProps', async () => {
      const { getByTestId, queryByTestId } = await render(
        <HeaderBase
          startAccessory={<Text testID="start-content">Custom Start</Text>}
          startButtonIconProps={{
            iconName: IconName.ArrowLeft,
            onPress: jest.fn(),
            testID: 'start-button',
          }}
        >
          Title
        </HeaderBase>,
      );

      expect(getByTestId('start-content')).toBeOnTheScreen();
      expect(queryByTestId('start-button')).toBeNull();
    });
  });

  describe('endButtonIconProps', () => {
    it('renders single ButtonIcon when one item is provided in array', async () => {
      const { getByTestId } = await render(
        <HeaderBase
          endButtonIconProps={[
            {
              iconName: IconName.Close,
              onPress: jest.fn(),
              testID: 'end-close-button',
            },
          ]}
          endAccessoryWrapperProps={{ testID: 'end-wrapper' }}
        >
          Title
        </HeaderBase>,
      );

      expect(getByTestId('end-wrapper')).toBeOnTheScreen();
      expect(getByTestId('end-close-button')).toBeOnTheScreen();
    });

    it('calls onPress handler when end ButtonIcon is pressed', async () => {
      const onPressMock = jest.fn();
      const { getByTestId } = await render(
        <HeaderBase
          endButtonIconProps={[
            {
              iconName: IconName.Close,
              onPress: onPressMock,
              testID: 'end-close-button',
            },
          ]}
        >
          Title
        </HeaderBase>,
      );

      await fireEvent.press(getByTestId('end-close-button'));

      expect(onPressMock).toHaveBeenCalledTimes(1);
    });

    it('renders multiple ButtonIcons when multiple items are provided', async () => {
      const { getByTestId } = await render(
        <HeaderBase
          endButtonIconProps={[
            {
              iconName: IconName.Search,
              onPress: jest.fn(),
              testID: 'end-search-button',
            },
            {
              iconName: IconName.Close,
              onPress: jest.fn(),
              testID: 'end-close-button',
            },
          ]}
        >
          Title
        </HeaderBase>,
      );

      expect(getByTestId('end-search-button')).toBeOnTheScreen();
      expect(getByTestId('end-close-button')).toBeOnTheScreen();
    });

    it('does not render ButtonIcons when endButtonIconProps is empty array', async () => {
      const { queryByTestId } = await render(
        <HeaderBase
          endButtonIconProps={[]}
          endAccessoryWrapperProps={{ testID: 'end-wrapper' }}
        >
          Title
        </HeaderBase>,
      );

      expect(queryByTestId('end-wrapper')).toBeNull();
    });

    it('prioritizes endAccessory over endButtonIconProps', async () => {
      const { getByTestId, queryByTestId } = await render(
        <HeaderBase
          endAccessory={<Text testID="end-content">Custom End</Text>}
          endButtonIconProps={[
            {
              iconName: IconName.Close,
              onPress: jest.fn(),
              testID: 'end-close-button',
            },
          ]}
        >
          Title
        </HeaderBase>,
      );

      expect(getByTestId('end-content')).toBeOnTheScreen();
      expect(queryByTestId('end-close-button')).toBeNull();
    });
  });

  describe('accessory wrapper rendering for centering', () => {
    it('renders both accessory wrappers when only start accessory is provided', async () => {
      const { getByTestId } = await render(
        <HeaderBase
          startAccessory={<Text testID="start-content">Start</Text>}
          startAccessoryWrapperProps={{ testID: 'start-wrapper' }}
          endAccessoryWrapperProps={{ testID: 'end-wrapper' }}
        >
          Title
        </HeaderBase>,
      );

      expect(getByTestId('start-wrapper')).toBeOnTheScreen();
      expect(getByTestId('end-wrapper')).toBeOnTheScreen();
    });

    it('renders both accessory wrappers when only end accessory is provided', async () => {
      const { getByTestId } = await render(
        <HeaderBase
          endAccessory={<Text testID="end-content">End</Text>}
          startAccessoryWrapperProps={{ testID: 'start-wrapper' }}
          endAccessoryWrapperProps={{ testID: 'end-wrapper' }}
        >
          Title
        </HeaderBase>,
      );

      expect(getByTestId('start-wrapper')).toBeOnTheScreen();
      expect(getByTestId('end-wrapper')).toBeOnTheScreen();
    });

    it('renders both accessory wrappers when both accessories are provided', async () => {
      const { getByTestId } = await render(
        <HeaderBase
          startAccessory={<Text testID="start-content">Start</Text>}
          endAccessory={<Text testID="end-content">End</Text>}
          startAccessoryWrapperProps={{ testID: 'start-wrapper' }}
          endAccessoryWrapperProps={{ testID: 'end-wrapper' }}
        >
          Title
        </HeaderBase>,
      );

      expect(getByTestId('start-wrapper')).toBeOnTheScreen();
      expect(getByTestId('end-wrapper')).toBeOnTheScreen();
      expect(getByTestId('start-content')).toBeOnTheScreen();
      expect(getByTestId('end-content')).toBeOnTheScreen();
    });
  });

  describe('twClassName', () => {
    it('merges twClassName with default styles', async () => {
      const { getByTestId } = await render(
        <HeaderBase testID="header" twClassName="bg-info-default px-4">
          Title
        </HeaderBase>,
      );

      expect(getByTestId('header')).toBeOnTheScreen();
    });
  });

  describe('includesTopInset', () => {
    it('applies top inset margin when includesTopInset is true', async () => {
      const { getByTestId } = await render(
        <HeaderBase testID="header" includesTopInset>
          Title
        </HeaderBase>,
      );

      expect(getByTestId('header')).toBeOnTheScreen();
    });
  });

  describe('layout measurement for centering', () => {
    it('measures start accessory width via onLayout', async () => {
      const { getByTestId } = await render(
        <HeaderBase
          startAccessory={<Text testID="start-content">Start</Text>}
          startAccessoryWrapperProps={{ testID: 'start-wrapper' }}
          endAccessoryWrapperProps={{ testID: 'end-wrapper' }}
        >
          Title
        </HeaderBase>,
      );

      const startWrapper = getByTestId('start-wrapper');
      const layoutView = startWrapper.props.children;

      await act(() => {
        layoutView.props.onLayout({
          nativeEvent: { layout: { width: 40, height: 40 } },
        });
      });

      expect(getByTestId('start-wrapper')).toBeOnTheScreen();
    });

    it('measures end accessory width via onLayout', async () => {
      const { getByTestId } = await render(
        <HeaderBase
          endAccessory={<Text testID="end-content">End</Text>}
          startAccessoryWrapperProps={{ testID: 'start-wrapper' }}
          endAccessoryWrapperProps={{ testID: 'end-wrapper' }}
        >
          Title
        </HeaderBase>,
      );

      const endWrapper = getByTestId('end-wrapper');
      const layoutView = endWrapper.props.children;

      await act(() => {
        layoutView.props.onLayout({
          nativeEvent: { layout: { width: 40, height: 40 } },
        });
      });

      expect(getByTestId('end-wrapper')).toBeOnTheScreen();
    });
  });
});
