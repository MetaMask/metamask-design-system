import type { TagPropsShared } from '@metamask/design-system-shared';
import type { IconName } from '@metamask/design-system-shared';
import type { ComponentProps } from 'react';

import type { IconProps } from '../Icon';
import type { TextProps } from '../Text';

/**
 * Tag component props (React / extension).
 * Extends {@link TagPropsShared} with platform `Icon` passthroughs and `className`.
 */
export type TagProps = TagPropsShared &
  Omit<ComponentProps<'div'>, 'children'> & {
    /**
     * Optional icon at the start of the tag (`IconSize.Xs` unless overridden in `startIconProps`).
     */
    startIconName?: IconName;
    /**
     * Optional props for the start icon. You may set `name` here instead of `startIconName`.
     */
    startIconProps?: Partial<IconProps>;
    /**
     * Optional icon at the end of the tag (`IconSize.Xs` unless overridden in `endIconProps`).
     */
    endIconName?: IconName;
    /**
     * Optional props for the end icon. You may set `name` here instead of `endIconName`.
     */
    endIconProps?: Partial<IconProps>;
    /**
     * Optional props to be passed to the Text component used by string children. Merged over the tag defaults (`BodyXs`, medium weight, severity-based color), so values set here take precedence.
     */
    textProps?: Partial<TextProps>;
    /**
     * Optional CSS classes merged onto the tag container.
     */
    className?: string;
  };
