// Third party dependencies.
import React, { useMemo } from 'react';

// External dependencies.
import { Box, BoxAlignItems } from '../Box';
import type { ButtonIconProps } from '../ButtonIcon';
import { IconName } from '../Icon';
import { FontWeight, TextColor, TextVariant } from '../Text';

// Internal dependencies.
import { HeaderBase } from '../HeaderBase';
import { TextOrChildren } from '../temp-components/TextOrChildren';
import type { HeaderStandardProps } from './HeaderStandard.types';

/** Centered title and optional back/close actions; extends HeaderBase. */
const HeaderStandard: React.FC<HeaderStandardProps> = ({
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
      return {
        iconName: IconName.ArrowLeft,
        ...(backButtonProps || {}),
        onPress: backButtonProps?.onPress ?? onBack,
      } as ButtonIconProps;
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
      return (
        <Box alignItems={BoxAlignItems.Center}>
          <TextOrChildren
            textProps={{
              variant: TextVariant.BodyMd,
              fontWeight: FontWeight.Bold,
              ...titleProps,
            }}
          >
            {title}
          </TextOrChildren>
          {subtitle && (
            <Box twClassName="-mt-0.5">
              <TextOrChildren
                textProps={{
                  variant: TextVariant.BodySm,
                  color: TextColor.TextAlternative,
                  ...subtitleProps,
                }}
              >
                {subtitle}
              </TextOrChildren>
            </Box>
          )}
        </Box>
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
      twClassName={`px-2 ${twClassName}`.trim()}
    >
      {renderContent()}
    </HeaderBase>
  );
};

HeaderStandard.displayName = 'HeaderStandard';

export default HeaderStandard;
