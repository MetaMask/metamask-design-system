import type { SensitiveTextPropsShared } from '@metamask/design-system-shared';

import type { TextProps } from '../Text/Text.types';

/**
 * SensitiveText component props (React platform-specific).
 *
 * Extends shared props from `@metamask/design-system-shared` with the platform
 * `TextProps` so consumers inherit `variant`, `color`, `fontWeight`, `className`,
 * `style`, `data-testid`, etc.
 */
export type SensitiveTextProps = SensitiveTextPropsShared & TextProps;
