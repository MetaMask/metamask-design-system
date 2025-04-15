/* eslint-disable import/prefer-default-export */
import { IconColor, IconName, IconSize } from '../../types';
import type { IconProps } from './Icon.types';

// Defaults
export const DEFAULT_ICON_ICONSIZE = IconSize.Md;
export const DEFAULT_ICON_ICONCOLOR = IconColor.IconDefault;
export const DEFAULT_ICON_ICONNAME = IconName.Add;

// Sample consts
export const SAMPLE_ICON_PROPS: IconProps = {
  name: DEFAULT_ICON_ICONNAME,
  size: DEFAULT_ICON_ICONSIZE,
  color: DEFAULT_ICON_ICONCOLOR,
};
