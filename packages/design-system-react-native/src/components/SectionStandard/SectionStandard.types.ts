import type { SectionBaseProps } from '../SectionBase';
import type { TextProps } from '../Text';

/**
 * SectionStandard component props.
 */
export type SectionStandardProps = SectionBaseProps & {
  /**
   * Optional node rendered before the title (e.g. icon).
   */
  titleStartAccessory?: React.ReactNode;
  /**
   * Optional props for the title when title is a string.
   * Default: TextVariant.HeadingLg, TextColor.TextDefault.
   */
  titleProps?: Partial<Omit<TextProps, 'children'>>;
  /**
   * Optional callback when the title row is pressed. When provided, the title is wrapped in a Pressable and an arrow icon is shown as end accessory.
   */
  onPressTitle?: () => void;
};
