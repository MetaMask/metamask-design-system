# SectionHeader

SectionHeader is used to introduce a horizontal section heading with optional leading and trailing controls and an optional accessory beside the title. When `isInteractive` is `true`, the entire header becomes pressable.

```tsx
import { SectionHeader } from '@metamask/design-system-react-native';

<SectionHeader title="Assets" />;
```

## Props

### `title`

The section title for the inner row. When `title` is a string, it is rendered with `TextVariant.HeadingMd` and `TextColor.TextDefault` (merged with `titleProps`). Pass a `ReactNode` for custom content. The inner row renders only when `title` is renderable (`null`, `undefined`, `false`, and `''` are not); a renderable `titleAccessory` without a renderable `title` does not show the inner row.

| TYPE        | REQUIRED | DEFAULT |
| ----------- | -------- | ------- |
| `ReactNode` | Yes      | —       |

```tsx
import { SectionHeader } from '@metamask/design-system-react-native';

<SectionHeader title="Tokens" />;
```

### `titleAccessory`

Optional node to the right of `title` in the **inner** title row. Only visible when `title` is renderable. Use for metadata or actions tied to the title itself (for example an info icon beside "Tokens"). **Do not** use for trailing row icons such as chevrons or navigation arrows; use `endIconName` / `endIconProps` or `endAccessory` on the **outer** header row instead.

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

```tsx
import {
  SectionHeader,
  Icon,
  IconName,
  IconSize,
} from '@metamask/design-system-react-native';

<SectionHeader
  title="Tokens"
  titleAccessory={<Icon name={IconName.Info} size={IconSize.Sm} />}
/>;
```

### `children`

Optional full-width content rendered below the header row. Use for subtitles or other supporting content.

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

```tsx
import {
  SectionHeader,
  Text,
  TextColor,
  TextVariant,
} from '@metamask/design-system-react-native';

<SectionHeader title="Tokens">
  <Text variant={TextVariant.BodySm} color={TextColor.TextAlternative}>
    12 assets
  </Text>
</SectionHeader>;
```

## Accessory slots

`SectionHeader` has two horizontal rows of concern:

| Slot                 | Props                                                              | Use for                                                                   |
| -------------------- | ------------------------------------------------------------------ | ------------------------------------------------------------------------- |
| **Inner title row**  | `titleAccessory`                                                   | Inline metadata beside the title (info icon, badge, short label)          |
| **Outer header row** | `startIconName` / `startAccessory`, `endIconName` / `endAccessory` | Leading avatars or icons; trailing chevrons, actions, or custom end nodes |

When implementing designs or stories, map Figma trailing chevrons (`>`, `ArrowRight`) to `endIconName` (and `endIconProps`), not `titleAccessory`—even when the chevron appears visually close to the title.

```tsx
// Correct — trailing chevron on the outer row
<SectionHeader
  title="How it works"
  endIconName={IconName.ArrowRight}
  endIconProps={{ size: IconSize.Sm }}
/>

// Incorrect — chevron belongs on the outer row, not the title row
<SectionHeader
  title="How it works"
  titleAccessory={<Icon name={IconName.ArrowRight} size={IconSize.Sm} />}
/>
```

See the `Children` Storybook story for a title + description + trailing chevron example.

### `startIconName`

Optional icon name for the start of the **outer** row. When set, an `Icon` is rendered instead of `startAccessory`. The icon defaults to `IconSize.Sm` and `IconColor.IconDefault`; override with `startIconProps`.

| TYPE       | REQUIRED | DEFAULT     |
| ---------- | -------- | ----------- |
| `IconName` | No       | `undefined` |

```tsx
import { SectionHeader, IconName } from '@metamask/design-system-react-native';

<SectionHeader title="Networks" startIconName={IconName.Setting} />;
```

### `endIconName`

Optional icon name for the end of the **outer** header row. When set, an `Icon` is rendered instead of `endAccessory`. The icon defaults to `IconSize.Sm` and `IconColor.IconAlternative`; override with `endIconProps`. Use for trailing chevrons, disclosure arrows, and other row-level affordances (including beside titles like "How it works"). **Do not** place these icons in `titleAccessory`.

| TYPE       | REQUIRED | DEFAULT     |
| ---------- | -------- | ----------- |
| `IconName` | No       | `undefined` |

```tsx
import { SectionHeader, IconName } from '@metamask/design-system-react-native';

<SectionHeader title="Networks" endIconName={IconName.ArrowRight} />;
```

### `startAccessory`

Optional custom node before the title row on the **outer** row. Used when no start icon name is resolved.

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

```tsx
import { SectionHeader, Box } from '@metamask/design-system-react-native';

<SectionHeader
  title="Activity"
  startAccessory={<Box twClassName="h-6 w-6 rounded-full bg-primary-default" />}
/>;
```

