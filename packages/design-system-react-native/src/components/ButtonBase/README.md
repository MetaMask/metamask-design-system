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

**Note**: The `isFullWidth` prop is designed for **vertical layouts** (flex columns) where you want a button to span the container's full width. When `isFullWidth` is `false`, the button uses `alignSelf: 'flex-start'` to size to its content width.

For **horizontal layouts** (flex rows) where buttons should share space, use `twClassName="flex-1"` instead of `isFullWidth`. Using `isFullWidth` in a flex row causes semantic conflicts as multiple buttons cannot each take 100% width.

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

### Using Buttons in Flex Layouts

#### Horizontal Layouts (Flex Row)

When placing buttons side-by-side in a horizontal layout, use `twClassName="flex-1"` to share space equally:

```tsx
import { Box, BoxFlexDirection } from '@metamask/design-system-react-native';

// Two buttons that equally share space in a row
<Box flexDirection={BoxFlexDirection.Row} gap={4}>
  <ButtonBase twClassName="flex-1" onPress={handleYes}>
    Yes
  </ButtonBase>
  <ButtonBase twClassName="flex-1" onPress={handleNo}>
    No
  </ButtonBase>
</Box>
```

**Note**: Do not use `isFullWidth` in horizontal layouts, as it causes both buttons to attempt 100% width, resulting in overflow.

#### Vertical Layouts (Flex Column)

For vertical stacking, use `isFullWidth` to make buttons span the full width:

```tsx
// Full-width button in a column layout
<Box gap={4}>
  <ButtonBase isFullWidth onPress={handleSave}>
    Save Changes
  </ButtonBase>
  <ButtonBase onPress={handleCancel}>
    Cancel
  </ButtonBase>
</Box>
```

---

### Accessibility

The `ButtonBase` component is designed to be fully accessible according to WCAG guidelines and React Native accessibility standards.

#### Automatic Accessibility Features

- **Default Role**: Automatically sets `accessibilityRole="button"`
- **Auto-Generated Labels**: Uses string `children` as `accessibilityLabel` when no custom label is provided
- **State Management**: Automatically manages `accessibilityState` for disabled and loading states
- **Loading Announcements**: Provides automatic loading state announcements for screen readers

#### Accessibility Props

##### `accessibilityLabel`

Optional accessibility label to describe the button for screen readers.

| TYPE     | REQUIRED | DEFAULT                                         |
| :------- | :------- | :---------------------------------------------- |
| `string` | No       | Auto-generated from `children` or loading state |

```tsx
<ButtonBase accessibilityLabel="Save your changes">Save</ButtonBase>
```

##### `accessibilityHint`

Optional accessibility hint to provide additional context about the button's action.

| TYPE     | REQUIRED | DEFAULT                          |
| :------- | :------- | :------------------------------- |
| `string` | No       | Auto-generated for loading state |

```tsx
<ButtonBase
  accessibilityLabel="Submit form"
  accessibilityHint="Submits the form and navigates to confirmation page"
>
  Submit
</ButtonBase>
```

##### `accessibilityRole`

Optional accessibility role. Defaults to 'button' but can be overridden for specific use cases.

| TYPE                                                  | REQUIRED | DEFAULT    |
| :---------------------------------------------------- | :------- | :--------- |
| `'button' \| 'link' \| 'menuitem' \| 'tab' \| 'none'` | No       | `'button'` |

```tsx
<ButtonBase accessibilityRole="link">View Details</ButtonBase>
```

##### `accessibilityActions`

Optional accessibility actions for custom interactions. Use sparingly and only when default button behavior is insufficient.

| TYPE                                       | REQUIRED | DEFAULT     |
| :----------------------------------------- | :------- | :---------- |
| `Array<{ name: string; label?: string; }>` | No       | `undefined` |

```tsx
<ButtonBase
  accessibilityActions={[
    { name: 'longpress', label: 'Long press for options' },
  ]}
  onAccessibilityAction={(event) => {
    if (event.nativeEvent.actionName === 'longpress') {
      showContextMenu();
    }
  }}
>
  Options
</ButtonBase>
```

##### `onAccessibilityAction`

Optional callback for handling accessibility action events.

| TYPE                                                       | REQUIRED | DEFAULT     |
| :--------------------------------------------------------- | :------- | :---------- |
| `(event: { nativeEvent: { actionName: string } }) => void` | No       | `undefined` |

#### Accessibility State Management

The component automatically manages `accessibilityState` based on props:

- **Disabled State**: Set when `isDisabled={true}` or `isLoading={true}`
- **Busy State**: Set when `isLoading={true}` to indicate loading operations

#### Loading State Accessibility

When `isLoading={true}`:

- Button becomes disabled and announces "busy" state
- Accessibility label prioritizes `loadingText` if provided
- Accessibility hint automatically explains loading state
- Custom `accessibilityHint` overrides automatic loading hint

```tsx
// Automatic loading accessibility
<ButtonBase isLoading loadingText="Saving...">
  Save Changes
</ButtonBase>
// Screen reader announces: "Saving..., button, busy, Button is currently loading, please wait"

// Custom loading accessibility
<ButtonBase
  isLoading
  loadingText="Processing payment"
  accessibilityHint="Please wait while we process your payment securely"
>
  Pay Now
</ButtonBase>
```

#### Best Practices

1. **Descriptive Labels**: Use clear, descriptive text for button content
2. **Meaningful Hints**: Provide hints that explain the button's action or outcome
3. **Loading States**: Always provide `loadingText` for better loading state communication
4. **Icon-Only Buttons**: Always provide `accessibilityLabel` for buttons with only icons
5. **Context-Specific Roles**: Use appropriate `accessibilityRole` (e.g., 'link' for navigation)

#### Examples

```tsx
// Basic accessible button
<ButtonBase>Save Changes</ButtonBase>

// Icon-only button with accessibility
<ButtonBase
  startIconName={IconName.Plus}
  accessibilityLabel="Add new item"
  accessibilityHint="Opens dialog to create a new item"
>
  {/* No text content */}
</ButtonBase>

// Loading button with custom accessibility
<ButtonBase
  isLoading
  loadingText="Creating account..."
  accessibilityHint="Please wait while we set up your new account"
>
  Create Account
</ButtonBase>

// Navigation button
<ButtonBase
  accessibilityRole="link"
  accessibilityHint="Opens user profile page"
  onPress={() => navigation.navigate('Profile')}
>
  View Profile
</ButtonBase>
```

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
