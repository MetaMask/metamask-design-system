import type { ViewProps } from 'react-native';

import type {
  BoxFlexDirection,
  BoxFlexWrap,
  BoxSpacing,
  BoxAlignItems,
  BoxJustifyContent,
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
   * Optional prop to add twrnc overriding classNames.
   */
  twClassName?: string;
} & ViewProps;
