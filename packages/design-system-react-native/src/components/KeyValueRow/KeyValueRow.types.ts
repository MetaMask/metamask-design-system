import type { ReactNode } from 'react';
import type { ViewProps } from 'react-native';

import { ButtonIconSize } from '../ButtonIcon';
import { IconName, IconSize } from '../Icon';
import type { IconProps } from '../Icon';
import type { TextProps } from '../Text';

/**
 * The optional tooltip that can be displayed within a KeyValueRowField.
 */
export type KeyValueRowTooltip = {
  /**
   * The title displayed at the top of the tooltip.
   */
  title: string;
  /**
   * The content displayed within the tooltip body.
   */
  content: string | ReactNode;
  /**
   * Optional size of the tooltip icon button.
   * @default ButtonIconSize.Md
   */
  size?: ButtonIconSize;
  /**
   * Optional icon name for the tooltip icon.
   * @default IconName.Question
   */
  iconName?: IconName;
  /**
   * Optional onPress handler called when the tooltip icon is pressed.
   */
  onPress?: (...args: unknown[]) => unknown;
  /**
   * Optional bottom padding for the tooltip modal.
   */
  bottomPadding?: number;
};

/**
 * Used to position an icon in a KeyValueRowField.
 */
export const KeyValueRowFieldIconSides = {
  Left: 'left',
  Right: 'right',
  Both: 'both',
} as const;

export type KeyValueRowFieldIconSides =
  (typeof KeyValueRowFieldIconSides)[keyof typeof KeyValueRowFieldIconSides];

/**
 * Represents a field displayed within KeyValueRowProps.
 */
export type KeyValueRowField = {
  /**
   * The label content displayed.
   */
  label: PreDefinedKeyValueRowLabel | ReactNode;
  /**
   * Optional icon to display. If undefined, no icon is displayed.
   */
  icon?: IconProps & { side?: KeyValueRowFieldIconSides };
  /**
   * Optional tooltip to display. If undefined, no tooltip is displayed.
   */
  tooltip?: KeyValueRowTooltip;
};

/**
 * Re-exported for backwards compatibility.
 */
export const IconSizes = IconSize;

/**
 * Re-exported for backwards compatibility.
 */
export const TooltipSizes = ButtonIconSize;

/**
 * A predefined label object with text, variant, and color.
 */
export type PreDefinedKeyValueRowLabel = {
  /**
   * Text to display.
   */
  text: string;
  /**
   * Optional text variant.
   * @default TextVariant.BodyMd
   */
  variant?: TextProps['variant'];
  /**
   * Optional text color.
   * @default TextColor.TextDefault
   */
  color?: TextProps['color'];
};

/**
 * The KeyValueRowLabel component props.
 */
export type KeyValueRowLabelProps = {
  /**
   * The label content displayed.
   */
  label: PreDefinedKeyValueRowLabel | ReactNode;
  /**
   * Optional tooltip. If undefined, the tooltip won't be displayed.
   */
  tooltip?: KeyValueRowTooltip;
};

/**
 * Represents the valid KeyValueSection alignments.
 */
export const KeyValueRowSectionAlignments = {
  Left: 'items-start',
  Right: 'items-end',
} as const;

export type KeyValueRowSectionAlignments =
  (typeof KeyValueRowSectionAlignments)[keyof typeof KeyValueRowSectionAlignments];

/**
 * Represents the main container for the KeyValueRow component.
 *
 * Extends `ViewProps` so the root View inherits standard React Native
 * props such as `testID` and `accessibilityLabel`.
 */
export type KeyValueRowRootProps = {
  /**
   * Must have exactly two children. Adding more will lead to an undesired outcome.
   */
  children: [ReactNode, ReactNode];
  /**
   * Optional Tailwind class names to override default styles on the root element.
   */
  twClassName?: string;
} & ViewProps;

/**
 * The KeyValueSection component props.
 *
 * Extends `ViewProps` so the root View inherits standard React Native
 * props such as `testID` and `accessibilityLabel`.
 */
export type KeyValueSectionProps = {
  /**
   * Child components.
   */
  children: ReactNode;
  /**
   * Optional content alignment.
   * @default KeyValueRowSectionAlignments.Left
   */
  align?: KeyValueRowSectionAlignments;
  /**
   * Optional Tailwind class names to override default styles on the root element.
   */
  twClassName?: string;
} & ViewProps;

/**
 * The KeyValueRow component props.
 *
 * Extends `ViewProps` so the root View inherits standard React Native
 * props such as `testID` and `accessibilityLabel`.
 */
export type KeyValueRowProps = {
  /**
   * The "key" portion of the KeyValueRow (left side).
   * Using the variable name field because key is reserved.
   */
  field: KeyValueRowField;
  /**
   * The "value" portion of the KeyValueRow (right side).
   */
  value: KeyValueRowField;
  /**
   * Optional Tailwind class names to override default styles on the root element.
   */
  twClassName?: string;
} & ViewProps;
