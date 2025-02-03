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
    "./../../packages/design-system-react-native/src/components/Icon/Icon.stories.tsx": require("../../../packages/design-system-react-native/src/components/Icon/Icon.stories.tsx"),
    "./../../packages/design-system-react-native/src/components/Text/Text.stories.tsx": require("../../../packages/design-system-react-native/src/components/Text/Text.stories.tsx"),
    "./../../packages/design-system-react-native/src/components/TextButton/TextButton.stories.tsx": require("../../../packages/design-system-react-native/src/components/TextButton/TextButton.stories.tsx"),
    "./../../packages/design-system-react-native/src/primitives/ButtonAnimated/ButtonAnimated.stories.tsx": require("../../../packages/design-system-react-native/src/primitives/ButtonAnimated/ButtonAnimated.stories.tsx"),
    "./../../packages/design-system-react-native/src/primitives/TextOrChildren/TextOrChildren.stories.tsx": require("../../../packages/design-system-react-native/src/primitives/TextOrChildren/TextOrChildren.stories.tsx"),
    "./../../packages/design-system-react-native/src/temp-components/Spinner/Spinner.stories.tsx": require("../../../packages/design-system-react-native/src/temp-components/Spinner/Spinner.stories.tsx"),
  };
};

configure(getStories, module, false);
