import type { ComponentProps } from 'react';

import type {
  BoxFlexDirection,
  BoxFlexWrap,
  BoxSpacing,
  BoxAlignItems,
  BoxJustifyContent,
} from '../../types';

export type BoxProps = ComponentProps<'div'> & {
  /**
   * The flex-direction style of the component.
   */
  flexDirection?: BoxFlexDirection;
  /**
   * The flex-wrap style of the component.
   */
  flexWrap?: BoxFlexWrap;
  /**
   * The gap between the component's children.
   * Use 0-12 for a gap of 0px-48px.
   */
  gap?: BoxSpacing;
  /**
   * The align-items style of the component.
   */
  alignItems?: BoxAlignItems;
  /**
   * The justify-content style of the component.
   */
  justifyContent?: BoxJustifyContent;
  /**
   * Optional prop for additional CSS classes to be applied to the Box component.
   */
  className?: string;
};
