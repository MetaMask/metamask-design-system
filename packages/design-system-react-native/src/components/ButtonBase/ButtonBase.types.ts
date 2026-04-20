import type { ButtonBasePropsShared } from '@metamask/design-system-shared';
import type { PressableProps, StyleProp, ViewStyle } from 'react-native';

import type { IconProps, IconName } from '../Icon';
import type { SpinnerProps } from '../temp-components/Spinner';
import type { TextProps } from '../Text';

/**
 * ButtonBase component props.
 */
export type ButtonBaseProps = ButtonBasePropsShared & {
  /**
   * Optional props to be passed to the Text component when children is a string
   */
  textProps?: Omit<Partial<TextProps>, 'children'>;
  /**
   * Optional prop to pass additional properties to the end icon
   */
  spinnerProps?: Partial<SpinnerProps>;
  /**
   * Optional prop to specify an icon to show at the start of the button
   */
  startIconName?: IconName;
  /**
   * Optional prop to pass additional properties to the start icon
   */
  startIconProps?: Partial<IconProps>;
  /**
   * Optional prop for a custom element to show at the start of the button
   */
  startAccessory?: React.ReactNode;
  /**
   * Optional prop to specify an icon to show at the end of the button
   */
  endIconName?: IconName;
  /**
   * Optional prop to pass additional properties to the end icon
   */
  endIconProps?: Partial<IconProps>;
  /**
   * Optional prop for a custom element to show at the end of the button
   */
  endAccessory?: React.ReactNode;
  /**
   * Optional prop to add twrnc overriding classNames.
   * Can be a string or a function that receives pressed state and returns a string.
   */
  twClassName?: string | ((pressed: boolean) => string);
  /**
   * Optional prop to control text className based on pressed state.
   */
  textClassName?: (pressed: boolean) => string;
  /**
   * Optional prop to control icon className based on pressed state.
   */
  iconClassName?: (pressed: boolean) => string;
  /**
   * Optional prop to control the style.
   */
  style?: StyleProp<ViewStyle>;
  /**
   * Optional accessibility label to describe the button for screen readers.
   * If not provided, the button content will be used as the label.
   */
  accessibilityLabel?: string;
  /**
   * Optional accessibility hint to provide additional context about the button's action.
   * Should describe what happens when the button is pressed.
   */
  accessibilityHint?: string;
  /**
   * Optional accessibility role. Defaults to 'button'.
   * Can be overridden for specific use cases.
   */
  accessibilityRole?: 'button' | 'link' | 'menuitem' | 'tab' | 'none';
  /**
   * Optional accessibility actions for custom interactions.
   * Use sparingly and only when default button behavior is insufficient.
   */
  accessibilityActions?: {
    name: string;
    label?: string;
  }[];
  /**
   * Optional callback for handling accessibility action events.
   */
  onAccessibilityAction?: (event: {
    nativeEvent: { actionName: string };
  }) => void;
} & Omit<
    PressableProps,
    | 'accessibilityRole'
    | 'accessibilityLabel'
    | 'accessibilityHint'
    | 'accessibilityActions'
    | 'onAccessibilityAction'
  >;
