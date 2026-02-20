# TextButton

TextButton is used for text-only button actions or hyperlink without padding or background.

```tsx
import { TextButton } from '@metamask/design-system-react-native';

<TextButton onPress={() => console.log('Pressed')}>Click me</TextButton>;
```

## Props

### `children`

The text content of the TextButton component.

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | Yes      | `undefined` |

```tsx
import { TextButton } from '@metamask/design-system-react-native';

<TextButton onPress={() => {}}>Custom button text</TextButton>;
```

### `onPress`

Function to trigger when pressing the button.

| TYPE         | REQUIRED | DEFAULT     |
| ------------ | -------- | ----------- |
| `() => void` | Yes      | `undefined` |

```tsx
<TextButton onPress={() => console.log('Text button pressed')}>
  Press me
</TextButton>
```

### `size`

The size of the text button.

Available sizes:

- `TextButtonSize.Sm`
- `TextButtonSize.Md`
- `TextButtonSize.Lg`

| TYPE             | REQUIRED | DEFAULT                 |
| ---------------- | -------- | ----------------------- |
| `TextButtonSize` | No       | `TextButtonSize.BodyMd` |

```tsx
<TextButton size={TextButtonSize.Sm} onPress={() => {}}>
  Small Text Button
</TextButton>
<TextButton size={TextButtonSize.Lg} onPress={() => {}}>
  Large Text Button
</TextButton>
```

### `isDisabled`

Whether the text button is disabled.

| TYPE      | REQUIRED | DEFAULT |
| --------- | -------- | ------- |
| `boolean` | No       | `false` |

```tsx
<TextButton isDisabled onPress={() => {}}>
  Disabled Text Button
</TextButton>
```

### `isInverse`

Whether to show the button with inverted colors for use on colored backgrounds.

| TYPE      | REQUIRED | DEFAULT |
| --------- | -------- | ------- |
| `boolean` | No       | `false` |

```tsx
<TextButton isInverse onPress={() => {}}>
  Inverse Text Button
</TextButton>
```

### `startIconName`

Optional icon name to display before the text.

| TYPE       | REQUIRED | DEFAULT     |
| ---------- | -------- | ----------- |
| `IconName` | No       | `undefined` |

```tsx
<TextButton startIconName="ArrowLeft" onPress={() => {}}>
  Back
</TextButton>
```

### `endIconName`

Optional icon name to display after the text.

| TYPE       | REQUIRED | DEFAULT     |
| ---------- | -------- | ----------- |
| `IconName` | No       | `undefined` |

```tsx
<TextButton endIconName="ArrowRight" onPress={() => {}}>
  Continue
</TextButton>
```

### `startAccessory`

Optional custom element to show at the start of the button.

| TYPE              | REQUIRED | DEFAULT     |
| ----------------- | -------- | ----------- |
| `React.ReactNode` | No       | `undefined` |

```tsx
<TextButton startAccessory={<CustomIcon />} onPress={() => {}}>
  Custom Start
</TextButton>
```

### `endAccessory`

Optional custom element to show at the end of the button.

| TYPE              | REQUIRED | DEFAULT     |
| ----------------- | -------- | ----------- |
| `React.ReactNode` | No       | `undefined` |

```tsx
<TextButton endAccessory={<CustomIcon />} onPress={() => {}}>
  Custom End
</TextButton>
```

### `textProps`

Optional props to be passed to the Text component.

| TYPE                                   | REQUIRED | DEFAULT     |
| -------------------------------------- | -------- | ----------- |
| `Omit<Partial<TextProps>, 'children'>` | No       | `undefined` |

```tsx
<TextButton
  textProps={{ variant: TextVariant.BodySm, color: TextColor.TextMuted }}
  onPress={() => {}}
>
  Custom Text Styling
</TextButton>
```

### `twClassName`

Use the `twClassName` prop to add Tailwind CSS classes to the component. These classes will be merged with the component's default classes using `twMerge`, allowing you to:

- Add new styles that don't exist in the default component
- Override the component's default styles when needed

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

```tsx
import { TextButton } from '@metamask/design-system-react-native';

// Add additional styles
<TextButton
  onPress={() => {}}
  twClassName="underline"
>
  Underlined Text Button
</TextButton>

// Override default styles
<TextButton
  onPress={() => {}}
  twClassName="!text-error-100"
>
  Override Text Color
</TextButton>
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
  <TextButton onPress={() => {}} style={styles.custom}>
    Custom Text Button
  </TextButton>
);
```

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
