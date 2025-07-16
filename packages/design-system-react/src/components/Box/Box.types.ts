import type { ComponentProps } from 'react';

import type {
  BoxFlexDirection,
  BoxFlexWrap,
  BoxSpacing,
  BoxBorderWidth,
  BoxAlignItems,
  BoxJustifyContent,
  BoxBackgroundColor,
  BoxBorderColor,
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
   * The margin of the component.
   * Use 0-12 for margin of 0px-48px.
   */
  margin?: BoxSpacing;
  /**
   * The top margin of the component.
   * Use 0-12 for margin of 0px-48px.
   */
  marginTop?: BoxSpacing;
  /**
   * The right margin of the component.
   * Use 0-12 for margin of 0px-48px.
   */
  marginRight?: BoxSpacing;
  /**
   * The bottom margin of the component.
   * Use 0-12 for margin of 0px-48px.
   */
  marginBottom?: BoxSpacing;
  /**
   * The left margin of the component.
   * Use 0-12 for margin of 0px-48px.
   */
  marginLeft?: BoxSpacing;
  /**
   * The horizontal margin of the component.
   * Use 0-12 for margin of 0px-48px.
   */
  marginHorizontal?: BoxSpacing;
  /**
   * The vertical margin of the component.
   * Use 0-12 for margin of 0px-48px.
   */
  marginVertical?: BoxSpacing;
  /**
   * The padding of the component.
   * Use 0-12 for padding of 0px-48px.
   */
  padding?: BoxSpacing;
  /**
   * The top padding of the component.
   * Use 0-12 for padding of 0px-48px.
   */
  paddingTop?: BoxSpacing;
  /**
   * The right padding of the component.
   * Use 0-12 for padding of 0px-48px.
   */
  paddingRight?: BoxSpacing;
  /**
   * The bottom padding of the component.
   * Use 0-12 for padding of 0px-48px.
   */
  paddingBottom?: BoxSpacing;
  /**
   * The left padding of the component.
   * Use 0-12 for padding of 0px-48px.
   */
  paddingLeft?: BoxSpacing;
  /**
   * The horizontal padding of the component.
   * Use 0-12 for padding of 0px-48px.
   */
  paddingHorizontal?: BoxSpacing;
  /**
   * The vertical padding of the component.
   * Use 0-12 for padding of 0px-48px.
   */
  paddingVertical?: BoxSpacing;
  /**
   * The border width of the component.
   * Use 0, 1, 2, 4, or 8 for border width of 0px, 1px, 2px, 4px, or 8px.
   */
  borderWidth?: BoxBorderWidth;
  /**
   * The border color of the component.
   */
  borderColor?: BoxBorderColor;
  /**
   * The background color of the component.
   */
  backgroundColor?: BoxBackgroundColor;
  /**
   * Optional prop for additional CSS classes to be applied to the Box component.
   */
  className?: string;
};
