import { ViewProps } from 'react-native';

import {
  BoxFlexDirection,
  BoxFlexWrap,
  BoxSpacing,
  BoxBorderColor,
  BoxBorderRadius,
  BoxBorderStyle,
  BoxAlignItems,
  BoxJustifyContent,
  BoxBackgroundColor,
} from '../../types';

export interface BoxProps extends ViewProps {
  /**
   * The flex direction of the component.
   */
  flexDirection?: BoxFlexDirection;
  /**
   * The flex wrap of the component.
   */
  flexWrap?: BoxFlexWrap;
  /**
   * The gap between the component's children.
   * Use 1-12 for a gap of 4px-48px.
   */
  gap?: BoxSpacing;
  /**
   * The margin of the component.
   * Use 1-12 for margin of 4px-48px.
   */
  margin?: BoxSpacing;
  /**
   * The marginTop of the component.
   * Use 1-12 for marginTop of 4px-48px.
   */
  marginTop?: BoxSpacing;
  /**
   * The marginBottom of the component.
   * Use 1-12 for marginBottom of 4px-48px.
   */
  marginBottom?: BoxSpacing;
  /**
   * The marginLeft of the component.
   * Use 1-12 for marginLeft of 4px-48px.
   */
  marginLeft?: BoxSpacing;
  /**
   * The marginRight of the component.
   * Use 1-12 for marginRight of 4px-48px.
   */
  marginRight?: BoxSpacing;
  /**
   * The padding of the component.
   * Use 1-12 for padding of 4px-48px.
   */
  padding?: BoxSpacing;
  /**
   * The paddingTop of the component.
   * Use 1-12 for paddingTop of 4px-48px.
   */
  paddingTop?: BoxSpacing;
  /**
   * The paddingBottom of the component.
   * Use 1-12 for paddingBottom of 4px-48px.
   */
  paddingBottom?: BoxSpacing;
  /**
   * The paddingLeft of the component.
   * Use 1-12 for paddingLeft of 4px-48px.
   */
  paddingLeft?: BoxSpacing;
  /**
   * The paddingRight of the component.
   * Use 1-12 for paddingRight of 4px-48px.
   */
  paddingRight?: BoxSpacing;
  /**
   * The border-color of the component.
   */
  borderColor?: BoxBorderColor;
  /**
   * The border-width of the component.
   * Use 1-12 for borderWidth of 1px-12px.
   */
  borderWidth?: BoxSpacing;
  /**
   * The border-radius of the component.
   */
  borderRadius?: BoxBorderRadius;
  /**
   * The border-style of the component.
   */
  borderStyle?: BoxBorderStyle;
  /**
   * The align-items of the component.
   */
  alignItems?: BoxAlignItems;
  /**
   * The justify-content of the component.
   */
  justifyContent?: BoxJustifyContent;
  /**
   * The width of the component.
   */
  width?: BoxSpacing;
  /**
   * The min-width of the component.
   */
  minWidth?: BoxSpacing;
  /**
   * The height of the component.
   */
  height?: BoxSpacing;
  /**
   * The min-height of the component.
   */
  minHeight?: BoxSpacing;
  /**
   * The background-color of the component.
   */
  backgroundColor?: BoxBackgroundColor;
  /**
   * Optional prop to add twrnc overriding classNames.
   */
  twClassName?: string;
}
