import { brandColor } from '../../brandColor';
import type { ThemeColors } from '../types';

export const colors: ThemeColors = {
  background: {
    /** For default neutral surface (#FFFFFF) */
    default: brandColor.grey000,
    /** For sunken neutral surface below background/default (#F3F5F9) */
    alternative: brandColor.grey050,
    /** For section bg usually over background/default (#F3F5F9) */
    section: brandColor.grey050,
    /** For subsection bg usually over background/section (#FFFFFF) */
    subsection: brandColor.grey000,
    /** For muted neutral surface (#3c4d9d1a) */
    muted: '#3c4d9d1a',
    /** Hover state surface for background/default (#f6f6f7) */
    defaultHover: '#f6f6f7',
    /** Pressed state surface for background/default (#ebecef) */
    defaultPressed: '#ebecef',
    /** Hover state surface for background/alternative (#ebedf1) */
    alternativeHover: '#ebedf1',
    /** Pressed state surface for background/alternative (#e1e4ea) */
    alternativePressed: '#e1e4ea',
    /** Hover state surface for background/muted (#3c4d9d26) */
    mutedHover: '#3c4d9d26',
    /** Pressed state surface for background/muted (#3c4d9d33) */
    mutedPressed: '#3c4d9d33',
    /** General purpose hover state tint (#858b9a14) */
    hover: '#858b9a14',
    /** General purpose pressed state tint (#858b9a29) */
    pressed: '#858b9a29',
  },
  text: {
    /** Default color for text (#121314) */
    default: brandColor.grey900,
    /** Softer color for text (#686E7D) */
    alternative: brandColor.grey500,
    /** Muted color for text (Not accessible) (#9CA1AF) */
    muted: brandColor.grey200,
  },
  icon: {
    /** Default color for icons (#121314) */
    default: brandColor.grey900,
    /** Softer color for icons (#686E7D) */
    /** Hover state surface for icon.default (#2a2b2c) */
    defaultHover: '#2a2b2c',
    /** Pressed state surface for icon.default (#414243) */
    defaultPressed: '#414243',
    alternative: brandColor.grey500,
    /** Muted color for icons (Not accessible) (#9CA1AF) */
    muted: brandColor.grey200,
    /** For elements placed on top of icon.default fill (#FFFFFF) */
    inverse: brandColor.grey000,
  },
  border: {
    /** Default color for borders (#B7BBC8) */
    default: brandColor.grey200,
    /** Muted color for borders (#B7BBC866) */
    muted: '#b7bbc866',
  },
  overlay: {
    /** Default color for overlays (scrim) (#3f434a66) */
    default: '#3f434a66',
    /** Dimmer color for overlays (scrim) (#000000CC) */
    alternative: '#000000cc',
    /** For elements placed on top of overlay/alternative (#FFFFFF) */
    inverse: brandColor.grey000,
  },
  primary: {
    /** For primary semantic elements: interactive, active, selected (#4459ff) */
    default: brandColor.blue500,
    /** Stronger color for primary semantic elements (#2c3dc5) */
    alternative: brandColor.blue600,
    /** Muted color for primary semantic elements (#4459ff1a) */
    muted: '#4459ff1a',
    /** For elements placed on top of primary/default (#ffffff) */
    inverse: brandColor.grey000,
    /** Hover state surface for primary/default (#384df5) */
    defaultHover: '#384df5',
    /** Pressed state surface for primary/default (#2b3eda) */
    defaultPressed: '#2b3eda',
    /** Hover state surface for primary/muted (#4459ff26) */
    mutedHover: '#4459ff26',
    /** Pressed state surface for primary/muted (#4459ff33) */
    mutedPressed: '#4459ff33',
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
    /** Hover state surface for error/default (#ba313d) */
    defaultHover: '#ba313d',
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
    /** Hover state surface for warning/default (#855500) */
    defaultHover: '#855500',
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
    /** Hover state surface for success/default (#186c2c) */
    defaultHover: '#186c2c',
    /** Pressed state surface for success/default (#114B1E) */
    defaultPressed: '#114b1e',
    /** Hover state surface for success/muted (#1C7E3326) */
    mutedHover: '#1c7e3326',
    /** Pressed state surface for success/muted (#1C7E3333) */
    mutedPressed: '#1c7e3333',
  },
  info: {
    /** For informational read-only elements: info, reminder, hint (#4459ff) */
    default: brandColor.blue500,
    /** Muted color for informational semantic (#4459ff1a) */
    muted: '#4459ff1a',
    /** For elements placed on top of info/default (#FFFFFF) */
    inverse: brandColor.grey000,
  },
  accent01: {
    /** Expressive color in light orange (#ffa680) */
    light: brandColor.orange200,
    /** Expressive color in orange (#ff5c16) */
    normal: brandColor.orange400,
    /** Expressive color in dark orange (#661800) */
    dark: brandColor.orange700,
  },
  accent02: {
    /** Expressive color in light purple (#eac2ff) */
    light: brandColor.purple100,
    /** Expressive color in purple (#d075ff) */
    normal: brandColor.purple300,
    /** Expressive color in dark purple (#3d065f) */
    dark: brandColor.purple800,
  },
  accent03: {
    /** Expressive color in light lime (#e5ffc3) */
    light: brandColor.lime050,
    /** Expressive color in lime (#baf24a) */
    normal: brandColor.lime100,
    /** Expressive color in dark lime (#013330) */
    dark: brandColor.lime700,
  },
  accent04: {
    /** Expressive color in light indigo (#cce7ff) */
    light: brandColor.indigo100,
    /** Expressive color in indigo (#89b0ff) */
    normal: brandColor.indigo200,
    /** Expressive color in dark indigo (#190066) */
    dark: brandColor.indigo800,
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
    /** For primary drop shadow color (#4459ff33) */
    primary: '#4459ff33',
    /** For critical/danger drop shadow color (#CA354266) */
    error: '#ca354266',
  },
};
