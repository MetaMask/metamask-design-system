# BadgeNetwork

BadgeNetwork indicates the network an entity is connected to.

```tsx
import { BadgeNetwork } from '@metamask/design-system-react-native';

<BadgeNetwork name="ethereum" />;
```

## Props

### `name`

The network name for the badge.

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | Yes      | `undefined` |

```tsx
<BadgeNetwork name="ethereum" />
```

### `imageSource`

Custom image source for the network badge.

| TYPE                  | REQUIRED | DEFAULT     |
| --------------------- | -------- | ----------- |
| `ImageSourcePropType` | No       | `undefined` |

```tsx
<BadgeNetwork
  name="custom-network"
  imageSource={{ uri: 'https://example.com/network-icon.png' }}
/>
```

### `variant`

The visual variant of the badge.

Available variants:

- `BadgeNetworkVariant.Primary`
- `BadgeNetworkVariant.Secondary`

| TYPE                  | REQUIRED | DEFAULT                       |
| --------------------- | -------- | ----------------------------- |
| `BadgeNetworkVariant` | No       | `BadgeNetworkVariant.Primary` |

```tsx
<BadgeNetwork name="ethereum" variant={BadgeNetworkVariant.Primary} />
<BadgeNetwork name="ethereum" variant={BadgeNetworkVariant.Secondary} />
```

### `twClassName`

Use the `twClassName` prop to add Tailwind CSS classes to the component. These classes will be merged with the component's default classes using `twMerge`, allowing you to:

- Add new styles that don't exist in the default component
- Override the component's default styles when needed

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

```tsx
import { BadgeNetwork } from '@metamask/design-system-react-native';

// Add additional styles
<BadgeNetwork
  name="ethereum"
  twClassName="border-2 border-primary-100"
>
  Custom Border
</BadgeNetwork>

// Override default styles
<BadgeNetwork
  name="ethereum"
  twClassName="!bg-error-100"
>
  Override Background
</BadgeNetwork>
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
  <BadgeNetwork name="ethereum" style={styles.custom} />
);
```

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
