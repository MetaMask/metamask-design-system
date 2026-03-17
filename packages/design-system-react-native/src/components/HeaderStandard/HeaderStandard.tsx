// Third party dependencies.
import React, { useMemo } from 'react';

// External dependencies.
import {
  Box,
  BoxAlignItems,
  Text,
  TextVariant,
  TextColor,
  FontWeight,
  IconName,
  ButtonIconProps,
} from '@metamask/design-system-react-native';

// Internal dependencies.
import { HeaderBase } from '../HeaderBase';
import type { HeaderStandardProps } from './HeaderStandard.types';

/**
 * HeaderStandard is a header component with centered title and optional back/close buttons.
 * Extends HeaderBase with convenient props for common header patterns.
 *
 * @example
 * ```tsx
 * <HeaderStandard
 *   title="Page Title"
 *   onBack={handleBack}
 *   onClose={handleClose}
 * />
 *
 * // Or with custom button props
 * <HeaderStandard
 *   title="Page Title"
 *   backButtonProps={{ onPress: handleBack, isDisabled: true }}
 *   closeButtonProps={{ onPress: handleClose }}
 * />
 * ```
 */
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
          {typeof title === 'string' ? (
            <Text
              variant={TextVariant.BodyMd}
              fontWeight={FontWeight.Bold}
              {...titleProps}
            >
              {title}
            </Text>
          ) : (
            title
          )}
          {subtitle && (
            <Box twClassName="-mt-0.5">
              {typeof subtitle === 'string' ? (
                <Text
                  variant={TextVariant.BodySm}
                  color={TextColor.TextAlternative}
                  {...subtitleProps}
                >
                  {subtitle}
                </Text>
              ) : (
                subtitle
              )}
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
