import type { SensitiveTextPropsShared } from '@metamask/design-system-shared';

import type { TextProps } from '../Text/Text.types';

/**
 * SensitiveText component props (React Native platform-specific).
 *
 * Extends shared props from `@metamask/design-system-shared` with the platform
 * `TextProps` so consumers inherit `variant`, `color`, `fontWeight`, `twClassName`,
 * `style`, `testID`, `accessibilityLabel`, etc.
 */
export type SensitiveTextProps = SensitiveTextPropsShared & TextProps;
