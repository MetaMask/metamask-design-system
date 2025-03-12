import { render } from '@testing-library/react-native';

import { IconName } from '../Icon';
import { AvatarIconSize } from '../../shared/enums';
import { generateAvatarIconContainerClassNames } from './AvatarIcon.utilities';
import {
  DEFAULT_AVATARICON_PROPS,
  TWCLASSMAP_AVATARICON_SEVERITY_BACKGROUNDCOLOR,
} from './AvatarIcon.constants';
import AvatarIcon from './AvatarIcon';
import { AvatarIconSeverity } from './AvatarIcon.types';

describe('AvatarIcon', () => {
  describe('generateAvatarIconContainerClassNames', () => {
    it('returns correct class names for default state', () => {
      const classNames = generateAvatarIconContainerClassNames({});
      expect(classNames).toStrictEqual(
        `${TWCLASSMAP_AVATARICON_SEVERITY_BACKGROUNDCOLOR[DEFAULT_AVATARICON_PROPS.severity]}`,
      );
    });

    it('applies correct severity class', () => {
      Object.values(AvatarIconSeverity).forEach((severity) => {
        const expectedClass =
          TWCLASSMAP_AVATARICON_SEVERITY_BACKGROUNDCOLOR[severity];
        const classNames = generateAvatarIconContainerClassNames({ severity });
        expect(classNames).toStrictEqual(expectedClass);
      });
    });

    it('appends additional Tailwind class names', () => {
      const classNames = generateAvatarIconContainerClassNames({
        twClassName: 'shadow-lg ring-2',
      });
      expect(classNames).toStrictEqual(
        `${TWCLASSMAP_AVATARICON_SEVERITY_BACKGROUNDCOLOR[DEFAULT_AVATARICON_PROPS.severity]} shadow-lg ring-2`,
      );
    });

    it('applies severity and additional classes together correctly', () => {
      const severity = AvatarIconSeverity.Success;
      const classNames = generateAvatarIconContainerClassNames({
        severity,
        twClassName: 'border border-green-500',
      });
      expect(classNames).toStrictEqual(
        `${TWCLASSMAP_AVATARICON_SEVERITY_BACKGROUNDCOLOR[severity]} border border-green-500`,
      );
    });
  });
  describe('AvatarIcon Component', () => {
    it('renders with default props', () => {
      const { getByTestId: getByTestIdIcon } = render(
        <AvatarIcon
          iconName={IconName.Add}
          iconProps={{ testID: 'inner-icon' }}
        />,
      );
      const icon = getByTestIdIcon('inner-icon');

      expect(icon.props.name).toStrictEqual(IconName.Add);
    });

    it('renders with custom props', () => {
      const customSize = AvatarIconSize.Lg;
      const customSeverity = AvatarIconSeverity.Error;
      const customIconProps = { testID: 'custom-icon', extraProp: 'value' };

      // Render separately to test the Icon props.
      const { getByTestId: getIcon } = render(
        <AvatarIcon
          iconName={IconName.Close}
          size={customSize}
          severity={customSeverity}
          iconProps={customIconProps}
        />,
      );
      const icon = getIcon('custom-icon');
      expect(icon.props.name).toStrictEqual(IconName.Close);
      expect(icon.props.extraProp).toStrictEqual('value');
    });
  });
});
