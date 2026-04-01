# HeaderRoot

HeaderRoot is a header with a left section and an end section(`endAccessory` or `endButtonIconProps`). It can apply the top safe area inset so content clears the status bar.

## When to use

- Use **HeaderRoot** on **top-level entry screens** that do **not** need back navigation (for example home or root tabs).
- Use **HeaderBase** on other Header components where users need **back navigation**.

```tsx
import { HeaderRoot, IconName } from '@metamask/design-system-react-native';

<HeaderRoot
  title="Screen Title"
  endButtonIconProps={[{ iconName: IconName.Close, onPress: handleClose }]}
/>;
```

## Props

Extends React Native [ViewProps](https://reactnative.dev/docs/view).

### `children`

Custom content for the left section. When set, `title` and `titleAccessory` are not rendered.

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

```tsx
import { HeaderRoot, IconName } from '@metamask/design-system-react-native';
import { Text } from 'react-native';

<HeaderRoot
  endButtonIconProps={[{ iconName: IconName.Close, onPress: onClose }]}
>
  <Text>Custom left content</Text>
</HeaderRoot>;
```

### `title`

Main title as a string or React node. Only used when `children` is not provided. Strings use `TextVariant.HeadingLg` and receive `titleProps`; nodes render as-is without `titleProps`.

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

```tsx
import { HeaderRoot, Text, TextVariant } from '@metamask/design-system-react-native';

<HeaderRoot title="Wallet" />

<HeaderRoot
  title={<Text variant={TextVariant.HeadingLg}>Custom title</Text>}
/>
```

### `titleAccessory`

Content after the title in the title row. Only when `children` is not provided and there is title row content (`title` and/or `titleAccessory`).

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

```tsx
import {
  BadgeStatus,
  BadgeStatusStatus,
  HeaderRoot,
  IconName,
} from '@metamask/design-system-react-native';

<HeaderRoot
  title="Details"
  titleAccessory={<BadgeStatus status={BadgeStatusStatus.Active} />}
  endButtonIconProps={[{ iconName: IconName.Close, onPress: onClose }]}
/>;
```

### `titleProps`

Props forwarded to the `Text` wrapper when `title` is a **string** (via `TextOrChildren` `textProps`). Ignored when `title` is a React node.

| TYPE                 | REQUIRED | DEFAULT     |
| -------------------- | -------- | ----------- |
| `Partial<TextProps>` | No       | `undefined` |

```tsx
import { HeaderRoot } from '@metamask/design-system-react-native';

<HeaderRoot
  title="Settings"
  titleProps={{ accessibilityLabel: 'Settings heading' }}
/>;
```

### `endAccessory`

Custom end section. Takes priority over `endButtonIconProps` when both are set.

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

```tsx
import {
  HeaderRoot,
  Text,
  TextVariant,
} from '@metamask/design-system-react-native';

<HeaderRoot
  title="Page"
  endAccessory={<Text variant={TextVariant.BodyMd}>Done</Text>}
/>;
```

### `endButtonIconProps`

Array of `ButtonIcon` props. Rendered in **reverse** order (first item is rightmost). Used only when `endAccessory` is not set.

| TYPE                | REQUIRED | DEFAULT     |
| ------------------- | -------- | ----------- |
| `ButtonIconProps[]` | No       | `undefined` |

```tsx
import { HeaderRoot, IconName } from '@metamask/design-system-react-native';

<HeaderRoot
  title="Search"
  endButtonIconProps={[{ iconName: IconName.Close, onPress: onClose }]}
/>;
```

### `includesTopInset`

When `true`, applies `marginTop` equal to the top safe area inset so the header sits below the status bar.

| TYPE      | REQUIRED | DEFAULT |
| --------- | -------- | ------- |
| `boolean` | No       | `false` |

```tsx
import { HeaderRoot } from '@metamask/design-system-react-native';

<HeaderRoot includesTopInset title="With safe area" />;
```

### `style`

React Native styles for the header container. Prefer `twClassName` for token-aligned styling when possible.

| TYPE                   | REQUIRED | DEFAULT     |
| ---------------------- | -------- | ----------- |
| `StyleProp<ViewStyle>` | No       | `undefined` |

```tsx
import { HeaderRoot } from '@metamask/design-system-react-native';

<HeaderRoot title="Title" style={{ opacity: 0.9 }} />;
```

### `testID`

Test ID for the header container `View`.

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

### `twClassName`

Tailwind class names merged with the component defaults (including `min-h-14`) via `twMerge`.

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

```tsx
import { HeaderRoot } from '@metamask/design-system-react-native';

<HeaderRoot title="Title" twClassName="bg-alternative" />;
```

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
