import { brandColor } from '../../brandColor';
import type { ThemeColors } from '../types';

export const colors: ThemeColors = {
  background: {
    /** For default neutral surface (#FFFFFF) */
    default: brandColor.grey000,
    /** For sunken neutral surface below background/default (#F3F5F9) */
    alternative: brandColor.grey050,
    /** For raised neutral surface above background/default (#F3F5F9) */
    muted: brandColor.grey050,
    /** Hover state surface for background/default (#F0F0F0) */
    defaultHover: '#f0f0f0',
    /** Pressed state surface for background/default (#E0E0E0) */
    defaultPressed: '#e0e0e0',
    /** Hover state surface for background/alternative (#DDE3EE) */
    alternativeHover: '#dde3ee',
    /** Pressed state surface for background/alternative (#C9D2E4) */
    alternativePressed: '#c9d2e4',
    /** Hover state surface for background/muted (#E7EBEE) */
    mutedHover: '#E7EBEE',
    /** Pressed state surface for background/muted (#DBE0E6) */
    mutedPressed: '#DBE0E6',
    /** General purpose hover state tint (#0000000F) */
    hover: '#0000000f',
    /** General purpose pressed state tint (#0000001F) */
    pressed: '#0000001f',
  },
  text: {
    /** Default color for text (#121314) */
    default: brandColor.grey900,
    /** Softer color for text (#686E7D) */
    alternative: brandColor.grey500,
    /** Muted color for text (Not accessible) (#9CA1AF) */
    muted: brandColor.grey300,
  },
  icon: {
    /** Default color for icons (#121314) */
    default: brandColor.grey900,
    /** Softer color for icons (#686E7D) */
    alternative: brandColor.grey500,
    /** Muted color for icons (Not accessible) (#9CA1AF) */
    muted: brandColor.grey300,
  },
  border: {
    /** Default color for borders (#B7BBC8) */
    default: brandColor.grey200,
    /** Muted color for borders (#B7BBC866) */
    muted: '#b7bbc866',
  },
  overlay: {
    /** Default color for overlays (scrim) (#00000066) */
    default: '#00000066',
    /** Dimmer color for overlays (scrim) (#000000CC) */
    alternative: '#000000cc',
    /** For elements placed on top of overlay/alternative (#FFFFFF) */
    inverse: brandColor.grey000,
  },
  primary: {
    /** For primary semantic elements: interactive, active, selected (#0376C9) */
    default: brandColor.blue500,
    /** Stronger color for primary semantic elements (#2C3DC5) */
    alternative: brandColor.blue600,
    /** Muted color for primary semantic elements (#0376C91A) */
    muted: '#0376c91a',
    /** For elements placed on top of primary/default fill (#FFFFFF) */
    inverse: brandColor.grey000,
    /** Hover state surface for primary/default (#0379ce) */
    defaultHover: '#0379ce',
    /** Pressed state surface for primary/default (#025EA1) */
    defaultPressed: '#025ea1',
    /** Hover state surface for primary/muted (#0376C926) */
    mutedHover: '#0376c926',
    /** Pressed state surface for primary/muted (#0376C933) */
    mutedPressed: '#0376c933',
  },
  error: {
    /** For danger semantic elements: error, critical, destructive (#CA3542) */
    default: brandColor.red500,
    /** Stronger color for error semantic (#952731) */
    alternative: brandColor.red600,
    /** Muted color for error semantic (#CA35421A) */
    muted: '#ca35421a',
    /** For elements placed on top of error/default fill (#FFFFFF) */
    inverse: brandColor.grey000,
    /** Hover state surface for error/default (#B22F3A) */
    defaultHover: '#b22f3a',
    /** Pressed state surface for error/default (#9A2832) */
    defaultPressed: '#9a2832',
    /** Hover state surface for error/muted (#CA354226) */
    mutedHover: '#ca354226',
    /** Pressed state surface for error/muted (#CA354233) */
    mutedPressed: '#ca354233',
  },
  warning: {
    /** For warning semantic elements: caution, attention, precaution (#9A6300) */
    default: brandColor.yellow500,
    /** Muted color option for warning semantic (#9A63001A) */
    muted: '#9a63001a',
    /** For elements placed on top of warning/default fill (#FFFFFF) */
    inverse: brandColor.grey000,
    /** Hover state surface for warning/default (#7A4F00) */
    defaultHover: '#7a4f00',
    /** Pressed state surface for warning/default (#5C3B00) */
    defaultPressed: '#5c3b00',
    /** Hover state surface for warning/muted (#9A630026) */
    mutedHover: '#9a630026',
    /** Pressed state surface for warning/muted (#9A630033) */
    mutedPressed: '#9a630033',
  },
  success: {
    /** For positive semantic elements: success, confirm, complete, safe (#1C7E33) */
    default: brandColor.green500,
    /** Muted color for positive semantic (#1C7E331A) */
    muted: '#1c7e331a',
    /** For elements placed on top of success/default fill (#FFFFFF) */
    inverse: brandColor.grey000,
    /** Hover state surface for success/default (#166429) */
    defaultHover: '#166429',
    /** Pressed state surface for success/default (#114B1E) */
    defaultPressed: '#114b1e',
    /** Hover state surface for success/muted (#1C7E3326) */
    mutedHover: '#1c7e3326',
    /** Pressed state surface for success/muted (#1C7E3333) */
    mutedPressed: '#1c7e3333',
  },
  info: {
    /** For informational read-only elements: info, reminder, hint (#0376C9) */
    default: brandColor.blue500,
    /** Muted color for informational semantic (#0376C91A) */
    muted: '#0376c91a',
    /** For elements placed on top of info/default fill (#FFFFFF) */
    inverse: brandColor.grey000,
  },
  flask: {
    /** For Flask primary accent color (#8F44E4) */
    default: brandColor.purple500,
    /** For elements placed on top of flask/default (#FFFFFF) */
    inverse: brandColor.grey000,
  },
  shadow: {
    /** For neutral drop shadow color (#0000001A) */
    default: '#0000001a',
    /** For primary drop shadow color (#0376C933) */
    primary: '#0376c933',
    /** For critical/danger drop shadow color (#CA354266) */
    error: '#ca354266',
  },
};
