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

Icon rendered above the label. Use `iconProps` to pass props to the internal `Icon` component for test IDs and accessibility metadata.

| PROP        | TYPE                                                     | REQUIRED | DEFAULT     |
| ----------- | -------------------------------------------------------- | -------- | ----------- |
| `iconName`  | `IconName`                                               | Yes      | `undefined` |
| `iconProps` | `Omit<Partial<IconProps>, 'name' \| 'size' \| 'color'>` | No       | `undefined` |

```tsx
<MainActionButton
  iconName={IconName.Add}
  label="Add"
  iconProps={{ testID: 'main-action-button-icon' }}
/>
```

### `label`

Text rendered below the icon. Use `labelProps` to pass props to the internal `Text` component for test IDs and accessibility metadata without overriding typography defaults.

| PROP         | TYPE                                                                                                  | REQUIRED | DEFAULT     |
| ------------ | ----------------------------------------------------------------------------------------------------- | -------- | ----------- |
| `label`      | `string`                                                                                              | Yes      | `undefined` |
| `labelProps` | `Omit<Partial<TextProps>, 'children' \| 'variant' \| 'fontWeight' \| 'color' \| 'twClassName'>`    | No       | `undefined` |

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

Additional static Tailwind classes for the button container. For pressed-state or other interactive styling, use `style` as a callback.

| TYPE     | REQUIRED | DEFAULT |
| -------- | -------- | ------- |
| `string` | No       | `''`    |

### `style`

React Native style object for the outer pressable. Use the callback form (`({ pressed }) => ...`) for pressed-state styling.

| TYPE                                                            | REQUIRED | DEFAULT     |
| --------------------------------------------------------------- | -------- | ----------- |
| `StyleProp<ViewStyle> \| ({ pressed }) => StyleProp<ViewStyle>` | No       | `undefined` |
