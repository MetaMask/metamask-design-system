import type { ViewProps } from 'react-native';

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
   * The margin style of the component.
   * Use 1-12 for margin of 4px-48px.
   */
  margin?: BoxSpacing;
  /**
   * The marginTop style of the component.
   * Use 1-12 for marginTop of 4px-48px.
   */
  marginTop?: BoxSpacing;
  /**
   * The marginBottom style of the component.
   * Use 1-12 for marginBottom of 4px-48px.
   */
  marginBottom?: BoxSpacing;
  /**
   * The marginLeft style of the component.
   * Use 1-12 for marginLeft of 4px-48px.
   */
  marginLeft?: BoxSpacing;
  /**
   * The marginRight style of the component.
   * Use 1-12 for marginRight of 4px-48px.
   */
  marginRight?: BoxSpacing;
  /**
   * The padding style of the component.
   * Use 1-12 for padding of 4px-48px.
   */
  padding?: BoxSpacing;
  /**
   * The paddingTop style of the component.
   * Use 1-12 for paddingTop of 4px-48px.
   */
  paddingTop?: BoxSpacing;
  /**
   * The paddingBottom style of the component.
   * Use 1-12 for paddingBottom of 4px-48px.
   */
  paddingBottom?: BoxSpacing;
  /**
   * The paddingLeft style of the component.
   * Use 1-12 for paddingLeft of 4px-48px.
   */
  paddingLeft?: BoxSpacing;
  /**
   * The paddingRight style of the component.
   * Use 1-12 for paddingRight of 4px-48px.
   */
  paddingRight?: BoxSpacing;
  /**
   * The borderColor style of the component.
   */
  borderColor?: BoxBorderColor;
  /**
   * The borderWidth style of the component.
   */
  borderWidth?: BoxBorderWidth;
  /**
   * The borderRadius style of the component.
   */
  borderRadius?: BoxBorderRadius;
  /**
   * The borderStyle style of the component.
   */
  borderStyle?: BoxBorderStyle;
  /**
   * The alignItems style of the component.
   */
  alignItems?: BoxAlignItems;
  /**
   * The justifyContent style of the component.
   */
  justifyContent?: BoxJustifyContent;
  /**
   * The width style of the component.
   */
  width?: BoxSpacing;
  /**
   * The minWidth style of the component.
   */
  minWidth?: BoxSpacing;
  /**
   * The height style of the component.
   */
  height?: BoxSpacing;
  /**
   * The minHeight style of the component.
   */
  minHeight?: BoxSpacing;
  /**
   * The backgroundColor style of the component.
   */
  backgroundColor?: BoxBackgroundColor;
  /**
   * Optional prop to add twrnc overriding classNames.
   */
  twClassName?: string;
} & ViewProps;
