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
import { TextOrChildren } from '../temp-components/TextOrChildren';

import type { ContentProps } from './Content.types';

export const Content: React.FC<ContentProps> = ({
  variant = ContentVariant.TwoLines,
  avatar,
  twClassName,
  className,
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
  const isOneLine = variant === ContentVariant.OneLine;
  const isMultiLine = variant === ContentVariant.MultiLine;
  const showDescription = !isOneLine && description;
  const showSubvalue = !isOneLine && subvalue;
  const alignItems = isMultiLine ? BoxAlignItems.Start : BoxAlignItems.Center;

  if (__DEV__) {
    if (isOneLine && description) {
      console.warn(
        'Content: `description` is ignored when `variant` is `ContentVariant.OneLine`.',
      );
    }
    if (isOneLine && subvalue) {
      console.warn(
        'Content: `subvalue` is ignored when `variant` is `ContentVariant.OneLine`.',
      );
    }
  }

  return (
    <Box
      flexDirection={BoxFlexDirection.Row}
      alignItems={alignItems}
      gap={4}
      twClassName={twClassName}
      className={className}
      {...props}
    >
      {avatar}
      <Box flexDirection={BoxFlexDirection.Column} twClassName="flex-1 min-w-0">
        {title ? (
          <Box
            flexDirection={BoxFlexDirection.Row}
            alignItems={BoxAlignItems.Center}
            gap={1}
            twClassName="w-full"
          >
            {titleStartAccessory}
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
            {titleEndAccessory}
          </Box>
        ) : null}
        {showDescription ? (
          <Box
            flexDirection={BoxFlexDirection.Row}
            alignItems={alignItems}
            gap={1}
            twClassName="w-full"
          >
            {descriptionStartAccessory}
            <Box flexDirection={BoxFlexDirection.Column} twClassName="min-w-0">
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
            </Box>
            {descriptionEndAccessory}
          </Box>
        ) : null}
      </Box>
      {value || showSubvalue ? (
        <Box
          flexDirection={BoxFlexDirection.Column}
          alignItems={BoxAlignItems.End}
          twClassName="min-w-0"
        >
          {value ? (
            <Box
              flexDirection={BoxFlexDirection.Row}
              alignItems={BoxAlignItems.Center}
              gap={1}
            >
              {valueStartAccessory}
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
              {valueEndAccessory}
            </Box>
          ) : null}
          {showSubvalue ? (
            <Box
              flexDirection={BoxFlexDirection.Row}
              alignItems={alignItems}
              gap={1}
            >
              {subvalueStartAccessory}
              <Box
                flexDirection={BoxFlexDirection.Column}
                twClassName="min-w-0"
              >
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
              </Box>
              {subvalueEndAccessory}
            </Box>
          ) : null}
        </Box>
      ) : null}
    </Box>
  );
};

Content.displayName = 'Content';
