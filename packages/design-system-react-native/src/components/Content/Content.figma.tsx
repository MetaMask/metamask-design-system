// import figma needs to remain as figma otherwise it breaks code connect
// eslint-disable-next-line import-x/no-named-as-default
import figma from '@figma/code-connect';
import { ContentVerticalAlignment } from '@metamask/design-system-shared';
import React from 'react';

import { Content } from './Content';

/**
 * React Native implementation of Content (`figma.connect` for Figma Dev Mode).
 *
 * Root Figma props: `verticalAlignment`, `title`, `avatar`,
 * `show description (Figma only)`, `description`,
 * `show value (Figma only)`, `value`,
 * `show subvalue (Figma only)`, `subvalue`,
 * `show titleStartAccessory (Figma only)`, `titleStartAccessory`,
 * `show titleEndAccessory (Figma only)`, `titleEndAccessory`,
 * `show descriptionStartAccessory (Figma only)`, `descriptionStartAccessory`,
 * `show descriptionEndAccessory (Figma only)`, `descriptionEndAccessory`,
 * `show valueStartAccessory (Figma only)`, `valueStartAccessory`,
 * `show valueEndAccessory (Figma only)`, `valueEndAccessory`,
 * `show subvalueStartAccessory (Figma only)`, `subvalueStartAccessory`,
 * `show subvalueEndAccessory (Figma only)`, `subvalueEndAccessory`.
 *
 * - **`show X (Figma only)`** boolean controls visibility in Figma only; in code,
 *   pass `undefined` (omit the prop) to hide a slot.
 * - **`action (Figma only)`** is visual-only in Figma; `Content` has no matching prop.
 */
figma.connect(
  Content,
  'https://www.figma.com/design/0GipXMImYPyEmNUvnyI5v8/%F0%9F%A6%8A-MMDS-Components?node-id=16063-21871',
  {
    props: {
      verticalAlignment: figma.enum('verticalAlignment', {
        center: ContentVerticalAlignment.Center,
        top: ContentVerticalAlignment.Top,
      }),
      title: figma.string('title'),
      avatar: figma.instance('avatar'),
      description: figma.boolean('show description (Figma only)', {
        true: figma.string('description'),
        false: undefined,
      }),
      value: figma.boolean('show value (Figma only)', {
        true: figma.string('value'),
        false: undefined,
      }),
      subvalue: figma.boolean('show subvalue (Figma only)', {
        true: figma.string('subvalue'),
        false: undefined,
      }),
      titleStartAccessory: figma.boolean('show titleStartAccessory (Figma only)', {
        true: figma.instance('titleStartAccessory'),
        false: undefined,
      }),
      titleEndAccessory: figma.boolean('show titleEndAccessory (Figma only)', {
        true: figma.instance('titleEndAccessory'),
        false: undefined,
      }),
      descriptionStartAccessory: figma.boolean(
        'show descriptionStartAccessory (Figma only)',
        {
          true: figma.instance('descriptionStartAccessory'),
          false: undefined,
        },
      ),
      descriptionEndAccessory: figma.boolean(
        'show descriptionEndAccessory (Figma only)',
        {
          true: figma.instance('descriptionEndAccessory'),
          false: undefined,
        },
      ),
      valueStartAccessory: figma.boolean('show valueStartAccessory (Figma only)', {
        true: figma.instance('valueStartAccessory'),
        false: undefined,
      }),
      valueEndAccessory: figma.boolean('show valueEndAccessory (Figma only)', {
        true: figma.instance('valueEndAccessory'),
        false: undefined,
      }),
      subvalueStartAccessory: figma.boolean(
        'show subvalueStartAccessory (Figma only)',
        {
          true: figma.instance('subvalueStartAccessory'),
          false: undefined,
        },
      ),
      subvalueEndAccessory: figma.boolean('show subvalueEndAccessory (Figma only)', {
        true: figma.instance('subvalueEndAccessory'),
        false: undefined,
      }),
    },
    example: ({
      verticalAlignment,
      title,
      avatar,
      description,
      value,
      subvalue,
      titleStartAccessory,
      titleEndAccessory,
      descriptionStartAccessory,
      descriptionEndAccessory,
      valueStartAccessory,
      valueEndAccessory,
      subvalueStartAccessory,
      subvalueEndAccessory,
    }) => (
      <Content
        verticalAlignment={verticalAlignment}
        title={title}
        avatar={avatar}
        description={description}
        value={value}
        subvalue={subvalue}
        titleStartAccessory={titleStartAccessory}
        titleEndAccessory={titleEndAccessory}
        descriptionStartAccessory={descriptionStartAccessory}
        descriptionEndAccessory={descriptionEndAccessory}
        valueStartAccessory={valueStartAccessory}
        valueEndAccessory={valueEndAccessory}
        subvalueStartAccessory={subvalueStartAccessory}
        subvalueEndAccessory={subvalueEndAccessory}
      />
    ),
  },
);
