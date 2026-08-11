import { IconName, TextVariant } from '@metamask/design-system-shared';
import { fireEvent, render } from '@testing-library/react';
import React from 'react';

import { HeaderRoot } from './HeaderRoot';

const CONTAINER_TEST_ID = 'header-root-container';
const LEFT_CHILDREN_TEST_ID = 'header-root-left-children';
const END_ACCESSORY_TEST_ID = 'header-root-end-accessory';
const END_BUTTON_TEST_ID = 'header-root-end-button';

describe('HeaderRoot', () => {
  describe('rendering', () => {
    it('forwards data-testid to the root container', () => {
      const { getByTestId } = render(
        <HeaderRoot title="Title" data-testid={CONTAINER_TEST_ID} />,
      );

      expect(getByTestId(CONTAINER_TEST_ID)).toBeInTheDocument();
    });

    it('renders string title when no children are provided', () => {
      const { getByText } = render(<HeaderRoot title="Test Title" />);

      expect(getByText('Test Title')).toBeInTheDocument();
    });

    it('applies HeadingLg to string titles by default', () => {
      const { getByText } = render(<HeaderRoot title="Heading" />);

      expect(getByText('Heading')).toHaveClass('text-s-heading-lg');
    });

    it('renders a React node title without applying titleProps', () => {
      const { getByTestId, queryByTestId } = render(
        <HeaderRoot
          title={<span data-testid="header-root-title-node">Node Title</span>}
          titleProps={{ 'data-testid': 'header-root-title-string-props' }}
        />,
      );

      expect(getByTestId('header-root-title-node')).toBeInTheDocument();
      expect(queryByTestId('header-root-title-string-props')).not.toBeInTheDocument();
    });

    it('forwards titleProps to the title Text when title is a string', () => {
      const { getByTestId } = render(
        <HeaderRoot
          title="Test Title"
          titleProps={{ 'data-testid': 'header-root-title' }}
        />,
      );

      expect(getByTestId('header-root-title')).toBeInTheDocument();
    });

    it('merges titleProps over default title classes', () => {
      const { getByText } = render(
        <HeaderRoot
          title="Custom"
          titleProps={{ variant: TextVariant.HeadingMd }}
        />,
      );

      expect(getByText('Custom')).toHaveClass('text-s-heading-md');
    });

    it('renders titleAccessory in the title row when no children', () => {
      const { getByTestId, getByText } = render(
        <HeaderRoot
          title="Title"
          titleAccessory={
            <span data-testid={LEFT_CHILDREN_TEST_ID}>Accessory</span>
          }
        />,
      );

      expect(getByText('Title')).toBeInTheDocument();
      expect(getByTestId(LEFT_CHILDREN_TEST_ID)).toBeInTheDocument();
    });

    it('renders children in the left section when provided', () => {
      const { getByTestId, queryByText } = render(
        <HeaderRoot title="Ignored Title" data-testid={CONTAINER_TEST_ID}>
          <span data-testid={LEFT_CHILDREN_TEST_ID}>Custom Content</span>
        </HeaderRoot>,
      );

      expect(getByTestId(LEFT_CHILDREN_TEST_ID)).toBeInTheDocument();
      expect(queryByText('Ignored Title')).not.toBeInTheDocument();
    });

    it('prioritizes children over title when both are provided', () => {
      const { getByText, queryByText } = render(
        <HeaderRoot title="Title Text">
          <span>Children Text</span>
        </HeaderRoot>,
      );

      expect(getByText('Children Text')).toBeInTheDocument();
      expect(queryByText('Title Text')).not.toBeInTheDocument();
    });

    it('renders the title row when children is null', () => {
      const { getByText } = render(
        <HeaderRoot title="Title When Children Null">{null}</HeaderRoot>,
      );

      expect(getByText('Title When Children Null')).toBeInTheDocument();
    });

    it('renders the title row when children is false', () => {
      const { getByText } = render(
        <HeaderRoot title="Settings">{false}</HeaderRoot>,
      );

      expect(getByText('Settings')).toBeInTheDocument();
    });

    it('renders no left section when title and children are omitted', () => {
      const { getByTestId, queryByText } = render(
        <HeaderRoot data-testid={CONTAINER_TEST_ID} />,
      );

      expect(getByTestId(CONTAINER_TEST_ID)).toBeInTheDocument();
      expect(queryByText('Title')).not.toBeInTheDocument();
    });

    it('does not render titleAccessory when title is false', () => {
      const { getByTestId, queryByTestId } = render(
        <HeaderRoot
          data-testid={CONTAINER_TEST_ID}
          title={false}
          titleAccessory={
            <span data-testid={LEFT_CHILDREN_TEST_ID}>Should not show</span>
          }
        />,
      );

      expect(getByTestId(CONTAINER_TEST_ID)).toBeInTheDocument();
      expect(queryByTestId(LEFT_CHILDREN_TEST_ID)).not.toBeInTheDocument();
    });

    it('applies default layout classes on the root', () => {
      const { getByTestId } = render(
        <HeaderRoot title="Title" data-testid={CONTAINER_TEST_ID} />,
      );

      const root = getByTestId(CONTAINER_TEST_ID);
      expect(root).toHaveClass('min-h-14');
      expect(root).toHaveClass('flex-row');
      expect(root).toHaveClass('items-center');
    });

    it('merges className with default root classes', () => {
      const { getByTestId } = render(
        <HeaderRoot
          title="Title"
          data-testid={CONTAINER_TEST_ID}
          className="bg-default"
        />,
      );

      const root = getByTestId(CONTAINER_TEST_ID);
      expect(root).toHaveClass('min-h-14');
      expect(root).toHaveClass('bg-default');
    });
  });

  describe('end section', () => {
    it('renders endAccessory when provided', () => {
      const { getByTestId } = render(
        <HeaderRoot
          title="Title"
          endAccessory={
            <span data-testid={END_ACCESSORY_TEST_ID}>End Content</span>
          }
        />,
      );

      expect(getByTestId(END_ACCESSORY_TEST_ID)).toBeInTheDocument();
    });

    it('renders a ButtonIcon when endButtonIconProps has one item', () => {
      const onClick = jest.fn();
      const { getByTestId } = render(
        <HeaderRoot
          title="Title"
          endButtonIconProps={[
            {
              iconName: IconName.Close,
              ariaLabel: 'Close',
              onClick,
              'data-testid': END_BUTTON_TEST_ID,
            },
          ]}
        />,
      );

      expect(getByTestId(END_BUTTON_TEST_ID)).toBeInTheDocument();
    });

    it('calls onClick when an end ButtonIcon is clicked', () => {
      const onClick = jest.fn();
      const { getByTestId } = render(
        <HeaderRoot
          title="Title"
          endButtonIconProps={[
            {
              iconName: IconName.Close,
              ariaLabel: 'Close',
              onClick,
              'data-testid': END_BUTTON_TEST_ID,
            },
          ]}
        />,
      );

      fireEvent.click(getByTestId(END_BUTTON_TEST_ID));

      expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('renders multiple ButtonIcons from endButtonIconProps', () => {
      const { getByTestId } = render(
        <HeaderRoot
          title="Title"
          endButtonIconProps={[
            {
              iconName: IconName.Close,
              ariaLabel: 'Close',
              onClick: jest.fn(),
              'data-testid': 'end-button-close',
            },
            {
              iconName: IconName.Search,
              ariaLabel: 'Search',
              onClick: jest.fn(),
              'data-testid': 'end-button-search',
            },
          ]}
        />,
      );

      expect(getByTestId('end-button-close')).toBeInTheDocument();
      expect(getByTestId('end-button-search')).toBeInTheDocument();
    });

    it('does not render end ButtonIcons when endButtonIconProps is empty', () => {
      const { queryByRole } = render(
        <HeaderRoot title="Title" endButtonIconProps={[]} />,
      );

      expect(queryByRole('button')).not.toBeInTheDocument();
    });

    it('prioritizes endAccessory over endButtonIconProps', () => {
      const { getByTestId, queryByTestId } = render(
        <HeaderRoot
          title="Title"
          endAccessory={
            <span data-testid={END_ACCESSORY_TEST_ID}>Custom End</span>
          }
          endButtonIconProps={[
            {
              iconName: IconName.Close,
              ariaLabel: 'Close',
              onClick: jest.fn(),
              'data-testid': END_BUTTON_TEST_ID,
            },
          ]}
        />,
      );

      expect(getByTestId(END_ACCESSORY_TEST_ID)).toBeInTheDocument();
      expect(queryByTestId(END_BUTTON_TEST_ID)).not.toBeInTheDocument();
    });
  });
});
