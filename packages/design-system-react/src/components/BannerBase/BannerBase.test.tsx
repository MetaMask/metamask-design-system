import {
  BannerBaseActionButtonLayout,
  BoxAlignItems,
} from '@metamask/design-system-shared';
import { act, fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import type { ReactNode } from 'react';

import { BannerBase } from './BannerBase';

describe('BannerBase', () => {
  const closeButtonTestId = 'banner-base-close-button';

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('renders title and description strings', () => {
    render(
      <BannerBase title="Sample title" description="Sample description" />,
    );

    expect(screen.getByText('Sample title')).toBeInTheDocument();
    expect(screen.getByText('Sample description')).toBeInTheDocument();
  });

  it('wraps string children with Text', () => {
    render(<BannerBase>Body copy</BannerBase>);
    expect(screen.getByText('Body copy')).toBeInTheDocument();
  });

  it('renders numeric title, description, and children', () => {
    const numericTitle: ReactNode = 123;
    const numericDescription: ReactNode = 456;
    const numericChildren: ReactNode = 789;
    const numericContentProps = {
      title: numericTitle,
      description: numericDescription,
      children: numericChildren,
    } as unknown as React.ComponentProps<typeof BannerBase>;

    render(<BannerBase {...numericContentProps} />);

    expect(screen.getByText('123')).toBeInTheDocument();
    expect(screen.getByText('456')).toBeInTheDocument();
    expect(screen.getByText('789')).toBeInTheDocument();
  });

  it('renders description when title is not provided', () => {
    render(<BannerBase description="Description only" />);

    expect(screen.getByText('Description only')).toBeInTheDocument();
  });

  it('renders custom React nodes for title, description, and children', () => {
    const customTitle: ReactNode = (
      <span data-testid="custom-title">Custom title</span>
    );
    const customDescription: ReactNode = (
      <span data-testid="custom-description">Custom description</span>
    );
    const customChildren: ReactNode = (
      <span data-testid="custom-children">Custom children</span>
    );
    const customNodeProps = {
      title: customTitle,
      description: customDescription,
      children: customChildren,
    } as unknown as React.ComponentProps<typeof BannerBase>;

    render(<BannerBase {...customNodeProps} />);

    expect(screen.getByTestId('custom-title')).toBeInTheDocument();
    expect(screen.getByTestId('custom-description')).toBeInTheDocument();
    expect(screen.getByTestId('custom-children')).toBeInTheDocument();
  });

  it('renders action button and triggers actionButtonOnClick', () => {
    const onAction = jest.fn();
    render(
      <BannerBase actionButtonLabel="Action" actionButtonOnClick={onAction} />,
    );

    fireEvent.click(screen.getByRole('button', { name: 'Action' }));
    expect(onAction).toHaveBeenCalledTimes(1);
  });

  it('does not render action button when actionButtonOnClick is not provided', () => {
    render(<BannerBase actionButtonLabel="Action" />);
    expect(
      screen.queryByRole('button', { name: 'Action' }),
    ).not.toBeInTheDocument();
  });

  it('renders action button at the end when actionButtonLayout is End', () => {
    const onAction = jest.fn();
    render(
      <BannerBase
        title="End layout"
        actionButtonLabel="Action"
        actionButtonOnClick={onAction}
        actionButtonLayout={BannerBaseActionButtonLayout.End}
        onClose={() => undefined}
      />,
    );

    const actionButton = screen.getByRole('button', { name: 'Action' });
    const closeButton = screen.getByRole('button', { name: 'Close banner' });
    expect(actionButton.parentElement?.className).toContain('self-center');
    expect(actionButton.compareDocumentPosition(closeButton)).toBe(
      Node.DOCUMENT_POSITION_FOLLOWING,
    );

    fireEvent.click(actionButton);
    expect(onAction).toHaveBeenCalledTimes(1);
  });

  it('renders close button and triggers onClose', () => {
    const onClose = jest.fn();
    render(<BannerBase onClose={onClose} />);

    fireEvent.click(screen.getByRole('button', { name: 'Close banner' }));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('does not render close button when only closeButtonProps are provided', () => {
    render(
      <BannerBase closeButtonProps={{ 'data-testid': closeButtonTestId }} />,
    );

    expect(screen.queryByTestId(closeButtonTestId)).not.toBeInTheDocument();
  });

  it('merges structural and custom close button className values', () => {
    render(
      <BannerBase
        actionButtonLabel="Action"
        actionButtonOnClick={() => undefined}
        onClose={() => undefined}
        title="Title"
        closeButtonProps={{
          className: 'rotate-45',
          'data-testid': closeButtonTestId,
        }}
      />,
    );

    const closeButton = screen.getByTestId(closeButtonTestId);
    expect(closeButton.className).toContain('-mt-1');
    expect(closeButton.className).toContain('rotate-45');
  });

  it('center-aligns content and skips close button offset for a single content block', () => {
    jest.spyOn(HTMLElement.prototype, 'getBoundingClientRect').mockReturnValue({
      height: 24,
      width: 200,
      top: 0,
      left: 0,
      bottom: 24,
      right: 200,
      x: 0,
      y: 0,
      toJSON: () => ({}),
    } as DOMRect);

    render(
      <BannerBase
        data-testid="banner-base"
        onClose={() => undefined}
        title="Added to watchlist"
        closeButtonProps={{ 'data-testid': closeButtonTestId }}
      />,
    );

    expect(screen.getByTestId('banner-base').className).toContain(
      'items-center',
    );
    expect(screen.getByTestId(closeButtonTestId).className).not.toContain(
      '-mt-1',
    );
  });

  it('center-aligns content when description is a single line', () => {
    jest.spyOn(HTMLElement.prototype, 'getBoundingClientRect').mockReturnValue({
      height: 48,
      width: 200,
      top: 0,
      left: 0,
      bottom: 48,
      right: 200,
      x: 0,
      y: 0,
      toJSON: () => ({}),
    } as DOMRect);

    render(
      <BannerBase
        data-testid="banner-base"
        description="15.02 USDC is available in your account"
        onClose={() => undefined}
        title="Deposit completed"
      />,
    );

    expect(screen.getByTestId('banner-base').className).toContain(
      'items-center',
    );
  });

  it('center-aligns a description-only compact stack', () => {
    jest.spyOn(HTMLElement.prototype, 'getBoundingClientRect').mockReturnValue({
      height: 22,
      width: 200,
      top: 0,
      left: 0,
      bottom: 22,
      right: 200,
      x: 0,
      y: 0,
      toJSON: () => ({}),
    } as DOMRect);

    render(
      <BannerBase
        data-testid="banner-base"
        description="15.02 USDC is available in your account"
        onClose={() => undefined}
      />,
    );

    expect(screen.getByTestId('banner-base').className).toContain(
      'items-center',
    );
  });

  it('center-aligns a wrapping title-only stack', () => {
    jest.spyOn(HTMLElement.prototype, 'getBoundingClientRect').mockReturnValue({
      height: 48,
      width: 200,
      top: 0,
      left: 0,
      bottom: 48,
      right: 200,
      x: 0,
      y: 0,
      toJSON: () => ({}),
    } as DOMRect);

    render(
      <BannerBase
        data-testid="banner-base"
        onClose={() => undefined}
        title="Your deposit of 20.50 USDC into Account 1 is been confirmed."
      />,
    );

    expect(screen.getByTestId('banner-base').className).toContain(
      'items-center',
    );
  });

  it('center-aligns a children-only stack', () => {
    jest.spyOn(HTMLElement.prototype, 'getBoundingClientRect').mockReturnValue({
      height: 48,
      width: 200,
      top: 0,
      left: 0,
      bottom: 48,
      right: 200,
      x: 0,
      y: 0,
      toJSON: () => ({}),
    } as DOMRect);

    render(
      <BannerBase data-testid="banner-base" onClose={() => undefined}>
        This is a success banner.
      </BannerBase>,
    );

    expect(screen.getByTestId('banner-base')).toHaveClass('items-center');
  });

  it('center-aligns content when children is a single line', () => {
    jest.spyOn(HTMLElement.prototype, 'getBoundingClientRect').mockReturnValue({
      height: 48,
      width: 200,
      top: 0,
      left: 0,
      bottom: 48,
      right: 200,
      x: 0,
      y: 0,
      toJSON: () => ({}),
    } as DOMRect);

    render(
      <BannerBase
        data-testid="banner-base"
        onClose={() => undefined}
        title="Success"
      >
        This is a success banner.
      </BannerBase>,
    );

    expect(screen.getByTestId('banner-base')).toHaveClass('items-center');
  });

  it('center-aligns content when description and children are a single line', () => {
    jest.spyOn(HTMLElement.prototype, 'getBoundingClientRect').mockReturnValue({
      height: 46,
      width: 200,
      top: 0,
      left: 0,
      bottom: 46,
      right: 200,
      x: 0,
      y: 0,
      toJSON: () => ({}),
    } as DOMRect);

    render(
      <BannerBase
        data-testid="banner-base"
        description="15.02 USDC is available in your account"
        onClose={() => undefined}
      >
        This is a success banner.
      </BannerBase>,
    );

    expect(screen.getByTestId('banner-base')).toHaveClass('items-center');
  });

  it('top-aligns content when children wraps to multiple lines', () => {
    jest.spyOn(HTMLElement.prototype, 'getBoundingClientRect').mockReturnValue({
      height: 72,
      width: 200,
      top: 0,
      left: 0,
      bottom: 72,
      right: 200,
      x: 0,
      y: 0,
      toJSON: () => ({}),
    } as DOMRect);

    render(
      <BannerBase
        data-testid="banner-base"
        onClose={() => undefined}
        title="Success"
      >
        This is a success banner with extra copy that wraps across multiple
        lines.
      </BannerBase>,
    );

    expect(screen.getByTestId('banner-base')).toHaveClass('items-start');
  });

  it('top-aligns content when children is a custom React node', () => {
    const customChildren: ReactNode = <span>This is a success banner.</span>;
    const customChildrenProps = {
      children: customChildren,
      'data-testid': 'banner-base',
      onClose: () => undefined,
      title: 'Success',
    } as unknown as React.ComponentProps<typeof BannerBase>;

    render(<BannerBase {...customChildrenProps} />);

    expect(screen.getByTestId('banner-base')).toHaveClass('items-start');
  });

  it('keeps top alignment for custom node children when alignItems is passed through', () => {
    const customChildren: ReactNode = (
      <span>
        Children can include richer content and can be any React node.
      </span>
    );
    const customChildrenProps = {
      alignItems: BoxAlignItems.Center,
      children: customChildren,
      'data-testid': 'banner-base',
      onClose: () => undefined,
      title: 'Children as rich content',
    } as unknown as React.ComponentProps<typeof BannerBase>;

    render(<BannerBase {...customChildrenProps} />);

    expect(screen.getByTestId('banner-base')).toHaveClass('items-start');
  });

  it('treats a missing content height as not compact for title and description', () => {
    jest.spyOn(HTMLElement.prototype, 'getBoundingClientRect').mockReturnValue({
      height: undefined,
      width: 200,
      top: 0,
      left: 0,
      bottom: 0,
      right: 200,
      x: 0,
      y: 0,
      toJSON: () => ({}),
    } as unknown as DOMRect);

    render(
      <BannerBase
        data-testid="banner-base"
        description="Supporting details"
        onClose={() => undefined}
        title="Added to watchlist"
      />,
    );

    expect(screen.getByTestId('banner-base').className).toContain(
      'items-start',
    );
  });

  it('top-aligns content when the text column exceeds a compact stack', () => {
    jest.spyOn(HTMLElement.prototype, 'getBoundingClientRect').mockReturnValue({
      height: 70,
      width: 200,
      top: 0,
      left: 0,
      bottom: 70,
      right: 200,
      x: 0,
      y: 0,
      toJSON: () => ({}),
    } as DOMRect);

    render(
      <BannerBase
        data-testid="banner-base"
        description="Severity controls the default start accessory icon."
        onClose={() => undefined}
        title="Success"
      />,
    );

    expect(screen.getByTestId('banner-base').className).toContain(
      'items-start',
    );
  });

  it('top-aligns content when an action button is below', () => {
    render(
      <BannerBase
        actionButtonLabel="Action"
        actionButtonOnClick={() => undefined}
        data-testid="banner-base"
        onClose={() => undefined}
        title="Action banner"
      />,
    );

    expect(screen.getByTestId('banner-base').className).toContain(
      'items-start',
    );
  });

  it('re-measures on ResizeObserver callbacks and disconnects on unmount', () => {
    const observe = jest.fn();
    const disconnect = jest.fn();
    let resizeCallback: ResizeObserverCallback = () => undefined;

    class MockResizeObserver {
      constructor(callback: ResizeObserverCallback) {
        resizeCallback = callback;
      }

      observe = observe;

      disconnect = disconnect;

      unobserve = jest.fn();
    }

    Object.defineProperty(window, 'ResizeObserver', {
      configurable: true,
      writable: true,
      value: MockResizeObserver,
    });

    const getBoundingClientRect = jest
      .spyOn(HTMLElement.prototype, 'getBoundingClientRect')
      .mockReturnValue({
        height: 24,
        width: 200,
        top: 0,
        left: 0,
        bottom: 24,
        right: 200,
        x: 0,
        y: 0,
        toJSON: () => ({}),
      } as DOMRect);

    const { unmount } = render(
      <BannerBase
        data-testid="banner-base"
        description="15.02 USDC is available in your account"
        onClose={() => undefined}
        title="Deposit completed"
      />,
    );

    expect(screen.getByTestId('banner-base').className).toContain(
      'items-center',
    );
    expect(observe).toHaveBeenCalledTimes(1);

    getBoundingClientRect.mockReturnValue({
      height: 70,
      width: 200,
      top: 0,
      left: 0,
      bottom: 70,
      right: 200,
      x: 0,
      y: 0,
      toJSON: () => ({}),
    } as DOMRect);

    act(() => {
      resizeCallback(
        [] as unknown as ResizeObserverEntry[],
        {} as ResizeObserver,
      );
    });

    expect(screen.getByTestId('banner-base').className).toContain(
      'items-start',
    );

    unmount();
    expect(disconnect).toHaveBeenCalledTimes(1);
  });

  it('applies custom className to the root container', () => {
    render(
      <BannerBase
        className="mt-1"
        onClose={() => undefined}
        closeButtonProps={{ 'data-testid': closeButtonTestId }}
      />,
    );

    expect(
      screen.getByTestId(closeButtonTestId).closest('.mt-1'),
    ).toBeInTheDocument();
  });
});
