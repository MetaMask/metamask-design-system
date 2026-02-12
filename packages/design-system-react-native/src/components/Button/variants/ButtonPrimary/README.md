# ButtonPrimary

`ButtonPrimary` is a button for most important and desired action to guide the user.

```tsx
import { ButtonPrimary } from '@metamask/design-system-react-native';

<ButtonPrimary onPress={() => {}}>Click Me</ButtonPrimary>;
```

## Props

### `children`

The content to display inside the button.

| **Type**          | **Required** | **Default** |
| ----------------- | ------------ | ----------- |
| `React.ReactNode` | Yes          | `undefined` |

```tsx
<ButtonPrimary onPress={() => {}}>Button Content</ButtonPrimary>
```

### `onPress`

Function to trigger when the button is pressed.

| **Type**     | **Required** | **Default** |
| ------------ | ------------ | ----------- |
| `() => void` | Yes          | `undefined` |

```tsx
<ButtonPrimary onPress={() => console.log('Primary button pressed!')}>
  Click Me
</ButtonPrimary>
```

### `size`

Defines the size of the button.

| **Type**     | **Required** | **Default**     |
| ------------ | ------------ | --------------- |
| `ButtonSize` | No           | `ButtonSize.Lg` |

```tsx
<ButtonPrimary size={ButtonSize.Sm} onPress={() => {}}>Small Button</ButtonPrimary>
<ButtonPrimary size={ButtonSize.Lg} onPress={() => {}}>Large Button</ButtonPrimary>
```

### `isLoading`

Indicates whether the button is in a loading state. If `true`, a spinner is displayed, and the button's content is hidden.

| **Type**  | **Required** | **Default** |
| --------- | ------------ | ----------- |
| `boolean` | No           | `false`     |

```tsx
<ButtonPrimary isLoading onPress={() => {}}>
  Loading Button
</ButtonPrimary>
```

### `loadingText`

Text to display alongside the spinner when the button is loading.

| **Type** | **Required** | **Default** |
| -------- | ------------ | ----------- |
| `string` | No           | `undefined` |

```tsx
<ButtonPrimary isLoading loadingText="Loading..." onPress={() => {}}>
  Button with Loading Text
</ButtonPrimary>
```

### `isDisabled`

Disables the button, preventing interaction.

| **Type**  | **Required** | **Default** |
| --------- | ------------ | ----------- |
| `boolean` | No           | `false`     |

```tsx
<ButtonPrimary isDisabled onPress={() => {}}>
  Disabled Button
</ButtonPrimary>
```

### `isDanger`

Renders the button in a danger style to indicate destructive actions.

| **Type**  | **Required** | **Default** |
| --------- | ------------ | ----------- |
| `boolean` | No           | `false`     |

```tsx
<ButtonPrimary isDanger onPress={() => {}}>
  Danger Button
</ButtonPrimary>
```

### `isInverse`

Renders the button with inverted colors for use on dark backgrounds.

| **Type**  | **Required** | **Default** |
| --------- | ------------ | ----------- |
| `boolean` | No           | `false`     |

```tsx
<ButtonPrimary isInverse onPress={() => {}}>
  Inverse Button
</ButtonPrimary>
```

### `startIconName`

Name of the icon to display at the start of the button.

| **Type** | **Required** | **Default** |
| -------- | ------------ | ----------- |
| `string` | No           | `undefined` |

```tsx
<ButtonPrimary startIconName="add" onPress={() => {}}>
  Button with Start Icon
</ButtonPrimary>
```

### `endIconName`

Name of the icon to display at the end of the button.

| **Type** | **Required** | **Default** |
| -------- | ------------ | ----------- |
| `string` | No           | `undefined` |

```tsx
<ButtonPrimary endIconName="check" onPress={() => {}}>
  Button with End Icon
</ButtonPrimary>
```

### `twClassName`

TailwindCSS class names to apply custom styling.

| **Type** | **Required** | **Default** |
| -------- | ------------ | ----------- |
| `string` | No           | `undefined` |

```tsx
<ButtonPrimary twClassName="shadow-lg" onPress={() => {}}>
  Custom Styled Button
</ButtonPrimary>
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
  <ButtonPrimary style={styles.custom} onPress={() => {}}>
    Custom Styled Button
  </ButtonPrimary>
);
```

## Notes

- `ButtonPrimary` supports TailwindCSS classes via the `twClassName` prop for custom styling.
- The button automatically adjusts its styles based on the `isDanger` and `isInverse` props.
- Use the `isLoading` state to display a spinner and loading text, enhancing user feedback for asynchronous actions.
