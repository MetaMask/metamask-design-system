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

Optional node to the right of `title` in the inner row. Only visible when `title` is renderable.

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

### `startIconName`

Optional icon name for the start of the **outer** row. When a name is resolved (including via `startIconProps.name`), an `Icon` is rendered instead of `startAccessory`. The icon defaults to `IconSize.Md` and `IconColor.IconDefault`; override with `startIconProps`.

| TYPE       | REQUIRED | DEFAULT     |
| ---------- | -------- | ----------- |
| `IconName` | No       | `undefined` |

```tsx
import { SectionHeader, IconName } from '@metamask/design-system-react-native';

<SectionHeader title="Networks" startIconName={IconName.Setting} />;
```

### `endIconName`

Optional icon name for the end of the **outer** row. When a name is resolved (including via `endIconProps.name`), an `Icon` is rendered instead of `endAccessory`. The icon defaults to `IconSize.Md` and `IconColor.IconDefault`; override with `endIconProps`.

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

| TYPE                 | REQUIRED | DEFAULT     |
| -------------------- | -------- | ----------- |
| `Partial<IconProps>` | No       | `undefined` |

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

| TYPE                 | REQUIRED | DEFAULT     |
| -------------------- | -------- | ----------- |
| `Partial<IconProps>` | No       | `undefined` |

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

When `true`, wraps the header in a `Pressable` so the full row is tappable. The header opacity reduces to `0.7` while pressed. An `IconName.ArrowRight` end icon is rendered by default unless `endIconName`, `endIconProps.name`, or `endAccessory` is provided. In this mode, the component accepts `PressableProps` (for example `onPress`, `disabled`, and accessibility props) on the outer wrapper. When `false` or omitted, the outer wrapper is a static `BoxRow` with `ViewProps`.

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
