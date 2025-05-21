import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React, {
  forwardRef,
  useState,
  useRef,
  useImperativeHandle,
  useCallback,
  useEffect,
} from 'react';
import { Pressable, Animated, Easing } from 'react-native';
import type { StyleProp } from 'react-native';

import { Icon, IconName, IconColor, IconSize } from '../Icon';
import { TextOrChildren } from '../temp-components/TextOrChildren';

import type { CheckboxProps } from './Checkbox.types';

const AnimatedView = Animated.View;

export const Checkbox = forwardRef<{ toggle: () => void }, CheckboxProps>(
  (
    {
      isSelected = false,
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
    // Internal state for uncontrolled
    const [internalSelected, setInternalSelected] = useState(isSelected);

    // Animation values
    const scaleAnim = useRef(new Animated.Value(1)).current;
    const iconAnim = useRef(
      new Animated.Value(internalSelected ? 1 : 0),
    ).current;

    // Sync icon opacity whenever selection changes
    useEffect(() => {
      Animated.timing(iconAnim, {
        toValue: internalSelected ? 1 : 0,
        duration: 300,
        easing: Easing.ease,
        useNativeDriver: true,
      }).start();
    }, [internalSelected, iconAnim]);

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

    // Press handler: update state, notify parent, then bounce
    const handlePress = () => {
      if (isDisabled) {
        return;
      }
      const next = !internalSelected;
      setInternalSelected(next);
      onChange?.(next);
      animateScale();
    };

    useImperativeHandle(ref, () => ({ toggle: handlePress }), [handlePress]);

    const tw = useTailwind();
    const twContainerClassNames = tw`flex-row items-center ${
      isDisabled ? 'opacity-50' : 'opacity-100'
    } ${twClassName}`;

    const getCheckboxContainerStyle = useCallback(
      (pressed: boolean): string => {
        const baseBg = internalSelected
          ? 'bg-primary-default'
          : 'bg-background-default';
        let baseBorder = 'border-border-default';
        if (internalSelected) {
          baseBorder = 'border-primary-default';
        } else if (isInvalid) {
          baseBorder = 'border-error-default';
        }
        const pressedBg = internalSelected
          ? 'bg-primary-defaultPressed'
          : 'bg-background-defaultPressed';
        let pressedBorder = 'border-border-default';
        if (internalSelected) {
          pressedBorder = 'border-primary-defaultPressed';
        } else if (isInvalid) {
          pressedBorder = 'border-error-default';
        }
        return pressed
          ? `${pressedBg} ${pressedBorder}`
          : `${baseBg} ${baseBorder}`;
      },
      [internalSelected, isInvalid],
    );

    return (
      <Pressable
        onPress={handlePress}
        accessible
        accessibilityRole="checkbox"
        accessibilityState={{
          checked: internalSelected,
          disabled: isDisabled,
        }}
        accessibilityLabel={typeof label === 'string' ? label : undefined}
        style={[twContainerClassNames, style]}
        disabled={isDisabled}
        {...props}
      >
        {({ pressed }) => (
          <>
            <AnimatedView
              {...checkboxContainerProps}
              style={[
                tw`${getCheckboxContainerStyle(pressed)} flex h-[22px] w-[22px] items-center justify-center rounded border-2`,
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
