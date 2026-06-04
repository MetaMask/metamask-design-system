import { act, fireEvent, render } from '@testing-library/react-native';
import React, { createRef } from 'react';
import { BackHandler, Platform, View } from 'react-native';

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
  return {
    BottomSheetDialog: forwardRef(
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
    ),
  };
});

jest.mock('../BottomSheetOverlay/BottomSheetOverlay', () => ({
  BottomSheetOverlay: ({ onPress }: { onPress?: () => void }) => {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { Pressable, View: RNView } = require('react-native');
    return onPress ? (
      <Pressable
        accessibilityRole="button"
        testID="bottom-sheet-overlay"
        onPress={onPress}
      />
    ) : (
      <RNView testID="bottom-sheet-overlay" />
    );
  },
}));

const noop = () => undefined;

describe('BottomSheet', () => {
  beforeEach(() => {
    mockCloseDialog.mockClear();
    mockOpenDialog.mockClear();
    capturedDialogOnClose = undefined;
    capturedDialogOnOpen = undefined;
    capturedPanGestureHandlerProps = undefined;
  });

  it('renders with testID on root element', async () => {
    const { getByTestId } = await render(
      <BottomSheet testID="bottom-sheet" goBack={noop}>
        <View />
      </BottomSheet>,
    );
    expect(getByTestId('bottom-sheet')).toBeDefined();
  });

  it('renders children', async () => {
    const { getByTestId } = await render(
      <BottomSheet goBack={noop}>
        <View testID="child-content" />
      </BottomSheet>,
    );
    expect(getByTestId('child-content')).toBeDefined();
  });

  it('renders correctly on non-iOS platforms', async () => {
    const originalOS = Platform.OS;
    Platform.OS = 'android';

    const { getByTestId } = await render(
      <BottomSheet testID="bottom-sheet" goBack={noop}>
        <View />
      </BottomSheet>,
    );
    expect(getByTestId('bottom-sheet')).toBeDefined();

    Platform.OS = originalOS;
  });

  it('calls onClose when dialog signals close', async () => {
    const onClose = jest.fn();
    await render(
      <BottomSheet goBack={noop} onClose={onClose}>
        <View />
      </BottomSheet>,
    );

    await act(() => {
      capturedDialogOnClose?.();
    });

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('passes hasPendingAction=false to onClose when no post-callback is queued', async () => {
    const onClose = jest.fn();
    await render(
      <BottomSheet goBack={noop} onClose={onClose}>
        <View />
      </BottomSheet>,
    );

    await act(() => {
      capturedDialogOnClose?.();
    });

    expect(onClose).toHaveBeenCalledWith(false);
  });

  it('calls onOpen when dialog signals open', async () => {
    const onOpen = jest.fn();
    await render(
      <BottomSheet goBack={noop} onOpen={onOpen}>
        <View />
      </BottomSheet>,
    );

    await act(() => {
      capturedDialogOnOpen?.();
    });

    expect(onOpen).toHaveBeenCalledTimes(1);
  });

  it('calls goBack when dialog closes', async () => {
    const goBack = jest.fn();
    await render(
      <BottomSheet goBack={goBack}>
        <View />
      </BottomSheet>,
    );

    await act(() => {
      capturedDialogOnClose?.();
    });

    expect(goBack).toHaveBeenCalledTimes(1);
  });

  it('does not call goBack twice on duplicate close signals', async () => {
    const goBack = jest.fn();
    await render(
      <BottomSheet goBack={goBack}>
        <View />
      </BottomSheet>,
    );

    await act(() => {
      capturedDialogOnClose?.();
      capturedDialogOnClose?.();
    });

    expect(goBack).toHaveBeenCalledTimes(1);
  });

  describe('overlay interaction', () => {
    it('renders overlay touchable when isInteractable is true', async () => {
      const { getByRole } = await render(
        <BottomSheet goBack={noop} isInteractable>
          <View />
        </BottomSheet>,
      );
      expect(getByRole('button')).toBeOnTheScreen();
    });

    it('does not render overlay touchable when isInteractable is false', async () => {
      const { queryByRole } = await render(
        <BottomSheet goBack={noop} isInteractable={false}>
          <View />
        </BottomSheet>,
      );
      expect(queryByRole('button')).toBeNull();
    });

    it('calls onCloseDialog when overlay is pressed', async () => {
      const { getByTestId } = await render(
        <BottomSheet goBack={noop} isInteractable>
          <View />
        </BottomSheet>,
      );

      await fireEvent.press(getByTestId('bottom-sheet-overlay'));

      expect(mockCloseDialog).toHaveBeenCalledTimes(1);
    });
  });

  describe('Android back button', () => {
    let backHandlerCallback: (() => boolean) | null = null;
    let originalOS: typeof Platform.OS;

    beforeEach(() => {
      originalOS = Platform.OS;
      Platform.OS = 'android';
      jest
        .spyOn(BackHandler, 'addEventListener')
        .mockImplementation((_event, handler) => {
          backHandlerCallback = handler as () => boolean;
          return { remove: jest.fn() };
        });
    });

    afterEach(() => {
      Platform.OS = originalOS;
      jest.restoreAllMocks();
      backHandlerCallback = null;
    });

    it('closes the dialog on hardware back press when isInteractable', async () => {
      await render(
        <BottomSheet goBack={noop} isInteractable>
          <View />
        </BottomSheet>,
      );

      await act(() => {
        backHandlerCallback?.();
      });

      expect(mockCloseDialog).toHaveBeenCalledTimes(1);
    });

    it('does not close the dialog on hardware back press when not isInteractable', async () => {
      await render(
        <BottomSheet goBack={noop} isInteractable={false}>
          <View />
        </BottomSheet>,
      );

      await act(() => {
        backHandlerCallback?.();
      });

      expect(mockCloseDialog).not.toHaveBeenCalled();
    });

    it('returns true from BackHandler to prevent default back navigation', async () => {
      await render(
        <BottomSheet goBack={noop} isInteractable>
          <View />
        </BottomSheet>,
      );

      const result = backHandlerCallback?.();

      expect(result).toBe(true);
    });
  });

  describe('imperative ref', () => {
    it('exposes onCloseBottomSheet and onOpenBottomSheet', async () => {
      const sheetRef = createRef<BottomSheetRef>();

      await render(
        <BottomSheet ref={sheetRef} goBack={noop}>
          <View />
        </BottomSheet>,
      );

      expect(sheetRef.current).not.toBeNull();
      expect(typeof sheetRef.current?.onCloseBottomSheet).toBe('function');
      expect(typeof sheetRef.current?.onOpenBottomSheet).toBe('function');
    });

    it('onCloseBottomSheet delegates to dialog onCloseDialog', async () => {
      const sheetRef = createRef<BottomSheetRef>();

      await render(
        <BottomSheet ref={sheetRef} goBack={noop}>
          <View />
        </BottomSheet>,
      );

      await act(async () => {
        sheetRef.current?.onCloseBottomSheet();
      });

      expect(mockCloseDialog).toHaveBeenCalledTimes(1);
    });

    it('onOpenBottomSheet delegates to dialog onOpenDialog', async () => {
      const sheetRef = createRef<BottomSheetRef>();

      await render(
        <BottomSheet ref={sheetRef} goBack={noop}>
          <View />
        </BottomSheet>,
      );

      await act(async () => {
        sheetRef.current?.onOpenBottomSheet();
      });

      expect(mockOpenDialog).toHaveBeenCalledTimes(1);
    });

    it('onCloseBottomSheet fires postCallback after close animation', async () => {
      const callback = jest.fn();
      const sheetRef = createRef<BottomSheetRef>();

      await render(
        <BottomSheet ref={sheetRef} goBack={noop}>
          <View />
        </BottomSheet>,
      );

      await act(async () => {
        sheetRef.current?.onCloseBottomSheet(callback);
      });

      expect(callback).toHaveBeenCalledTimes(1);
    });

    it('onOpenBottomSheet fires postCallback after open animation', async () => {
      const callback = jest.fn();
      const sheetRef = createRef<BottomSheetRef>();

      await render(
        <BottomSheet ref={sheetRef} goBack={noop}>
          <View />
        </BottomSheet>,
      );

      await act(async () => {
        sheetRef.current?.onOpenBottomSheet(callback);
      });

      expect(callback).toHaveBeenCalledTimes(1);
    });

    it('ignores duplicate onCloseBottomSheet calls', async () => {
      const sheetRef = createRef<BottomSheetRef>();

      await render(
        <BottomSheet ref={sheetRef} goBack={noop}>
          <View />
        </BottomSheet>,
      );

      await act(async () => {
        sheetRef.current?.onCloseBottomSheet();
        sheetRef.current?.onCloseBottomSheet();
      });

      expect(mockCloseDialog).toHaveBeenCalledTimes(1);
    });
  });
});
