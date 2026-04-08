// Third party dependencies.
import React, { useMemo } from 'react';

// External dependencies.
import { BoxAlignItems } from '../Box';
import { BoxColumn } from '../BoxColumn';
import type { ButtonIconProps } from '../ButtonIcon';
import { HeaderBase } from '../HeaderBase';
import { IconName } from '../Icon';
import { TextOrChildren } from '../temp-components/TextOrChildren';
import type { TextProps } from '../Text';
import { FontWeight, TextColor, TextVariant } from '../Text';

// Internal dependencies.
import type { HeaderStandardProps } from './HeaderStandard.types';

export const HeaderStandard: React.FC<HeaderStandardProps> = ({
  title,
  titleProps,
  subtitle,
  subtitleProps,
  children,
  onBack,
  backButtonProps,
  onClose,
  closeButtonProps,
  endButtonIconProps,
  startButtonIconProps,
  twClassName = '',
  testID,
  ...headerBaseProps
}) => {
  const resolvedStartButtonIconProps = useMemo(() => {
    if (startButtonIconProps) {
      return startButtonIconProps;
    }
    if (onBack || backButtonProps) {
      const startProps: ButtonIconProps = {
        iconName: IconName.ArrowLeft,
        ...(backButtonProps ?? {}),
        onPress: backButtonProps?.onPress ?? onBack,
      };
      return startProps;
    }
    return undefined;
  }, [onBack, backButtonProps, startButtonIconProps]);

  const resolvedEndButtonIconProps = useMemo(() => {
    const props: ButtonIconProps[] = [];

    if (onClose || closeButtonProps) {
      const closeProps: ButtonIconProps = {
        iconName: IconName.Close,
        ...(closeButtonProps || {}),
        onPress: closeButtonProps?.onPress ?? onClose,
      };
      props.push(closeProps);
    }

    if (endButtonIconProps) {
      props.push(...endButtonIconProps);
    }
    return props.length > 0 ? props : undefined;
  }, [endButtonIconProps, onClose, closeButtonProps]);

  const renderContent = () => {
    if (children) {
      return children;
    }
    if (title) {
      let subtitleTextProps: Omit<Partial<TextProps>, 'children'> | undefined;
      if (subtitle && typeof subtitle === 'string') {
        const { twClassName: subtitleTwClassName, ...subtitleTextRest } =
          subtitleProps ?? {};
        subtitleTextProps = {
          variant: TextVariant.BodySm,
          color: TextColor.TextAlternative,
          ...subtitleTextRest,
          twClassName: ['-mt-0.5', subtitleTwClassName]
            .filter(Boolean)
            .join(' '),
        };
      }

      return (
        <BoxColumn
          alignItems={BoxAlignItems.Center}
          textProps={{
            variant: TextVariant.BodyMd,
            fontWeight: FontWeight.Bold,
            ...titleProps,
          }}
          bottomAccessory={
            subtitle ? (
              <TextOrChildren textProps={subtitleTextProps}>
                {subtitle}
              </TextOrChildren>
            ) : undefined
          }
        >
          {title}
        </BoxColumn>
      );
    }
    return null;
  };

  return (
    <HeaderBase
      testID={testID}
      startButtonIconProps={resolvedStartButtonIconProps}
      endButtonIconProps={resolvedEndButtonIconProps}
      {...headerBaseProps}
      twClassName={`px-2 ${twClassName}`}
    >
      {renderContent()}
    </HeaderBase>
  );
};

HeaderStandard.displayName = 'HeaderStandard';
