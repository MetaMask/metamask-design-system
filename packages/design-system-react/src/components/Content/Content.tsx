import {
  BoxAlignItems,
  BoxFlexDirection,
  ContentVariant,
  FontWeight,
  TextColor,
  TextVariant,
} from '@metamask/design-system-shared';
import React, { forwardRef } from 'react';
import type { ReactNode } from 'react';

import { twMerge } from '../../utils/tw-merge';
import { Box } from '../Box';
import { SensitiveText } from '../SensitiveText';
import { Text } from '../Text';

import type { ContentProps } from './Content.types';

type TextSlotProps = Partial<
  Omit<React.ComponentProps<typeof Text>, 'children'>
>;
type SensitiveTextSlotProps = Partial<
  Omit<React.ComponentProps<typeof SensitiveText>, 'children'>
>;

const renderText = (
  content: ReactNode,
  defaults: TextSlotProps,
  textProps?: TextSlotProps,
): ReactNode => {
  if (typeof content === 'string') {
    return (
      <Text {...defaults} {...textProps}>
        {content}
      </Text>
    );
  }
  return content;
};

const renderSensitiveText = (
  content: ReactNode,
  defaults: SensitiveTextSlotProps,
  textProps?: SensitiveTextSlotProps,
): ReactNode => {
  if (typeof content === 'string') {
    return (
      <SensitiveText {...defaults} {...textProps}>
        {content}
      </SensitiveText>
    );
  }
  return content;
};

const TextRow = ({
  startAccessory,
  endAccessory,
  alignItems = BoxAlignItems.Center,
  className,
  children,
}: {
  startAccessory?: ReactNode;
  endAccessory?: ReactNode;
  alignItems?: BoxAlignItems;
  /** Title/description rows use `w-full`; value/subvalue omit it so the right column can end-align. */
  className?: string;
  children: ReactNode;
}) => (
  <Box
    flexDirection={BoxFlexDirection.Row}
    alignItems={alignItems}
    gap={1}
    className={twMerge('min-w-0', className)}
  >
    {startAccessory}
    {children}
    {endAccessory}
  </Box>
);

export const Content = forwardRef<HTMLDivElement, ContentProps>(
  (
    {
      variant = ContentVariant.TwoLines,
      avatar,
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
    },
    ref,
  ) => {
    const isOneLine = variant === ContentVariant.OneLine;
    const isMultiLine = variant === ContentVariant.MultiLine;
    const showDescription = !isOneLine && Boolean(description);
    const showSubvalue = !isOneLine && Boolean(subvalue);
    const alignItems = isMultiLine ? BoxAlignItems.Start : BoxAlignItems.Center;

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

    const titleRow = title ? (
      <TextRow
        className="w-full"
        startAccessory={titleStartAccessory}
        endAccessory={titleEndAccessory}
      >
        {renderText(
          title,
          {
            variant: TextVariant.BodyMd,
            fontWeight: FontWeight.Medium,
            color: TextColor.TextDefault,
          },
          titleProps,
        )}
      </TextRow>
    ) : null;

    const descriptionRow = showDescription ? (
      <TextRow
        className="w-full"
        startAccessory={descriptionStartAccessory}
        endAccessory={descriptionEndAccessory}
        alignItems={alignItems}
      >
        <Box className="min-w-0">
          {renderSensitiveText(
            description,
            {
              variant: TextVariant.BodySm,
              fontWeight: FontWeight.Medium,
              color: TextColor.TextAlternative,
            },
            descriptionProps,
          )}
        </Box>
      </TextRow>
    ) : null;

    const valueRow = value ? (
      <TextRow
        startAccessory={valueStartAccessory}
        endAccessory={valueEndAccessory}
      >
        {renderSensitiveText(
          value,
          {
            variant: TextVariant.BodyMd,
            fontWeight: FontWeight.Medium,
            color: TextColor.TextDefault,
          },
          valueProps,
        )}
      </TextRow>
    ) : null;

    const subvalueRow = showSubvalue ? (
      <TextRow
        startAccessory={subvalueStartAccessory}
        endAccessory={subvalueEndAccessory}
        alignItems={alignItems}
      >
        <Box className="min-w-0">
          {renderSensitiveText(
            subvalue,
            {
              variant: TextVariant.BodySm,
              fontWeight: FontWeight.Medium,
              color: TextColor.TextAlternative,
            },
            subvalueProps,
          )}
        </Box>
      </TextRow>
    ) : null;

    const rightColumn =
      value || showSubvalue ? (
        <Box
          flexDirection={BoxFlexDirection.Column}
          alignItems={BoxAlignItems.End}
          className="min-w-0"
        >
          {valueRow}
          {subvalueRow}
        </Box>
      ) : null;

    return (
      <Box
        ref={ref}
        flexDirection={BoxFlexDirection.Row}
        alignItems={alignItems}
        gap={4}
        className={twMerge('min-w-0', className)}
        {...props}
      >
        {avatar}
        <Box flexDirection={BoxFlexDirection.Column} className="min-w-0 flex-1">
          {titleRow}
          {descriptionRow}
        </Box>
        {rightColumn}
      </Box>
    );
  },
);

Content.displayName = 'Content';
