import type { StyleProp, ViewProps, ViewStyle } from 'react-native';

export enum BoxBackgroundColor {
  BackgroundDefault = 'bg-background-default',
  BackgroundAlternative = 'bg-background-alternative',
  PrimaryDefault = 'bg-primary-default',
  PrimaryMuted = 'bg-primary-muted',
  ErrorDefault = 'bg-error-default',
  ErrorMuted = 'bg-error-muted',
  SuccessDefault = 'bg-success-default',
  SuccessMuted = 'bg-success-muted',
  InfoDefault = 'bg-info-default',
  InfoMuted = 'bg-info-muted',
  WarningDefault = 'bg-warning-default',
  WarningMuted = 'bg-warning-muted',
  Transparent = 'bg-transparent',
}

export enum BoxBorderColor {
  BorderDefault = 'border border-border-default',
  BorderMuted = 'border border-border-muted',
  PrimaryDefault = 'border border-primary-default',
  ErrorDefault = 'border border-error-default',
  SuccessDefault = 'border border-success-default',
  InfoDefault = 'border border-info-default',
  WarningDefault = 'border border-warning-default',
  None = '',
}

export type BoxPadding = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export interface BoxProps extends ViewProps {
  /**
   * The content to be rendered within the Box.
   */
  children?: React.ReactNode;
  /**
   * The background color of the Box.
   * @default BoxBackgroundColor.Transparent
   */
  backgroundColor?: BoxBackgroundColor;
  /**
   * The padding of the Box. Value from 0-12 that maps directly to Tailwind's spacing scale.
   * For example: 4 becomes p-4, 8 becomes p-8, etc.
   * @default 0
   */
  padding?: BoxPadding;
  /**
   * The border color of the Box.
   * @default BoxBorderColor.None
   */
  borderColor?: BoxBorderColor;
  /**
   * Additional Tailwind class names to apply to the Box.
   */
  twClassName?: string;
  /**
   * Additional styles to apply to the Box.
   */
  style?: StyleProp<ViewStyle>;
}
