import type { ComponentProps } from 'react';

import type {
  BoxFlexDirection,
  BoxFlexWrap,
  BoxSpacing,
  BoxBorderColor,
  BoxBorderRadius,
  BoxBorderWidth,
  BoxBorderStyle,
  BoxAlignItems,
  BoxJustifyContent,
  BoxBackgroundColor,
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
   * The margin style of the component.
   * Use 0-12 for margin of 0px-48px.
   */
  margin?: BoxSpacing;
  /**
   * The margin-top style of the component.
   * Use 0-12 for marginTop of 0px-48px.
   */
  marginTop?: BoxSpacing;
  /**
   * The margin-bottom style of the component.
   * Use 0-12 for marginBottom of 0px-48px.
   */
  marginBottom?: BoxSpacing;
  /**
   * The margin-left style of the component.
   * Use 0-12 for marginLeft of 0px-48px.
   */
  marginLeft?: BoxSpacing;
  /**
   * The margin-right style of the component.
   * Use 0-12 for marginRight of 0px-48px.
   */
  marginRight?: BoxSpacing;
  /**
   * The padding style of the component.
   * Use 0-12 for padding of 0px-48px.
   */
  padding?: BoxSpacing;
  /**
   * The padding-top style of the component.
   * Use 0-12 for paddingTop of 0px-48px.
   */
  paddingTop?: BoxSpacing;
  /**
   * The padding-bottom style of the component.
   * Use 0-12 for paddingBottom of 0px-48px.
   */
  paddingBottom?: BoxSpacing;
  /**
   * The padding-left style of the component.
   * Use 0-12 for paddingLeft of 0px-48px.
   */
  paddingLeft?: BoxSpacing;
  /**
   * The padding-right style of the component.
   * Use 0-12 for paddingRight of 0px-48px.
   */
  paddingRight?: BoxSpacing;
  /**
   * The border-color style of the component.
   */
  borderColor?: BoxBorderColor;
  /**
   * The border-width style of the component.
   */
  borderWidth?: BoxBorderWidth;
  /**
   * The border-radius style of the component.
   */
  borderRadius?: BoxBorderRadius;
  /**
   * The border-style style of the component.
   */
  borderStyle?: BoxBorderStyle;
  /**
   * The align-items style of the component.
   */
  alignItems?: BoxAlignItems;
  /**
   * The justify-content style of the component.
   */
  justifyContent?: BoxJustifyContent;
  /**
   * The width style of the component.
   */
  width?: BoxSpacing;
  /**
   * The min-width style of the component.
   */
  minWidth?: BoxSpacing;
  /**
   * The height style of the component.
   */
  height?: BoxSpacing;
  /**
   * The min-height style of the component.
   */
  minHeight?: BoxSpacing;
  /**
   * The background-color style of the component.
   */
  backgroundColor?: BoxBackgroundColor;
  /**
   * Optional prop for additional CSS classes to be applied to the Box component.
   */
  className?: string;
};
