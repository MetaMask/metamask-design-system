import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React from 'react';
import { View } from 'react-native';

import { Icon } from '../Icon';
import type { IconProps } from '../Icon';

import { KeyValueRowLabel } from './KeyValueLabel/KeyValueLabel';
import { KeyValueRowRoot } from './KeyValueRoot/KeyValueRoot';
import type { KeyValueRowProps } from './KeyValueRow.types';
import {
  KeyValueRowFieldIconSides,
  KeyValueRowSectionAlignments,
} from './KeyValueRow.types';
import { KeyValueSection } from './KeyValueSection/KeyValueSection';

type IconWithSide = IconProps & { side?: KeyValueRowFieldIconSides };

const renderIcon = (icon: IconWithSide) => {
  const { side: _side, ...iconProps } = icon;
  return <Icon {...iconProps} />;
};

/**
 * Prebuilt convenience component to format and render a key/value label pair.
 * The KeyValueRowLabel component has props to display a tooltip and icon.
 *
 * @param props - Component props
 * @param props.field - Represents the left side of the key value row pair
 * @param props.value - Represents the right side of the key value row pair
 * @param props.twClassName - Optional Tailwind class names for the root element
 * @param props.style - Optional additional styles for the root element
 *
 * @returns The rendered KeyValueRow component.
 */
export const KeyValueRow: React.FC<KeyValueRowProps> = ({
  field,
  value,
  twClassName,
  style,
  ...props
}) => {
  const tw = useTailwind();

  const fieldIcon = field?.icon;
  const valueIcon = value?.icon;

  return (
    <KeyValueRowRoot twClassName={twClassName} style={style} {...props}>
      <KeyValueSection>
        <View style={tw.style('flex-row items-center gap-2')}>
          {fieldIcon?.name &&
            (fieldIcon.side === KeyValueRowFieldIconSides.Left ||
              fieldIcon.side === KeyValueRowFieldIconSides.Both ||
              !fieldIcon.side) &&
            renderIcon(fieldIcon)}
          <KeyValueRowLabel label={field.label} tooltip={field.tooltip} />
          {fieldIcon?.name &&
            (fieldIcon.side === KeyValueRowFieldIconSides.Right ||
              fieldIcon.side === KeyValueRowFieldIconSides.Both) &&
            renderIcon(fieldIcon)}
        </View>
      </KeyValueSection>
      <KeyValueSection align={KeyValueRowSectionAlignments.Right}>
        <View style={tw.style('flex-row items-center gap-2')}>
          {valueIcon?.name &&
            (valueIcon.side === KeyValueRowFieldIconSides.Left ||
              valueIcon.side === KeyValueRowFieldIconSides.Both ||
              !valueIcon.side) &&
            renderIcon(valueIcon)}
          <KeyValueRowLabel label={value.label} tooltip={value.tooltip} />
          {valueIcon?.name &&
            (valueIcon.side === KeyValueRowFieldIconSides.Right ||
              valueIcon.side === KeyValueRowFieldIconSides.Both) &&
            renderIcon(valueIcon)}
        </View>
      </KeyValueSection>
    </KeyValueRowRoot>
  );
};

KeyValueRow.displayName = 'KeyValueRow';

/**
 * Exported sub-components to provide a base for new KeyValueRow variants.
 */
export const KeyValueRowStubs = {
  Root: KeyValueRowRoot,
  Section: KeyValueSection,
  Label: KeyValueRowLabel,
};
