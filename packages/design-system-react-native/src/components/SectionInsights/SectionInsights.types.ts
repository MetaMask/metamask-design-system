import type { AvatarGroupProps } from '../AvatarGroup';
import type { SectionBaseProps } from '../SectionBase';
import type { TextProps } from '../Text';
import type { AvatarGroupSize, AvatarGroupVariant } from '../../types';

/**
 * Favicon-only AvatarGroup props for attribution (size forced to 16px by SectionInsights).
 */
export type SectionInsightsAttributionFaviconAvatarGroupProps = Omit<
  AvatarGroupProps,
  'variant' | 'size'
> & {
  variant: AvatarGroupVariant.Favicon;
  size?: AvatarGroupSize;
};

/**
 * SectionInsights component props.
 */
export type SectionInsightsProps = SectionBaseProps & {
  /**
   * Optional props for the favicon AvatarGroup rendered as Attribution's startAccessory.
   * Size is forced to 16px (AvatarGroupSize.Xs) by the component.
   */
  attributionFaviconAvatarGroupProps?: SectionInsightsAttributionFaviconAvatarGroupProps;
  /**
   * Optional attribution text or node rendered in an Attribution row (below description).
   */
  attribution?: string | React.ReactNode;
  /**
   * Optional node rendered before the title (e.g. icon).
   */
  titleStartAccessory?: React.ReactNode;
  /**
   * Optional props for the title when title is a string.
   * Default: TextVariant.HeadingSm, TextColor.TextDefault.
   */
  titleProps?: Partial<Omit<TextProps, 'children'>>;
};
