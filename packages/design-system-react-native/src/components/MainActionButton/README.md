# MainActionButton

MainActionButton is a compact vertical action button that renders an icon above a single-line label, with an optional `children` slot between them.

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

This component extends React Native's `PressableProps` (excluding `children`, `disabled`, and `style`) to inherit standard props such as `testID`, `accessibilityLabel`, and accessibility state props.

### `iconName`

Icon rendered above the label. Use `iconProps` to pass props to the internal `Icon` component for test IDs and accessibility metadata.

| PROP        | TYPE                                                    | REQUIRED | DEFAULT     |
| ----------- | ------------------------------------------------------- | -------- | ----------- |
| `iconName`  | `IconName`                                              | Yes      | `undefined` |
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

| PROP         | TYPE                                                                                          | REQUIRED | DEFAULT     |
| ------------ | --------------------------------------------------------------------------------------------- | -------- | ----------- |
| `label`      | `string`                                                                                      | Yes      | `undefined` |
| `labelProps` | `Omit<Partial<TextProps>, 'children' \| 'variant' \| 'fontWeight' \| 'color' \| 'className'>` | No       | `undefined` |

```tsx
<MainActionButton
  iconName={IconName.Add}
  label="Add"
  labelProps={{ testID: 'main-action-button-label' }}
/>
```

### `children`

Optional content rendered between the icon and the label, with the same spacing the button applies between its icon and label. Use it for supplementary content such as a balance or a badge. Wrap plain strings in a `Text` component; React Native renders bare strings only inside `Text`.

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

```tsx
<MainActionButton iconName={IconName.Receive} label="Receive">
  <Text variant={TextVariant.BodyXs}>1.5 ETH</Text>
</MainActionButton>
```

### `isDisabled`

Disables user interaction and applies disabled styling.

| TYPE      | REQUIRED | DEFAULT |
| --------- | -------- | ------- |
| `boolean` | No       | `false` |

### `onPress`

Callback fired when pressed.

| TYPE                        | REQUIRED | DEFAULT     |
| --------------------------- | -------- | ----------- |
| `PressableProps['onPress']` | No       | `undefined` |

### `onPressIn`

Callback fired when a press gesture starts.

| TYPE                          | REQUIRED | DEFAULT     |
| ----------------------------- | -------- | ----------- |
| `PressableProps['onPressIn']` | No       | `undefined` |

### `onPressOut`

Callback fired when a press gesture ends.

| TYPE                           | REQUIRED | DEFAULT     |
| ------------------------------ | -------- | ----------- |
| `PressableProps['onPressOut']` | No       | `undefined` |

### `className`

Additional static Tailwind classes for the button container. For pressed-state or other interactive styling, use `style` as a callback.

| TYPE     | REQUIRED | DEFAULT |
| -------- | -------- | ------- |
| `string` | No       | `''`    |

> **Migrating from `twClassName`:** `twClassName` still works but is deprecated. Rename it to `className`. If both are passed, classes merge in this order: the component's own classes, then `twClassName`, then `className`, so `className` wins on conflicts.

### `style`

React Native style object for the outer pressable. Use the callback form (`({ pressed }) => ...`) for pressed-state styling.

| TYPE                                                            | REQUIRED | DEFAULT     |
| --------------------------------------------------------------- | -------- | ----------- |
| `StyleProp<ViewStyle> \| ({ pressed }) => StyleProp<ViewStyle>` | No       | `undefined` |

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)

## Content guidelines

- `label`: sentence case, concise action label, no period
- Use for primary quick actions such as `Buy`, `Send`, `Receive`, `Scan`, or `Swap`
- Do not use sentence punctuation or loading text
