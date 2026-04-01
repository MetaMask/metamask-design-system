import { act, fireEvent, render } from '@testing-library/react-native';
import React, { useEffect, useRef } from 'react';
import { BackHandler, Platform, TouchableOpacity, View } from 'react-native';

import { BottomSheet } from './BottomSheet';
import type { BottomSheetRef } from './BottomSheet.types';

jest.mock('@metamask/design-system-twrnc-preset', () => ({
  useTailwind: () => ({
    style: () => ({}),
  }),
}));

// Capture callbacks wired by BottomSheet to BottomSheetDialog
let capturedDialogOnClose: ((hasPendingAction?: boolean) => void) | undefined;
let capturedDialogOnOpen: ((hasPendingAction?: boolean) => void) | undefined;
const mockCloseDialog = jest.fn();
const mockOpenDialog = jest.fn();

jest.mock('../BottomSheetDialog', () => {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { forwardRef, useImperativeHandle } = require('react');
  return forwardRef(
    (
      {
        children,
        onClose,
        onOpen,
      }: {
        children?: unknown;
        onClose?: (hasPendingAction?: boolean) => void;
        onOpen?: (hasPendingAction?: boolean) => void;
      },
      ref: unknown,
    ) => {
      capturedDialogOnClose = onClose;
      capturedDialogOnOpen = onOpen;
      useImperativeHandle(ref, () => ({
        onCloseDialog: (callback?: () => void) => {
          mockCloseDialog();
          onClose?.();
          callback?.();
        },
        onOpenDialog: (callback?: () => void) => {
          mockOpenDialog();
          onOpen?.();
          callback?.();
        },
      }));
      return children;
    },
  );
});

const noop = () => undefined;

