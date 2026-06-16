# Content

Content lays out the inner row for list items: an avatar, title and description on the left, and value and subvalue on the right. Use it when you need the row layout without `ListItem` padding, press handling, or row shell accessories.

The root is a horizontal row (`min-h-[46px]`). For leading/trailing row accessories (`startAccessory`, `endAccessory`), use [ListItem](../ListItem/README.md).

```tsx
import { Content } from '@metamask/design-system-react-native';

<Content
  title="Label"
  description="Secondary"
  value="Value"
  subvalue="Subvalue"
/>;
```

## Props

### `title`

Primary label on the left. Pass a string for default body styling, or a node for custom content.

Default string styles: `TextVariant.BodyMd`, `FontWeight.Medium`, `TextColor.TextDefault`.

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

```tsx
<Content title="Network" />

<Content title={<Text variant={TextVariant.HeadingSm}>Custom title</Text>} />
```

### `description`

Secondary line under the title on the left. Pass a string for default body styling, or a node for custom content.

Default string styles: `TextVariant.BodySm`, `FontWeight.Medium`, `TextColor.TextAlternative`.

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

```tsx
<Content title="Network" description="Ethereum Mainnet" />
```

### `value`

Primary value on the right. Pass a string for default body styling, or a node for custom content.

Default string styles: `TextVariant.BodyMd`, `FontWeight.Medium`, `TextColor.TextDefault`.

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

```tsx
<Content title="Amount" value="$10.00" />
```

### `subvalue`

Secondary line under the value on the right. Pass a string for default body styling, or a node (for example a button). Can be used with or without `value`.

Default string styles: `TextVariant.BodySm`, `FontWeight.Medium`, `TextColor.TextAlternative`.

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

```tsx
<Content title="Network" value="1.234 ETH" subvalue="~$2,500" />

<Content
  avatar={<AvatarToken name="ETH" src={ethIcon} size={AvatarTokenSize.Lg} />}
  subvalue={
    <Button variant={ButtonVariant.Secondary} size={ButtonBaseSize.Sm}>
      3% bonus
    </Button>
  }
/>
```

### `titleProps`

Props merged onto the `Text` component when `title` is a string. Overrides default title text styles.

| TYPE                                   | REQUIRED | DEFAULT     |
| -------------------------------------- | -------- | ----------- |
| `Partial<Omit<TextProps, 'children'>>` | No       | `undefined` |

```tsx
<Content title="Warning" titleProps={{ color: TextColor.WarningDefault }} />
```

### `descriptionProps`

Props merged onto the `Text` component when `description` is a string. Overrides default description text styles.

| TYPE                                   | REQUIRED | DEFAULT     |
| -------------------------------------- | -------- | ----------- |
| `Partial<Omit<TextProps, 'children'>>` | No       | `undefined` |

```tsx
<Content
  title="Network"
  description="Ethereum Mainnet"
  descriptionProps={{ color: TextColor.TextMuted }}
/>
```

### `valueProps`

Props merged onto the `Text` component when `value` is a string. Overrides default value text styles.

| TYPE                                   | REQUIRED | DEFAULT     |
| -------------------------------------- | -------- | ----------- |
| `Partial<Omit<TextProps, 'children'>>` | No       | `undefined` |

```tsx
<Content
  title="Balance"
  value="100"
  valueProps={{ color: TextColor.SuccessDefault }}
/>
```

### `subvalueProps`

Props merged onto the `Text` component when `subvalue` is a string. Overrides default subvalue text styles.

| TYPE                                   | REQUIRED | DEFAULT     |
| -------------------------------------- | -------- | ----------- |
| `Partial<Omit<TextProps, 'children'>>` | No       | `undefined` |

```tsx
<Content
  title="Amount"
  value="$10.00"
  subvalue="+2.5%"
  subvalueProps={{ color: TextColor.SuccessDefault }}
/>
```

### `avatar`

Optional leading visual before the title column. Use large avatars (40×40) in this slot.

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

