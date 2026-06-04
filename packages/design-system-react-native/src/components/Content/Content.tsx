import {
  ContentVerticalAlignment,
  FontWeight,
  TextColor,
  TextVariant,
} from '@metamask/design-system-shared';
import React from 'react';

import { BoxColumn } from '../BoxColumn';
import { BoxRow } from '../BoxRow';
import { renderTextOrChildren } from '../utils';

import { VERTICAL_ALIGNMENT_MAP } from './Content.constants';
import type { ContentProps } from './Content.types';

export const Content: React.FC<ContentProps> = ({
  startAccessory,
  endAccessory,
  topAccessory,
  bottomAccessory,
  verticalAlignment = ContentVerticalAlignment.Center,
  avatar,
  twClassName,
  title,
  titleProps,
  titleStartAccessory,
  titleEndAccessory,
  description,
  descriptionProps,
  descriptionStartAccessory,
  descriptionEndAccessory,
  value,
  valueProps,
  valueStartAccessory,
  valueEndAccessory,
  subvalue,
  subvalueProps,
  subvalueStartAccessory,
  subvalueEndAccessory,
  ...props
}) => {
  const hasColumnShell = Boolean(topAccessory) || Boolean(bottomAccessory);

  const contentRow = (
    <BoxRow
      startAccessory={startAccessory}
      endAccessory={endAccessory}
      alignItems={VERTICAL_ALIGNMENT_MAP[verticalAlignment]}
      gap={4}
      twClassName={`min-h-[46px] ${hasColumnShell ? 'min-w-0' : (twClassName ?? '')}`.trim()}
      {...(hasColumnShell ? {} : props)}
    >
      {avatar}
      {/* Title and description Column */}
      <BoxColumn
        twClassName="flex-1 min-w-0"
        bottomAccessory={
          description ? (
            <BoxRow
              twClassName="w-full"
              startAccessory={descriptionStartAccessory}
              endAccessory={descriptionEndAccessory}
              gap={1}
            >
              {renderTextOrChildren(description, {
                variant: TextVariant.BodySm,
                fontWeight: FontWeight.Medium,
                color: TextColor.TextAlternative,
                ...descriptionProps,
              })}
            </BoxRow>
          ) : null
        }
      >
        {title ? (
          <BoxRow
            twClassName="w-full"
            startAccessory={titleStartAccessory}
            endAccessory={titleEndAccessory}
            gap={1}
          >
            {renderTextOrChildren(title, {
              variant: TextVariant.BodyMd,
              fontWeight: FontWeight.Medium,
              color: TextColor.TextDefault,
              ...titleProps,
            })}
          </BoxRow>
        ) : null}
      </BoxColumn>
      {/* Value and subvalue Column */}
      {value || subvalue ? (
        <BoxColumn
          twClassName="min-w-0"
          bottomAccessory={
            subvalue ? (
              <BoxRow
                twClassName="w-full"
                startAccessory={subvalueStartAccessory}
                endAccessory={subvalueEndAccessory}
                gap={1}
              >
                {renderTextOrChildren(subvalue, {
                  variant: TextVariant.BodySm,
                  fontWeight: FontWeight.Medium,
                  color: TextColor.TextAlternative,
                  ...subvalueProps,
                })}
              </BoxRow>
            ) : null
          }
        >
          {value ? (
            <BoxRow
              twClassName="w-full"
              startAccessory={valueStartAccessory}
              endAccessory={valueEndAccessory}
              gap={1}
            >
              {renderTextOrChildren(value, {
                variant: TextVariant.BodyMd,
                fontWeight: FontWeight.Medium,
                color: TextColor.TextDefault,
                ...valueProps,
              })}
            </BoxRow>
          ) : null}
        </BoxColumn>
      ) : null}
    </BoxRow>
  );

  if (hasColumnShell) {
    return (
      <BoxColumn
        gap={1}
        topAccessory={topAccessory}
        bottomAccessory={bottomAccessory}
        twClassName={twClassName}
        {...props}
      >
        {contentRow}
      </BoxColumn>
    );
  }

  return contentRow;
};

Content.displayName = 'Content';
