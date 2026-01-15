import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { renderHook } from '@testing-library/react-hooks';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import React from 'react';
import { View, Text } from 'react-native';
import * as ReactTestRenderer from 'react-test-renderer';

import { ButtonBaseSize, IconName } from '../../types';

import { ButtonBase } from './ButtonBase';

describe('ButtonBase', () => {
  const getTw = () => renderHook(() => useTailwind()).result.current;

  // Helper functions to avoid conditionals in tests
  const createFunctionStyle =
    () =>
    ({ pressed }: { pressed: boolean }) => {
      if (pressed) {
        return {
          borderWidth: 2,
          borderColor: 'red',
        };
      }
      return {
        borderWidth: 1,
        borderColor: 'blue',
      };
    };

  const createFalsyStyleFunction =
    () =>
    ({ pressed }: { pressed: boolean }) => {
      if (pressed) {
        return { borderWidth: 2 };
      }
      return null;
    };

  it('renders children correctly', () => {
    const { getByText } = render(<ButtonBase>Click me</ButtonBase>);
    expect(getByText('Click me')).toBeDefined();
  });

  it('applies the correct size styles', () => {
    const { getByTestId } = render(
      <ButtonBase size={ButtonBaseSize.Sm} testID="btn">
        Small button
      </ButtonBase>,
    );
    const btn = getByTestId('btn');
    expect(btn).toBeDefined();
  });

  it('applies custom className when provided', () => {
    const customClass = 'bg-default';
    const { getByTestId } = render(
      <ButtonBase twClassName={customClass} testID="btn">
        Custom button
      </ButtonBase>,
    );
    const btn = getByTestId('btn');
    expect(btn).toBeDefined();
  });

  it('applies function-based twClassName correctly', () => {
    const twClassNameFn = (pressed: boolean) =>
      pressed ? 'bg-pressed' : 'bg-default';

    const tree = ReactTestRenderer.create(
      <ButtonBase twClassName={twClassNameFn}>Function ClassName</ButtonBase>,
    );

    const buttonAnimated = tree.root.findByProps({
      accessibilityRole: 'button',
    });
    const styleFn = buttonAnimated.props.style as (p: {
      pressed: boolean;
    }) => unknown[];

    // Test both pressed states to cover the branch
    expect(styleFn({ pressed: false })).toBeDefined();
    expect(styleFn({ pressed: true })).toBeDefined();
  });

  it('applies full width class when isFullWidth is true', () => {
    const { getByTestId } = render(
      <ButtonBase isFullWidth testID="btn">
        Full width
      </ButtonBase>,
    );
    const btn = getByTestId('btn');
    expect(btn).toBeDefined();
  });

  it('disables the button when isDisabled is true', () => {
    const { getByTestId } = render(
      <ButtonBase isDisabled testID="btn">
        Disabled
      </ButtonBase>,
    );
    const btn = getByTestId('btn');
    expect(btn.props.accessibilityState.disabled).toBe(true);
  });

  it('handles press events correctly', async () => {
    const onPress = jest.fn();
    const { getByTestId } = render(
      <ButtonBase onPress={onPress} testID="btn">
        Press me
      </ButtonBase>,
    );
    const btn = getByTestId('btn');
    fireEvent.press(btn);
    await waitFor(() => {
      expect(onPress).toHaveBeenCalledTimes(1);
    });
  });

  it('does not call onPress when disabled', async () => {
    const onPress = jest.fn();
    const { getByTestId } = render(
      <ButtonBase onPress={onPress} isDisabled testID="btn">
        Disabled
      </ButtonBase>,
    );
    const btn = getByTestId('btn');
    fireEvent.press(btn);
    await waitFor(() => {
      expect(onPress).not.toHaveBeenCalled();
    });
  });

  it('renders with default textProps when not provided', () => {
    const { getByText } = render(<ButtonBase>Default text</ButtonBase>);
    expect(getByText('Default text')).toBeDefined();
  });

  it('merges custom textProps with defaults', () => {
    const { getByText } = render(
      <ButtonBase textProps={{ numberOfLines: 2 }}>
        Custom text props
      </ButtonBase>,
    );
    expect(getByText('Custom text props')).toBeDefined();
  });

  it('renders spinner and hides content when loading', () => {
    const tw = getTw();
    const spinnerClasses =
      'flex-row items-center gap-x-2 absolute inset-0 flex items-center justify-center opacity-100';
    const expectedSpinner = tw.style(
      'flex-row items-center gap-x-2',
      spinnerClasses,
    );

    const { getByTestId } = render(
      <ButtonBase
        testID="btn"
        isLoading
        spinnerProps={{ twClassName: spinnerClasses, testID: 'spinner' }}
      >
        Loading
      </ButtonBase>,
    );
    expect(getByTestId('spinner').props.style[0]).toStrictEqual(
      expectedSpinner,
    );
    expect(getByTestId('btn').props.accessibilityState.disabled).toBe(true);
  });

  it('shows loadingText inside the spinner', () => {
    const text = 'Please wait…';
    const { getByText } = render(
      <ButtonBase isLoading loadingText={text}>
        X
      </ButtonBase>,
    );
    expect(getByText(text)).toBeDefined();
  });

  it('forwards spinnerProps into Spinner', () => {
    const { getByTestId } = render(
      <ButtonBase
        testID="btn"
        isLoading
        spinnerProps={{
          testID: 'outer-spinner',
          spinnerIconProps: { testID: 'inner-icon' },
        }}
      >
        X
      </ButtonBase>,
    );
    expect(getByTestId('outer-spinner')).toBeDefined();
    expect(getByTestId('inner-icon')).toBeDefined();
  });

  it('renders start and end icons when names are provided', () => {
    const { getByTestId } = render(
      <ButtonBase
        startIconName={IconName.Add}
        startIconProps={{ testID: 'start' }}
        endIconName={IconName.Close}
        endIconProps={{ testID: 'end' }}
      >
        X
      </ButtonBase>,
    );
    expect(getByTestId('start')).toBeDefined();
    expect(getByTestId('end')).toBeDefined();
  });

  it('renders custom accessories when icon names are omitted', () => {
    const { getByTestId, queryByTestId } = render(
      <ButtonBase
        startAccessory={<View testID="sa" />}
        endAccessory={<View testID="ea" />}
      >
        X
      </ButtonBase>,
    );
    expect(getByTestId('sa')).toBeDefined();
    expect(getByTestId('ea')).toBeDefined();
    expect(queryByTestId('start')).toBeNull();
    expect(queryByTestId('end')).toBeNull();
  });

  it('renders custom accessories in loading state', () => {
    const tree = ReactTestRenderer.create(
      <ButtonBase
        isLoading
        startAccessory={<View testID="sa" />}
        endAccessory={<View testID="ea" />}
        testID="btn"
      >
        Loading
      </ButtonBase>,
    );

    // Find the accessory views
    const startAccessory = tree.root.findByProps({ testID: 'sa' });
    const endAccessory = tree.root.findByProps({ testID: 'ea' });

    expect(startAccessory).toBeDefined();
    expect(endAccessory).toBeDefined();

    // Verify the wrapper Views have opacity-0 when loading
    // The accessories are wrapped in View with tw.style(isLoading && 'opacity-0')
    const startWrapper = startAccessory.parent;
    const endWrapper = endAccessory.parent;

    expect(startWrapper?.props.style).toStrictEqual(
      expect.objectContaining({ opacity: 0 }),
    );
    expect(endWrapper?.props.style).toStrictEqual(
      expect.objectContaining({ opacity: 0 }),
    );
  });

  it('applies function-based style prop correctly', () => {
    const functionStyle = createFunctionStyle();

    const tree = ReactTestRenderer.create(
      <ButtonBase style={functionStyle}>Function Style</ButtonBase>,
    );

    // Find the ButtonAnimated component which has the style function
    const buttonAnimated = tree.root.findByProps({
      accessibilityRole: 'button',
    });
    const styleFn = buttonAnimated.props.style as (p: {
      pressed: boolean;
    }) => unknown[];

    // Test the function with pressed: false
    const defaultStyles = styleFn({ pressed: false });
    expect(Array.isArray(defaultStyles)).toBe(true);
    expect(defaultStyles).toStrictEqual(
      expect.arrayContaining([
        expect.objectContaining({
          borderWidth: 1,
          borderColor: 'blue',
        }),
      ]),
    );

    // Test the function with pressed: true
    const pressedStyles = styleFn({ pressed: true });
    expect(Array.isArray(pressedStyles)).toBe(true);
    expect(pressedStyles).toStrictEqual(
      expect.arrayContaining([
        expect.objectContaining({
          borderWidth: 2,
          borderColor: 'red',
        }),
      ]),
    );
  });

  it('handles function-based style prop returning falsy value', () => {
    const falsyStyleFunction = createFalsyStyleFunction();

    const tree = ReactTestRenderer.create(
      <ButtonBase style={falsyStyleFunction}>Falsy Style</ButtonBase>,
    );

    const buttonAnimated = tree.root.findByProps({
      accessibilityRole: 'button',
    });
    const styleFn = buttonAnimated.props.style as (p: {
      pressed: boolean;
    }) => unknown[];

    // Test with pressed: false (returns null)
    const defaultStyles = styleFn({ pressed: false });
    expect(Array.isArray(defaultStyles)).toBe(true);
    expect(defaultStyles).toHaveLength(1); // Only base styles, no additional style

    // Test with pressed: true (returns style object)
    const pressedStyles = styleFn({ pressed: true });
    expect(Array.isArray(pressedStyles)).toBe(true);
    expect(pressedStyles).toStrictEqual(
      expect.arrayContaining([
        expect.objectContaining({
          borderWidth: 2,
        }),
      ]),
    );
  });

  it('applies static style prop correctly', () => {
    const staticStyle = { borderWidth: 3, borderColor: 'green' };

    const tree = ReactTestRenderer.create(
      <ButtonBase style={staticStyle}>Static Style</ButtonBase>,
    );

    const buttonAnimated = tree.root.findByProps({
      accessibilityRole: 'button',
    });
    const styleFn = buttonAnimated.props.style as (p: {
      pressed: boolean;
    }) => unknown[];

    const styles = styleFn({ pressed: false });
    expect(Array.isArray(styles)).toBe(true);
    expect(styles).toStrictEqual(
      expect.arrayContaining([
        expect.objectContaining({
          borderWidth: 3,
          borderColor: 'green',
        }),
      ]),
    );
  });

  it('renders without start or end icons when not provided', () => {
    const { queryByTestId } = render(<ButtonBase>No Icons</ButtonBase>);

    // Should not render start or end icons
    expect(queryByTestId('start-icon')).toBeNull();
    expect(queryByTestId('end-icon')).toBeNull();
  });

  it('applies iconClassName when provided with icons', () => {
    const iconClassNameFn = (pressed: boolean) =>
      pressed ? 'icon-pressed' : 'icon-default';

    const tree = ReactTestRenderer.create(
      <ButtonBase
        startIconName={IconName.Add}
        startIconProps={{ testID: 'start-icon' }}
        endIconName={IconName.Close}
        endIconProps={{ testID: 'end-icon' }}
        iconClassName={iconClassNameFn}
        testID="button-base"
      >
        With Icon Classes
      </ButtonBase>,
    );

    const buttonAnimated = tree.root.findByProps({
      accessibilityRole: 'button',
    });

    // Verify the iconClassName function is called with pressed states
    const childrenFn = buttonAnimated.props.children;
    expect(typeof childrenFn).toBe('function');

    // Test both pressed states
    const unpressedContent = childrenFn({ pressed: false });
    const pressedContent = childrenFn({ pressed: true });

    expect(unpressedContent).toBeDefined();
    expect(pressedContent).toBeDefined();
  });

  it('applies textClassName when provided', () => {
    const textClassNameFn = (pressed: boolean) =>
      pressed ? 'text-pressed' : 'text-default';

    const tree = ReactTestRenderer.create(
      <ButtonBase textClassName={textClassNameFn}>
        Text with className
      </ButtonBase>,
    );

    const buttonAnimated = tree.root.findByProps({
      accessibilityRole: 'button',
    });

    // Verify the textClassName function is called with pressed states
    const childrenFn = buttonAnimated.props.children;
    expect(typeof childrenFn).toBe('function');

    // Test both pressed states to ensure function is working
    const unpressedContent = childrenFn({ pressed: false });
    const pressedContent = childrenFn({ pressed: true });

    expect(unpressedContent).toBeDefined();
    expect(pressedContent).toBeDefined();
  });

  it('applies textClassName in loading state', () => {
    const textClassNameFn = (pressed: boolean) =>
      pressed ? 'text-pressed' : 'text-default';

    const tree = ReactTestRenderer.create(
      <ButtonBase
        isLoading
        loadingText="Loading"
        textClassName={textClassNameFn}
        testID="btn"
      >
        Content
      </ButtonBase>,
    );

    const buttonAnimated = tree.root.findByProps({
      accessibilityRole: 'button',
    });

    // Verify the textClassName function works in loading state
    const childrenFn = buttonAnimated.props.children;
    expect(typeof childrenFn).toBe('function');

    // Test both pressed states
    const unpressedContent = childrenFn({ pressed: false });
    const pressedContent = childrenFn({ pressed: true });

    expect(unpressedContent).toBeDefined();
    expect(pressedContent).toBeDefined();
  });

  it('applies iconClassName in loading state', () => {
    const iconClassNameFn = (pressed: boolean) =>
      pressed ? 'icon-pressed' : 'icon-default';

    const tree = ReactTestRenderer.create(
      <ButtonBase
        isLoading
        startIconName={IconName.Add}
        startIconProps={{ testID: 'start-icon' }}
        endIconName={IconName.Close}
        endIconProps={{ testID: 'end-icon' }}
        iconClassName={iconClassNameFn}
        testID="btn"
      >
        Loading with icons
      </ButtonBase>,
    );

    const buttonAnimated = tree.root.findByProps({
      accessibilityRole: 'button',
    });

    // Verify the iconClassName function works in loading state
    const childrenFn = buttonAnimated.props.children;
    expect(typeof childrenFn).toBe('function');

    // Test both pressed states
    const unpressedContent = childrenFn({ pressed: false });
    const pressedContent = childrenFn({ pressed: true });

    expect(unpressedContent).toBeDefined();
    expect(pressedContent).toBeDefined();
  });

  it('renders icons without iconClassName when not provided', () => {
    const tree = ReactTestRenderer.create(
      <ButtonBase startIconName={IconName.Add} endIconName={IconName.Close}>
        No Icon Classes
      </ButtonBase>,
    );

    const buttonAnimated = tree.root.findByProps({
      accessibilityRole: 'button',
    });

    expect(buttonAnimated).toBeDefined();
  });

  describe('Accessibility', () => {
    it('applies default accessibility props', () => {
      const { getByTestId } = render(
        <ButtonBase testID="btn">Default Button</ButtonBase>,
      );
      const btn = getByTestId('btn');

      expect(btn.props.accessible).toBe(true);
      expect(btn.props.accessibilityRole).toBe('button');
      expect(btn.props.accessibilityLabel).toBe('Default Button');
      // eslint-disable-next-line jest/prefer-strict-equal
      expect(btn.props.accessibilityState).toEqual(
        expect.not.objectContaining({
          disabled: true,
          busy: true,
        }),
      );
    });

    it('applies custom accessibility props', () => {
      const { getByTestId } = render(
        <ButtonBase
          testID="btn"
          accessibilityLabel="Custom Label"
          accessibilityHint="Custom Hint"
          accessibilityRole="link"
        >
          Button Text
        </ButtonBase>,
      );
      const btn = getByTestId('btn');

      expect(btn.props.accessibilityLabel).toBe('Custom Label');
      expect(btn.props.accessibilityHint).toBe('Custom Hint');
      expect(btn.props.accessibilityRole).toBe('link');
    });

    it('handles accessibility state for disabled button', () => {
      const { getByTestId } = render(
        <ButtonBase testID="btn" isDisabled>
          Disabled Button
        </ButtonBase>,
      );
      const btn = getByTestId('btn');

      // eslint-disable-next-line jest/prefer-strict-equal
      expect(btn.props.accessibilityState).toEqual(
        expect.objectContaining({ disabled: true }),
      );
    });

    it('handles accessibility state for loading button', () => {
      const { getByTestId } = render(
        <ButtonBase testID="btn" isLoading loadingText="Please wait">
          Loading Button
        </ButtonBase>,
      );
      const btn = getByTestId('btn');

      // eslint-disable-next-line jest/prefer-strict-equal
      expect(btn.props.accessibilityState).toEqual(
        expect.objectContaining({
          disabled: true,
          busy: true,
        }),
      );
      expect(btn.props.accessibilityLabel).toBe('Please wait');
      expect(btn.props.accessibilityHint).toBe(
        'Button is currently loading, please wait',
      );
    });

    it('handles loading accessibility without loadingText', () => {
      const { getByTestId } = render(
        <ButtonBase testID="btn" isLoading>
          Button
        </ButtonBase>,
      );
      const btn = getByTestId('btn');

      expect(btn.props.accessibilityLabel).toBe('Button');
      expect(btn.props.accessibilityHint).toBe(
        'Button is currently loading, please wait',
      );
      // eslint-disable-next-line jest/prefer-strict-equal
      expect(btn.props.accessibilityState).toEqual(
        expect.objectContaining({
          disabled: true,
          busy: true,
        }),
      );
    });

    it('prioritizes custom accessibility hint over loading hint', () => {
      const { getByTestId } = render(
        <ButtonBase
          testID="btn"
          isLoading
          accessibilityHint="Custom loading hint"
        >
          Button
        </ButtonBase>,
      );
      const btn = getByTestId('btn');

      expect(btn.props.accessibilityHint).toBe('Custom loading hint');
    });

    it('supports accessibility actions', () => {
      const mockActionHandler = jest.fn();
      const accessibilityActions = [
        { name: 'longpress', label: 'Long press for options' },
      ];

      const { getByTestId } = render(
        <ButtonBase
          testID="btn"
          accessibilityActions={accessibilityActions}
          onAccessibilityAction={mockActionHandler}
        >
          Action Button
        </ButtonBase>,
      );
      const btn = getByTestId('btn');

      expect(btn.props.accessibilityActions).toStrictEqual(
        accessibilityActions,
      );
      expect(btn.props.onAccessibilityAction).toBe(mockActionHandler);
    });

    it('uses children as accessibility label for ReactNode children', () => {
      const { getByTestId } = render(
        <ButtonBase testID="btn">
          <View>
            <Text>Complex Content</Text>
          </View>
        </ButtonBase>,
      );
      const btn = getByTestId('btn');

      expect(btn.props.accessibilityLabel).toBeUndefined();
    });

    it('uses string children as accessibility label', () => {
      const { getByTestId } = render(
        <ButtonBase testID="btn">Simple Text</ButtonBase>,
      );
      const btn = getByTestId('btn');

      expect(btn.props.accessibilityLabel).toBe('Simple Text');
    });
  });
});
