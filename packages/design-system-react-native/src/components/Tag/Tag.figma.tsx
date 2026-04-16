// import figma needs to remain as figma otherwise it breaks code connect
// eslint-disable-next-line import-x/no-named-as-default
import figma from '@figma/code-connect';
import React from 'react';

import { IconName } from '../Icon';

import { Tag } from './Tag';

import { TagVariant } from '@metamask/design-system-shared';

/**
 * Code Connect for Tag (React Native).
 * If Dev Mode shows different property names, change the first argument to
 * `figma.enum` / `figma.string` (e.g. Figma `variant` vs code `severity`, `Text` instead of `Label`).
 */

figma.connect(
  Tag,
  'https://www.figma.com/design/1D6tnzXqWgnUC3spaAOELN/%F0%9F%A6%8A-MMDS-Components?node-id=12339-6553',
  {
    props: {
      severity: figma.enum('variant', {
        Neutral: TagVariant.Neutral,
        Success: TagVariant.Success,
        Error: TagVariant.Error,
        Warning: TagVariant.Warning,
        Info: TagVariant.Info,
      }),
      label: figma.string('Label'),
      startIconName: figma.boolean('startIcon (Figma Only)', {
        true: IconName.Tag,
        false: undefined,
      }),
      endIconName: figma.boolean('endIcon (Figma Only)', {
        true: IconName.Tag,
        false: undefined,
      }),
    },
    example: ({ severity, label, startIconName, endIconName }) => (
      <Tag
        severity={severity}
        label={label}
        startIconName={startIconName}
        endIconName={endIconName}
      />
    ),
  },
);
