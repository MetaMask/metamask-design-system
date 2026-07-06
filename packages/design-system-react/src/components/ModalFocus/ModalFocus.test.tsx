import { render, screen } from '@testing-library/react';
import React, { createRef } from 'react';

import { ModalFocus } from './ModalFocus';

describe('ModalFocus', () => {
  it('renders children inside the focus trap', () => {
    render(
      <ModalFocus>
        <div>modal focus</div>
      </ModalFocus>,
    );
    expect(screen.getByText('modal focus')).toBeInTheDocument();
  });

  it('auto-focuses the first focusable child by default', () => {
    render(
      <ModalFocus>
        <input data-testid="input" />
      </ModalFocus>,
    );
    expect(screen.getByTestId('input')).toHaveFocus();
  });

  it('does not auto-focus when autoFocus is false', () => {
    render(
      <ModalFocus autoFocus={false}>
        <input data-testid="input" />
      </ModalFocus>,
    );
    expect(screen.getByTestId('input')).not.toHaveFocus();
  });

  it('focuses the element targeted by initialFocusRef on mount', () => {
    const ref = createRef<HTMLInputElement>();
    render(
      <ModalFocus initialFocusRef={ref}>
        <input />
        <input />
        <input data-testid="input" ref={ref} />
      </ModalFocus>,
    );
    expect(screen.getByTestId('input')).toHaveFocus();
  });

  it('returns focus to finalFocusRef when unmounted', () => {
    const finalRef = createRef<HTMLButtonElement>();
    const { rerender } = render(
      <>
        <button ref={finalRef}>button</button>
        <ModalFocus finalFocusRef={finalRef}>
          <div>modal focus</div>
        </ModalFocus>
      </>,
    );
    expect(finalRef.current).not.toHaveFocus();
    rerender(<button ref={finalRef}>button</button>);
    expect(screen.getByRole('button')).toHaveFocus();
  });

  it('renders with restoreFocus enabled (no finalFocusRef)', () => {
    // When restoreFocus is true and no finalFocusRef is provided, the trap
    // delegates focus restoration to react-focus-lock's `returnFocus` path.
    // The actual focus restoration is exercised by react-focus-lock; here we
    // just verify the component renders without errors in this configuration.
    render(
      <ModalFocus restoreFocus>
        <input data-testid="input" />
      </ModalFocus>,
    );
    expect(screen.getByTestId('input')).toBeInTheDocument();
  });
});
