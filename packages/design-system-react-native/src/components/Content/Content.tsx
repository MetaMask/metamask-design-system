import {
  BoxAlignItems,
  BoxFlexDirection,
  ContentVariant,
  FontWeight,
  TextColor,
  TextVariant,
} from '@metamask/design-system-shared';
import React from 'react';

import { Box } from '../Box';
import { BoxColumn } from '../BoxColumn';
import { BoxRow } from '../BoxRow';
import { TextOrChildren } from '../temp-components/TextOrChildren';

import { getContentVariantLayout } from './Content.constants';
import type { ContentProps } from './Content.types';

export const Content: React.FC<ContentProps> = ({
  variant = ContentVariant.TwoLines,
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
  const layout = getContentVariantLayout(variant);

  const showDescription = layout.showDescription && Boolean(description);
  const showSubvalue = layout.showSubvalue && Boolean(subvalue);
  const secondaryRowAlignItems =
    variant === ContentVariant.MultiLine
      ? BoxAlignItems.Start
      : BoxAlignItems.Center;

  if (__DEV__) {
    if (!layout.showDescription && description) {
      console.warn(
        'Content: `description` is ignored when `variant` is `ContentVariant.OneLine`.',
      );
    }
    if (!layout.showSubvalue && subvalue) {
      console.warn(
        'Content: `subvalue` is ignored when `variant` is `ContentVariant.OneLine`.',
      );
    }
  }

  return (
    <Box
      flexDirection={BoxFlexDirection.Row}
      alignItems={layout.alignItems}
      gap={4}
      twClassName={twClassName}
      {...props}
    >
      {avatar}
      <BoxColumn
        twClassName="flex-1 min-w-0"
        bottomAccessory={
          showDescription ? (
            <BoxRow
              twClassName="w-full"
              alignItems={secondaryRowAlignItems}
              startAccessory={descriptionStartAccessory}
              endAccessory={descriptionEndAccessory}
              gap={1}
            >
              <BoxColumn twClassName="flex-1 min-w-0">
                <TextOrChildren
                  textProps={{
                    variant: TextVariant.BodySm,
                    fontWeight: FontWeight.Medium,
                    color: TextColor.TextAlternative,
                    ...descriptionProps,
                  }}
                >
                  {description}
                </TextOrChildren>
              </BoxColumn>
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
            <TextOrChildren
              textProps={{
                variant: TextVariant.BodyMd,
                fontWeight: FontWeight.Medium,
                color: TextColor.TextDefault,
                ...titleProps,
              }}
            >
              {title}
            </TextOrChildren>
          </BoxRow>
        ) : null}
      </BoxColumn>
      {value || showSubvalue ? (
        <BoxColumn
          alignItems={BoxAlignItems.End}
          twClassName="min-w-0"
          bottomAccessory={
            showSubvalue ? (
              <BoxRow
                alignItems={secondaryRowAlignItems}
                startAccessory={subvalueStartAccessory}
                endAccessory={subvalueEndAccessory}
                gap={1}
              >
                <BoxColumn twClassName="min-w-0">
                  <TextOrChildren
                    textProps={{
                      variant: TextVariant.BodySm,
                      fontWeight: FontWeight.Medium,
                      color: TextColor.TextAlternative,
                      ...subvalueProps,
                    }}
                  >
                    {subvalue}
                  </TextOrChildren>
                </BoxColumn>
              </BoxRow>
            ) : null
          }
        >
          {value ? (
            <BoxRow
              startAccessory={valueStartAccessory}
              endAccessory={valueEndAccessory}
              gap={1}
            >
              <TextOrChildren
                textProps={{
                  variant: TextVariant.BodyMd,
                  fontWeight: FontWeight.Medium,
                  color: TextColor.TextDefault,
                  ...valueProps,
                }}
              >
                {value}
              </TextOrChildren>
            </BoxRow>
          ) : null}
        </BoxColumn>
      ) : null}
    </Box>
  );
};

Content.displayName = 'Content';
