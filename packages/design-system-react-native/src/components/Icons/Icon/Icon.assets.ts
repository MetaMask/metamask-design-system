import AddSVG from './assets/add.svg';
import { IconName } from './Icon.types';
import type { AssetByIconName } from './Icon.types';

/**
 * Asset stored by icon name
 */
export const assetByIconName: AssetByIconName = {
  [IconName.Add]: AddSVG,
};
