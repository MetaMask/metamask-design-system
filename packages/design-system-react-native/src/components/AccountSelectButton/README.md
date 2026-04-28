# AccountSelectButton

`AccountSelectButton` is a thin wrapper around [`SelectButton`](../SelectButton). It maps **`accountName`** to **`value`** and, when **`accountAddress`** is set, renders an [`AvatarAccount`](../AvatarAccount) in **`startAccessory`** (caller **`startAccessory`** is ignored in that case). **`placeholder`** remains required on the underlying select row. Optional **`avatarAccountProps`** are spread onto `AvatarAccount`; **`address`** is set after the spread so **`accountAddress`** always wins.

```tsx
import {
  AccountSelectButton,
  SelectButtonEndArrow,
} from '@metamask/design-system-react-native';

<AccountSelectButton
  placeholder="Account"
  onPress={() => {}}
  endArrowDirection={SelectButtonEndArrow.Down}
  accountName="Wallet 1"
  accountAddress="0x0000000000000000000000000000000000000000"
/>;
```

## Props

Same as `SelectButton` except **`value`** is omitted; use **`accountName`** instead (passed through as **`value`**). Additional props: **`accountAddress`**, **`avatarAccountProps`**.

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
