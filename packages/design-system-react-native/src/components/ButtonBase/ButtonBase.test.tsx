import {
  ButtonBaseShape,
  ButtonBaseSize,
  IconName,
} from '@metamask/design-system-shared';
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { renderHook } from '@testing-library/react-hooks';
import { render, fireEvent } from '@testing-library/react-native';
import React from 'react';
import { View, Text } from 'react-native';
import * as ReactTestRenderer from 'react-test-renderer';

import { getButtonBaseBorderRadiusTwClass } from './ButtonBase.constants';
import { ButtonBase } from './ButtonBase';

describe('ButtonBase', () => {
  let tw: ReturnType<typeof useTailwind>;

  beforeAll(() => {
    tw = renderHook(() => useTailwind()).result.current;
  });

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

  describe('rendering', () => {
    it('displays string children', () => {
      const { getByText } = render(<ButtonBase>Click me</ButtonBase>);

      expect(getByText('Click me')).toBeOnTheScreen();
    });

    it('displays element children', () => {
      const { getByText } = render(
        <ButtonBase>
          <Text>Nested</Text>
        </ButtonBase>,
      );

      expect(getByText('Nested')).toBeOnTheScreen();
    });
  });

  describe('size', () => {
    it('applies small height when size is sm', () => {
      const { getByTestId } = render(
        <ButtonBase size={ButtonBaseSize.Sm} testID="btn">
          Small
        </ButtonBase>,
      );

      expect(getByTestId('btn')).toHaveStyle(tw`h-8`);
    });

    it('applies medium height when size is md', () => {
      const { getByTestId } = render(
        <ButtonBase size={ButtonBaseSize.Md} testID="btn">
          Medium
        </ButtonBase>,
      );

      expect(getByTestId('btn')).toHaveStyle(tw`h-10`);
    });

    it('applies large height by default', () => {
      const { getByTestId } = render(
        <ButtonBase testID="btn">Large default</ButtonBase>,
      );

      expect(getByTestId('btn')).toHaveStyle(tw`h-12`);
    });
  });

  describe('shape', () => {
    it('uses rounded-full for pill shape', () => {
      const tree = ReactTestRenderer.create(
        <ButtonBase shape={ButtonBaseShape.Pill} size={ButtonBaseSize.Lg}>
          Pill
        </ButtonBase>,
      );

      const buttonAnimated = tree.root.findByProps({
        accessibilityRole: 'button',
      });
      const styleFn = buttonAnimated.props.style as (p: {
        pressed: boolean;
      }) => unknown[];
      const resolved = styleFn({ pressed: false })[0] as Record<
        string,
        unknown
      >;
      const pillRadiusStyle = tw.style(
        getButtonBaseBorderRadiusTwClass(
          ButtonBaseSize.Lg,
          ButtonBaseShape.Pill,
        ),
      );

      expect(resolved).toMatchObject(pillRadiusStyle);
    });
  });

  describe('twClassName', () => {
    it('merges static classes onto the button', () => {
      const { getByTestId } = render(
        <ButtonBase twClassName="bg-default" testID="btn">
          Custom
        </ButtonBase>,
      );

      expect(getByTestId('btn')).toHaveStyle(tw`bg-default`);
    });

    it('evaluates function twClassName for pressed state', () => {
      const twClassNameFn = (pressed: boolean) =>
        pressed ? 'bg-pressed' : 'bg-default';

      const tree = ReactTestRenderer.create(
        <ButtonBase twClassName={twClassNameFn}>Fn twClassName</ButtonBase>,
      );

      const buttonAnimated = tree.root.findByProps({
        accessibilityRole: 'button',
      });
      const styleFn = buttonAnimated.props.style as (p: {
        pressed: boolean;
      }) => unknown[];

      expect(styleFn({ pressed: false })).toBeDefined();
      expect(styleFn({ pressed: true })).toBeDefined();
    });
  });

  describe('layout width', () => {
    it('expands to full width when isFullWidth is true', () => {
      const { getByTestId } = render(
        <ButtonBase isFullWidth testID="btn">
          Full width
        </ButtonBase>,
      );

      expect(getByTestId('btn')).toHaveStyle(tw`w-full`);
    });
  });

  describe('style prop', () => {
    it('merges function style when pressed changes', () => {
      const functionStyle = createFunctionStyle();

      const tree = ReactTestRenderer.create(
        <ButtonBase style={functionStyle}>Function Style</ButtonBase>,
      );

      const buttonAnimated = tree.root.findByProps({
        accessibilityRole: 'button',
      });
      const styleFn = buttonAnimated.props.style as (p: {
        pressed: boolean;
      }) => unknown[];

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

    it('omits extra styles when function returns null when not pressed', () => {
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

      const defaultStyles = styleFn({ pressed: false });

      expect(Array.isArray(defaultStyles)).toBe(true);
      expect(defaultStyles).toHaveLength(1);

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

    it('merges static style objects', () => {
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
  });

  describe('interaction', () => {
    it('invokes onPress when pressed', () => {
      const onPress = jest.fn();

      const { getByTestId } = render(
        <ButtonBase onPress={onPress} testID="btn">
          Press me
        </ButtonBase>,
      );

      fireEvent.press(getByTestId('btn'));

      expect(onPress).toHaveBeenCalledTimes(1);
    });

    it('does not invoke onPress when disabled', () => {
      const onPress = jest.fn();

      const { getByTestId } = render(
        <ButtonBase onPress={onPress} isDisabled testID="btn">
          Disabled
        </ButtonBase>,
      );

      const btn = getByTestId('btn');
      fireEvent.press(btn);

      expect(onPress).not.toHaveBeenCalled();
      expect(btn).toBeDisabled();
    });

    it('does not invoke onPress when loading', () => {
      const onPress = jest.fn();

      const { getByTestId } = render(
        <ButtonBase onPress={onPress} isLoading testID="btn">
          Load
        </ButtonBase>,
      );

      fireEvent.press(getByTestId('btn'));

      expect(onPress).not.toHaveBeenCalled();
    });
  });

  describe('textProps', () => {
    it('passes through textProps to string labels', () => {
      const { getByText } = render(
        <ButtonBase textProps={{ numberOfLines: 2 }}>
          Custom text props
        </ButtonBase>,
      );

      expect(getByText('Custom text props')).toBeOnTheScreen();
    });
  });

  describe('loading state', () => {
    it('centers the spinner overlay and disables the control', () => {
      const spinnerExtra =
        'flex-row items-center gap-x-2 absolute inset-0 flex items-center justify-center opacity-100';
      const expectedSpinner = tw.style(
        'flex-row items-center gap-x-2',
        spinnerExtra,
      );

      const { getByTestId } = render(
        <ButtonBase
          testID="btn"
          isLoading
          spinnerProps={{ twClassName: spinnerExtra, testID: 'spinner' }}
        >
          Loading
        </ButtonBase>,
      );

      expect(getByTestId('spinner').props.style[0]).toStrictEqual(
        expectedSpinner,
      );
      expect(getByTestId('spinner-container')).toHaveStyle(
        tw`absolute inset-0 flex items-center justify-center`,
      );
      expect(getByTestId('btn')).toBeDisabled();
    });

    it('renders loadingText in the spinner', () => {
      const text = 'Please wait…';

      const { getByText } = render(
        <ButtonBase isLoading loadingText={text}>
          X
        </ButtonBase>,
      );

      expect(getByText(text)).toBeOnTheScreen();
    });

    it('forwards spinnerProps to Spinner', () => {
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

      expect(getByTestId('outer-spinner')).toBeOnTheScreen();
      expect(getByTestId('inner-icon')).toBeOnTheScreen();
    });

    it('hides the content row with opacity while keeping layout', () => {
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

      const startAccessory = tree.root.findByProps({ testID: 'sa' });
      const endAccessory = tree.root.findByProps({ testID: 'ea' });

      const startWrapper = startAccessory.parent;
      const endWrapper = endAccessory.parent;

      expect(startWrapper).toBe(endWrapper);
      const rowStyle = startWrapper?.props.style;
      const rowStyleObject = Array.isArray(rowStyle) ? rowStyle[0] : rowStyle;
      expect(rowStyleObject).toMatchObject({ opacity: 0 });
    });

    it('hides non-string children during loading', () => {
      const tree = ReactTestRenderer.create(
        <ButtonBase isLoading testID="btn">
          <View testID="custom-child">
            <View testID="nested-content" />
          </View>
        </ButtonBase>,
      );

      const customChild = tree.root.findByProps({ testID: 'custom-child' });

      let opacityAncestor: ReactTestRenderer.ReactTestInstance | undefined =
        customChild.parent ?? undefined;
      let foundRowOpacity = false;
      while (opacityAncestor) {
        const s = opacityAncestor.props.style;
        const flat = Array.isArray(s) ? s[0] : s;
        if (flat && typeof flat === 'object' && flat.opacity === 0) {
          foundRowOpacity = true;
          break;
        }
        opacityAncestor = opacityAncestor.parent ?? undefined;
      }

      expect(foundRowOpacity).toBe(true);
    });
  });

  describe('icons and accessories', () => {
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

      expect(getByTestId('start')).toBeOnTheScreen();
      expect(getByTestId('end')).toBeOnTheScreen();
    });

    it('uses startIconProps.name when startIconName is omitted', () => {
      const { getByTestId } = render(
        <ButtonBase
          startIconProps={{ name: IconName.Add, testID: 'start-from-props' }}
        >
          X
        </ButtonBase>,
      );

      expect(getByTestId('start-from-props')).toBeOnTheScreen();
    });

    it('uses endIconProps.name when endIconName is omitted', () => {
      const { getByTestId } = render(
        <ButtonBase
          endIconProps={{ name: IconName.Close, testID: 'end-from-props' }}
        >
          X
        </ButtonBase>,
      );

      expect(getByTestId('end-from-props')).toBeOnTheScreen();
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

      expect(getByTestId('sa')).toBeOnTheScreen();
      expect(getByTestId('ea')).toBeOnTheScreen();
      expect(queryByTestId('start')).toBeNull();
      expect(queryByTestId('end')).toBeNull();
    });

    it('displays only the label when no icons or accessories are set', () => {
      const { getByText, queryByTestId } = render(
        <ButtonBase>No side content</ButtonBase>,
      );

      expect(getByText('No side content')).toBeOnTheScreen();
      expect(queryByTestId('start-icon')).toBeNull();
    });
  });

  describe('when iconClassName and textClassName are set', () => {
    it('supplies children render function for icon and text class hooks', () => {
      const iconClassNameFn = (pressed: boolean) =>
        pressed ? 'icon-pressed' : 'icon-default';
      const textClassNameFn = (pressed: boolean) =>
        pressed ? 'text-pressed' : 'text-default';

      const tree = ReactTestRenderer.create(
        <ButtonBase
          startIconName={IconName.Add}
          startIconProps={{ testID: 'start-icon' }}
          endIconName={IconName.Close}
          endIconProps={{ testID: 'end-icon' }}
          iconClassName={iconClassNameFn}
          textClassName={textClassNameFn}
          testID="button-base"
        >
          With classes
        </ButtonBase>,
      );

      const buttonAnimated = tree.root.findByProps({
        accessibilityRole: 'button',
      });
      const childrenFn = buttonAnimated.props.children as (p: {
        pressed: boolean;
      }) => React.ReactNode;

      expect(typeof childrenFn).toBe('function');
      expect(childrenFn({ pressed: false })).toBeDefined();
      expect(childrenFn({ pressed: true })).toBeDefined();
    });

    it('applies class hooks while loading with icons', () => {
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
      const childrenFn = buttonAnimated.props.children as (p: {
        pressed: boolean;
      }) => React.ReactNode;

      expect(typeof childrenFn).toBe('function');
      expect(childrenFn({ pressed: false })).toBeDefined();
      expect(childrenFn({ pressed: true })).toBeDefined();
    });

    it('applies textClassName hooks while loading', () => {
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
      const childrenFn = buttonAnimated.props.children as (p: {
        pressed: boolean;
      }) => React.ReactNode;

      expect(typeof childrenFn).toBe('function');
      expect(childrenFn({ pressed: false })).toBeDefined();
      expect(childrenFn({ pressed: true })).toBeDefined();
    });

    it('renders icons without extra classes when hooks are omitted', () => {
      const { getByText } = render(
        <ButtonBase startIconName={IconName.Add} endIconName={IconName.Close}>
          Plain icons
        </ButtonBase>,
      );

      expect(getByText('Plain icons')).toBeOnTheScreen();
    });
  });

  describe('Accessibility', () => {
    it('sets role button and derives label from string children', () => {
      const { getByTestId } = render(
        <ButtonBase testID="btn">Default Button</ButtonBase>,
      );
      const btn = getByTestId('btn');

      expect(btn.props.accessible).toBe(true);
      expect(btn.props.accessibilityRole).toBe('button');
      expect(btn.props.accessibilityLabel).toBe('Default Button');
      expect(btn.props.accessibilityState).toEqual(
        expect.not.objectContaining({
          disabled: true,
          busy: true,
        }),
      );
    });

    it('respects custom accessibilityLabel, hint, and role', () => {
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

    it('marks disabled state when isDisabled', () => {
      const { getByTestId } = render(
        <ButtonBase testID="btn" isDisabled>
          Disabled Button
        </ButtonBase>,
      );
      const btn = getByTestId('btn');

      expect(btn.props.accessibilityState).toEqual(
        expect.objectContaining({ disabled: true }),
      );
      expect(btn).toBeDisabled();
    });

    it('marks loading state and prefers loadingText as label when provided', () => {
      const { getByTestId } = render(
        <ButtonBase testID="btn" isLoading loadingText="Please wait">
          Loading Button
        </ButtonBase>,
      );
      const btn = getByTestId('btn');

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
      expect(btn).toBeDisabled();
    });

    it('prefers explicit accessibilityLabel over loadingText when loading', () => {
      const { getByTestId } = render(
        <ButtonBase
          testID="btn"
          isLoading
          loadingText="Wait text"
          accessibilityLabel="Announce me"
        >
          Hidden label
        </ButtonBase>,
      );

      expect(getByTestId('btn').props.accessibilityLabel).toBe('Announce me');
    });

    it('uses string children as label when loading without loadingText', () => {
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
      expect(btn.props.accessibilityState).toEqual(
        expect.objectContaining({
          disabled: true,
          busy: true,
        }),
      );
    });

    it('uses custom accessibilityHint instead of the loading hint', () => {
      const { getByTestId } = render(
        <ButtonBase
          testID="btn"
          isLoading
          accessibilityHint="Custom loading hint"
        >
          Button
        </ButtonBase>,
      );

      expect(getByTestId('btn').props.accessibilityHint).toBe(
        'Custom loading hint',
      );
    });

    it('forwards accessibility actions', () => {
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

    it('leaves accessibilityLabel undefined for complex element children', () => {
      const { getByTestId } = render(
        <ButtonBase testID="btn">
          <View>
            <Text>Complex Content</Text>
          </View>
        </ButtonBase>,
      );

      expect(getByTestId('btn').props.accessibilityLabel).toBeUndefined();
    });

    it('uses string children as the accessibility label', () => {
      const { getByTestId } = render(
        <ButtonBase testID="btn">Simple Text</ButtonBase>,
      );

      expect(getByTestId('btn').props.accessibilityLabel).toBe('Simple Text');
    });
  });
});
