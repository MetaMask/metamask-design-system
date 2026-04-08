# TitleStandard

TitleStandard is used to display a required primary title with optional rows above and below the title, an optional inline accessory next to the title, and optional bottom label or custom bottom content.

```tsx
import { TitleStandard } from '@metamask/design-system-react-native';

<TitleStandard title="$4.42" />;
```

Cross-platform layout props are defined as `TitleStandardPropsShared` in `@metamask/design-system-shared`. This package adds `twClassName`, React Native `View` props, and `titleProps` / `bottomLabelProps` for the platform `Text` component.

## Props

### `title`

The primary title. The title row always renders. When `title` is a string, it is wrapped with heading typography (`TextVariant.HeadingLg` and `titleProps`); other `ReactNode` values render as provided.

| TYPE        | REQUIRED | DEFAULT |
| ----------- | -------- | ------- |
| `ReactNode` | Yes      | —       |

```tsx
<TitleStandard title="$1,234.56" />
```

### `titleAccessory`

Optional node rendered to the right of the title (for example an info icon).

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

```tsx
import {
  TitleStandard,
  Box,
  Icon,
  IconName,
  IconSize,
} from '@metamask/design-system-react-native';

<TitleStandard
  title="$4.42"
  titleAccessory={
    <Box twClassName="ml-2">
      <Icon name={IconName.Info} size={IconSize.Sm} />
    </Box>
  }
/>;
```

### `topAccessory`

Optional row above the title (for example secondary label text or a row with icons).

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

```tsx
import {
  TitleStandard,
  Text,
  TextVariant,
  TextColor,
  FontWeight,
} from '@metamask/design-system-react-native';

<TitleStandard
  topAccessory={
    <Text
      variant={TextVariant.BodySm}
      fontWeight={FontWeight.Medium}
      color={TextColor.TextAlternative}
    >
      Send
    </Text>
  }
  title="$4.42"
  bottomLabel="0.002 ETH"
/>;
```

### `bottomLabel`

Optional bottom row with secondary label typography when the value is a string (`BodySm`, medium, `TextColor.TextAlternative`). If `bottomLabel` is renderable, `bottomAccessory` is not shown.

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

```tsx
<TitleStandard title="$4.42" bottomLabel="0.002 ETH" />
```

### `bottomAccessory`

Optional custom bottom row when `bottomLabel` is not renderable. Renders without default label typography; compose layout inside the node.

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

```tsx
import {
  TitleStandard,
  Box,
  BoxFlexDirection,
  BoxAlignItems,
  Icon,
  IconName,
  IconSize,
  Text,
  TextVariant,
} from '@metamask/design-system-react-native';

<TitleStandard
  title="$4.42"
  bottomAccessory={
    <Box
      flexDirection={BoxFlexDirection.Row}
      alignItems={BoxAlignItems.Center}
      gap={1}
    >
      <Icon name={IconName.Gas} size={IconSize.Xs} />
      <Text variant={TextVariant.BodySm}>~$0.50 fee</Text>
    </Box>
  }
/>;
```

### `titleProps`

Optional props merged into the heading `Text` when `title` is a string. Use for `testID` or typography overrides.

| TYPE                 | REQUIRED | DEFAULT     |
| -------------------- | -------- | ----------- |
| `Partial<TextProps>` | No       | `undefined` |

```tsx
<TitleStandard title="$4.42" titleProps={{ testID: 'title-standard-title' }} />
```

### `bottomLabelProps`

Optional props merged into the bottom label `Text` when `bottomLabel` is a string.

| TYPE                 | REQUIRED | DEFAULT     |
| -------------------- | -------- | ----------- |
| `Partial<TextProps>` | No       | `undefined` |

```tsx
<TitleStandard
  title="$4.42"
  bottomLabel="0.002 ETH"
  bottomLabelProps={{ testID: 'title-standard-bottom' }}
/>
```

### `twClassName`

Use the `twClassName` prop to add Tailwind CSS classes to the component. These classes will be merged with the component's default classes using `tw.style()`, allowing you to:

- Add new styles that don't exist in the default component
- Override the component's default styles when needed

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

```tsx
// Add additional styles
<TitleStandard twClassName="mt-4" title="$4.42" />

// Override default styles
<TitleStandard twClassName="px-6" title="$4.42" />
```

### `style`

Use the `style` prop to customize the component's appearance with React Native styles. For consistent styling, prefer using `twClassName` with Tailwind classes when possible. Use `style` with `tw.style()` for conditionals or dynamic values. Other `View` props (for example `testID` and accessibility fields) are also accepted on the root container.

| TYPE                   | REQUIRED | DEFAULT     |
| ---------------------- | -------- | ----------- |
| `StyleProp<ViewStyle>` | No       | `undefined` |

```tsx
import { useTailwind } from '@metamask/design-system-twrnc-preset';

import { TitleStandard } from '@metamask/design-system-react-native';

export const ConditionalExample = ({ isActive }: { isActive: boolean }) => {
  const tw = useTailwind();

  return (
    <TitleStandard
      title="$4.42"
      style={tw.style('opacity-90', isActive && 'opacity-100')}
    />
  );
};
```

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
