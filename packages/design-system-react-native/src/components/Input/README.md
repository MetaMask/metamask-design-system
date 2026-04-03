# Input

Input is a light-weight, controlled-only borderless input used inside of TextField.

```tsx
import { Input, TextVariant } from '@metamask/design-system-react-native';

<Input value="" placeholder="Enter text" textVariant={TextVariant.BodyMd} />;
```

## Props

This component extends React Native's [TextInput](https://reactnative.dev/docs/textinput) component.

### `value`

Required controlled value for the Input.

| TYPE     | REQUIRED | DEFAULT |
| -------- | -------- | ------- |
| `string` | Yes      | N/A     |

### `textVariant`

Optional enum to select between Typography variants.

| TYPE          | REQUIRED | DEFAULT              |
| ------------- | -------- | -------------------- |
| `TextVariant` | No       | `TextVariant.BodyMd` |

```tsx
import { Input, TextVariant } from '@metamask/design-system-react-native';

<Input value="" placeholder="BodyMd (default)" textVariant={TextVariant.BodyMd} />
<Input value="" placeholder="BodySm" textVariant={TextVariant.BodySm} />
```

### `isDisabled`

Optional boolean to disable Input.

| TYPE      | REQUIRED | DEFAULT |
| --------- | -------- | ------- |
| `boolean` | No       | `false` |

### `isReadonly`

Optional boolean to show readonly input.

| TYPE      | REQUIRED | DEFAULT |
| --------- | -------- | ------- |
| `boolean` | No       | `false` |

### `isStateStylesDisabled`

Optional boolean to disable state styles.

| TYPE      | REQUIRED | DEFAULT |
| --------- | -------- | ------- |
| `boolean` | No       | `false` |

### `twClassName`

Use the `twClassName` prop to add Tailwind CSS classes to the component. These classes will be merged with the component's default classes using `twMerge`, allowing you to:

- Add new styles that don't exist in the default component
- Override the component's default styles when needed

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

```tsx
import { Input } from '@metamask/design-system-react-native';

// Add additional styles
<Input value="" twClassName="mt-4" placeholder="With margin" />

// Override default styles
<Input value="" twClassName="bg-error-default" placeholder="Override background" />
```

### `style`

Use the `style` prop to customize the component's appearance with React Native styles. For consistent styling, prefer using `twClassName` with Tailwind classes when possible. Use `style` with `tw.style()` for conditionals or dynamic values.

| TYPE                   | REQUIRED | DEFAULT     |
| ---------------------- | -------- | ----------- |
| `StyleProp<TextStyle>` | No       | `undefined` |

```tsx
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { Input } from '@metamask/design-system-react-native';

export const ConditionalExample = ({ isFocused }: { isFocused: boolean }) => {
  const tw = useTailwind();

  return (
    <Input
      value=""
      placeholder="Conditional styling"
      style={tw.style('text-default', isFocused && 'border-primary-default')}
    />
  );
};
```

## Migration from Mobile Component Library

For detailed migration instructions from the Mobile component-library, see the [Migration Guide](https://github.com/MetaMask/metamask-design-system/blob/main/packages/design-system-react-native/MIGRATION.md#input-component).

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
