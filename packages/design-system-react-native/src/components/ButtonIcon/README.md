# ButtonIcon

A Button Icon is a compact, icon-only button that triggers an action, designed for quick, space-efficient interactions

---

## Props

### `size`

Optional prop to control the size of the `ButtonIcon`.

| TYPE             | REQUIRED | DEFAULT             |
| :--------------- | :------- | :------------------ |
| `ButtonIconSize` | No       | `ButtonIconSize.Md` |

Available sizes:

- `ButtonIconSize.Sm` (24px)
- `ButtonIconSize.Md` (32px)
- `ButtonIconSize.Lg` (40px)

---

### `iconName` (Required)

The name of the icon to be displayed.

| TYPE       | REQUIRED | DEFAULT |
| :--------- | :------- | :------ |
| `IconName` | Yes      | `N/A`   |

---

### `iconProps`

Optional props to customize the icon.

| TYPE        | REQUIRED | DEFAULT |
| :---------- | :------- | :------ |
| `IconProps` | No       | `{}`    |

---

### `isDisabled`

Optional prop that, when `true`, disables the button.

| TYPE      | REQUIRED | DEFAULT |
| :-------- | :------- | :------ |
| `boolean` | No       | `false` |

---

### `isInverse`

Optional prop to show the inverse state of the button, typically used for buttons on colored backgrounds.

| TYPE      | REQUIRED | DEFAULT |
| :-------- | :------- | :------ |
| `boolean` | No       | `false` |

---

### `isFloating`

Optional prop to apply floating button styling.

| TYPE      | REQUIRED | DEFAULT |
| :-------- | :------- | :------ |
| `boolean` | No       | `false` |

**Note:** This prop applies styling only. There is no positioning logic.

---

### `twClassName`

Optional prop to add `twrnc` overriding class names.

| TYPE     | REQUIRED | DEFAULT |
| :------- | :------- | :------ |
| `string` | No       | `''`    |

---

### `style`

Optional prop to control the style.

| TYPE                   | REQUIRED | DEFAULT |
| :--------------------- | :------- | :------ |
| `StyleProp<ViewStyle>` | No       | `null`  |

---

## Usage

### Basic Usage

```tsx
import React from 'react';
import ButtonIcon from '@metamask/design-system-react-native';

<ButtonIcon iconName={IconName.Add} onPress={() => console.log('Pressed!')} />;
```

---

### Custom Icon Size

```tsx
<ButtonIcon size={ButtonIconSize.Lg} iconName={IconName.Add} />
```

---

### Disabled Icon Button

```tsx
<ButtonIcon iconName={IconName.Add} isDisabled />
```

---

### Floating Icon Button

```tsx
<ButtonIcon iconName={IconName.Add} isFloating />
```

---

### Accessibility

- Use the `accessibilityLabel` prop to provide meaningful labels for assistive technologies.
- Ensure `iconName` represents a clear visual meaning for users.

---

### Notes

- `ButtonIcon` is optimized for handling different button states (disabled, floating, inverse).
- Use `isFloating` for styling but apply additional logic if floating positioning is required.
- Icons are fully customizable through props.

---

## Contributing

1. Add tests for new features.
2. Update this README for any changes to the API.
3. Follow the design system's coding guidelines.

---

For questions, refer to the [React Native documentation](https://reactnative.dev/docs) or contact the maintainers of the design system.
