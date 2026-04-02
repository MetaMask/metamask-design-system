import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React from 'react';
import { View } from 'react-native';

import type { KeyValueRowRootProps } from '../KeyValueRow.types';

/**
 * The main container for the KeyValueRow component.
 * When creating custom KeyValueRow components, this must be the outermost component
 * wrapping the two <KeyValueSection/> components.
 *
 * e.g.
 * ```
 * <KeyValueRowRoot>
 *  <KeyValueSection></KeyValueSection>
 *  <KeyValueSection></KeyValueSection>
 * </KeyValueRowRoot>
 * ```
 *
 * @param props - Component props.
 * @param props.children - The two <KeyValueSection> children.
 * @param props.twClassName - Optional Tailwind class names to override root styles.
 * @param props.style - Optional additional styles for the root element.
 *
 * @returns The rendered Root component.
 */
export const KeyValueRowRoot: React.FC<KeyValueRowRootProps> = ({
  children,
  twClassName,
  style,
  ...props
}) => {
  const tw = useTailwind();

  return (
    <View
      style={[
        tw.style(
          'flex-row justify-between items-center overflow-hidden',
          twClassName,
        ),
        style,
      ]}
      {...props}
    >
      {children}
    </View>
  );
};
