import React from 'react';

import { AvatarBaseSize, AvatarBaseShape, TextColor } from '../../types';
import { Attribution } from '../Attribution';
import { AvatarBase } from '../AvatarBase';
import { SectionBase } from '../SectionBase';
import { ImageOrSvg } from '../temp-components/ImageOrSvg';

import type { SectionSocialProps } from './SectionSocial.types';

const DEFAULT_TW_CLASS_NAME = 'bg-section p-4 rounded-2xl';

const hasContent = (content: React.ReactNode) =>
  content !== null && content !== undefined;

const hasStringContent = (s: string | undefined) => s != null && s.length > 0;

export const SectionSocial = ({
  attributionAvatar,
  attributionName,
  attributionTimestamp,
  source,
  description,
  descriptionProps,
  children,
  twClassName,
  ...sectionBaseProps
}: SectionSocialProps) => {
  const hasAttribution =
    attributionAvatar != null ||
    hasStringContent(attributionName) ||
    hasStringContent(attributionTimestamp) ||
    source != null;

  let attributionChildren: string | undefined;
  if (
    hasStringContent(attributionName) &&
    hasStringContent(attributionTimestamp)
  ) {
    attributionChildren = `${attributionName} • ${attributionTimestamp}`;
  } else if (hasStringContent(attributionName)) {
    attributionChildren = attributionName;
  } else if (hasStringContent(attributionTimestamp)) {
    attributionChildren = attributionTimestamp;
  }

  const attributionNode = hasAttribution ? (
    <Attribution
      startAccessory={
        attributionAvatar != null ? (
          <AvatarBase
            size={AvatarBaseSize.Xs}
            shape={AvatarBaseShape.Circle}
            testID="section-social-attribution-avatar"
          >
            <ImageOrSvg src={attributionAvatar} width={16} height={16} />
          </AvatarBase>
        ) : undefined
      }
      endAccessory={
        source != null ? (
          <ImageOrSvg src={source} width={16} height={16} />
        ) : undefined
      }
    >
      {attributionChildren}
    </Attribution>
  ) : null;

  const mergedTwClassName =
    `${DEFAULT_TW_CLASS_NAME} ${twClassName ?? ''}`.trim();
  const resolvedDescriptionProps = hasContent(description)
    ? { color: TextColor.TextDefault, ...descriptionProps }
    : descriptionProps;

  return (
    <SectionBase
      {...sectionBaseProps}
      description={description}
      descriptionProps={resolvedDescriptionProps}
      twClassName={mergedTwClassName}
    >
      {attributionNode}
      {children}
    </SectionBase>
  );
};

SectionSocial.displayName = 'SectionSocial';
