# ButtonBase

`ButtonBase` is a labeled element that a user can click or tap to initiate an action.

---

## Props

### `children` (Required)

The content to be rendered within the `ButtonBase`.

| TYPE        | REQUIRED | DEFAULT |
| :---------- | :------- | :------ | ----- |
| `ReactNode` | string   | Yes     | `N/A` |

---

### `textProps`

Optional props to be passed to the `Text` component when the `children` is a string.

| TYPE        | REQUIRED | DEFAULT |
| :---------- | :------- | :------ |
| `TextProps` | No       | `{}`    |

---

### `size`

Optional prop to control the size of the `ButtonBase`.

| TYPE             | REQUIRED | DEFAULT             |
| :--------------- | :------- | :------------------ |
| `ButtonBaseSize` | No       | `ButtonBaseSize.Lg` |

Available sizes:

- `ButtonBaseSize.Sm` (32px)
- `ButtonBaseSize.Md` (40px)
- `ButtonBaseSize.Lg` (48px)

---

### `isLoading`

Optional prop that, when `true`, shows a loading spinner.

| TYPE      | REQUIRED | DEFAULT |
| :-------- | :------- | :------ |
| `boolean` | No       | `false` |

---

### `loadingText`

Optional text to display when the button is in the loading state.

| TYPE     | REQUIRED | DEFAULT     |
| :------- | :------- | :---------- |
| `string` | No       | `"Loading"` |

---

### `spinnerProps`

Optional props to customize the appearance of the spinner.

| TYPE           | REQUIRED | DEFAULT |
| :------------- | :------- | :------ |
| `SpinnerProps` | No       | `{}`    |

---

### `startIconName`

Optional prop to specify an icon to show at the start of the button.

| TYPE       | REQUIRED | DEFAULT |
| :--------- | :------- | :------ |
| `IconName` | No       | `null`  |

---

### `startIconProps`

Optional props to pass additional properties to the start icon.

| TYPE        | REQUIRED | DEFAULT |
| :---------- | :------- | :------ |
| `IconProps` | No       | `{}`    |

---

### `startAccessory`

Optional prop for a custom element to show at the start of the button.

| TYPE        | REQUIRED | DEFAULT |
| :---------- | :------- | :------ |
| `ReactNode` | No       | `null`  |

---

### `endIconName`

Optional prop to specify an icon to show at the end of the button.

| TYPE       | REQUIRED | DEFAULT |
| :--------- | :------- | :------ |
| `IconName` | No       | `null`  |

---

### `endIconProps`

Optional props to pass additional properties to the end icon.

| TYPE        | REQUIRED | DEFAULT |
| :---------- | :------- | :------ |
| `IconProps` | No       | `{}`    |

---

### `endAccessory`

Optional prop for a custom element to show at the end of the button.

| TYPE        | REQUIRED | DEFAULT |
| :---------- | :------- | :------ |
| `ReactNode` | No       | `null`  |

---

### `isDisabled`

Optional prop that, when `true`, disables the button.

| TYPE      | REQUIRED | DEFAULT |
| :-------- | :------- | :------ |
| `boolean` | No       | `false` |

---

### `isFullWidth`

Optional prop that, when `true`, makes the button take up the full width of its container.

| TYPE      | REQUIRED | DEFAULT |
| :-------- | :------- | :------ |
| `boolean` | No       | `false` |

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
import ButtonBase from '@metamask/design-system-react-native';

<ButtonBase onPress={() => console.log('Pressed!')}>Click Me</ButtonBase>;
```

---

### Button with Icon

```tsx
<ButtonBase startIconName={IconName.Add}>Go Back</ButtonBase>
```

---

### Button with Spinner

```tsx
<ButtonBase isLoading>Loading...</ButtonBase>
```

---

### Customizing the Spinner

```tsx
<ButtonBase
  isLoading
  spinnerProps={{
    color: IconColor.PrimaryDefault,
  }}
>
  Please wait
</ButtonBase>
```

---

### Accessibility

- Use the `accessibilityLabel` prop to provide meaningful labels for assistive technologies.
- Ensure `children` describes the button's purpose or action.

---

### Notes

- `ButtonBase` is optimized for handling different button states (loading, disabled, full width).
- Use `isLoading` to disable user interactions during a loading state.
- Icons and spinners are fully customizable through props.

---

## Contributing

1. Add tests for new features.
2. Update this README for any changes to the API.
3. Follow the design system's coding guidelines.

---

For questions, refer to the [React Native documentation](https://reactnative.dev/docs) or contact the maintainers of the design system.
