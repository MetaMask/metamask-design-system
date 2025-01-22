import type { TextProps } from '../../components/Text/Text.types';

/**
 * TextOrChildren component props.
 */
export type TextOrChildrenProps = {
  /**
   * Required prop for the content to be rendered
   */
  children: React.ReactNode | string;
  /**
   * Optional props to be passed to the Text component when children is a string
   */
  textProps?: Omit<Partial<TextProps>, 'children'>;
};
