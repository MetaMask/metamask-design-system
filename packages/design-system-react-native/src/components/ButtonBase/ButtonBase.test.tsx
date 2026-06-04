import { ButtonBaseSize, IconName } from '@metamask/design-system-shared';
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { fireEvent, render, renderHook } from '@testing-library/react-native';
import React from 'react';
import { View, Text } from 'react-native';

import { ButtonBase } from './ButtonBase';

describe('ButtonBase', () => {
  let tw: ReturnType<typeof useTailwind>;

  beforeAll(async () => {
    const { result } = await renderHook(() => useTailwind());
    tw = result.current;
  });

  describe('rendering', () => {
    it('displays string children', async () => {
      const { getByText } = await render(<ButtonBase>Click me</ButtonBase>);

      expect(getByText('Click me')).toBeOnTheScreen();
    });

    it('displays element children', async () => {
      const { getByText } = await render(
        <ButtonBase>
          <Text>Nested</Text>
        </ButtonBase>,
      );

      expect(getByText('Nested')).toBeOnTheScreen();
    });
  });

  describe('size', () => {
    it('applies small height when size is sm', async () => {
      const { getByTestId } = await render(
        <ButtonBase size={ButtonBaseSize.Sm} testID="btn">
          Small
        </ButtonBase>,
      );

      expect(getByTestId('btn')).toHaveStyle(tw`h-8`);
    });

    it('applies medium height when size is md', async () => {
      const { getByTestId } = await render(
        <ButtonBase size={ButtonBaseSize.Md} testID="btn">
          Medium
        </ButtonBase>,
      );

      expect(getByTestId('btn')).toHaveStyle(tw`h-10`);
    });

    it('applies large height by default', async () => {
      const { getByTestId } = await render(
        <ButtonBase testID="btn">Large default</ButtonBase>,
      );

      expect(getByTestId('btn')).toHaveStyle(tw`h-12`);
    });
  });

  describe('twClassName', () => {
    it('merges static classes onto the button', async () => {
      const { getByTestId } = await render(
        <ButtonBase twClassName="bg-default" testID="btn">
          Custom
        </ButtonBase>,
      );

      expect(getByTestId('btn')).toHaveStyle(tw`bg-default`);
    });
  });

  describe('layout width', () => {
    it('expands to full width when isFullWidth is true', async () => {
      const { getByTestId } = await render(
        <ButtonBase isFullWidth testID="btn">
          Full width
        </ButtonBase>,
      );

      expect(getByTestId('btn')).toHaveStyle(tw`w-full`);
    });
  });

  describe('interaction', () => {
    it('invokes onPress when pressed', async () => {
      const onPress = jest.fn();

      const { getByTestId } = await render(
        <ButtonBase onPress={onPress} testID="btn">
          Press me
        </ButtonBase>,
      );

      await fireEvent.press(getByTestId('btn'));

      expect(onPress).toHaveBeenCalledTimes(1);
    });

    it('does not invoke onPress when disabled', async () => {
      const onPress = jest.fn();

      const { getByTestId } = await render(
        <ButtonBase onPress={onPress} isDisabled testID="btn">
          Disabled
        </ButtonBase>,
      );

      const btn = getByTestId('btn');
      await fireEvent.press(btn);

      expect(onPress).not.toHaveBeenCalled();
      expect(btn).toBeDisabled();
    });

    it('does not invoke onPress when loading', async () => {
      const onPress = jest.fn();

      const { getByTestId } = await render(
        <ButtonBase onPress={onPress} isLoading testID="btn">
          Load
        </ButtonBase>,
      );

      await fireEvent.press(getByTestId('btn'));

      expect(onPress).not.toHaveBeenCalled();
    });
  });

  describe('textProps', () => {
    it('defaults label to single line with clip ellipsis', async () => {
      const { getByText } = await render(<ButtonBase>Label</ButtonBase>);

      const label = getByText('Label');
      expect(label.props.numberOfLines).toBe(1);
      expect(label.props.ellipsizeMode).toBe('clip');
    });

    it('allows overriding numberOfLines and ellipsizeMode', async () => {
      const { getByText } = await render(
        <ButtonBase textProps={{ numberOfLines: 2, ellipsizeMode: 'tail' }}>
          Custom text props
        </ButtonBase>,
      );

      const label = getByText('Custom text props');
      expect(label.props.numberOfLines).toBe(2);
      expect(label.props.ellipsizeMode).toBe('tail');
    });
  });

  describe('loading state', () => {
    it('centers the spinner overlay and disables the control', async () => {
      const spinnerExtra =
        'flex-row items-center gap-x-2 absolute inset-0 flex items-center justify-center opacity-100';
      const expectedSpinner = tw.style(
        'flex-row items-center gap-x-2',
        spinnerExtra,
      );

      const { getByTestId } = await render(
        <ButtonBase
          testID="btn"
          isLoading
          loadingWrapperProps={{ testID: 'spinner-container' }}
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

    it('merges loadingWrapperProps (testID and twClassName) with default overlay layout', async () => {
      const { getByTestId } = await render(
        <ButtonBase
          isLoading
          loadingWrapperProps={{
            testID: 'loading-overlay',
            twClassName: 'opacity-100',
          }}
        >
          X
        </ButtonBase>,
      );

      expect(getByTestId('loading-overlay')).toHaveStyle(
        tw`absolute inset-0 flex items-center justify-center opacity-100`,
      );
    });

    it('renders loadingText in the spinner', async () => {
      const text = 'Please wait…';

      const { getByText } = await render(
        <ButtonBase isLoading loadingText={text}>
          X
        </ButtonBase>,
      );

      expect(getByText(text)).toBeOnTheScreen();
    });

    it('forwards spinnerProps to Spinner', async () => {
      const { getByTestId } = await render(
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
  });

  describe('icons and accessories', () => {
    it('renders start and end icons when names are provided', async () => {
      const { getByTestId } = await render(
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

    it('uses startIconProps.name when startIconName is omitted', async () => {
      const { getByTestId } = await render(
        <ButtonBase
          startIconProps={{ name: IconName.Add, testID: 'start-from-props' }}
        >
          X
        </ButtonBase>,
      );

      expect(getByTestId('start-from-props')).toBeOnTheScreen();
    });

    it('uses endIconProps.name when endIconName is omitted', async () => {
      const { getByTestId } = await render(
        <ButtonBase
          endIconProps={{ name: IconName.Close, testID: 'end-from-props' }}
        >
          X
        </ButtonBase>,
      );

      expect(getByTestId('end-from-props')).toBeOnTheScreen();
    });

    it('renders custom accessories when icon names are omitted', async () => {
      const { getByTestId, queryByTestId } = await render(
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

    it('displays only the label when no icons or accessories are set', async () => {
      const { getByText, queryByTestId } = await render(
        <ButtonBase>No side content</ButtonBase>,
      );

      expect(getByText('No side content')).toBeOnTheScreen();
      expect(queryByTestId('start-icon')).toBeNull();
    });
  });

  describe('when iconClassName and textClassName are set', () => {
    it('renders icons without extra classes when hooks are omitted', async () => {
      const { getByText } = await render(
        <ButtonBase startIconName={IconName.Add} endIconName={IconName.Close}>
          Plain icons
        </ButtonBase>,
      );

      expect(getByText('Plain icons')).toBeOnTheScreen();
    });
  });

  describe('Accessibility', () => {
    it('sets role button and derives label from string children', async () => {
      const { getByTestId } = await render(
        <ButtonBase testID="btn">Default Button</ButtonBase>,
      );
      const btn = getByTestId('btn');

      expect(btn.props.accessible).toBe(true);
      expect(btn.props.accessibilityRole).toBe('button');
      expect(btn.props.accessibilityLabel).toBe('Default Button');
      expect(btn.props.accessibilityState).toStrictEqual(
        expect.not.objectContaining({
          disabled: true,
          busy: true,
        }),
      );
    });

    it('respects custom accessibilityLabel, hint, and role', async () => {
      const { getByTestId } = await render(
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

    it('marks disabled state when isDisabled', async () => {
      const { getByTestId } = await render(
        <ButtonBase testID="btn" isDisabled>
          Disabled Button
        </ButtonBase>,
      );
      const btn = getByTestId('btn');

      expect(btn.props.accessibilityState).toStrictEqual(
        expect.objectContaining({ disabled: true }),
      );
      expect(btn).toBeDisabled();
    });

    it('marks loading state and prefers loadingText as label when provided', async () => {
      const { getByTestId } = await render(
        <ButtonBase testID="btn" isLoading loadingText="Please wait">
          Loading Button
        </ButtonBase>,
      );
      const btn = getByTestId('btn');

      expect(btn.props.accessibilityState).toStrictEqual(
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

    it('prefers explicit accessibilityLabel over loadingText when loading', async () => {
      const { getByTestId } = await render(
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

    it('uses string children as label when loading without loadingText', async () => {
      const { getByTestId } = await render(
        <ButtonBase testID="btn" isLoading>
          Button
        </ButtonBase>,
      );
      const btn = getByTestId('btn');

      expect(btn.props.accessibilityLabel).toBe('Button');
      expect(btn.props.accessibilityHint).toBe(
        'Button is currently loading, please wait',
      );
      expect(btn.props.accessibilityState).toStrictEqual(
        expect.objectContaining({
          disabled: true,
          busy: true,
        }),
      );
    });

    it('uses custom accessibilityHint instead of the loading hint', async () => {
      const { getByTestId } = await render(
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

    it('forwards accessibility actions', async () => {
      const mockActionHandler = jest.fn();
      const accessibilityActions = [
        { name: 'longpress', label: 'Long press for options' },
      ];

      const { getByTestId } = await render(
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

    it('leaves accessibilityLabel undefined for complex element children', async () => {
      const { getByTestId } = await render(
        <ButtonBase testID="btn">
          <View>
            <Text>Complex Content</Text>
          </View>
        </ButtonBase>,
      );

      expect(getByTestId('btn').props.accessibilityLabel).toBeUndefined();
    });

    it('uses string children as the accessibility label', async () => {
      const { getByTestId } = await render(
        <ButtonBase testID="btn">Simple Text</ButtonBase>,
      );

      expect(getByTestId('btn').props.accessibilityLabel).toBe('Simple Text');
    });
  });
});
