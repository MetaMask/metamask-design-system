import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import type { ReactNode } from 'react';

import { BannerBase } from './BannerBase';

describe('BannerBase', () => {
  const closeButtonTestId = 'banner-base-close-button';

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

  it('renders close button and triggers onClose', () => {
    const onClose = jest.fn();
    render(<BannerBase onClose={onClose} />);

    fireEvent.click(screen.getByRole('button', { name: 'Close banner' }));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('renders close button and triggers closeButtonProps.onClick when onClose is not provided', () => {
    const onCloseButtonClick = jest.fn();
    render(<BannerBase closeButtonProps={{ onClick: onCloseButtonClick }} />);

    fireEvent.click(screen.getByRole('button', { name: 'Close banner' }));
    expect(onCloseButtonClick).toHaveBeenCalledTimes(1);
  });

  it('merges structural and custom close button className values', () => {
    render(
      <BannerBase
        closeButtonProps={{
          className: 'rotate-45',
          'data-testid': closeButtonTestId,
        }}
      />,
    );

    const closeButton = screen.getByTestId(closeButtonTestId);
    expect(closeButton.className).toContain('ml-3');
    expect(closeButton.className).toContain('self-start');
    expect(closeButton.className).toContain('rotate-45');
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
