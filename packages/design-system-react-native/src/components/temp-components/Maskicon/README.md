# Maskicon

The `Maskicon` component renders a unique SVG identicon derived from a blockchain address. It supports Ethereum and other address formats (e.g., Solana, Bitcoin), and generates consistent visuals using a hash-based algorithm and a fixed color palette.

---

## Props

### `address` (Required)

The blockchain address used as the seed to generate the Maskicon.

| TYPE     | REQUIRED | DESCRIPTION                                     |
| -------- | -------- | ----------------------------------------------- |
| `string` | Yes      | Blockchain address for generating the identicon |

---

### `size`

Optional prop to control the size (width and height) of the Maskicon.

| TYPE     | REQUIRED | DEFAULT |
| -------- | -------- | ------- |
| `number` | No       | `32`    |

---

### Additional Props

Any other props passed to the component will be forwarded to the underlying `SvgXml` element.

| TYPE       | DESCRIPTION                      |
| ---------- | -------------------------------- |
| `SvgProps` | Custom styling and accessibility |

---

## Usage

### Basic Usage

```tsx
import Maskicon from '@metamask/design-system-react-native';

<Maskicon address="0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8" />;
```

---

### Custom Size

```tsx
<Maskicon address="0x360507dfEC4Bf0c03495f91154A78C672599F308" size={48} />
```

---

## Internals

The Maskicon is generated using the following steps:

1. **Address Namespace Detection**

   - Detects address type (Ethereum, Solana, Bitcoin, etc.) via the `getCaipNamespaceFromAddress` function.

2. **Seed Generation**

   - Ethereum addresses generate numeric seeds via `generateSeedEthereum`.
   - Other address types generate byte-array seeds via `generateSeedNonEthereum`.

3. **Visual Hashing**

   - Seed is converted to a string and hashed using `sdbmHash`.
   - A consistent color pair is selected from a predefined color palette.
   - SVG path shapes are determined by the hash to fill a 2x2 grid.

4. **Caching**

   - Identicons are cached per `(address:size)` to avoid recomputation.

5. **Rendering**
   - An SVG string is constructed and rendered using `SvgXml`.

---

## Color Pair Categories

Color pairings are designed to provide variety and distinguishability:

- **Neutral Pairs**: Basic contrast like orange on white or purple on black.
- **Tonal Pairs**: Tints and shades of the same hue.
- **Complementary Pairs**: Visually opposite hues like purple and green.

---

## Accessibility

- The `Maskicon` is rendered via `SvgXml` which supports `accessibilityLabel` and other `SvgProps`.
- Use `accessibilityLabel` if a description is needed for screen readers.

---

## Example with Multiple Addresses

```tsx
const addresses = [
  '0x50cA820Ff810F7687E7d0aDb23A830e3ac6032C3',
  '0x8AceA3A9748294d1B5C25a08EFE37b756AafDFdd',
  '0xEC5CE72f2e18B0017C88F7B12d3308119C5Cf129',
];

return (
  <View style={{ flexDirection: 'row', gap: 12 }}>
    {addresses.map((addr) => (
      <Maskicon key={addr} address={addr} size={32} />
    ))}
  </View>
);
```

---

## Notes

- Deterministic identicons: same address always produces the same visual.
- Custom color pairs can be extended by modifying the internal `colorPairs` array.
- The `createMaskiconSVG` function is also exported for standalone usage.

---

## Contributing

1. Add or update test cases for new logic (e.g., color pair updates).
2. Update this README if the visual generation logic changes.
3. Follow best practices for accessibility when rendering SVGs.

---

For more guidance, refer to the [React Native SVG documentation](https://github.com/software-mansion/react-native-svg) or the internal design system usage policies.
