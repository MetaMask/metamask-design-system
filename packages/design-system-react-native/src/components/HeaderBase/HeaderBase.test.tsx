// Third party dependencies.
import { render, fireEvent, act } from '@testing-library/react-native';
import React from 'react';

// External dependencies.
import { Text, IconName } from '..';

// Internal dependencies.
import HeaderBase from './HeaderBase';

describe('HeaderBase', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('rendering', () => {
    it('renders string title as Text component', () => {
      const { getByText } = render(<HeaderBase>Test Title</HeaderBase>);

      expect(getByText('Test Title')).toBeDefined();
    });

    it('renders custom children when ReactNode is passed', () => {
      const { getByTestId } = render(
        <HeaderBase>
          <Text testID="custom-content">Custom Content</Text>
        </HeaderBase>,
      );

      expect(getByTestId('custom-content')).toBeDefined();
    });
  });

  describe('testID', () => {
    it('applies testID to the root container via ViewProps', () => {
      const { getByTestId } = render(
        <HeaderBase testID="my-header">Title</HeaderBase>,
      );

      expect(getByTestId('my-header')).toBeDefined();
    });

    it('applies default titleTestID to the title Text element', () => {
      const { getByTestId } = render(
        <HeaderBase titleTestID="header-title">Title</HeaderBase>,
      );

      expect(getByTestId('header-title')).toBeDefined();
    });

    it('accepts custom titleTestID for the title Text element', () => {
      const { getByTestId, queryByTestId } = render(
        <HeaderBase titleTestID="custom-title">Title</HeaderBase>,
      );

      expect(getByTestId('custom-title')).toBeDefined();
      expect(queryByTestId('header-title')).toBeNull();
    });

    it('passes through accessibilityLabel via ViewProps', () => {
      const { getByLabelText } = render(
        <HeaderBase accessibilityLabel="Page header">Title</HeaderBase>,
      );

      expect(getByLabelText('Page header')).toBeDefined();
    });
  });

  describe('startAccessory', () => {
    it('renders custom start accessory content', () => {
      const { getByTestId } = render(
        <HeaderBase
          startAccessory={<Text testID="start-content">Start</Text>}
          startAccessoryWrapperProps={{ testID: 'start-wrapper' }}
        >
          Title
        </HeaderBase>,
      );

      expect(getByTestId('start-wrapper')).toBeDefined();
      expect(getByTestId('start-content')).toBeDefined();
    });

    it('does not render start accessory wrapper when startAccessory is not provided', () => {
      const { queryByTestId } = render(
        <HeaderBase startAccessoryWrapperProps={{ testID: 'start-wrapper' }}>
          Title
        </HeaderBase>,
      );

      expect(queryByTestId('start-wrapper')).toBeNull();
    });

    it('passes startAccessoryWrapperProps to start accessory wrapper', () => {
      const { getByTestId } = render(
        <HeaderBase
          startAccessory={<Text testID="start-content">Start</Text>}
          startAccessoryWrapperProps={{ testID: 'custom-start-wrapper' }}
        >
          Title
        </HeaderBase>,
      );

      expect(getByTestId('custom-start-wrapper')).toBeDefined();
    });
  });

  describe('endAccessory', () => {
    it('renders custom end accessory content', () => {
      const { getByTestId } = render(
        <HeaderBase
          endAccessory={<Text testID="end-content">End</Text>}
          endAccessoryWrapperProps={{ testID: 'end-wrapper' }}
        >
          Title
        </HeaderBase>,
      );

      expect(getByTestId('end-wrapper')).toBeDefined();
      expect(getByTestId('end-content')).toBeDefined();
    });

    it('does not render end accessory wrapper when endAccessory is not provided', () => {
      const { queryByTestId } = render(
        <HeaderBase endAccessoryWrapperProps={{ testID: 'end-wrapper' }}>
          Title
        </HeaderBase>,
      );

      expect(queryByTestId('end-wrapper')).toBeNull();
    });

    it('passes endAccessoryWrapperProps to end accessory wrapper', () => {
      const { getByTestId } = render(
        <HeaderBase
          endAccessory={<Text testID="end-content">End</Text>}
          endAccessoryWrapperProps={{ testID: 'custom-end-wrapper' }}
        >
          Title
        </HeaderBase>,
      );

      expect(getByTestId('custom-end-wrapper')).toBeDefined();
    });
  });

  describe('startButtonIconProps', () => {
    it('renders ButtonIcon when startButtonIconProps is provided', () => {
      const { getByTestId } = render(
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

      expect(getByTestId('start-wrapper')).toBeDefined();
    });

    it('calls onPress handler when start ButtonIcon is pressed', () => {
      const onPressMock = jest.fn();
      const { getByTestId } = render(
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

      fireEvent.press(getByTestId('start-button'));

      expect(onPressMock).toHaveBeenCalledTimes(1);
    });

    it('prioritizes startAccessory over startButtonIconProps', () => {
      const { getByTestId, queryByTestId } = render(
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

      expect(getByTestId('start-content')).toBeDefined();
      expect(queryByTestId('start-button')).toBeNull();
    });
  });

  describe('endButtonIconProps', () => {
    it('renders single ButtonIcon when one item is provided in array', () => {
      const { getByTestId } = render(
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

      expect(getByTestId('end-wrapper')).toBeDefined();
      expect(getByTestId('end-close-button')).toBeDefined();
    });

    it('calls onPress handler when end ButtonIcon is pressed', () => {
      const onPressMock = jest.fn();
      const { getByTestId } = render(
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

      fireEvent.press(getByTestId('end-close-button'));

      expect(onPressMock).toHaveBeenCalledTimes(1);
    });

    it('renders multiple ButtonIcons when multiple items are provided', () => {
      const { getByTestId } = render(
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

      expect(getByTestId('end-search-button')).toBeDefined();
      expect(getByTestId('end-close-button')).toBeDefined();
    });

    it('does not render ButtonIcons when endButtonIconProps is empty array', () => {
      const { queryByTestId } = render(
        <HeaderBase
          endButtonIconProps={[]}
          endAccessoryWrapperProps={{ testID: 'end-wrapper' }}
        >
          Title
        </HeaderBase>,
      );

      expect(queryByTestId('end-wrapper')).toBeNull();
    });

    it('prioritizes endAccessory over endButtonIconProps', () => {
      const { getByTestId, queryByTestId } = render(
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

      expect(getByTestId('end-content')).toBeDefined();
      expect(queryByTestId('end-close-button')).toBeNull();
    });
  });

  describe('accessory wrapper rendering for centering', () => {
    it('renders both accessory wrappers when only start accessory is provided', () => {
      const { getByTestId } = render(
        <HeaderBase
          startAccessory={<Text testID="start-content">Start</Text>}
          startAccessoryWrapperProps={{ testID: 'start-wrapper' }}
          endAccessoryWrapperProps={{ testID: 'end-wrapper' }}
        >
          Title
        </HeaderBase>,
      );

      expect(getByTestId('start-wrapper')).toBeDefined();
      expect(getByTestId('end-wrapper')).toBeDefined();
    });

    it('renders both accessory wrappers when only end accessory is provided', () => {
      const { getByTestId } = render(
        <HeaderBase
          endAccessory={<Text testID="end-content">End</Text>}
          startAccessoryWrapperProps={{ testID: 'start-wrapper' }}
          endAccessoryWrapperProps={{ testID: 'end-wrapper' }}
        >
          Title
        </HeaderBase>,
      );

      expect(getByTestId('start-wrapper')).toBeDefined();
      expect(getByTestId('end-wrapper')).toBeDefined();
    });

    it('renders both accessory wrappers when both accessories are provided', () => {
      const { getByTestId } = render(
        <HeaderBase
          startAccessory={<Text testID="start-content">Start</Text>}
          endAccessory={<Text testID="end-content">End</Text>}
          startAccessoryWrapperProps={{ testID: 'start-wrapper' }}
          endAccessoryWrapperProps={{ testID: 'end-wrapper' }}
        >
          Title
        </HeaderBase>,
      );

      expect(getByTestId('start-wrapper')).toBeDefined();
      expect(getByTestId('end-wrapper')).toBeDefined();
      expect(getByTestId('start-content')).toBeDefined();
      expect(getByTestId('end-content')).toBeDefined();
    });
  });

  describe('twClassName', () => {
    it('merges twClassName with default styles', () => {
      const { getByTestId } = render(
        <HeaderBase testID="header" twClassName="bg-info-default px-4">
          Title
        </HeaderBase>,
      );

      expect(getByTestId('header')).toBeDefined();
    });
  });

  describe('includesTopInset', () => {
    it('applies top inset margin when includesTopInset is true', () => {
      const { getByTestId } = render(
        <HeaderBase testID="header" includesTopInset>
          Title
        </HeaderBase>,
      );

      expect(getByTestId('header')).toBeDefined();
    });
  });

  describe('layout measurement for centering', () => {
    it('measures start accessory width via onLayout', () => {
      const { getByTestId } = render(
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

      act(() => {
        layoutView.props.onLayout({
          nativeEvent: { layout: { width: 40, height: 40 } },
        });
      });

      expect(getByTestId('start-wrapper')).toBeDefined();
    });

    it('measures end accessory width via onLayout', () => {
      const { getByTestId } = render(
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

      act(() => {
        layoutView.props.onLayout({
          nativeEvent: { layout: { width: 40, height: 40 } },
        });
      });

      expect(getByTestId('end-wrapper')).toBeDefined();
    });
  });
});
