import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';

import { Text } from '../Text';

import { BannerBase } from './BannerBase';

describe('BannerBase', () => {
  const closeButtonTestId = 'banner-base-close-button';

  it('renders title and description strings', async () => {
    const { getByText } = await render(
      <BannerBase title="Sample title" description="Sample description" />,
    );
    expect(getByText('Sample title')).toBeDefined();
    expect(getByText('Sample description')).toBeDefined();
  });

  it('wraps string children with Text', async () => {
    const { getByText } = await render(<BannerBase>Body copy</BannerBase>);
    expect(getByText('Body copy')).toBeDefined();
  });

  it('renders numeric title, description, and children', async () => {
    const { getByText } = await render(
      <BannerBase title={123} description={456}>
        {789}
      </BannerBase>,
    );

    expect(getByText('123')).toBeDefined();
    expect(getByText('456')).toBeDefined();
    expect(getByText('789')).toBeDefined();
  });

  it('renders description when title is not provided', async () => {
    const { getByText } = await render(
      <BannerBase description="Description only" />,
    );

    expect(getByText('Description only')).toBeDefined();
  });

  it('renders custom React nodes for title, description, and children', async () => {
    const { getByTestId } = await render(
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

  it('renders action button and triggers actionButtonOnPress', async () => {
    const onAction = jest.fn();
    const { getByText } = await render(
      <BannerBase actionButtonLabel="Action" actionButtonOnPress={onAction} />,
    );

    await fireEvent.press(getByText('Action'));
    expect(onAction).toHaveBeenCalledTimes(1);
  });

  it('does not render action button when actionButtonOnPress is not provided', async () => {
    const { queryByText } = await render(
      <BannerBase actionButtonLabel="Action" />,
    );
    expect(queryByText('Action')).toBeNull();
  });

  it('renders close button and triggers onClose', async () => {
    const onClose = jest.fn();
    const { getByTestId } = await render(
      <BannerBase
        onClose={onClose}
        closeButtonProps={{ testID: closeButtonTestId }}
      />,
    );

    await fireEvent.press(getByTestId(closeButtonTestId));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('applies default accessibility label to the close button', async () => {
    const { getByTestId } = await render(
      <BannerBase
        onClose={() => undefined}
        closeButtonProps={{ testID: closeButtonTestId }}
      />,
    );
    expect(getByTestId(closeButtonTestId).props.accessibilityLabel).toBe(
      'Close banner',
    );
  });

  it('does not render close button when only closeButtonProps are provided', async () => {
    const { queryByTestId } = await render(
      <BannerBase
        closeButtonProps={{
          accessibilityLabel: 'Dismiss banner',
          testID: closeButtonTestId,
          twClassName: 'p-2',
        }}
      />,
    );

    expect(queryByTestId(closeButtonTestId)).toBeNull();
  });
});
