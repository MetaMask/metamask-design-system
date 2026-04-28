import type { AvatarTokenProps } from '../AvatarToken/AvatarToken.types';
import type { SelectButtonProps } from '../SelectButton/SelectButton.types';
import type { ImageOrSvgSrc } from '../temp-components/ImageOrSvg';

export type TokenSelectButtonProps = Omit<SelectButtonProps, 'value'> & {
  tokenName?: string;
  tokenSrc?: ImageOrSvgSrc;
  avatarTokenProps?: AvatarTokenProps;
};
