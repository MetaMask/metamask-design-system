# Card

Card is a container component used to group and display related content with a rounded background.

```tsx
import { Card } from '@metamask/design-system-react-native';

<Card>
  <Text>Card content</Text>
</Card>;
```

## Props

### `children`

The content to display inside the card.

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | Yes      | `undefined` |

```tsx
import { Card } from '@metamask/design-system-react-native';

<Card>
  <Text>Card content</Text>
</Card>;
```

### `isInteractive`

When `true`, the card renders as a `Pressable` and accepts all `PressableProps` (e.g. `onPress`, `onLongPress`, `accessibilityRole`). A pressed background overlay is applied automatically. When `false` (default), the card renders as a `View`.

| TYPE      | REQUIRED | DEFAULT |
| --------- | -------- | ------- |
| `boolean` | No       | `false` |

```tsx
import { Card } from '@metamask/design-system-react-native';

<Card
  isInteractive
  onPress={() => console.log('Card pressed')}
  onLongPress={() => console.log('Card long pressed')}
>
  <Text>Interactive card</Text>
</Card>;
```

### `className`

Use the `className` prop to add Tailwind CSS classes to the component. These classes are applied after the component's default classes, allowing you to:

- Add new styles that don't exist in the default component
- Override the component's default styles when needed

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

```tsx
import { Card } from '@metamask/design-system-react-native';

// Add additional styles
<Card className="mt-4">
  <Text>Card with margin</Text>
</Card>

// Override default styles
<Card className="p-8 rounded-lg">
  <Text>Card with larger padding and border radius</Text>
</Card>
```

> **Migrating from `twClassName`:** `twClassName` still works but is deprecated. Rename it to `className`. If both are passed, classes merge in this order: the component's own classes, then `twClassName`, then `className`, so `className` wins on conflicts.

### `style`

Use the `style` prop to customize the component's appearance with React Native styles. For consistent styling, prefer using `className` with Tailwind classes when possible. When `isInteractive` is `true`, `style` may also be a function `({ pressed }) => StyleProp<ViewStyle>`.

| TYPE                                                                                    | REQUIRED | DEFAULT     |
| --------------------------------------------------------------------------------------- | -------- | ----------- |
| `StyleProp<ViewStyle>` or `(state: PressableStateCallbackType) => StyleProp<ViewStyle>` | No       | `undefined` |

```tsx
import { useTailwind } from '@metamask/design-system-twrnc-preset';

export const ConditionalExample = ({ isActive }: { isActive: boolean }) => {
  const tw = useTailwind();

  return (
    <Card style={tw.style('bg-section', isActive && 'bg-success-default')}>
      Conditional styling
    </Card>
  );
};
```

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
