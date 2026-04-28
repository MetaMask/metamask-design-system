# TokenSelectButton

`TokenSelectButton` is a thin wrapper around [`SelectButton`](../SelectButton). It maps **`tokenName`** to **`value`** and, when **`tokenSrc`** is set, renders an [`AvatarToken`](../AvatarToken) in **`startAccessory`** (caller **`startAccessory`** is ignored in that case). **`placeholder`** remains required on the underlying select row. Optional **`avatarTokenProps`** are spread onto `AvatarToken`; **`src`** and **`name`** are applied after the spread so `tokenSrc` / `tokenName` take precedence.

```tsx
import {
  TokenSelectButton,
  SelectButtonEndArrow,
} from '@metamask/design-system-react-native';

<TokenSelectButton
  placeholder="Token"
  onPress={() => {}}
  endArrowDirection={SelectButtonEndArrow.Down}
  tokenName="ETH"
  tokenSrc={{ uri: 'https://example.com/eth.png' }}
/>;
```

## Props

Same as `SelectButton` except **`value`** is omitted; use **`tokenName`** instead (passed through as **`value`**). Additional props: **`tokenSrc`**, **`avatarTokenProps`**.

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
