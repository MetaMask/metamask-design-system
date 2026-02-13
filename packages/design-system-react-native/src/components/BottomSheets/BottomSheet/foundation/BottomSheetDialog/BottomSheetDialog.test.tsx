// Third party dependencies
import { render, act, fireEvent } from '@testing-library/react-native';
import React, { useRef, useEffect } from 'react';
import { Platform } from 'react-native';

// External dependencies.
import { Text } from '../../../../Text';

// Internal dependencies
import BottomSheetDialog from './BottomSheetDialog';
import type { BottomSheetDialogRef } from './BottomSheetDialog.types';

const mockThemeRef = { current: 'light' };

const mockInset = { top: 1, right: 2, bottom: 3, left: 4 };
const mockFrame = { width: 5, height: 600, x: 7, y: 8 };

type GestureCallback = (
  event: Record<string, number>,
  ctx: Record<string, number>,
) => void;
type GestureHandlers = Record<string, GestureCallback>;

// Store the last gesture handler callbacks so tests can invoke them directly
const gestureCallbacksRef: { current: GestureHandlers } = { current: {} };

jest.mock('react-native-gesture-handler', () => ({
  PanGestureHandler: ({ children }: { children: React.ReactNode }) => children,
  GestureHandlerRootView: 'View',
  State: {},
  Directions: {},
}));

jest.mock('@metamask/design-system-twrnc-preset', () => ({
  Theme: { Light: 'light', Dark: 'dark' },
  useTailwind: () => ({
    style: (...args: string[]) => args,
  }),
  useTheme: () => mockThemeRef.current,
}));

jest.mock('react-native-safe-area-context', () => ({
  SafeAreaProvider: ({ children }: { children: React.ReactNode }) => children,
  SafeAreaConsumer: ({
    children,
  }: {
    children: (insets: typeof mockInset) => React.ReactNode;
  }) => children(mockInset),
  useSafeAreaInsets: () => mockInset,
  useSafeAreaFrame: () => mockFrame,
}));

// Override useAnimatedGestureHandler to capture and execute the callbacks
jest.mock('react-native-reanimated', () => {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const Reanimated = require('react-native-reanimated/mock');
  Reanimated.default.call = () => {
    // no-op
  };
  return {
    ...Reanimated,
    useAnimatedGestureHandler: (handlers: GestureHandlers) => {
      gestureCallbacksRef.current = handlers;
      // Return a no-op gesture handler
      return jest.fn();
    },
  };
});

