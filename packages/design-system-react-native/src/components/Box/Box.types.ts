import type { ViewProps } from 'react-native';

import type {
  BoxFlexDirection,
  BoxFlexWrap,
  BoxSpacing,
  BoxAlignItems,
  BoxJustifyContent,
  BoxBackgroundColor,
  BoxBorderColor,
} from '../../types';

export type BoxProps = {
  /**
   * The flexDirection style of the component.
   */
  flexDirection?: BoxFlexDirection;
  /**
   * The flexWrap style of the component.
   */
  flexWrap?: BoxFlexWrap;
  /**
   * The gap between the component's children.
   * Use 1-12 for a gap of 4px-48px.
   */
  gap?: BoxSpacing;
  /**
   * The alignItems style of the component.
   */
  alignItems?: BoxAlignItems;
  /**
   * The justifyContent style of the component.
   */
  justifyContent?: BoxJustifyContent;
  /**
   * The margin of the component.
   * Use 1-12 for margin of 4px-48px.
   */
  margin?: BoxSpacing;
  /**
   * The top margin of the component.
   * Use 1-12 for margin of 4px-48px.
   */
  marginTop?: BoxSpacing;
  /**
   * The right margin of the component.
   * Use 1-12 for margin of 4px-48px.
   */
  marginRight?: BoxSpacing;
  /**
   * The bottom margin of the component.
   * Use 1-12 for margin of 4px-48px.
   */
  marginBottom?: BoxSpacing;
  /**
   * The left margin of the component.
   * Use 1-12 for margin of 4px-48px.
   */
  marginLeft?: BoxSpacing;
  /**
   * The horizontal margin of the component.
   * Use 1-12 for margin of 4px-48px.
   */
  marginHorizontal?: BoxSpacing;
  /**
   * The vertical margin of the component.
   * Use 1-12 for margin of 4px-48px.
   */
  marginVertical?: BoxSpacing;
  /**
   * The padding of the component.
   * Use 1-12 for padding of 4px-48px.
   */
  padding?: BoxSpacing;
  /**
   * The top padding of the component.
   * Use 1-12 for padding of 4px-48px.
   */
  paddingTop?: BoxSpacing;
  /**
   * The right padding of the component.
   * Use 1-12 for padding of 4px-48px.
   */
  paddingRight?: BoxSpacing;
  /**
   * The bottom padding of the component.
   * Use 1-12 for padding of 4px-48px.
   */
  paddingBottom?: BoxSpacing;
  /**
   * The left padding of the component.
   * Use 1-12 for padding of 4px-48px.
   */
  paddingLeft?: BoxSpacing;
  /**
   * The horizontal padding of the component.
   * Use 1-12 for padding of 4px-48px.
   */
  paddingHorizontal?: BoxSpacing;
  /**
   * The vertical padding of the component.
   * Use 1-12 for padding of 4px-48px.
   */
  paddingVertical?: BoxSpacing;
  /**
   * The border width of the component.
   * Use 1-12 for border width of 1px-12px.
   */
  borderWidth?: BoxSpacing;
  /**
   * The border color of the component.
   */
  borderColor?: BoxBorderColor;
  /**
   * The background color of the component.
   */
  backgroundColor?: BoxBackgroundColor;
  /**
   * Optional prop to add twrnc overriding classNames.
   */
  twClassName?: string;
} & ViewProps;
