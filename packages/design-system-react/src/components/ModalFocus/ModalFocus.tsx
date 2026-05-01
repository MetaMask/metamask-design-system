import React, { useCallback } from 'react';
import ReactFocusLock from 'react-focus-lock';

import type { ModalFocusProps } from './ModalFocus.types';

/**
 * Based on the ModalFocusScope component from chakra-ui:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/components/modal/src/modal-focus.tsx
 */

// `react-focus-lock` ships dual ESM/CJS builds; depending on the consumer's
// bundler interop, the default export can land as either the component itself
// or wrapped under `.default`. This picks whichever one is callable.
const FocusTrap: typeof ReactFocusLock =
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (ReactFocusLock as any).default ?? ReactFocusLock;

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
