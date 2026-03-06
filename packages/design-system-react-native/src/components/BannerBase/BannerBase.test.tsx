import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';

import { Text } from '../Text';

import { BannerBase } from './BannerBase';

describe('BannerBase', () => {
  const closeButtonTestId = 'banner-base-close-button';

  it('renders title and description strings', () => {
    const { getByText } = render(
      <BannerBase title="Sample title" description="Sample description" />,
    );
    expect(getByText('Sample title')).toBeDefined();
    expect(getByText('Sample description')).toBeDefined();
  });

  it('wraps string children with Text', () => {
    const { getByText } = render(<BannerBase>Body copy</BannerBase>);
    expect(getByText('Body copy')).toBeDefined();
  });

  it('renders numeric title, description, and children', () => {
    const { getByText } = render(
      <BannerBase title={123} description={456}>
        {789}
      </BannerBase>,
    );

    expect(getByText('123')).toBeDefined();
    expect(getByText('456')).toBeDefined();
    expect(getByText('789')).toBeDefined();
  });

  it('renders description when title is not provided', () => {
    const { getByText } = render(<BannerBase description="Description only" />);

    expect(getByText('Description only')).toBeDefined();
  });

  it('renders custom React nodes for title, description, and children', () => {
    const { getByTestId } = render(
      <BannerBase
        title={<Text testID="custom-title">Custom title</Text>}
        description={
          <Text testID="custom-description">Custom description</Text>
        }
        twClassName="mt-1"
      >
        <Text testID="custom-children">Custom children</Text>
      </BannerBase>,
    );

    expect(getByTestId('custom-title')).toBeDefined();
    expect(getByTestId('custom-description')).toBeDefined();
    expect(getByTestId('custom-children')).toBeDefined();
  });

  it('renders action button and triggers actionButtonOnPress', () => {
    const onAction = jest.fn();
    const { getByText } = render(
      <BannerBase actionButtonLabel="Action" actionButtonOnPress={onAction} />,
    );

    fireEvent.press(getByText('Action'));
    expect(onAction).toHaveBeenCalledTimes(1);
  });

  it('does not render action button when actionButtonOnPress is not provided', () => {
    const { queryByText } = render(<BannerBase actionButtonLabel="Action" />);
    expect(queryByText('Action')).toBeNull();
  });

  it('renders close button and triggers onClose', () => {
    const onClose = jest.fn();
    const { getByTestId } = render(
      <BannerBase
        onClose={onClose}
        closeButtonProps={{ testID: closeButtonTestId }}
      />,
    );

    fireEvent.press(getByTestId(closeButtonTestId));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('applies default accessibility label to the close button', () => {
    const { getByTestId } = render(
      <BannerBase
        onClose={() => undefined}
        closeButtonProps={{ testID: closeButtonTestId }}
      />,
    );
    expect(getByTestId(closeButtonTestId).props.accessibilityLabel).toBe(
      'Close banner',
    );
  });

  it('renders close button and triggers closeButtonProps.onPress when onClose is not provided', () => {
    const onCloseButtonPress = jest.fn();
    const { getByTestId } = render(
      <BannerBase
        closeButtonProps={{
          onPress: onCloseButtonPress,
          accessibilityLabel: 'Dismiss banner',
          testID: closeButtonTestId,
          twClassName: 'p-2',
        }}
      />,
    );

    expect(getByTestId(closeButtonTestId).props.accessibilityLabel).toBe(
      'Dismiss banner',
    );
    fireEvent.press(getByTestId(closeButtonTestId));
    expect(onCloseButtonPress).toHaveBeenCalledTimes(1);
  });
});
