import { brandColor } from '../../brandColor';
import type { ThemeColors } from '../types';

export const colors: ThemeColors = {
  background: {
    default: brandColor.grey000, // For default neutral surface
    alternative: brandColor.grey050, // For sunken neutral surface below background/default
    muted: brandColor.grey050, // For raised neutral surface above background/default
    defaultHover: '#f5f5f5', // Hover state surface for background/default
    defaultPressed: '#ebebeb', // Pressed state surface for background/default
    alternativeHover: '#e7ebee', // Hover state surface for background/alternative
    alternativePressed: '#dbe0e6', // Pressed state surface for background/alternative
    mutedHover: '#E7EBEE', // Hover state surface for background/muted
    mutedPressed: '#DBE0E6', // Pressed state surface for background/muted
    hover: '#0000000a', // General purpose hover state tint
    pressed: '#00000014', // General purpose pressed state tint
  },
  text: {
    default: brandColor.grey900, // Default color for text
    alternative: brandColor.grey500, // Softer color for text
    muted: brandColor.grey300, // Muted color for text (Not accessible)
  },
  icon: {
    default: brandColor.grey900, // Default color for icons
    alternative: brandColor.grey500, // Softer color for icons
    muted: brandColor.grey300, // Muted color for icons (Not accessible)
  },
  border: {
    default: brandColor.grey400, // Default color for borders
    muted: '#bbc0c566', // Muted color for borders
  },
  overlay: {
    default: '#00000099', // For the default shade of screen
    alternative: '#000000cc', // For a stronger shade of screen
    inverse: brandColor.grey000, // For elements used on top of overlay/alternative. Used for text, icon or border
  },
  primary: {
    default: brandColor.blue500, // For interactive, active, and selected semantics. Used for text, background, icon or border
    alternative: brandColor.blue600, // For the stronger contrast primary semantic elements.
    muted: '#0376c91a', // For the weakest contrast primary semantic backgrounds.
    inverse: brandColor.grey000, // For elements used on top of primary/default. Used for text, icon or border
    defaultHover: '#036ab5', // For the "hover" state of primary-default elements
    defaultPressed: '#025ea1', // For the "pressed" state of primary-default elements
  },
  error: {
    default: brandColor.red500, // For the critical alert semantic elements. Used for text, background, icon or border
    alternative: brandColor.red600, // For the stronger contrast error semantic elements.
    muted: '#d738471a', // For the weakest contrast critical alert semantic backgrounds.
    inverse: brandColor.grey000, // For elements used on top of error/default. Used for text, icon or border
    defaultHover: '#d02a3a', // For the "hover" state of error-default elements.
    defaultPressed: '#bf2635', // For the "pressed" state of error-default elements.
  },
  warning: {
    default: brandColor.yellow500, // For the caution alert semantic elements. Used for text, background, icon or border
    muted: '#bf52081a', // For the weakest contrast caution alert semantic backgrounds.
    inverse: brandColor.grey000, // For elements used on top of warning/default. Used for text, icon or border
    defaultHover: '#ac4a07', // For the "hover" state of warning-default elements
    defaultPressed: '#984106', // For the "pressed" state of warning-default elements
  },
  success: {
    default: brandColor.green500, // For the positive semantic elements. Used for text, background, icon or border
    muted: '#1c82341a', // For the weakest contrast positive semantic backgrounds.
    inverse: brandColor.grey000, // For elements used on top of success/default. Used for text, icon or border
    defaultHover: '#18712d', // For the "hover" state of success-default elements
    defaultPressed: '#156127', // For the "pressed" state of success-default elements
  },
  info: {
    default: brandColor.blue500, // For informational read-only elements. Used for text, background, icon or border
    muted: '#0376c91a', // For the weakest contrast informational semantic backgrounds.
    inverse: brandColor.grey000, // For elements used on top of info/default. Used for text, icon or border
  },
  flask: {
    default: brandColor.purple500, // For Flask primary accent color.
    inverse: brandColor.grey000, // For elements used on top of flask/default. Used for text, icon or border
  },
  shadow: {
    default: '#0000001a', // For neutral drop shadow color.
    primary: '#0376c933', // For primary drop shadow color.
    error: '#ca354266', // For critical/danger drop shadow color.
  },
};
