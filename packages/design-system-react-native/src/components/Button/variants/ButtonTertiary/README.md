# ButtonTertiary

`ButtonTertiary` is a button for optional and lowest attention.

```tsx
import { ButtonTertiary } from '@metamask/design-system-react-native';

<ButtonTertiary onPress={() => {}}>Click Me</ButtonTertiary>;
```

## Props

### `children`

The content to display inside the button.

| **Type**          | **Required** | **Default** |
| ----------------- | ------------ | ----------- |
| `React.ReactNode` | Yes          | `undefined` |

```tsx
<ButtonTertiary onPress={() => {}}>Button Content</ButtonTertiary>
```

### `onPress`

Function to trigger when the button is pressed.

| **Type**     | **Required** | **Default** |
| ------------ | ------------ | ----------- |
| `() => void` | Yes          | `undefined` |

```tsx
<ButtonTertiary onPress={() => console.log('Tertiary button pressed!')}>
  Click Me
</ButtonTertiary>
```

### `size`

Defines the size of the button.

| **Type**     | **Required** | **Default**     |
| ------------ | ------------ | --------------- |
| `ButtonSize` | No           | `ButtonSize.Lg` |

```tsx
<ButtonTertiary size={ButtonSize.Sm} onPress={() => {}}>Small Button</ButtonTertiary>
<ButtonTertiary size={ButtonSize.Lg} onPress={() => {}}>Large Button</ButtonTertiary>
```

### `isLoading`

Indicates whether the button is in a loading state. If `true`, a spinner is displayed, and the button's content is hidden.

| **Type**  | **Required** | **Default** |
| --------- | ------------ | ----------- |
| `boolean` | No           | `false`     |

```tsx
<ButtonTertiary isLoading onPress={() => {}}>
  Loading Button
</ButtonTertiary>
```

### `loadingText`

Text to display alongside the spinner when the button is loading.

| **Type** | **Required** | **Default** |
| -------- | ------------ | ----------- |
| `string` | No           | `undefined` |

```tsx
<ButtonTertiary isLoading loadingText="Loading..." onPress={() => {}}>
  Button with Loading Text
</ButtonTertiary>
```

### `isDisabled`

Disables the button, preventing interaction.

| **Type**  | **Required** | **Default** |
| --------- | ------------ | ----------- |
| `boolean` | No           | `false`     |

```tsx
<ButtonTertiary isDisabled onPress={() => {}}>
  Disabled Button
</ButtonTertiary>
```

### `isDanger`

Renders the button in a danger style to indicate destructive actions.

| **Type**  | **Required** | **Default** |
| --------- | ------------ | ----------- |
| `boolean` | No           | `false`     |

```tsx
<ButtonTertiary isDanger onPress={() => {}}>
  Danger Button
</ButtonTertiary>
```

### `isInverse`

Renders the button with inverted colors for use on dark backgrounds.

| **Type**  | **Required** | **Default** |
| --------- | ------------ | ----------- |
| `boolean` | No           | `false`     |

```tsx
<ButtonTertiary isInverse onPress={() => {}}>
  Inverse Button
</ButtonTertiary>
```

### `startIconName`

Name of the icon to display at the start of the button.

| **Type** | **Required** | **Default** |
| -------- | ------------ | ----------- |
| `string` | No           | `undefined` |

```tsx
<ButtonTertiary startIconName="add" onPress={() => {}}>
  Button with Start Icon
</ButtonTertiary>
```

### `endIconName`

Name of the icon to display at the end of the button.

| **Type** | **Required** | **Default** |
| -------- | ------------ | ----------- |
| `string` | No           | `undefined` |

```tsx
<ButtonTertiary endIconName="check" onPress={() => {}}>
  Button with End Icon
</ButtonTertiary>
```

### `twClassName`

TailwindCSS class names to apply custom styling.

| **Type** | **Required** | **Default** |
| -------- | ------------ | ----------- |
| `string` | No           | `undefined` |

```tsx
<ButtonTertiary twClassName="shadow-lg" onPress={() => {}}>
  Custom Styled Button
</ButtonTertiary>
```

### `style`

Custom styles to apply to the button.

| **Type**               | **Required** | **Default** |
| ---------------------- | ------------ | ----------- |
| `StyleProp<ViewStyle>` | No           | `undefined` |

```tsx
const styles = StyleSheet.create({
  custom: {
    marginVertical: 8,
    marginHorizontal: 16,
  },
});

export const StyleExample = () => (
  <ButtonTertiary style={styles.custom} onPress={() => {}}>
    Custom Styled Button
  </ButtonTertiary>
);
```

## Notes

- `ButtonTertiary` supports TailwindCSS classes via the `twClassName` prop for custom styling.
- The button automatically adjusts its styles based on the `isDanger` and `isInverse` props.
- Use the `isLoading` state to display a spinner and loading text, enhancing user feedback for asynchronous actions.
