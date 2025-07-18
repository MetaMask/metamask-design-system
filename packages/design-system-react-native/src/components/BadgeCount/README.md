# BadgeCount

BadgeCount is used to render count badges within an interface.

```tsx
import { BadgeCount } from '@metamask/design-system-react-native';

<BadgeCount count={5} />;
```

## Props

### `count`

The count value to display in the badge.

| TYPE | REQUIRED | DEFAULT |
|------|----------|---------|
| `number` | Yes | `undefined` |

```tsx
<BadgeCount count={5} />
```

### `maxCount`

Maximum count to display before showing overflow indicator (e.g., "99+").

| TYPE | REQUIRED | DEFAULT |
|------|----------|---------|
| `number` | No | `99` |

```tsx
<BadgeCount count={150} maxCount={99} />
```

### `showZero`

Whether to show the badge when count is zero.

| TYPE | REQUIRED | DEFAULT |
|------|----------|---------|
| `boolean` | No | `false` |

```tsx
<BadgeCount count={0} showZero />
```

### `twClassName`

Use the `twClassName` prop to add Tailwind CSS classes to the component. These classes will be merged with the component's default classes using `twMerge`, allowing you to:

- Add new styles that don't exist in the default component
- Override the component's default styles when needed

| TYPE | REQUIRED | DEFAULT |
|------|----------|---------|
| `string` | No | `undefined` |

```tsx
import { BadgeCount } from '@metamask/design-system-react-native';

// Add additional styles
<BadgeCount 
  count={5}
  twClassName="bg-primary-100"
>
  Custom Background
</BadgeCount>

// Override default styles
<BadgeCount 
  count={5}
  twClassName="!bg-error-100"
>
  Override Background
</BadgeCount>
```

### `style`

Use the `style` prop to customize the component's appearance with React Native styles. For consistent styling, prefer using `twClassName` with Tailwind classes when possible, and use `style` for dynamic values or styles not available in Tailwind.

| TYPE | REQUIRED | DEFAULT |
|------|----------|---------|
| `StyleProp<ViewStyle>` | No | `undefined` |

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
