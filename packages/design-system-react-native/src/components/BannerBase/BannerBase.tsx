import {
  BannerBaseActionButtonLayout,
  BoxAlignItems,
  BoxBackgroundColor,
  BoxFlexDirection,
  ButtonIconSize,
  ButtonSize,
  ButtonVariant,
  FontWeight,
  IconName,
  mergeTwClassName,
  TextVariant,
} from '@metamask/design-system-shared';
import { typography } from '@metamask/design-tokens';
import React, { useState } from 'react';
import type { LayoutChangeEvent } from 'react-native';

import { Box } from '../Box';
import { Button } from '../Button';
import { ButtonIcon } from '../ButtonIcon';
import { Text } from '../Text';

import type { BannerBaseProps } from './BannerBase.types';

/** BodyMd line height — title block. */
const BODY_MD_LINE_HEIGHT = typography.sBodyMD.lineHeight;
/** BodySm line height — description block. */
const BODY_SM_LINE_HEIGHT = typography.sBodySM.lineHeight;
/** `mt-0.5` between title and description. */
const TITLE_DESCRIPTION_GAP = 2;
/** Sub-pixel / font rounding allowance when comparing stack height. */
const COMPACT_HEIGHT_TOLERANCE = 4;

const isTextContent = (content: React.ReactNode): content is string | number =>
  typeof content === 'string' || typeof content === 'number';

const hasContent = (content: React.ReactNode) =>
  content !== null && content !== undefined;

const getCompactContentMaxHeight = ({
  hasTitle,
  hasDescription,
  hasChildren,
}: {
  hasTitle: boolean;
  hasDescription: boolean;
  hasChildren: boolean;
}) => {
  let maxHeight = 0;

  if (hasTitle) {
    maxHeight += BODY_MD_LINE_HEIGHT;
  }
  if (hasDescription) {
    if (hasTitle) {
      maxHeight += TITLE_DESCRIPTION_GAP;
    }
    maxHeight += BODY_SM_LINE_HEIGHT;
  }
  if (hasChildren) {
    maxHeight += BODY_MD_LINE_HEIGHT;
  }

  return maxHeight + COMPACT_HEIGHT_TOLERANCE;
};

export const BannerBase: React.FC<BannerBaseProps> = ({
  title,
  titleProps,
  description,
  descriptionProps,
  children,
  childrenWrapperProps,
  actionButtonLabel,
  actionButtonOnPress,
  actionButtonProps,
  actionButtonLayout = BannerBaseActionButtonLayout.Below,
  startAccessory,
  onClose,
  closeButtonProps,
  twClassName,
  backgroundColor = BoxBackgroundColor.BackgroundDefault,
  ...props
}) => {
  const resolvedActionButtonProps = actionButtonProps ?? {};

  const {
    accessibilityLabel: closeButtonAccessibilityLabel = 'Close banner',
    twClassName: closeButtonTwClassName,
    ...resolvedCloseButtonProps
  } = closeButtonProps ?? {};

  const shouldShowCloseButton = Boolean(onClose);
  const shouldShowActionButton = Boolean(actionButtonOnPress);
  const isActionButtonLayoutEnd =
    actionButtonLayout === BannerBaseActionButtonLayout.End;
  const hasActionButtonBelow =
    shouldShowActionButton && !isActionButtonLayoutEnd;
  const hasTitle = hasContent(title);
  const hasDescription = hasContent(description);
  const hasChildren = hasContent(children);
  // Custom nodes can't be measured reliably — keep top-aligned.
  const hasUnmeasuredContent =
    (hasTitle && !isTextContent(title)) ||
    (hasDescription && !isTextContent(description)) ||
    (hasChildren && !isTextContent(children));

  // Multiple text blocks: default top-aligned until the stack measures as
  // single-line per block. A single title, description, or children block
  // always centers (including wraps). Avoids multiline stacks sticking
  // centered when layout callbacks are delayed or skipped.
  const [isCompactContent, setIsCompactContent] = useState(false);
  const isSingleTextBlock =
    [hasTitle, hasDescription, hasChildren].filter(Boolean).length === 1;

  const isCenterAligned =
    !hasActionButtonBelow &&
    !hasUnmeasuredContent &&
    (hasTitle || hasDescription || hasChildren) &&
    (isSingleTextBlock || isCompactContent);

  const handleContentLayout = (event: LayoutChangeEvent) => {
    if (hasUnmeasuredContent || hasActionButtonBelow || isSingleTextBlock) {
      setIsCompactContent(false);
      return;
    }

    const { height } = event.nativeEvent.layout;
    const maxCompactHeight = getCompactContentMaxHeight({
      hasTitle,
      hasDescription,
      hasChildren,
    });
    setIsCompactContent(height > 0 && height <= maxCompactHeight);
  };

  const actionButton = shouldShowActionButton ? (
    <Button
      size={ButtonSize.Md}
      onPress={actionButtonOnPress}
      {...resolvedActionButtonProps}
      variant={ButtonVariant.Secondary}
    >
      {actionButtonLabel}
    </Button>
  ) : null;

  return (
    <Box
      {...props}
      flexDirection={BoxFlexDirection.Row}
      alignItems={isCenterAligned ? BoxAlignItems.Center : BoxAlignItems.Start}
      gap={4}
      backgroundColor={backgroundColor}
      paddingTop={3}
      paddingBottom={hasActionButtonBelow ? 4 : 3}
      paddingLeft={4}
      paddingRight={shouldShowCloseButton ? 2 : 4}
      twClassName={mergeTwClassName('rounded-12', twClassName)}
    >
      {startAccessory}

      <Box twClassName="flex-1" onLayout={handleContentLayout}>
        {hasTitle &&
          (isTextContent(title) ? (
            <Text
              variant={TextVariant.BodyMd}
              fontWeight={FontWeight.Medium}
              {...titleProps}
            >
              {title}
            </Text>
          ) : (
            title
          ))}

        {hasDescription && (
          <Box twClassName={hasTitle ? 'mt-0.5' : undefined}>
            {isTextContent(description) ? (
              <Text variant={TextVariant.BodySm} {...descriptionProps}>
                {description}
              </Text>
            ) : (
              description
            )}
          </Box>
        )}

        {hasChildren &&
          (isTextContent(children) ? (
            <Text variant={TextVariant.BodyMd} {...childrenWrapperProps}>
              {children}
            </Text>
          ) : (
            children
          ))}

        {hasActionButtonBelow && <Box twClassName="mt-2">{actionButton}</Box>}
      </Box>

      {shouldShowActionButton && isActionButtonLayoutEnd && (
        <Box twClassName="self-center">{actionButton}</Box>
      )}

      {shouldShowCloseButton && (
        <ButtonIcon
          twClassName={
            isCenterAligned
              ? closeButtonTwClassName
              : mergeTwClassName('-mt-1', closeButtonTwClassName)
          }
          iconName={IconName.Close}
          size={ButtonIconSize.Md}
          accessibilityLabel={closeButtonAccessibilityLabel}
          onPress={onClose}
          {...resolvedCloseButtonProps}
        />
      )}
    </Box>
  );
};
