# SectionSocial

SectionSocial is a section layout component for social or source-attribution cards. It composes SectionBase (without a title), renders an optional description with default TextDefault color, and when any attribution-related prop is provided, an Attribution row with optional avatar (startAccessory), name/timestamp text, and source image (endAccessory). The root has default styling: background section, 16px padding, and 16px border radius.

```tsx
import { SectionSocial } from '@metamask/design-system-react-native';

<SectionSocial
  description="BREAKING: Elon Musk has reportedly become the first person in history to hit a $1 TRILLION net worth."
  attributionName="@eth_taco"
  attributionTimestamp="1m ago"
  attributionAvatar={{ uri: 'https://example.com/avatar.png' }}
  source={{ uri: 'https://example.com/source-logo.png' }}
/>;
```

## Props

### `description`

Optional description (string or node) rendered at the top of the section. When provided, it uses `TextVariant.BodyMd` and `TextColor.TextDefault` by default; `descriptionProps` can override.

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

```tsx
<SectionSocial description="Post or card content." />
```

### `descriptionProps`

Optional props for the description when `description` is a string. Default (when description is set): `TextColor.TextDefault`; you can override variant, color, testID, etc.

| TYPE                                   | REQUIRED | DEFAULT     |
| -------------------------------------- | -------- | ----------- |
| `Partial<Omit<TextProps, 'children'>>` | No       | `undefined` |

### `attributionAvatar`

Optional image source for the attribution avatar. When provided (with any other attribution prop), an Attribution row is rendered with this as the startAccessory: a 16px circular avatar (AvatarBase + ImageOrSvg).

| TYPE            | REQUIRED | DEFAULT     |
| --------------- | -------- | ----------- |
| `ImageOrSvgSrc` | No       | `undefined` |

```tsx
<SectionSocial
  attributionName="@handle"
  attributionAvatar={{ uri: 'https://example.com/avatar.png' }}
/>
```

### `attributionName`

Optional attribution name (e.g. @handle). When provided with `attributionTimestamp`, the Attribution children are combined as `${attributionName} • ${attributionTimestamp}`.

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

### `attributionTimestamp`

Optional attribution timestamp (e.g. "1m ago"). When provided with `attributionName`, the Attribution children are combined as `${attributionName} • ${attributionTimestamp}`.

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

### `source`

Optional image source for the end accessory (e.g. source or platform logo). When provided, an Attribution row is rendered with a 16px ImageOrSvg as endAccessory.

| TYPE            | REQUIRED | DEFAULT     |
| --------------- | -------- | ----------- |
| `ImageOrSvgSrc` | No       | `undefined` |

```tsx
<SectionSocial
  attributionName="@eth_taco"
  attributionTimestamp="1m ago"
  source={{ uri: 'https://example.com/x-logo.png' }}
/>
```

### `children`

Optional content rendered below the description and below the Attribution row (when present).

### `twClassName`

Optional Tailwind class names applied to the root Box. Merged with the default `bg-section p-4 rounded-2xl`.

### BoxProps

SectionSocial extends SectionBaseProps (with `title` omitted) and BoxProps, so you can pass margin, padding, testID, accessibilityLabel, and other Box/View props.

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
