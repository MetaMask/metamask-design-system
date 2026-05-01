# Label

Label is used to describe the purpose of a form field. It renders a standardized text element with the `BodyMd` variant by default.

```tsx
import { Label } from '@metamask/design-system-react-native';

<Label>Email Address</Label>;
```

## Props

### `children`

The content of the Label component.

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | Yes      | `undefined` |

```tsx
import { Label } from '@metamask/design-system-react-native';

<Label>Username</Label>;
```

### `variant`

Optional enum to select between typography variants. The Label defaults to `TextVariant.BodyMd`.

| TYPE          | REQUIRED | DEFAULT              |
| ------------- | -------- | -------------------- |
| `TextVariant` | No       | `TextVariant.BodyMd` |

```tsx
import { Label } from '@metamask/design-system-react-native';
import { TextVariant } from '@metamask/design-system-react-native';

<Label variant={TextVariant.BodySm}>Small Label</Label>
<Label>Default Label (BodyMd)</Label>
```

### `twClassName`

Use the `twClassName` prop to add Tailwind CSS classes to the component. These classes will be merged with the component's default classes using `twMerge`, allowing you to:

- Add new styles that don't exist in the default component
- Override the component's default styles when needed

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

```tsx
import { Label } from '@metamask/design-system-react-native';

// Add additional styles
<Label twClassName="mb-2">Label with margin</Label>

// Override default styles
<Label twClassName="text-error-default">Required Field</Label>
```

### `style`

Use the `style` prop to customize the component's appearance with React Native styles. For consistent styling, prefer using `twClassName` with Tailwind classes when possible, and use `style` for dynamic values or styles not available in Tailwind.

| TYPE                   | REQUIRED | DEFAULT     |
| ---------------------- | -------- | ----------- |
| `StyleProp<TextStyle>` | No       | `undefined` |

```tsx
const styles = StyleSheet.create({
  custom: {
    marginBottom: 8,
  },
});

export const StyleExample = () => (
  <Label style={styles.custom}>Styled Label</Label>
);
```

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
