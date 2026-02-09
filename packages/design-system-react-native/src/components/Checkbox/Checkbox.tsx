import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React, {
  forwardRef,
  useRef,
  useImperativeHandle,
  useCallback,
  useEffect,
} from 'react';
import type { PressableStateCallbackType } from 'react-native';
import { Pressable, Animated, Easing } from 'react-native';

import { Icon, IconName, IconColor, IconSize } from '../Icon';
import { TextOrChildren } from '../temp-components/TextOrChildren';

import type { CheckboxProps } from './Checkbox.types';

const AnimatedView = Animated.View;

export const Checkbox = forwardRef<{ toggle: () => void }, CheckboxProps>(
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
      twClassName = '',
      style,
      ...props
    },
    ref,
  ) => {
    // Animation values
    const scaleAnim = useRef(new Animated.Value(1)).current;
    const iconAnim = useRef(new Animated.Value(isSelected ? 1 : 0)).current;

    // Sync icon opacity whenever selection changes
    useEffect(() => {
      Animated.timing(iconAnim, {
        toValue: isSelected ? 1 : 0,
        duration: 300,
        easing: Easing.ease,
        useNativeDriver: true,
      }).start();
    }, [isSelected, iconAnim]);

    // Bounce effect when toggling
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

    // Press handler: notify parent, then bounce
    const handlePress = () => {
      if (isDisabled) {
        return;
      }
      onChange?.(!isSelected);
      animateScale();
    };

    useImperativeHandle(ref, () => ({ toggle: handlePress }), [handlePress]);

    const tw = useTailwind();
    const twContainerClassNamesStr = `flex-row items-center ${
      isDisabled ? 'opacity-50' : 'opacity-100'
    } ${twClassName}`.trim();
    const twContainerClassNames = tw`${twContainerClassNamesStr}`;

    const getCheckboxContainerStyle = useCallback(
      (pressed: boolean): string => {
        const baseBg = isSelected ? 'bg-primary-default' : 'bg-default';
        let baseBorder = 'border-default';
        if (isSelected) {
          baseBorder = 'border-primary-default';
        } else if (isInvalid) {
          baseBorder = 'border-error-default';
        }
        const pressedBg = isSelected
          ? 'bg-primary-default-pressed'
          : 'bg-default-pressed';
        let pressedBorder = 'border-default';
        if (isSelected) {
          pressedBorder = 'border-primary-default-pressed';
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
            <AnimatedView
              {...checkboxContainerProps}
              style={[
                tw`${getCheckboxContainerStyle(pressed)} flex size-[22px] items-center justify-center rounded border-2`,
                { transform: [{ scale: scaleAnim }] },
              ]}
            >
              {/* Always render icon, opacity driven by iconAnim */}
              <Animated.View style={{ opacity: iconAnim }}>
                <Icon
                  name={IconName.Check}
                  color={IconColor.PrimaryInverse}
                  size={IconSize.Sm}
                  {...checkedIconProps}
                />
              </Animated.View>
            </AnimatedView>
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
