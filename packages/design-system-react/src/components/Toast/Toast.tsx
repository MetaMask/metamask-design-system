import {
  BoxBackgroundColor,
  BoxBorderColor,
  ButtonSize,
  IconSize,
  TextColor,
  ToastSeverity,
} from '@metamask/design-system-shared';
import React, {
  forwardRef,
  useCallback,
  useLayoutEffect,
  useState,
} from 'react';

import { twMerge } from '../../utils/tw-merge';
import { BannerBase } from '../BannerBase';
import { Icon } from '../Icon';

import { TOAST_SEVERITY_ICON_MAP } from './Toast.constants';
import type { ToastProps } from './Toast.types';

const renderSeverityAccessory = ({
  severity,
  startAccessory,
  iconProps,
}: Pick<ToastProps, 'severity' | 'startAccessory' | 'iconProps'>) => {
  if (startAccessory !== null && startAccessory !== undefined) {
    return startAccessory;
  }

  if (!severity || severity === ToastSeverity.Default) {
    return undefined;
  }

  const { name, color } = TOAST_SEVERITY_ICON_MAP[severity];

  return <Icon name={name} color={color} size={IconSize.Lg} {...iconProps} />;
};

const resolveIsDarkTheme = (node: HTMLElement): boolean => {
  // Prefer the closest explicit data-theme so a nested light surface inside a
  // distant .dark ancestor keeps light toast polish (and matching CSS tokens).
  const dataThemeRoot = node.closest('[data-theme]');
  if (dataThemeRoot) {
    return dataThemeRoot.getAttribute('data-theme') === 'dark';
  }

  if (node.closest('.dark')) {
    return true;
  }

  return document.documentElement.getAttribute('data-theme') === 'dark';
};

export const Toast = forwardRef<HTMLDivElement, ToastProps>(
  (
    {
      actionButtonLabel,
      actionButtonOnClick,
      actionButtonProps,
      className,
      closeButtonProps,
      descriptionProps = { color: TextColor.TextAlternative },
      iconProps,
      onClose,
      severity = ToastSeverity.Default,
      startAccessory,
      ...props
    },
    ref,
  ) => {
    const [node, setNode] = useState<HTMLDivElement | null>(null);
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const setToastRef = useCallback(
      (element: HTMLDivElement | null) => {
        setNode(element);

        if (typeof ref === 'function') {
          ref(element);
        } else if (ref) {
          ref.current = element;
        }
      },
      [ref],
    );

    useLayoutEffect(() => {
      if (!node) {
        return undefined;
      }

      const syncTheme = () => {
        setIsDarkTheme(resolveIsDarkTheme(node));
      };

      syncTheme();

      const observer = new MutationObserver(syncTheme);
      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['data-theme', 'class'],
      });

      const scopedThemeRoot = node.closest('[data-theme]');
      if (scopedThemeRoot && scopedThemeRoot !== document.documentElement) {
        observer.observe(scopedThemeRoot, {
          attributes: true,
          attributeFilter: ['data-theme', 'class'],
        });
      }

      return () => observer.disconnect();
    }, [node]);

    // Only pass action props through when both the label and handler are set so
    // BannerBase can keep its action button contract simple.
    const resolvedActionProps =
      actionButtonLabel && actionButtonOnClick
        ? {
            actionButtonLabel,
            actionButtonOnClick,
            actionButtonProps: {
              size: ButtonSize.Sm,
              ...actionButtonProps,
            },
          }
        : {};

    // Derive the close button config from the Toast API, keeping the button
    // visible whenever the consumer provides dismiss behavior or overrides.
    const resolvedCloseButtonProps =
      onClose || closeButtonProps
        ? {
            ariaLabel: 'Close toast',
            ...closeButtonProps,
          }
        : undefined;

    // Toast reuses BannerBase so the web surface stays aligned with the shared
    // banner layout and the React Native Toast API.
    return (
      <BannerBase
        ref={setToastRef}
        {...resolvedActionProps}
        {...props}
        backgroundColor={
          isDarkTheme
            ? BoxBackgroundColor.BackgroundSection
            : BoxBackgroundColor.BackgroundDefault
        }
        borderColor={BoxBorderColor.BorderMuted}
        borderWidth={1}
        className={twMerge(
          'rounded-2xl',
          !isDarkTheme && 'shadow-md',
          className,
        )}
        closeButtonProps={resolvedCloseButtonProps}
        descriptionProps={descriptionProps}
        onClose={onClose}
        startAccessory={renderSeverityAccessory({
          severity,
          startAccessory,
          iconProps,
        })}
      />
    );
  },
);

Toast.displayName = 'Toast';
