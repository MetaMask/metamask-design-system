import type {
  FontFamily,
  FontStyle,
  FontWeight,
  TextPropsShared,
} from '@metamask/design-system-shared';
import type { TextProps as RNTextProps } from 'react-native';

/**
 * Text component props.
 */
export type TextProps = TextPropsShared &
  RNTextProps & {
    /**
     * Optional prop to control the font weight of the text.
     * Normal: 400
     * Medium: 500
     * Bold: 600
     */
    fontWeight?: FontWeight;
    /**
     * Optional prop to adjust the font family.
     * Default: Geist
     * Accent: MM Sans
     * Hero: MM Poly
     */
    fontFamily?: FontFamily;
    /**
     * Optional prop to adjust the style of the font.
     */
    fontStyle?: FontStyle;
    /**
     * Optional prop to add twrnc overriding classNames.
     */
    twClassName?: string;
  };
