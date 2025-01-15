import { brandColor } from '../../brandColor';
import type { ThemeColors } from '../types';

export const colors: ThemeColors = {
  background: {
    /** For default neutral surface (#FFFFFF) */
    default: brandColor.grey000,
    /** For sunken neutral surface below background/default (#F2F4F6) */
    alternative: brandColor.grey050,
    /** For raised neutral surface above background/default (#F2F4F6) */
    muted: brandColor.grey050,
    /** Hover state surface for background/default (#F5F5F5) */
    defaultHover: '#F5F5F5',
    /** Pressed state surface for background/default (#EBEBEB) */
    defaultPressed: '#EBEBEB',
    /** Hover state surface for background/alternative (#E7EBEE) */
    alternativeHover: '#E7EBEE',
    /** Pressed state surface for background/alternative (#DBE0E6) */
    alternativePressed: '#DBE0E6',
    /** Hover state surface for background/muted (#E7EBEE) */
    mutedHover: '#E7EBEE',
    /** Pressed state surface for background/muted (#DBE0E6) */
    mutedPressed: '#DBE0E6',
    /** General purpose hover state tint (#0000000A) */
    hover: '#0000000A',
    /** General purpose pressed state tint (#00000014) */
    pressed: '#00000014',
  },
  text: {
    /** Default color for text (#24272A) */
    default: brandColor.grey900,
    /** Softer color for text (#848C96) */
    alternative: brandColor.grey500,
    /** Muted color for text (Not accessible) (#BBC0C5) */
    muted: brandColor.grey300,
  },
  icon: {
    /** Default color for icons (#24272A) */
    default: brandColor.grey900,
    /** Softer color for icons (#848C96) */
    alternative: brandColor.grey500,
    /** Muted color for icons (Not accessible) (#BBC0C5) */
    muted: brandColor.grey300,
  },
  border: {
    /** Default color for borders (#9FA6AE) */
    default: brandColor.grey400,
    /** Muted color for borders (#BBC0C566) */
    muted: '#BBC0C566',
  },
  overlay: {
    /** Default color for overlays(scrim) (#00000099) */
    default: '#00000099',
    /** Dimmer color for overlays(scrim) (#000000CC) */
    alternative: '#000000CC',
    /** For elements placed on top of overlay/alternative (#FFFFFF) */
    inverse: brandColor.grey000,
  },
  primary: {
    /** For primary semantic elements: interactive, active, selected... (#0376C9) */
    default: brandColor.blue500,
    /** Stronger color for primary semantic elements (#0260A4) */
    alternative: brandColor.blue600,
    /** Muted color for primary semantic elements (#0376C91A) */
    muted: '#0376C91A',
    /** For elements placed on top of primary/default fill (#FFFFFF) */
    inverse: brandColor.grey000,
    /** Hover state surface for primary/default (#036AB5) */
    defaultHover: '#036AB5',
    /** Pressed state surface for primary/default (#025EA1) */
    defaultPressed: '#025EA1',
    /** Hover state surface for primary/muted (#0376c926) */
    mutedHover: '#0376c926',
    /** Pressed state surface for primary/muted (#0376c933) */
    mutedPressed: '#0376c933',
  },
  error: {
    /** For danger semantic elements: error, critical, destructive... (#D73847) */
    default: brandColor.red500,
    /** Stronger color for danger semantic (#B92534) */
    alternative: brandColor.red600,
    /** Muted color for danger semantic (#D738471A) */
    muted: '#D738471A',
    /** For elements placed on top of error/default fill (#FFFFFF) */
    inverse: brandColor.grey000,
    /** Hover state surface for error/default (#D02A3A) */
    defaultHover: '#D02A3A',
    /** Pressed state surface for error/default (#BF2635) */
    defaultPressed: '#BF2635',
    /** Hover state surface for error/muted (#d7384726) */
    mutedHover: '#d7384726',
    /** Pressed state surface for error/muted (#d7384733) */
    mutedPressed: '#d7384733',
  },
  warning: {
    /** For warning semantic elements: caution, attention, precaution... (#BF5208) */
    default: brandColor.yellow500,
    /** Muted color option for warning semantic (#BF52081A) */
    muted: '#BF52081A',
    /** For elements placed on top of warning/default fill (#FFFFFF) */
    inverse: brandColor.grey000,
    /** Hover state surface for warning/default (#AC4A07) */
    defaultHover: '#AC4A07',
    /** Pressed state surface for warning/default (#984106) */
    defaultPressed: '#984106',
    /** Hover state surface for warning/muted (#bf520826) */
    mutedHover: '#bf520826',
    /** Pressed state surface for warning/muted (#bf520833) */
    mutedPressed: '#bf520833',
  },
  success: {
    /** For positive semantic elements: success, confirm, complete, safe... (#1C8234) */
    default: brandColor.green500,
    /** Muted color for positive semantic (#1C82341A) */
    muted: '#1C82341A',
    /** For elements placed on top of success/default fill (#FFFFFF) */
    inverse: brandColor.grey000,
    /** Hover state surface for success/default (#18712D) */
    defaultHover: '#18712D',
    /** Pressed state surface for success/default (#156127) */
    defaultPressed: '#156127',
    /** Hover state surface for success/muted (#1c823426) */
    mutedHover: '#1c823426',
    /** Pressed state surface for success/muted (#1c823433) */
    mutedPressed: '#1c823433',
  },
  info: {
    /** For soft alert semantic elements: info, reminder, hint... (#0376C9) */
    default: brandColor.blue500,
    /** Muted color for soft alert semantic (#0376C91A) */
    muted: '#0376C91A',
    /** For elements placed on top of info/default fill (#FFFFFF) */
    inverse: brandColor.grey000,
  },
  flask: {
    /** For Flask primary accent color (#6F4CFF) */
    default: brandColor.purple500,
    /** For elements placed on top of flask/default (#FFFFFF) */
    inverse: brandColor.grey000,
  },
  shadow: {
    /** For neutral drop shadow color (#0000001A) */
    default: '#0000001A',
    /** For primary drop shadow color (#0376C933) */
    primary: '#0376C933',
    /** For critical/danger drop shadow color (#CA354266) */
    error: '#CA354266',
  },
};
