// External dependencies.
import type { TitleSubpagePropsShared } from '@metamask/design-system-shared';

import type { TextProps } from '../Text';

/**
 * TitleSubpage component props.
 */
export type TitleSubpageProps = TitleSubpagePropsShared & {
  /**
   * Optional props to pass to the title Text component.
   */
  titleProps?: Partial<TextProps>;
  /**
   * Optional props to pass to the bottomLabel Text component.
   */
  bottomLabelProps?: Partial<TextProps>;
  /**
   * Optional test ID for the component.
   */
  testID?: string;
  /**
   * Optional Tailwind class name to apply to the container.
   */
  twClassName?: string;
};