### `endAccessory`

Optional custom node after the title row on the **outer** row. Used when no end icon name is resolved.

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

```tsx
import { SectionHeader, Box } from '@metamask/design-system-react-native';

<SectionHeader
  title="Notifications"
  endAccessory={<Box twClassName="h-6 w-6 rounded-full bg-error-default" />}
/>;
```

### `titleProps`

Optional props merged into the inner row `Text` when `title` is a string.

| TYPE                                   | REQUIRED | DEFAULT     |
| -------------------------------------- | -------- | ----------- |
| `Omit<Partial<TextProps>, 'children'>` | No       | `undefined` |

```tsx
import { SectionHeader } from '@metamask/design-system-react-native';

<SectionHeader title="Assets" titleProps={{ testID: 'section-title' }} />;
```

### `titleWrapperProps`

Optional props spread onto the inner `BoxRow` (excluding `children`, `endAccessory`, and `textProps`, which SectionHeader sets).

| TYPE                                                                      | REQUIRED | DEFAULT     |
| ------------------------------------------------------------------------- | -------- | ----------- |
| `Omit<Partial<BoxRowProps>, 'children' \| 'endAccessory' \| 'textProps'>` | No       | `undefined` |

```tsx
import { SectionHeader } from '@metamask/design-system-react-native';

<SectionHeader
  title="Assets"
  titleWrapperProps={{ testID: 'section-title-row' }}
/>;
```

### `startIconProps`

Optional props merged into the start `Icon` when a start icon is shown.

| TYPE                               | REQUIRED | DEFAULT     |
| ---------------------------------- | -------- | ----------- |
| `Omit<Partial<IconProps>, 'name'>` | No       | `undefined` |

```tsx
import {
  SectionHeader,
  IconName,
  IconSize,
} from '@metamask/design-system-react-native';

<SectionHeader
  title="Networks"
  startIconName={IconName.Setting}
  startIconProps={{ size: IconSize.Lg }}
/>;
```

### `endIconProps`

Optional props merged into the end `Icon` when an end icon is shown.

| TYPE                               | REQUIRED | DEFAULT     |
| ---------------------------------- | -------- | ----------- |
| `Omit<Partial<IconProps>, 'name'>` | No       | `undefined` |

```tsx
import {
  SectionHeader,
  IconName,
  IconSize,
} from '@metamask/design-system-react-native';

<SectionHeader
  title="Networks"
  endIconName={IconName.ArrowRight}
  endIconProps={{ size: IconSize.Lg }}
/>;
```

### `isInteractive`

When `true`, wraps the header in a `Pressable` so the full row is tappable. The header opacity reduces to `0.7` while pressed. An `IconName.ArrowRight` end icon is rendered by default unless `endIconName` or `endAccessory` is provided. `accessibilityRole` defaults to `button` when not provided. In this mode, the component accepts `PressableProps` (for example `onPress`, `disabled`, and accessibility props) on the outer wrapper. When `false` or omitted, the outer wrapper is a static `BoxRow` with `ViewProps`.

| TYPE      | REQUIRED | DEFAULT |
| --------- | -------- | ------- |
| `boolean` | No       | `false` |

```tsx
import { SectionHeader, IconName } from '@metamask/design-system-react-native';

<SectionHeader title="Assets" isInteractive onPress={() => {}} />;
```

### `twClassName`

Use the `twClassName` prop to add Tailwind CSS classes to the **outer** wrapper (`BoxRow` or `Pressable`). These classes will be merged with the component's default classes using `tw.style()`, allowing you to:

- Add new styles that don't exist in the default component
- Override the component's default styles when needed

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

```tsx
import { SectionHeader } from '@metamask/design-system-react-native';

// Add additional styles
<SectionHeader twClassName="mt-4" title="Assets" />

// Override default styles
<SectionHeader twClassName="px-6" title="Assets" />
```

### `style`

Use the `style` prop to customize the component's appearance with React Native styles. For consistent styling, prefer using `twClassName` with Tailwind classes when possible. Use `style` with `tw.style()` for conditionals or dynamic values. Other wrapper props (for example `testID` and accessibility fields) are accepted on the outer `BoxRow` when `isInteractive` is omitted, or on the outer `Pressable` when `isInteractive` is `true`.

| TYPE                   | REQUIRED | DEFAULT     |
| ---------------------- | -------- | ----------- |
| `StyleProp<ViewStyle>` | No       | `undefined` |

```tsx
import { useTailwind } from '@metamask/design-system-twrnc-preset';

import { SectionHeader } from '@metamask/design-system-react-native';

export const ConditionalExample = ({ isActive }: { isActive: boolean }) => {
  const tw = useTailwind();

  return (
    <SectionHeader
      title="Assets"
      style={tw.style('opacity-90', isActive && 'opacity-100')}
    />
  );
};
```

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
