import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React, {
  forwardRef,
  useRef,
  useImperativeHandle,
  useCallback,
  memo,
} from 'react';
import type { PressableStateCallbackType } from 'react-native';
import { Pressable, Animated, Easing, View } from 'react-native';

import { Icon, IconName, IconColor, IconSize } from '../Icon';
import { TextOrChildren } from '../temp-components/TextOrChildren';

import type { CheckboxProps } from './Checkbox.types';

/**
 * Props equality check for React.memo.
 * Compares props that affect rendering: selection state, disabled/invalid states,
 * label, and other identity-affecting props.
 *
 * @param prev - Previous props.
 * @param next - Next props.
 * @returns True if props are equal and re-render can be skipped.
 */
const arePropsEqual = (prev: CheckboxProps, next: CheckboxProps): boolean =>
  prev.isSelected === next.isSelected &&
  prev.isDisabled === next.isDisabled &&
  prev.isInvalid === next.isInvalid &&
  prev.label === next.label &&
  prev.twClassName === next.twClassName &&
  prev.testID === next.testID &&
  prev.onChange === next.onChange;

const CheckboxInner = forwardRef<{ toggle: () => void }, CheckboxProps>(
  (
    {
      isSelected,
      isDisabled = false,
      isInvalid = false,
      label = '',
      labelProps,
      onChange,
      checkboxContainerProps,
      checkedIconProps,
      twClassName,
      style,
      ...props
    },
    ref,
  ) => {
    const scaleAnim = useRef(new Animated.Value(1)).current;

    const animateScale = useCallback(() => {
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 1.15,
          duration: 100,
          easing: Easing.ease,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 100,
          easing: Easing.ease,
          useNativeDriver: true,
        }),
      ]).start();
    }, [scaleAnim]);

    const handlePress = useCallback(() => {
      if (isDisabled) {
        return;
      }
      onChange?.(!isSelected);
      animateScale();
    }, [isDisabled, isSelected, onChange, animateScale]);

    useImperativeHandle(ref, () => ({ toggle: handlePress }), [handlePress]);

    const tw = useTailwind();
    const twContainerClassNames = tw.style(
      'flex-row items-center',
      isDisabled ? 'opacity-50' : 'opacity-100',
      twClassName,
    );

    const getCheckboxContainerStyle = useCallback(
      (pressed: boolean): string => {
        const baseBg = isSelected ? 'bg-icon-default' : 'bg-transparent';
        let baseBorder = 'border-default';
        if (isSelected) {
          baseBorder = 'border-icon-default';
        } else if (isInvalid) {
          baseBorder = 'border-error-default';
        }
        const pressedBg = isSelected ? 'bg-icon-default-pressed' : 'bg-pressed';
        let pressedBorder = 'border-default';
        if (isSelected) {
          pressedBorder = 'border-icon-default-pressed';
        } else if (isInvalid) {
          pressedBorder = 'border-error-default';
        }
        return pressed
          ? `${pressedBg} ${pressedBorder}`
          : `${baseBg} ${baseBorder}`;
      },
      [isSelected, isInvalid],
    );

    return (
      <Pressable
        onPress={handlePress}
        accessible
        accessibilityRole="checkbox"
        accessibilityState={{
          checked: isSelected,
          disabled: isDisabled,
        }}
        accessibilityLabel={typeof label === 'string' ? label : undefined}
        disabled={isDisabled}
        {...props}
        style={(state: PressableStateCallbackType) => [
          twContainerClassNames,
          typeof style === 'function' ? style(state) : style,
        ]}
      >
        {({ pressed }) => (
          <>
            <Animated.View
              {...checkboxContainerProps}
              style={[
                tw`${getCheckboxContainerStyle(pressed)} flex size-[22px] items-center justify-center rounded-full border-2`,
                { transform: [{ scale: scaleAnim }] },
              ]}
            >
              {isSelected ? (
                <View>
                  <Icon
                    name={IconName.Check}
                    color={IconColor.IconInverse}
                    size={IconSize.Sm}
                    {...checkedIconProps}
                  />
                </View>
              ) : null}
            </Animated.View>
            {label ? (
              <TextOrChildren
                textProps={{ ...labelProps, twClassName: 'ml-3' }}
              >
                {label}
              </TextOrChildren>
            ) : null}
          </>
        )}
      </Pressable>
    );
  },
);

/**
 * Checkbox component with performance optimizations:
 * - Wrapped in React.memo with custom equality check to prevent unnecessary re-renders
 * - Icon only mounted when selected (deferred mounting reduces work for unselected rows)
 * - Removed per-render animated opacity sync in favor of conditional rendering
 */
export const Checkbox = memo(CheckboxInner, arePropsEqual);
