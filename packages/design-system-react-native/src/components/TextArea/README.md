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

Optional placeholder string for the inner input.

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

```tsx
import { TextArea } from '@metamask/design-system-react-native';

<TextArea value="" placeholder="Long description" />;
```

### `isReadOnly`

When true, the inner input is not editable.

| TYPE      | REQUIRED | DEFAULT |
| --------- | -------- | ------- |
| `boolean` | No       | `false` |

```tsx
import { TextArea } from '@metamask/design-system-react-native';

<TextArea value="" isReadOnly placeholder="Read-only" />;
```

### `onFocus`

Optional handler when the inner input receives focus. TextArea composes this with its own focus border behavior. Do not pass `onFocus` through `inputProps`; use this prop instead.

| TYPE       | REQUIRED | DEFAULT     |
| ---------- | -------- | ----------- |
| `function` | No       | `undefined` |

```tsx
import { TextArea } from '@metamask/design-system-react-native';

<TextArea value="" placeholder="Focus" onFocus={() => {}} />;
```

### `onBlur`

Optional handler when the inner input loses focus. TextArea composes this with its own focus border behavior. Do not pass `onBlur` through `inputProps`; use this prop instead.

| TYPE       | REQUIRED | DEFAULT     |
| ---------- | -------- | ----------- |
| `function` | No       | `undefined` |

```tsx
import { TextArea } from '@metamask/design-system-react-native';

<TextArea value="" placeholder="Blur" onBlur={() => {}} />;
```

### `inputProps`

Additional props forwarded to the inner [Input](../Input/Input.tsx) / `TextInput`. Do not pass `placeholder`, `isReadOnly`, `onFocus`, `onBlur`, or `multiline` here; use the TextArea-level props where applicable. `placeholderTextColor` is omitted from the type; the inner `Input` sets it from the theme. For screen readers, set `inputProps.accessibilityLabel` and `inputProps.accessibilityHint`. You can use `inputProps.testID` to target the native `TextInput` in E2E tests.

Use top-level `Box` / `View` props for layout and pointer handling (`pointerEvents`, margins, hit areas via wrappers, etc.). Keys reserved by TextArea (`style`, `twClassName`, `testID`, `children`, `accessible`, and keys owned by the TextArea API surface) are not passed through from this intersection.

| TYPE                                                               | REQUIRED | DEFAULT     |
| ------------------------------------------------------------------ | -------- | ----------- |
| `TextAreaProps['inputProps']` (see `TextAreaProps` in the package) | No       | `undefined` |

```tsx
import { TextArea } from '@metamask/design-system-react-native';

<TextArea
  value=""
  onChangeText={(text) => {}}
  placeholder="Notes"
  inputProps={{
    autoCapitalize: 'sentences',
    maxHeight: 200,
    scrollEnabled: true,
  }}
/>;
```

### `inputRef`

Ref to the inner `TextInput`. The component’s `ref` (from `forwardRef`) points at the root [Box](../Box/Box.tsx) (`View`).

| TYPE             | REQUIRED | DEFAULT     |
| ---------------- | -------- | ----------- |
| `Ref<TextInput>` | No       | `undefined` |

```tsx
import { createRef } from 'react';
import { TextArea } from '@metamask/design-system-react-native';
import type { TextInput } from 'react-native';

const inputRef = createRef<TextInput>();

<TextArea value="" inputRef={inputRef} placeholder="Focus me" />;
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

When true, the field applies reduced opacity and forwards disabled state to the inner `Input` (non-editable).

| TYPE      | REQUIRED | DEFAULT |
| --------- | -------- | ------- |
| `boolean` | No       | `false` |

```tsx
import { TextArea } from '@metamask/design-system-react-native';

<TextArea value="" isDisabled placeholder="Disabled" />;
```

### `autoFocus`

When true, the inner input requests focus on mount.

| TYPE      | REQUIRED | DEFAULT |
| --------- | -------- | ------- |
| `boolean` | No       | `false` |

```tsx
import { TextArea } from '@metamask/design-system-react-native';

<TextArea value="" autoFocus placeholder="Focused on mount" />;
```

### `inputElement`

Optional node that replaces the default `Input`. `inputRef` is only forwarded when the default `Input` is rendered; with a custom `inputElement`, attach your own ref to the control if you need imperative focus or measurement.

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

```tsx
import { TextArea } from '@metamask/design-system-react-native';
import { TextInput } from 'react-native';

<TextArea value="" inputElement={<TextInput placeholder="Custom input" />} />;
```

### `testID`

Optional test id for the root [Box](../Box/Box.tsx). The root sets `accessible={false}` so assistive technologies focus the inner `TextInput`. The inner `TextInput` does not inherit this id; pass `inputProps.testID` if your tests must query the editable control directly.

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

```tsx
import { TextArea } from '@metamask/design-system-react-native';

<TextArea value="" testID="my-text-area" placeholder="E2E" />;
```

### `twClassName`

Use the `twClassName` prop to add Tailwind CSS classes to the component. These classes will be merged with the component's default classes using `twMerge`, allowing you to:

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

Use the `style` prop to customize the component's appearance with React Native styles. For consistent styling, prefer using `twClassName` with Tailwind classes when possible. Use `style` with `tw.style()` for conditionals or dynamic values.

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
