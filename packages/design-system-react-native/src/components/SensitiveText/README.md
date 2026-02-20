# SensitiveText

SensitiveText extends the Text component to handle sensitive information. It replaces text content with bullet characters when hidden, useful for account balances, private keys, and other confidential data.

```tsx
import { SensitiveText } from '@metamask/design-system-react-native';

<SensitiveText isHidden>$1,234.56</SensitiveText>;
```

## Props

This component extends all [Text](../Text/README.md) props (variant, color, fontWeight, twClassName, etc.) and adds the following:

### `isHidden`

Whether the text content should be hidden. When true, content is replaced with bullet characters.

| TYPE      | REQUIRED | DEFAULT |
| --------- | -------- | ------- |
| `boolean` | No       | `false` |

```tsx
// Visible text
<SensitiveText>$1,234.56</SensitiveText>

// Hidden text (shows ••••••)
<SensitiveText isHidden>$1,234.56</SensitiveText>
```

### `length`

The number of bullet characters to display when hidden. Can be a predefined `SensitiveTextLength` or a custom numeric string.

Available lengths:

- `SensitiveTextLength.Short` (6 characters)
- `SensitiveTextLength.Medium` (9 characters)
- `SensitiveTextLength.Long` (12 characters)
- `SensitiveTextLength.ExtraLong` (20 characters)

| TYPE                                      | REQUIRED | DEFAULT                     |
| ----------------------------------------- | -------- | --------------------------- |
| `SensitiveTextLengthType \| CustomLength` | No       | `SensitiveTextLength.Short` |

```tsx
import { SensitiveText, SensitiveTextLength } from '@metamask/design-system-react-native';

// Predefined lengths
<SensitiveText isHidden length={SensitiveTextLength.Short}>Short</SensitiveText>
<SensitiveText isHidden length={SensitiveTextLength.Medium}>Medium</SensitiveText>
<SensitiveText isHidden length={SensitiveTextLength.Long}>Long</SensitiveText>
<SensitiveText isHidden length={SensitiveTextLength.ExtraLong}>Extra Long</SensitiveText>

// Custom length
<SensitiveText isHidden length="15">Custom</SensitiveText>
```

### `children`

The text content to display or hide.

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | Yes      | `undefined` |

```tsx
<SensitiveText isHidden>Sensitive Information</SensitiveText>
```

### `twClassName`

Inherited from Text. Use the `twClassName` prop to add Tailwind CSS classes to the component.

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

```tsx
<SensitiveText twClassName="mt-4" isHidden>
  Styled Hidden Text
</SensitiveText>
```

### `style`

Inherited from Text. Use the `style` prop to customize the component's appearance with React Native styles.

| TYPE                   | REQUIRED | DEFAULT     |
| ---------------------- | -------- | ----------- |
| `StyleProp<TextStyle>` | No       | `undefined` |

```tsx
import { useTailwind } from '@metamask/design-system-twrnc-preset';

const Example = ({ isActive }: { isActive: boolean }) => {
  const tw = useTailwind();

  return (
    <SensitiveText
      isHidden
      style={tw.style('text-default', isActive && 'text-success-default')}
    >
      $1,234.56
    </SensitiveText>
  );
};
```

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
