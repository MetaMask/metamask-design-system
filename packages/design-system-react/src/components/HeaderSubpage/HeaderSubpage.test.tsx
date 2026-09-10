import { IconName } from '@metamask/design-system-shared';
import { render, screen, fireEvent } from '@testing-library/react';
import React, { createRef } from 'react';

import { HeaderSubpage } from './HeaderSubpage';

const CONTAINER_TEST_ID = 'header-subpage-container';
const BACK_BUTTON_TEST_ID = 'header-subpage-back-button';
const CLOSE_BUTTON_TEST_ID = 'header-subpage-close-button';
const START_ACCESSORY_TEST_ID = 'header-subpage-start-accessory';
const END_ACCESSORY_TEST_ID = 'header-subpage-end-accessory';
const CUSTOM_START_BUTTON_TEST_ID = 'header-subpage-custom-start-button';
const END_SEARCH_BUTTON_TEST_ID = 'header-subpage-end-search';

describe('HeaderSubpage', () => {
  describe('identity content', () => {
    describe('when title is provided', () => {
      it('renders title as string', () => {
        render(<HeaderSubpage title="Test Title" />);

        expect(screen.getByText('Test Title')).toBeInTheDocument();
      });

      it('renders title as node', () => {
        render(<HeaderSubpage title={<span>Custom Title Node</span>} />);

        expect(screen.getByText('Custom Title Node')).toBeInTheDocument();
      });

      it('applies titleProps to string title', () => {
        render(
          <HeaderSubpage
            title="Test Title"
            titleProps={{ 'data-testid': 'custom-title' }}
          />,
        );

        expect(screen.getByTestId('custom-title')).toBeInTheDocument();
      });
    });

    describe('when description is provided', () => {
      it('renders description as string', () => {
        render(<HeaderSubpage title="Title" description="Test Description" />);

        expect(screen.getByText('Test Description')).toBeInTheDocument();
      });

      it('renders description as node', () => {
        render(
          <HeaderSubpage
            title="Title"
            description={<span>Custom Description Node</span>}
          />,
        );

        expect(screen.getByText('Custom Description Node')).toBeInTheDocument();
      });

      it('applies descriptionProps to string description', () => {
        render(
          <HeaderSubpage
            title="Title"
            description="Test Description"
            descriptionProps={{ 'data-testid': 'custom-description' }}
          />,
        );

        expect(screen.getByTestId('custom-description')).toBeInTheDocument();
      });
    });

    describe('when avatar is provided', () => {
      it('renders avatar', () => {
        render(
          <HeaderSubpage
            avatar={<span data-testid="avatar">Avatar</span>}
            title="Title"
          />,
        );

        expect(screen.getByTestId('avatar')).toBeInTheDocument();
      });
    });

    describe('when titleEndAccessory is provided', () => {
      it('renders titleEndAccessory after title', () => {
        render(
          <HeaderSubpage
            title="Title"
            titleEndAccessory={<span data-testid="badge">Badge</span>}
          />,
        );

        expect(screen.getByTestId('badge')).toBeInTheDocument();
        expect(screen.getByText('Title')).toBeInTheDocument();
      });

      it('renders titleEndAccessory without title when description is provided', () => {
        render(
          <HeaderSubpage
            description="Description"
            titleEndAccessory={<span data-testid="badge">Badge</span>}
          />,
        );

        expect(screen.getByTestId('badge')).toBeInTheDocument();
        expect(screen.getByText('Description')).toBeInTheDocument();
      });
    });

    describe('when data-testid is provided', () => {
      it('forwards data-testid to root element', () => {
        render(<HeaderSubpage title="Title" data-testid={CONTAINER_TEST_ID} />);

        expect(screen.getByTestId(CONTAINER_TEST_ID)).toBeInTheDocument();
      });
    });
  });

  describe('flex spacer behavior', () => {
    it('maintains layout when no identity content is provided', () => {
      render(
        <HeaderSubpage
          onBack={jest.fn()}
          onClose={jest.fn()}
          data-testid={CONTAINER_TEST_ID}
        />,
      );

      const backButton = screen.getByRole('button', { name: 'Go back' });
      const closeButton = screen.getByRole('button', { name: 'Close' });
      expect(backButton).toBeInTheDocument();
      expect(closeButton).toBeInTheDocument();
    });
  });

  describe('resolvedStartAccessory', () => {
    describe('when onBack is provided', () => {
      it('renders back ButtonIcon', () => {
        render(
          <HeaderSubpage
            title="Title"
            onBack={jest.fn()}
            backButtonProps={{ 'data-testid': BACK_BUTTON_TEST_ID }}
          />,
        );

        expect(screen.getByTestId(BACK_BUTTON_TEST_ID)).toBeInTheDocument();
      });

      it('calls onBack on click', () => {
        const onBack = jest.fn();
        render(
          <HeaderSubpage
            title="Title"
            onBack={onBack}
            backButtonProps={{ 'data-testid': BACK_BUTTON_TEST_ID }}
          />,
        );

        fireEvent.click(screen.getByTestId(BACK_BUTTON_TEST_ID));

        expect(onBack).toHaveBeenCalledTimes(1);
      });
    });

    describe('when backButtonProps is provided', () => {
      it('renders back ButtonIcon', () => {
        render(
          <HeaderSubpage
            title="Title"
            backButtonProps={{
              onClick: jest.fn(),
              'data-testid': BACK_BUTTON_TEST_ID,
            }}
          />,
        );

        expect(screen.getByTestId(BACK_BUTTON_TEST_ID)).toBeInTheDocument();
      });

      it('calls backButtonProps.onClick on click', () => {
        const onClick = jest.fn();
        render(
          <HeaderSubpage
            title="Title"
            backButtonProps={{ onClick, 'data-testid': BACK_BUTTON_TEST_ID }}
          />,
        );

        fireEvent.click(screen.getByTestId(BACK_BUTTON_TEST_ID));

        expect(onClick).toHaveBeenCalledTimes(1);
      });

      it('prefers backButtonProps.onClick over onBack', () => {
        const onBack = jest.fn();
        const onClick = jest.fn();
        render(
          <HeaderSubpage
            title="Title"
            onBack={onBack}
            backButtonProps={{ onClick, 'data-testid': BACK_BUTTON_TEST_ID }}
          />,
        );

        fireEvent.click(screen.getByTestId(BACK_BUTTON_TEST_ID));

        expect(onClick).toHaveBeenCalledTimes(1);
        expect(onBack).not.toHaveBeenCalled();
      });

      it('uses custom ariaLabel when provided', () => {
        render(
          <HeaderSubpage
            title="Title"
            backButtonProps={{
              ariaLabel: 'Navigate back',
              'data-testid': BACK_BUTTON_TEST_ID,
            }}
          />,
        );

        expect(screen.getByTestId(BACK_BUTTON_TEST_ID)).toHaveAttribute(
          'aria-label',
          'Navigate back',
        );
      });

      it('uses default ariaLabel when not provided', () => {
        render(
          <HeaderSubpage
            title="Title"
            onBack={jest.fn()}
            backButtonProps={{ 'data-testid': BACK_BUTTON_TEST_ID }}
          />,
        );

        expect(screen.getByTestId(BACK_BUTTON_TEST_ID)).toHaveAttribute(
          'aria-label',
          'Go back',
        );
      });
    });

    describe('when startButtonIconProps is provided', () => {
      it('renders custom start ButtonIcon', () => {
        render(
          <HeaderSubpage
            title="Title"
            startButtonIconProps={{
              iconName: IconName.Menu,
              ariaLabel: 'Menu',
              onClick: jest.fn(),
              'data-testid': CUSTOM_START_BUTTON_TEST_ID,
            }}
          />,
        );

        expect(
          screen.getByTestId(CUSTOM_START_BUTTON_TEST_ID),
        ).toBeInTheDocument();
      });

      it('takes priority over onBack', () => {
        render(
          <HeaderSubpage
            title="Title"
            onBack={jest.fn()}
            backButtonProps={{ 'data-testid': BACK_BUTTON_TEST_ID }}
            startButtonIconProps={{
              iconName: IconName.Menu,
              ariaLabel: 'Menu',
              onClick: jest.fn(),
              'data-testid': CUSTOM_START_BUTTON_TEST_ID,
            }}
          />,
        );

        expect(
          screen.getByTestId(CUSTOM_START_BUTTON_TEST_ID),
        ).toBeInTheDocument();
        expect(
          screen.queryByTestId(BACK_BUTTON_TEST_ID),
        ).not.toBeInTheDocument();
      });
    });

    describe('when startAccessory is provided', () => {
      it('takes priority over startButtonIconProps', () => {
        render(
          <HeaderSubpage
            title="Title"
            startAccessory={
              <span data-testid={START_ACCESSORY_TEST_ID}>Start</span>
            }
            startButtonIconProps={{
              iconName: IconName.Menu,
              ariaLabel: 'Menu',
              onClick: jest.fn(),
              'data-testid': CUSTOM_START_BUTTON_TEST_ID,
            }}
          />,
        );

        expect(screen.getByTestId(START_ACCESSORY_TEST_ID)).toBeInTheDocument();
        expect(
          screen.queryByTestId(CUSTOM_START_BUTTON_TEST_ID),
        ).not.toBeInTheDocument();
      });
    });

    describe('when no start props are provided', () => {
      it('omits start accessory', () => {
        render(<HeaderSubpage title="Title" />);

        expect(
          screen.queryByTestId(BACK_BUTTON_TEST_ID),
        ).not.toBeInTheDocument();
        expect(
          screen.queryByTestId(CUSTOM_START_BUTTON_TEST_ID),
        ).not.toBeInTheDocument();
        expect(
          screen.queryByTestId(START_ACCESSORY_TEST_ID),
        ).not.toBeInTheDocument();
      });
    });
  });

  describe('resolvedEndAccessory', () => {
    describe('when onClose is provided', () => {
      it('renders close ButtonIcon', () => {
        render(
          <HeaderSubpage
            title="Title"
            onClose={jest.fn()}
            closeButtonProps={{ 'data-testid': CLOSE_BUTTON_TEST_ID }}
          />,
        );

        expect(screen.getByTestId(CLOSE_BUTTON_TEST_ID)).toBeInTheDocument();
      });

      it('calls onClose on click', () => {
        const onClose = jest.fn();
        render(
          <HeaderSubpage
            title="Title"
            onClose={onClose}
            closeButtonProps={{ 'data-testid': CLOSE_BUTTON_TEST_ID }}
          />,
        );

        fireEvent.click(screen.getByTestId(CLOSE_BUTTON_TEST_ID));

        expect(onClose).toHaveBeenCalledTimes(1);
      });

      it('renders close ButtonIcon without closeButtonProps', () => {
        const onClose = jest.fn();
        render(<HeaderSubpage title="Title" onClose={onClose} />);

        const closeButton = screen.getByRole('button', { name: 'Close' });
        expect(closeButton).toBeInTheDocument();

        fireEvent.click(closeButton);
        expect(onClose).toHaveBeenCalledTimes(1);
      });
    });

    describe('when closeButtonProps is provided', () => {
      it('renders close ButtonIcon', () => {
        render(
          <HeaderSubpage
            title="Title"
            closeButtonProps={{
              onClick: jest.fn(),
              'data-testid': CLOSE_BUTTON_TEST_ID,
            }}
          />,
        );

        expect(screen.getByTestId(CLOSE_BUTTON_TEST_ID)).toBeInTheDocument();
      });

      it('prefers closeButtonProps.onClick over onClose', () => {
        const onClose = jest.fn();
        const onClick = jest.fn();
        render(
          <HeaderSubpage
            title="Title"
            onClose={onClose}
            closeButtonProps={{ onClick, 'data-testid': CLOSE_BUTTON_TEST_ID }}
          />,
        );

        fireEvent.click(screen.getByTestId(CLOSE_BUTTON_TEST_ID));

        expect(onClick).toHaveBeenCalledTimes(1);
        expect(onClose).not.toHaveBeenCalled();
      });

      it('uses custom ariaLabel when provided', () => {
        render(
          <HeaderSubpage
            title="Title"
            closeButtonProps={{
              ariaLabel: 'Dismiss',
              'data-testid': CLOSE_BUTTON_TEST_ID,
            }}
          />,
        );

        expect(screen.getByTestId(CLOSE_BUTTON_TEST_ID)).toHaveAttribute(
          'aria-label',
          'Dismiss',
        );
      });

      it('uses default ariaLabel when not provided', () => {
        render(
          <HeaderSubpage
            title="Title"
            onClose={jest.fn()}
            closeButtonProps={{ 'data-testid': CLOSE_BUTTON_TEST_ID }}
          />,
        );

        expect(screen.getByTestId(CLOSE_BUTTON_TEST_ID)).toHaveAttribute(
          'aria-label',
          'Close',
        );
      });
    });

    describe('when endButtonIconProps is provided', () => {
      it('renders end ButtonIcons', () => {
        render(
          <HeaderSubpage
            title="Title"
            endButtonIconProps={[
              {
                iconName: IconName.Search,
                ariaLabel: 'Search',
                onClick: jest.fn(),
                'data-testid': END_SEARCH_BUTTON_TEST_ID,
              },
            ]}
          />,
        );

        expect(
          screen.getByTestId(END_SEARCH_BUTTON_TEST_ID),
        ).toBeInTheDocument();
      });

      it('appends icons after close shortcut', () => {
        render(
          <HeaderSubpage
            title="Title"
            onClose={jest.fn()}
            closeButtonProps={{ 'data-testid': CLOSE_BUTTON_TEST_ID }}
            endButtonIconProps={[
              {
                iconName: IconName.Search,
                ariaLabel: 'Search',
                onClick: jest.fn(),
                'data-testid': END_SEARCH_BUTTON_TEST_ID,
              },
            ]}
          />,
        );

        expect(screen.getByTestId(CLOSE_BUTTON_TEST_ID)).toBeInTheDocument();
        expect(
          screen.getByTestId(END_SEARCH_BUTTON_TEST_ID),
        ).toBeInTheDocument();
      });

      it('omits end accessory when array is empty', () => {
        render(<HeaderSubpage title="Title" endButtonIconProps={[]} />);

        expect(
          screen.queryByTestId(CLOSE_BUTTON_TEST_ID),
        ).not.toBeInTheDocument();
        expect(
          screen.queryByTestId(END_SEARCH_BUTTON_TEST_ID),
        ).not.toBeInTheDocument();
      });
    });

    describe('when endAccessory is provided', () => {
      it('takes priority over close shortcuts', () => {
        render(
          <HeaderSubpage
            title="Title"
            onClose={jest.fn()}
            closeButtonProps={{ 'data-testid': CLOSE_BUTTON_TEST_ID }}
            endAccessory={<span data-testid={END_ACCESSORY_TEST_ID}>End</span>}
          />,
        );

        expect(screen.getByTestId(END_ACCESSORY_TEST_ID)).toBeInTheDocument();
        expect(
          screen.queryByTestId(CLOSE_BUTTON_TEST_ID),
        ).not.toBeInTheDocument();
      });
    });

    describe('when no end props are provided', () => {
      it('omits end accessory', () => {
        render(<HeaderSubpage title="Title" />);

        expect(
          screen.queryByTestId(CLOSE_BUTTON_TEST_ID),
        ).not.toBeInTheDocument();
        expect(
          screen.queryByTestId(END_ACCESSORY_TEST_ID),
        ).not.toBeInTheDocument();
      });
    });
  });

  describe('className', () => {
    it('merges caller classes with default classes', () => {
      render(
        <HeaderSubpage
          title="Title"
          className="border-b border-muted"
          data-testid={CONTAINER_TEST_ID}
        />,
      );

      const container = screen.getByTestId(CONTAINER_TEST_ID);
      expect(container).toHaveClass(
        'min-h-14',
        'px-2',
        'border-b',
        'border-muted',
      );
    });
  });

  describe('accessoryGap', () => {
    it('uses default gap of 2 (8px)', () => {
      render(
        <HeaderSubpage
          title="Title"
          onBack={jest.fn()}
          data-testid={CONTAINER_TEST_ID}
        />,
      );

      const container = screen.getByTestId(CONTAINER_TEST_ID);
      expect(container).toHaveClass('gap-2');
    });

    it('allows custom gap value', () => {
      render(
        <HeaderSubpage
          title="Title"
          onBack={jest.fn()}
          accessoryGap={4}
          data-testid={CONTAINER_TEST_ID}
        />,
      );

      const container = screen.getByTestId(CONTAINER_TEST_ID);
      expect(container).toHaveClass('gap-4');
    });
  });

  describe('style', () => {
    it('applies inline styles to root element', () => {
      const customStyle = { backgroundColor: 'red' };
      render(
        <HeaderSubpage
          title="Title"
          style={customStyle}
          data-testid={CONTAINER_TEST_ID}
        />,
      );

      expect(screen.getByTestId(CONTAINER_TEST_ID)).toHaveStyle(customStyle);
    });
  });

  describe('ref forwarding', () => {
    it('forwards ref to root element', () => {
      const ref = createRef<HTMLDivElement>();
      render(
        <HeaderSubpage
          title="Title"
          ref={ref}
          data-testid={CONTAINER_TEST_ID}
        />,
      );

      expect(ref.current).toBe(screen.getByTestId(CONTAINER_TEST_ID));
    });
  });
});
