import { render, screen, fireEvent } from '@testing-library/react';
import React, { createRef } from 'react';

import { IconName } from '../Icon';

import { HeaderSubpage } from './HeaderSubpage';

const CONTAINER_TEST_ID = 'header-subpage-container';
const BACK_BUTTON_TEST_ID = 'header-subpage-back-button';
const CLOSE_BUTTON_TEST_ID = 'header-subpage-close-button';
const START_ACCESSORY_TEST_ID = 'header-subpage-start-accessory';
const END_ACCESSORY_TEST_ID = 'header-subpage-end-accessory';
const CUSTOM_START_BUTTON_TEST_ID = 'header-subpage-custom-start-button';
const END_SEARCH_BUTTON_TEST_ID = 'header-subpage-end-search';

describe('HeaderSubpage', () => {
  describe('content', () => {
    describe('when children are provided', () => {
      it('renders children correctly', () => {
        render(<HeaderSubpage>Test Title</HeaderSubpage>);

        expect(screen.getByText('Test Title')).toBeInTheDocument();
      });
    });

    describe('when data-testid is provided', () => {
      it('forwards data-testid to root element', () => {
        render(
          <HeaderSubpage data-testid={CONTAINER_TEST_ID}>
            Test Title
          </HeaderSubpage>,
        );

        expect(screen.getByTestId(CONTAINER_TEST_ID)).toBeInTheDocument();
      });
    });
  });

  describe('resolvedStartAccessory', () => {
    describe('when onBack is provided', () => {
      it('renders back ButtonIcon', () => {
        render(
          <HeaderSubpage
            onBack={jest.fn()}
            backButtonProps={{ 'data-testid': BACK_BUTTON_TEST_ID }}
          >
            Title
          </HeaderSubpage>,
        );

        expect(screen.getByTestId(BACK_BUTTON_TEST_ID)).toBeInTheDocument();
      });

      it('calls onBack on click', () => {
        const onBack = jest.fn();
        render(
          <HeaderSubpage
            onBack={onBack}
            backButtonProps={{ 'data-testid': BACK_BUTTON_TEST_ID }}
          >
            Title
          </HeaderSubpage>,
        );

        fireEvent.click(screen.getByTestId(BACK_BUTTON_TEST_ID));

        expect(onBack).toHaveBeenCalledTimes(1);
      });
    });

    describe('when backButtonProps is provided', () => {
      it('renders back ButtonIcon', () => {
        render(
          <HeaderSubpage
            backButtonProps={{
              onClick: jest.fn(),
              'data-testid': BACK_BUTTON_TEST_ID,
            }}
          >
            Title
          </HeaderSubpage>,
        );

        expect(screen.getByTestId(BACK_BUTTON_TEST_ID)).toBeInTheDocument();
      });

      it('calls backButtonProps.onClick on click', () => {
        const onClick = jest.fn();
        render(
          <HeaderSubpage
            backButtonProps={{ onClick, 'data-testid': BACK_BUTTON_TEST_ID }}
          >
            Title
          </HeaderSubpage>,
        );

        fireEvent.click(screen.getByTestId(BACK_BUTTON_TEST_ID));

        expect(onClick).toHaveBeenCalledTimes(1);
      });

      it('prefers backButtonProps.onClick over onBack', () => {
        const onBack = jest.fn();
        const onClick = jest.fn();
        render(
          <HeaderSubpage
            onBack={onBack}
            backButtonProps={{ onClick, 'data-testid': BACK_BUTTON_TEST_ID }}
          >
            Title
          </HeaderSubpage>,
        );

        fireEvent.click(screen.getByTestId(BACK_BUTTON_TEST_ID));

        expect(onClick).toHaveBeenCalledTimes(1);
        expect(onBack).not.toHaveBeenCalled();
      });

      it('uses custom ariaLabel when provided', () => {
        render(
          <HeaderSubpage
            backButtonProps={{
              ariaLabel: 'Navigate back',
              'data-testid': BACK_BUTTON_TEST_ID,
            }}
          >
            Title
          </HeaderSubpage>,
        );

        expect(screen.getByTestId(BACK_BUTTON_TEST_ID)).toHaveAttribute(
          'aria-label',
          'Navigate back',
        );
      });

      it('uses default ariaLabel when not provided', () => {
        render(
          <HeaderSubpage
            onBack={jest.fn()}
            backButtonProps={{ 'data-testid': BACK_BUTTON_TEST_ID }}
          >
            Title
          </HeaderSubpage>,
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
            startButtonIconProps={{
              iconName: IconName.Menu,
              ariaLabel: 'Menu',
              onClick: jest.fn(),
              'data-testid': CUSTOM_START_BUTTON_TEST_ID,
            }}
          >
            Title
          </HeaderSubpage>,
        );

        expect(
          screen.getByTestId(CUSTOM_START_BUTTON_TEST_ID),
        ).toBeInTheDocument();
      });

      it('takes priority over onBack', () => {
        render(
          <HeaderSubpage
            onBack={jest.fn()}
            backButtonProps={{ 'data-testid': BACK_BUTTON_TEST_ID }}
            startButtonIconProps={{
              iconName: IconName.Menu,
              ariaLabel: 'Menu',
              onClick: jest.fn(),
              'data-testid': CUSTOM_START_BUTTON_TEST_ID,
            }}
          >
            Title
          </HeaderSubpage>,
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
            startAccessory={
              <span data-testid={START_ACCESSORY_TEST_ID}>Start</span>
            }
            startButtonIconProps={{
              iconName: IconName.Menu,
              ariaLabel: 'Menu',
              onClick: jest.fn(),
              'data-testid': CUSTOM_START_BUTTON_TEST_ID,
            }}
          >
            Title
          </HeaderSubpage>,
        );

        expect(screen.getByTestId(START_ACCESSORY_TEST_ID)).toBeInTheDocument();
        expect(
          screen.queryByTestId(CUSTOM_START_BUTTON_TEST_ID),
        ).not.toBeInTheDocument();
      });
    });

    describe('when no start props are provided', () => {
      it('omits start accessory', () => {
        render(<HeaderSubpage>Title</HeaderSubpage>);

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
            onClose={jest.fn()}
            closeButtonProps={{ 'data-testid': CLOSE_BUTTON_TEST_ID }}
          >
            Title
          </HeaderSubpage>,
        );

        expect(screen.getByTestId(CLOSE_BUTTON_TEST_ID)).toBeInTheDocument();
      });

      it('calls onClose on click', () => {
        const onClose = jest.fn();
        render(
          <HeaderSubpage
            onClose={onClose}
            closeButtonProps={{ 'data-testid': CLOSE_BUTTON_TEST_ID }}
          >
            Title
          </HeaderSubpage>,
        );

        fireEvent.click(screen.getByTestId(CLOSE_BUTTON_TEST_ID));

        expect(onClose).toHaveBeenCalledTimes(1);
      });
    });

    describe('when closeButtonProps is provided', () => {
      it('renders close ButtonIcon', () => {
        render(
          <HeaderSubpage
            closeButtonProps={{
              onClick: jest.fn(),
              'data-testid': CLOSE_BUTTON_TEST_ID,
            }}
          >
            Title
          </HeaderSubpage>,
        );

        expect(screen.getByTestId(CLOSE_BUTTON_TEST_ID)).toBeInTheDocument();
      });

      it('prefers closeButtonProps.onClick over onClose', () => {
        const onClose = jest.fn();
        const onClick = jest.fn();
        render(
          <HeaderSubpage
            onClose={onClose}
            closeButtonProps={{ onClick, 'data-testid': CLOSE_BUTTON_TEST_ID }}
          >
            Title
          </HeaderSubpage>,
        );

        fireEvent.click(screen.getByTestId(CLOSE_BUTTON_TEST_ID));

        expect(onClick).toHaveBeenCalledTimes(1);
        expect(onClose).not.toHaveBeenCalled();
      });

      it('uses custom ariaLabel when provided', () => {
        render(
          <HeaderSubpage
            closeButtonProps={{
              ariaLabel: 'Dismiss',
              'data-testid': CLOSE_BUTTON_TEST_ID,
            }}
          >
            Title
          </HeaderSubpage>,
        );

        expect(screen.getByTestId(CLOSE_BUTTON_TEST_ID)).toHaveAttribute(
          'aria-label',
          'Dismiss',
        );
      });

      it('uses default ariaLabel when not provided', () => {
        render(
          <HeaderSubpage
            onClose={jest.fn()}
            closeButtonProps={{ 'data-testid': CLOSE_BUTTON_TEST_ID }}
          >
            Title
          </HeaderSubpage>,
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
            endButtonIconProps={[
              {
                iconName: IconName.Search,
                ariaLabel: 'Search',
                onClick: jest.fn(),
                'data-testid': END_SEARCH_BUTTON_TEST_ID,
              },
            ]}
          >
            Title
          </HeaderSubpage>,
        );

        expect(
          screen.getByTestId(END_SEARCH_BUTTON_TEST_ID),
        ).toBeInTheDocument();
      });

      it('appends icons after close shortcut', () => {
        render(
          <HeaderSubpage
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
          >
            Title
          </HeaderSubpage>,
        );

        expect(screen.getByTestId(CLOSE_BUTTON_TEST_ID)).toBeInTheDocument();
        expect(
          screen.getByTestId(END_SEARCH_BUTTON_TEST_ID),
        ).toBeInTheDocument();
      });

      it('omits end accessory when array is empty', () => {
        render(<HeaderSubpage endButtonIconProps={[]}>Title</HeaderSubpage>);

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
            onClose={jest.fn()}
            closeButtonProps={{ 'data-testid': CLOSE_BUTTON_TEST_ID }}
            endAccessory={<span data-testid={END_ACCESSORY_TEST_ID}>End</span>}
          >
            Title
          </HeaderSubpage>,
        );

        expect(screen.getByTestId(END_ACCESSORY_TEST_ID)).toBeInTheDocument();
        expect(
          screen.queryByTestId(CLOSE_BUTTON_TEST_ID),
        ).not.toBeInTheDocument();
      });
    });

    describe('when no end props are provided', () => {
      it('omits end accessory', () => {
        render(<HeaderSubpage>Title</HeaderSubpage>);

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
          className="border-b border-muted"
          data-testid={CONTAINER_TEST_ID}
        >
          Title
        </HeaderSubpage>,
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
        <HeaderSubpage onBack={jest.fn()} data-testid={CONTAINER_TEST_ID}>
          Title
        </HeaderSubpage>,
      );

      const container = screen.getByTestId(CONTAINER_TEST_ID);
      expect(container).toHaveClass('gap-2');
    });

    it('allows custom gap value', () => {
      render(
        <HeaderSubpage
          onBack={jest.fn()}
          accessoryGap={4}
          data-testid={CONTAINER_TEST_ID}
        >
          Title
        </HeaderSubpage>,
      );

      const container = screen.getByTestId(CONTAINER_TEST_ID);
      expect(container).toHaveClass('gap-4');
    });
  });

  describe('style', () => {
    it('applies inline styles to root element', () => {
      const customStyle = { backgroundColor: 'red' };
      render(
        <HeaderSubpage style={customStyle} data-testid={CONTAINER_TEST_ID}>
          Title
        </HeaderSubpage>,
      );

      expect(screen.getByTestId(CONTAINER_TEST_ID)).toHaveStyle(customStyle);
    });
  });

  describe('ref forwarding', () => {
    it('forwards ref to root element', () => {
      const ref = createRef<HTMLDivElement>();
      render(
        <HeaderSubpage ref={ref} data-testid={CONTAINER_TEST_ID}>
          Title
        </HeaderSubpage>,
      );

      expect(ref.current).toBe(screen.getByTestId(CONTAINER_TEST_ID));
    });
  });
});
