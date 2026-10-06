import type { HelpTextPropsShared } from '@metamask/design-system-shared';

import type { TextProps } from '../Text/index.js';

export type HelpTextProps = HelpTextPropsShared & Omit<TextProps, 'variant'>;
