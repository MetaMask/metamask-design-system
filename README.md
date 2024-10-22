# MetaMask Design System

The MetaMask Design System monorepo

## Modules

This repository contains the following packages [^fn1]:

<!-- start package list -->

- [`@metamask/design-system-react-native`](packages/design-system-react-native)
- [`@metamask/design-system-tailwind-preset`](packages/design-system-tailwind-preset)
- [`@metamask/metamask-module-template`](packages/metamask-module-template)

<!-- end package list -->

Or, in graph form [^fn1]:

<!-- start dependency graph -->

```mermaid
%%{ init: { 'flowchart': { 'curve': 'bumpX' } } }%%
graph LR;
linkStyle default opacity:0.5
  design_system_react_native(["@metamask/design-system-react-native"]);
  design_system_tailwind_preset(["@metamask/design-system-tailwind-preset"]);
  metamask_module_template(["@metamask/metamask-module-template"]);
```

<!-- end dependency graph -->

Refer to individual packages for usage instructions.

## Learn more

For instructions on performing common development-related tasks, see [contributing to the monorepo](./docs/contributing.md).

[^fn1]: The package list and dependency graph should be programmatically generated by running `yarn update-readme-content`.
