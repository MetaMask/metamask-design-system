import { act, fireEvent, render, screen } from '@testing-library/react';
import React, { createRef, StrictMode } from 'react';

import { ModalBody } from '../ModalBody';
import { ModalContent } from '../ModalContent';
import { MODAL_CONTENT_IGNORE_OUTSIDE_CLICK_ATTR } from '../ModalContent/ModalContent.constants';
import { ModalHeader } from '../ModalHeader';
import { ModalOverlay } from '../ModalOverlay';

import { Modal } from './Modal';
import { useModalContext } from './Modal.context';

// Emulates the browser's Escape behavior: dispatches a cancelable `cancel`
// event on the dialog and, unless it was prevented, closes the dialog.
const pressEscape = (dialog: HTMLDialogElement) => {
  const event = new Event('cancel', { cancelable: true });
  act(() => {
    dialog.dispatchEvent(event);
    if (!event.defaultPrevented) {
      dialog.close();
    }
  });
  return event;
};

describe('Modal', () => {
  it('renders children when isOpen is true', () => {
    render(
      <Modal isOpen onClose={jest.fn()}>
        <div data-testid="child">modal content</div>
      </Modal>,
    );
    const child = screen.getByTestId('child');
    expect(child).toBeInTheDocument();
    expect(child).toHaveTextContent('modal content');
  });

  it('renders nothing when isOpen is false', () => {
    render(
      <Modal isOpen={false} onClose={jest.fn()}>
        <div data-testid="child">modal content</div>
      </Modal>,
    );
    expect(screen.queryByTestId('child')).not.toBeInTheDocument();
  });

  it('forwards ref to the underlying dialog element', () => {
    const ref = createRef<HTMLDialogElement>();
    render(
      <Modal ref={ref} isOpen onClose={jest.fn()} data-testid="modal">
        <div>content</div>
      </Modal>,
    );
    expect(ref.current).toBe(screen.getByTestId('modal'));
    expect(ref.current?.tagName).toBe('DIALOG');
  });

  it('forwards className and arbitrary HTML attributes to the dialog element', () => {
    render(
      <Modal
        isOpen
        onClose={jest.fn()}
        className="opacity-50"
        id="modal-id"
        role="presentation"
        data-testid="modal"
      >
        <div>content</div>
      </Modal>,
    );
    const root = screen.getByTestId('modal');
    expect(root).toHaveClass('opacity-50');
    expect(root).toHaveAttribute('id', 'modal-id');
    expect(root).toHaveAttribute('role', 'presentation');
  });

  describe('useModalContext', () => {
    function ContextProbe({ testId }: { testId: string }) {
      const ctx = useModalContext();
      return (
        <div
          data-testid={testId}
          data-is-open={String(ctx.isOpen)}
          data-outside={String(ctx.isClosedOnOutsideClick)}
          data-escape={String(ctx.isClosedOnEscapeKey)}
          data-auto-focus={String(ctx.autoFocus)}
          data-restore-focus={String(Boolean(ctx.restoreFocus))}
        />
      );
    }

    it('exposes the configured behavior to descendants', () => {
      const onClose = jest.fn();
      render(
        <Modal
          isOpen
          onClose={onClose}
          isClosedOnOutsideClick={false}
          isClosedOnEscapeKey={false}
          autoFocus={false}
          restoreFocus
        >
          <ContextProbe testId="probe" />
        </Modal>,
      );
      const probe = screen.getByTestId('probe');
      expect(probe).toHaveAttribute('data-is-open', 'true');
      expect(probe).toHaveAttribute('data-outside', 'false');
      expect(probe).toHaveAttribute('data-escape', 'false');
      expect(probe).toHaveAttribute('data-auto-focus', 'false');
      expect(probe).toHaveAttribute('data-restore-focus', 'true');
    });

    it('defaults isClosedOnOutsideClick / isClosedOnEscapeKey / autoFocus to true', () => {
      render(
        <Modal isOpen onClose={jest.fn()}>
          <ContextProbe testId="probe" />
        </Modal>,
      );
      const probe = screen.getByTestId('probe');
      expect(probe).toHaveAttribute('data-outside', 'true');
      expect(probe).toHaveAttribute('data-escape', 'true');
      expect(probe).toHaveAttribute('data-auto-focus', 'true');
    });

    it('exposes the onClose callback to descendants', () => {
      const onClose = jest.fn();
      function CloseTrigger() {
        const ctx = useModalContext();
        return (
          <button type="button" onClick={ctx.onClose}>
            Close
          </button>
        );
      }
      render(
        <Modal isOpen onClose={onClose}>
          <CloseTrigger />
        </Modal>,
      );
      fireEvent.click(screen.getByRole('button', { name: 'Close' }));
      expect(onClose).toHaveBeenCalledTimes(1);
    });

    it('throws when used outside of a Modal subtree', () => {
      function Detached() {
        useModalContext();
        return null;
      }
      // Suppress the React error log emitted by the thrown error.
      const errorSpy = jest
        .spyOn(console, 'error')
        .mockImplementation(() => undefined);
      expect(() => render(<Detached />)).toThrow(
        /useModalContext must be used within a Modal/u,
      );
      errorSpy.mockRestore();
    });
  });

  describe('native dialog behavior', () => {
    it('opens the dialog as modal and resets the default dialog box styles', () => {
      render(
        <Modal isOpen onClose={jest.fn()} data-testid="modal">
          <div>content</div>
        </Modal>,
      );
      const dialog = screen.getByTestId('modal');
      expect(dialog).toHaveAttribute('open');
      expect(dialog).toHaveClass(
        'fixed',
        'inset-0',
        'm-0',
        'p-0',
        'border-0',
        'bg-transparent',
        'size-full',
        'max-h-none',
        'max-w-none',
        'backdrop:bg-overlay-default',
      );
    });

    it('does not throw when the dialog is already open (StrictMode double effect)', () => {
      expect(() =>
        render(
          <StrictMode>
            <Modal isOpen onClose={jest.fn()} data-testid="modal">
              <div>content</div>
            </Modal>
          </StrictMode>,
        ),
      ).not.toThrow();
      expect(screen.getByTestId('modal')).toHaveAttribute('open');
    });

    it('falls back to the open attribute when showModal is unavailable', () => {
      const descriptor = Object.getOwnPropertyDescriptor(
        HTMLDialogElement.prototype,
        'showModal',
      ) as PropertyDescriptor;
      Object.defineProperty(HTMLDialogElement.prototype, 'showModal', {
        ...descriptor,
        value: undefined,
      });
      try {
        render(
          <Modal isOpen onClose={jest.fn()} data-testid="modal">
            <div>content</div>
          </Modal>,
        );
        expect(screen.getByTestId('modal')).toHaveAttribute('open');
      } finally {
        Object.defineProperty(
          HTMLDialogElement.prototype,
          'showModal',
          descriptor,
        );
      }
    });

    it('supports callback refs', () => {
      const ref = jest.fn();
      render(
        <Modal ref={ref} isOpen onClose={jest.fn()}>
          <div>content</div>
        </Modal>,
      );
      expect(ref).toHaveBeenCalledWith(expect.any(HTMLDialogElement));
    });

    it('ignores a consumer-supplied open prop', () => {
      render(
        <Modal
          isOpen
          onClose={jest.fn()}
          data-testid="modal"
          {...({ open: false } as object)}
        >
          <div>content</div>
        </Modal>,
      );
      expect(screen.getByTestId('modal')).toHaveAttribute('open');
    });
  });

  describe('Escape key', () => {
    it('calls onClose and keeps the dialog open until isOpen changes', () => {
      const onClose = jest.fn();
      render(
        <Modal isOpen onClose={onClose} data-testid="modal">
          <div>content</div>
        </Modal>,
      );
      const dialog = screen.getByTestId('modal') as HTMLDialogElement;
      const event = pressEscape(dialog);

      expect(onClose).toHaveBeenCalledTimes(1);
      expect(event.defaultPrevented).toBe(true);
      expect(dialog).toHaveAttribute('open');
    });

    it('does not call onClose and keeps the dialog open when isClosedOnEscapeKey is false', () => {
      const onClose = jest.fn();
      render(
        <Modal
          isOpen
          onClose={onClose}
          isClosedOnEscapeKey={false}
          data-testid="modal"
        >
          <div>content</div>
        </Modal>,
      );
      const dialog = screen.getByTestId('modal') as HTMLDialogElement;
      const event = pressEscape(dialog);

      expect(onClose).not.toHaveBeenCalled();
      expect(event.defaultPrevented).toBe(true);
      expect(dialog).toHaveAttribute('open');
    });

    it('handles the Escape keydown itself so the browser never starts a native close', () => {
      const onClose = jest.fn();
      render(
        <Modal isOpen onClose={onClose} data-testid="modal">
          <button type="button">inside</button>
        </Modal>,
      );
      const dialog = screen.getByTestId('modal');
      const notPrevented = fireEvent.keyDown(dialog, { key: 'Escape' });

      expect(notPrevented).toBe(false);
      expect(onClose).toHaveBeenCalledTimes(1);
      expect(dialog).toHaveAttribute('open');
    });

    it('swallows the Escape keydown without calling onClose when isClosedOnEscapeKey is false', () => {
      const onClose = jest.fn();
      render(
        <Modal
          isOpen
          onClose={onClose}
          isClosedOnEscapeKey={false}
          data-testid="modal"
        >
          <div>content</div>
        </Modal>,
      );
      const notPrevented = fireEvent.keyDown(screen.getByTestId('modal'), {
        key: 'Escape',
      });

      expect(notPrevented).toBe(false);
      expect(onClose).not.toHaveBeenCalled();
    });

    it('ignores other keys and Escape presses already handled by a descendant', () => {
      const onClose = jest.fn();
      const onKeyDown = jest.fn();
      render(
        <Modal isOpen onClose={onClose} onKeyDown={onKeyDown}>
          <input
            aria-label="field"
            onKeyDown={(event) => event.preventDefault()}
          />
          <button type="button">inside</button>
        </Modal>,
      );
      fireEvent.keyDown(screen.getByRole('button', { name: 'inside' }), {
        key: 'Enter',
      });
      fireEvent.keyDown(screen.getByRole('textbox', { name: 'field' }), {
        key: 'Escape',
      });

      expect(onClose).not.toHaveBeenCalled();
      expect(onKeyDown).toHaveBeenCalledTimes(2);
    });

    it('still calls a consumer onCancel handler', () => {
      const onCancel = jest.fn();
      render(
        <Modal
          isOpen
          onClose={jest.fn()}
          onCancel={onCancel}
          data-testid="modal"
        >
          <div>content</div>
        </Modal>,
      );
      pressEscape(screen.getByTestId('modal') as HTMLDialogElement);
      expect(onCancel).toHaveBeenCalledTimes(1);
    });

    it('calls onClose when the dialog is closed natively', () => {
      const onClose = jest.fn();
      render(
        <Modal isOpen onClose={onClose} data-testid="modal">
          <form method="dialog">
            <button type="submit">Done</button>
          </form>
        </Modal>,
      );
      act(() => {
        (screen.getByTestId('modal') as HTMLDialogElement).close();
      });
      expect(onClose).toHaveBeenCalledTimes(1);
    });
  });

  describe('close and reopen', () => {
    it('handles Escape and onClose after the modal is closed and reopened', () => {
      const onClose = jest.fn();
      const { rerender } = render(
        <Modal isOpen onClose={onClose} data-testid="modal">
          <div>content</div>
        </Modal>,
      );
      rerender(
        <Modal isOpen={false} onClose={onClose} data-testid="modal">
          <div>content</div>
        </Modal>,
      );
      expect(screen.queryByTestId('modal')).not.toBeInTheDocument();

      rerender(
        <Modal isOpen onClose={onClose} data-testid="modal">
          <div>content</div>
        </Modal>,
      );
      const dialog = screen.getByTestId('modal') as HTMLDialogElement;
      expect(dialog).toHaveAttribute('open');

      const event = pressEscape(dialog);
      expect(event.defaultPrevented).toBe(true);
      expect(onClose).toHaveBeenCalledTimes(1);

      fireEvent.click(dialog);
      expect(onClose).toHaveBeenCalledTimes(2);
    });
  });

  describe('focus management', () => {
    const renderWithTrigger = (
      modalProps: Partial<React.ComponentProps<typeof Modal>> = {},
      isOpen = true,
    ) => (
      <>
        <button type="button">trigger</button>
        <Modal isOpen={isOpen} onClose={jest.fn()} {...modalProps}>
          <button type="button">first</button>
          <button type="button">second</button>
        </Modal>
      </>
    );

    it('focuses the first focusable element by default', () => {
      render(renderWithTrigger());
      expect(screen.getByRole('button', { name: 'first' })).toHaveFocus();
    });

    it('focuses the dialog itself instead of its content when autoFocus is false', () => {
      render(
        renderWithTrigger({
          autoFocus: false,
          'data-testid': 'modal',
        } as object),
      );
      expect(screen.getByTestId('modal')).toHaveFocus();
      expect(screen.getByRole('button', { name: 'first' })).not.toHaveFocus();
    });

    it('focuses initialFocusRef even when autoFocus is false', () => {
      const ref = createRef<HTMLButtonElement>();
      render(
        <Modal
          isOpen
          onClose={jest.fn()}
          autoFocus={false}
          initialFocusRef={ref}
        >
          <button type="button">first</button>
          <button type="button" ref={ref}>
            second
          </button>
        </Modal>,
      );
      expect(screen.getByRole('button', { name: 'second' })).toHaveFocus();
    });

    it('restores focus to the opener when restoreFocus is true', () => {
      const { rerender } = render(
        <>
          <button type="button">trigger</button>
          <Modal isOpen={false} onClose={jest.fn()} restoreFocus>
            <button type="button">first</button>
          </Modal>
        </>,
      );
      const trigger = screen.getByRole('button', { name: 'trigger' });
      trigger.focus();

      rerender(
        <>
          <button type="button">trigger</button>
          <Modal isOpen onClose={jest.fn()} restoreFocus>
            <button type="button">first</button>
          </Modal>
        </>,
      );
      expect(screen.getByRole('button', { name: 'first' })).toHaveFocus();

      rerender(
        <>
          <button type="button">trigger</button>
          <Modal isOpen={false} onClose={jest.fn()} restoreFocus>
            <button type="button">first</button>
          </Modal>
        </>,
      );
      expect(trigger).toHaveFocus();
    });

    it('does not restore focus when restoreFocus is not set', () => {
      const { rerender } = render(renderWithTrigger({}, false));
      const trigger = screen.getByRole('button', { name: 'trigger' });
      trigger.focus();

      rerender(renderWithTrigger({}, true));
      rerender(renderWithTrigger({}, false));
      expect(trigger).not.toHaveFocus();
    });

    it('does not restore focus to an opener that was removed from the DOM', () => {
      const trigger = document.createElement('button');
      document.body.appendChild(trigger);
      trigger.focus();
      const focusSpy = jest.spyOn(trigger, 'focus');

      const { rerender } = render(
        <Modal isOpen onClose={jest.fn()} restoreFocus>
          <button type="button">first</button>
        </Modal>,
      );
      focusSpy.mockClear();
      document.body.removeChild(trigger);
      rerender(
        <Modal isOpen={false} onClose={jest.fn()} restoreFocus>
          <button type="button">first</button>
        </Modal>,
      );
      expect(focusSpy).not.toHaveBeenCalled();
    });

    it('does not restore focus when there was no previously focused element', () => {
      const activeSpy = jest
        .spyOn(document, 'activeElement', 'get')
        .mockReturnValue(null);
      const { rerender } = render(
        <Modal isOpen onClose={jest.fn()} restoreFocus>
          <button type="button">first</button>
        </Modal>,
      );
      expect(() =>
        rerender(
          <Modal isOpen={false} onClose={jest.fn()} restoreFocus>
            <button type="button">first</button>
          </Modal>,
        ),
      ).not.toThrow();
      activeSpy.mockRestore();
    });

    it('focuses finalFocusRef on close, taking precedence over restoreFocus', () => {
      const finalRef = createRef<HTMLButtonElement>();
      const tree = (isOpen: boolean) => (
        <>
          <button type="button">trigger</button>
          <button type="button" ref={finalRef}>
            final
          </button>
          <Modal
            isOpen={isOpen}
            onClose={jest.fn()}
            restoreFocus
            finalFocusRef={finalRef}
          >
            <button type="button">first</button>
          </Modal>
        </>
      );
      const { rerender } = render(tree(false));
      screen.getByRole('button', { name: 'trigger' }).focus();
      rerender(tree(true));
      rerender(tree(false));
      expect(finalRef.current).toHaveFocus();
    });

    it('does not re-run focus handling when unrelated props change while open', () => {
      const { rerender } = render(renderWithTrigger({}, true));
      screen.getByRole('button', { name: 'second' }).focus();
      rerender(renderWithTrigger({ className: 'opacity-50' }, true));
      expect(screen.getByRole('button', { name: 'second' })).toHaveFocus();
    });
  });

  describe('outside click', () => {
    it('calls onClose when the dialog (backdrop area) is clicked', () => {
      const onClose = jest.fn();
      render(
        <Modal isOpen onClose={onClose} data-testid="modal">
          <button type="button">inside</button>
        </Modal>,
      );
      fireEvent.click(screen.getByRole('button', { name: 'inside' }));
      expect(onClose).not.toHaveBeenCalled();

      fireEvent.click(screen.getByTestId('modal'));
      expect(onClose).toHaveBeenCalledTimes(1);
    });

    it('does not call onClose when isClosedOnOutsideClick is false', () => {
      const onClose = jest.fn();
      render(
        <Modal
          isOpen
          onClose={onClose}
          isClosedOnOutsideClick={false}
          data-testid="modal"
        >
          <ModalOverlay data-testid="overlay" />
        </Modal>,
      );
      fireEvent.click(screen.getByTestId('modal'));
      fireEvent.click(screen.getByTestId('overlay'));
      expect(onClose).not.toHaveBeenCalled();
    });

    it('calls onClose when ModalOverlay or the ModalContent wrapper is clicked', () => {
      const onClose = jest.fn();
      render(
        <Modal isOpen onClose={onClose}>
          <ModalOverlay data-testid="overlay" />
          <ModalContent data-testid="wrapper">
            <button type="button">inside</button>
          </ModalContent>
        </Modal>,
      );
      fireEvent.click(screen.getByTestId('overlay'));
      expect(onClose).toHaveBeenCalledTimes(1);

      fireEvent.click(screen.getByTestId('wrapper'));
      expect(onClose).toHaveBeenCalledTimes(2);

      fireEvent.click(screen.getByRole('button', { name: 'inside' }));
      expect(onClose).toHaveBeenCalledTimes(2);
    });

    it('does not close when a press starts inside the content and ends outside', () => {
      const onClose = jest.fn();
      render(
        <Modal isOpen onClose={onClose} data-testid="modal">
          <button type="button">inside</button>
        </Modal>,
      );
      fireEvent.mouseDown(screen.getByRole('button', { name: 'inside' }));
      fireEvent.click(screen.getByTestId('modal'));
      expect(onClose).not.toHaveBeenCalled();
    });

    it('closes when the press starts and ends on the backdrop area', () => {
      const onClose = jest.fn();
      render(
        <Modal isOpen onClose={onClose} data-testid="modal">
          <button type="button">inside</button>
        </Modal>,
      );
      const dialog = screen.getByTestId('modal');
      fireEvent.mouseDown(dialog);
      fireEvent.click(dialog);
      expect(onClose).toHaveBeenCalledTimes(1);
    });

    it('ignores clicks on elements opting out via the data attribute', () => {
      const onClose = jest.fn();
      render(
        <Modal isOpen onClose={onClose}>
          <ModalOverlay data-testid="overlay" />
          <div
            data-testid="optout"
            {...{ [MODAL_CONTENT_IGNORE_OUTSIDE_CLICK_ATTR]: '' }}
          >
            <button type="button">popover item</button>
          </div>
        </Modal>,
      );
      fireEvent.click(screen.getByRole('button', { name: 'popover item' }));
      expect(onClose).not.toHaveBeenCalled();
    });

    it('calls consumer onClick and onMouseDown handlers', () => {
      const onClick = jest.fn();
      const onMouseDown = jest.fn();
      render(
        <Modal
          isOpen
          onClose={jest.fn()}
          onClick={onClick}
          onMouseDown={onMouseDown}
          data-testid="modal"
        >
          <div>content</div>
        </Modal>,
      );
      fireEvent.mouseDown(screen.getByTestId('modal'));
      fireEvent.click(screen.getByTestId('modal'));
      expect(onMouseDown).toHaveBeenCalledTimes(1);
      expect(onClick).toHaveBeenCalledTimes(1);
    });
  });

  describe('accessible name and description', () => {
    it('exposes a single dialog role with no nested dialog or aria-modal duplicates', () => {
      render(
        <Modal isOpen onClose={jest.fn()}>
          <ModalContent>content</ModalContent>
        </Modal>,
      );
      expect(screen.getAllByRole('dialog')).toHaveLength(1);
      expect(screen.getByRole('dialog').tagName).toBe('DIALOG');
      expect(
        document.querySelectorAll('[role="dialog"], [aria-modal]'),
      ).toHaveLength(0);
    });

    it('labels the dialog with ModalHeader and describes it with ModalBody', () => {
      render(
        <Modal isOpen onClose={jest.fn()}>
          <ModalContent>
            <ModalHeader>Title text</ModalHeader>
            <ModalBody>Body text</ModalBody>
          </ModalContent>
        </Modal>,
      );
      const dialog = screen.getByRole('dialog', { name: 'Title text' });
      expect(dialog).toHaveAccessibleDescription('Body text');
    });

    it('does not set aria attributes when there is no header or body', () => {
      render(
        <Modal isOpen onClose={jest.fn()} data-testid="modal">
          <ModalContent>content</ModalContent>
        </Modal>,
      );
      const dialog = screen.getByTestId('modal');
      expect(dialog).not.toHaveAttribute('aria-labelledby');
      expect(dialog).not.toHaveAttribute('aria-describedby');
    });

    it('removes the wiring when the header and body unmount', () => {
      const tree = (showSections: boolean) => (
        <Modal isOpen onClose={jest.fn()} data-testid="modal">
          <ModalContent>
            {showSections && <ModalHeader>Title text</ModalHeader>}
            {showSections && <ModalBody>Body text</ModalBody>}
          </ModalContent>
        </Modal>
      );
      const { rerender } = render(tree(true));
      expect(screen.getByTestId('modal')).toHaveAttribute('aria-labelledby');
      rerender(tree(false));
      expect(screen.getByTestId('modal')).not.toHaveAttribute(
        'aria-labelledby',
      );
      expect(screen.getByTestId('modal')).not.toHaveAttribute(
        'aria-describedby',
      );
    });

    it('lets explicit aria-labelledby / aria-describedby on Modal win', () => {
      render(
        <Modal
          isOpen
          onClose={jest.fn()}
          aria-labelledby="custom-title"
          aria-describedby="custom-description"
          data-testid="modal"
        >
          <ModalContent>
            <ModalHeader>Title text</ModalHeader>
            <ModalBody>Body text</ModalBody>
          </ModalContent>
        </Modal>,
      );
      const dialog = screen.getByTestId('modal');
      expect(dialog).toHaveAttribute('aria-labelledby', 'custom-title');
      expect(dialog).toHaveAttribute('aria-describedby', 'custom-description');
    });
  });
});