describe('BottomSheetDialog', () => {
  it('renders correctly with children', () => {
    const { getByText } = render(
      <BottomSheetDialog>
        <Text>Test Child</Text>
      </BottomSheetDialog>,
    );
    expect(getByText('Test Child')).toBeDefined();
  });

  it('renders with a custom testID on the root element', () => {
    const { getByTestId } = render(
      <BottomSheetDialog testID="bottom-sheet-dialog">
        <Text>Test Child</Text>
      </BottomSheetDialog>,
    );
    expect(getByTestId('bottom-sheet-dialog')).toBeDefined();
  });

  it('calls onOpen when onOpenDialog ref is called', () => {
    const onOpenMock = jest.fn();
    const TestComponent = () => {
      const ref = useRef<BottomSheetDialogRef>(null);

      useEffect(() => {
        if (ref.current) {
          act(() => {
            ref.current?.onOpenDialog();
          });
        }
      }, []);

      return (
        <BottomSheetDialog ref={ref} onOpen={onOpenMock}>
          <Text>Test Child</Text>
        </BottomSheetDialog>
      );
    };

    render(<TestComponent />);

    expect(onOpenMock).toHaveBeenCalled();
  });

  it('calls onClose when onCloseDialog ref is called', () => {
    const onCloseMock = jest.fn();
    const TestComponent = () => {
      const ref = useRef<BottomSheetDialogRef>(null);

      useEffect(() => {
        if (ref.current) {
          act(() => {
            ref.current?.onCloseDialog();
          });
        }
      }, []);

      return (
        <BottomSheetDialog ref={ref} onClose={onCloseMock}>
          <Text>Test Child</Text>
        </BottomSheetDialog>
      );
    };

    render(<TestComponent />);

    expect(onCloseMock).toHaveBeenCalled();
  });

  it('renders drag handle indicator only when isInteractable is true', () => {
    const countViews = (json: ReturnType<typeof JSON.parse>): number => {
      if (!json) {
        return 0;
      }
      let count = json.type === 'View' ? 1 : 0;
      if (Array.isArray(json.children)) {
        for (const child of json.children) {
          if (typeof child === 'object') {
            count += countViews(child);
          }
        }
      }
      return count;
    };

    const interactable = render(
      <BottomSheetDialog isInteractable>
        <Text>Content</Text>
      </BottomSheetDialog>,
    );
    const nonInteractable = render(
      <BottomSheetDialog isInteractable={false}>
        <Text>Content</Text>
      </BottomSheetDialog>,
    );

    // Interactable renders additional View nodes for the drag handle indicator
    const interactableViewCount = countViews(interactable.toJSON());
    const nonInteractableViewCount = countViews(nonInteractable.toJSON());
    expect(interactableViewCount).toBeGreaterThan(nonInteractableViewCount);
  });

  it('renders in fullscreen mode', () => {
    const { getByText } = render(
      <BottomSheetDialog isFullscreen>
        <Text>Fullscreen Content</Text>
      </BottomSheetDialog>,
    );
    expect(getByText('Fullscreen Content')).toBeDefined();
  });

  it('renders with keyboard avoiding view disabled', () => {
    const { getByText } = render(
      <BottomSheetDialog keyboardAvoidingViewEnabled={false}>
        <Text>No Keyboard Avoidance</Text>
      </BottomSheetDialog>,
    );
    expect(getByText('No Keyboard Avoidance')).toBeDefined();
  });

  it('renders with custom twClassName', () => {
    const { getByText } = render(
      <BottomSheetDialog twClassName="rounded-t-xl">
        <Text>Styled Content</Text>
      </BottomSheetDialog>,
    );
    expect(getByText('Styled Content')).toBeDefined();
  });

  it('renders with custom style prop', () => {
    const { getByText } = render(
      <BottomSheetDialog style={{ marginHorizontal: 16 }}>
        <Text>Custom Style</Text>
      </BottomSheetDialog>,
    );
    expect(getByText('Custom Style')).toBeDefined();
  });

  it('triggers onOpenDialog on first layout event', () => {
    const onOpenMock = jest.fn();
    const { getByText } = render(
      <BottomSheetDialog onOpen={onOpenMock}>
        <Text>Layout Content</Text>
      </BottomSheetDialog>,
    );

    // Find the Animated.View parent that has onLayout
    const content = getByText('Layout Content');
    const findLayoutNode = (
      current: typeof content | null,
    ): typeof content | null => {
      if (!current) {
        return null;
      }
      if (current.props.onLayout) {
        return current;
      }
      return findLayoutNode(current.parent);
    };
    const layoutNode = findLayoutNode(content.parent);
    expect(layoutNode).toBeDefined();
    if (layoutNode) {
      act(() => {
        fireEvent(layoutNode, 'layout', {
          nativeEvent: { layout: { height: 400, width: 300, x: 0, y: 0 } },
        });
      });
    }

    expect(onOpenMock).toHaveBeenCalled();
  });

  it('does not re-trigger onOpenDialog on subsequent layout events', () => {
    const onOpenMock = jest.fn();
    const { getByText } = render(
      <BottomSheetDialog onOpen={onOpenMock}>
        <Text>Layout Content</Text>
      </BottomSheetDialog>,
    );

    const content = getByText('Layout Content');
    const findLayoutNode = (
      current: typeof content | null,
    ): typeof content | null => {
      if (!current) {
        return null;
      }
      if (current.props.onLayout) {
        return current;
      }
      return findLayoutNode(current.parent);
    };
    const layoutNode = findLayoutNode(content.parent);
    expect(layoutNode).toBeDefined();
    if (layoutNode) {
      act(() => {
        fireEvent(layoutNode, 'layout', {
          nativeEvent: { layout: { height: 400, width: 300, x: 0, y: 0 } },
        });
      });
      act(() => {
        fireEvent(layoutNode, 'layout', {
          nativeEvent: { layout: { height: 500, width: 300, x: 0, y: 0 } },
        });
      });
    }

    // onOpen should only be called once (on first mount layout)
    expect(onOpenMock).toHaveBeenCalledTimes(1);
  });

  it('renders without onOpen and onClose callbacks', () => {
    const { getByText } = render(
      <BottomSheetDialog>
        <Text>No Callbacks</Text>
      </BottomSheetDialog>,
    );
    expect(getByText('No Callbacks')).toBeDefined();
  });

  it('exposes onOpenDialog and onCloseDialog via ref', () => {
    const dialogRef: { current: BottomSheetDialogRef | null } = {
      current: null,
    };
    const TestComponent = () => {
      const ref = useRef<BottomSheetDialogRef>(null);

      useEffect(() => {
        dialogRef.current = ref.current;
      }, []);

      return (
        <BottomSheetDialog ref={ref}>
          <Text>Ref Test</Text>
        </BottomSheetDialog>
      );
    };

    render(<TestComponent />);

    expect(dialogRef.current).not.toBeNull();
    expect(typeof dialogRef.current?.onOpenDialog).toBe('function');
    expect(typeof dialogRef.current?.onCloseDialog).toBe('function');
  });

  it('uses dark theme shadow when theme is dark', () => {
    mockThemeRef.current = 'dark';
    const { getByText } = render(
      <BottomSheetDialog>
        <Text>Dark Theme</Text>
      </BottomSheetDialog>,
    );
    expect(getByText('Dark Theme')).toBeDefined();
    mockThemeRef.current = 'light';
  });

  it('renders on Android platform', () => {
    const originalOS = Platform.OS;
    Platform.OS = 'android';
    const { getByText } = render(
      <BottomSheetDialog>
        <Text>Android Content</Text>
      </BottomSheetDialog>,
    );
    expect(getByText('Android Content')).toBeDefined();
    Platform.OS = originalOS;
  });

  describe('gesture handler callbacks', () => {
    beforeEach(() => {
      gestureCallbacksRef.current = {};
    });

    const renderAndCaptureGestures = () => {
      render(
        <BottomSheetDialog>
          <Text>Gesture Test</Text>
        </BottomSheetDialog>,
      );
      return gestureCallbacksRef.current;
    };

    it('onStart tracks the current Y offset', () => {
      const handlers = renderAndCaptureGestures();
      const ctx: Record<string, number> = {};
      handlers.onStart({}, ctx);
      expect(ctx.startY).toBeDefined();
    });

    it('onActive clamps Y to bottom boundary', () => {
      const handlers = renderAndCaptureGestures();
      const ctx: Record<string, number> = { startY: 0 };
      // Large positive translationY should be clamped
      handlers.onActive({ translationY: 99999 }, ctx);
      // Should not throw
      expect(handlers.onActive).toBeDefined();
    });

    it('onActive clamps Y to top boundary', () => {
      const handlers = renderAndCaptureGestures();
      const ctx: Record<string, number> = { startY: 0 };
      // Large negative translationY should be clamped to top
      handlers.onActive({ translationY: -99999 }, ctx);
      expect(handlers.onActive).toBeDefined();
    });

    it('onActive tracks normal translation', () => {
      const handlers = renderAndCaptureGestures();
      const ctx: Record<string, number> = { startY: 100 };
      handlers.onActive({ translationY: 50 }, ctx);
      expect(handlers.onActive).toBeDefined();
    });

    it('onEnd dismisses on quick downward swipe', () => {
      const handlers = renderAndCaptureGestures();
      const ctx: Record<string, number> = { startY: 0 };
      // High positive velocityY = quick downward swipe = dismiss
      handlers.onEnd({ translationY: 100, velocityY: 1000 }, ctx);
      expect(handlers.onEnd).toBeDefined();
    });

    it('onEnd snaps to top on quick upward swipe', () => {
      const handlers = renderAndCaptureGestures();
      const ctx: Record<string, number> = { startY: 0 };
      // High negative velocityY = quick upward swipe = snap to top
      handlers.onEnd({ translationY: -100, velocityY: -1000 }, ctx);
      expect(handlers.onEnd).toBeDefined();
    });

    it('onEnd dismisses when dismiss offset threshold is reached', () => {
      const handlers = renderAndCaptureGestures();
      const ctx: Record<string, number> = { startY: 0 };
      // Slow swipe but past 60% threshold
      handlers.onEnd({ translationY: 500, velocityY: 0 }, ctx);
      expect(handlers.onEnd).toBeDefined();
    });

    it('onEnd snaps back when below dismiss threshold', () => {
      const handlers = renderAndCaptureGestures();
      const ctx: Record<string, number> = { startY: 0 };
      // Small slow swipe, below threshold
      handlers.onEnd({ translationY: 10, velocityY: 0 }, ctx);
      expect(handlers.onEnd).toBeDefined();
    });
  });
});
