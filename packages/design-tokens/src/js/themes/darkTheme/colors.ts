import { brandColor } from '../../brandColor';
import type { ThemeColors } from '../types';

export const colors: ThemeColors = {
  background: {
    default: brandColor.grey900, // For default neutral surface
    alternative: brandColor.grey1000, // For sunken neutral surface below background/default
    muted: brandColor.grey800, // For raised neutral surface above background/default
    defaultHover: '#1E2124', // Hover state surface for background/default
    defaultPressed: '#272B2F', // Pressed state surface for background/default
    alternativeHover: '#0A0A0A', // Hover state surface for background/alternative
    alternativePressed: '#141414', // Pressed state surface for background/alternative
    mutedHover: '#2D3034', // Hover state surface for background/muted
    mutedPressed: '#363B3F', // Pressed state surface for background/muted
    hover: '#ffffff0a', // General purpose hover state tint
    pressed: '#ffffff14', // General purpose pressed state tint
  },
  text: {
    default: brandColor.grey000, // Default color for text
    alternative: brandColor.grey300, // Softer color for text
    muted: brandColor.grey500, // Muted color for text (Not accessible)
  },
  icon: {
    default: brandColor.grey000, // Default color for icons
    alternative: brandColor.grey300, // Softer color for icons
    muted: brandColor.grey500, // Muted color for icons (Not accessible)
  },
  border: {
    default: brandColor.grey500, // Default color for borders
    muted: '#848c9629', // Muted color for borders
  },
  overlay: {
    default: '#00000099', // For the default shade of screen
    alternative: '#000000cc', // For a stronger shade of screen
    inverse: brandColor.grey000, // For elements used on top of overlay/alternative. Used for text, icon or border
  },
  primary: {
    default: brandColor.blue300, // For interactive, active, and selected semantics. Used for text, background, icon or border
    alternative: brandColor.blue200, // For the stronger contrast primary semantic elements.
    muted: '#43aefc26', // For the weakest contrast primary semantic backgrounds.
    inverse: brandColor.grey900, // For elements used on top of primary/default. Used for text, icon or border
    defaultHover: '#26a2fc', // For the "hover" state of primary-default elements
    defaultPressed: '#3baafd', // For the "pressed" state of primary-default elements
  },
  error: {
    default: brandColor.red300, // For the critical alert semantic elements. Used for text, background, icon or border
    alternative: brandColor.red200, // For the stronger contrast error semantic elements.
    muted: '#e88f9726', // For the weakest contrast critical alert semantic backgrounds.
    inverse: brandColor.grey900, // For elements used on top of error/default. Used for text, icon or border
    defaultHover: '#e47782', // For the "hover" state of error-default elements.
    defaultPressed: '#e78891', // For the "pressed" state of error-default elements.
  },
  warning: {
    default: brandColor.yellow100, // For the caution alert semantic elements. Used for text, background, icon or border
    muted: '#ffdf7026', // For the weakest contrast caution alert semantic backgrounds.
    inverse: brandColor.grey900, // For elements used on top of warning/default. Used for text, icon or border
    defaultHover: '#ffe485', // For the "hover" state of warning-default elements
    defaultPressed: '#ffe899', // For the "pressed" state of warning-default elements
  },
  success: {
    default: brandColor.green300, // For the positive semantic elements. Used for text, background, icon or border
    muted: '#28a74526', // For the weakest contrast positive semantic backgrounds.
    inverse: brandColor.grey900, // For elements used on top of success/default. Used for text, icon or border
    defaultHover: '#2cb94c', // For the "hover" state of success-default elements
    defaultPressed: '#30ca53', // For the "pressed" state of success-default elements
  },
  info: {
    default: brandColor.blue300, // For informational read-only elements. Used for text, background, icon or border
    muted: '#43aefc26', // For the weakest contrast informational semantic backgrounds.
    inverse: brandColor.grey900, // For elements used on top of info/default. Used for text, icon or border
  },
  flask: {
    default: brandColor.purple300, // For Flask primary accent color.
    inverse: brandColor.grey900, // For elements used on top of flask/default. Used for text, icon or border
  },
  shadow: {
    default: '#00000066', // For neutral drop shadow color.
    primary: '#43aefc33', // For primary drop shadow color.
    error: '#ff758466', // For critical/danger drop shadow color.
  },
};
