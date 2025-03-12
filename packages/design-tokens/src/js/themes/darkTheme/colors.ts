import { brandColor } from '../../brandColor';
import type { ThemeColors } from '../types';

export const colors: ThemeColors = {
  background: {
    /** For default neutral surface (#222325) */
    default: brandColor.grey900,
    /** For sunken neutral surface below background/default (#121314) */
    alternative: brandColor.grey1000,
    /** For raised neutral surface above background/default (#31333A) */
    muted: brandColor.grey800,
    /** Hover state surface for background/default (#1a1b1c) */
    defaultHover: '#1a1b1c',
    /** Pressed state surface for background/default (#222424) */
    defaultPressed: '#222424',
    /** Hover state surface for background/alternative (#0d0d0e) */
    alternativeHover: '#0d0d0e',
    /** Pressed state surface for background/alternative (#161617) */
    alternativePressed: '#161617',
    /** Hover state surface for background/muted (#2a2b2d) */
    mutedHover: '#2a2b2d',
    /** Pressed state surface for background/muted (#303234) */
    mutedPressed: '#303234',
    /** General purpose hover state tint (#dadce50a) */
    hover: '#dadce50a',
    /** General purpose pressed state tint (#dadce514) */
    pressed: '#dadce514',
  },
  text: {
    /** Default color for text (#FFFFFF) */
    default: brandColor.grey000,
    /** Softer color for text (#ADB6FE) */
    alternative: brandColor.grey200,
    /** Muted color for text (Not accessible) (#9CA1AF) */
    muted: brandColor.grey400,
  },
  icon: {
    /** Default color for icons (#FFFFFF) */
    default: brandColor.grey000,
    /** Softer color for icons (#ADB6FE) */
    alternative: brandColor.grey200,
    /** Muted color for icons (Not accessible) (#9CA1AF) */
    muted: brandColor.grey400,
  },
  border: {
    /** Default color for borders (#9CA1AF) */
    default: brandColor.grey400,
    /** Muted color for borders (#858B9A33) */
    muted: '#858b9a33',
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
    /** For warning semantic elements: caution, attention, precaution (#FFD957) */
    default: brandColor.yellow100,
    /** Muted color option for warning semantic (#FFD95726) */
    muted: '#ffd95726',
    /** For elements placed on top of warning/default fill (#121314) */
    inverse: brandColor.grey900,
    /** Hover state surface for warning/default (#ffde6b) */
    defaultHover: '#ffde6b',
    /** Pressed state surface for warning/default (#ffe794) */
    defaultPressed: '#ffe794',

    /** Hover state surface for warning/muted (#FFD95733) */
    mutedHover: '#ffd95733',
    /** Pressed state surface for warning/muted (#FFD95740) */
    mutedPressed: '#ffd95740',
  },
  success: {
    /** For positive semantic elements: success, confirm, complete, safe (#4CB564) */
    default: brandColor.green300,
    /** Muted color for positive semantic (#4CB56426) */
    muted: '#4cb56426',
    /** For elements placed on top of success/default fill (#121314) */
    inverse: brandColor.grey900,
    /** Hover state surface for success/default (#59ba6f) */
    defaultHover: '#59ba6f',
    /** Pressed state surface for success/default (#76C688) */
    defaultPressed: '#76c688',

    /** Hover state surface for success/muted (#4CB56433) */
    mutedHover: '#4cb56433',
    /** Pressed state surface for success/muted (#4CB56440) */
    mutedPressed: '#4cb56440',
  },
  info: {
    /** For informational read-only elements: info, reminder, hint (#8b99ff) */
    default: brandColor.blue300,
    /** Muted color for informational semantic (#8b99ff26) */
    muted: '#8b99ff26',
    /** For elements placed on top of info/default (#121314) */
    inverse: brandColor.grey900,
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
