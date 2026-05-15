import { fireEvent, render, screen } from '@testing-library/react';
import React, { createRef } from 'react';

import { Modal } from './Modal';
import { useModalContext } from './Modal.context';

describe('Modal', () => {
  it('renders children inside a portal at document.body when isOpen is true', () => {
    render(
      <Modal isOpen onClose={jest.fn()}>
        <div data-testid="child">modal content</div>
      </Modal>,
    );
    const child = screen.getByTestId('child');
    expect(child).toBeInTheDocument();
    expect(child).toHaveTextContent('modal content');
    // Portal target is document.body, not the test container's mount root.
    expect(document.body.contains(child)).toBe(true);
  });

  it('renders nothing when isOpen is false', () => {
    render(
      <Modal isOpen={false} onClose={jest.fn()}>
        <div data-testid="child">modal content</div>
      </Modal>,
    );
    expect(screen.queryByTestId('child')).not.toBeInTheDocument();
  });

  it('forwards ref to the underlying root div', () => {
    const ref = createRef<HTMLDivElement>();
    render(
      <Modal ref={ref} isOpen onClose={jest.fn()} data-testid="modal">
        <div>content</div>
      </Modal>,
    );
    expect(ref.current).toBe(screen.getByTestId('modal'));
    expect(ref.current?.tagName).toBe('DIV');
  });

  it('forwards className and arbitrary HTML attributes to the root div', () => {
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
});
