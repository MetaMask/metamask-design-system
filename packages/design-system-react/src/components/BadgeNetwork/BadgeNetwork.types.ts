import type { AvatarNetworkProps } from '../AvatarNetwork';

export type BadgeNetworkProps = Omit<AvatarNetworkProps, 'size' | 'shape'> & {
  /**
   * Optional name of the network
   * Used as alt text for image and first letter is used as fallback if no fallbackText provided
   */
  name?: string;
  /**
   * Optional URL for the network image
   * When provided, displays the image instead of fallback text
   */
  src?: string;
  /**
   * Optional text to display when the image fails to load
   */
  fallbackText?: string;
};
