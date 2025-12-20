# ButtonSecondary

`ButtonSecondary` is a button for additional options that are helpful.

```tsx
import { ButtonSecondary } from '@metamask/design-system-react-native';

<ButtonSecondary onPress={() => {}}>Click Me</ButtonSecondary>;
```

## Props

### `children`

Content to display inside the button.

| **Type**          | **Required** | **Default** |
| ----------------- | ------------ | ----------- |
| `React.ReactNode` | Yes          | `undefined` |

```tsx
<ButtonSecondary onPress={() => {}}>Button Content</ButtonSecondary>
```

### `onPress`

Function to trigger when the button is pressed.

| **Type**     | **Required** | **Default** |
| ------------ | ------------ | ----------- |
| `() => void` | Yes          | `undefined` |

```tsx
<ButtonSecondary onPress={() => console.log('Secondary button pressed!')}>
  Click Me
</ButtonSecondary>
```

### `size`

Defines the size of the button.

| **Type**     | **Required** | **Default**     |
| ------------ | ------------ | --------------- |
| `ButtonSize` | No           | `ButtonSize.Lg` |

```tsx
<ButtonSecondary size={ButtonSize.Sm} onPress={() => {}}>Small Button</ButtonSecondary>
<ButtonSecondary size={ButtonSize.Lg} onPress={() => {}}>Large Button</ButtonSecondary>
```

### `isLoading`

Indicates whether the button is in a loading state. If `true`, a spinner is displayed, and the button's content is hidden.

| **Type**  | **Required** | **Default** |
| --------- | ------------ | ----------- |
| `boolean` | No           | `false`     |

```tsx
<ButtonSecondary isLoading onPress={() => {}}>
  Loading Button
</ButtonSecondary>
```

### `loadingText`

Text to display alongside the spinner when the button is loading.

| **Type** | **Required** | **Default** |
| -------- | ------------ | ----------- |
| `string` | No           | `undefined` |

```tsx
<ButtonSecondary isLoading loadingText="Loading..." onPress={() => {}}>
  Button with Loading Text
</ButtonSecondary>
```

### `isDisabled`

Disables the button, preventing interaction.

| **Type**  | **Required** | **Default** |
| --------- | ------------ | ----------- |
| `boolean` | No           | `false`     |

```tsx
<ButtonSecondary isDisabled onPress={() => {}}>
  Disabled Button
</ButtonSecondary>
```

### `isDanger`

Renders the button in a danger style to indicate destructive actions.

| **Type**  | **Required** | **Default** |
| --------- | ------------ | ----------- |
| `boolean` | No           | `false`     |

```tsx
<ButtonSecondary isDanger onPress={() => {}}>
  Danger Button
</ButtonSecondary>
```

### `isInverse`

Renders the button with inverted colors for use on dark backgrounds.

| **Type**  | **Required** | **Default** |
| --------- | ------------ | ----------- |
| `boolean` | No           | `false`     |

```tsx
<ButtonSecondary isInverse onPress={() => {}}>
  Inverse Button
</ButtonSecondary>
```

### `startIconName`

Name of the icon to display at the start of the button.

| **Type** | **Required** | **Default** |
| -------- | ------------ | ----------- |
| `string` | No           | `undefined` |

```tsx
<ButtonSecondary startIconName="add" onPress={() => {}}>
  Button with Start Icon
</ButtonSecondary>
```

### `endIconName`

Name of the icon to display at the end of the button.

| **Type** | **Required** | **Default** |
| -------- | ------------ | ----------- |
| `string` | No           | `undefined` |

```tsx
<ButtonSecondary endIconName="check" onPress={() => {}}>
  Button with End Icon
</ButtonSecondary>
```

### `twClassName`

TailwindCSS class names to apply custom styling.

| **Type** | **Required** | **Default** |
| -------- | ------------ | ----------- |
| `string` | No           | `undefined` |

```tsx
<ButtonSecondary twClassName="shadow-lg" onPress={() => {}}>
  Custom Styled Button
</ButtonSecondary>
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
  <ButtonSecondary style={styles.custom} onPress={() => {}}>
    Custom Styled Button
  </ButtonSecondary>
);
```

## Notes

- `ButtonSecondary` supports TailwindCSS classes via the `twClassName` prop for custom styling.
- The button automatically adjusts its styles based on the `isDanger` and `isInverse` props.
- Use the `isLoading` state to display a spinner and loading text, enhancing user feedback for asynchronous actions.
