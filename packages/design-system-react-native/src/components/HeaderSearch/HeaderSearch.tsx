// Third party dependencies.
import React from 'react';

// External dependencies.
import { HeaderSearchVariant } from '@metamask/design-system-shared';
import { Box } from '../Box';
import { Button, ButtonVariant } from '../Button';
import { ButtonIcon, ButtonIconSize } from '../ButtonIcon';
import { IconName } from '../Icon';

// Internal dependencies.
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
 */
export const HeaderSearch: React.FC<HeaderSearchProps> = (props) => {
  const baseTwClassName = 'h-14 flex-row items-center';

  if (props.variant === HeaderSearchVariant.Screen) {
    const {
      variant: _variant,
      textFieldSearchProps,
      twClassName = '',
      onPressBackButton,
      backButtonProps,
      ...screenBoxProps
    } = props;

    return (
      <Box
        {...screenBoxProps}
        twClassName={`${baseTwClassName} ml-1 mr-4 gap-2 ${twClassName}`.trim()}
      >
        <ButtonIcon
          iconName={IconName.ArrowLeft}
          size={ButtonIconSize.Md}
          onPress={onPressBackButton}
          {...backButtonProps}
        />
        <Box twClassName="flex-1">
          <TextFieldSearch
            {...(textFieldSearchProps as TextFieldSearchProps)}
          />
        </Box>
      </Box>
    );
  }

  const {
    variant: _variant,
    textFieldSearchProps,
    twClassName = '',
    onPressCancelButton,
    cancelButtonProps,
    ...inlineBoxProps
  } = props;

  return (
    <Box
      {...inlineBoxProps}
      twClassName={`${baseTwClassName} ml-4 ${twClassName}`.trim()}
    >
      <Box twClassName="flex-1">
        <TextFieldSearch {...(textFieldSearchProps as TextFieldSearchProps)} />
      </Box>
      <Button
        variant={ButtonVariant.Tertiary}
        onPress={onPressCancelButton}
        {...cancelButtonProps}
        textProps={{
          ...cancelButtonProps?.textProps,
          twClassName: [
            'text-default',
            cancelButtonProps?.textProps?.twClassName,
          ]
            .filter(Boolean)
            .join(' ')
            .trim(),
        }}
      >
        {CANCEL_LABEL}
      </Button>
    </Box>
  );
};

HeaderSearch.displayName = 'HeaderSearch';
