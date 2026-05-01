import type { PressableProps, StyleProp, ViewStyle } from 'react-native';

import type { ButtonBaseSize } from '../../types';
import type { IconProps, IconName } from '../Icon';
import type { SpinnerProps } from '../temp-components/Spinner';
import type { TextProps } from '../Text';

/**
 * ButtonBase component props.
 */
export type ButtonBaseProps = {
  /**
   * Required prop for the content to be rendered within the ButtonBase
   */
  children: React.ReactNode | string;
  /**
   * Optional props to be passed to the Text component when children is a string
   */
  textProps?: Omit<Partial<TextProps>, 'children'>;
  /**
   * Optional prop to control the size of the ButtonBase
   * Possible values: ButtonBaseSize.Sm (32px), ButtonBaseSize.Md (40px), ButtonBaseSize.Lg (48px)
   *
   * @default ButtonBaseSize.Lg
   */
  size?: ButtonBaseSize;
  /**
   * Optional prop that when true, shows a loading spinner
   *
   * @default false
   */
  isLoading?: boolean;
  /**
   * Optional prop for text to display when button is in loading state
   */
  loadingText?: string;
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
   * Optional prop that when true, disables the button
   *
   * @default false
   */
  isDisabled?: boolean;
  /**
   * Optional prop that when true, makes the button take up the full width of its container
   *
   * @default false
   */
  isFullWidth?: boolean;
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
