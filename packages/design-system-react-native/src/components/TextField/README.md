# TextField

TextField is an input component that lets users enter text data into a boxed field. It can contain related accessories before or after the input.

```tsx
import { TextField } from '@metamask/design-system-react-native';

<TextField placeholder="Enter text..." />;
```

## Props

This component extends [Input](../Input/Input.tsx) props (which extends React Native's [TextInput](https://reactnative.dev/docs/textinput)), excluding `textVariant` and `isStateStylesDisabled`.

### `size`

Optional prop for the size of the TextField.

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

Optional boolean to show the error state. Changes the border color to indicate an error.

| TYPE      | REQUIRED | DEFAULT |
| --------- | -------- | ------- |
| `boolean` | No       | `false` |

```tsx
<TextField isError placeholder="Error state" />
```

### `isDisabled`

Optional boolean to disable the TextField. Reduces opacity and prevents interaction.

| TYPE      | REQUIRED | DEFAULT |
| --------- | -------- | ------- |
| `boolean` | No       | `false` |

```tsx
<TextField isDisabled placeholder="Disabled" />
```

### `startAccessory`

Optional content to display before the Input.

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

```tsx
import { Text } from 'react-native';

<TextField startAccessory={<Text>🔍</Text>} placeholder="Search..." />;
```

### `endAccessory`

Optional content to display after the Input.

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

```tsx
import { Text } from 'react-native';

<TextField endAccessory={<Text>✕</Text>} placeholder="With clear button" />;
```

### `inputElement`

Optional prop to replace the default Input with a custom element.

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

```tsx
import { TextInput } from 'react-native';

<TextField inputElement={<TextInput placeholder="Custom input" />} />;
```

### `twClassName`

Use the `twClassName` prop to add Tailwind CSS classes to the container. These classes will be merged with the component's default classes using `twMerge`, allowing you to:

- Add new styles that don't exist in the default component
- Override the component's default styles when needed

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

```tsx
import { TextField } from '@metamask/design-system-react-native';

// Add additional styles
<TextField twClassName="mt-4" placeholder="With margin" />

// Override default styles
<TextField twClassName="bg-error-default" placeholder="Override background" />
```

### `style`

Use the `style` prop to customize the container's appearance with React Native styles. For consistent styling, prefer using `twClassName` with Tailwind classes when possible. Use `style` with `tw.style()` for conditionals or dynamic values.

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
      placeholder="Conditional styling"
      style={tw.style('bg-default', isActive && 'bg-success-default')}
    />
  );
};
```

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
