import * as React from 'react';

type UseId = () => string;

let fallbackCounter = 0;

/**
 * React 17 fallback for `React.useId`. The id is generated after mount so
 * server and client markup never disagree during hydration.
 *
 * @returns The generated id, or `undefined` until the component has mounted.
 */
const useFallbackId = (): string | undefined => {
  const [id, setId] = React.useState<string | undefined>(undefined);
  React.useEffect(() => {
    fallbackCounter += 1;
    setId(`mm-modal-${fallbackCounter}`);
  }, []);
  return id;
};

// `useId` only exists in React 18+, while this package supports React 17.
// The branch is resolved once at module load, so the hook order is stable.
const nativeUseId = (React as unknown as { useId?: UseId }).useId;

/**
 * Returns an id that is stable for the lifetime of the component.
 *
 * @returns A unique id (possibly `undefined` on the first render in React 17).
 */
export const useStableId: () => string | undefined =
  nativeUseId ?? useFallbackId;
