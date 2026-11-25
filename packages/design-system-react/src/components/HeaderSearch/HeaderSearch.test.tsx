import { HeaderSearchVariant } from '@metamask/design-system-shared';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import { HeaderSearch } from './HeaderSearch';

const mockTextFieldSearchProps = {
  inputAriaLabel: 'Search',
  value: '',
  onChange: jest.fn(),
  clearButtonOnClick: jest.fn(),
  placeholder: 'Search',
};

describe('HeaderSearch', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('when variant is screen', () => {
    it('renders back button from backButtonProps', () => {
      const onClickBackButton = jest.fn();

      render(
        <HeaderSearch
          variant={HeaderSearchVariant.Screen}
          onClickBackButton={onClickBackButton}
          textFieldSearchProps={mockTextFieldSearchProps}
          backButtonProps={{ 'data-testid': 'back-button', ariaLabel: 'Back' }}
        />,
      );

      expect(screen.getByTestId('back-button')).toBeInTheDocument();
    });

    it('applies data-testid to root container', () => {
      const onClickBackButton = jest.fn();

      render(
        <HeaderSearch
          variant={HeaderSearchVariant.Screen}
          onClickBackButton={onClickBackButton}
          textFieldSearchProps={mockTextFieldSearchProps}
          data-testid="header-search"
        />,
      );

      expect(screen.getByTestId('header-search')).toBeInTheDocument();
    });

    it('invokes onClickBackButton when back button is clicked', async () => {
      const user = userEvent.setup();
      const onClickBackButton = jest.fn();

      render(
        <HeaderSearch
          variant={HeaderSearchVariant.Screen}
          onClickBackButton={onClickBackButton}
          textFieldSearchProps={mockTextFieldSearchProps}
          backButtonProps={{ 'data-testid': 'back-button', ariaLabel: 'Back' }}
        />,
      );

      await user.click(screen.getByTestId('back-button'));

      expect(onClickBackButton).toHaveBeenCalledTimes(1);
    });

    it('defaults back button aria-label to Back', () => {
      const onClickBackButton = jest.fn();

      render(
        <HeaderSearch
          variant={HeaderSearchVariant.Screen}
          onClickBackButton={onClickBackButton}
          textFieldSearchProps={mockTextFieldSearchProps}
        />,
      );

      expect(screen.getByRole('button', { name: 'Back' })).toBeInTheDocument();
    });

    it('allows backButtonProps to override ariaLabel', () => {
      const onClickBackButton = jest.fn();

      render(
        <HeaderSearch
          variant={HeaderSearchVariant.Screen}
          onClickBackButton={onClickBackButton}
          textFieldSearchProps={mockTextFieldSearchProps}
          backButtonProps={{ ariaLabel: 'Go back' }}
        />,
      );

      expect(
        screen.getByRole('button', { name: 'Go back' }),
      ).toBeInTheDocument();
    });

    it('does not allow backButtonProps to override onClick', async () => {
      const user = userEvent.setup();
      const onClickBackButton = jest.fn();
      const rogueOnClick = jest.fn();

      render(
        <HeaderSearch
          variant={HeaderSearchVariant.Screen}
          onClickBackButton={onClickBackButton}
          textFieldSearchProps={mockTextFieldSearchProps}
          backButtonProps={
            {
              'data-testid': 'back-button',
              ariaLabel: 'Back',
              onClick: rogueOnClick,
            } as never
          }
        />,
      );

      await user.click(screen.getByTestId('back-button'));

      expect(onClickBackButton).toHaveBeenCalledTimes(1);
      expect(rogueOnClick).not.toHaveBeenCalled();
    });

    it('passes textFieldSearchProps through to TextFieldSearch', () => {
      const onClickBackButton = jest.fn();

      render(
        <HeaderSearch
          variant={HeaderSearchVariant.Screen}
          onClickBackButton={onClickBackButton}
          textFieldSearchProps={{
            ...mockTextFieldSearchProps,
            placeholder: 'Custom placeholder',
          }}
        />,
      );

      expect(
        screen.getByPlaceholderText('Custom placeholder'),
      ).toBeInTheDocument();
    });

    it('merges textFieldSearchProps.className with flex-1 on TextFieldSearch', () => {
      const onClickBackButton = jest.fn();

      const { container } = render(
        <HeaderSearch
          variant={HeaderSearchVariant.Screen}
          onClickBackButton={onClickBackButton}
          textFieldSearchProps={{
            ...mockTextFieldSearchProps,
            className: 'mt-1',
            'data-testid': 'text-field-search',
          }}
        />,
      );

      const field =
        screen.queryByTestId('text-field-search') ??
        container.querySelector('.mt-1');

      expect(field).toHaveClass('flex-1');
      expect(field).toHaveClass('mt-1');
    });
  });

  describe('when variant is inline', () => {
    it('renders cancel label', () => {
      const onClickCancelButton = jest.fn();

      render(
        <HeaderSearch
          variant={HeaderSearchVariant.Inline}
          onClickCancelButton={onClickCancelButton}
          textFieldSearchProps={mockTextFieldSearchProps}
        />,
      );

      expect(screen.getByText('Cancel')).toBeInTheDocument();
    });

    it('applies data-testid to root container', () => {
      const onClickCancelButton = jest.fn();

      render(
        <HeaderSearch
          variant={HeaderSearchVariant.Inline}
          onClickCancelButton={onClickCancelButton}
          textFieldSearchProps={mockTextFieldSearchProps}
          data-testid="header-search-inline"
        />,
      );

      expect(screen.getByTestId('header-search-inline')).toBeInTheDocument();
    });

    it('invokes onClickCancelButton when cancel button is clicked', async () => {
      const user = userEvent.setup();
      const onClickCancelButton = jest.fn();

      render(
        <HeaderSearch
          variant={HeaderSearchVariant.Inline}
          onClickCancelButton={onClickCancelButton}
          textFieldSearchProps={mockTextFieldSearchProps}
          cancelButtonProps={{ 'data-testid': 'cancel-button' }}
        />,
      );

      await user.click(screen.getByTestId('cancel-button'));

      expect(onClickCancelButton).toHaveBeenCalledTimes(1);
    });

    it('forwards cancelButtonProps to Button', () => {
      const onClickCancelButton = jest.fn();

      render(
        <HeaderSearch
          variant={HeaderSearchVariant.Inline}
          onClickCancelButton={onClickCancelButton}
          textFieldSearchProps={mockTextFieldSearchProps}
          cancelButtonProps={{ 'data-testid': 'custom-cancel-button' }}
        />,
      );

      expect(screen.getByTestId('custom-cancel-button')).toBeInTheDocument();
    });

    it('does not allow cancelButtonProps to override onClick', async () => {
      const user = userEvent.setup();
      const onClickCancelButton = jest.fn();
      const rogueOnClick = jest.fn();

      render(
        <HeaderSearch
          variant={HeaderSearchVariant.Inline}
          onClickCancelButton={onClickCancelButton}
          textFieldSearchProps={mockTextFieldSearchProps}
          cancelButtonProps={
            {
              'data-testid': 'cancel-button',
              onClick: rogueOnClick,
            } as never
          }
        />,
      );

      await user.click(screen.getByTestId('cancel-button'));

      expect(onClickCancelButton).toHaveBeenCalledTimes(1);
      expect(rogueOnClick).not.toHaveBeenCalled();
    });

    it('passes textFieldSearchProps through to TextFieldSearch', () => {
      const onClickCancelButton = jest.fn();

      render(
        <HeaderSearch
          variant={HeaderSearchVariant.Inline}
          onClickCancelButton={onClickCancelButton}
          textFieldSearchProps={{
            ...mockTextFieldSearchProps,
            placeholder: 'Search inline',
          }}
        />,
      );

      expect(screen.getByPlaceholderText('Search inline')).toBeInTheDocument();
    });

    it('merges textFieldSearchProps.className with flex-1 on TextFieldSearch', () => {
      const onClickCancelButton = jest.fn();

      const { container } = render(
        <HeaderSearch
          variant={HeaderSearchVariant.Inline}
          onClickCancelButton={onClickCancelButton}
          textFieldSearchProps={{
            ...mockTextFieldSearchProps,
            className: 'mt-1',
            'data-testid': 'text-field-search',
          }}
        />,
      );

      const field =
        screen.queryByTestId('text-field-search') ??
        container.querySelector('.mt-1');

      expect(field).toHaveClass('flex-1');
      expect(field).toHaveClass('mt-1');
    });

    it('merges cancelButtonProps.textProps.className with text-default', () => {
      const onClickCancelButton = jest.fn();

      render(
        <HeaderSearch
          variant={HeaderSearchVariant.Inline}
          onClickCancelButton={onClickCancelButton}
          textFieldSearchProps={mockTextFieldSearchProps}
          cancelButtonProps={{
            textProps: { className: 'font-bold' },
          }}
        />,
      );

      const label = screen.getByText('Cancel');

      expect(label).toHaveClass('text-default');
      expect(label).toHaveClass('font-bold');
    });
  });

  describe('when forwarding Box props', () => {
    it('merges className into root for screen variant', () => {
      const onClickBackButton = jest.fn();

      render(
        <HeaderSearch
          variant={HeaderSearchVariant.Screen}
          onClickBackButton={onClickBackButton}
          textFieldSearchProps={mockTextFieldSearchProps}
          data-testid="container"
          className="bg-error-default"
        />,
      );

      expect(screen.getByTestId('container')).toHaveClass('bg-error-default');
    });

    it('merges className into root for inline variant', () => {
      const onClickCancelButton = jest.fn();

      render(
        <HeaderSearch
          variant={HeaderSearchVariant.Inline}
          onClickCancelButton={onClickCancelButton}
          textFieldSearchProps={mockTextFieldSearchProps}
          data-testid="container"
          className="bg-error-default"
        />,
      );

      expect(screen.getByTestId('container')).toHaveClass('bg-error-default');
    });
  });
});
