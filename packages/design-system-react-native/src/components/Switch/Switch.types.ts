import type { SwitchPropsShared } from '@metamask/design-system-shared';
import type { SwitchProps as RNSwitchProps } from 'react-native';

/**
 * Switch component props (React Native platform-specific)
 * Extends shared props from @metamask/design-system-shared with React Native specific platform concerns
 */
export type SwitchProps = SwitchPropsShared &
  Omit<RNSwitchProps, 'value' | 'disabled' | 'onValueChange'> & {
    /**
     * Required callback for when the switch value changes.
     * Use this to update your state.
     */
    onValueChange: (value: boolean) => void;
  };
