# BadgeWrapper

The `BadgeWrapper` component allows you to attach any badge (e.g., `BadgeNetwork`, `BadgeCount`, `BadgeStatus`) to another component such as an `Avatar`. It supports various position presets, anchor shape alignment, and full control via custom positioning.

---

## Props

### `children` (Required)

The main element that the badge will be anchored to.

| TYPE              | REQUIRED | DESCRIPTION                            |
| ----------------- | -------- | -------------------------------------- |
| `React.ReactNode` | Yes      | Anchor element to attach the badge to. |

---

### `badge` (Required)

The badge element that is positioned relative to the `children`.

| TYPE              | REQUIRED | DESCRIPTION              |
| ----------------- | -------- | ------------------------ |
| `React.ReactNode` | Yes      | Badge element to render. |

---

### `position`

Optional preset to determine badge placement.

| TYPE                   | REQUIRED | DEFAULT                            |
| ---------------------- | -------- | ---------------------------------- |
| `BadgeWrapperPosition` | No       | `BadgeWrapperPosition.BottomRight` |

Options:

- `TopRight`
- `BottomRight`
- `BottomLeft`
- `TopLeft`

---

### `positionAnchorShape`

Specifies the shape of the anchor to adjust badge alignment.

| TYPE                              | REQUIRED | DEFAULT                                    |
| --------------------------------- | -------- | ------------------------------------------ |
| `BadgeWrapperPositionAnchorShape` | No       | `BadgeWrapperPositionAnchorShape.Circular` |

Options:

- `Circular`
- `Rectangular`

---

### `positionXOffset`

Horizontal adjustment for the badge position.

| TYPE     | REQUIRED | DEFAULT |
| -------- | -------- | ------- |
| `number` | No       | `0`     |

---

### `positionYOffset`

Vertical adjustment for the badge position.

| TYPE     | REQUIRED | DEFAULT |
| -------- | -------- | ------- |
| `number` | No       | `0`     |

---

### `customPosition`

Allows complete control over badge positioning using style values.

| TYPE                         | REQUIRED | DEFAULT     |
| ---------------------------- | -------- | ----------- |
| `BadgeWrapperCustomPosition` | No       | `undefined` |

Example:

```ts
{
  top: 5,
  right: 10,
}
```

---

### `twClassName`

Tailwind class names to apply to the outermost wrapper.

| TYPE     | REQUIRED | DEFAULT |
| -------- | -------- | ------- |
| `string` | No       | `''`    |

---

### `style`

Optional style override for the outermost wrapper.

| TYPE                   | REQUIRED | DEFAULT |
| ---------------------- | -------- | ------- |
| `StyleProp<ViewStyle>` | No       | `null`  |

---

## Usage

### Basic Usage

```tsx
<BadgeWrapper badge={<BadgeStatus status={BadgeStatusStatus.Active} />}>
  <AvatarAccount address="0x..." />
</BadgeWrapper>
```

---

### Preset Positions

```tsx
<BadgeWrapper
  position={BadgeWrapperPosition.TopRight}
  badge={<BadgeCount count={8} />}
>
  <AvatarAccount address="0x..." />
</BadgeWrapper>
```

---

### Custom Position

```tsx
<BadgeWrapper
  customPosition={{ top: 4, right: 10 }}
  badge={<BadgeIcon variant={BadgeIconVariant.Send} />}
>
  <AvatarNetwork name="ETH" src={{ uri: 'https://...' }} />
</BadgeWrapper>
```

---

### Anchor Shape Adjustment

```tsx
<BadgeWrapper
  positionAnchorShape={BadgeWrapperPositionAnchorShape.Rectangular}
  badge={<BadgeNetwork name="ETH" src={{ uri: 'https://...' }} />}
>
  <AvatarNetwork name="ETH" src={{ uri: 'https://...' }} />
</BadgeWrapper>
```

---

## Notes

- You must wrap both `children` and `badge` elements using this component to ensure proper positioning.
- Positioning logic adjusts based on anchor shape to better align on circular vs. rectangular anchors.
- Offset props are additive and can help nudge badges pixel-perfect into place.

---

## Contributing

1. Add tests for new props or layout logic.
2. Document new functionality in this README.
3. Follow the design system's coding guidelines.

---

For questions, refer to the [React Native documentation](https://reactnative.dev/docs) or reach out to the maintainers of the design system.
