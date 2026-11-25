import {
  BoxAlignItems,
  BoxFlexDirection,
  FontWeight,
  SensitiveTextLength,
  TextColor,
  TextVariant,
} from '@metamask/design-system-shared';
import React, { forwardRef } from 'react';
import type { ReactNode } from 'react';

import { twMerge } from '../../utils/tw-merge';
import { Box } from '../Box';
import { SensitiveText } from '../SensitiveText';
import type { SensitiveTextProps } from '../SensitiveText';

import type { TitleSubpageProps } from './TitleSubpage.types';

type TextSlotProps = Partial<
  Omit<React.ComponentProps<typeof SensitiveText>, 'children' | 'asChild'>
>;

const isValidLength = (value: string): boolean => {
  const num = Number(value);
  return !Number.isNaN(num) && num > 0;
};

/**
 * Bullet fallback for a masked string slot, mirroring `SensitiveText`.
 * `renderAmount` needs it before its `p` slot element: Radix `Slot` renders
 * nothing for a non-element child, so `SensitiveText`'s own `isHidden`
 * fallback cannot flow through `asChild`.
 *
 * @param length - Optional masked length; falls back to `Short` when invalid.
 * @returns The bullet string to display instead of the content.
 */
const getSensitiveFallback = (
  length?: SensitiveTextProps['length'],
): string => {
  let resolvedLength = length ?? SensitiveTextLength.Short;
  if (
    !(resolvedLength in SensitiveTextLength) &&
    !isValidLength(resolvedLength)
  ) {
    console.warn(`Invalid length provided: ${length}. Falling back to Short.`);
    resolvedLength = SensitiveTextLength.Short;
  }
  return '•'.repeat(Number(resolvedLength));
};

const renderText = (
  content: ReactNode,
  defaults: TextSlotProps,
  textProps?: TextSlotProps,
): ReactNode => {
  if (typeof content === 'string' || typeof content === 'number') {
    return (
      <SensitiveText {...defaults} {...textProps}>
        {content}
      </SensitiveText>
    );
  }
  return content;
};

/**
 * Renders the amount row text. A string amount renders as a `p` via
 * `SensitiveText asChild`: `TextVariant.DisplayLg` maps to an `h1` by default,
 * and a display value is not a document heading, so the component keeps one
 * heading (the title) and heading order stays valid when composed into a page.
 * Masking is resolved here (see {@link getSensitiveFallback}) instead of
 * relying on `SensitiveText`'s `isHidden` fallback.
 *
 * @param content - The amount content: string, number, or custom node.
 * @param textProps - Optional props merged into the amount `SensitiveText`.
 * @returns The rendered amount text, or the custom node as-is.
 */
const renderAmount = (
  content: ReactNode,
  textProps?: TextSlotProps,
): ReactNode => {
  if (typeof content === 'string' || typeof content === 'number') {
    const { isHidden = false, length, ...restTextProps } = textProps ?? {};
    return (
      <SensitiveText asChild variant={TextVariant.DisplayLg} {...restTextProps}>
        <p>{isHidden ? getSensitiveFallback(length) : content}</p>
      </SensitiveText>
    );
  }
  return content;
};

/**
 * Displays a required identity row (avatar + title stack) with optional
 * subtitle, amount, inline accessories, and bottom rows in a left-aligned
 * layout. Remaining `div` props are forwarded to the root `Box`.
 *
 * Implemented with direct `Box` and `SensitiveText` (no `BoxRow` /
 * `TextOrChildren`). String slots render through `SensitiveText`, so a slot
 * prop bag with `isHidden: true` masks it, matching React Native.
 *
 * The title is the component's only semantic heading (`HeadingSm` → `h4`);
 * a string amount renders display typography in a `p` so a value never
 * becomes a page heading.
 */
export const TitleSubpage = forwardRef<HTMLDivElement, TitleSubpageProps>(
  (
    {
      amount,
      amountEndAccessory,
      title,
      titleAvatar,
      titleEndAccessory,
      subtitle,
      subtitleEndAccessory,
      bottomAccessory,
      bottomLabel,
      bottomLabelEndAccessory,
      amountProps,
      titleProps,
      subtitleProps,
      bottomLabelProps,
      identityRowProps,
      titleColumnProps,
      bottomLabelWrapperProps,
      ...props
    },
    ref,
  ) => {
    const { className: identityRowClassName, ...identityRowRest } =
      identityRowProps ?? {};

    return (
      <Box ref={ref} gap={1} {...props}>
        <Box
          flexDirection={BoxFlexDirection.Row}
          alignItems={BoxAlignItems.Center}
          gap={4}
          className={twMerge('h-14', identityRowClassName)}
          {...identityRowRest}
        >
          {titleAvatar}
          <Box {...titleColumnProps}>
            {title ? (
              <Box
                flexDirection={BoxFlexDirection.Row}
                alignItems={BoxAlignItems.Center}
                gap={1}
              >
                {renderText(
                  title,
                  {
                    variant: TextVariant.HeadingSm,
                    color: TextColor.TextDefault,
                  },
                  titleProps,
                )}
                {titleEndAccessory}
              </Box>
            ) : null}
            {subtitle ? (
              <Box
                flexDirection={BoxFlexDirection.Row}
                alignItems={BoxAlignItems.Center}
                gap={1}
              >
                {renderText(
                  subtitle,
                  {
                    variant: TextVariant.BodySm,
                    fontWeight: FontWeight.Medium,
                    color: TextColor.TextAlternative,
                  },
                  subtitleProps,
                )}
                {subtitleEndAccessory}
              </Box>
            ) : null}
          </Box>
        </Box>
        {amount ? (
          <Box
            flexDirection={BoxFlexDirection.Row}
            alignItems={BoxAlignItems.Center}
            gap={1}
          >
            {renderAmount(amount, amountProps)}
            {amountEndAccessory}
          </Box>
        ) : null}
        {bottomLabel ? (
          <Box
            flexDirection={BoxFlexDirection.Row}
            alignItems={BoxAlignItems.Center}
            gap={1}
            {...bottomLabelWrapperProps}
          >
            {renderText(
              bottomLabel,
              {
                variant: TextVariant.BodySm,
                fontWeight: FontWeight.Medium,
                color: TextColor.TextAlternative,
              },
              bottomLabelProps,
            )}
            {bottomLabelEndAccessory}
          </Box>
        ) : (
          bottomAccessory
        )}
      </Box>
    );
  },
);

TitleSubpage.displayName = 'TitleSubpage';
