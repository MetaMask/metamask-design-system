# HeaderBase

HeaderBase is a reusable header component with optional start/end accessories and a centered title.

```tsx
import { HeaderBase } from '@metamask/design-system-react-native';

<HeaderBase>Page Title</HeaderBase>;
```

## Props

This component extends React Native's [ViewProps](https://reactnative.dev/docs/view) to inherit standard props such as `testID` and `accessibilityLabel`.

### `children`

The title of the header. Pass a string for automatic Text rendering with the correct variant, or a ReactNode for custom content.

| TYPE                  | REQUIRED | DEFAULT     |
| --------------------- | -------- | ----------- |
| `string \| ReactNode` | No       | `undefined` |

```tsx
// String title (auto-renders as Text with correct variant)
<HeaderBase>Page Title</HeaderBase>

// Custom ReactNode title
<HeaderBase>
  <Box twClassName="items-center">
    <Text variant={TextVariant.HeadingSm}>Custom Title</Text>
    <Text variant={TextVariant.BodySm}>Subtitle</Text>
  </Box>
</HeaderBase>
```

### `startAccessory`

Content displayed before the title. Takes priority over `startButtonIconProps` if both are provided.

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

```tsx
<HeaderBase
  startAccessory={
    <ButtonIcon
      iconName={IconName.ArrowLeft}
      size={ButtonIconSize.Md}
      onPress={handleBack}
    />
  }
>
  Page Title
</HeaderBase>
```

### `endAccessory`

Content displayed after the title. Takes priority over `endButtonIconProps` if both are provided.

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

```tsx
<HeaderBase
  endAccessory={
    <ButtonIcon
      iconName={IconName.Close}
      size={ButtonIconSize.Md}
      onPress={handleClose}
    />
  }
>
  Page Title
</HeaderBase>
```

### `startButtonIconProps`

ButtonIcon props to render a ButtonIcon as the start accessory. Only used if `startAccessory` is not provided. Defaults to `ButtonIconSize.Md`.

| TYPE              | REQUIRED | DEFAULT     |
| ----------------- | -------- | ----------- |
| `ButtonIconProps` | No       | `undefined` |

```tsx
<HeaderBase
  startButtonIconProps={{
    iconName: IconName.ArrowLeft,
    onPress: handleBack,
  }}
>
  Page Title
</HeaderBase>
```

### `endButtonIconProps`

Array of ButtonIcon props to render multiple ButtonIcons as end accessories. Rendered in reverse order (first item appears rightmost). Only used if `endAccessory` is not provided. Defaults to `ButtonIconSize.Md` for each.

| TYPE                | REQUIRED | DEFAULT     |
| ------------------- | -------- | ----------- |
| `ButtonIconProps[]` | No       | `undefined` |

```tsx
<HeaderBase
  endButtonIconProps={[
    { iconName: IconName.Search, onPress: handleSearch },
    { iconName: IconName.Setting, onPress: handleSettings },
    { iconName: IconName.Close, onPress: handleClose },
  ]}
>
  Page Title
</HeaderBase>
```

### `includesTopInset`

Adds the device's safe area top inset as margin to ensure the header is visible below the notch.

| TYPE      | REQUIRED | DEFAULT |
| --------- | -------- | ------- |
| `boolean` | No       | `false` |

```tsx
<HeaderBase includesTopInset>Page Title</HeaderBase>
```

### `twClassName`

Use the `twClassName` prop to add Tailwind CSS classes to the component. These classes will be merged with the component's default classes.

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

```tsx
<HeaderBase twClassName="bg-info-default px-4">Styled Header</HeaderBase>
```

### `style`

Use the `style` prop to customize the component's appearance with React Native styles. For consistent styling, prefer using `twClassName` with Tailwind classes when possible, and use `style` for dynamic values or styles not available in Tailwind.

| TYPE                   | REQUIRED | DEFAULT     |
| ---------------------- | -------- | ----------- |
| `StyleProp<ViewStyle>` | No       | `undefined` |

```tsx
<HeaderBase style={{ marginHorizontal: 16 }}>Styled Header</HeaderBase>
```

### `titleTestID`

Test ID for the title Text element. Only used when `children` is a string.

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

```tsx
<HeaderBase titleTestID="my-header-title">Page Title</HeaderBase>
```

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
