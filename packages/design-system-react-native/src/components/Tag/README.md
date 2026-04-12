# Tag

A tag is a compact, non-interactive or interactive label used to categorize, annotate, or highlight metadata. Tags help users quickly scan, filter, and understand content relationships at a glance.

**Figma:** [MMDS Components — Tag](https://www.figma.com/design/1D6tnzXqWgnUC3spaAOELN/%F0%9F%A6%8A-MMDS-Components?node-id=12339-1167)

```tsx
import { Tag } from '@metamask/design-system-react-native';

<Tag>Default Example</Tag>;
```

## Props

### `children`

The content of the `Tag` component.

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

```tsx
import { Tag } from '@metamask/design-system-react-native';

<Tag>
  <Text>Custom children content</Text>
</Tag>;
```

### `twClassName`

Use the `twClassName` prop to add Tailwind CSS classes to the component. These classes will be merged with the component's default classes using `twMerge`, allowing you to:

- Add new styles that don't exist in the default component
- Override the component's default styles when needed

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

```tsx
import { Tag } from '@metamask/design-system-react-native';

// Add additional styles
<Tag twClassName="mt-4">
  <Text>Custom Background</Text>
</Tag>

// Override default styles
<Tag twClassName="bg-error-default">
  <Text>Override Background</Text>
</Tag>
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
    <Tag style={tw.style('bg-default', isActive && 'bg-success-default')}>
      <Text>Conditional styling</Text>
    </Tag>
  );
};
```
