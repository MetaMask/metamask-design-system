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
    /**
     * {string} background.default - For default neutral backgrounds
     */
    default: string;
    /**
     * {string} background.defaultHover - For component hover states that use background/default
     */
    defaultHover: string;
    /**
     * {string} background.defaultPressed - For component pressed states that use background/default.
     */
    defaultPressed: string;
    /**
     * {string} background.alternative - For a subtle contrast option for neutral backgrounds. (Example: backdrop, header background)
     */
    alternative: string;
    /**
     * {string} background.alternativeHover - For component hover states that use background/alternative
     */
    alternativeHover: string;
    /**
     * {string} background.alternativePressed - For component pressed states that use background/alternative
     */
    alternativePressed: string;
    /**
     * {string} background.hover - For component hover states that don't have a background color
     */
    hover: string;
    /**
     * {string} background.pressed - For component pressed states that don't have a background color
     */
    pressed: string;
  };
  text: {
    /**
     * {string} text.default - For general text that takes main priority in the information hierarchy
     */
    default: string;
    /**
     * {string} text.alternative - For a weaker contrast option for neutral text
     */
    alternative: string;
    /**
     * {string} text.muted - For inactive or lowest priority text. (Example: placeholder)
     */
    muted: string;
  };
  icon: {
    /**
     * {string} icon.default - For default neutral icons
     */
    default: string;
    /**
     * {string} icon.alternative - For a weaker contrast option for neutral icons
     */
    alternative: string;
    /**
     * {string} icon.muted - For inactive or lowest priority icons
     */
    muted: string;
  };
  border: {
    /**
     * {string} border.default - For default neutral borders with visible contrast. (Example: text inputs)
     */
    default: string;
    /**
     * {string} border.muted - For a weaker contrast option for neutral borders.
     */
    muted: string;
  };
  overlay: {
    /**
     * {string} overlay.default - For shading layers behind modality screens
     */
    default: string;
    /**
     * {string} overlay.alternative - For a stronger shade of screen
     */
    alternative: string;
    /**
     * {string} overlay.inverse - For elements used on top of overlay/alternative. Used for text, icon or border
     */
    inverse: string;
  };
  shadow: {
    /**
     * {string} shadow.default - For neutral drop shadow color.
     */
    default: string;
    /**
     * {string} shadow.primary - For primary drop shadow color.
     */
    primary: string;
    /**
     * {string} shadow.default - For critical/danger drop shadow color.
     */
    error: string;
  };
  primary: {
    /**
     * {string} primary.default - For primary user action related elements
     */
    default: string;
    /**
     * {string} defaultHover - For the "hover" state of interactive elements
     */
    defaultHover: string;
    /**
     * {string} defaultPressed - For the "pressed" state of interactive elements
     */
    defaultPressed: string;
    /**
     * {string} primary.alternative - For the \"pressed\" state of interactive primary elements
     */
    alternative: string;
    /**
     * {string} primary.muted - For lowest contrast background used in primary elements
     */
    muted: string;
    /**
     * {string} primary.inverse - For elements used on top of primary/default. (Example: label of primary button, check in a checkbox)disabled state
     */
    inverse: string;
  };
  error: {
    /**
     * {string} error.default - For high-level alert danger/critical elements. Used for text, background, icon or border
     */
    default: string;
    /**
     * {string} defaultHover - For the "hover" state of interactive elements
     */
    defaultHover: string;
    /**
     * {string} defaultPressed - For the "pressed" state of interactive elements
     */
    defaultPressed: string;
    /**
     * {string} error.alternative - For the \"pressed\" state of interactive danger/critical elements
     */
    alternative: string;
    /**
     * {string} error.muted - For lowest contrast background used in high-level alert danger/critical elements. (Example: notification background)
     */
    muted: string;
    /**
     * {string} error.inverse - For elements used on top of error/default (Example: label of danger/critical button)
     */
    inverse: string;
  };
  warning: {
    /**
     * {string} warning.muted - For lowest contrast background used in warning elements. (Example: notification background)
     */
    default: string;
    /**
     * {string} defaultHover - For the "hover" state of interactive elements
     */
    defaultHover: string;
    /**
     * {string} defaultPressed - For the "pressed" state of interactive elements
     */
    defaultPressed: string;
    /**
     * {string} warning.muted - For lowest contrast background used in warning elements. (Example: notification background)
     */
    muted: string;
    /**
     * {string} warning.inverse - For elements used on top of warning/default. Used for text, icon or border
     */
    inverse: string;
  };
  success: {
    /**
     * {string} success.default - For positive & good semantic elements. Used for text, background, icon or border
     */
    default: string;
    /**
     * {string} defaultHover - For the "hover" state of interactive elements
     */
    defaultHover: string;
    /**
     * {string} defaultPressed - For the "pressed" state of interactive elements
     */
    defaultPressed: string;
    /**
     * {string} success.muted - For lowest contrast background used in success semantic. (Example: notification background)
     */
    muted: string;
    /**
     * {string} success.inverse -  For elements used on top of success/default. Used for text, icon or border
     */
    inverse: string;
  };
  info: {
    /**
     * {string} info.default - For informational semantic elements. Used for text, background, icon or border
     */
    default: string;
    /**
     * {string} info.muted - For lowest contrast background used in informational semantic. (Example: notification background)
     */
    muted: string;
    /**
     * {string} info.inverse - For elements used on top of info/default. Used for text, icon or border
     */
    inverse: string;
  };
  flask: {
    /**
     * {string} flask.default - For Flask colored elements
     */
    default: string;
    /**
     * {string} flask.inverse - For elements used on top of flask/default
     */
    inverse: string;
  };
};

export type Theme = {
  colors: ThemeColors;
  typography: ThemeTypography;
  shadows: ThemeShadows;
};
