import {
  BannerBaseActionButtonLayout,
  BoxAlignItems,
} from '@metamask/design-system-shared';
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { fireEvent, render, renderHook } from '@testing-library/react-native';
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

  it('renders action button at the end when actionButtonLayout is End', () => {
    const onAction = jest.fn();
    const { getByText, getByTestId, UNSAFE_getByProps } = render(
      <BannerBase
        title="End layout"
        actionButtonLabel="Action"
        actionButtonOnPress={onAction}
        actionButtonLayout={BannerBaseActionButtonLayout.End}
        onClose={() => undefined}
        closeButtonProps={{ testID: closeButtonTestId }}
      />,
    );

    expect(getByText('Action')).toBeDefined();
    expect(UNSAFE_getByProps({ twClassName: 'self-center' })).toBeDefined();
    expect(getByTestId(closeButtonTestId)).toBeDefined();
    fireEvent.press(getByText('Action'));
    expect(onAction).toHaveBeenCalledTimes(1);
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

  it('does not render close button when only closeButtonProps are provided', () => {
    const { queryByTestId } = render(
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

  it('center-aligns content when there is a single content block', () => {
    const tw = renderHook(() => useTailwind()).result.current;

    const { getByTestId, getByText } = render(
      <BannerBase
        onClose={() => undefined}
        testID="banner-base"
        title="Added to watchlist"
      />,
    );

    const titleParent = getByText('Added to watchlist').parent;
    if (!titleParent) {
      throw new Error('Expected title content parent');
    }
    fireEvent(titleParent, 'layout', {
      nativeEvent: { layout: { x: 0, y: 0, width: 200, height: 24 } },
    });

    expect(getByTestId('banner-base')).toHaveStyle(
      tw.style(BoxAlignItems.Center),
    );
  });

  it('center-aligns content when description is a single line', () => {
    const tw = renderHook(() => useTailwind()).result.current;

    const { getByTestId, getByText } = render(
      <BannerBase
        description="15.02 USDC is available in your account"
        onClose={() => undefined}
        testID="banner-base"
        title="Deposit completed"
      />,
    );

    // Title + gap + one-line description ≈ 24 + 2 + 22
    const titleParent = getByText('Deposit completed').parent;
    if (!titleParent) {
      throw new Error('Expected title content parent');
    }
    fireEvent(titleParent, 'layout', {
      nativeEvent: { layout: { x: 0, y: 0, width: 200, height: 48 } },
    });

    expect(getByTestId('banner-base')).toHaveStyle(
      tw.style(BoxAlignItems.Center),
    );
  });

  it('center-aligns a description-only compact stack', () => {
    const tw = renderHook(() => useTailwind()).result.current;

    const { getByTestId, getByText } = render(
      <BannerBase
        description="15.02 USDC is available in your account"
        onClose={() => undefined}
        testID="banner-base"
      />,
    );

    const descriptionParent = getByText(
      '15.02 USDC is available in your account',
    ).parent;
    if (!descriptionParent) {
      throw new Error('Expected description content parent');
    }
    fireEvent(descriptionParent, 'layout', {
      nativeEvent: { layout: { x: 0, y: 0, width: 200, height: 22 } },
    });

    expect(getByTestId('banner-base')).toHaveStyle(
      tw.style(BoxAlignItems.Center),
    );
  });

  it('center-aligns a wrapping title-only stack', () => {
    const tw = renderHook(() => useTailwind()).result.current;

    const { getByTestId, getByText } = render(
      <BannerBase
        onClose={() => undefined}
        testID="banner-base"
        title="Your deposit of 20.50 USDC into Account 1 is been confirmed."
      />,
    );

    const titleParent = getByText(
      'Your deposit of 20.50 USDC into Account 1 is been confirmed.',
    ).parent;
    if (!titleParent) {
      throw new Error('Expected title content parent');
    }
    fireEvent(titleParent, 'layout', {
      nativeEvent: { layout: { x: 0, y: 0, width: 200, height: 48 } },
    });

    expect(getByTestId('banner-base')).toHaveStyle(
      tw.style(BoxAlignItems.Center),
    );
  });

  it('center-aligns a children-only stack', () => {
    const tw = renderHook(() => useTailwind()).result.current;

    const { getByTestId, getByText } = render(
      <BannerBase onClose={() => undefined} testID="banner-base">
        This is a success banner.
      </BannerBase>,
    );

    const childrenParent = getByText('This is a success banner.').parent;
    if (!childrenParent) {
      throw new Error('Expected children content parent');
    }
    fireEvent(childrenParent, 'layout', {
      nativeEvent: { layout: { x: 0, y: 0, width: 200, height: 48 } },
    });

    expect(getByTestId('banner-base')).toHaveStyle(
      tw.style(BoxAlignItems.Center),
    );
  });

  it('center-aligns content when children is a single line', () => {
    const tw = renderHook(() => useTailwind()).result.current;

    const { getByTestId, getByText } = render(
      <BannerBase
        onClose={() => undefined}
        testID="banner-base"
        title="Success"
      >
        This is a success banner.
      </BannerBase>,
    );

    // Title + one-line children ≈ 24 + 24
    const titleParent = getByText('Success').parent;
    if (!titleParent) {
      throw new Error('Expected title content parent');
    }
    fireEvent(titleParent, 'layout', {
      nativeEvent: { layout: { x: 0, y: 0, width: 200, height: 48 } },
    });

    expect(getByTestId('banner-base')).toHaveStyle(
      tw.style(BoxAlignItems.Center),
    );
  });

  it('center-aligns content when description and children are a single line', () => {
    const tw = renderHook(() => useTailwind()).result.current;

    const { getByTestId, getByText } = render(
      <BannerBase
        description="15.02 USDC is available in your account"
        onClose={() => undefined}
        testID="banner-base"
      >
        This is a success banner.
      </BannerBase>,
    );

    // Description + one-line children ≈ 22 + 24
    const descriptionParent = getByText(
      '15.02 USDC is available in your account',
    ).parent;
    if (!descriptionParent) {
      throw new Error('Expected description content parent');
    }
    fireEvent(descriptionParent, 'layout', {
      nativeEvent: { layout: { x: 0, y: 0, width: 200, height: 46 } },
    });

    expect(getByTestId('banner-base')).toHaveStyle(
      tw.style(BoxAlignItems.Center),
    );
  });

  it('top-aligns content when children wraps to multiple lines', () => {
    const tw = renderHook(() => useTailwind()).result.current;

    const { getByTestId, getByText } = render(
      <BannerBase
        onClose={() => undefined}
        testID="banner-base"
        title="Success"
      >
        This is a success banner with extra copy that wraps across multiple
        lines.
      </BannerBase>,
    );

    const titleParent = getByText('Success').parent;
    if (!titleParent) {
      throw new Error('Expected title content parent');
    }
    fireEvent(titleParent, 'layout', {
      nativeEvent: { layout: { x: 0, y: 0, width: 200, height: 72 } },
    });

    expect(getByTestId('banner-base')).toHaveStyle(
      tw.style(BoxAlignItems.Start),
    );
  });

  it('top-aligns content when children is a custom React node', () => {
    const tw = renderHook(() => useTailwind()).result.current;

    const { getByTestId, getByText } = render(
      <BannerBase
        onClose={() => undefined}
        testID="banner-base"
        title="Success"
      >
        <Text>This is a success banner.</Text>
      </BannerBase>,
    );

    const titleParent = getByText('Success').parent;
    if (!titleParent) {
      throw new Error('Expected title content parent');
    }
    fireEvent(titleParent, 'layout', {
      nativeEvent: { layout: { x: 0, y: 0, width: 200, height: 48 } },
    });

    expect(getByTestId('banner-base')).toHaveStyle(
      tw.style(BoxAlignItems.Start),
    );
  });

  it('keeps top alignment for custom node children when alignItems is passed through', () => {
    const tw = renderHook(() => useTailwind()).result.current;

    const { getByTestId, getByText } = render(
      <BannerBase
        alignItems={BoxAlignItems.Center}
        onClose={() => undefined}
        testID="banner-base"
        title="Children as rich content"
      >
        <Text>
          Children can include richer content and can be any React node.
        </Text>
      </BannerBase>,
    );

    const titleParent = getByText('Children as rich content').parent;
    if (!titleParent) {
      throw new Error('Expected title content parent');
    }
    fireEvent(titleParent, 'layout', {
      nativeEvent: { layout: { x: 0, y: 0, width: 200, height: 48 } },
    });

    expect(getByTestId('banner-base')).toHaveStyle(
      tw.style(BoxAlignItems.Start),
    );
  });

  it('top-aligns content when description wraps to multiple lines', () => {
    const tw = renderHook(() => useTailwind()).result.current;

    const { getByTestId, getByText } = render(
      <BannerBase
        description="Enable notifications to stay informed on campaigns and never miss important updates about your account."
        onClose={() => undefined}
        testID="banner-base"
        title="Don't miss out"
      />,
    );

    // Title + gap + two-line description exceeds the compact stack budget
    const titleParent = getByText("Don't miss out").parent;
    if (!titleParent) {
      throw new Error('Expected title content parent');
    }
    fireEvent(titleParent, 'layout', {
      nativeEvent: { layout: { x: 0, y: 0, width: 200, height: 70 } },
    });

    expect(getByTestId('banner-base')).toHaveStyle(
      tw.style(BoxAlignItems.Start),
    );
  });

  it('treats a zero content height as not compact for title and description', () => {
    const tw = renderHook(() => useTailwind()).result.current;

    const { getByTestId, getByText } = render(
      <BannerBase
        description="Supporting details"
        onClose={() => undefined}
        testID="banner-base"
        title="Added to watchlist"
      />,
    );

    const titleParent = getByText('Added to watchlist').parent;
    if (!titleParent) {
      throw new Error('Expected title content parent');
    }
    fireEvent(titleParent, 'layout', {
      nativeEvent: { layout: { x: 0, y: 0, width: 200, height: 0 } },
    });

    expect(getByTestId('banner-base')).toHaveStyle(
      tw.style(BoxAlignItems.Start),
    );
  });

  it('top-aligns by default before content layout is measured', () => {
    const tw = renderHook(() => useTailwind()).result.current;

    const { getByTestId } = render(
      <BannerBase
        description="Severity controls the default start accessory icon."
        onClose={() => undefined}
        testID="banner-base"
        title="Success"
      />,
    );

    expect(getByTestId('banner-base')).toHaveStyle(
      tw.style(BoxAlignItems.Start),
    );
  });

  it('top-aligns content when an action button is below', () => {
    const tw = renderHook(() => useTailwind()).result.current;

    const { getByTestId, getByText } = render(
      <BannerBase
        actionButtonLabel="Action"
        actionButtonOnPress={() => undefined}
        onClose={() => undefined}
        testID="banner-base"
        title="Action banner"
      />,
    );

    const titleParent = getByText('Action banner').parent;
    if (!titleParent) {
      throw new Error('Expected title content parent');
    }
    fireEvent(titleParent, 'layout', {
      nativeEvent: { layout: { x: 0, y: 0, width: 200, height: 24 } },
    });

    expect(getByTestId('banner-base')).toHaveStyle(
      tw.style(BoxAlignItems.Start),
    );
  });
});
