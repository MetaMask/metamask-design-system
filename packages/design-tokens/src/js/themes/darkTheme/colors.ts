import { brandColor } from '../../brandColor';
import type { ThemeColors } from '../types';

export const colors: ThemeColors = {
  background: {
    /** For default neutral surface (#24272A) */
    default: brandColor.grey900,
    /** For sunken neutral surface below background/default (#141618) */
    alternative: brandColor.grey1000,
    /** For raised neutral surface above background/default (#2A2D31) */
    muted: brandColor.grey800,
    /** Hover state surface for background/default (#1E2124) */
    defaultHover: '#1E2124',
    /** Pressed state surface for background/default (#272B2F) */
    defaultPressed: '#272B2F',
    /** Hover state surface for background/alternative (#0A0A0A) */
    alternativeHover: '#0A0A0A',
    /** Pressed state surface for background/alternative (#141414) */
    alternativePressed: '#141414',
    /** Hover state surface for background/muted (#2D3034) */
    mutedHover: '#2D3034',
    /** Pressed state surface for background/muted (#363B3F) */
    mutedPressed: '#363B3F',
    /** General purpose hover state tint (#FFFFFF0A) */
    hover: '#FFFFFF0A',
    /** General purpose pressed state tint (#FFFFFF14) */
    pressed: '#FFFFFF14',
  },
  text: {
    /** Default color for text (#FFFFFF) */
    default: brandColor.grey000,
    /** Softer color for text (#BBC0C5) */
    alternative: brandColor.grey300,
    /** Muted color for text (Not accessible) (#848C96) */
    muted: brandColor.grey500,
  },
  icon: {
    /** Default color for icons (#FFFFFF) */
    default: brandColor.grey000,
    /** Softer color for icons (#BBC0C5) */
    alternative: brandColor.grey300,
    /** Muted color for icons (Not accessible) (#848C96) */
    muted: brandColor.grey500,
  },
  border: {
    /** Default color for borders (#848C96) */
    default: brandColor.grey500,
    /** Muted color for borders (#848C9629) */
    muted: '#848C9629',
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
    /** For primary semantic elements: interactive, active, selected... (#43AEFC) */
    default: brandColor.blue300,
    /** Stronger color for primary semantic elements (#75C6FD) */
    alternative: brandColor.blue200,
    /** Muted color for primary semantic elements (#43AEFC26) */
    muted: '#43AEFC26',
    /** For elements placed on top of primary/default fill (#24272A) */
    inverse: brandColor.grey900,
    /** Hover state surface for primary/default (#26A2FC) */
    defaultHover: '#26A2FC',
    /** Pressed state surface for primary/default (#3BAAFD) */
    defaultPressed: '#3BAAFD',
    /** Hover state surface for primary/muted (#43aefc33) */
    mutedHover: '#43aefc33',
    /** Pressed state surface for primary/muted (#43aefc40) */
    mutedPressed: '#43aefc40',
  },
  error: {
    /** For danger semantic elements: error, critical, destructive... (#E88F97) */
    default: brandColor.red300,
    /** Stronger color for danger semantic (#F5B6BC) */
    alternative: brandColor.red200,
    /** Muted color for danger semantic (#E88F9726) */
    muted: '#E88F9726',
    /** For elements placed on top of error/default fill (#24272A) */
    inverse: brandColor.grey900,
    /** Hover state surface for error/default (#E47782) */
    defaultHover: '#E47782',
    /** Pressed state surface for error/default (#E78891) */
    defaultPressed: '#E78891',
    /** Hover state surface for error/muted (#e88f9733) */
    mutedHover: '#e88f9733',
    /** Pressed state surface for error/muted (#e88f9740) */
    mutedPressed: '#e88f9740',
  },
  warning: {
    /** For warning semantic elements: caution, attention, precaution... (#FFD33D) */
    default: brandColor.yellow100,
    /** Muted color option for warning semantic (#FFDF7026) */
    muted: '#FFDF7026',
    /** For elements placed on top of warning/default fill (#24272A) */
    inverse: brandColor.grey900,
    /** Hover state surface for warning/default (#FFE485) */
    defaultHover: '#FFE485',
    /** Pressed state surface for warning/default (#FFE899) */
    defaultPressed: '#FFE899',
    /** Hover state surface for warning/muted (#ffdf7033) */
    mutedHover: '#ffdf7033',
    /** Pressed state surface for warning/muted (#ffdf7040) */
    mutedPressed: '#ffdf7040',
  },
  success: {
    /** For positive semantic elements: success, confirm, complete, safe... (#28A745) */
    default: brandColor.green300,
    /** Muted color for positive semantic (#28A74526) */
    muted: '#28A74526',
    /** For elements placed on top of success/default fill (#24272A) */
    inverse: brandColor.grey900,
    /** Hover state surface for success/default (#2CB94C) */
    defaultHover: '#2CB94C',
    /** Pressed state surface for success/default (#30CA53) */
    defaultPressed: '#30CA53',
    /** Hover state surface for success/muted (#28a74533) */
    mutedHover: '#28a74533',
    /** Pressed state surface for success/muted (#28a74540) */
    mutedPressed: '#28a74540',
  },
  info: {
    /** For soft alert semantic elements: info, reminder, hint... (#43AEFC) */
    default: brandColor.blue300,
    /** Muted color for soft alert semantic (#43AEFC26) */
    muted: '#43AEFC26',
    /** For elements placed on top of info/default fill (#24272A) */
    inverse: brandColor.grey900,
  },
  flask: {
    /** For Flask primary accent color (#8B45F5) */
    default: brandColor.purple300,
    /** For elements placed on top of flask/default (#24272A) */
    inverse: brandColor.grey900,
  },
  shadow: {
    /** For neutral drop shadow color (#00000066) */
    default: '#00000066',
    /** For primary drop shadow color (#43AEFC33) */
    primary: '#43AEFC33',
    /** For critical/danger drop shadow color (#FF758466) */
    error: '#FF758466',
  },
};
