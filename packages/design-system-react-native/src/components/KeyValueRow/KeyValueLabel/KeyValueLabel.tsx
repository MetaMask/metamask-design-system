import { useTailwind } from '@metamask/design-system-twrnc-preset';
import React from 'react';
import { View } from 'react-native';

import { ButtonIcon, ButtonIconSize } from '../../ButtonIcon';
import { IconName } from '../../Icon';
import { Text, TextColor, TextVariant } from '../../Text';
import type { KeyValueRowLabelProps } from '../KeyValueRow.types';
import { isPreDefinedKeyValueRowLabel } from '../KeyValueRow.utils';

/**
 * A label and optional tooltip button component.
 *
 * @param props - Component props.
 * @param props.label - The label content to display.
 * @param props.tooltip - Optional tooltip to render to the right of the label.
 *
 * @returns The rendered KeyValueRowLabel component.
 */
const KeyValueRowLabel: React.FC<KeyValueRowLabelProps> = ({
  label,
  tooltip,
}) => {
  const tw = useTailwind();

  const hasTooltip = Boolean(tooltip?.title && tooltip?.content);

  return (
    <View style={tw.style('flex-row items-center')}>
      {isPreDefinedKeyValueRowLabel(label) ? (
        <Text
          variant={label.variant ?? TextVariant.BodyMd}
          color={label.color ?? TextColor.TextDefault}
        >
          {label.text}
        </Text>
      ) : (
        label
      )}
      {hasTooltip && tooltip && (
        <ButtonIcon
          size={tooltip.size ?? ButtonIconSize.Md}
          iconName={tooltip.iconName ?? IconName.Question}
          accessibilityLabel={`${tooltip.title} tooltip`}
          onPress={() => tooltip?.onPress?.()}
        />
      )}
    </View>
  );
};

export default KeyValueRowLabel;
