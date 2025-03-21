/* do not change this file, it is auto generated by storybook. */

import {
  configure,
  addDecorator,
  addParameters,
  addArgsEnhancer,
  clearDecorators,
} from "@storybook/react-native";

global.STORIES = [
  {
    titlePrefix: "",
    directory: "../../packages/design-system-react-native/src",
    files: "**/*.stories.@(js|jsx|ts|tsx)",
    importPathMatcher:
      "^(?:\\.\\.\\/\\.\\.\\/packages\\/design-system-react-native\\/src(?:\\/(?!\\.)(?:(?:(?!(?:^|\\/)\\.).)*?)\\/|\\/|$)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$",
  },
];

import "@storybook/addon-ondevice-controls/register";
import "@storybook/addon-ondevice-actions/register";

import { argsEnhancers } from "@storybook/addon-actions/dist/modern/preset/addArgs";

import { decorators, parameters } from "./preview";

if (decorators) {
  if (__DEV__) {
    // stops the warning from showing on every HMR
    require("react-native").LogBox.ignoreLogs([
      "`clearDecorators` is deprecated and will be removed in Storybook 7.0",
    ]);
  }
  // workaround for global decorators getting infinitely applied on HMR, see https://github.com/storybookjs/react-native/issues/185
  clearDecorators();
  decorators.forEach((decorator) => addDecorator(decorator));
}

if (parameters) {
  addParameters(parameters);
}

try {
  argsEnhancers.forEach((enhancer) => addArgsEnhancer(enhancer));
} catch {}

const getStories = () => {
  return {
    "./../../packages/design-system-react-native/src/components/AvatarAccount/AvatarAccount.stories.tsx": require("../../../packages/design-system-react-native/src/components/AvatarAccount/AvatarAccount.stories.tsx"),
    "./../../packages/design-system-react-native/src/components/AvatarFavicon/AvatarFavicon.stories.tsx": require("../../../packages/design-system-react-native/src/components/AvatarFavicon/AvatarFavicon.stories.tsx"),
    "./../../packages/design-system-react-native/src/components/AvatarGroup/AvatarGroup.stories.tsx": require("../../../packages/design-system-react-native/src/components/AvatarGroup/AvatarGroup.stories.tsx"),
    "./../../packages/design-system-react-native/src/components/AvatarIcon/AvatarIcon.stories.tsx": require("../../../packages/design-system-react-native/src/components/AvatarIcon/AvatarIcon.stories.tsx"),
    "./../../packages/design-system-react-native/src/components/AvatarNetwork/AvatarNetwork.stories.tsx": require("../../../packages/design-system-react-native/src/components/AvatarNetwork/AvatarNetwork.stories.tsx"),
    "./../../packages/design-system-react-native/src/components/AvatarToken/AvatarToken.stories.tsx": require("../../../packages/design-system-react-native/src/components/AvatarToken/AvatarToken.stories.tsx"),
    "./../../packages/design-system-react-native/src/components/BadgeNetwork/BadgeNetwork.stories.tsx": require("../../../packages/design-system-react-native/src/components/BadgeNetwork/BadgeNetwork.stories.tsx"),
    "./../../packages/design-system-react-native/src/components/BadgeStatus/BadgeStatus.stories.tsx": require("../../../packages/design-system-react-native/src/components/BadgeStatus/BadgeStatus.stories.tsx"),
    "./../../packages/design-system-react-native/src/components/Button/Button.stories.tsx": require("../../../packages/design-system-react-native/src/components/Button/Button.stories.tsx"),
    "./../../packages/design-system-react-native/src/components/Button/variants/ButtonPrimary/ButtonPrimary.stories.tsx": require("../../../packages/design-system-react-native/src/components/Button/variants/ButtonPrimary/ButtonPrimary.stories.tsx"),
    "./../../packages/design-system-react-native/src/components/Button/variants/ButtonSecondary/ButtonSecondary.stories.tsx": require("../../../packages/design-system-react-native/src/components/Button/variants/ButtonSecondary/ButtonSecondary.stories.tsx"),
    "./../../packages/design-system-react-native/src/components/Button/variants/ButtonTertiary/ButtonTertiary.stories.tsx": require("../../../packages/design-system-react-native/src/components/Button/variants/ButtonTertiary/ButtonTertiary.stories.tsx"),
    "./../../packages/design-system-react-native/src/components/ButtonIcon/ButtonIcon.stories.tsx": require("../../../packages/design-system-react-native/src/components/ButtonIcon/ButtonIcon.stories.tsx"),
    "./../../packages/design-system-react-native/src/components/Icon/Icon.stories.tsx": require("../../../packages/design-system-react-native/src/components/Icon/Icon.stories.tsx"),
    "./../../packages/design-system-react-native/src/components/Text/Text.stories.tsx": require("../../../packages/design-system-react-native/src/components/Text/Text.stories.tsx"),
    "./../../packages/design-system-react-native/src/components/TextButton/TextButton.stories.tsx": require("../../../packages/design-system-react-native/src/components/TextButton/TextButton.stories.tsx"),
    "./../../packages/design-system-react-native/src/primitives/AvatarBase/AvatarBase.stories.tsx": require("../../../packages/design-system-react-native/src/primitives/AvatarBase/AvatarBase.stories.tsx"),
    "./../../packages/design-system-react-native/src/primitives/Blockies/Blockies.stories.tsx": require("../../../packages/design-system-react-native/src/primitives/Blockies/Blockies.stories.tsx"),
    "./../../packages/design-system-react-native/src/primitives/ButtonAnimated/ButtonAnimated.stories.tsx": require("../../../packages/design-system-react-native/src/primitives/ButtonAnimated/ButtonAnimated.stories.tsx"),
    "./../../packages/design-system-react-native/src/primitives/ButtonBase/ButtonBase.stories.tsx": require("../../../packages/design-system-react-native/src/primitives/ButtonBase/ButtonBase.stories.tsx"),
    "./../../packages/design-system-react-native/src/primitives/ImageOrSvg/ImageOrSvg.stories.tsx": require("../../../packages/design-system-react-native/src/primitives/ImageOrSvg/ImageOrSvg.stories.tsx"),
    "./../../packages/design-system-react-native/src/primitives/Jazzicon/Jazzicon.stories.tsx": require("../../../packages/design-system-react-native/src/primitives/Jazzicon/Jazzicon.stories.tsx"),
    "./../../packages/design-system-react-native/src/primitives/TextOrChildren/TextOrChildren.stories.tsx": require("../../../packages/design-system-react-native/src/primitives/TextOrChildren/TextOrChildren.stories.tsx"),
    "./../../packages/design-system-react-native/src/temp-components/Spinner/Spinner.stories.tsx": require("../../../packages/design-system-react-native/src/temp-components/Spinner/Spinner.stories.tsx"),
  };
};

configure(getStories, module, false);
