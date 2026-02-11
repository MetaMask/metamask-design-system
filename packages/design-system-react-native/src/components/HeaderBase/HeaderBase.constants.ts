// External dependencies.
import { TextVariant } from '../Text';

// Internal dependencies.
import { HeaderBaseVariant } from './HeaderBase.types';

/**
 * Text variant mapping based on HeaderBase variant.
 */
export const HEADERBASE_VARIANT_TEXT_VARIANTS: Record<
  HeaderBaseVariant,
  TextVariant
> = {
  [HeaderBaseVariant.Compact]: TextVariant.HeadingSm,
  [HeaderBaseVariant.Display]: TextVariant.HeadingLg,
};

/**
 * Default test IDs for HeaderBase component.
 */
export const HEADERBASE_TEST_ID = 'header';
export const HEADERBASE_TITLE_TEST_ID = 'header-title';
