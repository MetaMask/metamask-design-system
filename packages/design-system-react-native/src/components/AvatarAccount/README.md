# AvatarAccount

Avatar reserved for representing accounts inside of an avatar.

```tsx
import { AvatarAccount } from '@metamask/design-system-react-native';

<AvatarAccount address="0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8" />;
```

## Props

### `address`

Required address used as a unique identifier to generate the AvatarAccount art.

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | Yes      | `undefined` |

```tsx
<AvatarAccount address="0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8" />
```

### `variant`

Optional prop to control the variant of the avatar account.

Available variants:

- `AvatarAccountVariant.Jazzicon` (default)
- `AvatarAccountVariant.Blockies`
- `AvatarAccountVariant.Maskicon`

| TYPE                   | REQUIRED | DEFAULT                         |
| ---------------------- | -------- | ------------------------------- |
| `AvatarAccountVariant` | No       | `AvatarAccountVariant.Jazzicon` |

```tsx
<AvatarAccount
  address="0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8"
  variant={AvatarAccountVariant.Blockies}
/>
```

### `size`

The size of the AvatarAccount.

Available sizes:

- `AvatarSize.Xs` (16px)
- `AvatarSize.Sm` (24px)
- `AvatarSize.Md` (32px)
- `AvatarSize.Lg` (40px)
- `AvatarSize.Xl` (48px)

| TYPE         | REQUIRED | DEFAULT         |
| ------------ | -------- | --------------- |
| `AvatarSize` | No       | `AvatarSize.Md` |

```tsx
<AvatarAccount
  address="0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8"
  size={AvatarSize.Lg}
/>
```

### `blockiesProps`

Optional props to be passed to the Blockies component when the variant is Blockies.

| TYPE                     | REQUIRED | DEFAULT     |
| ------------------------ | -------- | ----------- |
| `Partial<BlockiesProps>` | No       | `undefined` |

```tsx
<AvatarAccount
  address="0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8"
  variant={AvatarAccountVariant.Blockies}
  blockiesProps={{ scale: 3 }}
/>
```

### `jazziconProps`

Optional props to be passed to the Jazzicon component when the variant is Jazzicon.

| TYPE                     | REQUIRED | DEFAULT     |
| ------------------------ | -------- | ----------- |
| `Partial<JazziconProps>` | No       | `undefined` |

```tsx
<AvatarAccount
  address="0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8"
  variant={AvatarAccountVariant.Jazzicon}
  jazziconProps={{ diameter: 40 }}
/>
```

### `maskiconProps`

Optional props to be passed to the Maskicon component when the variant is Maskicon.

| TYPE                     | REQUIRED | DEFAULT     |
| ------------------------ | -------- | ----------- |
| `Partial<MaskiconProps>` | No       | `undefined` |

```tsx
<AvatarAccount
  address="0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8"
  variant={AvatarAccountVariant.Maskicon}
  maskiconProps={{ showBorder: true }}
/>
```

### `twClassName`

Use the `twClassName` prop to add Tailwind CSS classes to the component. These classes will be merged with the component's default classes using `twMerge`, allowing you to:

- Add new styles that don't exist in the default component
- Override the component's default styles when needed

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

```tsx
import { AvatarAccount } from '@metamask/design-system-react-native';

// Add additional styles
<AvatarAccount
  address="0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8"
  twClassName="border-2 border-primary-100"
>
  Custom Border
</AvatarAccount>

// Override default styles
<AvatarAccount
  address="0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8"
  twClassName="!bg-error-100"
>
  Override Background
</AvatarAccount>
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
  <AvatarAccount
    address="0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8"
    style={styles.custom}
  />
);
```

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
