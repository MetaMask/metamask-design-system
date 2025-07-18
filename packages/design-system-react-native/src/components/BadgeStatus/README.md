# BadgeStatus

BadgeStatus is used to render status badges within an interface.

```tsx
import { BadgeStatus } from '@metamask/design-system-react-native';

<BadgeStatus variant={BadgeStatusVariant.Success} />;
```

## Props

### `variant`

The status variant of the badge.

Available variants:

- `BadgeStatusVariant.Success`
- `BadgeStatusVariant.Error`
- `BadgeStatusVariant.Warning`
- `BadgeStatusVariant.Info`

| TYPE | REQUIRED | DEFAULT |
|------|----------|---------|
| `BadgeStatusVariant` | Yes | `undefined` |

```tsx
<BadgeStatus variant={BadgeStatusVariant.Success} />
<BadgeStatus variant={BadgeStatusVariant.Error} />
<BadgeStatus variant={BadgeStatusVariant.Warning} />
<BadgeStatus variant={BadgeStatusVariant.Info} />
```

### `size`

The size of the BadgeStatus.

Available sizes:

- `BadgeStatusSize.Sm` (8px)
- `BadgeStatusSize.Md` (12px)

| TYPE | REQUIRED | DEFAULT |
|------|----------|---------|
| `BadgeStatusSize` | No | `BadgeStatusSize.Md` |

```tsx
<BadgeStatus 
  variant={BadgeStatusVariant.Success} 
  size={BadgeStatusSize.Sm} 
/>
<BadgeStatus variant={BadgeStatusVariant.Success} />
```

### `twClassName`

Use the `twClassName` prop to add Tailwind CSS classes to the component. These classes will be merged with the component's default classes using `twMerge`, allowing you to:

- Add new styles that don't exist in the default component
- Override the component's default styles when needed

| TYPE | REQUIRED | DEFAULT |
|------|----------|---------|
| `string` | No | `undefined` |

```tsx
import { BadgeStatus } from '@metamask/design-system-react-native';

// Add additional styles
<BadgeStatus 
  variant={BadgeStatusVariant.Success}
  twClassName="border-2 border-primary-100"
>
  Custom Border
</BadgeStatus>

// Override default styles
<BadgeStatus 
  variant={BadgeStatusVariant.Success}
  twClassName="!bg-error-100"
>
  Override Background
</BadgeStatus>
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
  <BadgeStatus 
    variant={BadgeStatusVariant.Success} 
    style={styles.custom} 
  />
);
```

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
