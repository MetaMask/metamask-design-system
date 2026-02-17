# TextField

TextField is an input component that allows users to enter text data into a boxed field. It supports accessories, error states, and size variants.

```tsx
import { TextField } from '@metamask/design-system-react-native';

<TextField
  placeholder="Enter text..."
  onChangeText={(text) => console.log(text)}
/>;
```

## Props

### `size`

The size of the TextField.

Available sizes:

- `TextFieldSize.Sm` (32px)
- `TextFieldSize.Md` (40px)
- `TextFieldSize.Lg` (48px)

| TYPE            | REQUIRED | DEFAULT            |
| --------------- | -------- | ------------------ |
| `TextFieldSize` | No       | `TextFieldSize.Md` |

```tsx
import { TextField, TextFieldSize } from '@metamask/design-system-react-native';

<TextField size={TextFieldSize.Sm} placeholder="Small" />
<TextField placeholder="Medium (default)" />
<TextField size={TextFieldSize.Lg} placeholder="Large" />
```

### `isError`

Whether to show the error state. When true, the border color changes to the error color.

| TYPE      | REQUIRED | DEFAULT |
| --------- | -------- | ------- |
| `boolean` | No       | `false` |

```tsx
import { TextField } from '@metamask/design-system-react-native';

<TextField isError placeholder="Invalid input" />;
```

### `isDisabled`

Whether the input is disabled. When true, the input is not editable and the container opacity is reduced.

| TYPE      | REQUIRED | DEFAULT |
| --------- | -------- | ------- |
| `boolean` | No       | `false` |

```tsx
import { TextField } from '@metamask/design-system-react-native';

<TextField isDisabled placeholder="Disabled input" />;
```

### `isReadonly`

Whether the input is read-only. The input is not editable but retains full opacity.

| TYPE      | REQUIRED | DEFAULT |
| --------- | -------- | ------- |
| `boolean` | No       | `false` |

```tsx
import { TextField } from '@metamask/design-system-react-native';

<TextField isReadonly value="Read-only value" />;
```

### `startAccessory`

Content to display before the input. Commonly used for icons.

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

```tsx
import {
  TextField,
  Icon,
  IconName,
  IconSize,
} from '@metamask/design-system-react-native';

<TextField
  startAccessory={<Icon name={IconName.Search} size={IconSize.Sm} />}
  placeholder="Search..."
/>;
```

### `endAccessory`

Content to display after the input. Commonly used for action buttons or labels.

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

```tsx
import { TextField, Text } from '@metamask/design-system-react-native';

<TextField endAccessory={<Text>ETH</Text>} placeholder="Enter amount" />;
```

### `inputElement`

Custom input element to replace the default TextInput. Use this when you need a specialized input component.

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

```tsx
import { TextField } from '@metamask/design-system-react-native';

<TextField inputElement={<MyCustomInput />} />;
```

### `textInputProps`

Props spread to the internal TextInput component for additional properties like `testID`, `keyboardType`, or `returnKeyType`.

**Note:** Common props (`placeholder`, `value`, `onChangeText`, `onBlur`, `onFocus`, `autoFocus`) should be passed as top-level props, not through this object.

| TYPE                                                               | REQUIRED | DEFAULT     |
| ------------------------------------------------------------------ | -------- | ----------- |
| `Omit<TextInputProps, 'editable' \| 'onBlur' \| 'onFocus' \| ...>` | No       | `undefined` |

```tsx
import { TextField } from '@metamask/design-system-react-native';

<TextField
  placeholder="Enter text..."
  textInputProps={{
    testID: 'my-input',
    keyboardType: 'email-address',
    returnKeyType: 'done',
  }}
/>;
```

### `twClassName`

Use the `twClassName` prop to add Tailwind CSS classes to the container. These classes will be merged with the component's default classes, allowing you to customize the container appearance.

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

```tsx
import { TextField } from '@metamask/design-system-react-native';

// Add additional styles
<TextField twClassName="mt-4" placeholder="With margin" />;
```

### `style`

Use the `style` prop to customize the component's appearance with React Native styles. For consistent styling, prefer using `twClassName` with Tailwind classes when possible. Use `style` for dynamic values or styles not available in Tailwind.

| TYPE                   | REQUIRED | DEFAULT     |
| ---------------------- | -------- | ----------- |
| `StyleProp<ViewStyle>` | No       | `undefined` |

```tsx
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { TextField } from '@metamask/design-system-react-native';

export const ConditionalExample = ({ isActive }: { isActive: boolean }) => {
  const tw = useTailwind();

  return (
    <TextField
      style={tw.style('bg-default', isActive && 'bg-alternative')}
      placeholder="Conditional styling"
    />
  );
};
```

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
