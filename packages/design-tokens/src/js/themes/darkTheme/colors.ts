import { brandColor } from '../../brandColor';
import type { ThemeColors } from '../types';

export const colors: ThemeColors = {
  background: {
    /** For default neutral surface (#222325) */
    default: brandColor.grey900,
    /** For sunken neutral surface below background/default. (#121314) */
    alternative: brandColor.grey1000,
    /** For section bg usually over background/default (#31333A) */
    section: brandColor.grey800,
    /** For subsection bg usually over background/section (#222325) */
    subsection: brandColor.grey700,
    /** For muted neutral surface (#e0e5ff14) */
    muted: '#e0e5ff14',
    /** Hover state surface for background/default (#1a1b1c) */
    defaultHover: '#1a1b1c',
    /** Pressed state surface for background/default (#222424) */
    defaultPressed: '#222424',
    /** Hover state surface for background/alternative (#0d0d0e) */
    alternativeHover: '#0d0d0e',
    /** Pressed state surface for background/alternative (#161617) */
    alternativePressed: '#161617',
    /** Hover state surface for background/muted (#e0e5ff26) */
    mutedHover: '#e0e5ff26',
    /** Pressed state surface for background/muted (#e0e5ff33) */
    mutedPressed: '#e0e5ff33',
    /** General purpose hover state tint (#dadce50a) */
    hover: '#dadce50a',
    /** General purpose pressed state tint (#dadce514) */
    pressed: '#dadce514',
  },
  text: {
    /** Default color for text (#FFFFFF) */
    default: brandColor.grey000,
    /** Softer color for text (#858B9A) */
    alternative: brandColor.grey300,
    /** Muted color for text (Not accessible) (#686E7D) */
    muted: brandColor.grey600,
  },
  icon: {
    /** Default color for icons (#FFFFFF) */
    default: brandColor.grey000,
    /** Hover state surface for icon.default (#F0F0F0) */
    defaultHover: '#f0f0f0',
    /** Pressed state surface for icon.default (#D0D0D0) */
    defaultPressed: '#d0d0d0',
    /** Softer color for icons (#858B9A) */
    alternative: brandColor.grey300,
    /** Muted color for icons (Not accessible) (#686E7D) */
    muted: brandColor.grey600,
    /** For elements placed on top of icon.default fill (#121314) */
    inverse: brandColor.grey900,
  },
  border: {
    /** Default color for borders (#9CA1AF) */
    default: brandColor.grey400,
    /** Muted color for borders (#858B9A33) */
    muted: '#858b9a33',
  },
  overlay: {
    /** Default color for overlays (scrim) (#00000099) */
    default: '#00000099',
    /** Dimmer color for overlays (scrim) (#000000CC) */
    alternative: '#000000cc',
    /** For elements placed on top of overlay/alternative (#FFFFFF) */
    inverse: brandColor.grey000,
  },
  primary: {
    /** For primary semantic elements: interactive, active, selected (#8b99ff) */
    default: brandColor.blue300,
    /** Stronger color for primary semantic elements (#adb6fe) */
    alternative: brandColor.blue200,
    /** Muted color for primary semantic elements (#8b99ff26) */
    muted: '#8b99ff26',
    /** For elements placed on top of primary/default (#121314) */
    inverse: brandColor.grey900,
    /** Hover state surface for primary/default (#9eaaff) */
    defaultHover: '#9eaaff',
    /** Pressed state surface for primary/default (#c7ceff) */
    defaultPressed: '#c7ceff',
    /** Hover state surface for primary/muted (#8b99ff33) */
    mutedHover: '#8b99ff33',
    /** Pressed state surface for primary/muted (#8b99ff40) */
    mutedPressed: '#8b99ff40',
  },
  error: {
    /** For danger semantic elements: error, critical, destructive (#FF7584) */
    default: brandColor.red300,
    /** Stronger color for error semantic (#FFA1AA) */
    alternative: brandColor.red200,
    /** Muted color for error semantic (#FF758426) */
    muted: '#ff758426',
    /** For elements placed on top of error/default fill (#121314) */
    inverse: brandColor.grey900,

    /** Hover state surface for error/default (#ff8a96) */
    defaultHover: '#ff8a96',
    /** Pressed state surface for error/default (#FFB2BB) */
    defaultPressed: '#ffb2bb',

    /** Hover state surface for error/muted (#FF758433) */
    mutedHover: '#ff758433',
    /** Pressed state surface for error/muted (#FF758440) */
    mutedPressed: '#ff758440',
  },
  warning: {
    /** For warning semantic elements: caution, attention, precaution (#F0B034) */
    default: brandColor.yellow200,
    /** Muted color option for warning semantic (#f0b03426) */
    muted: '#f0b03426',
    /** For elements placed on top of warning/default fill (#121314) */
    inverse: brandColor.grey900,
    /** Hover state surface for warning/default (#f3be59) */
    defaultHover: '#f3be59',
    /** Pressed state surface for warning/default (#f6cd7f) */
    defaultPressed: '#f6cd7f',

    /** Hover state surface for warning/muted (#f0b03433) */
    mutedHover: '#f0b03433',
    /** Pressed state surface for warning/muted (#f0b03440) */
    mutedPressed: '#f0b03440',
  },
  success: {
    /** For positive semantic elements: success, confirm, complete, safe (#BAF24A) */
    default: brandColor.lime100,
    /** Muted color for positive semantic (#baf24a26) */
    muted: '#baf24a26',
    /** For elements placed on top of success/default fill (#121314) */
    inverse: brandColor.grey900,
    /** Hover state surface for success/default (#c9f570) */
    defaultHover: '#c9f570',
    /** Pressed state surface for success/default (#d7f796) */
    defaultPressed: '#d7f796',

    /** Hover state surface for success/muted (#baf24a33) */
    mutedHover: '#baf24a33',
    /** Pressed state surface for success/muted (#baf24a40) */
    mutedPressed: '#baf24a40',
  },
  info: {
    /** For informational read-only elements: info, reminder, hint (#8b99ff) */
    default: brandColor.blue300,
    /** Muted color for informational semantic (#8b99ff26) */
    muted: '#8b99ff26',
    /** For elements placed on top of info/default (#121314) */
    inverse: brandColor.grey900,
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
    /** For Flask primary accent color (#D27DFF) */
    default: brandColor.purple300,
    /** For elements placed on top of flask/default fill (#121314) */
    inverse: brandColor.grey900,
  },
  shadow: {
    /** For neutral drop shadow color (#00000066) */
    default: '#00000066',
    /** For primary drop shadow color (#8b99ff33) */
    primary: '#8b99ff33',
    /** For critical/danger drop shadow color (#ff758433) */
    error: '#ff758433',
  },
};
