import type { TouchableOpacityProps, ViewProps } from 'react-native';

import type { TextProps } from '../Text';

/**
 * RadioButton component props.
 *
 * Extends ViewProps so the root View inherits standard React Native
 * props such as `testID` and `accessibilityLabel`.
 */
export type RadioButtonProps = {
  /**
   * Optional callback triggered when the radio button is pressed.
   */
  onPress?: () => void;

  /**
   * Optional label displayed beside the radio button.
   */
  label?: string | React.ReactNode;

  /**
   * Optional props passed to the label's Text component.
   */
  labelProps?: Omit<Partial<TextProps>, 'children'>;

  /**
   * Optional prop to configure the checked state.
   *
   * @default false
   */
  isChecked?: boolean;

  /**
   * Optional prop to configure the disabled state.
   *
   * @default false
   */
  isDisabled?: boolean;

  /**
   * Optional prop to configure the read-only state.
   *
   * @default false
   */
  isReadOnly?: boolean;

  /**
   * Optional prop to configure the danger state.
   *
   * @default false
   */
  isDanger?: boolean;

  /**
   * Optional props passed to the inner TouchableOpacity.
   * Use this for TouchableOpacity-specific props such as `testID`.
   */
  touchableOpacityProps?: Omit<
    Partial<TouchableOpacityProps>,
    'children' | 'onPress' | 'disabled'
  >;

  /**
   * Optional props passed to the radio button circle container.
   */
  radioButtonContainerProps?: Omit<Partial<ViewProps>, 'children'>;

  /**
   * Optional Tailwind CSS classes for the root container.
   */
  twClassName?: string;

  /**
   * Optional custom styles for the root container.
   */
  style?: ViewProps['style'];
} & Omit<ViewProps, 'children'>;
