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
<ComponentName twClassName="bg-error-default">
  <Text>Override Background</Text>
</ComponentName>
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
    <ComponentName
      style={tw.style('bg-default', isActive && 'bg-success-default')}
    >
      <Text>Conditional styling</Text>
    </ComponentName>
  );
};
```

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
