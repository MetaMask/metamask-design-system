# TextField

TextField is used to render a controlled, single-line text input inside a fixed-height row with optional leading and trailing content. The root is a `Pressable` (tap-to-focus); inner [TextInput](https://reactnative.dev/docs/textinput) behavior is exposed through **`inputProps`**, and remaining [Pressable](https://reactnative.dev/docs/pressable) props can be passed at the top level. Shared design fields are defined as **`TextFieldPropsShared`** in `@metamask/design-system-shared`.

```tsx
import { TextField } from '@metamask/design-system-react-native';

<TextField value="" placeholder="Enter text..." />;
```

## Props

### `value`

Required controlled value for the TextField.

| TYPE     | REQUIRED | DEFAULT |
| -------- | -------- | ------- |
| `string` | Yes      | N/A     |

```tsx
import { TextField } from '@metamask/design-system-react-native';

<TextField value="hello" placeholder="Value example" />;
```

### `onChangeText`

Optional callback when the text changes.

| TYPE                     | REQUIRED | DEFAULT     |
| ------------------------ | -------- | ----------- |
| `(text: string) => void` | No       | `undefined` |

```tsx
import { TextField } from '@metamask/design-system-react-native';

<TextField value="" onChangeText={(text) => {}} placeholder="Change handler" />;
```

### `placeholder`

Optional placeholder string for the inner input.

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

```tsx
import { TextField } from '@metamask/design-system-react-native';

<TextField value="" placeholder="Search" />;
```

### `isReadonly`

When true, the inner input is not editable.

| TYPE      | REQUIRED | DEFAULT |
| --------- | -------- | ------- |
| `boolean` | No       | `false` |

```tsx
import { TextField } from '@metamask/design-system-react-native';

<TextField value="" isReadonly placeholder="Read-only" />;
```

### `onFocus`

Optional handler when the inner input receives focus. TextField composes this with its own focus border behavior. Do not pass `onFocus` through **`inputProps`**; use this prop instead.

| TYPE       | REQUIRED | DEFAULT     |
| ---------- | -------- | ----------- |
| `function` | No       | `undefined` |

```tsx
import { TextField } from '@metamask/design-system-react-native';

<TextField value="" placeholder="Focus" onFocus={() => {}} />;
```

### `onBlur`

Optional handler when the inner input loses focus. TextField composes this with its own focus border behavior. Do not pass `onBlur` through **`inputProps`**; use this prop instead.

| TYPE       | REQUIRED | DEFAULT     |
| ---------- | -------- | ----------- |
| `function` | No       | `undefined` |

```tsx
import { TextField } from '@metamask/design-system-react-native';

<TextField value="" placeholder="Blur" onBlur={() => {}} />;
```

### `inputProps`

Additional props forwarded to the inner [Input](../Input/Input.tsx) / `TextInput`. Do not pass `placeholder`, `isReadonly`, `onFocus`, or `onBlur` here; use the TextField-level props above. `placeholderTextColor` is omitted from the type; the inner `Input` sets it from the theme. For a required field, use `inputProps.accessibilityState={{ required: true }}` (and related accessibility props as needed).

| TYPE                                                    | REQUIRED | DEFAULT     |
| ------------------------------------------------------- | -------- | ----------- |
| `Omit<InputProps, …>` (see `TextFieldInputProps` types) | No       | `undefined` |

```tsx
import { TextField } from '@metamask/design-system-react-native';

<TextField
  value=""
  onChangeText={(text) => {}}
  placeholder="Search"
  inputProps={{
    autoCapitalize: 'none',
    returnKeyType: 'search',
  }}
/>;
```

### `isError`

When true, the field shows an error state (container border).

| TYPE      | REQUIRED | DEFAULT |
| --------- | -------- | ------- |
| `boolean` | No       | `false` |

```tsx
import { TextField } from '@metamask/design-system-react-native';

<TextField value="" isError placeholder="Error state" />;
```

### `isDisabled`

When true, the field applies reduced opacity, disables the root `Pressable`, and forwards disabled state to the inner `Input`.

| TYPE      | REQUIRED | DEFAULT |
| --------- | -------- | ------- |
| `boolean` | No       | `false` |

```tsx
import { TextField } from '@metamask/design-system-react-native';

<TextField value="" isDisabled placeholder="Disabled" />;
```

### `autoFocus`

When true, the inner input requests focus on mount.

| TYPE      | REQUIRED | DEFAULT |
| --------- | -------- | ------- |
| `boolean` | No       | `false` |

```tsx
import { TextField } from '@metamask/design-system-react-native';

<TextField value="" autoFocus placeholder="Focused on mount" />;
```

### `startAccessory`

Optional content rendered before the inner input. For E2E, set `testID` on the accessory or wrap it in your own `View`.

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

```tsx
import { TextField } from '@metamask/design-system-react-native';
import { Text } from 'react-native';

<TextField value="" startAccessory={<Text>🔍</Text>} placeholder="Search..." />;
```

### `endAccessory`

Optional content rendered after the inner input. For E2E, set `testID` on the accessory or wrap it in your own `View`.

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

```tsx
import { TextField } from '@metamask/design-system-react-native';
import { Text } from 'react-native';

<TextField
  value=""
  endAccessory={<Text>✕</Text>}
  placeholder="With clear button"
/>;
```

### `inputElement`

Optional node that replaces the default `Input`. The forwarded ref still targets `TextInput`, but there may be no native input to focus when the container is pressed.

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

```tsx
import { TextField } from '@metamask/design-system-react-native';
import { TextInput } from 'react-native';

<TextField value="" inputElement={<TextInput placeholder="Custom input" />} />;
```

### Top-level `Pressable` props

Pass `Pressable`-compatible props at the top level (for example `hitSlop`). `onPress`, `disabled`, `style`, `children`, and `accessible` are controlled by TextField.

```tsx
import { TextField } from '@metamask/design-system-react-native';

<TextField
  value=""
  placeholder="Large tap target"
  hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
/>;
```

### `testID`

Optional test id for the root `Pressable`.

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

```tsx
import { TextField } from '@metamask/design-system-react-native';

<TextField value="" testID="my-text-field" placeholder="E2E" />;
```

### `twClassName`

Use the `twClassName` prop to add Tailwind CSS classes to the root container. These classes will be merged with the component's default classes using `twMerge`, allowing you to:

- Add new styles that don't exist in the default component
- Override the component's default styles when needed

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

```tsx
import { TextField } from '@metamask/design-system-react-native';

// Add additional styles
<TextField value="" twClassName="rounded-lg" placeholder="With extra rounding" />

// Override default styles
<TextField
  value=""
  twClassName="bg-error-default"
  placeholder="Override background"
/>
```

### `style`

Use the `style` prop to customize the root `Pressable` with React Native styles. For consistent styling, prefer using `twClassName` with Tailwind classes when possible. Use `style` with `tw.style()` for conditionals or dynamic values.

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
      value=""
      placeholder="Conditional styling"
      style={tw.style('bg-default', isActive && 'bg-success-default')}
    />
  );
};
```

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
