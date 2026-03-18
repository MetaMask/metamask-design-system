import type { SectionBaseProps } from '../SectionBase';
import type { ImageOrSvgSrc } from '../temp-components/ImageOrSvg';

/**
 * SectionSocial component props.
 */
export type SectionSocialProps = Omit<SectionBaseProps, 'title'> & {
  /**
   * Optional image source for the attribution avatar (16px, rounded).
   */
  attributionAvatar?: ImageOrSvgSrc;
  /**
   * Optional attribution name (e.g. @handle).
   */
  attributionName?: string;
  /**
   * Optional attribution timestamp (e.g. "1m ago").
   */
  attributionTimestamp?: string;
  /**
   * Optional image source for the end accessory (e.g. source logo, 16px).
   */
  source?: ImageOrSvgSrc;
};
