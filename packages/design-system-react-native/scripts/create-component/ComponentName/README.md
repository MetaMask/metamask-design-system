# ComponentName

the component description

```tsx
import { ComponentName } from '@metamask/design-system-react-native';

<ComponentName>Default Example</ComponentName>;
```

## Props

### `children`

The content of the `ComponentName` component.

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

```tsx
import { ComponentName } from '@metamask/design-system-react-native';

<ComponentName>
  <Text>Custom children content</Text>
</ComponentName>;
```

### `twClassName`

Use the `twClassName` prop to add Tailwind CSS classes to the component. These classes will be merged with the component's default classes using `twMerge`, allowing you to:

- Add new styles that don't exist in the default component
- Override the component's default styles when needed

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

```tsx
import { ComponentName } from '@metamask/design-system-react-native';

// Add additional styles
<ComponentName twClassName="mt-4">
  <Text>Custom Background</Text>
</ComponentName>

// Override default styles
<ComponentName twClassName="!bg-error-default">
  <Text>Override Background</Text>
</ComponentName>
```

### `style`

Use the `style` prop to customize the component's appearance with React Native styles. For consistent styling, prefer using `twClassName` with Tailwind classes when possible, and use `style` for dynamic values or styles not available in Tailwind.

| TYPE                   | REQUIRED | DEFAULT     |
| ---------------------- | -------- | ----------- |
| `StyleProp<ViewStyle>` | No       | `undefined` |

```tsx
const styles = StyleSheet.create({
  custom: {
    marginVertical: 8,
    marginHorizontal: 16,
  },
});

export const StyleExample = () => (
  <ComponentName style={styles.custom}>
    <Text>Custom styled content</Text>
  </ComponentName>
);
```

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
