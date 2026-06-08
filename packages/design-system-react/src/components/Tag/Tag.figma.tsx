// import figma needs to remain as figma otherwise it breaks code connect
// eslint-disable-next-line import-x/no-named-as-default
import figma from '@figma/code-connect';
import { TagSeverity } from '@metamask/design-system-shared';
import React from 'react';

import { IconName } from '../../types';

import { Tag } from './Tag';

/**
 * React implementation of Tag (`figma.connect` for Figma Dev Mode).
 *
 * [MMDS Tag in Figma](https://www.figma.com/design/1D6tnzXqWgnUC3spaAOELN/%F0%9F%A6%8A-MMDS-Components?node-id=12339-6553)
 */
figma.connect(
  Tag,
  'https://www.figma.com/design/1D6tnzXqWgnUC3spaAOELN/%F0%9F%A6%8A-MMDS-Components?node-id=12339-6553',
  {
    props: {
      severity: figma.enum('severity', {
        neutral: TagSeverity.Neutral,
        danger: TagSeverity.Danger,
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
