// Third party dependencies.
import type { HeaderRootPropsShared } from '@metamask/design-system-shared';
import type { StyleProp, ViewProps, ViewStyle } from 'react-native';

// External dependencies.
import type { ButtonIconProps } from '../ButtonIcon';
import type { TextProps } from '../Text';

/**
 * HeaderRoot component props.
 * Left section renders either children or a title row (mutually exclusive).
 * End section matches HeaderBase (endAccessory or endButtonIconProps).
 */
export type HeaderRootProps = ViewProps &
  HeaderRootPropsShared & {
    /**
     * Optional props passed to the Text component when title is a string (TextOrChildren textProps).
     */
    titleProps?: Partial<TextProps>;
    /**
     * Optional array of ButtonIcon props to render multiple ButtonIcons as end accessories.
     * Rendered in reverse order (first item appears rightmost).
     * Only used if endAccessory is not provided.
     */
    endButtonIconProps?: ButtonIconProps[];
    /**
     * Optional prop to include the top inset so the header is visible below the device safe area.
     */
    includesTopInset?: boolean;
    /**
     * Optional style for the header container.
     */
    style?: StyleProp<ViewStyle>;
    /**
     * Optional test ID for the header container.
     */
    testID?: string;
    /**
     * Optional Tailwind class names for the header container.
     */
    twClassName?: string;
  };
