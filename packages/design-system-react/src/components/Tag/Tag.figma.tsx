// import figma needs to remain as figma otherwise it breaks code connect
// eslint-disable-next-line import-x/no-named-as-default
import figma from '@figma/code-connect';
import { IconName, TagSeverity } from '@metamask/design-system-shared';
import React from 'react';

import { Tag } from './Tag';

/**
 * React implementation of Tag (`figma.connect` for Figma Dev Mode).
 *
 * [MMDS Tag in Figma](https://www.figma.com/design/1D6tnzXqWgnUC3spaAOELN/%F0%9F%A6%8A-MMDS-Components?node-id=13223-1347)
 *
 * Root Figma props: `severity`, `state (Figma only)`, `showStartIcon (Figma only)`,
 * `showEndIcon (Figma only)`, `children`. Property names must match Dev Mode exactly.
 *
 * - **`state (Figma only)`** is visual-only in Figma; `Tag` has no matching prop.
 * - **`showStartIcon` / `showEndIcon`** map to `startIconName` / `endIconName` with placeholder `IconName.Tag`.
 */
figma.connect(
  Tag,
  'https://www.figma.com/design/1D6tnzXqWgnUC3spaAOELN/%F0%9F%A6%8A-MMDS-Components?node-id=13223-1347',
  {
    props: {
      severity: figma.enum('severity', {
        neutral: TagSeverity.Neutral,
        danger: TagSeverity.Danger,
        info: TagSeverity.Info,
        success: TagSeverity.Success,
        warning: TagSeverity.Warning,
      }),
      state: figma.enum('state (Figma only)', {
        default: 'default',
        hover: 'hover',
        pressed: 'pressed',
      }),
      children: figma.string('children'),
      startIconName: figma.boolean('showStartIcon (Figma only)', {
        true: IconName.Tag,
        false: undefined,
      }),
      endIconName: figma.boolean('showEndIcon (Figma only)', {
        true: IconName.Tag,
        false: undefined,
      }),
    },
    example: ({
      severity,
      state: _figmaState,
      children,
      startIconName,
      endIconName,
    }) => (
      <Tag
        severity={severity}
        startIconName={startIconName}
        endIconName={endIconName}
      >
        {children}
      </Tag>
    ),
  },
);
