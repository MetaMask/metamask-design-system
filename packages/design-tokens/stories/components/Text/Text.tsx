import React from 'react';
import { fontFamilies } from '../../../src/js/typography/fontFamilies';

interface Props<C extends React.ElementType> {
  /**
   * The children or content of the Text component
   */
  children?: React.ReactNode;
  /**
   * Polymorphic prop to change the html root element of the component
   */
  as?: string;
  /**
   * The style prop of the Text component
   */
  style?: object;
  /**
   * The color prop of the Text component
   */
  color?: string;
}

type TextProps<C extends React.ElementType> = Props<C> &
  Omit<React.ComponentPropsWithoutRef<C>, keyof Props<C>>;

export const Text = <C extends React.ElementType = 'span'>({
  style,
  children,
  as,
  color,
}: TextProps<C>) => {
  const Component = as || 'span';
  return (
    <Component
      style={{
        fontFamily: fontFamilies.euclidCircularB,
        color: 'var(--color-text-default)',
        ...style,
      }}
    >
      {children}
    </Component>
  );
};
