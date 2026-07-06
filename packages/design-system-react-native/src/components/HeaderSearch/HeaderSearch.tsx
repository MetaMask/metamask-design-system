import { HeaderSearchVariant } from '@metamask/design-system-shared';
import React from 'react';

import { Box } from '../Box';
import { Button, ButtonVariant } from '../Button';
import { ButtonIcon, ButtonIconSize } from '../ButtonIcon';
import { IconName } from '../Icon';
import { TextFieldSearch } from '../TextFieldSearch';
import type { TextFieldSearchProps } from '../TextFieldSearch';

import type { HeaderSearchProps } from './HeaderSearch.types';

const CANCEL_LABEL = 'Cancel';

/**
 * HeaderSearch is a header component that combines a search field
 * with either a back button (screen variant) or cancel button (inline variant).
 *
 * @example
 * // Screen variant with back button
 * <HeaderSearch
 *   variant={HeaderSearchVariant.Screen}
 *   onPressBackButton={handleBack}
 *   textFieldSearchProps={{
 *     value: searchText,
 *     onChangeText: setSearchText,
 *     onPressClearButton: () => setSearchText(''),
 *     placeholder: 'Search...',
 *   }}
 * />
 *
 * @example
 * // Inline variant with cancel button
 * <HeaderSearch
 *   variant={HeaderSearchVariant.Inline}
 *   onPressCancelButton={handleCancel}
 *   textFieldSearchProps={{
 *     value: searchText,
 *     onChangeText: setSearchText,
 *     onPressClearButton: () => setSearchText(''),
 *     placeholder: 'Search...',
 *   }}
 * />
 *
 * @param props - Header row props (discriminated by `variant`).
 * @returns The header search UI for the active variant.
 */
export const HeaderSearch: React.FC<HeaderSearchProps> = (props) => {
  const baseTwClassName = 'h-14 flex-row items-center';

  if (props.variant === HeaderSearchVariant.Screen) {
    const {
      variant: _variant,
      textFieldSearchProps,
      twClassName,
      onPressBackButton,
      backButtonProps,
      ...screenBoxProps
    } = props;

    return (
      <Box
        {...screenBoxProps}
        twClassName={
          twClassName
            ? `${baseTwClassName} ml-1 mr-4 gap-2 ${twClassName}`
            : `${baseTwClassName} ml-1 mr-4 gap-2`
        }
      >
        <ButtonIcon
          size={ButtonIconSize.Md}
          {...backButtonProps}
          iconName={IconName.ArrowLeft}
          onPress={onPressBackButton}
        />
        <TextFieldSearch
          {...(textFieldSearchProps as TextFieldSearchProps)}
          twClassName={
            textFieldSearchProps.twClassName
              ? `flex-1 ${textFieldSearchProps.twClassName}`
              : 'flex-1'
          }
        />
      </Box>
    );
  }

  const {
    variant: _variant,
    textFieldSearchProps,
    twClassName,
    onPressCancelButton,
    cancelButtonProps,
    ...inlineBoxProps
  } = props;

  return (
    <Box
      {...inlineBoxProps}
      twClassName={
        twClassName
          ? `${baseTwClassName} ml-4 ${twClassName}`
          : `${baseTwClassName} ml-4`
      }
    >
      <TextFieldSearch
        {...(textFieldSearchProps as TextFieldSearchProps)}
        twClassName={
          textFieldSearchProps.twClassName
            ? `flex-1 ${textFieldSearchProps.twClassName}`
            : 'flex-1'
        }
      />
      <Button
        {...cancelButtonProps}
        variant={ButtonVariant.Tertiary}
        onPress={onPressCancelButton}
        textProps={{
          ...cancelButtonProps?.textProps,
          twClassName: cancelButtonProps?.textProps?.twClassName
            ? `text-default ${cancelButtonProps.textProps.twClassName}`
            : 'text-default',
        }}
      >
        {CANCEL_LABEL}
      </Button>
    </Box>
  );
};

HeaderSearch.displayName = 'HeaderSearch';
