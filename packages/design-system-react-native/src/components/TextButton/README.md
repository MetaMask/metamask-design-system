# TextButton

Contextual inline link or button

---

## Props

### `children` (Required)

The content to be rendered within the `TextButton`.

| TYPE     | REQUIRED | DEFAULT |
| :------- | :------- | :------ |
| `string` | Yes      | `N/A`   |

---

### `textProps`

Optional props to be passed to the `Text` component when the `children` is a string.

| TYPE                                   | REQUIRED | DEFAULT                                                          |
| :------------------------------------- | :------- | :--------------------------------------------------------------- |
| `Omit<Partial<TextProps>, 'children'>` | No       | `{ variant: BodyMd, fontWeight: Medium, color: PrimaryDefault }` |

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

| TYPE                    | REQUIRED | DEFAULT                  |
| :---------------------- | :------- | :----------------------- |
| `Partial<SpinnerProps>` | No       | `{ color: IconDefault }` |

---

### `startIconName`

Optional prop to specify an icon to show at the start of the button.

| TYPE       | REQUIRED | DEFAULT |
| :--------- | :------- | :------ |
| `IconName` | No       | `null`  |

---

### `startIconProps`

Optional props to pass additional properties to the start icon.

| TYPE                 | REQUIRED | DEFAULT                              |
| :------------------- | :------- | :----------------------------------- |
| `Partial<IconProps>` | No       | `{ size: Sm, testID: 'start-icon' }` |

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

| TYPE                 | REQUIRED | DEFAULT                            |
| :------------------- | :------- | :--------------------------------- |
| `Partial<IconProps>` | No       | `{ size: Sm, testID: 'end-icon' }` |

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

### `isInverse`

Optional prop to show the inverse state of the button, typically used for buttons on colored backgrounds.

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
import TextButton from '@metamask/design-system-react-native';

<TextButton onPress={() => console.log('Pressed!')}>Click Me</TextButton>;
```

---

### Button with Icon

```tsx
<TextButton startIconName="ArrowLeft">Go Back</TextButton>
```

---

### Button with Spinner

```tsx
<TextButton isLoading>Loading...</TextButton>
```

---

### Customizing the Spinner

```tsx
<TextButton
  isLoading
  spinnerProps={{
    color: IconColor.PrimaryDefault,
  }}
>
  Please wait
</TextButton>
```

---

### Accessibility

- Use the `accessibilityLabel` prop to provide meaningful labels for assistive technologies.
- Ensure `children` describes the button's purpose or action.

---

### Notes

- `TextButton` uses the `Text` component as its base to ensure proper inline rendering with other text elements.
- Custom alignment logic is applied to ensure consistent layout of icons and spinners.
- Use `isLoading` to disable user interactions during a loading state.

---

## Contributing

1. Add tests for new features.
2. Update this README for any changes to the API.
3. Follow the design system's coding guidelines.

---

For questions, refer to the [React Native documentation](https://reactnative.dev/docs) or contact the maintainers of the design system.
