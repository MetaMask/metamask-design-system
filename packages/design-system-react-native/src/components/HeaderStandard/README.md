# HeaderStandard

HeaderStandard is a header component with a centered title and optional back and close actions. It extends [HeaderBase](../HeaderBase/README.md) with `title`, `subtitle`, and shortcut props that map to [ButtonIcon](../ButtonIcon/README.md) actions.

```tsx
import { HeaderStandard } from '@metamask/design-system-react-native';

<HeaderStandard title="Page Title" onBack={handleBack} onClose={handleClose} />;
```

## Props

Inherits [HeaderBaseProps](../HeaderBase/README.md) (`startAccessory`, `endAccessory`, `textProps`, `testID`, `style`, `twClassName`, and other `View` props). Additional props:

### `title`

Primary label in the header center. If `children` is set, `title` is ignored.

When `title` is a string, it is rendered with [Text](../Text/README.md) using `TextVariant.BodyMd` and bold weight by default; use `titleProps` to override.

| TYPE                  | REQUIRED | DEFAULT     |
| --------------------- | -------- | ----------- |
| `string \| ReactNode` | No       | `undefined` |

```tsx
<HeaderStandard title="Settings" />

<HeaderStandard
  title={<Text variant={TextVariant.HeadingSm}>Custom</Text>}
/>
```

### `titleProps`

Props forwarded to the design-system `Text` component when `title` is a string.

| TYPE                 | REQUIRED | DEFAULT     |
| -------------------- | -------- | ----------- |
| `Partial<TextProps>` | No       | `undefined` |

```tsx
<HeaderStandard title="Hello" titleProps={{ testID: 'header-title' }} />
```

### `subtitle`

Secondary line below the title. Omitted when not provided.

When `subtitle` is a string, it uses `TextVariant.BodySm` and `TextColor.TextAlternative` by default; use `subtitleProps` to override.

| TYPE                  | REQUIRED | DEFAULT     |
| --------------------- | -------- | ----------- |
| `string \| ReactNode` | No       | `undefined` |

```tsx
<HeaderStandard title="Settings" subtitle="Account" onBack={goBack} />
```

### `subtitleProps`

Props forwarded to `Text` when `subtitle` is a string.

| TYPE                 | REQUIRED | DEFAULT     |
| -------------------- | -------- | ----------- |
| `Partial<TextProps>` | No       | `undefined` |

```tsx
<HeaderStandard
  title="Page"
  subtitle="Details"
  subtitleProps={{ testID: 'header-subtitle' }}
/>
```

### `children`

Custom center content. When provided, replaces the default title and subtitle layout.

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

```tsx
<HeaderStandard onClose={closeModal}>
  <Box twClassName="items-center">
    <Text variant={TextVariant.HeadingSm}>Custom layout</Text>
  </Box>
</HeaderStandard>
```

### `onBack`

If set, renders a start [ButtonIcon](../ButtonIcon/README.md) with a back arrow. The press handler is `backButtonProps.onPress` when both are provided.

| TYPE         | REQUIRED | DEFAULT     |
| ------------ | -------- | ----------- |
| `() => void` | No       | `undefined` |

```tsx
<HeaderStandard title="Settings" onBack={() => navigation.goBack()} />
```

### `backButtonProps`

Props for the back `ButtonIcon` (excluding `iconName`, which is fixed). Supplying this object also shows the back button; use `onPress` for the handler if `onBack` is not used.

| TYPE                                | REQUIRED | DEFAULT     |
| ----------------------------------- | -------- | ----------- |
| `Omit<ButtonIconProps, 'iconName'>` | No       | `undefined` |

```tsx
<HeaderStandard
  title="Settings"
  backButtonProps={{
    onPress: goBack,
    testID: 'header-back',
    isDisabled: false,
  }}
/>
```

### `onClose`

If set, appends a close `ButtonIcon` to the end actions.

| TYPE         | REQUIRED | DEFAULT     |
| ------------ | -------- | ----------- |
| `() => void` | No       | `undefined` |

```tsx
<HeaderStandard title="Modal" onClose={() => setVisible(false)} />
```

### `closeButtonProps`

Props for the close `ButtonIcon` (excluding `iconName`). `onPress` takes precedence over `onClose` when both are set.

| TYPE                                | REQUIRED | DEFAULT     |
| ----------------------------------- | -------- | ----------- |
| `Omit<ButtonIconProps, 'iconName'>` | No       | `undefined` |

```tsx
<HeaderStandard
  title="Modal"
  closeButtonProps={{ onPress: close, testID: 'header-close' }}
/>
```

### `twClassName`

Tailwind classes merged onto the root [HeaderBase](../HeaderBase/README.md) container. The component applies horizontal padding by default.

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

```tsx
<HeaderStandard title="Page" twClassName="border-b border-muted" />
```

## Usage

```tsx
<HeaderStandard title="Settings" onBack={() => navigation.goBack()} />

<HeaderStandard
  title="Modal Title"
  onClose={() => setModalVisible(false)}
/>

<HeaderStandard
  title="Page Title"
  subtitle="Subtitle text"
  onBack={handleBack}
  onClose={handleClose}
/>
```

## Accessibility

- Set `testID` on the header via [HeaderBase](../HeaderBase/README.md) props for integration tests.
- Use `titleProps` / `subtitleProps` to pass `accessibilityLabel` or `testID` onto string titles and subtitles.
- Back and close controls are `ButtonIcon` instances; pass `accessibilityLabel`, `accessibilityHint`, and `testID` through `backButtonProps` and `closeButtonProps`.

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
