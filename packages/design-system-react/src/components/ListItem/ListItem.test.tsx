import { ContentVariant } from '@metamask/design-system-shared';
import { fireEvent, render } from '@testing-library/react';
import React from 'react';

import { ListItem } from './ListItem';

const ROOT_TEST_ID = 'listitem-root';

describe('ListItem', () => {
  describe('when isInteractive is false', () => {
    it('renders title via Content', () => {
      const { getByText } = render(
        <ListItem title="Label" data-testid={ROOT_TEST_ID} />,
      );

      expect(getByText('Label')).toBeInTheDocument();
    });

    it('forwards description to Content', () => {
      const { getByText } = render(
        <ListItem
          title="Title"
          description="Secondary"
          data-testid={ROOT_TEST_ID}
        />,
      );

      expect(getByText('Secondary')).toBeInTheDocument();
    });

    it('applies default padding and two-line min height on root Box', () => {
      const { getByTestId } = render(
        <ListItem title="Label" data-testid={ROOT_TEST_ID} />,
      );

      expect(getByTestId(ROOT_TEST_ID)).toHaveClass('w-full');
      expect(getByTestId(ROOT_TEST_ID)).toHaveClass('px-4');
      expect(getByTestId(ROOT_TEST_ID)).toHaveClass('py-3');
      expect(getByTestId(ROOT_TEST_ID)).toHaveClass('min-h-[72px]');
      expect(getByTestId(ROOT_TEST_ID)).toHaveClass('justify-center');
    });

    it('does not set button role by default', () => {
      const { getByTestId } = render(
        <ListItem title="Label" data-testid={ROOT_TEST_ID} />,
      );

      expect(getByTestId(ROOT_TEST_ID)).not.toHaveAttribute('role', 'button');
    });

    describe('when className is provided', () => {
      it('merges className into root padding', () => {
        const { getByTestId } = render(
          <ListItem
            title="Label"
            className="rounded-lg"
            data-testid={ROOT_TEST_ID}
          />,
        );

        expect(getByTestId(ROOT_TEST_ID)).toHaveClass('rounded-lg');
        expect(getByTestId(ROOT_TEST_ID)).toHaveClass('px-4');
      });
    });
  });

  describe('when isInteractive is true', () => {
    it('fires onClick when clicked', () => {
      const onClick = jest.fn();
      const { getByTestId } = render(
        <ListItem
          isInteractive
          title="Label"
          onClick={onClick}
          data-testid={ROOT_TEST_ID}
        />,
      );

      fireEvent.click(getByTestId(ROOT_TEST_ID));

      expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('defaults role to button', () => {
      const { getByTestId } = render(
        <ListItem
          isInteractive
          title="Label"
          onClick={jest.fn()}
          data-testid={ROOT_TEST_ID}
        />,
      );

      expect(getByTestId(ROOT_TEST_ID)).toHaveAttribute('role', 'button');
    });

    it('defaults tabIndex to 0', () => {
      const { getByTestId } = render(
        <ListItem
          isInteractive
          title="Label"
          onClick={jest.fn()}
          data-testid={ROOT_TEST_ID}
        />,
      );

      expect(getByTestId(ROOT_TEST_ID)).toHaveAttribute('tabindex', '0');
    });

    it('applies interactive pressed classes on root', () => {
      const { getByTestId } = render(
        <ListItem
          isInteractive
          title="Label"
          onClick={jest.fn()}
          data-testid={ROOT_TEST_ID}
        />,
      );

      expect(getByTestId(ROOT_TEST_ID)).toHaveClass('cursor-pointer');
      expect(getByTestId(ROOT_TEST_ID)).toHaveClass('active:bg-pressed');
      expect(getByTestId(ROOT_TEST_ID)).toHaveClass('px-4');
      expect(getByTestId(ROOT_TEST_ID)).toHaveClass('min-h-[72px]');
    });

    it('fires onClick when Enter is pressed', () => {
      const onClick = jest.fn();
      const { getByTestId } = render(
        <ListItem
          isInteractive
          title="Label"
          onClick={onClick}
          data-testid={ROOT_TEST_ID}
        />,
      );

      fireEvent.keyDown(getByTestId(ROOT_TEST_ID), { key: 'Enter' });

      expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('fires onClick when Space is pressed', () => {
      const onClick = jest.fn();
      const { getByTestId } = render(
        <ListItem
          isInteractive
          title="Label"
          onClick={onClick}
          data-testid={ROOT_TEST_ID}
        />,
      );

      fireEvent.keyDown(getByTestId(ROOT_TEST_ID), { key: ' ' });

      expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('renders Content inside interactive root', () => {
      const { getByText, getByTestId } = render(
        <ListItem
          isInteractive
          title="Tappable row"
          onClick={jest.fn()}
          data-testid={ROOT_TEST_ID}
        />,
      );

      expect(getByTestId(ROOT_TEST_ID)).toBeInTheDocument();
      expect(getByText('Tappable row')).toBeInTheDocument();
    });

    describe('when className is provided', () => {
      it('merges className into interactive root', () => {
        const { getByTestId } = render(
          <ListItem
            isInteractive
            title="Label"
            onClick={jest.fn()}
            className="rounded-lg"
            data-testid={ROOT_TEST_ID}
          />,
        );

        expect(getByTestId(ROOT_TEST_ID)).toHaveClass('rounded-lg');
        expect(getByTestId(ROOT_TEST_ID)).toHaveClass('active:bg-pressed');
      });
    });
  });

  describe('when children are provided', () => {
    it('renders children below Content', () => {
      const { getByText, getByTestId } = render(
        <ListItem title="Label">
          <span data-testid="below-content">Below</span>
        </ListItem>,
      );

      expect(getByText('Label')).toBeInTheDocument();
      expect(getByTestId('below-content')).toBeInTheDocument();
    });
  });

  describe('variant', () => {
    it('applies one-line min height and justify-center', () => {
      const { getByTestId } = render(
        <ListItem
          title="Label"
          variant={ContentVariant.OneLine}
          data-testid={ROOT_TEST_ID}
        />,
      );

      expect(getByTestId(ROOT_TEST_ID)).toHaveClass('min-h-[48px]');
      expect(getByTestId(ROOT_TEST_ID)).toHaveClass('justify-center');
    });

    it('applies multi-line min height and justify-start', () => {
      const { getByTestId } = render(
        <ListItem
          title="Label"
          variant={ContentVariant.MultiLine}
          data-testid={ROOT_TEST_ID}
        />,
      );

      expect(getByTestId(ROOT_TEST_ID)).toHaveClass('min-h-[88px]');
      expect(getByTestId(ROOT_TEST_ID)).toHaveClass('justify-start');
    });

    it('does not render description when variant is OneLine', () => {
      const { getByText, queryByText } = render(
        <ListItem
          title="Title"
          description="Secondary"
          variant={ContentVariant.OneLine}
        />,
      );

      expect(getByText('Title')).toBeInTheDocument();
      expect(queryByText('Secondary')).not.toBeInTheDocument();
    });
  });

  describe('when Content accessories are provided', () => {
    it('renders startAccessory and endAccessory', () => {
      const { getByTestId } = render(
        <ListItem
          title="Label"
          startAccessory={<span data-testid="start">S</span>}
          endAccessory={<span data-testid="end">E</span>}
        />,
      );

      expect(getByTestId('start')).toBeInTheDocument();
      expect(getByTestId('end')).toBeInTheDocument();
    });

    it('renders startAccessory with avatar on the content row', () => {
      const { getByTestId } = render(
        <ListItem
          title="Label"
          startAccessory={<span data-testid="start-accessory">S</span>}
          avatar={<span data-testid="avatar-slot">A</span>}
        />,
      );

      expect(getByTestId('start-accessory')).toBeInTheDocument();
      expect(getByTestId('avatar-slot')).toBeInTheDocument();
    });

    it('renders endAccessory with avatar on the content row', () => {
      const { getByTestId } = render(
        <ListItem
          title="Label"
          endAccessory={<span data-testid="end-accessory">E</span>}
          avatar={<span data-testid="avatar-slot">A</span>}
        />,
      );

      expect(getByTestId('end-accessory')).toBeInTheDocument();
      expect(getByTestId('avatar-slot')).toBeInTheDocument();
    });
  });
});