describe('BottomSheet', () => {
  beforeEach(() => {
    mockCloseDialog.mockClear();
    mockOpenDialog.mockClear();
    capturedDialogOnClose = undefined;
    capturedDialogOnOpen = undefined;
  });

  it('renders with testID on root element', () => {
    const { getByTestId } = render(
      <BottomSheet testID="bottom-sheet" goBack={noop}>
        <View />
      </BottomSheet>,
    );
    expect(getByTestId('bottom-sheet')).toBeDefined();
  });

  it('renders children', () => {
    const { getByTestId } = render(
      <BottomSheet goBack={noop}>
        <View testID="child-content" />
      </BottomSheet>,
    );
    expect(getByTestId('child-content')).toBeDefined();
  });

  it('renders correctly on non-iOS platforms', () => {
    const originalOS = Platform.OS;
    Platform.OS = 'android';

    const { getByTestId } = render(
      <BottomSheet testID="bottom-sheet" goBack={noop}>
        <View />
      </BottomSheet>,
    );
    expect(getByTestId('bottom-sheet')).toBeDefined();

    Platform.OS = originalOS;
  });

  it('calls onClose when dialog signals close', () => {
    const onClose = jest.fn();
    render(
      <BottomSheet goBack={noop} onClose={onClose}>
        <View />
      </BottomSheet>,
    );

    act(() => {
      capturedDialogOnClose?.();
    });

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('passes hasPendingAction=false to onClose when no post-callback is queued', () => {
    const onClose = jest.fn();
    render(
      <BottomSheet goBack={noop} onClose={onClose}>
        <View />
      </BottomSheet>,
    );

    act(() => {
      capturedDialogOnClose?.();
    });

    expect(onClose).toHaveBeenCalledWith(false);
  });

  it('calls onOpen when dialog signals open', () => {
    const onOpen = jest.fn();
    render(
      <BottomSheet goBack={noop} onOpen={onOpen}>
        <View />
      </BottomSheet>,
    );

    act(() => {
      capturedDialogOnOpen?.();
    });

    expect(onOpen).toHaveBeenCalledTimes(1);
  });

  it('calls goBack when dialog closes', () => {
    const goBack = jest.fn();
    render(
      <BottomSheet goBack={goBack}>
        <View />
      </BottomSheet>,
    );

    act(() => {
      capturedDialogOnClose?.();
    });

    expect(goBack).toHaveBeenCalledTimes(1);
  });

  it('does not call goBack twice on duplicate close signals', () => {
    const goBack = jest.fn();
    render(
      <BottomSheet goBack={goBack}>
        <View />
      </BottomSheet>,
    );

    act(() => {
      capturedDialogOnClose?.();
      capturedDialogOnClose?.();
    });

    expect(goBack).toHaveBeenCalledTimes(1);
  });

  describe('overlay interaction', () => {
    it('renders overlay touchable when isInteractable is true', () => {
      const { UNSAFE_getAllByType } = render(
        <BottomSheet goBack={noop} isInteractable>
          <View />
        </BottomSheet>,
      );
      expect(UNSAFE_getAllByType(TouchableOpacity)).toHaveLength(1);
    });

    it('does not render overlay touchable when isInteractable is false', () => {
      const { UNSAFE_queryAllByType } = render(
        <BottomSheet goBack={noop} isInteractable={false}>
          <View />
        </BottomSheet>,
      );
      expect(UNSAFE_queryAllByType(TouchableOpacity)).toHaveLength(0);
    });

    it('calls onCloseDialog when overlay is pressed', () => {
      const { UNSAFE_getAllByType } = render(
        <BottomSheet goBack={noop} isInteractable>
          <View />
        </BottomSheet>,
      );

      fireEvent.press(UNSAFE_getAllByType(TouchableOpacity)[0]);

      expect(mockCloseDialog).toHaveBeenCalledTimes(1);
    });
  });

  describe('Android back button', () => {
    let backHandlerCallback: (() => boolean) | null = null;

    beforeEach(() => {
      jest
        .spyOn(BackHandler, 'addEventListener')
        .mockImplementation((_event, handler) => {
          backHandlerCallback = handler as () => boolean;
          return { remove: jest.fn() };
        });
      jest
        .spyOn(BackHandler, 'removeEventListener')
        .mockImplementation(jest.fn());
    });

    afterEach(() => {
      jest.restoreAllMocks();
      backHandlerCallback = null;
    });

    it('closes the dialog on hardware back press when isInteractable', () => {
      render(
        <BottomSheet goBack={noop} isInteractable>
          <View />
        </BottomSheet>,
      );

      act(() => {
        backHandlerCallback?.();
      });

      expect(mockCloseDialog).toHaveBeenCalledTimes(1);
    });

    it('does not close the dialog on hardware back press when not isInteractable', () => {
      render(
        <BottomSheet goBack={noop} isInteractable={false}>
          <View />
        </BottomSheet>,
      );

      act(() => {
        backHandlerCallback?.();
      });

      expect(mockCloseDialog).not.toHaveBeenCalled();
    });

    it('returns true from BackHandler to prevent default back navigation', () => {
      render(
        <BottomSheet goBack={noop} isInteractable>
          <View />
        </BottomSheet>,
      );

      const result = backHandlerCallback?.();

      expect(result).toBe(true);
    });
  });

  describe('imperative ref', () => {
    it('exposes onCloseBottomSheet and onOpenBottomSheet', () => {
      const sheetRef: { current: BottomSheetRef | null } = { current: null };
      const TestComponent = () => {
        const innerRef = useRef<BottomSheetRef>(null);
        useEffect(() => {
          sheetRef.current = innerRef.current;
        }, []);
        return (
          <BottomSheet ref={innerRef} goBack={noop}>
            <View />
          </BottomSheet>
        );
      };

      render(<TestComponent />);

      expect(sheetRef.current).not.toBeNull();
      expect(typeof sheetRef.current?.onCloseBottomSheet).toBe('function');
      expect(typeof sheetRef.current?.onOpenBottomSheet).toBe('function');
    });

    it('onCloseBottomSheet delegates to dialog onCloseDialog', () => {
      const TestComponent = () => {
        const innerRef = useRef<BottomSheetRef>(null);
        useEffect(() => {
          act(() => {
            innerRef.current?.onCloseBottomSheet();
          });
        }, []);
        return (
          <BottomSheet ref={innerRef} goBack={noop}>
            <View />
          </BottomSheet>
        );
      };

      render(<TestComponent />);

      expect(mockCloseDialog).toHaveBeenCalledTimes(1);
    });

    it('onOpenBottomSheet delegates to dialog onOpenDialog', () => {
      const TestComponent = () => {
        const innerRef = useRef<BottomSheetRef>(null);
        useEffect(() => {
          act(() => {
            innerRef.current?.onOpenBottomSheet();
          });
        }, []);
        return (
          <BottomSheet ref={innerRef} goBack={noop}>
            <View />
          </BottomSheet>
        );
      };

      render(<TestComponent />);

      expect(mockOpenDialog).toHaveBeenCalledTimes(1);
    });

    it('onCloseBottomSheet fires postCallback after close animation', () => {
      const callback = jest.fn();
      const TestComponent = () => {
        const innerRef = useRef<BottomSheetRef>(null);
        useEffect(() => {
          act(() => {
            innerRef.current?.onCloseBottomSheet(callback);
          });
        }, []);
        return (
          <BottomSheet ref={innerRef} goBack={noop}>
            <View />
          </BottomSheet>
        );
      };

      render(<TestComponent />);

      expect(callback).toHaveBeenCalledTimes(1);
    });

    it('onOpenBottomSheet fires postCallback after open animation', () => {
      const callback = jest.fn();
      const TestComponent = () => {
        const innerRef = useRef<BottomSheetRef>(null);
        useEffect(() => {
          act(() => {
            innerRef.current?.onOpenBottomSheet(callback);
          });
        }, []);
        return (
          <BottomSheet ref={innerRef} goBack={noop}>
            <View />
          </BottomSheet>
        );
      };

      render(<TestComponent />);

      expect(callback).toHaveBeenCalledTimes(1);
    });

    it('ignores duplicate onCloseBottomSheet calls', () => {
      const TestComponent = () => {
        const innerRef = useRef<BottomSheetRef>(null);
        useEffect(() => {
          act(() => {
            innerRef.current?.onCloseBottomSheet();
            innerRef.current?.onCloseBottomSheet();
          });
        }, []);
        return (
          <BottomSheet ref={innerRef} goBack={noop}>
            <View />
          </BottomSheet>
        );
      };

      render(<TestComponent />);

      expect(mockCloseDialog).toHaveBeenCalledTimes(1);
    });
  });
});
