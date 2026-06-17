import { fireEvent, render, screen } from '@testing-library/react';
import React, { createRef } from 'react';

import { Modal } from '../Modal';

import { ModalContent } from './ModalContent';
import { MODAL_CONTENT_IGNORE_OUTSIDE_CLICK_ATTR } from './ModalContent.constants';
import { ModalContentSize } from './ModalContent.types';

describe('ModalContent', () => {
  const onClose = jest.fn();

  afterEach(() => {
    onClose.mockReset();
  });

  it('renders children inside the dialog', () => {
    render(
      <Modal isOpen onClose={onClose}>
        <ModalContent data-testid="modal-content">
          <span data-testid="child">hello</span>
        </ModalContent>
      </Modal>,
    );
    expect(screen.getByTestId('child')).toHaveTextContent('hello');
  });

  it('renders the dialog with role="dialog" and aria-modal', () => {
    render(
      <Modal isOpen onClose={onClose}>
        <ModalContent>dialog content</ModalContent>
      </Modal>,
    );
    const dialog = screen.getByRole('dialog');
    expect(dialog).toHaveAttribute('aria-modal', 'true');
    expect(dialog.tagName).toBe('SECTION');
  });

  it('applies the default size (Sm = max-w-[360px]) to the dialog', () => {
    render(
      <Modal isOpen onClose={onClose}>
        <ModalContent modalDialogProps={{ 'data-testid': 'dialog' }}>
          dialog
        </ModalContent>
      </Modal>,
    );
    expect(screen.getByTestId('dialog')).toHaveClass('max-w-[360px]');
  });

  it('applies size Md and Lg utilities', () => {
    const { rerender } = render(
      <Modal isOpen onClose={onClose}>
        <ModalContent
          size={ModalContentSize.Md}
          modalDialogProps={{ 'data-testid': 'dialog' }}
        >
          md
        </ModalContent>
      </Modal>,
    );
    expect(screen.getByTestId('dialog')).toHaveClass('max-w-[480px]');

    rerender(
      <Modal isOpen onClose={onClose}>
        <ModalContent
          size={ModalContentSize.Lg}
          modalDialogProps={{ 'data-testid': 'dialog' }}
        >
          lg
        </ModalContent>
      </Modal>,
    );
    expect(screen.getByTestId('dialog')).toHaveClass('max-w-[720px]');
  });

  it('forwards arbitrary props to the outer positioning element', () => {
    render(
      <Modal isOpen onClose={onClose}>
        <ModalContent
          data-testid="modal-content"
          id="modal-content-id"
          className="opacity-50"
        >
          content
        </ModalContent>
      </Modal>,
    );
    const outer = screen.getByTestId('modal-content');
    expect(outer.tagName).toBe('DIV');
    expect(outer).toHaveAttribute('id', 'modal-content-id');
    expect(outer).toHaveClass('opacity-50');
    expect(outer).toHaveClass('fixed', 'inset-0');
  });

  it('forwards modalDialogProps to the inner dialog and merges className', () => {
    render(
      <Modal isOpen onClose={onClose}>
        <ModalContent
          modalDialogProps={{
            'data-testid': 'dialog',
            className: 'opacity-75',
          }}
        >
          content
        </ModalContent>
      </Modal>,
    );
    const dialog = screen.getByTestId('dialog');
    expect(dialog).toHaveClass('opacity-75');
    // Default classes are still present after merge.
    expect(dialog).toHaveClass('max-w-[360px]', 'rounded-lg');
  });

  it('forwards ref to the outer positioning element', () => {
    const ref = createRef<HTMLDivElement>();
    render(
      <Modal isOpen onClose={onClose}>
        <ModalContent ref={ref} data-testid="modal-content">
          content
        </ModalContent>
      </Modal>,
    );
    expect(ref.current).toBe(screen.getByTestId('modal-content'));
    expect(ref.current?.tagName).toBe('DIV');
  });

  describe('Escape key handling', () => {
    it('calls onClose when Escape is pressed', () => {
      render(
        <Modal isOpen onClose={onClose}>
          <ModalContent>content</ModalContent>
        </Modal>,
      );
      fireEvent.keyDown(document, { key: 'Escape' });
      expect(onClose).toHaveBeenCalledTimes(1);
    });

    it('does not call onClose when isClosedOnEscapeKey is false', () => {
      render(
        <Modal isOpen onClose={onClose} isClosedOnEscapeKey={false}>
          <ModalContent>content</ModalContent>
        </Modal>,
      );
      fireEvent.keyDown(document, { key: 'Escape' });
      expect(onClose).not.toHaveBeenCalled();
    });

    it('ignores non-Escape keys', () => {
      render(
        <Modal isOpen onClose={onClose}>
          <ModalContent>content</ModalContent>
        </Modal>,
      );
      fireEvent.keyDown(document, { key: 'Enter' });
      expect(onClose).not.toHaveBeenCalled();
    });
  });

  describe('Outside click handling', () => {
    it('calls onClose when mouseDown lands outside the dialog', () => {
      render(
        <Modal isOpen onClose={onClose}>
          <ModalContent>content</ModalContent>
        </Modal>,
      );
      // Click inside the dialog → no onClose.
      fireEvent.mouseDown(screen.getByRole('dialog'));
      expect(onClose).not.toHaveBeenCalled();

      // Click outside the dialog (document body itself) → onClose.
      fireEvent.mouseDown(document.body);
      expect(onClose).toHaveBeenCalledTimes(1);
    });

    it('does not call onClose when isClosedOnOutsideClick is false', () => {
      render(
        <Modal isOpen onClose={onClose} isClosedOnOutsideClick={false}>
          <ModalContent>content</ModalContent>
        </Modal>,
      );
      fireEvent.mouseDown(document.body);
      expect(onClose).not.toHaveBeenCalled();
    });

    it('ignores clicks whose target opts out via the data attribute', () => {
      render(
        <Modal isOpen onClose={onClose}>
          <ModalContent>content</ModalContent>
        </Modal>,
      );
      // Render a "popover-like" sibling outside the dialog with the opt-out
      // attribute and click an element inside it.
      const popover = document.createElement('div');
      popover.setAttribute(MODAL_CONTENT_IGNORE_OUTSIDE_CLICK_ATTR, '');
      const item = document.createElement('button');
      item.textContent = 'popover item';
      popover.appendChild(item);
      document.body.appendChild(popover);

      fireEvent.mouseDown(item);
      expect(onClose).not.toHaveBeenCalled();

      document.body.removeChild(popover);
    });
  });

  describe('Focus management via Modal context', () => {
    it('focuses initialFocusRef on mount', () => {
      const initialRef = createRef<HTMLInputElement>();
      render(
        <Modal isOpen onClose={onClose} initialFocusRef={initialRef}>
          <ModalContent>
            <button type="button">first</button>
            <input data-testid="initial" ref={initialRef} />
          </ModalContent>
        </Modal>,
      );
      expect(screen.getByTestId('initial')).toHaveFocus();
    });

    it('returns focus to finalFocusRef when the modal closes', () => {
      const finalRef = createRef<HTMLButtonElement>();
      const { rerender } = render(
        <>
          <button ref={finalRef}>trigger</button>
          <Modal isOpen onClose={onClose} finalFocusRef={finalRef}>
            <ModalContent>content</ModalContent>
          </Modal>
        </>,
      );
      rerender(
        <>
          <button ref={finalRef}>trigger</button>
          <Modal isOpen={false} onClose={onClose} finalFocusRef={finalRef}>
            <ModalContent>content</ModalContent>
          </Modal>
        </>,
      );
      expect(finalRef.current).toHaveFocus();
    });
  });
});
