# Card

Card is a container component used to group and display related content with a default border and background.

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

### `onPress`

Optional callback when the card is pressed. When provided, the card renders as a `TouchableOpacity` instead of a `View`.

| TYPE         | REQUIRED | DEFAULT     |
| ------------ | -------- | ----------- |
| `() => void` | No       | `undefined` |

```tsx
import { Card } from '@metamask/design-system-react-native';

<Card onPress={() => console.log('Card pressed')}>
  <Text>Pressable card</Text>
</Card>;
```

### `touchableOpacityProps`

Optional props to pass to the underlying `TouchableOpacity` when `onPress` is provided. Use this for TouchableOpacity-specific props like `activeOpacity` or a separate `testID` for the interactive element.

| TYPE                                                              | REQUIRED | DEFAULT     |
| ----------------------------------------------------------------- | -------- | ----------- |
| `Omit<TouchableOpacityProps, 'onPress' \| 'style' \| 'children'>` | No       | `undefined` |

```tsx
import { Card } from '@metamask/design-system-react-native';

<Card
  onPress={() => {}}
  touchableOpacityProps={{ activeOpacity: 0.7, testID: 'card-touchable' }}
>
  <Text>Pressable card with custom opacity</Text>
</Card>;
```

### `twClassName`

Use the `twClassName` prop to add Tailwind CSS classes to the component. These classes will be merged with the component's default classes using `tw.style()`, allowing you to:

- Add new styles that don't exist in the default component
- Override the component's default styles when needed

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

```tsx
import { Card } from '@metamask/design-system-react-native';

// Add additional styles
<Card twClassName="mt-4">
  <Text>Card with margin</Text>
</Card>

// Override default styles
<Card twClassName="p-8 rounded-lg">
  <Text>Card with larger padding and border radius</Text>
</Card>
```

### `style`

Use the `style` prop to customize the component's appearance with React Native styles. For consistent styling, prefer using `twClassName` with Tailwind classes when possible. Use `style` with `tw.style()` for conditionals or dynamic values.

| TYPE                   | REQUIRED | DEFAULT     |
| ---------------------- | -------- | ----------- |
| `StyleProp<ViewStyle>` | No       | `undefined` |

```tsx
import { useTailwind } from '@metamask/design-system-twrnc-preset';

export const ConditionalExample = ({ isActive }: { isActive: boolean }) => {
  const tw = useTailwind();

  return (
    <Card style={tw.style('bg-default', isActive && 'bg-success-default')}>
      Conditional styling
    </Card>
  );
};
```

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
