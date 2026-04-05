# Textarea

Textarea is a light-weight, controlled-only borderless multi-line text input component.

```tsx
import { Textarea, TextVariant } from '@metamask/design-system-react-native';

<Textarea value="" placeholder="Enter text" textVariant={TextVariant.BodyMd} />;
```

## Props

This component extends React Native's [TextInput](https://reactnative.dev/docs/textinput) component with `multiline` enabled.

### `value`

Required controlled value for the Textarea.

| TYPE     | REQUIRED | DEFAULT |
| -------- | -------- | ------- |
| `string` | Yes      | N/A     |

### `textVariant`

Optional enum to select between Typography variants.

| TYPE          | REQUIRED | DEFAULT              |
| ------------- | -------- | -------------------- |
| `TextVariant` | No       | `TextVariant.BodyMd` |

```tsx
import { Textarea, TextVariant } from '@metamask/design-system-react-native';

<Textarea value="" placeholder="BodyMd (default)" textVariant={TextVariant.BodyMd} />
<Textarea value="" placeholder="BodySm" textVariant={TextVariant.BodySm} />
```

### `isDisabled`

Optional boolean to disable the Textarea.

| TYPE      | REQUIRED | DEFAULT |
| --------- | -------- | ------- |
| `boolean` | No       | `false` |

```tsx
<Textarea value="Not editable" isDisabled />
```

### `isReadOnly`

Optional boolean to make the Textarea read-only.

| TYPE      | REQUIRED | DEFAULT |
| --------- | -------- | ------- |
| `boolean` | No       | `false` |

```tsx
<Textarea value="Read-only value" isReadOnly />
```

### `isError`

Optional boolean to indicate an error state. Applies error border styling.

| TYPE      | REQUIRED | DEFAULT |
| --------- | -------- | ------- |
| `boolean` | No       | `false` |

```tsx
<Textarea value="" placeholder="Invalid input" isError />
```

### `numberOfLines`

Optional number of visible lines. Controls the minimum height of the textarea.

| TYPE     | REQUIRED | DEFAULT |
| -------- | -------- | ------- |
| `number` | No       | `4`     |

```tsx
<Textarea value="" placeholder="4 lines (default)" numberOfLines={4} />
<Textarea value="" placeholder="8 lines" numberOfLines={8} />
```

### `isStateStylesDisabled`

Optional boolean to disable state styles (focus border, disabled opacity).

| TYPE      | REQUIRED | DEFAULT |
| --------- | -------- | ------- |
| `boolean` | No       | `false` |

```tsx
import { Textarea } from '@metamask/design-system-react-native';

<Textarea value="Disabled, full opacity" isDisabled isStateStylesDisabled />;
```

### `twClassName`

Use the `twClassName` prop to add Tailwind CSS classes to the component. These classes will be merged with the component's default classes using `twMerge`, allowing you to:

- Add new styles that don't exist in the default component
- Override the component's default styles when needed

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

```tsx
import { Textarea } from '@metamask/design-system-react-native';

// Add additional styles
<Textarea value="" twClassName="mt-4" placeholder="With margin" />

// Override default styles
<Textarea value="" twClassName="bg-error-muted" placeholder="Override background" />
```

### `style`

Use the `style` prop to customize the component's appearance with React Native styles. For consistent styling, prefer using `twClassName` with Tailwind classes when possible. Use `style` with `tw.style()` for conditionals or dynamic values.

| TYPE                   | REQUIRED | DEFAULT     |
| ---------------------- | -------- | ----------- |
| `StyleProp<TextStyle>` | No       | `undefined` |

```tsx
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { Textarea } from '@metamask/design-system-react-native';

export const ConditionalExample = ({ isActive }: { isActive: boolean }) => {
  const tw = useTailwind();

  return (
    <Textarea
      value=""
      placeholder="Conditional styling"
      style={tw.style('text-default', isActive && 'border-primary-default')}
    />
  );
};
```

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
