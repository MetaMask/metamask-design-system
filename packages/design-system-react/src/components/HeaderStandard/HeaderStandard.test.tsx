import { IconName, TextVariant } from '@metamask/design-system-shared';
import { fireEvent, render } from '@testing-library/react';
import React from 'react';

import { HeaderStandard } from './HeaderStandard';

const CONTAINER_TEST_ID = 'header-standard-container';
const TITLE_TEST_ID = 'header-standard-title';
const START_ACCESSORY_TEST_ID = 'start-accessory-wrapper';
const END_ACCESSORY_TEST_ID = 'end-accessory-wrapper';
const SUBTITLE_TEST_ID = 'header-standard-subtitle';

describe('HeaderStandard', () => {
  describe('title and subtitle', () => {
    it('renders with title', () => {
      const { getByText } = render(<HeaderStandard title="Test title" />);

      expect(getByText('Test title')).toBeInTheDocument();
    });

    it('applies BodyMd bold to string titles by default', () => {
      const { getByText } = render(<HeaderStandard title="Heading" />);

      expect(getByText('Heading')).toHaveClass('text-s-body-md');
      expect(getByText('Heading')).toHaveClass('font-bold');
    });

    it('forwards titleProps to the title Text when title is a string', () => {
      const { getByTestId } = render(
        <HeaderStandard
          title="Test title"
          titleProps={{ 'data-testid': TITLE_TEST_ID }}
        />,
      );

      expect(getByTestId(TITLE_TEST_ID)).toBeInTheDocument();
    });

    it('forwards data-testid to the root container', () => {
      const { getByTestId } = render(
        <HeaderStandard title="Test title" data-testid={CONTAINER_TEST_ID} />,
      );

      expect(getByTestId(CONTAINER_TEST_ID)).toBeInTheDocument();
    });

    it('renders custom children instead of title', () => {
      const { getByText, queryByText } = render(
        <HeaderStandard title="Ignored title">
          <span>Custom content</span>
        </HeaderStandard>,
      );

      expect(getByText('Custom content')).toBeInTheDocument();
      expect(queryByText('Ignored title')).not.toBeInTheDocument();
    });

    it('renders subtitle when provided', () => {
      const { getByText } = render(
        <HeaderStandard title="Test title" subtitle="Test subtitle" />,
      );

      expect(getByText('Test subtitle')).toBeInTheDocument();
    });

    it('does not render subtitle when not provided', () => {
      const { queryByText } = render(<HeaderStandard title="Test title" />);

      expect(queryByText('Test subtitle')).not.toBeInTheDocument();
    });

    it('forwards subtitleProps when subtitle is a string', () => {
      const { getByTestId } = render(
        <HeaderStandard
          title="Test title"
          subtitle="Test subtitle"
          subtitleProps={{ 'data-testid': SUBTITLE_TEST_ID }}
        />,
      );

      expect(getByTestId(SUBTITLE_TEST_ID)).toBeInTheDocument();
    });

    it('merges titleProps over default title classes', () => {
      const { getByText } = render(
        <HeaderStandard
          title="Custom"
          titleProps={{ variant: TextVariant.HeadingSm }}
        />,
      );

      expect(getByText('Custom')).toHaveClass('text-s-heading-sm');
    });

    it('renders title and subtitle React nodes without string text props', () => {
      const { getByTestId, queryByTestId } = render(
        <HeaderStandard
          title={<span data-testid="title-node">Node title</span>}
          subtitle={<span data-testid="subtitle-node">Node subtitle</span>}
          titleProps={{ 'data-testid': 'title-string-props' }}
          subtitleProps={{ 'data-testid': 'subtitle-string-props' }}
        />,
      );

      expect(getByTestId('title-node')).toBeInTheDocument();
      expect(getByTestId('subtitle-node')).toBeInTheDocument();
      expect(queryByTestId('title-string-props')).not.toBeInTheDocument();
      expect(queryByTestId('subtitle-string-props')).not.toBeInTheDocument();
    });

    it('does not render subtitle when subtitle is an empty string', () => {
      const { getByTestId, queryByTestId } = render(
        <HeaderStandard
          title="Only title"
          titleProps={{ 'data-testid': TITLE_TEST_ID }}
          subtitle=""
          subtitleProps={{ 'data-testid': SUBTITLE_TEST_ID }}
        />,
      );

      expect(getByTestId(TITLE_TEST_ID)).toBeInTheDocument();
      expect(queryByTestId(SUBTITLE_TEST_ID)).not.toBeInTheDocument();
    });

    it('renders no center content when title and children are omitted', () => {
      const { getByTestId, queryByText } = render(
        <HeaderStandard data-testid={CONTAINER_TEST_ID} />,
      );

      expect(getByTestId(CONTAINER_TEST_ID)).toBeInTheDocument();
      expect(queryByText('Title')).not.toBeInTheDocument();
    });
  });

  describe('back button', () => {
    it('renders back button when onBack is provided', () => {
      const { getByRole } = render(
        <HeaderStandard title="Title" onBack={jest.fn()} />,
      );

      expect(getByRole('button', { name: 'Back' })).toBeInTheDocument();
    });

    it('calls onBack when the back button is clicked', () => {
      const onBack = jest.fn();
      const { getByRole } = render(
        <HeaderStandard title="Title" onBack={onBack} />,
      );

      fireEvent.click(getByRole('button', { name: 'Back' }));

      expect(onBack).toHaveBeenCalledTimes(1);
    });

    it('renders back button when only backButtonProps is provided', () => {
      const onClick = jest.fn();
      const { getByRole } = render(
        <HeaderStandard
          title="Title"
          backButtonProps={{ onClick, ariaLabel: 'Go back' }}
        />,
      );

      expect(getByRole('button', { name: 'Go back' })).toBeInTheDocument();
    });

    it('uses backButtonProps.onClick over onBack when both are provided', () => {
      const onBack = jest.fn();
      const onClick = jest.fn();
      const { getByRole } = render(
        <HeaderStandard
          title="Title"
          onBack={onBack}
          backButtonProps={{ onClick, ariaLabel: 'Go back' }}
        />,
      );

      fireEvent.click(getByRole('button', { name: 'Go back' }));

      expect(onClick).toHaveBeenCalledTimes(1);
      expect(onBack).not.toHaveBeenCalled();
    });

    it('does not render start accessory when no back props are provided', () => {
      const { queryByTestId } = render(
        <HeaderStandard
          title="Title"
          startAccessoryWrapperProps={{
            'data-testid': START_ACCESSORY_TEST_ID,
          }}
        />,
      );

      expect(queryByTestId(START_ACCESSORY_TEST_ID)).not.toBeInTheDocument();
    });

    it('startButtonIconProps takes priority over onBack', () => {
      const onBack = jest.fn();
      const onClick = jest.fn();
      const { getByRole, queryByRole } = render(
        <HeaderStandard
          title="Title"
          onBack={onBack}
          startButtonIconProps={{
            iconName: IconName.Menu,
            ariaLabel: 'Menu',
            onClick,
          }}
        />,
      );

      expect(getByRole('button', { name: 'Menu' })).toBeInTheDocument();
      expect(queryByRole('button', { name: 'Back' })).not.toBeInTheDocument();
    });

    it('startAccessory takes priority over startButtonIconProps', () => {
      const { getByTestId, queryByRole } = render(
        <HeaderStandard
          title="Title"
          startAccessory={<span data-testid="custom-start">Custom</span>}
          startButtonIconProps={{
            iconName: IconName.Menu,
            ariaLabel: 'Menu',
            onClick: jest.fn(),
          }}
        />,
      );

      expect(getByTestId('custom-start')).toBeInTheDocument();
      expect(queryByRole('button', { name: 'Menu' })).not.toBeInTheDocument();
    });
  });

  describe('close button', () => {
    it('renders close button when onClose is provided', () => {
      const { getByRole } = render(
        <HeaderStandard title="Title" onClose={jest.fn()} />,
      );

      expect(getByRole('button', { name: 'Close' })).toBeInTheDocument();
    });

    it('calls onClose when the close button is clicked', () => {
      const onClose = jest.fn();
      const { getByRole } = render(
        <HeaderStandard title="Title" onClose={onClose} />,
      );

      fireEvent.click(getByRole('button', { name: 'Close' }));

      expect(onClose).toHaveBeenCalledTimes(1);
    });

    it('uses closeButtonProps.onClick over onClose when both are provided', () => {
      const onClose = jest.fn();
      const onClick = jest.fn();
      const { getByRole } = render(
        <HeaderStandard
          title="Title"
          onClose={onClose}
          closeButtonProps={{ onClick, ariaLabel: 'Dismiss' }}
        />,
      );

      fireEvent.click(getByRole('button', { name: 'Dismiss' }));

      expect(onClick).toHaveBeenCalledTimes(1);
      expect(onClose).not.toHaveBeenCalled();
    });

    it('does not render end accessory when no close props are provided', () => {
      const { queryByTestId } = render(
        <HeaderStandard
          title="Title"
          endAccessoryWrapperProps={{ 'data-testid': END_ACCESSORY_TEST_ID }}
        />,
      );

      expect(queryByTestId(END_ACCESSORY_TEST_ID)).not.toBeInTheDocument();
    });

    it('renders endButtonIconProps when onClose is omitted', () => {
      const onClick = jest.fn();
      const { getByRole, getByTestId } = render(
        <HeaderStandard
          title="Title"
          endButtonIconProps={[
            {
              iconName: IconName.Search,
              ariaLabel: 'Search',
              onClick,
            },
          ]}
          endAccessoryWrapperProps={{ 'data-testid': END_ACCESSORY_TEST_ID }}
        />,
      );

      expect(getByTestId(END_ACCESSORY_TEST_ID)).toBeInTheDocument();
      expect(getByRole('button', { name: 'Search' })).toBeInTheDocument();
    });

    it('does not render end accessory when endButtonIconProps is empty', () => {
      const { queryByTestId } = render(
        <HeaderStandard
          title="Title"
          endButtonIconProps={[]}
          endAccessoryWrapperProps={{ 'data-testid': END_ACCESSORY_TEST_ID }}
        />,
      );

      expect(queryByTestId(END_ACCESSORY_TEST_ID)).not.toBeInTheDocument();
    });

    it('forwards endButtonIconProps and adds the close button', () => {
      const { getByRole, getByTestId } = render(
        <HeaderStandard
          title="Title"
          endButtonIconProps={[
            {
              iconName: IconName.Search,
              ariaLabel: 'Search',
              onClick: jest.fn(),
            },
          ]}
          onClose={jest.fn()}
          endAccessoryWrapperProps={{ 'data-testid': END_ACCESSORY_TEST_ID }}
        />,
      );

      expect(getByTestId(END_ACCESSORY_TEST_ID)).toBeInTheDocument();
      expect(getByRole('button', { name: 'Close' })).toBeInTheDocument();
      expect(getByRole('button', { name: 'Search' })).toBeInTheDocument();
    });

    it('renders endButtonIconProps in reverse DOM order with the close button last', () => {
      const { getAllByRole } = render(
        <HeaderStandard
          title="Title"
          endButtonIconProps={[
            {
              iconName: IconName.Search,
              ariaLabel: 'Search',
              onClick: jest.fn(),
            },
            {
              iconName: IconName.Star,
              ariaLabel: 'Star',
              onClick: jest.fn(),
            },
          ]}
          onClose={jest.fn()}
        />,
      );

      const ariaLabels = getAllByRole('button').map((button) =>
        button.getAttribute('aria-label'),
      );

      expect(ariaLabels).toStrictEqual(['Star', 'Search', 'Close']);
    });

    it('uses a custom backButtonProps.ariaLabel over the English default', () => {
      const onBack = jest.fn();
      const { getByRole, queryByRole } = render(
        <HeaderStandard
          title="Title"
          onBack={onBack}
          backButtonProps={{ ariaLabel: 'Custom back label' }}
        />,
      );

      expect(
        getByRole('button', { name: 'Custom back label' }),
      ).toBeInTheDocument();
      expect(queryByRole('button', { name: 'Back' })).not.toBeInTheDocument();

      fireEvent.click(getByRole('button', { name: 'Custom back label' }));
      expect(onBack).toHaveBeenCalledTimes(1);
    });

    it('uses a custom closeButtonProps.ariaLabel over the English default', () => {
      const onClose = jest.fn();
      const { getByRole, queryByRole } = render(
        <HeaderStandard
          title="Title"
          onClose={onClose}
          closeButtonProps={{ ariaLabel: 'Custom close label' }}
        />,
      );

      expect(
        getByRole('button', { name: 'Custom close label' }),
      ).toBeInTheDocument();
      expect(queryByRole('button', { name: 'Close' })).not.toBeInTheDocument();

      fireEvent.click(getByRole('button', { name: 'Custom close label' }));
      expect(onClose).toHaveBeenCalledTimes(1);
    });

    it('endAccessory takes priority over endButtonIconProps and close', () => {
      const { getByTestId, queryByRole } = render(
        <HeaderStandard
          title="Title"
          endAccessory={<span data-testid="custom-end">Custom end</span>}
          onClose={jest.fn()}
          endButtonIconProps={[
            {
              iconName: IconName.Search,
              ariaLabel: 'Search',
              onClick: jest.fn(),
            },
          ]}
        />,
      );

      expect(getByTestId('custom-end')).toBeInTheDocument();
      expect(queryByRole('button', { name: 'Close' })).not.toBeInTheDocument();
      expect(queryByRole('button', { name: 'Search' })).not.toBeInTheDocument();
    });
  });

  describe('layout', () => {
    it('applies default height, gap, and horizontal padding, and merges className', () => {
      const { getByTestId } = render(
        <HeaderStandard
          title="Title"
          data-testid={CONTAINER_TEST_ID}
          className="border-b"
        />,
      );

      const root = getByTestId(CONTAINER_TEST_ID);
      expect(root).toHaveClass('h-14');
      expect(root).toHaveClass('gap-4');
      expect(root).toHaveClass('px-2');
      expect(root).toHaveClass('border-b');
    });

    it('lets className override the default height and gap', () => {
      const { getByTestId } = render(
        <HeaderStandard
          title="Title"
          data-testid={CONTAINER_TEST_ID}
          className="h-20 gap-2"
        />,
      );

      const root = getByTestId(CONTAINER_TEST_ID);
      expect(root).toHaveClass('h-20');
      expect(root).toHaveClass('gap-2');
      expect(root).not.toHaveClass('h-14');
      expect(root).not.toHaveClass('gap-4');
    });

    it('renders start accessory wrapper when onBack is provided', () => {
      const { getByTestId, getByRole } = render(
        <HeaderStandard
          title="Title"
          onBack={jest.fn()}
          startAccessoryWrapperProps={{
            'data-testid': START_ACCESSORY_TEST_ID,
          }}
        />,
      );

      expect(getByTestId(START_ACCESSORY_TEST_ID)).toBeInTheDocument();
      expect(getByRole('button', { name: 'Back' })).toBeInTheDocument();
    });
  });
});
