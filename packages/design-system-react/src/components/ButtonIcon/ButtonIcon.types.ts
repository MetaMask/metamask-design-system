import type { ButtonIconPropsShared } from '@metamask/design-system-shared';
import type { ComponentProps } from 'react';

import type { IconName, IconProps } from '../Icon';

export type ButtonIconProps = ComponentProps<'button'> &
  Omit<ButtonIconPropsShared, 'iconName'> & {
    /**
     * Required prop to specify the icon to show
     */
    iconName: IconName;
    /**
     * Optional prop to pass additional properties to the icon
     */
    iconProps?: Partial<IconProps>;
    /**
     * Required prop to provide an accessible label for the button
     */
    ariaLabel: string;
    /**
     * Optional prop for additional CSS classes to be applied to the ButtonIcon component
     */
    className?: string;
    /**
     * Optional CSS styles to be applied to the component.
     * Should be used sparingly and only for dynamic styles that can't be achieved with className.
     */
    style?: React.CSSProperties;
  };
