// Third party dependencies.
import { isReactNodeRenderable } from '@metamask/design-system-shared';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// External dependencies.
import { Box, BoxAlignItems, BoxFlexDirection } from '../Box';
import { BoxHorizontal } from '../BoxHorizontal';
import { ButtonIcon, ButtonIconSize } from '../ButtonIcon';
import { TextVariant } from '../Text';

// Internal dependencies.
import type { HeaderRootProps } from './HeaderRoot.types';

export const HeaderRoot = ({
  children,
  title,
  titleProps,
  titleAccessory,
  endAccessory,
  endButtonIconProps,
  includesTopInset = false,
  style,
  testID,
  twClassName,
  ...viewProps
}: HeaderRootProps) => {
  const insets = useSafeAreaInsets();

  const hasRenderableChildren = isReactNodeRenderable(children);

  const hasTitleContent =
    title !== false &&
    (isReactNodeRenderable(title) || isReactNodeRenderable(titleAccessory));

  const shouldRenderTitleRow = !hasRenderableChildren && hasTitleContent;

  const endSectionContent = (() => {
    if (endAccessory) {
      return endAccessory;
    }
    if (endButtonIconProps && endButtonIconProps.length > 0) {
      const reversedProps = endButtonIconProps
        .map((props, originalIndex) => ({ props, originalIndex }))
        .reverse();
      return reversedProps.map(({ props, originalIndex }) => (
        <ButtonIcon
          key={`end-button-icon-${originalIndex}`}
          size={ButtonIconSize.Md}
          {...props}
        />
      ));
    }
    return null;
  })();

  const hasEndSection = Boolean(endSectionContent);

  const renderLeftSection = () => {
    if (hasRenderableChildren) {
      return children;
    }
    if (shouldRenderTitleRow) {
      const titleNode =
        isReactNodeRenderable(title) && title !== '' ? title : null;
      return (
        <BoxHorizontal
          endAccessory={titleAccessory}
          textProps={{
            variant: TextVariant.HeadingLg,
            ...titleProps,
          }}
        >
          {titleNode}
        </BoxHorizontal>
      );
    }
    return null;
  };

  return (
    <Box
      flexDirection={BoxFlexDirection.Row}
      alignItems={BoxAlignItems.Center}
      gap={4}
      paddingLeft={4}
      paddingRight={2}
      twClassName={`min-h-14 ${twClassName ?? ''}`.trim()}
      style={[includesTopInset && { marginTop: insets.top }, style]}
      testID={testID}
      {...viewProps}
    >
      <Box alignItems={BoxAlignItems.Start} style={{ flex: 1 }}>
        {renderLeftSection()}
      </Box>
      {hasEndSection ? (
        <Box flexDirection={BoxFlexDirection.Row} gap={2}>
          {endSectionContent}
        </Box>
      ) : null}
    </Box>
  );
};

HeaderRoot.displayName = 'HeaderRoot';
