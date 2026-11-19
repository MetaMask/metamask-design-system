import type { ReactNode } from 'react';
import type { ViewProps } from 'react-native';

import type { ButtonProps } from '../Button/Button.types';
import type { TextProps } from '../Text/Text.types';

/**
 * TabEmptyState component props.
 */
export type TabEmptyStateProps = {
  /**
   * Optional icon to display in the empty state.
   * If using a PNG/JPG image, use `useAssetFromTheme` to handle light/dark themes.
   */
  icon?: ReactNode;
  /**
   * Optional description text to display in the empty state.
   */
  description?: string;
  /**
   * Optional props to pass to the description Text component.
   */
  descriptionProps?: Partial<TextProps>;
  /**
   * Optional label for the action button.
   * The button is only rendered when both `actionButtonText` and `onAction` are provided.
   */
  actionButtonText?: string;
  /**
   * Optional props to pass to the action Button component.
   */
  actionButtonProps?: Partial<ButtonProps>;
  /**
   * Optional callback when the action button is pressed.
   * The button is only rendered when both `actionButtonText` and `onAction` are provided.
   */
  onAction?: () => void;
  /**
   * Optional additional content to display below the action button.
   */
  children?: ReactNode;
  /**
   * @deprecated Use `className`. Will be removed in `@metamask/design-system-react-native` 1.0.0.
   */
  twClassName?: string;
  /**
   * Optional Tailwind classes. Merged after the component's own classes and `twClassName`, so `className` wins on conflicts.
   */
  className?: string;
} & ViewProps;
