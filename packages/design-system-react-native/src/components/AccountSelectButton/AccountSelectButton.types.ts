import type { AvatarAccountProps } from '../AvatarAccount/AvatarAccount.types';
import type { SelectButtonProps } from '../SelectButton/SelectButton.types';

export type AccountSelectButtonProps = Omit<SelectButtonProps, 'value'> & {
  accountAddress?: string;
  accountName?: string;
  avatarAccountProps?: AvatarAccountProps;
};
