# BadgeWrapper

BadgeWrapper is used to wrap components with a badge indicator within an interface.

```tsx
import { BadgeWrapper } from '@metamask/design-system-react-native';

<BadgeWrapper badge={<BadgeCount count={5} />}>
  <Text>Content with badge</Text>
</BadgeWrapper>;
```

## Props

### `children`

The content to wrap with a badge.

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | Yes      | `undefined` |

```tsx
import { BadgeWrapper, BadgeCount } from '@metamask/design-system-react-native';

<BadgeWrapper badge={<BadgeCount count={3} />}>
  <Text>Wrapped content</Text>
</BadgeWrapper>;
```

### `badge`

The badge component to display.

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | Yes      | `undefined` |

```tsx
<BadgeWrapper badge={<BadgeCount count={5} />}>
  <View>Content</View>
</BadgeWrapper>
```

### `position`

The position of the badge relative to the wrapped content.

Available positions:

- `BadgeWrapperPosition.TopRight`
- `BadgeWrapperPosition.TopLeft`
- `BadgeWrapperPosition.BottomRight`
- `BadgeWrapperPosition.BottomLeft`

| TYPE                   | REQUIRED | DEFAULT                         |
| ---------------------- | -------- | ------------------------------- |
| `BadgeWrapperPosition` | No       | `BadgeWrapperPosition.TopRight` |

```tsx
<BadgeWrapper
  badge={<BadgeCount count={5} />}
  position={BadgeWrapperPosition.BottomRight}
>
  <Text>Content</Text>
</BadgeWrapper>
```

### `twClassName`

Use the `twClassName` prop to add Tailwind CSS classes to the component. These classes will be merged with the component's default classes using `twMerge`, allowing you to:

- Add new styles that don't exist in the default component
- Override the component's default styles when needed

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

```tsx
import { BadgeWrapper } from '@metamask/design-system-react-native';

// Add additional styles
<BadgeWrapper
  badge={<BadgeCount count={5} />}
  twClassName="bg-primary-100"
>
  Custom Background
</BadgeWrapper>

// Override default styles
<BadgeWrapper
  badge={<BadgeCount count={5} />}
  twClassName="!relative"
>
  Override Position
</BadgeWrapper>
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
  <BadgeWrapper badge={<BadgeCount count={5} />} style={styles.custom}>
    <Text>Custom styled content</Text>
  </BadgeWrapper>
);
```

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
