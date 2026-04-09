import type { IconPropsShared } from '@metamask/design-system-shared';
import type { SVGProps, ComponentPropsWithoutRef } from 'react';

// Use ComponentPropsWithoutRef to get SVG element props without relying on global SVGElement
type SVGElementProps = ComponentPropsWithoutRef<'svg'>;

export type IconProps = SVGProps<SVGElementProps> &
  IconPropsShared & {
    /**
     * Additional CSS classes to be added to the component.
     * These classes will be merged with the component's default classes using twMerge.
     */
    className?: string;
    /**
     * Optional CSS styles to be applied to the component.
     * Should be used sparingly and only for dynamic styles that can't be achieved with className.
     */
    style?: React.CSSProperties;
    /**
     * Optional prop to add a test id to the icon
     */
    'data-testid'?: string;
  };
