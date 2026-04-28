# NetworkSelectButton

`NetworkSelectButton` is a thin wrapper around [`SelectButton`](../SelectButton). It maps **`networkName`** to **`value`** and, when **`networkSrc`** is set, renders an [`AvatarNetwork`](../AvatarNetwork) in **`startAccessory`** (caller **`startAccessory`** is ignored in that case). **`placeholder`** is still required on the underlying select row. Optional **`avatarNetworkProps`** are spread onto `AvatarNetwork`; **`src`** and **`name`** are applied after the spread.

```tsx
import {
  NetworkSegmentButton,
  NetworkSelectButton,
  SegmentGroup,
  SelectButtonEndArrow,
} from '@metamask/design-system-react-native';

<SegmentGroup value={value} onChange={setValue}>
  <NetworkSegmentButton
    value="eth"
    onPress={() => {}}
    networkName="Ethereum"
    networkSrc={{ uri: 'https://example.com/eth.png' }}
  />
  <NetworkSelectButton
    placeholder="Network"
    onPress={() => {}}
    endArrowDirection={SelectButtonEndArrow.Down}
    networkName="Ethereum"
    networkSrc={{ uri: 'https://example.com/eth.png' }}
  />
</SegmentGroup>;
```

## Props

Same as `SelectButton` except **`value`** is omitted; use **`networkName`** instead (passed through as **`value`**). Additional props: **`networkSrc`**, **`avatarNetworkProps`**.

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
