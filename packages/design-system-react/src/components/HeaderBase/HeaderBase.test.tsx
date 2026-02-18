import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import { IconName } from '../../types';
import { Text } from '../Text';

import { HeaderBase } from './HeaderBase';
import {
  HEADERBASE_TEST_ID,
  HEADERBASE_TITLE_TEST_ID,
} from './HeaderBase.constants';

const START_ACCESSORY_TEST_ID = 'start-accessory-wrapper';
const END_ACCESSORY_TEST_ID = 'end-accessory-wrapper';
const CUSTOM_CONTENT_TEST_ID = 'custom-content';
const START_CONTENT_TEST_ID = 'start-content';
const END_CONTENT_TEST_ID = 'end-content';

describe('HeaderBase', () => {
  describe('rendering', () => {
    it('renders string title as text', () => {
      render(<HeaderBase>Test Title</HeaderBase>);
      expect(screen.getByText('Test Title')).toBeInTheDocument();
    });

    it('renders custom children when ReactNode is passed', () => {
      render(
        <HeaderBase>
          <Text data-testid={CUSTOM_CONTENT_TEST_ID}>Custom Content</Text>
        </HeaderBase>,
      );
      expect(screen.getByTestId(CUSTOM_CONTENT_TEST_ID)).toBeInTheDocument();
    });

    it('applies default testID to container', () => {
      render(<HeaderBase>Title</HeaderBase>);
      expect(screen.getByTestId(HEADERBASE_TEST_ID)).toBeInTheDocument();
    });

    it('applies title testID when string children is passed', () => {
      render(<HeaderBase>Title</HeaderBase>);
      expect(screen.getByTestId(HEADERBASE_TITLE_TEST_ID)).toBeInTheDocument();
    });

    it('accepts custom testID for container', () => {
      render(<HeaderBase testID="custom-header">Title</HeaderBase>);
      expect(screen.getByTestId('custom-header')).toBeInTheDocument();
    });
  });

  describe('startAccessory', () => {
    it('renders custom start accessory content', () => {
      render(
        <HeaderBase
          startAccessory={
            <span data-testid={START_CONTENT_TEST_ID}>Start</span>
          }
          startAccessoryWrapperProps={{
            'data-testid': START_ACCESSORY_TEST_ID,
          }}
        >
          Title
        </HeaderBase>,
      );
      expect(screen.getByTestId(START_ACCESSORY_TEST_ID)).toBeInTheDocument();
      expect(screen.getByTestId(START_CONTENT_TEST_ID)).toBeInTheDocument();
    });

    it('renders start accessory wrapper when no start accessory (for layout)', () => {
      render(
        <HeaderBase
          startAccessoryWrapperProps={{
            'data-testid': START_ACCESSORY_TEST_ID,
          }}
        >
          Title
        </HeaderBase>,
      );
      expect(screen.getByTestId(START_ACCESSORY_TEST_ID)).toBeInTheDocument();
    });

    it('passes startAccessoryWrapperProps to start accessory wrapper', () => {
      render(
        <HeaderBase
          startAccessory={
            <span data-testid={START_CONTENT_TEST_ID}>Start</span>
          }
          startAccessoryWrapperProps={{ 'data-testid': 'custom-start-wrapper' }}
        >
          Title
        </HeaderBase>,
      );
      expect(screen.getByTestId('custom-start-wrapper')).toBeInTheDocument();
    });
  });

  describe('endAccessory', () => {
    it('renders custom end accessory content', () => {
      render(
        <HeaderBase
          endAccessory={<span data-testid={END_CONTENT_TEST_ID}>End</span>}
          endAccessoryWrapperProps={{ 'data-testid': END_ACCESSORY_TEST_ID }}
        >
          Title
        </HeaderBase>,
      );
      expect(screen.getByTestId(END_ACCESSORY_TEST_ID)).toBeInTheDocument();
      expect(screen.getByTestId(END_CONTENT_TEST_ID)).toBeInTheDocument();
    });

    it('renders end accessory wrapper when no end accessory (for layout)', () => {
      render(
        <HeaderBase
          endAccessoryWrapperProps={{ 'data-testid': END_ACCESSORY_TEST_ID }}
        >
          Title
        </HeaderBase>,
      );
      expect(screen.getByTestId(END_ACCESSORY_TEST_ID)).toBeInTheDocument();
    });

    it('passes endAccessoryWrapperProps to end accessory wrapper', () => {
      render(
        <HeaderBase
          endAccessory={<span data-testid={END_CONTENT_TEST_ID}>End</span>}
          endAccessoryWrapperProps={{ 'data-testid': 'custom-end-wrapper' }}
        >
          Title
        </HeaderBase>,
      );
      expect(screen.getByTestId('custom-end-wrapper')).toBeInTheDocument();
    });
  });

  describe('startButtonIconProps', () => {
    it('renders ButtonIcon when startButtonIconProps is provided', () => {
      const onPress = jest.fn();
      render(
        <HeaderBase
          startButtonIconProps={{
            iconName: IconName.ArrowLeft,
            ariaLabel: 'Back',
            onClick: onPress,
          }}
          startAccessoryWrapperProps={{
            'data-testid': START_ACCESSORY_TEST_ID,
          }}
        >
          Title
        </HeaderBase>,
      );
      expect(screen.getByTestId(START_ACCESSORY_TEST_ID)).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Back' })).toBeInTheDocument();
    });

    it('calls onClick when start ButtonIcon is clicked', async () => {
      const user = userEvent.setup();
      const onPress = jest.fn();
      render(
        <HeaderBase
          startButtonIconProps={{
            iconName: IconName.ArrowLeft,
            ariaLabel: 'Back',
            onClick: onPress,
          }}
        >
          Title
        </HeaderBase>,
      );
      await user.click(screen.getByRole('button', { name: 'Back' }));
      expect(onPress).toHaveBeenCalledTimes(1);
    });

    it('prioritizes startAccessory over startButtonIconProps', () => {
      render(
        <HeaderBase
          startAccessory={
            <span data-testid={START_CONTENT_TEST_ID}>Custom Start</span>
          }
          startButtonIconProps={{
            iconName: IconName.ArrowLeft,
            ariaLabel: 'Back',
            onClick: jest.fn(),
          }}
        >
          Title
        </HeaderBase>,
      );
      expect(screen.getByTestId(START_CONTENT_TEST_ID)).toBeInTheDocument();
      expect(screen.queryByRole('button', { name: 'Back' })).toBeNull();
    });
  });

  describe('endButtonIconProps', () => {
    it('renders single ButtonIcon when one item is provided', () => {
      const onPress = jest.fn();
      render(
        <HeaderBase
          endButtonIconProps={[
            {
              iconName: IconName.Close,
              ariaLabel: 'Close',
              onClick: onPress,
            },
          ]}
          endAccessoryWrapperProps={{ 'data-testid': END_ACCESSORY_TEST_ID }}
        >
          Title
        </HeaderBase>,
      );
      expect(screen.getByTestId(END_ACCESSORY_TEST_ID)).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Close' })).toBeInTheDocument();
    });

    it('renders multiple ButtonIcons when multiple items are provided', () => {
      render(
        <HeaderBase
          endButtonIconProps={[
            {
              iconName: IconName.Search,
              ariaLabel: 'Search',
              onClick: jest.fn(),
            },
            {
              iconName: IconName.Close,
              ariaLabel: 'Close',
              onClick: jest.fn(),
            },
          ]}
        >
          Title
        </HeaderBase>,
      );
      expect(
        screen.getByRole('button', { name: 'Search' }),
      ).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Close' })).toBeInTheDocument();
    });

    it('does not render ButtonIcons when endButtonIconProps is empty array', () => {
      render(<HeaderBase endButtonIconProps={[]}>Title</HeaderBase>);
      expect(screen.queryByRole('button')).toBeNull();
    });

    it('prioritizes endAccessory over endButtonIconProps', () => {
      render(
        <HeaderBase
          endAccessory={
            <span data-testid={END_CONTENT_TEST_ID}>Custom End</span>
          }
          endButtonIconProps={[
            {
              iconName: IconName.Close,
              ariaLabel: 'Close',
              onClick: jest.fn(),
            },
          ]}
        >
          Title
        </HeaderBase>,
      );
      expect(screen.getByTestId(END_CONTENT_TEST_ID)).toBeInTheDocument();
      expect(screen.queryByRole('button', { name: 'Close' })).toBeNull();
    });
  });

  describe('accessory wrapper rendering for centering', () => {
    it('renders both accessory wrappers when only start accessory is provided', () => {
      render(
        <HeaderBase
          startAccessory={
            <span data-testid={START_CONTENT_TEST_ID}>Start</span>
          }
          startAccessoryWrapperProps={{
            'data-testid': START_ACCESSORY_TEST_ID,
          }}
          endAccessoryWrapperProps={{ 'data-testid': END_ACCESSORY_TEST_ID }}
        >
          Title
        </HeaderBase>,
      );
      expect(screen.getByTestId(START_ACCESSORY_TEST_ID)).toBeInTheDocument();
      expect(screen.getByTestId(END_ACCESSORY_TEST_ID)).toBeInTheDocument();
    });

    it('renders both accessory wrappers when only end accessory is provided', () => {
      render(
        <HeaderBase
          endAccessory={<span data-testid={END_CONTENT_TEST_ID}>End</span>}
          startAccessoryWrapperProps={{
            'data-testid': START_ACCESSORY_TEST_ID,
          }}
          endAccessoryWrapperProps={{ 'data-testid': END_ACCESSORY_TEST_ID }}
        >
          Title
        </HeaderBase>,
      );
      expect(screen.getByTestId(START_ACCESSORY_TEST_ID)).toBeInTheDocument();
      expect(screen.getByTestId(END_ACCESSORY_TEST_ID)).toBeInTheDocument();
    });

    it('renders both accessory wrappers when both accessories are provided', () => {
      render(
        <HeaderBase
          startAccessory={
            <span data-testid={START_CONTENT_TEST_ID}>Start</span>
          }
          endAccessory={<span data-testid={END_CONTENT_TEST_ID}>End</span>}
          startAccessoryWrapperProps={{
            'data-testid': START_ACCESSORY_TEST_ID,
          }}
          endAccessoryWrapperProps={{ 'data-testid': END_ACCESSORY_TEST_ID }}
        >
          Title
        </HeaderBase>,
      );
      expect(screen.getByTestId(START_ACCESSORY_TEST_ID)).toBeInTheDocument();
      expect(screen.getByTestId(END_ACCESSORY_TEST_ID)).toBeInTheDocument();
      expect(screen.getByTestId(START_CONTENT_TEST_ID)).toBeInTheDocument();
      expect(screen.getByTestId(END_CONTENT_TEST_ID)).toBeInTheDocument();
    });
  });
});
