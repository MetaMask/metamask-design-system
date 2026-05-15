# TitleAlert

TitleAlert stacks a severity-based [`IconAlert`](../IconAlert/README.md) (32px) above a centered title row, with optional description text below. Use it in **modals**, **bottom sheets**, or other compact surfaces when you need alert context plus a short heading (for example swap warnings).

```tsx
import {
  TitleAlert,
  IconAlertSeverity,
} from '@metamask/design-system-react-native';

<TitleAlert
  severity={IconAlertSeverity.Warning}
  title="High price impact"
  description="You are swapping at an unfavorable rate."
/>;
```

## Props

### `severity`

Sets the tone for the leading [`IconAlert`](../IconAlert/README.md) (glyph and color). Same values as `IconAlertSeverity`.

Available severities:

- `IconAlertSeverity.Info`
- `IconAlertSeverity.Success`
- `IconAlertSeverity.Warning`
- `IconAlertSeverity.Error`

| TYPE                | REQUIRED | DEFAULT |
| ------------------- | -------- | ------- |
| `IconAlertSeverity` | Yes      | —       |

```tsx
import {
  TitleAlert,
  IconAlertSeverity,
} from '@metamask/design-system-react-native';

<TitleAlert severity={IconAlertSeverity.Error} title="Something went wrong" />;
```

### `title`

Title row content. When `title` is a string, it uses `TextVariant.HeadingLg` and `TextColor.TextDefault` (merged with `titleProps`). The title row renders only when `title` is renderable (`null`, `undefined`, `false`, and `''` are not); `titleStartAccessory` / `titleEndAccessory` without a renderable `title` do not show the row.

| TYPE        | REQUIRED | DEFAULT |
| ----------- | -------- | ------- |
| `ReactNode` | Yes      | —       |

```tsx
import {
  TitleAlert,
  IconAlertSeverity,
} from '@metamask/design-system-react-native';

<TitleAlert severity={IconAlertSeverity.Warning} title="High price impact" />;
```

### `titleStartAccessory`

Optional node to the left of `title` in the title row. Only visible when `title` is renderable.

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

### `titleEndAccessory`

Optional node to the right of `title` in the title row. Only visible when `title` is renderable.

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

### `titleProps`

Optional props merged into the title row `Text` when `title` is a string.

| TYPE                                   | REQUIRED | DEFAULT     |
| -------------------------------------- | -------- | ----------- |
| `Omit<Partial<TextProps>, 'children'>` | No       | `undefined` |

```tsx
import {
  TitleAlert,
  IconAlertSeverity,
} from '@metamask/design-system-react-native';

<TitleAlert
  severity={IconAlertSeverity.Warning}
  title="High price impact"
  titleProps={{ numberOfLines: 2 }}
/>;
```

### `titleWrapperProps`

Optional props spread onto the title row [`BoxRow`](../BoxRow/README.md) (excluding `children`, `startAccessory`, `endAccessory`, and `textProps`, which TitleAlert sets).

| TYPE                                                                                          | REQUIRED | DEFAULT     |
| --------------------------------------------------------------------------------------------- | -------- | ----------- |
| `Omit<Partial<BoxRowProps>, 'children' \| 'startAccessory' \| 'endAccessory' \| 'textProps'>` | No       | `undefined` |

```tsx
import {
  TitleAlert,
  IconAlertSeverity,
} from '@metamask/design-system-react-native';

<TitleAlert
  severity={IconAlertSeverity.Warning}
  title="High price impact"
  titleWrapperProps={{ testID: 'swap-title-row' }}
/>;
```

### `description`

Optional content below the title row. When `description` is a string, it uses `TextVariant.BodySm`, `FontWeight.Medium`, `TextColor.TextAlternative`, and centered alignment (merged with `descriptionProps`). Renders only when `description` is renderable (`null`, `undefined`, `false`, and `''` are not). Custom nodes are passed through unchanged (no default string styling).

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

### `descriptionProps`

Optional props merged into the description `Text` when `description` is a string.

| TYPE                                   | REQUIRED | DEFAULT     |
| -------------------------------------- | -------- | ----------- |
| `Omit<Partial<TextProps>, 'children'>` | No       | `undefined` |

```tsx
import {
  TitleAlert,
  IconAlertSeverity,
} from '@metamask/design-system-react-native';

<TitleAlert
  severity={IconAlertSeverity.Warning}
  title="High price impact"
  description="Supporting copy."
  descriptionProps={{ numberOfLines: 3 }}
/>;
```

### `twClassName`

Use the `twClassName` prop to add Tailwind CSS classes to the root container. These classes will be merged with the component's default classes using `twMerge`, allowing you to:

- Add new styles that don't exist in the default component
- Override the component's default styles when needed

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

```tsx
import {
  TitleAlert,
  IconAlertSeverity,
} from '@metamask/design-system-react-native';

// Add additional styles
<TitleAlert
  severity={IconAlertSeverity.Warning}
  title="High price impact"
  twClassName="mt-2"
/>;

// Override default styles
<TitleAlert
  severity={IconAlertSeverity.Warning}
  title="High price impact"
  twClassName="px-6"
/>;
```

### `style`

Use the `style` prop to customize the root container with React Native styles. For consistent styling, prefer using `twClassName` with Tailwind classes when possible. Use `style` with `tw.style()` for conditionals or dynamic values.

| TYPE                   | REQUIRED | DEFAULT     |
| ---------------------- | -------- | ----------- |
| `StyleProp<ViewStyle>` | No       | `undefined` |

```tsx
import {
  TitleAlert,
  IconAlertSeverity,
} from '@metamask/design-system-react-native';
import { useTailwind } from '@metamask/design-system-twrnc-preset';

export const ConditionalTitleAlert = ({ emphasis }: { emphasis: boolean }) => {
  const tw = useTailwind();

  return (
    <TitleAlert
      severity={IconAlertSeverity.Warning}
      title="High price impact"
      style={tw.style(
        'rounded-lg',
        emphasis && 'border-2 border-warning-default',
      )}
    />
  );
};
```

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
