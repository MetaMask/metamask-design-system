import type { ThemeTypography } from '../typography';

type ShadowShape = {
  shadowColor: string;
  shadowOffset: {
    width: number;
    height: number;
  };
  shadowOpacity: number;
  shadowRadius: number;
};

type ShadowSizes = {
  xs: ShadowShape;
  sm: ShadowShape;
  md: ShadowShape;
  lg: ShadowShape;
};

export type ThemeShadows = {
  size: ShadowSizes;
};

export type ThemeColors = {
  background: {
    /** For default neutral surface */
    default: string;
    /** For sunken neutral surface below background/default */
    alternative: string;
    /** For raised neutral surface above background/default */
    muted: string;
    /** Hover state surface for background/default */
    defaultHover: string;
    /** Pressed state surface for background/default */
    defaultPressed: string;
    /** Hover state surface for background/alternative */
    alternativeHover: string;
    /** Pressed state surface for background/alternative */
    alternativePressed: string;
    /** Hover state surface for background/muted */
    mutedHover: string;
    /** Pressed state surface for background/muted */
    mutedPressed: string;
    /** General purpose hover state tint */
    hover: string;
    /** General purpose pressed state tint */
    pressed: string;
  };
  text: {
    /** Default color for text */
    default: string;
    /** Softer color for text */
    alternative: string;
    /** Muted color for text (Not accessible) */
    muted: string;
  };
  icon: {
    /** Default color for icons */
    default: string;
    /** Softer color for icons */
    alternative: string;
    /** Muted color for icons (Not accessible) */
    muted: string;
  };
  border: {
    /** Default color for borders */
    default: string;
    /** Muted color for borders */
    muted: string;
  };
  overlay: {
    /** Default color for overlays(scrim) */
    default: string;
    /** Dimmer color for overlays(scrim) */
    alternative: string;
    /** For elements placed on top of overlay/alternative */
    inverse: string;
  };
  primary: {
    /** For primary semantic elements: interactive, active, selected */
    default: string;
    /** Stronger color for primary semantic elements */
    alternative: string;
    /** Muted color for primary semantic elements */
    muted: string;
    /** For elements placed on top of primary/default fill */
    inverse: string;
    /** Hover state surface for primary/default */
    defaultHover: string;
    /** Pressed state surface for primary/default */
    defaultPressed: string;
    /** Hover state surface for primary/muted */
    mutedHover: string;
    /** Pressed state surface for primary/muted */
    mutedPressed: string;
  };
  error: {
    /** For danger semantic elements: error, critical, destructive... */
    default: string;
    /** Stronger color for danger semantic */
    alternative: string;
    /** Muted color for danger semantic */
    muted: string;
    /** For elements placed on top of error/default fill */
    inverse: string;
    /** Hover state surface for error/default */
    defaultHover: string;
    /** Pressed state surface for error/default */
    defaultPressed: string;
    /** Hover state surface for error/muted */
    mutedHover: string;
    /** Pressed state surface for error/muted */
    mutedPressed: string;
  };
  warning: {
    /** For warning semantic elements: caution, attention, precaution... */
    default: string;
    /** Muted color option for warning semantic */
    muted: string;
    /** For elements placed on top of warning/default fill */
    inverse: string;
    /** Hover state surface for warning/default */
    defaultHover: string;
    /** Pressed state surface for warning/default */
    defaultPressed: string;
    /** Hover state surface for warning/muted */
    mutedHover: string;
    /** Pressed state surface for warning/muted */
    mutedPressed: string;
  };
  success: {
    /** For positive semantic elements: success, confirm, complete, safe... */
    default: string;
    /** Muted color for positive semantic */
    muted: string;
    /** For elements placed on top of success/default fill */
    inverse: string;
    /** Hover state surface for success/default */
    defaultHover: string;
    /** Pressed state surface for success/default */
    defaultPressed: string;
    /** Hover state surface for success/muted */
    mutedHover: string;
    /** Pressed state surface for success/muted */
    mutedPressed: string;
  };
  info: {
    /** For soft alert semantic elements: info, reminder, hint... */
    default: string;
    /** Muted color for soft alert semantic */
    muted: string;
    /** For elements placed on top of info/default fill */
    inverse: string;
  };
  accent01: {
    /** Expressive color in light orange */
    light: string;
    /** Expressive color in orange */
    normal: string;
    /** Expressive color in dark orange */
    dark: string;
  };
  accent02: {
    /** Expressive color in light purple */
    light: string;
    /** Expressive color in purple */
    normal: string;
    /** Expressive color in dark purple */
    dark: string;
  };
  accent03: {
    /** Expressive color in light lime */
    light: string;
    /** Expressive color in lime */
    normal: string;
    /** Expressive color in dark lime */
    dark: string;
  };
  accent04: {
    /** Expressive color in light indigo */
    light: string;
    /** Expressive color in indigo */
    normal: string;
    /** Expressive color in dark indigo */
    dark: string;
  };
  flask: {
    /** For Flask primary accent color */
    default: string;
    /** For elements placed on top of flask/default */
    inverse: string;
  };
  shadow: {
    /** For neutral drop shadow color */
    default: string;
    /** For primary drop shadow color */
    primary: string;
    /** For critical/danger drop shadow color */
    error: string;
  };
};

export type Theme = {
  colors: ThemeColors;
  typography: ThemeTypography;
  shadows: ThemeShadows;
};
