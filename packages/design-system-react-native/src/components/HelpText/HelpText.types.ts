import type { HelpTextPropsShared } from '@metamask/design-system-shared';

import type { TextProps } from '../Text';

export type HelpTextProps = HelpTextPropsShared & Omit<TextProps, 'variant'>;
