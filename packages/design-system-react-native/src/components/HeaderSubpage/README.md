# HeaderSubpage

HeaderSubpage is a subpage header bar for screens that show a leading avatar beside a title row with optional back and close actions. It composes [ListItem](../ListItem/README.md) (not [HeaderBase](../HeaderBase/README.md)) and forwards [Content](../Content/README.md) props for the center row.

Use [HeaderStandard](../HeaderStandard/README.md) when you need a centered title without an avatar. Use [TitleSubpage](../TitleSubpage/README.md) for the larger subpage title block below the header (amount, bottom labels, and supporting rows).

```tsx
import {
  AvatarToken,
  AvatarTokenSize,
  HeaderSubpage,
} from '@metamask/design-system-react-native';

<HeaderSubpage
  title="Send"
  avatar={<AvatarToken name="ethereum" size={AvatarTokenSize.Lg} />}
  onBack={handleBack}
  onClose={handleClose}
/>;
```

## Props

Inherits [ListItem](../ListItem/README.md) / [Content](../Content/README.md) props (`avatar`, `title`, `description`, `value`, accessories, `titleProps`, and other Content fields). `isInteractive` is not supported. Additional props:

### `onBack`

Callback when the back button is pressed. When provided (or when `backButtonProps` is set), a back [ButtonIcon](../ButtonIcon/README.md) is rendered as the start accessory.

| TYPE         | REQUIRED | DEFAULT     |
| ------------ | -------- | ----------- |
| `() => void` | No       | `undefined` |

```tsx
<HeaderSubpage title="Send" avatar={avatar} onBack={goBack} />
```

### `backButtonProps`

Props spread onto the back `ButtonIcon`. `iconName` is fixed to `ArrowLeft`.

| TYPE                                | REQUIRED | DEFAULT     |
| ----------------------------------- | -------- | ----------- |
| `Omit<ButtonIconProps, 'iconName'>` | No       | `undefined` |

```tsx
<HeaderSubpage
  title="Send"
  avatar={avatar}
  onBack={goBack}
  backButtonProps={{ testID: 'header-back' }}
/>
```

### `onClose`

Callback when the close button is pressed. When provided (or when `closeButtonProps` is set), a close `ButtonIcon` is rendered on the end side.

| TYPE         | REQUIRED | DEFAULT     |
| ------------ | -------- | ----------- |
| `() => void` | No       | `undefined` |

```tsx
<HeaderSubpage title="Send" avatar={avatar} onClose={dismiss} />
```

### `closeButtonProps`

Props spread onto the close `ButtonIcon`. `iconName` is fixed to `Close`.

| TYPE                                | REQUIRED | DEFAULT     |
| ----------------------------------- | -------- | ----------- |
| `Omit<ButtonIconProps, 'iconName'>` | No       | `undefined` |

```tsx
<HeaderSubpage
  title="Send"
  avatar={avatar}
  onClose={dismiss}
  closeButtonProps={{ testID: 'header-close' }}
/>
```

### `endButtonIconProps`

Additional end-side `ButtonIcon` actions rendered after the close button.

| TYPE                | REQUIRED | DEFAULT     |
| ------------------- | -------- | ----------- |
| `ButtonIconProps[]` | No       | `undefined` |

```tsx
<HeaderSubpage
  title="Send"
  avatar={avatar}
  onClose={dismiss}
  endButtonIconProps={[{ iconName: IconName.Search, onPress: openSearch }]}
/>
```

### `startAccessory`

Custom start-side content. Takes priority over `onBack` / `backButtonProps`.

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

### `endAccessory`

Custom end-side content. Takes priority over `onClose`, `closeButtonProps`, and `endButtonIconProps`.

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

### `includesTopInset`

When `true`, applies the device safe-area top inset as `marginTop` on the root `ListItem` so the header clears the notch.

| TYPE      | REQUIRED | DEFAULT |
| --------- | -------- | ------- |
| `boolean` | No       | `false` |

```tsx
<HeaderSubpage title="Send" avatar={avatar} onBack={goBack} includesTopInset />
```

### `twClassName`

Tailwind classes merged onto the root `ListItem` (`h-14 px-2 py-0` defaults).

| TYPE     | REQUIRED | DEFAULT |
| -------- | -------- | ------- |
| `string` | No       | `''`    |

### Content props

Common Content fields:

| PROP               | TYPE                 | REQUIRED | DEFAULT     |
| ------------------ | -------------------- | -------- | ----------- |
| `avatar`           | `ReactNode`          | No       | `undefined` |
| `title`            | `ReactNode`          | No       | `undefined` |
| `description`      | `ReactNode`          | No       | `undefined` |
| `titleProps`       | `Partial<TextProps>` | No       | `undefined` |
| `descriptionProps` | `Partial<TextProps>` | No       | `undefined` |

```tsx
<HeaderSubpage
  title="Send"
  description="Ethereum"
  avatar={<AvatarToken name="ethereum" size={AvatarTokenSize.Lg} />}
  onBack={goBack}
/>
```

## Layout

- Root `ListItem`: `min-h-14`, conditional horizontal padding (`pl-2`/`pr-2` when button icon accessories are present, otherwise `pl-4`/`pr-4`), `py-0`, optional `includesTopInset`, and consumer `twClassName` / `style`
- Back/close actions are `ListItem` row accessories with no gap (`gap-0`) before the inner `Content` row
- Inner `Content` keeps `gap-4` between avatar, title, and value columns

## Related components

- [HeaderStandard](../HeaderStandard/README.md) — centered title header with back/close actions
- [TitleSubpage](../TitleSubpage/README.md) — subpage title block with amount and bottom rows
- [ListItem](../ListItem/README.md) — list row primitive used internally
