# Tag

A tag is a compact, non-interactive or interactive label used to categorize, annotate, or highlight metadata. Tags help users quickly scan, filter, and understand content relationships at a glance.

**Figma:** [MMDS Components — Tag](https://www.figma.com/design/1D6tnzXqWgnUC3spaAOELN/%F0%9F%A6%8A-MMDS-Components?node-id=12339-1167)

```tsx
import { Tag } from '@metamask/design-system-react-native';

<Tag>Default Example</Tag>;
```

## Props

### `severity`

Semantic emphasis for background, string child text color, and icons. Values use `TagSeverity` from `@metamask/design-system-shared` (same pattern as `BannerAlert` / `IconAlert`).

Available values:

- `TagSeverity.Neutral`
- `TagSeverity.Success`
- `TagSeverity.Error`
- `TagSeverity.Warning`
- `TagSeverity.Info`

| TYPE           | REQUIRED | DEFAULT               |
| -------------- | -------- | --------------------- |
| `TagSeverity?` | No       | `TagSeverity.Neutral` |

```tsx
import { Tag } from '@metamask/design-system-react-native';
import { TagSeverity } from '@metamask/design-system-shared';

<Tag severity={TagSeverity.Success}>Success</Tag>
<Tag severity={TagSeverity.Error}>Error</Tag>
```

### `children`

Main content. String children are rendered with design-system `Text` (`BodyXs`, medium weight, severity-based color). Other React nodes are rendered as-is (use your own `Text` or layout inside when needed).

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

```tsx
import { Tag } from '@metamask/design-system-react-native';
import { Text } from 'react-native';

<Tag>
  <Text>Custom children content</Text>
</Tag>;
```

### `startIconName` / `endIconName`

Optional `IconName` for small icons at the start or end of the tag (`IconSize.Xs` by default). Prefer these when using built-in icons; use `startIconProps` / `endIconProps` for overrides (including `name` instead of `startIconName` / `endIconName`).

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `IconName?` | No       | `undefined` |

```tsx
import { IconName, Tag } from '@metamask/design-system-react-native';

<Tag startIconName={IconName.Warning}>With start icon</Tag>
<Tag endIconName={IconName.ArrowRight}>With end icon</Tag>
```

### `startIconProps` / `endIconProps`

Optional partial `IconProps` passed through to the underlying `Icon`. You may set `name` here instead of `startIconName` / `endIconName`.

| TYPE                  | REQUIRED | DEFAULT     |
| --------------------- | -------- | ----------- |
| `Partial<IconProps>?` | No       | `undefined` |

### `startAccessory` / `endAccessory`

Optional React nodes shown when no start/end icon is resolved (e.g. custom glyph or badge). Icons take precedence when `startIconName` / `endIconName` (or `name` in icon props) is set.

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

```tsx
import { Tag } from '@metamask/design-system-react-native';
import { Text } from 'react-native';

<Tag startAccessory={<Text>→</Text>}>With accessory</Tag>;
```

### `testID`

Test identifier for selecting the component in tests.

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

### `twClassName`

Use the `twClassName` prop to add Tailwind CSS classes to the component. These classes will be merged with the component's default classes using `twMerge`, allowing you to:

- Add new styles that don't exist in the default component
- Override the component's default styles when needed

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

```tsx
import { Tag } from '@metamask/design-system-react-native';
import { Text } from 'react-native';

// Add additional styles
<Tag twClassName="mt-4">
  <Text>Custom Background</Text>
</Tag>

// Override default styles
<Tag twClassName="bg-error-default">
  <Text>Override Background</Text>
</Tag>
```

### `style`

Use the `style` prop to customize the component's appearance with React Native styles. For consistent styling, prefer using `twClassName` with Tailwind classes when possible. Use `style` with `tw.style()` for conditionals or dynamic values.

| TYPE                   | REQUIRED | DEFAULT     |
| ---------------------- | -------- | ----------- |
| `StyleProp<ViewStyle>` | No       | `undefined` |

```tsx
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { Tag } from '@metamask/design-system-react-native';
import { Text } from 'react-native';

export const ConditionalExample = ({ isActive }: { isActive: boolean }) => {
  const tw = useTailwind();

  return (
    <Tag style={tw.style('bg-default', isActive && 'bg-success-default')}>
      <Text>Conditional styling</Text>
    </Tag>
  );
};
```

## Accessibility

- String `children` are rendered with design-system typography inside the layout row, so assistive technologies can treat visible label text like normal copy. Prefer clear, concise labels; do not rely on color or icons alone to convey meaning.
- Icons are decorative unless your app assigns accessibility labels on the underlying `Icon` via `startIconProps` / `endIconProps` when needed.
- `testID` is intended for automated tests only; it does not replace accessible names for users.

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
