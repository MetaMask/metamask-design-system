// Third party dependencies.
import React, { useMemo } from 'react';

// External dependencies.
import { Box, BoxAlignItems } from '../Box';
import { BoxVertical } from '../BoxVertical';
import type { ButtonIconProps } from '../ButtonIcon';
import { HeaderBase } from '../HeaderBase';
import { IconName } from '../Icon';
import { TextOrChildren } from '../temp-components/TextOrChildren';
import { FontWeight, TextColor, TextVariant } from '../Text';

// Internal dependencies.
import type { HeaderStandardProps } from './HeaderStandard.types';

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
        <BoxVertical
          alignItems={BoxAlignItems.Center}
          textProps={{
            variant: TextVariant.BodyMd,
            fontWeight: FontWeight.Bold,
            ...titleProps,
          }}
          bottomAccessory={
            subtitle ? (
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
            ) : undefined
          }
        >
          {title}
        </BoxVertical>
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
