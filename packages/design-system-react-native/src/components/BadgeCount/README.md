# BadgeCount

BadgeCount is a numeric indicator of unread messages or notifications on an app or UI element.

```tsx
import { BadgeCount } from '@metamask/design-system-react-native';

<BadgeCount count={5} />;
```

## Props

### `count`

The count value to display in the badge.

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `number` | Yes      | `undefined` |

```tsx
<BadgeCount count={5} />
```

### `max`

Maximum count to display before showing overflow indicator (e.g., "99+").

| TYPE     | REQUIRED | DEFAULT |
| -------- | -------- | ------- |
| `number` | No       | `99`    |

```tsx
<BadgeCount count={150} max={99} />
```

### `size`

The size of the BadgeCount.

Available sizes:

- `BadgeCountSize.Sm` (16px)
- `BadgeCountSize.Md` (20px)
- `BadgeCountSize.Lg` (24px)

| TYPE             | REQUIRED | DEFAULT             |
| ---------------- | -------- | ------------------- |
| `BadgeCountSize` | No       | `BadgeCountSize.Md` |

```tsx
<BadgeCount count={5} size={BadgeCountSize.Sm} />
<BadgeCount count={5} />
<BadgeCount count={10} size={BadgeCountSize.Lg} />
```

### `twClassName`

Use the `twClassName` prop to add Tailwind CSS classes to the component. These classes will be merged with the component's default classes using `twMerge`, allowing you to:

- Add new styles that don't exist in the default component
- Override the component's default styles when needed

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

```tsx
import { BadgeCount } from '@metamask/design-system-react-native';

// Add additional styles
<BadgeCount
  count={5}
  twClassName="bg-primary-100"
/>

// Override default styles
<BadgeCount
  count={5}
  twClassName="!bg-error-100"
/>
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
  <BadgeCount count={5} style={styles.custom} />
);
```

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
