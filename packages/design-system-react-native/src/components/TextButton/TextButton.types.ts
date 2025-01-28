import type { PressableProps, StyleProp, ViewStyle } from 'react-native';
import type { TextProps } from 'src/components/Text/Text.types';

import type { SpinnerProps } from '../../temp-components/Spinner';
import type { IconProps, IconName } from '../Icon';

/**
 * TextButton component props.
 */
export type TextButtonProps = {
  /**
   * Required prop for the content to be rendered within the TextButton
   */
  children: string;
  /**
   * Optional props to be passed to the Text component when children is a string
   */
  textProps?: Omit<Partial<TextProps>, 'children'>;
  /**
   * Optional prop that when true, shows a loading spinner
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
   * @default false
   */
  isDisabled?: boolean;
  /**
   * Optional prop to show the inverse state of the button, which is reserved for buttons on colored backgrounds.
   * @default false
   */
  isInverse?: boolean;
  /**
   * Optional prop to add twrnc overriding classNames.
   */
  twClassName?: string;
  /**
   * Optional prop to control the style.
   */
  style?: StyleProp<ViewStyle>;
} & Omit<PressableProps, 'disabled'>;