```tsx
import {
  AvatarToken,
  AvatarTokenSize,
  Content,
} from '@metamask/design-system-react-native';

<Content
  avatar={<AvatarToken name="ETH" src={ethIcon} size={AvatarTokenSize.Lg} />}
  title="Ethereum"
  value="0.24 ETH"
/>;
```

### `titleStartAccessory`

Optional node before the title on the same line (for example an icon or badge).

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

```tsx
<Content title="Network" titleStartAccessory={<Icon name={IconName.Info} />} />
```

### `titleEndAccessory`

Optional node after the title on the same line (for example a status dot).

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

```tsx
<Content
  title="Network"
  titleEndAccessory={<Icon name={IconName.Question} />}
/>
```

### `descriptionStartAccessory`

Optional node before the description on the same line.

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

```tsx
<Content
  title="Network"
  description="Ethereum Mainnet"
  descriptionStartAccessory={<Icon name={IconName.Info} />}
/>
```

### `descriptionEndAccessory`

Optional node after the description on the same line.

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

```tsx
<Content
  title="Network"
  description="Ethereum Mainnet"
  descriptionEndAccessory={<Icon name={IconName.Question} />}
/>
```

### `valueStartAccessory`

Optional node before the value on the same line.

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

```tsx
<Content
  title="Label"
  value="100"
  valueStartAccessory={<Icon name={IconName.Check} />}
/>
```

### `valueEndAccessory`

Optional node after the value on the same line.

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

```tsx
<Content
  title="Label"
  value="100"
  valueEndAccessory={<Icon name={IconName.Info} />}
/>
```

### `subvalueStartAccessory`

Optional node before the subvalue on the same line.

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

```tsx
<Content
  title="Amount"
  value="$10.00"
  subvalue="~$0.50 fee"
  subvalueStartAccessory={<Icon name={IconName.Info} />}
/>
```

### `subvalueEndAccessory`

Optional node after the subvalue on the same line.

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

```tsx
<Content
  title="Amount"
  value="$10.00"
  subvalue="~$0.50 fee"
  subvalueEndAccessory={<Icon name={IconName.Question} />}
/>
```

### `verticalAlignment`

Vertical alignment of the content row (`alignItems` on the inner `BoxRow`).

Available values:

- `ContentVerticalAlignment.Center` — default; use for one- or two-line rows
- `ContentVerticalAlignment.Top` — use for taller rows (three+ lines or ~88dp+ height)

| TYPE                       | REQUIRED | DEFAULT                           |
| -------------------------- | -------- | --------------------------------- |
| `ContentVerticalAlignment` | No       | `ContentVerticalAlignment.Center` |

```tsx
import {
  Content,
  ContentVerticalAlignment,
} from '@metamask/design-system-react-native';

<Content title="Label" description="Line one\nLine two\nLine three" />

<Content
  title="Label"
  description="Line one\nLine two\nLine three"
  verticalAlignment={ContentVerticalAlignment.Top}
/>
```

### `twClassName`

Use the `twClassName` prop to add Tailwind CSS classes to the component. These classes will be merged with the component's default classes using `twMerge`, allowing you to:

- Add new styles that don't exist in the default component
- Override the component's default styles when needed

Applied on the root `Box` row.

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

```tsx
import { Content } from '@metamask/design-system-react-native';

<Content title="Label" twClassName="opacity-80" />;
```

### `style`

Use the `style` prop to customize the component's appearance with React Native styles. For consistent styling, prefer using `twClassName` with Tailwind classes when possible. Use `style` with `tw.style()` for conditionals or dynamic values.

Forwarded to the root `Box` row, same as `twClassName`.

| TYPE                   | REQUIRED | DEFAULT     |
| ---------------------- | -------- | ----------- |
| `StyleProp<ViewStyle>` | No       | `undefined` |

```tsx
import { Content } from '@metamask/design-system-react-native';
import { useTailwind } from '@metamask/design-system-twrnc-preset';

export const HighlightedContent = ({
  isHighlighted,
}: {
  isHighlighted: boolean;
}) => {
  const tw = useTailwind();

  return (
    <Content
      title="Network"
      description="Ethereum Mainnet"
      style={tw.style(isHighlighted && 'bg-background-muted')}
    />
  );
};
```

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
