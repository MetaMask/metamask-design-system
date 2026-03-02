import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import { Pressable } from 'react-native';
import { create } from 'react-test-renderer';

import { Icon, IconName, IconSize } from '../Icon';
import { FontWeight, Text, TextColor, TextVariant } from '../Text';

import { ActionListItem } from './ActionListItem';

const SAMPLE_ACTIONLISTITEM_PROPS = {
  label: 'Settings',
  description: 'Manage your account preferences',
};

describe('ActionListItem', () => {
  const mockOnPress = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Rendering', () => {
    it('renders with string label', () => {
      const { getByText } = render(
        <ActionListItem label="Test Label" onPress={mockOnPress} />,
      );
      expect(getByText('Test Label')).toBeDefined();
    });

    it('renders with string description', () => {
      const { getByText } = render(
        <ActionListItem
          label="Test Label"
          description="Test Description"
          onPress={mockOnPress}
        />,
      );
      expect(getByText('Test Description')).toBeDefined();
    });

    it('renders with React node label', () => {
      const { getByText } = render(
        <ActionListItem
          label={<Text variant={TextVariant.BodyMd}>Custom Label</Text>}
          onPress={mockOnPress}
        />,
      );
      expect(getByText('Custom Label')).toBeDefined();
    });

    it('renders with React node description', () => {
      const { getByText } = render(
        <ActionListItem
          label="Test Label"
          description={
            <Text variant={TextVariant.BodySm}>Custom Description</Text>
          }
          onPress={mockOnPress}
        />,
      );
      expect(getByText('Custom Description')).toBeDefined();
    });

    it('renders without description when not provided', () => {
      const { getByText, queryByText } = render(
        <ActionListItem label="Test Label" onPress={mockOnPress} />,
      );
      expect(getByText('Test Label')).toBeDefined();
      expect(queryByText('description')).toBeNull();
    });

    it('renders icon when iconName is provided', () => {
      const { getByTestId } = render(
        <ActionListItem
          label="Test Label"
          iconName={IconName.Setting}
          iconProps={{ testID: 'action-icon' }}
          onPress={mockOnPress}
        />,
      );
      expect(getByTestId('action-icon')).toBeDefined();
    });

    it('renders start accessory', () => {
      const { getByTestId } = render(
        <ActionListItem
          label="Test Label"
          startAccessory={
            <Icon name={IconName.Security} testID="start-accessory" />
          }
          onPress={mockOnPress}
        />,
      );
      expect(getByTestId('start-accessory')).toBeDefined();
    });

    it('renders end accessory', () => {
      const { getByTestId } = render(
        <ActionListItem
          label="Test Label"
          endAccessory={
            <Icon name={IconName.ArrowRight} testID="end-accessory" />
          }
          onPress={mockOnPress}
        />,
      );
      expect(getByTestId('end-accessory')).toBeDefined();
    });

    it('prioritizes startAccessory over iconName', () => {
      const { getByTestId, queryByTestId } = render(
        <ActionListItem
          label="Test Label"
          iconName={IconName.Setting}
          iconProps={{ testID: 'icon-from-name' }}
          startAccessory={
            <Icon name={IconName.Security} testID="start-accessory" />
          }
          onPress={mockOnPress}
        />,
      );

      expect(getByTestId('start-accessory')).toBeDefined();
      expect(queryByTestId('icon-from-name')).toBeNull();
    });

    it('applies labelTextProps to string label', () => {
      const { getByText } = render(
        <ActionListItem
          label="Test Label"
          labelTextProps={{
            variant: TextVariant.HeadingSm,
            color: TextColor.PrimaryDefault,
            fontWeight: FontWeight.Bold,
          }}
          onPress={mockOnPress}
        />,
      );
      expect(getByText('Test Label')).toBeDefined();
    });

    it('does not apply labelTextProps to ReactNode label', () => {
      const { getByTestId } = render(
        <ActionListItem
          label={
            <Text variant={TextVariant.BodySm} testID="custom-label">
              Custom Label
            </Text>
          }
          labelTextProps={{
            variant: TextVariant.HeadingSm,
            color: TextColor.PrimaryDefault,
          }}
          onPress={mockOnPress}
        />,
      );
      expect(getByTestId('custom-label')).toBeDefined();
    });

    it('applies descriptionTextProps to string description', () => {
      const { getByText } = render(
        <ActionListItem
          label="Test Label"
          description="Test Description"
          descriptionTextProps={{
            variant: TextVariant.BodyXs,
            color: TextColor.TextMuted,
            fontWeight: FontWeight.Regular,
          }}
          onPress={mockOnPress}
        />,
      );
      expect(getByText('Test Description')).toBeDefined();
    });

    it('applies iconProps to icon when iconName is provided', () => {
      const { getByTestId } = render(
        <ActionListItem
          label="Test Label"
          iconName={IconName.Setting}
          iconProps={{ size: IconSize.Lg, testID: 'custom-icon' }}
          onPress={mockOnPress}
        />,
      );
      expect(getByTestId('custom-icon')).toBeDefined();
    });
  });

  describe('Interactions', () => {
    it('fires onPress when pressed', () => {
      const { getByTestId } = render(
        <ActionListItem
          {...SAMPLE_ACTIONLISTITEM_PROPS}
          onPress={mockOnPress}
          testID="action-item"
        />,
      );

      fireEvent.press(getByTestId('action-item'));
      expect(mockOnPress).toHaveBeenCalledTimes(1);
    });

    it('does not fire onPress when disabled', () => {
      const { getByTestId } = render(
        <ActionListItem
          {...SAMPLE_ACTIONLISTITEM_PROPS}
          onPress={mockOnPress}
          isDisabled
          testID="action-item"
        />,
      );

      fireEvent.press(getByTestId('action-item'));
      expect(mockOnPress).not.toHaveBeenCalled();
    });
  });

  describe('Props', () => {
    it('passes testID to root element via ViewProps', () => {
      const { getByTestId } = render(
        <ActionListItem
          label="Test Label"
          onPress={mockOnPress}
          testID="root-item"
        />,
      );
      expect(getByTestId('root-item')).toBeDefined();
    });

    it('passes accessibilityLabel via ViewProps', () => {
      const { getByTestId } = render(
        <ActionListItem
          label="Test Label"
          onPress={mockOnPress}
          testID="action-item"
          accessibilityLabel="Custom accessibility label"
        />,
      );
      const component = getByTestId('action-item');
      expect(component.props.accessibilityLabel).toBe(
        'Custom accessibility label',
      );
    });

    it('accepts pressableProps', () => {
      const mockOnPressIn = jest.fn();
      const { getByTestId } = render(
        <ActionListItem
          label="Test Label"
          onPress={mockOnPress}
          testID="action-item"
          pressableProps={{ onPressIn: mockOnPressIn }}
        />,
      );

      fireEvent(getByTestId('action-item'), 'pressIn');
      expect(mockOnPressIn).toHaveBeenCalledTimes(1);
    });

    it('merges custom style prop', () => {
      const { getByTestId } = render(
        <ActionListItem
          label="Test Label"
          onPress={mockOnPress}
          testID="action-item"
          style={{ marginTop: 8 }}
        />,
      );
      expect(getByTestId('action-item')).toBeDefined();
    });

    it('applies pressed background when not disabled', () => {
      const tree = create(
        <ActionListItem label="Test Label" onPress={mockOnPress} />,
      );
      const pressable = tree.root.findByType(Pressable);
      const styleFn = pressable.props.style as (p: {
        pressed: boolean;
      }) => unknown;

      expect(styleFn({ pressed: true })).toBeDefined();
    });
  });

  describe('Edge Cases', () => {
    it('handles empty string label', () => {
      const { getByTestId } = render(
        <ActionListItem label="" onPress={mockOnPress} testID="action-item" />,
      );
      expect(getByTestId('action-item')).toBeDefined();
    });

    it('handles empty string description', () => {
      const { getByTestId } = render(
        <ActionListItem
          label="Test Label"
          description=""
          onPress={mockOnPress}
          testID="action-item"
        />,
      );
      expect(getByTestId('action-item')).toBeDefined();
    });

    it('handles all props together', () => {
      const { getByTestId, getByText } = render(
        <ActionListItem
          label="Complex Label"
          description="Complex Description"
          startAccessory={
            <Icon name={IconName.Security} testID="start-accessory" />
          }
          endAccessory={
            <Icon name={IconName.ArrowRight} testID="end-accessory" />
          }
          onPress={mockOnPress}
          testID="action-item"
        />,
      );

      expect(getByTestId('action-item')).toBeDefined();
      expect(getByTestId('start-accessory')).toBeDefined();
      expect(getByTestId('end-accessory')).toBeDefined();
      expect(getByText('Complex Label')).toBeDefined();
      expect(getByText('Complex Description')).toBeDefined();
    });
  });
});
