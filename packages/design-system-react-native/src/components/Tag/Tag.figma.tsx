// import figma needs to remain as figma otherwise it breaks code connect
// eslint-disable-next-line import-x/no-named-as-default
import figma from '@figma/code-connect';
import { TagSeverity } from '@metamask/design-system-shared';
import React from 'react';

import { IconName } from '../Icon';

import { Tag } from './Tag';

/**
 * Code Connect for Tag (React Native) — [MMDS Tag](https://www.figma.com/design/1D6tnzXqWgnUC3spaAOELN/%F0%9F%A6%8A-MMDS-Components?node-id=12339-6553).
 *
 * Root Figma props: `severity`, `state`, `icons`. The first argument to each `figma.*`
 * helper must match Dev Mode property names exactly.
 *
 * - **`state`** (default / hover / pressed) is visual-only in Figma; `Tag` has no matching prop yet.
 * - **`icons`** drives `startIconName` / `endIconName` with a placeholder icon (`IconName.Tag`).
 * - Label copy comes from the nested **Label** instance (`Label text`), same pattern as `Checkbox.figma.tsx`.
 */
figma.connect(
  Tag,
  'https://www.figma.com/design/1D6tnzXqWgnUC3spaAOELN/%F0%9F%A6%8A-MMDS-Components?node-id=12339-6553',
  {
    props: {
      severity: figma.enum('severity', {
        neutral: TagSeverity.Neutral,
        error: TagSeverity.Error,
        info: TagSeverity.Info,
        success: TagSeverity.Success,
        warning: TagSeverity.Warning,
      }),
      state: figma.enum('state', {
        default: 'default',
        hover: 'hover',
        pressed: 'pressed',
      }),
      icons: figma.enum('icons', {
        none: 'none',
        start: 'start',
        'start & end': 'both',
      }),
      label: figma.nestedProps('Label', {
        text: figma.string('Label text'),
      }),
    },
    example: ({ severity, state: _figmaState, icons, label }) => {
      const startIconName =
        icons === 'start' || icons === 'both' ? IconName.Tag : undefined;
      const endIconName = icons === 'both' ? IconName.Tag : undefined;

      return (
        <Tag
          severity={severity}
          startIconName={startIconName}
          endIconName={endIconName}
        >
          {label.text}
        </Tag>
      );
    },
  },
);
