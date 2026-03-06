import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React from 'react';
import { View } from 'react-native';

import { Icon } from '../Icon';
import type { IconProps } from '../Icon';

import KeyValueRowLabel from './KeyValueLabel/KeyValueLabel';
import KeyValueRowRoot from './KeyValueRoot/KeyValueRoot';
import {
  TESTID_KEYVALUEROW_FIELD_ICON,
  TESTID_KEYVALUEROW_VALUE_ICON,
} from './KeyValueRow.constants';
import type { KeyValueRowProps } from './KeyValueRow.types';
import {
  KeyValueRowFieldIconSides,
  KeyValueRowSectionAlignments,
} from './KeyValueRow.types';
import KeyValueSection from './KeyValueSection/KeyValueSection';

type IconWithSide = IconProps & { side?: KeyValueRowFieldIconSides };

const renderIcon = (icon: IconWithSide, testID: string) => {
  const { side: _side, ...iconProps } = icon;
  return <Icon testID={testID} {...iconProps} />;
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
const KeyValueRow: React.FC<KeyValueRowProps> = ({
  field,
  value,
  twClassName,
  style,
  ...props
}) => {
  const tw = useTailwind();

  const fieldIcon = field?.icon;
  const shouldShowFieldIcon = Boolean(fieldIcon?.name);

  const valueIcon = value?.icon;
  const shouldShowValueIcon = Boolean(valueIcon?.name);

  return (
    <KeyValueRowRoot twClassName={twClassName} style={style} {...props}>
      <KeyValueSection>
        <View style={tw.style('flex-row items-center gap-2')}>
          {shouldShowFieldIcon &&
            (fieldIcon.side === KeyValueRowFieldIconSides.Left ||
              fieldIcon.side === KeyValueRowFieldIconSides.Both ||
              !fieldIcon?.side) &&
            renderIcon(fieldIcon, TESTID_KEYVALUEROW_FIELD_ICON)}
          <KeyValueRowLabel label={field.label} tooltip={field.tooltip} />
          {shouldShowFieldIcon &&
            (fieldIcon?.side === KeyValueRowFieldIconSides.Right ||
              fieldIcon?.side === KeyValueRowFieldIconSides.Both) &&
            renderIcon(fieldIcon, TESTID_KEYVALUEROW_FIELD_ICON)}
        </View>
      </KeyValueSection>
      <KeyValueSection align={KeyValueRowSectionAlignments.Right}>
        <View style={tw.style('flex-row items-center gap-2')}>
          {shouldShowValueIcon &&
            (valueIcon?.side === KeyValueRowFieldIconSides.Left ||
              valueIcon?.side === KeyValueRowFieldIconSides.Both ||
              !valueIcon?.side) &&
            renderIcon(valueIcon, TESTID_KEYVALUEROW_VALUE_ICON)}
          <KeyValueRowLabel label={value.label} tooltip={value.tooltip} />
          {shouldShowValueIcon &&
            (valueIcon?.side === KeyValueRowFieldIconSides.Right ||
              valueIcon?.side === KeyValueRowFieldIconSides.Both) &&
            renderIcon(valueIcon, TESTID_KEYVALUEROW_VALUE_ICON)}
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

export default KeyValueRow;
