# SectionBase

SectionBase is a layout component that renders an optional title, optional description, and children in a vertical column with 12px gap. It extends BoxProps for layout and spacing.

```tsx
import { SectionBase, Text } from '@metamask/design-system-react-native';

<SectionBase title="Section Title" description="Optional description text.">
  <Text>Section content</Text>
</SectionBase>;
```

## Props

### `title`

Optional title (string or node) rendered at the top as-is. Pass a `Text` component or other node if you need specific typography.

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

```tsx
<SectionBase title="Section Title" />
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
