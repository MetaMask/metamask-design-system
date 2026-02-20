# Button

Button is a labeled element that a user can click or tap to initiate an action.

```tsx
import { Button } from '@metamask/design-system-react-native';

<Button onPress={() => console.log('Pressed')}>Click me</Button>;
```

## Props

### `children`

Required prop for the content to be rendered within the Button.

| TYPE                        | REQUIRED | DEFAULT     |
| --------------------------- | -------- | ----------- |
| `React.ReactNode \| string` | Yes      | `undefined` |

```tsx
<Button onPress={() => {}}>Submit</Button>
<Button onPress={() => {}}>
  <Text>Custom content</Text>
</Button>
```

### `onPress`

Function to trigger when pressing the button.

| TYPE         | REQUIRED | DEFAULT     |
| ------------ | -------- | ----------- |
| `() => void` | Yes      | `undefined` |

```tsx
<Button onPress={() => console.log('Button pressed')}>Press me</Button>
```

### `variant`

The visual variant of the button.

Available variants:

- `ButtonVariant.Primary`
- `ButtonVariant.Secondary`
- `ButtonVariant.Tertiary`

| TYPE            | REQUIRED | DEFAULT     |
| --------------- | -------- | ----------- |
| `ButtonVariant` | Yes      | `undefined` |

```tsx
<Button variant={ButtonVariant.Primary} onPress={() => {}}>
  Primary
</Button>
<Button variant={ButtonVariant.Secondary} onPress={() => {}}>
  Secondary
</Button>
```

### `size`

The size of the button.

Available sizes:

- `ButtonBaseSize.Sm` (32px height)
- `ButtonBaseSize.Md` (40px height)
- `ButtonBaseSize.Lg` (48px height)

| TYPE             | REQUIRED | DEFAULT             |
| ---------------- | -------- | ------------------- |
| `ButtonBaseSize` | No       | `ButtonBaseSize.Lg` |

```tsx
<Button variant={ButtonVariant.Primary} size={ButtonBaseSize.Sm} onPress={() => {}}>
  Small Button
</Button>
<Button variant={ButtonVariant.Primary} size={ButtonBaseSize.Lg} onPress={() => {}}>
  Large Button
</Button>
```

### `startIconName`

Optional icon name to display before the content.

| TYPE       | REQUIRED | DEFAULT     |
| ---------- | -------- | ----------- |
| `IconName` | No       | `undefined` |

```tsx
<Button
  variant={ButtonVariant.Primary}
  startIconName="CheckBold"
  onPress={() => {}}
>
  Save
</Button>
```

### `endIconName`

Optional icon name to display after the content.

| TYPE       | REQUIRED | DEFAULT     |
| ---------- | -------- | ----------- |
| `IconName` | No       | `undefined` |

```tsx
<Button
  variant={ButtonVariant.Primary}
  endIconName="ArrowRight"
  onPress={() => {}}
>
  Continue
</Button>
```

### `isDanger`

Whether to show the button in danger state (only available for Primary variant).

| TYPE      | REQUIRED | DEFAULT |
| --------- | -------- | ------- |
| `boolean` | No       | `false` |

```tsx
<Button variant={ButtonVariant.Primary} isDanger onPress={() => {}}>
  Delete
</Button>
```

### `isInverse`

Whether to show the button with inverted colors for use on colored backgrounds (only available for Primary variant).

| TYPE      | REQUIRED | DEFAULT |
| --------- | -------- | ------- |
| `boolean` | No       | `false` |

```tsx
<Button variant={ButtonVariant.Primary} isInverse onPress={() => {}}>
  Inverse Button
</Button>
```

### `isDisabled`

Whether the button is disabled.

| TYPE      | REQUIRED | DEFAULT |
| --------- | -------- | ------- |
| `boolean` | No       | `false` |

```tsx
<Button variant={ButtonVariant.Primary} isDisabled onPress={() => {}}>
  Disabled
</Button>
```

### `isFullWidth`

Whether the button should take up the full width of its container.

| TYPE      | REQUIRED | DEFAULT |
| --------- | -------- | ------- |
| `boolean` | No       | `false` |

```tsx
<Button variant={ButtonVariant.Primary} isFullWidth onPress={() => {}}>
  Full Width Button
</Button>
```

### `isLoading`

Whether the button is in a loading state, showing a spinner.

| TYPE      | REQUIRED | DEFAULT |
| --------- | -------- | ------- |
| `boolean` | No       | `false` |

```tsx
<Button variant={ButtonVariant.Primary} isLoading onPress={() => {}}>
  Loading Button
</Button>
```

### `loadingText`

Text to display when the button is in loading state.

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

```tsx
<Button
  variant={ButtonVariant.Primary}
  isLoading
  loadingText="Please wait..."
  onPress={() => {}}
>
  Submit
</Button>
```

### `twClassName`

Use the `twClassName` prop to add Tailwind CSS classes to the component. These classes will be merged with the component's default classes using `twMerge`, allowing you to:

- Add new styles that don't exist in the default component
- Override the component's default styles when needed

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

```tsx
import { Button } from '@metamask/design-system-react-native';

// Add additional styles
<Button
  variant={ButtonVariant.Primary}
  onPress={() => {}}
  twClassName="shadow-lg"
>
  Custom Shadow
</Button>

// Override default styles
<Button
  variant={ButtonVariant.Primary}
  onPress={() => {}}
  twClassName="!bg-error-100"
>
  Override Background
</Button>
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
  <Button
    variant={ButtonVariant.Primary}
    onPress={() => {}}
    style={styles.custom}
  >
    Custom Button
  </Button>
);
```

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
