# ButtonAnimated

ButtonAnimated is used to render animated button elements with scale animations within an interface.

```tsx
import { ButtonAnimated } from '@metamask/design-system-react-native';

<ButtonAnimated onPress={() => console.log('Pressed')}>
  Click Me
</ButtonAnimated>;
```

## Props

### `children`

The content of the ButtonAnimated component.

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | Yes      | `undefined` |

```tsx
import { ButtonAnimated } from '@metamask/design-system-react-native';

<ButtonAnimated onPress={() => {}}>Animated Button Content</ButtonAnimated>;
```

### `onPress`

Function to trigger when pressing the button.

| TYPE         | REQUIRED | DEFAULT     |
| ------------ | -------- | ----------- |
| `() => void` | Yes      | `undefined` |

```tsx
<ButtonAnimated onPress={() => console.log('Button pressed')}>
  Press me
</ButtonAnimated>
```

### `onPressIn`

Callback function triggered when the button is pressed in.

| TYPE         | REQUIRED | DEFAULT     |
| ------------ | -------- | ----------- |
| `() => void` | No       | `undefined` |

```tsx
<ButtonAnimated onPress={() => {}} onPressIn={() => console.log('Pressed in')}>
  Button with Press In
</ButtonAnimated>
```

### `onPressOut`

Callback function triggered when the button is released.

| TYPE         | REQUIRED | DEFAULT     |
| ------------ | -------- | ----------- |
| `() => void` | No       | `undefined` |

```tsx
<ButtonAnimated
  onPress={() => {}}
  onPressOut={() => console.log('Pressed out')}
>
  Button with Press Out
</ButtonAnimated>
```

### `disabled`

Whether the button is disabled.

| TYPE      | REQUIRED | DEFAULT |
| --------- | -------- | ------- |
| `boolean` | No       | `false` |

```tsx
<ButtonAnimated onPress={() => {}} disabled>
  Disabled Button
</ButtonAnimated>
```

### `twClassName`

Use the `twClassName` prop to add Tailwind CSS classes to the component. These classes will be merged with the component's default classes using `twMerge`, allowing you to:

- Add new styles that don't exist in the default component
- Override the component's default styles when needed

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

```tsx
import { ButtonAnimated } from '@metamask/design-system-react-native';

// Add additional styles
<ButtonAnimated
  onPress={() => {}}
  twClassName="bg-primary-100"
>
  Custom Background
</ButtonAnimated>

// Override default styles
<ButtonAnimated
  onPress={() => {}}
  twClassName="!bg-error-100"
>
  Override Background
</ButtonAnimated>
```

### `style`

Use the `style` prop to customize the component's appearance with React Native styles. For consistent styling, prefer using `twClassName` with Tailwind classes when possible, and use `style` for dynamic values or styles not available in Tailwind.

| TYPE                   | REQUIRED | DEFAULT     |
| ---------------------- | -------- | ----------- |
| `StyleProp<ViewStyle>` | No       | `undefined` |

```tsx
const styles = StyleSheet.create({
  custom: {
    marginVertical: 8,
    marginHorizontal: 16,
  },
});

export const StyleExample = () => (
  <ButtonAnimated onPress={() => {}} style={styles.custom}>
    Custom styled animated button
  </ButtonAnimated>
);
```

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
