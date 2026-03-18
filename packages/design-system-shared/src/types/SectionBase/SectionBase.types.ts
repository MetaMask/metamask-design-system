import type { ReactNode } from 'react';

/**
 * SectionBase component shared props (ADR-0004)
 * Platform-independent content and structure shared across React and React Native.
 */
export type SectionBasePropsShared = {
  /**
   * Optional title (string or node) rendered at the top of the section.
   */
  title?: ReactNode;
  /**
   * Optional node rendered before the title (e.g. icon).
   */
  titleStartAccessory?: ReactNode;
  /**
   * Optional node rendered after the title (e.g. badge, icon).
   */
  titleEndAccessory?: ReactNode;
  /**
   * Optional description (string or node) rendered below the title.
   */
  description?: ReactNode;
  /**
   * Optional children rendered below the description.
   */
  children?: ReactNode;
};
