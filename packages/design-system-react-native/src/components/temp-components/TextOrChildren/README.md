# TextOrChildren

TextOrChildren is used to render either text or child components flexibly within an interface.

```tsx
import { TextOrChildren } from '@metamask/design-system-react-native';

<TextOrChildren>String Content</TextOrChildren>;
```

## Props

### `children`

The content to render. If a string, renders as Text component; otherwise renders child components directly.

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | Yes      | `undefined` |

```tsx
import { TextOrChildren } from '@metamask/design-system-react-native';

// Render string as Text component
<TextOrChildren>String Content</TextOrChildren>

// Render nested children directly
<TextOrChildren>
  <CustomComponent>Nested Content</CustomComponent>
</TextOrChildren>
```

### `textProps`

Optional props to configure the Text component when children is a string.

| TYPE                                   | REQUIRED | DEFAULT     |
| -------------------------------------- | -------- | ----------- |
| `Partial<Omit<TextProps, 'children'>>` | No       | `undefined` |

```tsx
<TextOrChildren
  textProps={{
    variant: TextVariant.BodyMd,
    color: TextColor.PrimaryDefault,
  }}
>
  Styled Text
</TextOrChildren>
```

### `twClassName`

Use the `twClassName` prop to add Tailwind CSS classes to the component. These classes will be merged with the component's default classes using `twMerge`, allowing you to:

- Add new styles that don't exist in the default component
- Override the component's default styles when needed

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

```tsx
import { TextOrChildren } from '@metamask/design-system-react-native';

// Add additional styles
<TextOrChildren twClassName="text-center">
  Centered Content
</TextOrChildren>

// Override default styles
<TextOrChildren twClassName="!text-error-100">
  Override Text Color
</TextOrChildren>
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
  <TextOrChildren style={styles.custom}>Custom styled content</TextOrChildren>
);
```

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
