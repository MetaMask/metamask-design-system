/* eslint-disable import/prefer-default-export */
// Internal dependencies.
import type { IconProps } from './Icon.types';
import { IconName, IconSize, IconColor } from './Icon.types';

// Defaults
export const DEFAULT_ICON_SIZE = IconSize.Md;
export const DEFAULT_ICON_COLOR = IconColor.IconDefault;
export const DEFAULT_ICON_NAME = IconName.Add;

// Sample consts
export const SAMPLE_ICON_PROPS: IconProps = {
  name: DEFAULT_ICON_NAME,
  size: DEFAULT_ICON_SIZE,
  color: DEFAULT_ICON_COLOR,
};
