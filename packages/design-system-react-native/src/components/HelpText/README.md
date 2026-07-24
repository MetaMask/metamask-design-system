# HelpText

HelpText displays a helper or validation message below a form field. Use it to give the user guidance ("Must be at least 8 characters") or to surface field-level feedback ("Address is invalid"). Reach for a higher-level component such as `BannerAlert` when the message applies to a whole form or page rather than a single field.

```tsx
import { HelpText } from '@metamask/design-system-react-native';

<HelpText>Helper message</HelpText>;
```

## Props

### `severity`

Use the `severity` prop to convey the semantic meaning of the message. When set, `severity` overrides any value passed to `color`.

Available severities:

- `HelpTextSeverity.Info`
- `HelpTextSeverity.Success`
- `HelpTextSeverity.Warning`
- `HelpTextSeverity.Danger`

| TYPE               | REQUIRED | DEFAULT     |
| ------------------ | -------- | ----------- |
| `HelpTextSeverity` | No       | `undefined` |

```tsx
<HelpText severity={HelpTextSeverity.Info}>Informational message</HelpText>
<HelpText severity={HelpTextSeverity.Success}>Success message</HelpText>
<HelpText severity={HelpTextSeverity.Warning}>Warning message</HelpText>
<HelpText severity={HelpTextSeverity.Danger}>Danger message</HelpText>
```

### `showIcon`

When `true` and `severity` is set, shows a leading `IconAlert` at `IconSize.Sm`. If `severity` is omitted, the icon is not shown.

| TYPE      | REQUIRED | DEFAULT |
| --------- | -------- | ------- |
| `boolean` | No       | `false` |

```tsx
<HelpText severity={HelpTextSeverity.Info} showIcon>
  Informational message
</HelpText>
<HelpText severity={HelpTextSeverity.Danger} showIcon>
  Danger message
</HelpText>
```

### `color`

Use `color` to set a custom text color when no `severity` applies. Ignored when `severity` is provided.

| TYPE        | REQUIRED | DEFAULT                 |
| ----------- | -------- | ----------------------- |
| `TextColor` | No       | `TextColor.TextDefault` |

```tsx
<HelpText color={TextColor.TextDefault}>Default text color</HelpText>
<HelpText color={TextColor.TextAlternative}>Alternative text color</HelpText>
<HelpText color={TextColor.PrimaryDefault}>Primary text color</HelpText>
```

### `children`

The content of the `HelpText` component.

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | Yes      | `undefined` |

```tsx
import { HelpText } from '@metamask/design-system-react-native';

<HelpText>Must be at least 8 characters</HelpText>;
```

### `twClassName`

Use the `twClassName` prop to add Tailwind CSS classes to the component. These classes will be merged with the component's default classes using `twMerge`, allowing you to:

- Add new styles that don't exist in the default component
- Override the component's default styles when needed

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

```tsx
import { HelpText } from '@metamask/design-system-react-native';

// Add additional styles
<HelpText twClassName="mt-4">
  Helper with margin
</HelpText>

// Override default styles
<HelpText twClassName="text-error-default">
  Override color
</HelpText>
```

### `style`

Use the `style` prop to customize the component's appearance with React Native styles. For consistent styling, prefer using `twClassName` with Tailwind classes when possible. Use `style` with `tw.style()` for conditionals or dynamic values.

| TYPE                   | REQUIRED | DEFAULT     |
| ---------------------- | -------- | ----------- |
| `StyleProp<TextStyle>` | No       | `undefined` |

```tsx
import { useTailwind } from '@metamask/design-system-twrnc-preset';

export const ConditionalExample = ({ isActive }: { isActive: boolean }) => {
  const tw = useTailwind();

  return (
    <HelpText style={tw.style('mt-2', isActive && 'text-success-default')}>
      Conditional styling
    </HelpText>
  );
};
```

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
