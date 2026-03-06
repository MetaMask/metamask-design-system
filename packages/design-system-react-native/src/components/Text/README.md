# Text

Text is used to render text and paragraphs within an interface.

```tsx
import { Text } from '@metamask/design-system-react-native';

<Text>Default Text</Text>;
```

## Props

### `children`

Text content to be displayed.

| TYPE                  | REQUIRED | DEFAULT     |
| --------------------- | -------- | ----------- |
| `string \| ReactNode` | Yes      | `undefined` |

```tsx
import { Text } from '@metamask/design-system-react-native';

<Text>Sample text content</Text>;
```

### `variant`

Optional enum to select between typography variants.

Available variants:

- `TextVariant.DisplayLg`
- `TextVariant.DisplayMd`
- `TextVariant.HeadingLg`
- `TextVariant.HeadingMd`
- `TextVariant.HeadingSm`
- `TextVariant.BodyLg`
- `TextVariant.BodyMd`
- `TextVariant.BodySm`
- `TextVariant.BodyXs`

| TYPE          | REQUIRED | DEFAULT              |
| ------------- | -------- | -------------------- |
| `TextVariant` | No       | `TextVariant.BodyMd` |

```tsx
<Text variant={TextVariant.HeadingLg}>Large Heading</Text>
<Text variant={TextVariant.BodySm}>Small body text</Text>
```

### `color`

Optional prop to set the text color.

Available colors:

- `TextColor.TextDefault`
- `TextColor.TextAlternative`
- `TextColor.TextMuted`
- `TextColor.PrimaryDefault`
- `TextColor.ErrorDefault`
- `TextColor.SuccessDefault`
- `TextColor.WarningDefault`
- `TextColor.InfoDefault`

| TYPE        | REQUIRED | DEFAULT                 |
| ----------- | -------- | ----------------------- |
| `TextColor` | No       | `TextColor.TextDefault` |

```tsx
<Text color={TextColor.PrimaryDefault}>Primary colored text</Text>
<Text color={TextColor.ErrorDefault}>Error text</Text>
```

### `fontWeight`

Optional prop to adjust the font weight.

Available font weights:

- `FontWeight.Regular` (Weight 400)
- `FontWeight.Medium` (Weight 500)
- `FontWeight.Bold` (Weight 700)

| TYPE         | REQUIRED | DEFAULT              |
| ------------ | -------- | -------------------- |
| `FontWeight` | No       | `FontWeight.Regular` |

```tsx
<Text fontWeight={FontWeight.Bold}>Bold text</Text>
<Text fontWeight={FontWeight.Medium}>Medium weight text</Text>
```

### `fontStyle`

Optional prop to adjust the font style.

Available font styles:

- `FontStyle.Normal`
- `FontStyle.Italic`

| TYPE        | REQUIRED | DEFAULT            |
| ----------- | -------- | ------------------ |
| `FontStyle` | No       | `FontStyle.Normal` |

```tsx
<Text fontStyle={FontStyle.Italic}>Italic text</Text>
```

### `twClassName`

Use the `twClassName` prop to add Tailwind CSS classes to the component. These classes will be merged with the component's default classes using `twMerge`, allowing you to:

- Add new styles that don't exist in the default component
- Override the component's default styles when needed

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

```tsx
import { Text } from '@metamask/design-system-react-native';

// Add additional styles
<Text twClassName="underline text-center">
  Underlined centered text
</Text>

// Override default styles
<Text twClassName="!text-error-100">
  Override Text Color
</Text>
```

### `style`

Use the `style` prop to customize the component's appearance with React Native styles. For consistent styling, prefer using `twClassName` with Tailwind classes when possible, and use `style` for dynamic values or styles not available in Tailwind.

| TYPE                   | REQUIRED | DEFAULT     |
| ---------------------- | -------- | ----------- |
| `StyleProp<TextStyle>` | No       | `undefined` |

```tsx
const styles = StyleSheet.create({
  custom: {
    marginVertical: 8,
    marginHorizontal: 16,
  },
});

export const StyleExample = () => (
  <Text style={styles.custom}>Custom styled text</Text>
);
```

## Migration from Mobile Component Library

For detailed migration instructions from the Mobile component-library, see the [Migration Guide](https://github.com/MetaMask/metamask-design-system/blob/main/packages/design-system-react-native/MIGRATION.md#text-component).

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
