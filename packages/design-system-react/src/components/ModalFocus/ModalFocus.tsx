import type { FC } from 'react';
import React, { useCallback } from 'react';
import type { ReactFocusLockProps } from 'react-focus-lock';
import ReactFocusLock from 'react-focus-lock';

import type { ModalFocusProps } from './ModalFocus.types.js';

/**
 * Based on the ModalFocusScope component from chakra-ui:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/components/modal/src/modal-focus.tsx
 */

// `react-focus-lock` is CommonJS. An ESM import types the binding as the
// module namespace, while some bundlers surface the component itself.
const focusLockModule = ReactFocusLock as unknown as FC<ReactFocusLockProps> & {
  default?: FC<ReactFocusLockProps>;
};
const FocusTrap = focusLockModule.default ?? focusLockModule;

export const ModalFocus: React.FC<ModalFocusProps> = ({
  initialFocusRef,
  finalFocusRef,
  restoreFocus,
  children,
  autoFocus,
  ...props
}) => {
  const onActivation = useCallback(() => {
    if (initialFocusRef?.current) {
      initialFocusRef.current.focus();
    }
  }, [initialFocusRef]);

  const onDeactivation = useCallback(() => {
    finalFocusRef?.current?.focus();
  }, [finalFocusRef]);

  const returnFocus = restoreFocus && !finalFocusRef;

  return (
    <FocusTrap
      autoFocus={autoFocus}
      onActivation={onActivation}
      onDeactivation={onDeactivation}
      returnFocus={returnFocus}
      {...props}
    >
      {children}
    </FocusTrap>
  );
};

ModalFocus.displayName = 'ModalFocus';
