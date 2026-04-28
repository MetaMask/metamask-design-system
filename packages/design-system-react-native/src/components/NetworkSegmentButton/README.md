# NetworkSegmentButton

`NetworkSegmentButton` is a thin wrapper around [`SegmentButton`](../SegmentButton). It maps **`networkName`** to the segment **`children`** (visible text) and, when **`networkSrc`** is set, renders an [`AvatarNetwork`](../AvatarNetwork) in **`startAccessory`** (caller **`startAccessory`** is ignored in that case). Optional **`avatarNetworkProps`** are spread onto `AvatarNetwork`; **`src`** and **`name`** are applied after the spread so `networkSrc` / `networkName` take precedence.

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

Same as `SegmentButton` except **`children`** is not accepted; use **`networkName`** instead (optional, defaults to empty text). Additional props: **`networkSrc`**, **`avatarNetworkProps`** (see component implementation).

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
