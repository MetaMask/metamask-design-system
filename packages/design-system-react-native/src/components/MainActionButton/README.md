# MainActionButton

MainActionButton is a compact vertical action button that renders an icon above a single-line label.

## Usage

```tsx
import {
  MainActionButton,
  IconName,
} from '@metamask/design-system-react-native';

<MainActionButton
  iconName={IconName.Add}
  label="Add"
  iconProps={{ testID: 'main-action-button-icon' }}
  labelProps={{ testID: 'main-action-button-label' }}
  onPress={() => console.log('Pressed')}
/>;
```

## Props

### `iconName`

Icon to render above the label.

| TYPE       | REQUIRED | DEFAULT     |
| ---------- | -------- | ----------- |
| `IconName` | Yes      | `undefined` |

### `label`

Text rendered below the icon.

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | Yes      | `undefined` |

### `iconProps`

Optional props passed to the internal `Icon` component. Use this for test IDs and accessibility metadata without exposing a default internal test ID.

| TYPE                                                    | REQUIRED | DEFAULT     |
| ------------------------------------------------------- | -------- | ----------- |
| `Omit<Partial<IconProps>, 'name' \| 'size' \| 'color'>` | No       | `undefined` |

```tsx
<MainActionButton
  iconName={IconName.Add}
  label="Add"
  iconProps={{ testID: 'main-action-button-icon' }}
/>
```

### `labelProps`

Optional props passed to the internal `Text` component. Use this for test IDs and accessibility metadata without overriding the component typography defaults.

| TYPE                                                                                            | REQUIRED | DEFAULT     |
| ----------------------------------------------------------------------------------------------- | -------- | ----------- |
| `Omit<Partial<TextProps>, 'children' \| 'variant' \| 'fontWeight' \| 'color' \| 'twClassName'>` | No       | `undefined` |

```tsx
<MainActionButton
  iconName={IconName.Add}
  label="Add"
  labelProps={{ testID: 'main-action-button-label' }}
/>
```

### `isDisabled`

Disables user interaction and applies disabled styling.

| TYPE      | REQUIRED | DEFAULT |
| --------- | -------- | ------- |
| `boolean` | No       | `false` |

### `onPress`

Callback fired when pressed.

| TYPE         | REQUIRED | DEFAULT     |
| ------------ | -------- | ----------- |
| `() => void` | No       | `undefined` |

### `twClassName`

Additional Tailwind classes for the button container.

| TYPE    | REQUIRED             | DEFAULT |
| ------- | -------------------- | ------- | ---- |
| `string | (pressed) => string` | No      | `''` |

### `style`

React Native style object for the outer pressable.

| TYPE                                                            | REQUIRED | DEFAULT     |
| --------------------------------------------------------------- | -------- | ----------- |
| `StyleProp<ViewStyle> \| ({ pressed }) => StyleProp<ViewStyle>` | No       | `undefined` |
