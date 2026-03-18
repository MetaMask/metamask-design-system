import React from 'react';

import { AvatarGroupSize, TextColor, TextVariant } from '../../types';
import { Attribution } from '../Attribution';
import { AvatarGroup } from '../AvatarGroup';
import { SectionBase } from '../SectionBase';
import { TextWithAccessories } from '../temp-components/TextWithAccessories';

import type { SectionInsightsProps } from './SectionInsights.types';

const hasContent = (content: React.ReactNode) =>
  content !== null && content !== undefined;

export const SectionInsights = ({
  title,
  titleStartAccessory,
  titleProps,
  attribution,
  attributionFaviconAvatarGroupProps,
  children,
  ...sectionBaseProps
}: SectionInsightsProps) => {
  let computedTitle: React.ReactNode = undefined;

  if (hasContent(title)) {
    computedTitle = (
      <TextWithAccessories
        textProps={{
          variant: TextVariant.HeadingSm,
          color: TextColor.TextDefault,
          ...titleProps,
        }}
        startAccessory={titleStartAccessory}
      >
        {title}
      </TextWithAccessories>
    );
  }

  const hasAttribution =
    hasContent(attribution) || attributionFaviconAvatarGroupProps != null;
  const attributionNode = hasAttribution ? (
    <Attribution
      startAccessory={
        attributionFaviconAvatarGroupProps ? (
          <AvatarGroup
            {...attributionFaviconAvatarGroupProps}
            size={AvatarGroupSize.Xs}
          />
        ) : undefined
      }
    >
      {attribution}
    </Attribution>
  ) : null;

  return (
    <SectionBase {...sectionBaseProps} title={computedTitle}>
      {attributionNode}
      {children}
    </SectionBase>
  );
};

SectionInsights.displayName = 'SectionInsights';
