# SectionInsights

SectionInsights is a section layout component for insight-style content. It composes SectionBase and renders an optional title (with optional start accessory) via BoxHorizontal with default HeadingSm and TextDefault, optional description, an optional Attribution row (with optional favicon AvatarGroup as startAccessory), and children. When `attribution` or `attributionFaviconAvatarGroupProps` is provided, an Attribution component is rendered in SectionBase's children; the favicon AvatarGroup is forced to size 16px (AvatarGroupSize.Xs).

```tsx
import {
  SectionInsights,
  Text,
  AvatarGroupVariant,
} from '@metamask/design-system-react-native';

<SectionInsights
  title="Insight Title"
  description="Optional description."
  attribution="example.com"
>
  <Text>Insight content</Text>
</SectionInsights>;
```

## Props

### `title`

Optional title (string or node) rendered at the top. When a string, it is rendered with BoxHorizontal using default `TextVariant.HeadingSm` and `TextColor.TextDefault`; `titleProps` can override. When a node, it is passed through as children of BoxHorizontal (titleProps do not apply).

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

```tsx
<SectionInsights title="Insight Title" />
```

### `titleStartAccessory`

Optional node rendered before the title (e.g. icon). Passed to BoxHorizontal as `startAccessory`. Only used when `title` is provided.

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

```tsx
<SectionInsights
  title="Title"
  titleStartAccessory={<Icon name={IconName.Info} size={IconSize.Md} />}
/>
```

### `titleProps`

Optional props for the title when `title` is a string. Defaults: `TextVariant.HeadingSm`, `TextColor.TextDefault`.

| TYPE                                   | REQUIRED | DEFAULT     |
| -------------------------------------- | -------- | ----------- |
| `Partial<Omit<TextProps, 'children'>>` | No       | `undefined` |

```tsx
<SectionInsights
  title="Title"
  titleProps={{ variant: TextVariant.HeadingMd, testID: 'section-title' }}
/>
```

### `attribution`

Optional attribution text or node. When provided (alone or with `attributionFaviconAvatarGroupProps`), an Attribution row is rendered in SectionBase's children with this as the Attribution's children.

| TYPE                        | REQUIRED | DEFAULT     |
| --------------------------- | -------- | ----------- |
| `string \| React.ReactNode` | No       | `undefined` |

```tsx
<SectionInsights title="Insight" attribution="Source name" />
```

### `attributionFaviconAvatarGroupProps`

Optional props for a favicon AvatarGroup rendered as the Attribution row's startAccessory. Size is forced to 16px (AvatarGroupSize.Xs) by the component. When provided (alone or with `attribution`), an Attribution row is rendered. Must use `variant: AvatarGroupVariant.Favicon` and `avatarPropsArr: AvatarFaviconProps[]`.

| TYPE                                                | REQUIRED | DEFAULT     |
| --------------------------------------------------- | -------- | ----------- |
| `SectionInsightsAttributionFaviconAvatarGroupProps` | No       | `undefined` |

```tsx
<SectionInsights
  title="Insight"
  attribution="Uniswap, OpenSea"
  attributionFaviconAvatarGroupProps={{
    variant: AvatarGroupVariant.Favicon,
    avatarPropsArr: [{ src: 'https://...' }, { src: 'https://...' }],
  }}
/>
```

### `description`

Optional description (string or node) below the title. Same as SectionBase: when a string, uses `TextVariant.BodyMd` and `TextColor.TextAlternative` by default; `descriptionProps` can override.

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

### `descriptionProps`

Optional props for the description when `description` is a string. Same as SectionBase.

### `children`

Optional content rendered below the description (and below the Attribution row when present).

### `twClassName`

Optional Tailwind class names applied to the root Box (via SectionBase).

### BoxProps

SectionInsights extends SectionBaseProps (which extends BoxProps), so you can pass margin, padding, testID, accessibilityLabel, and other Box/View props.

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
