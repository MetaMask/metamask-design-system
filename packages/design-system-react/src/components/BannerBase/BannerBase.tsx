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
  TextVariant,
} from '@metamask/design-system-shared';
import React, {
  forwardRef,
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';

import { twMerge } from '../../utils/tw-merge';
import { Box } from '../Box';
import { Button } from '../Button';
import { ButtonIcon } from '../ButtonIcon';
import { Text } from '../Text';

import type { BannerBaseProps } from './BannerBase.types';

/** BodyMd line height — title block (`typography.sBodyMD.lineHeight`). */
const BODY_MD_LINE_HEIGHT = 24;
/** BodySm line height — description block (`typography.sBodySM.lineHeight`). */
const BODY_SM_LINE_HEIGHT = 22;
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

export const BannerBase = forwardRef<HTMLDivElement, BannerBaseProps>(
  (
    {
      title,
      titleProps,
      description,
      descriptionProps,
      children,
      childrenWrapperProps,
      actionButtonLabel,
      actionButtonOnClick,
      actionButtonProps,
      actionButtonLayout = BannerBaseActionButtonLayout.Below,
      startAccessory,
      onClose,
      closeButtonProps,
      className,
      backgroundColor = BoxBackgroundColor.BackgroundDefault,
      ...props
    },
    ref,
  ) => {
    const resolvedActionButtonProps = actionButtonProps ?? {};

    const {
      ariaLabel: closeButtonAriaLabel = 'Close banner',
      className: closeButtonClassName,
      ...resolvedCloseButtonProps
    } = closeButtonProps ?? {};

    const shouldShowCloseButton = Boolean(onClose);
    const shouldShowActionButton = Boolean(actionButtonOnClick);
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

    const contentRef = useRef<HTMLDivElement | null>(null);
    // Multiple text blocks: default top-aligned until the stack measures as
    // single-line per block. A single title, description, or children block
    // always centers (including wraps).
    const [isCompactContent, setIsCompactContent] = useState(false);
    const isSingleTextBlock =
      [hasTitle, hasDescription, hasChildren].filter(Boolean).length === 1;

    const measureContent = useCallback(() => {
      if (hasUnmeasuredContent || hasActionButtonBelow || isSingleTextBlock) {
        setIsCompactContent(false);
        return;
      }

      const height = contentRef.current?.getBoundingClientRect().height ?? 0;
      const maxCompactHeight = getCompactContentMaxHeight({
        hasTitle,
        hasDescription,
        hasChildren,
      });
      setIsCompactContent(height > 0 && height <= maxCompactHeight);
    }, [
      hasActionButtonBelow,
      hasChildren,
      hasDescription,
      hasTitle,
      hasUnmeasuredContent,
      isSingleTextBlock,
    ]);

    useLayoutEffect(() => {
      measureContent();

      if (typeof ResizeObserver === 'undefined' || !contentRef.current) {
        return undefined;
      }

      const observer = new ResizeObserver(() => {
        measureContent();
      });
      observer.observe(contentRef.current);

      return () => {
        observer.disconnect();
      };
    }, [title, description, children, measureContent]);

    const isCenterAligned =
      !hasActionButtonBelow &&
      !hasUnmeasuredContent &&
      (hasTitle || hasDescription || hasChildren) &&
      (isSingleTextBlock || isCompactContent);

    const actionButton = shouldShowActionButton ? (
      <Button
        size={ButtonSize.Md}
        onClick={actionButtonOnClick}
        {...resolvedActionButtonProps}
        variant={ButtonVariant.Secondary}
      >
        {actionButtonLabel}
      </Button>
    ) : null;

    return (
      <Box
        {...props}
        ref={ref}
        flexDirection={BoxFlexDirection.Row}
        alignItems={
          isCenterAligned ? BoxAlignItems.Center : BoxAlignItems.Start
        }
        gap={4}
        backgroundColor={backgroundColor}
        paddingTop={3}
        paddingBottom={hasActionButtonBelow ? 4 : 3}
        paddingLeft={4}
        paddingRight={shouldShowCloseButton ? 2 : 4}
        className={twMerge('rounded-12', className)}
      >
        {startAccessory}

        <Box
          className="min-w-0 flex-1"
          ref={(node) => {
            contentRef.current = node;
          }}
        >
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
            <Box className={hasTitle ? 'mt-0.5' : undefined}>
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

          {hasActionButtonBelow && <Box className="mt-2">{actionButton}</Box>}
        </Box>

        {shouldShowActionButton && isActionButtonLayoutEnd && (
          <Box className="self-center">{actionButton}</Box>
        )}

        {shouldShowCloseButton && (
          <ButtonIcon
            className={twMerge(
              !isCenterAligned && '-mt-1',
              closeButtonClassName,
            )}
            iconName={IconName.Close}
            size={ButtonIconSize.Md}
            ariaLabel={closeButtonAriaLabel}
            onClick={onClose}
            {...resolvedCloseButtonProps}
          />
        )}
      </Box>
    );
  },
);

BannerBase.displayName = 'BannerBase';
