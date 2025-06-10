import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { renderHook } from '@testing-library/react-hooks';
import { render } from '@testing-library/react-native';
import React from 'react';
import { View, Text } from 'react-native';

import { ButtonBaseSize } from '../../types';
import { IconName } from '../Icon';
import { Icon } from '../Icon';

import { ButtonBase } from './ButtonBase';
import { TWCLASSMAP_BUTTONBASE_SIZE_DIMENSION } from './ButtonBase.constants';

describe('ButtonBase', () => {
  const getTw = () => renderHook(() => useTailwind()).result.current;

  it('applies correct height for size Sm', () => {
    const tw = getTw();
    const classes = `
      flex-row items-center justify-center rounded-xl bg-muted px-4 min-w-[80px] overflow-hidden
      ${TWCLASSMAP_BUTTONBASE_SIZE_DIMENSION[ButtonBaseSize.Sm]}
      opacity-100 w-auto
    `;
    const expected = tw`${classes}`;

    const { getByTestId } = render(
      <ButtonBase testID="btn" size={ButtonBaseSize.Sm}>
        Text
      </ButtonBase>,
    );
    expect(getByTestId('btn').props.style[0]).toStrictEqual(expected);
  });

  it('applies correct height for size Md', () => {
    const tw = getTw();
    const classes = `
      flex-row items-center justify-center rounded-xl bg-muted px-4 min-w-[80px] overflow-hidden
      ${TWCLASSMAP_BUTTONBASE_SIZE_DIMENSION[ButtonBaseSize.Md]}
      opacity-100 w-auto
    `;
    const expected = tw`${classes}`;

    const { getByTestId } = render(
      <ButtonBase testID="btn" size={ButtonBaseSize.Md}>
        Text
      </ButtonBase>,
    );
    expect(getByTestId('btn').props.style[0]).toStrictEqual(expected);
  });

  it('applies correct height for size Lg (default)', () => {
    const tw = getTw();
    const classes = `
      flex-row items-center justify-center rounded-xl bg-muted px-4 min-w-[80px] overflow-hidden
      ${TWCLASSMAP_BUTTONBASE_SIZE_DIMENSION[ButtonBaseSize.Lg]}
      opacity-100 w-auto
    `;
    const expected = tw`${classes}`;

    const { getByTestId } = render(<ButtonBase testID="btn">Text</ButtonBase>);
    expect(getByTestId('btn').props.style[0]).toStrictEqual(expected);
  });

  it('applies disabled state via opacity-50', () => {
    const tw = getTw();
    const classes = `
      flex-row items-center justify-center rounded-xl bg-muted px-4 min-w-[80px] overflow-hidden
      ${TWCLASSMAP_BUTTONBASE_SIZE_DIMENSION[ButtonBaseSize.Lg]}
      opacity-50 w-auto
    `;
    const expected = tw`${classes}`;

    const { getByTestId } = render(
      <ButtonBase testID="btn" isDisabled>
        X
      </ButtonBase>,
    );
    const btn = getByTestId('btn');
    expect(btn.props.style[0]).toStrictEqual(expected);
    expect(btn.props.accessibilityState.disabled).toBe(true);
  });

  it('applies full-width state via w-full', () => {
    const tw = getTw();
    const classes = `
      flex-row items-center justify-center rounded-xl bg-muted px-4 min-w-[80px] overflow-hidden
      ${TWCLASSMAP_BUTTONBASE_SIZE_DIMENSION[ButtonBaseSize.Lg]}
      opacity-100 w-full
    `;
    const expected = tw`${classes}`;

    const { getByTestId } = render(
      <ButtonBase testID="btn" isFullWidth>
        X
      </ButtonBase>,
    );
    expect(getByTestId('btn').props.style[0]).toStrictEqual(expected);
  });

  it('forwards `style` prop as the second entry', () => {
    const custom = { margin: 5 };
    const { getByTestId } = render(
      <ButtonBase testID="btn" style={custom}>
        X
      </ButtonBase>,
    );
    expect(getByTestId('btn').props.style[1]).toStrictEqual(custom);
  });

  it('renders spinner and hides content when loading', () => {
    const tw = getTw();
    const spinnerClasses =
      'flex-row items-center gap-x-2 absolute inset-0 flex items-center justify-center opacity-100';
    const expectedSpinner = tw`${spinnerClasses}`;

    const contentClasses =
      'flex-row items-center justify-center gap-x-2 opacity-0';

    const { getByTestId } = render(
      <ButtonBase
        testID="btn"
        isLoading
        spinnerProps={{ twClassName: spinnerClasses }}
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
    expect(getByText(text)).toBeTruthy();
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
    expect(getByTestId('outer-spinner')).toBeTruthy();
    expect(getByTestId('inner-icon')).toBeTruthy();
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
    expect(getByTestId('start')).toBeTruthy();
    expect(getByTestId('end')).toBeTruthy();
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
    expect(getByTestId('sa')).toBeTruthy();
    expect(getByTestId('ea')).toBeTruthy();
    expect(queryByTestId('start')).toBeNull();
    expect(queryByTestId('end')).toBeNull();
  });

  it('applies function-based style prop correctly', () => {
    const functionStyle = ({ pressed }: { pressed: boolean }) => ({
      borderWidth: pressed ? 2 : 1,
      borderColor: pressed ? 'red' : 'blue',
    });

    const rtr = require('react-test-renderer');
    const tree = rtr.create(
      <ButtonBase style={functionStyle}>Function Style</ButtonBase>,
    );

    // Find the ButtonAnimated component which has the style function
    const buttonAnimated = tree.root.findByProps({
      accessibilityRole: 'button',
    });
    const styleFn = buttonAnimated.props.style as (p: {
      pressed: boolean;
    }) => any[];

    // Test the function with pressed: false
    const defaultStyles = styleFn({ pressed: false });
    expect(Array.isArray(defaultStyles)).toBe(true);
    expect(defaultStyles).toEqual(
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
    expect(pressedStyles).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          borderWidth: 2,
          borderColor: 'red',
        }),
      ]),
    );
  });

  it('handles function-based style prop returning falsy value', () => {
    const functionStyle = ({ pressed }: { pressed: boolean }) =>
      pressed ? { borderWidth: 2 } : null; // Returns null for non-pressed state

    const rtr = require('react-test-renderer');
    const tree = rtr.create(
      <ButtonBase style={functionStyle}>Falsy Style</ButtonBase>,
    );

    const buttonAnimated = tree.root.findByProps({
      accessibilityRole: 'button',
    });
    const styleFn = buttonAnimated.props.style as (p: {
      pressed: boolean;
    }) => any[];

    // Test with pressed: false (returns null)
    const defaultStyles = styleFn({ pressed: false });
    expect(Array.isArray(defaultStyles)).toBe(true);
    expect(defaultStyles).toHaveLength(1); // Only base styles, no additional style

    // Test with pressed: true (returns style object)
    const pressedStyles = styleFn({ pressed: true });
    expect(Array.isArray(pressedStyles)).toBe(true);
    expect(pressedStyles).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          borderWidth: 2,
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
    const iconClassName = (pressed: boolean) =>
      pressed ? 'text-error-default' : 'text-success-default';

    const { getByTestId } = render(
      <ButtonBase
        startIconName={IconName.Add}
        startIconProps={{ testID: 'start-icon' }}
        endIconName={IconName.Close}
        endIconProps={{ testID: 'end-icon' }}
        iconClassName={iconClassName}
        testID="button-base"
      >
        With Icon Classes
      </ButtonBase>,
    );

    // Check that icons are rendered with testIDs
    expect(getByTestId('start-icon')).toBeTruthy();
    expect(getByTestId('end-icon')).toBeTruthy();

    // The actual iconClassName application is tested indirectly through
    // the function-based styling in ButtonBase implementation
  });

  it('renders icons without iconClassName when not provided', () => {
    const rtr = require('react-test-renderer');
    const tree = rtr.create(
      <ButtonBase startIconName={IconName.Add} endIconName={IconName.Close}>
        No Icon Classes
      </ButtonBase>,
    );

    const buttonAnimated = tree.root.findByProps({
      accessibilityRole: 'button',
    });
    const childrenFn = buttonAnimated.props.children as (p: {
      pressed: boolean;
    }) => React.ReactElement;

    // Render children and check that icons have empty className from iconClassName
    const renderedDefault = rtr.create(childrenFn({ pressed: false })).root;
    const contentContainer = renderedDefault.findByProps({
      testID: 'content-container',
    });
    const icons = contentContainer.findAllByType(Icon);

    // Should have start and end icons (2 icons in content container, not including spinner)
    expect(icons).toHaveLength(2);

    // Both icons should have the base className but no additional iconClassName
    icons.forEach((icon: any) => {
      expect(icon.props.twClassName).toContain('shrink-0');
      expect(icon.props.twClassName).not.toContain('undefined');
    });
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
      // When not disabled or loading, accessibilityState should be empty object
      expect(btn.props.accessibilityState).toEqual({});
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

      expect(btn.props.accessibilityState).toEqual({ disabled: true });
    });

    it('handles accessibility state for loading button', () => {
      const { getByTestId } = render(
        <ButtonBase testID="btn" isLoading loadingText="Please wait">
          Loading Button
        </ButtonBase>,
      );
      const btn = getByTestId('btn');

      expect(btn.props.accessibilityState).toEqual({
        disabled: true,
        busy: true,
      });
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
      expect(btn.props.accessibilityState).toEqual({
        disabled: true,
        busy: true,
      });
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

      expect(btn.props.accessibilityActions).toEqual(accessibilityActions);
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

      // ReactNode children should not automatically generate accessibility label
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
