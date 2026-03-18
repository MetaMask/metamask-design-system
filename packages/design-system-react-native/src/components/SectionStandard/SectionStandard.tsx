import React from 'react';
import { Pressable } from 'react-native';

import { TextColor, TextVariant } from '../../types';
import { Icon, IconColor, IconName, IconSize } from '../Icon';
import { SectionBase } from '../SectionBase';
import { TextWithAccessories } from '../temp-components/TextWithAccessories';

import type { SectionStandardProps } from './SectionStandard.types';

const hasContent = (content: React.ReactNode) =>
  content !== null && content !== undefined;

export const SectionStandard = ({
  title,
  titleStartAccessory,
  titleProps,
  onPressTitle,
  ...sectionBaseProps
}: SectionStandardProps) => {
  let computedTitle: React.ReactNode = undefined;

  if (hasContent(title)) {
    const titleContent = (
      <TextWithAccessories
        textProps={{
          variant: TextVariant.HeadingLg,
          color: TextColor.TextDefault,
          ...titleProps,
        }}
        startAccessory={titleStartAccessory}
        endAccessory={
          onPressTitle ? (
            <Icon
              name={IconName.ArrowRight}
              size={IconSize.Md}
              color={IconColor.IconAlternative}
              testID="section-standard-title-arrow"
            />
          ) : undefined
        }
      >
        {title}
      </TextWithAccessories>
    );

    computedTitle = onPressTitle ? (
      <Pressable onPress={onPressTitle}>{titleContent}</Pressable>
    ) : (
      titleContent
    );
  }

  return <SectionBase {...sectionBaseProps} title={computedTitle} />;
};

SectionStandard.displayName = 'SectionStandard';
