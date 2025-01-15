import { brandColor } from '../../brandColor';
import type { ThemeColors } from '../types';

export const colors: ThemeColors = {
  background: {
    /** For default neutral surface (#222325) */
    default: brandColor.grey800,
    /** For sunken neutral surface below background/default (#121314) */
    alternative: brandColor.grey900,
    /** For raised neutral surface above background/default (#31333A) */
    muted: brandColor.grey700,
    /** Hover state surface for background/default (#313235) */
    defaultHover: '#313235',
    /** Pressed state surface for background/default (#3F4145) */
    defaultPressed: '#3f4145',
    /** Hover state surface for background/alternative (#1F2123) */
    alternativeHover: '#1f2123',
    /** Pressed state surface for background/alternative (#2E3033) */
    alternativePressed: '#2e3033',
    /** Hover state surface for background/muted (#2D3034) */
    mutedHover: '#2D3034',
    /** Pressed state surface for background/muted (#363B3F) */
    mutedPressed: '#363B3F',
    /** General purpose hover state tint (#FFFFFF0F) */
    hover: '#ffffff0f',
    /** General purpose pressed state tint (#FFFFFF1F) */
    pressed: '#ffffff1f',
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
    /** For primary semantic elements: interactive, active, selected (#8B99FF) */
    default: brandColor.blue300,
    /** Stronger color for primary semantic elements (#ADB6FE) */
    alternative: brandColor.blue200,
    /** Muted color for primary semantic elements (#8B99FF26) */
    muted: '#8b99ff26',
    /** For elements placed on top of primary/default fill (#121314) */
    inverse: brandColor.grey900,
    /** Hover state surface for primary/default (#A8B2FF) */
    defaultHover: '#a8b2ff',
    /** Pressed state surface for primary/default (#C7CEFF) */
    defaultPressed: '#c7ceff',

    /** Hover state surface for primary/muted (#8B99FF33) */
    mutedHover: '#8b99ff33',
    /** Pressed state surface for primary/muted (#8B99FF40) */
    mutedPressed: '#8b99ff40',
  },
  error: {
    /** For danger semantic elements: error, critical, destructive (#FF7584) */
    default: brandColor.red300,
    /** Stronger color for danger semantic (#FFA1AA) */
    alternative: brandColor.red200,
    /** Muted color for danger semantic (#FF758426) */
    muted: '#ff758426',
    /** For elements placed on top of error/default fill (#121314) */
    inverse: brandColor.grey900,

    /** Hover state surface for error/default (#FF94A0) */
    defaultHover: '#ff94a0',
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
    /** Hover state surface for warning/default (#FFE794) */
    defaultHover: '#ffe794',
    /** Pressed state surface for warning/default (#FFEEB2) */
    defaultPressed: '#ffeeb2',

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
    /** Hover state surface for success/default (#60BD76) */
    defaultHover: '#60bd76',
    /** Pressed state surface for success/default (#76C688) */
    defaultPressed: '#76c688',

    /** Hover state surface for success/muted (#4CB56433) */
    mutedHover: '#4cb56433',
    /** Pressed state surface for success/muted (#4CB56440) */
    mutedPressed: '#4cb56440',
  },
  info: {
    /** For soft alert semantic elements: info, reminder, hint (#8B99FF) */
    default: brandColor.blue300,
    /** Muted color for soft alert semantic (#8B99FF26) */
    muted: '#8b99ff26',
    /** For elements placed on top of info/default fill (#121314) */
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
    /** For primary drop shadow color (#8B99FF33) */
    primary: '#8b99ff33',
    /** For critical/danger drop shadow color (#FF758433) */
    error: '#ff758433',
  },
};
