# SectionBase

SectionBase is a layout component that renders an optional title (with start/end accessories), optional description, and children in a vertical column with 12px gap. It extends BoxProps for layout and spacing.

```tsx
import { SectionBase, Text } from '@metamask/design-system-react-native';

<SectionBase title="Section Title" description="Optional description text.">
  <Text>Section content</Text>
</SectionBase>;
```

## Props

### `title`

Optional title (string or node) rendered at the top. When a string, it uses `TextVariant.HeadingLg` and `TextColor.TextDefault` by default; `titleProps` can override.

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

```tsx
<SectionBase title="Section Title" />
```

### `titleStartAccessory`

Optional node rendered before the title (e.g. icon).

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

```tsx
import { Icon, IconName, IconSize } from '@metamask/design-system-react-native';

<SectionBase
  title="Title"
  titleStartAccessory={<Icon name={IconName.Info} size={IconSize.Sm} />}
/>;
```

### `titleEndAccessory`

Optional node rendered after the title (e.g. badge, icon).

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

```tsx
<SectionBase
  title="Title"
  titleEndAccessory={<Icon name={IconName.Add} size={IconSize.Sm} />}
/>
```

### `titleProps`

Optional props for the title when `title` is a string. Defaults: `TextVariant.HeadingLg`, `TextColor.TextDefault`.

| TYPE                                   | REQUIRED | DEFAULT     |
| -------------------------------------- | -------- | ----------- |
| `Omit<Partial<TextProps>, 'children'>` | No       | `undefined` |

```tsx
<SectionBase title="Custom title" titleProps={{ testID: 'section-title' }} />
```

### `description`

Optional description (string or node) below the title. When a string, uses `TextVariant.BodyMd` and `TextColor.TextAlternative` by default; `descriptionProps` can override.

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

```tsx
<SectionBase description="Description text." />
```

### `descriptionProps`

Optional props for the description when `description` is a string. Defaults: `TextVariant.BodyMd`, `TextColor.TextAlternative`.

| TYPE                                   | REQUIRED | DEFAULT     |
| -------------------------------------- | -------- | ----------- |
| `Omit<Partial<TextProps>, 'children'>` | No       | `undefined` |

```tsx
<SectionBase
  description="Description"
  descriptionProps={{ testID: 'section-description' }}
/>
```

### `children`

Optional content rendered below the description.

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

```tsx
<SectionBase title="Title">
  <Text>Custom content</Text>
</SectionBase>
```

### `twClassName`

Optional Tailwind class names applied to the root Box. Merged with the component's default layout (flex column, gap).

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

```tsx
<SectionBase title="Title" twClassName="mt-4" />
```

### BoxProps

SectionBase extends `BoxProps`, so you can pass margin, padding, gap overrides, flex props, backgroundColor, borderColor, and other ViewProps (e.g. `testID`, `accessibilityLabel`).

```tsx
<SectionBase title="Title" testID="my-section" padding={4} marginBottom={3} />
```

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
