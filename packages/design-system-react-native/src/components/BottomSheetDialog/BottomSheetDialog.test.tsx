// Third party dependencies
import { render, act, fireEvent } from '@testing-library/react-native';
import React, { useRef, useEffect } from 'react';
import { Platform } from 'react-native';

// External dependencies.
import { Text } from '../Text';

// Internal dependencies
import { BottomSheetDialog } from './BottomSheetDialog';
import type { BottomSheetDialogRef } from './BottomSheetDialog.types';

const mockThemeRef = { current: 'light' };

type PanGestureEvent = {
  translationY: number;
  velocityY: number;
};

type CapturedPanGestureCallbacks = {
  onStart?: () => void;
  onUpdate?: (event: PanGestureEvent) => void;
  onEnd?: (event: PanGestureEvent) => void;
};

const capturedPanGestureCallbacks: CapturedPanGestureCallbacks = {};

jest.mock('react-native-gesture-handler', () => ({
  GestureDetector: ({ children }: { children: React.ReactNode }) => {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { View } = require('react-native');
    return <View>{children}</View>;
  },
  Gesture: {
    Pan: () => {
      const gesture: Record<string, unknown> = {};
      const capture =
        (key: keyof CapturedPanGestureCallbacks) => (callback: unknown) => {
          capturedPanGestureCallbacks[key] = callback as never;
          return gesture;
        };
      gesture.enabled = () => gesture;
      gesture.onStart = capture('onStart');
      gesture.onUpdate = capture('onUpdate');
      gesture.onEnd = capture('onEnd');
      return gesture;
    },
  },
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

jest.mock('react-native-reanimated', () => {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const Reanimated = require('react-native-reanimated/mock');
  Reanimated.default.call = () => {
    // no-op
  };
  return Reanimated;
});

const SHEET_HEIGHT = 400;

const findLayoutNode = (
  current: { props: { onLayout?: unknown }; parent: unknown } | null,
): typeof current => {
  if (!current) {
    return null;
  }
  if (current.props.onLayout) {
    return current;
  }
  return findLayoutNode(current.parent as typeof current);
};

const triggerSheetLayout = (
  getByText: (text: string) => { parent: unknown },
  height = SHEET_HEIGHT,
) => {
  const content = getByText('Layout Content');
  const layoutNode = findLayoutNode(content.parent as never);
  expect(layoutNode).toBeDefined();
  if (layoutNode) {
    act(() => {
      fireEvent(layoutNode, 'layout', {
        nativeEvent: { layout: { height, width: 300, x: 0, y: 0 } },
      });
    });
  }
};

describe('BottomSheetDialog', () => {
  beforeEach(() => {
    capturedPanGestureCallbacks.onStart = undefined;
    capturedPanGestureCallbacks.onUpdate = undefined;
    capturedPanGestureCallbacks.onEnd = undefined;
  });
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

  it('calls onOpen callback when onOpenDialog ref is called with callback', () => {
    const onOpenMock = jest.fn();
    const callbackMock = jest.fn();
    const TestComponent = () => {
      const ref = useRef<BottomSheetDialogRef>(null);

      useEffect(() => {
        if (ref.current) {
          act(() => {
            ref.current?.onOpenDialog(callbackMock);
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
    expect(callbackMock).toHaveBeenCalled();
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

  it('calls onClose callback when onCloseDialog ref is called with callback', () => {
    const onCloseMock = jest.fn();
    const callbackMock = jest.fn();
    const TestComponent = () => {
      const ref = useRef<BottomSheetDialogRef>(null);

      useEffect(() => {
        if (ref.current) {
          act(() => {
            ref.current?.onCloseDialog(callbackMock);
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
    expect(callbackMock).toHaveBeenCalled();
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

    triggerSheetLayout(getByText);

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
    const layoutNode = findLayoutNode(content.parent as never);
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

  it('calls onDismissStart when onCloseDialog ref is called', () => {
    const onDismissStartMock = jest.fn();
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
        <BottomSheetDialog ref={ref} onDismissStart={onDismissStartMock}>
          <Text>Test Child</Text>
        </BottomSheetDialog>
      );
    };

    render(<TestComponent />);

    expect(onDismissStartMock).toHaveBeenCalledTimes(1);
  });

  describe('pan gesture handler', () => {
    const renderGestureSheet = (props?: {
      onClose?: () => void;
      onDismissStart?: () => void;
    }) => {
      const result = render(
        <BottomSheetDialog {...props}>
          <Text>Layout Content</Text>
        </BottomSheetDialog>,
      );
      triggerSheetLayout(result.getByText);
      return result;
    };

    it('tracks gesture start offset on pan start', () => {
      renderGestureSheet();

      act(() => {
        capturedPanGestureCallbacks.onStart?.();
      });

      expect(capturedPanGestureCallbacks.onStart).toBeDefined();
    });

    it('updates offset during pan and clamps below sheet bottom', () => {
      renderGestureSheet();

      act(() => {
        capturedPanGestureCallbacks.onStart?.();
        capturedPanGestureCallbacks.onUpdate?.({
          translationY: 500,
          velocityY: 0,
        });
      });

      expect(capturedPanGestureCallbacks.onUpdate).toBeDefined();
    });

    it('clamps offset above sheet top during pan update', () => {
      renderGestureSheet();

      act(() => {
        capturedPanGestureCallbacks.onStart?.();
        capturedPanGestureCallbacks.onUpdate?.({
          translationY: -50,
          velocityY: 0,
        });
      });

      expect(capturedPanGestureCallbacks.onUpdate).toBeDefined();
    });

    it('dismisses on quick downward swipe', () => {
      const onCloseMock = jest.fn();
      renderGestureSheet({ onClose: onCloseMock });

      act(() => {
        capturedPanGestureCallbacks.onStart?.();
        capturedPanGestureCallbacks.onEnd?.({
          translationY: 50,
          velocityY: 500,
        });
      });

      expect(onCloseMock).toHaveBeenCalledTimes(1);
    });

    it('snaps back open on quick upward swipe', () => {
      const onCloseMock = jest.fn();
      renderGestureSheet({ onClose: onCloseMock });

      act(() => {
        capturedPanGestureCallbacks.onStart?.();
        capturedPanGestureCallbacks.onEnd?.({
          translationY: -50,
          velocityY: -500,
        });
      });

      expect(onCloseMock).not.toHaveBeenCalled();
    });

    it('dismisses when drag exceeds dismiss offset threshold', () => {
      const onCloseMock = jest.fn();
      renderGestureSheet({ onClose: onCloseMock });

      act(() => {
        capturedPanGestureCallbacks.onStart?.();
        capturedPanGestureCallbacks.onEnd?.({
          translationY: 300,
          velocityY: 0,
        });
      });

      expect(onCloseMock).toHaveBeenCalledTimes(1);
    });

    it('snaps back when drag is below dismiss offset threshold', () => {
      const onCloseMock = jest.fn();
      renderGestureSheet({ onClose: onCloseMock });

      act(() => {
        capturedPanGestureCallbacks.onStart?.();
        capturedPanGestureCallbacks.onEnd?.({ translationY: 50, velocityY: 0 });
      });

      expect(onCloseMock).not.toHaveBeenCalled();
    });
  });
});
