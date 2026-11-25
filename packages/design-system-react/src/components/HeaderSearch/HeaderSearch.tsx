import { HeaderSearchVariant } from '@metamask/design-system-shared';
import React from 'react';

import { twMerge } from '../../utils/tw-merge';
import { Box, BoxAlignItems, BoxFlexDirection } from '../Box';
import { Button, ButtonVariant } from '../Button';
import { ButtonIcon, ButtonIconSize } from '../ButtonIcon';
import { IconName } from '../Icon';
import { TextFieldSearch } from '../TextFieldSearch';
import type { TextFieldSearchProps } from '../TextFieldSearch';

import type { HeaderSearchProps } from './HeaderSearch.types';

const CANCEL_LABEL = 'Cancel';
const BACK_ARIA_LABEL = 'Back';

/**
 * HeaderSearch is a header row that combines `TextFieldSearch` with either a
 * back icon (`Screen` variant) or a tertiary Cancel action (`Inline` variant).
 *
 * @example
 * // Screen variant with back button
 * <HeaderSearch
 *   variant={HeaderSearchVariant.Screen}
 *   onClickBackButton={handleBack}
 *   textFieldSearchProps={{
 *     inputAriaLabel: 'Search',
 *     value: searchText,
 *     onChange: (event) => setSearchText(event.target.value),
 *     clearButtonOnClick: () => setSearchText(''),
 *     placeholder: 'Search',
 *   }}
 * />
 *
 * @example
 * // Inline variant with cancel button
 * <HeaderSearch
 *   variant={HeaderSearchVariant.Inline}
 *   onClickCancelButton={handleCancel}
 *   textFieldSearchProps={{
 *     inputAriaLabel: 'Search',
 *     value: searchText,
 *     onChange: (event) => setSearchText(event.target.value),
 *     clearButtonOnClick: () => setSearchText(''),
 *     placeholder: 'Search',
 *   }}
 * />
 *
 * @param props - Header row props (discriminated by `variant`).
 * @returns The header search UI for the active variant.
 */
export const HeaderSearch: React.FC<HeaderSearchProps> = (props) => {
  if (props.variant === HeaderSearchVariant.Screen) {
    const {
      variant: _variant,
      textFieldSearchProps,
      className,
      onClickBackButton,
      backButtonProps,
      ...screenBoxProps
    } = props;

    return (
      <Box
        flexDirection={BoxFlexDirection.Row}
        alignItems={BoxAlignItems.Center}
        gap={2}
        {...screenBoxProps}
        className={twMerge('ml-1 mr-4 h-14', className)}
      >
        <ButtonIcon
          size={ButtonIconSize.Md}
          ariaLabel={BACK_ARIA_LABEL}
          {...backButtonProps}
          iconName={IconName.ArrowLeft}
          onClick={onClickBackButton}
        />
        <TextFieldSearch
          {...(textFieldSearchProps as TextFieldSearchProps)}
          className={twMerge('min-w-0 flex-1', textFieldSearchProps.className)}
        />
      </Box>
    );
  }

  const {
    variant: _variant,
    textFieldSearchProps,
    className,
    onClickCancelButton,
    cancelButtonProps,
    ...inlineBoxProps
  } = props;

  return (
    <Box
      flexDirection={BoxFlexDirection.Row}
      alignItems={BoxAlignItems.Center}
      {...inlineBoxProps}
      className={twMerge('ml-4 h-14', className)}
    >
      <TextFieldSearch
        {...(textFieldSearchProps as TextFieldSearchProps)}
        className={twMerge('min-w-0 flex-1', textFieldSearchProps.className)}
      />
      <Button
        {...cancelButtonProps}
        variant={ButtonVariant.Tertiary}
        onClick={onClickCancelButton}
        textProps={{
          ...cancelButtonProps?.textProps,
          className: twMerge(
            'text-default',
            cancelButtonProps?.textProps?.className,
          ),
        }}
      >
        {cancelButtonProps?.children ?? CANCEL_LABEL}
      </Button>
    </Box>
  );
};

HeaderSearch.displayName = 'HeaderSearch';
