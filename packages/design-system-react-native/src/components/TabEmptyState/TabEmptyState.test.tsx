import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import { Text } from 'react-native';

import { Icon, IconName, IconSize } from '../Icon';

import { TabEmptyState } from './TabEmptyState';

describe('TabEmptyState', () => {
  const mockOnAction = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly with basic props', () => {
    const { getByTestId, getByText } = render(
      <TabEmptyState
        testID="tab-empty-state"
        description="No items found"
        actionButtonText="Add Item"
        onAction={mockOnAction}
      />,
    );

    expect(getByTestId('tab-empty-state')).toBeDefined();
    expect(getByText('No items found')).toBeDefined();
    expect(getByText('Add Item')).toBeDefined();
  });

  it('renders description when provided', () => {
    const { getByText } = render(
      <TabEmptyState description="No items found" />,
    );

    expect(getByText('No items found')).toBeDefined();
  });

  it('renders icon when provided', () => {
    const { getByTestId } = render(
      <TabEmptyState
        icon={
          <Icon name={IconName.Add} size={IconSize.Xl} testID="test-icon" />
        }
      />,
    );

    expect(getByTestId('test-icon')).toBeDefined();
  });

  it('renders action button when both actionButtonText and onAction are provided', () => {
    const { getByText } = render(
      <TabEmptyState actionButtonText="Add Item" onAction={mockOnAction} />,
    );

    expect(getByText('Add Item')).toBeDefined();
  });

  it('does not render action button when only actionButtonText is provided', () => {
    const { queryByText } = render(
      <TabEmptyState actionButtonText="Add Item" />,
    );

    expect(queryByText('Add Item')).toBeNull();
  });

  it('does not render action button when only onAction is provided', () => {
    const { queryByText } = render(<TabEmptyState onAction={mockOnAction} />);

    expect(queryByText('Add Item')).toBeNull();
  });

  it('renders custom children', () => {
    const { getByTestId } = render(
      <TabEmptyState>
        <Text testID="custom-child">Custom child content</Text>
      </TabEmptyState>,
    );

    expect(getByTestId('custom-child')).toBeDefined();
  });

  it('calls onAction when action button is pressed', () => {
    const { getByText } = render(
      <TabEmptyState actionButtonText="Add Item" onAction={mockOnAction} />,
    );

    fireEvent.press(getByText('Add Item'));
    expect(mockOnAction).toHaveBeenCalledTimes(1);
  });

  it('passes testID to root element via ViewProps', () => {
    const { getByTestId } = render(<TabEmptyState testID="my-empty-state" />);

    expect(getByTestId('my-empty-state')).toBeDefined();
  });

  it('passes accessibilityLabel via ViewProps', () => {
    const { getByTestId } = render(
      <TabEmptyState testID="empty-state" accessibilityLabel="Empty state" />,
    );

    const element = getByTestId('empty-state');
    expect(element.props.accessibilityLabel).toBe('Empty state');
  });

  it('passes descriptionProps to description Text component', () => {
    const { getByTestId } = render(
      <TabEmptyState
        description="Test description"
        descriptionProps={{ testID: 'custom-description' }}
      />,
    );

    expect(getByTestId('custom-description')).toBeDefined();
  });

  it('passes actionButtonProps to action Button component', () => {
    const { getByTestId } = render(
      <TabEmptyState
        actionButtonText="Add Item"
        onAction={mockOnAction}
        actionButtonProps={{ testID: 'custom-button' }}
      />,
    );

    expect(getByTestId('custom-button')).toBeDefined();
  });
});
