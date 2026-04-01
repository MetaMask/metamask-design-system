import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React from 'react';
import { View } from 'react-native';

import { KeyValueRowSectionAlignments } from '../KeyValueRow.types';
import type { KeyValueSectionProps } from '../KeyValueRow.types';

/**
 * A container representing either the left or right side of the KeyValueRow.
 * For desired results, use only two <KeyValueSection> components within the <KeyValueRowRoot>.
 *
 * @param props - Component props.
 * @param props.children - The child components.
 * @param props.align - The alignment of the section.
 * @param props.twClassName - Optional Tailwind class names to override root styles.
 * @param props.style - Optional additional styles for the root element.
 *
 * @returns The rendered KeyValueSection component.
 */
const KeyValueSection: React.FC<KeyValueSectionProps> = ({
  children,
  align = KeyValueRowSectionAlignments.Left,
  twClassName,
  style,
  ...props
}) => {
  const tw = useTailwind();

  return (
    <View style={[tw.style('flex-1', align, twClassName), style]} {...props}>
      {children}
    </View>
  );
};

export { KeyValueSection };
