import React from 'react';

export type ComponentNameProps = {
  /**
   * The content to be rendered within the ComponentName.
   */
  children?: React.ReactNode;
  /**
   * Additional CSS classes to be applied to the ComponentName component.
   */
  className?: string;
  /**
   * Inline styles to be applied to the ComponentName component.
   */
  style?: React.CSSProperties;
};
