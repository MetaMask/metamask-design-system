// Third party dependencies.
import {
  BoxAlignItems,
  BoxFlexDirection,
  FontWeight,
  TextColor,
  TextVariant,
} from '@metamask/design-system-shared';
import React from 'react';

// Internal dependencies.
import { Box } from '../Box';
import { TextOrChildren } from '../temp-components/TextOrChildren';

import type { TitleStandardProps } from './TitleStandard.types';

/**
 * Displays a primary title with optional top, inline, and bottom rows in a left-aligned layout.
 * Remaining `View` props are forwarded to the root `Box`.
 *
 * @param props - Component props
 * @param props.title - Primary title content
 * @param props.titleEndAccessory - Optional inline accessory to the right of the title
 * @param props.topAccessory - Optional row above the title
 * @param props.bottomAccessory - Optional custom bottom row when `bottomLabel` is not renderable
 * @param props.bottomLabel - Optional secondary label below the title
 * @param props.bottomLabelEndAccessory - Optional inline accessory to the right of the bottom label
 * @param props.titleProps - Optional props merged into title `Text` when `title` is a string
 * @param props.bottomLabelProps - Optional props merged into bottom label `Text` when `bottomLabel` is a string
 * @param props.titleWrapperProps - Optional props forwarded to the title row `Box`
 * @param props.bottomLabelWrapperProps - Optional props forwarded to the bottom label row `Box`
 * @param props.twClassName - Optional Tailwind classes on the root container
 *
 * @param props.className - Tailwind classes. Preferred over deprecated `twClassName`.
 * @returns The rendered TitleStandard layout.
 */
export const TitleStandard: React.FC<TitleStandardProps> = ({
  title,
  titleEndAccessory,
  topAccessory,
  bottomAccessory,
  bottomLabel,
  bottomLabelEndAccessory,
  titleProps,
  titleWrapperProps,
  bottomLabelProps,
  bottomLabelWrapperProps,
  twClassName = '',
  className,
  ...props
}) => {
  return (
    <Box twClassName={twClassName} className={className} gap={1} {...props}>
      {/* Top Accessory Slot */}
      {topAccessory}
      {/* Title Row */}
      <Box
        flexDirection={BoxFlexDirection.Row}
        alignItems={BoxAlignItems.Center}
        gap={2}
        {...titleWrapperProps}
      >
        <TextOrChildren
          textProps={{
            variant: TextVariant.HeadingLg,
            ...titleProps,
          }}
        >
          {title}
        </TextOrChildren>
        {titleEndAccessory}
      </Box>
      {/* Bottom Label Row */}
      {bottomLabel && (
        <Box
          flexDirection={BoxFlexDirection.Row}
          alignItems={BoxAlignItems.Center}
          gap={2}
          {...bottomLabelWrapperProps}
        >
          <TextOrChildren
            textProps={{
              variant: TextVariant.BodySm,
              fontWeight: FontWeight.Medium,
              color: TextColor.TextAlternative,
              ...bottomLabelProps,
            }}
          >
            {bottomLabel}
          </TextOrChildren>
          {bottomLabelEndAccessory}
        </Box>
      )}
      {/* Bottom Accessory Slot */}
      {!bottomLabel && bottomAccessory}
    </Box>
  );
};

TitleStandard.displayName = 'TitleStandard';
