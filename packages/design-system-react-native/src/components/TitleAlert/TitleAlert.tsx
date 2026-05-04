import {
  BoxAlignItems,
  BoxFlexDirection,
  BoxJustifyContent,
  TextColor,
  TextVariant,
} from '@metamask/design-system-shared';
import React from 'react';

import { IconSize } from '../../types';
import { Box } from '../Box';
import { BoxRow } from '../BoxRow';
import { IconAlert } from '../IconAlert';

import type { TitleAlertProps } from './TitleAlert.types';

/**
 * Displays a severity-based {@link IconAlert} above a centered title row with optional inline accessories.
 * Remaining `View` props are forwarded to the root `Box`.
 *
 * @param props - Component props
 * @param props.severity - Passed to {@link IconAlert} for glyph and color
 * @param props.title - Title row content; row renders only when `title` is renderable
 * @param props.titleStartAccessory - Optional inline accessory to the left of `title`
 * @param props.titleEndAccessory - Optional inline accessory to the right of `title`
 * @param props.titleProps - Optional props merged into title row `Text` when `title` is a string
 * @param props.twClassName - Optional Tailwind classes on the root container
 *
 * @returns The rendered TitleAlert layout.
 */
export const TitleAlert: React.FC<TitleAlertProps> = ({
  severity,
  title,
  titleStartAccessory,
  titleEndAccessory,
  titleProps,
  twClassName = '',
  ...props
}) => {
  return (
    <Box
      flexDirection={BoxFlexDirection.Column}
      alignItems={BoxAlignItems.Center}
      gap={2}
      twClassName={twClassName}
      {...props}
    >
      <IconAlert severity={severity} size={IconSize.Xl} />
      {title ? (
        <BoxRow
          twClassName="self-stretch"
          justifyContent={BoxJustifyContent.Center}
          startAccessory={titleStartAccessory}
          endAccessory={titleEndAccessory}
          textProps={{
            variant: TextVariant.HeadingSm,
            color: TextColor.TextDefault,
            ...titleProps,
          }}
        >
          {title}
        </BoxRow>
      ) : null}
    </Box>
  );
};

TitleAlert.displayName = 'TitleAlert';
