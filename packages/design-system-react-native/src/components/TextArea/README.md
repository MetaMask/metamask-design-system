# TextArea

TextArea is used to render a controlled, multiline text input inside a bordered container. Use [TextField](../TextField/README.md) when you need a single-line field or optional leading and trailing accessories.

```tsx
import { TextArea } from '@metamask/design-system-react-native';

<TextArea value="" placeholder="Notes..." />;
```

## Props

### `value`

Required controlled value for the TextArea.

| TYPE     | REQUIRED | DEFAULT |
| -------- | -------- | ------- |
| `string` | Yes      | N/A     |

```tsx
import { TextArea } from '@metamask/design-system-react-native';

<TextArea value="hello" placeholder="Value example" />;
```

### `onChangeText`

Optional callback when the text changes.

| TYPE                     | REQUIRED | DEFAULT     |
| ------------------------ | -------- | ----------- |
| `(text: string) => void` | No       | `undefined` |

```tsx
import { TextArea } from '@metamask/design-system-react-native';

<TextArea value="" onChangeText={(text) => {}} placeholder="Change handler" />;
```

### `placeholder`

Optional placeholder string for the input.

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

```tsx
import { TextArea } from '@metamask/design-system-react-native';

<TextArea value="" placeholder="Long description" />;
```

### `isReadOnly`

When true, the input is not editable.

| TYPE      | REQUIRED | DEFAULT |
| --------- | -------- | ------- |
| `boolean` | No       | `false` |

```tsx
import { TextArea } from '@metamask/design-system-react-native';

<TextArea value="" isReadOnly placeholder="Read-only" />;
```

### `onFocus`

Optional handler when the input receives focus. TextArea composes this with its own focus border behavior.

| TYPE       | REQUIRED | DEFAULT     |
| ---------- | -------- | ----------- |
| `function` | No       | `undefined` |

```tsx
import { TextArea } from '@metamask/design-system-react-native';

<TextArea value="" placeholder="Focus" onFocus={() => {}} />;
```

### `onBlur`

Optional handler when the input loses focus. TextArea composes this with its own focus border behavior.

| TYPE       | REQUIRED | DEFAULT     |
| ---------- | -------- | ----------- |
| `function` | No       | `undefined` |

```tsx
import { TextArea } from '@metamask/design-system-react-native';

<TextArea value="" placeholder="Blur" onBlur={() => {}} />;
```

### `TextInput` props

Additional `TextInput` props are passed directly to the root field. Use this for platform-native behavior such as `keyboardType`, `secureTextEntry`, `returnKeyType`, and accessibility props like `accessibilityLabel` / `accessibilityHint`. `placeholderTextColor` is managed by the component theme and should not be overridden directly.

| TYPE                         | REQUIRED | DEFAULT     |
| ---------------------------- | -------- | ----------- |
| Additional `TextInput` props | No       | `undefined` |

```tsx
import { TextArea } from '@metamask/design-system-react-native';

<TextArea
  value=""
  onChangeText={(text) => {}}
  placeholder="Notes"
  keyboardType="default"
  autoCapitalize="sentences"
  scrollEnabled
/>;
```

### `ref`

Ref to the root `TextInput`. The component’s `ref` (from `forwardRef`) points at the editable field itself.

| TYPE             | REQUIRED | DEFAULT     |
| ---------------- | -------- | ----------- |
| `Ref<TextInput>` | No       | `undefined` |

```tsx
import { createRef } from 'react';
import { TextArea } from '@metamask/design-system-react-native';
import type { TextInput } from 'react-native';

const textAreaRef = createRef<TextInput>();

<TextArea value="" ref={textAreaRef} placeholder="Focus me" />;
```

### `isError`

When true, the field shows an error state (container border).

| TYPE      | REQUIRED | DEFAULT |
| --------- | -------- | ------- |
| `boolean` | No       | `false` |

```tsx
import { TextArea } from '@metamask/design-system-react-native';

<TextArea value="" isError placeholder="Error state" />;
```

### `isDisabled`

When true, the field applies reduced opacity and forwards disabled state to the input (non-editable).

| TYPE      | REQUIRED | DEFAULT |
| --------- | -------- | ------- |
| `boolean` | No       | `false` |

```tsx
import { TextArea } from '@metamask/design-system-react-native';

<TextArea value="" isDisabled placeholder="Disabled" />;
```

### `autoFocus`

When true, the input requests focus on mount.

| TYPE      | REQUIRED | DEFAULT |
| --------- | -------- | ------- |
| `boolean` | No       | `false` |

```tsx
import { TextArea } from '@metamask/design-system-react-native';

<TextArea value="" autoFocus placeholder="Focused on mount" />;
```

### `testID`

Optional test id for the root `TextInput`.

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

```tsx
import { TextArea } from '@metamask/design-system-react-native';

<TextArea value="" testID="my-text-area" placeholder="E2E" />;
```

### `twClassName`

Use the `twClassName` prop to add Tailwind CSS classes to the root `TextInput`. These classes are merged with the component's default classes using `twMerge`, allowing you to:

- Add new styles that don't exist in the default component
- Override the component's default styles when needed

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

```tsx
import { TextArea } from '@metamask/design-system-react-native';

// Add additional styles
<TextArea value="" twClassName="rounded-lg" placeholder="Extra rounding" />

// Override default styles
<TextArea
  value=""
  twClassName="bg-error-default"
  placeholder="Override background"
/>
```

### `style`

Use the `style` prop to customize the root `TextInput` appearance with React Native styles. For consistent styling, prefer using `twClassName` with Tailwind classes when possible. Use `style` with `tw.style()` for conditionals or dynamic values.

| TYPE                   | REQUIRED | DEFAULT     |
| ---------------------- | -------- | ----------- |
| `StyleProp<ViewStyle>` | No       | `undefined` |

```tsx
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { TextArea } from '@metamask/design-system-react-native';

export const ConditionalExample = ({ isActive }: { isActive: boolean }) => {
  const tw = useTailwind();

  return (
    <TextArea
      value=""
      placeholder="Conditional styling"
      style={tw.style('bg-default', isActive && 'bg-success-default')}
    />
  );
};
```

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
