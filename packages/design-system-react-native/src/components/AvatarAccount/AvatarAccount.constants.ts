import type { AvatarAccountProps } from './AvatarAccount.types';
import { AvatarAccountVariant } from './AvatarAccount.types';
import { AvatarAccountSize, AvatarBaseShape } from '../../shared/enums';

// Defaults
export const DEFAULT_AVATARACCOUNT_PROPS: Required<
  Pick<AvatarAccountProps, 'size' | 'shape' | 'variant'>
> = {
  size: AvatarAccountSize.Md,
  shape: AvatarBaseShape.Circle,
  variant: AvatarAccountVariant.Jazzicon,
};

// Sample account addresses
export const SAMPLE_AVATARACCOUNT_ADDRESSES = [
  '0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8',
  '0xb9b81f6bd23B953c5257C3b5E2F0c03B07E944eB',
  '0x360507dfEC4Bf0c03495f91154A78C672599F308',
  '0x50cA820Ff810F7687E7d0aDb23A830e3ac6032C3',
  '0x840C9Eb73729E626673714D6E4dA8afc8Ccc90d3',
  '0xCA0361BE89B7d47a6233d1875F0727ddeAB23377',
  '0xD78CBcA88eCd65c6128511e46a518CDc6c66fC74',
  '0xCFc8b1d1031ef2ecce3a98d5D79ce4D75Edb06bA',
  '0xDe53fa2E659b6134991bB56F64B691990e5C44E7',
  '0x8AceA3A9748294d1B5C25a08EFE37b756AafDFdd',
  '0xEC5CE72f2e18B0017C88F7B12d3308119C5Cf129',
  '0xeC56Da21c90Af6b50E4Ba5ec252bD97e735290fc',
];
