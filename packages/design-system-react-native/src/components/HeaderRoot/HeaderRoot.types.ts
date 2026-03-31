// Third party dependencies.
import { ViewProps, StyleProp, ViewStyle } from 'react-native';
import { ReactNode } from 'react';

// External dependencies.
import type { ButtonIconProps } from '../ButtonIcon';
import type { TextProps } from '../Text';

/**
 * HeaderRoot component props.
 * Left section renders either children or a title row (mutually exclusive).
 * End section matches HeaderBase (endAccessory or endButtonIconProps).
 */
export type HeaderRootProps = ViewProps & {
  /**
   * Optional custom content for the left section.
   * When provided, title/titleAccessory are not rendered (mutually exclusive).
   */
  children?: ReactNode;
  /**
   * Optional content displayed after the title in the title row.
   * Only used when children is not provided and title or titleAccessory is set.
   */
  titleAccessory?: ReactNode;
  /**
   * Optional main title. Can be a string or a React node.
   * Only used when children is not provided.
   * When string: rendered via TextOrChildren with TextVariant.HeadingLg; titleProps apply.
   * When node: rendered via TextOrChildren as-is; titleProps are not applied to the node.
   */
  title?: ReactNode;
  /**
   * Optional props passed to the Text component when title is a string (TextOrChildren textProps).
   */
  titleProps?: Partial<TextProps>;
  /**
   * Optional content to be displayed in the end section.
   * Takes priority over endButtonIconProps if both are provided.
   */
  endAccessory?: ReactNode;
  /**
   * Optional array of ButtonIcon props to render multiple ButtonIcons as end accessories.
   * Rendered in reverse order (first item appears rightmost).
   * Only used if endAccessory is not provided.
   */
  endButtonIconProps?: ButtonIconProps[];
  /**
   * Optional prop to include the top inset so the header is visible below the device safe area.
   */
  includesTopInset?: boolean;
  /**
   * Optional style for the header container.
   */
  style?: StyleProp<ViewStyle>;
  /**
   * Optional test ID for the header container.
   */
  testID?: string;
  /**
   * Optional Tailwind class names for the header container.
   */
  twClassName?: string;
};
