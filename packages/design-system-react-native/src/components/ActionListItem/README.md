# ActionListItem

ActionListItem is a pressable list item that displays a label, optional description, and optional start/end accessories.

```tsx
import { ActionListItem } from '@metamask/design-system-react-native';

<ActionListItem
  label="Settings"
  description="Manage your account preferences"
  onPress={() => console.log('Pressed')}
/>;
```

## Props

### `label`

The primary text or content of the list item. When a string, it is wrapped in a `Text` component with `TextVariant.BodyMd` and `FontWeight.Medium`. When a `ReactNode`, it is rendered as-is.

| TYPE                  | REQUIRED | DEFAULT     |
| --------------------- | -------- | ----------- |
| `string \| ReactNode` | Yes      | `undefined` |

```tsx
// String label
<ActionListItem label="Settings" onPress={handlePress} />

// ReactNode label
<ActionListItem
  label={<Text variant={TextVariant.HeadingSm}>Custom Label</Text>}
  onPress={handlePress}
/>
```

### `description`

Optional secondary text below the label. When a string, it is wrapped in a `Text` component with `TextVariant.BodySm` and `TextColor.TextAlternative`. When a `ReactNode`, it is rendered as-is.

| TYPE                  | REQUIRED | DEFAULT     |
| --------------------- | -------- | ----------- |
| `string \| ReactNode` | No       | `undefined` |

```tsx
<ActionListItem
  label="Settings"
  description="Manage your account preferences"
  onPress={handlePress}
/>
```

### `iconName`

Optional icon rendered on the left side. Ignored when `startAccessory` is provided.

| TYPE       | REQUIRED | DEFAULT     |
| ---------- | -------- | ----------- |
| `IconName` | No       | `undefined` |

```tsx
<ActionListItem
  label="Settings"
  iconName={IconName.Setting}
  onPress={handlePress}
/>
```

### `startAccessory`

Optional custom component on the left side. Takes priority over `iconName`.

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

```tsx
<ActionListItem
  label="Security"
  startAccessory={<Icon name={IconName.Security} />}
  onPress={handlePress}
/>
```

### `endAccessory`

Optional custom component on the right side.

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

```tsx
<ActionListItem
  label="Settings"
  endAccessory={<Icon name={IconName.ArrowRight} />}
  onPress={handlePress}
/>
```

### `isDisabled`

When true, applies 50% opacity and disables press interactions.

| TYPE      | REQUIRED | DEFAULT |
| --------- | -------- | ------- |
| `boolean` | No       | `false` |

```tsx
<ActionListItem label="Disabled item" isDisabled onPress={handlePress} />
```

### `onPress`

Callback fired when the list item is pressed.

| TYPE                        | REQUIRED | DEFAULT     |
| --------------------------- | -------- | ----------- |
| `PressableProps['onPress']` | No       | `undefined` |

```tsx
<ActionListItem label="Settings" onPress={() => console.log('Pressed')} />
```

### `pressableProps`

Optional props passed to the underlying `Pressable`. Use this for Pressable-specific overrides.

| TYPE                                                       | REQUIRED | DEFAULT     |
| ---------------------------------------------------------- | -------- | ----------- |
| `Omit<PressableProps, 'onPress' \| 'disabled' \| 'style'>` | No       | `undefined` |

```tsx
<ActionListItem
  label="Settings"
  onPress={handlePress}
  pressableProps={{ onPressIn: handlePressIn }}
/>
```

### `labelTextProps`

Optional props spread to the label `Text` component. Only applied when `label` is a string.

| TYPE                 | REQUIRED | DEFAULT     |
| -------------------- | -------- | ----------- |
| `Partial<TextProps>` | No       | `undefined` |

```tsx
<ActionListItem
  label="Custom styled"
  labelTextProps={{
    variant: TextVariant.HeadingSm,
    fontWeight: FontWeight.Bold,
  }}
  onPress={handlePress}
/>
```

### `descriptionTextProps`

Optional props spread to the description `Text` component. Only applied when `description` is a string.

| TYPE                 | REQUIRED | DEFAULT     |
| -------------------- | -------- | ----------- |
| `Partial<TextProps>` | No       | `undefined` |

```tsx
<ActionListItem
  label="Settings"
  description="Custom styled description"
  descriptionTextProps={{
    variant: TextVariant.BodyXs,
    color: TextColor.TextMuted,
  }}
  onPress={handlePress}
/>
```

### `iconProps`

Optional props spread to the `Icon` component. Only applied when `iconName` is provided and no `startAccessory` is given.

| TYPE                 | REQUIRED | DEFAULT     |
| -------------------- | -------- | ----------- |
| `Partial<IconProps>` | No       | `undefined` |

```tsx
<ActionListItem
  label="Settings"
  iconName={IconName.Setting}
  iconProps={{ size: IconSize.Lg }}
  onPress={handlePress}
/>
```

### `twClassName`

Use the `twClassName` prop to add Tailwind CSS classes to the component. These classes will be merged with the component's default classes using `tw.style()`.

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

```tsx
<ActionListItem
  label="Settings"
  twClassName="rounded-lg"
  onPress={handlePress}
/>
```

### `style`

Use the `style` prop to customize the component's appearance with React Native styles. For consistent styling, prefer using `twClassName` with Tailwind classes when possible. Use `style` with `tw.style()` for conditionals or dynamic values.

| TYPE                   | REQUIRED | DEFAULT     |
| ---------------------- | -------- | ----------- |
| `StyleProp<ViewStyle>` | No       | `undefined` |

```tsx
import { useTailwind } from '@metamask/design-system-twrnc-preset';

export const ConditionalExample = ({ isActive }: { isActive: boolean }) => {
  const tw = useTailwind();

  return (
    <ActionListItem
      label="Settings"
      style={tw.style('mt-4', isActive && 'bg-success-default')}
      onPress={handlePress}
    />
  );
};
```

Migrating to `ActionListItem` from a legacy mobile row or building on MetaMask Mobile? See the [ActionListItem migration guide](../../../MIGRATION.md#actionlistitem-component) for the React Native–only API map, legacy source audit notes, and examples.

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
