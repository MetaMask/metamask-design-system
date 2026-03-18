# SectionStandard

SectionStandard is a section layout component that renders an optional title (with optional start accessory and optional pressable row with arrow), optional description, and children. It composes SectionBase and renders the title via TextWithAccessories with default HeadingLg and TextDefault. When `onPressTitle` is provided, the title row is wrapped in a Pressable and an arrow icon is shown as the end accessory.

```tsx
import { SectionStandard, Text } from '@metamask/design-system-react-native';

<SectionStandard title="Section Title" description="Optional description text.">
  <Text>Section content</Text>
</SectionStandard>;
```

## Props

### `title`

Optional title (string or node) rendered at the top. When a string, it is rendered with TextWithAccessories using default `TextVariant.HeadingLg` and `TextColor.TextDefault`; `titleProps` can override. When a node, it is passed through as children of TextWithAccessories (titleProps do not apply).

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

```tsx
<SectionStandard title="Section Title" />
```

### `titleStartAccessory`

Optional node rendered before the title (e.g. icon). Passed to TextWithAccessories as `startAccessory`. Only used when `title` is provided.

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

```tsx
<SectionStandard
  title="Title"
  titleStartAccessory={<Icon name={IconName.Info} size={IconSize.Md} />}
/>
```

### `titleProps`

Optional props for the title when `title` is a string. Defaults: `TextVariant.HeadingLg`, `TextColor.TextDefault`.

| TYPE                                   | REQUIRED | DEFAULT     |
| -------------------------------------- | -------- | ----------- |
| `Partial<Omit<TextProps, 'children'>>` | No       | `undefined` |

```tsx
<SectionStandard
  title="Title"
  titleProps={{ variant: TextVariant.HeadingSm, testID: 'section-title' }}
/>
```

### `onPressTitle`

Optional callback when the title row is pressed. When provided, the title is wrapped in a Pressable and an arrow icon (ArrowRight, size Md, IconAlternative) is rendered as the end accessory. Only has effect when `title` is provided.

| TYPE         | REQUIRED | DEFAULT     |
| ------------ | -------- | ----------- |
| `() => void` | No       | `undefined` |

```tsx
<SectionStandard title="Tap to expand" onPressTitle={() => {}} />
```

### `description`

Optional description (string or node) below the title. Same as SectionBase: when a string, uses `TextVariant.BodyMd` and `TextColor.TextAlternative` by default; `descriptionProps` can override.

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

### `descriptionProps`

Optional props for the description when `description` is a string. Same as SectionBase.

### `children`

Optional content rendered below the description.

### `twClassName`

Optional Tailwind class names applied to the root Box (via SectionBase).

### BoxProps

SectionStandard extends SectionBaseProps (which extends BoxProps), so you can pass margin, padding, testID, accessibilityLabel, and other Box/View props.

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
