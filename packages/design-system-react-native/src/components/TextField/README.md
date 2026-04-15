# TextField

TextField is a controlled-only boxed input. The outer row is a fixed **48px** height with a single-line inner field, and optional content can appear before or after the input.

```tsx
import { TextField } from '@metamask/design-system-react-native';

<TextField value="" placeholder="Enter text..." />;
```

## Props

This component extends [Input](../Input/Input.tsx) props (which extends React Native’s [TextInput](https://reactnative.dev/docs/textinput)), excluding `textVariant` and `isStateStylesDisabled`, which TextField owns. The root is a `Pressable` (tap-to-focus); use `pressableProps` for extra `Pressable` attributes.

### `value`

Required controlled value for the TextField.

| TYPE     | REQUIRED | DEFAULT |
| -------- | -------- | ------- |
| `string` | Yes      | N/A     |

### `isError`

Optional boolean to show the error state. Updates the container border color.

| TYPE      | REQUIRED | DEFAULT |
| --------- | -------- | ------- |
| `boolean` | No       | `false` |

```tsx
import { TextField } from '@metamask/design-system-react-native';

<TextField value="" isError placeholder="Error state" />;
```

### `isDisabled`

Optional boolean to disable the TextField. Applies reduced opacity, disables the root `Pressable`, and forwards disabled state to the inner `Input`.

| TYPE      | REQUIRED | DEFAULT |
| --------- | -------- | ------- |
| `boolean` | No       | `false` |

```tsx
import { TextField } from '@metamask/design-system-react-native';

<TextField value="" isDisabled placeholder="Disabled" />;
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

Optional node that replaces the default `Input`. When you use this, the forwarded ref still targets the default `TextInput` type, but there may be no native input to focus when the container is pressed.

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

```tsx
import { TextField } from '@metamask/design-system-react-native';
import { TextInput } from 'react-native';

<TextField value="" inputElement={<TextInput placeholder="Custom input" />} />;
```

### `pressableProps`

Optional props passed to the root `Pressable`. `onPress`, `disabled`, `style`, `children`, and `accessible` are reserved by TextField.

| TYPE                                                                                     | REQUIRED | DEFAULT     |
| ---------------------------------------------------------------------------------------- | -------- | ----------- |
| `Omit<PressableProps, 'onPress' \| 'disabled' \| 'style' \| 'children' \| 'accessible'>` | No       | `undefined` |

```tsx
import { TextField } from '@metamask/design-system-react-native';

<TextField
  value=""
  placeholder="Large tap target"
  pressableProps={{ hitSlop: { top: 8, bottom: 8, left: 8, right: 8 } }}
/>;
```

### `twClassName`

Use the `twClassName` prop to add Tailwind CSS classes to the component. These classes will be merged with the component's default classes using `twMerge`, allowing you to:

- Add new styles that don't exist in the default component
- Override the component's default styles when needed

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

```tsx
import { TextField } from '@metamask/design-system-react-native';

// Add additional styles (avoid layout/height changes without design system review)
<TextField value="" twClassName="rounded-lg" placeholder="With extra rounding" />

// Override default styles
<TextField value="" twClassName="bg-error-default" placeholder="Override background" />
```

### `style`

Use the `style` prop to customize the component's appearance with React Native styles. For consistent styling, prefer using `twClassName` with Tailwind classes when possible. Use `style` with `tw.style()` for conditionals or dynamic values.

| TYPE                   | REQUIRED | DEFAULT     |
| ---------------------- | -------- | ----------- |
| `StyleProp<ViewStyle>` | No       | `undefined` |

```tsx
import { TextField } from '@metamask/design-system-react-native';
import { useTailwind } from '@metamask/design-system-twrnc-preset';

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
