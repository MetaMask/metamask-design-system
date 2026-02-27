# TabEmptyState

TabEmptyState is used to display a centered empty state with an optional icon, description, action button, and custom content.

```tsx
import { TabEmptyState } from '@metamask/design-system-react-native';

<TabEmptyState
  description="No items found"
  actionButtonText="Add Item"
  onAction={() => console.log('pressed')}
/>;
```

## Props

### `icon`

Optional icon to display in the empty state. If using a PNG/JPG image, use `useAssetFromTheme` to handle light/dark themes.

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

```tsx
import { TabEmptyState } from '@metamask/design-system-react-native';
import { Icon, IconName, IconSize } from '@metamask/design-system-react-native';

<TabEmptyState
  icon={<Icon name={IconName.Add} size={IconSize.Xl} />}
  description="No items found"
/>;
```

### `description`

Optional description text displayed in the empty state.

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

```tsx
<TabEmptyState description="No items available at the moment" />
```

### `descriptionProps`

Optional props to pass to the description `Text` component. Use this for a separate `testID` or style overrides.

| TYPE                 | REQUIRED | DEFAULT     |
| -------------------- | -------- | ----------- |
| `Partial<TextProps>` | No       | `undefined` |

```tsx
<TabEmptyState
  description="No items found"
  descriptionProps={{ testID: 'description-text' }}
/>
```

### `actionButtonText`

Optional label for the action button. The button is only rendered when both `actionButtonText` and `onAction` are provided.

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

```tsx
<TabEmptyState
  actionButtonText="Try Again"
  onAction={() => console.log('pressed')}
/>
```

### `actionButtonProps`

Optional props to pass to the action `Button` component. Use this for a separate `testID` or style overrides.

| TYPE                   | REQUIRED | DEFAULT     |
| ---------------------- | -------- | ----------- |
| `Partial<ButtonProps>` | No       | `undefined` |

```tsx
<TabEmptyState
  actionButtonText="Add Item"
  onAction={() => {}}
  actionButtonProps={{ testID: 'action-button' }}
/>
```

### `onAction`

Optional callback when the action button is pressed. The button is only rendered when both `actionButtonText` and `onAction` are provided.

| TYPE         | REQUIRED | DEFAULT     |
| ------------ | -------- | ----------- |
| `() => void` | No       | `undefined` |

```tsx
<TabEmptyState
  actionButtonText="Retry"
  onAction={() => console.log('Action pressed')}
/>
```

### `children`

Optional additional content to display below the action button.

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

```tsx
import { Text } from '@metamask/design-system-react-native';

<TabEmptyState description="Custom content below">
  <Text>Additional custom content</Text>
</TabEmptyState>;
```

### `twClassName`

Use the `twClassName` prop to add Tailwind CSS classes to the component. These classes will be merged with the component's default classes using `tw.style()`, allowing you to:

- Add new styles that don't exist in the default component
- Override the component's default styles when needed

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

```tsx
// Add additional styles
<TabEmptyState twClassName="mt-4" description="With margin" />

// Override default styles
<TabEmptyState twClassName="p-8" description="With larger padding" />
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
    <TabEmptyState
      description="Conditional styling"
      style={tw.style('bg-default', isActive && 'bg-success-default')}
    />
  );
};
```

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
