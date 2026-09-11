/// <reference types="@figma/code-connect/figma-types" />
// url=https://www.figma.com/design/1D6tnzXqWgnUC3spaAOELN/%F0%9F%A6%8A-MMDS-Components?node-id=18237-451
// component=AvatarAccount

/**
 * React web Code Connect template for AvatarAccount (Template API).
 *
 * [MMDS AvatarAccount in Figma](https://www.figma.com/design/1D6tnzXqWgnUC3spaAOELN/%F0%9F%A6%8A-MMDS-Components?node-id=18237-451)
 */

import figma from 'figma';

const instance = figma.selectedInstance;

const size = instance.getEnum('size', {
  Xs: figma.helpers.react.identifier('AvatarAccountSize.Xs'),
  Sm: figma.helpers.react.identifier('AvatarAccountSize.Sm'),
  Md: figma.helpers.react.identifier('AvatarAccountSize.Md'),
  Lg: figma.helpers.react.identifier('AvatarAccountSize.Lg'),
  Xl: figma.helpers.react.identifier('AvatarAccountSize.Xl'),
});

const variant = instance.getEnum('variant', {
  blockies: figma.helpers.react.identifier('AvatarAccountVariant.Blockies'),
  jazzicon: figma.helpers.react.identifier('AvatarAccountVariant.Jazzicon'),
  maskicon: figma.helpers.react.identifier('AvatarAccountVariant.Maskicon'),
});

export default {
  id: 'AvatarAccount',
  imports: [
    "import { AvatarAccount, AvatarAccountSize, AvatarAccountVariant } from '@metamask/design-system-react';",
  ],
  example: figma.code`<AvatarAccount
  address="0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8"
  size={${size}}
  variant={${variant}}
/>`,
  metadata: { nestable: true },
};
