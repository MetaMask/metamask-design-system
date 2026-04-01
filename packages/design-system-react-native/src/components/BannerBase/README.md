# BannerBase

BannerBase is a foundational banner container with optional title, description, action button, start accessory, and close affordance.

```tsx
import {
  BannerBase,
  Icon,
  IconName,
  IconSize,
} from '@metamask/design-system-react-native';

<BannerBase
  title="Title is sentence case no period"
  description="Description shouldn't repeat title. 1-3 lines."
  actionButtonLabel="Action"
  actionButtonOnPress={() => undefined}
  onClose={() => undefined}
  closeButtonProps={{ testID: 'banner-base-close-button' }}
  startAccessory={<Icon name={IconName.Info} size={IconSize.Lg} />}
/>;
```

## Props

### `title`

Optional title rendered at the top of the banner body. Use `titleProps` to pass props to the `Text` component when `title` is a string.

| PROP         | TYPE                                   | REQUIRED | DEFAULT     |
| ------------ | -------------------------------------- | -------- | ----------- |
| `title`      | `ReactNode`                            | No       | `undefined` |
| `titleProps` | `Omit<Partial<TextProps>, 'children'>` | No       | `undefined` |

```tsx
<BannerBase
  title="Pass only a string through the title prop"
  titleProps={{ testID: 'banner-base-title' }}
/>
```

### `description`

Optional description rendered below the title. Use `descriptionProps` to pass props to the `Text` component when `description` is a string.

| PROP               | TYPE                                   | REQUIRED | DEFAULT     |
| ------------------ | -------------------------------------- | -------- | ----------- |
| `description`      | `ReactNode`                            | No       | `undefined` |
| `descriptionProps` | `Omit<Partial<TextProps>, 'children'>` | No       | `undefined` |

```tsx
<BannerBase
  title="Description demo"
  description="Pass only a string through the description prop."
  descriptionProps={{ testID: 'banner-base-description' }}
/>
```

### `children`

Optional content rendered below the description. If a string is passed, BannerBase wraps it in `Text`. Use `childrenWrapperProps` to pass props to the `Text` wrapper when `children` is a string.

| PROP                   | TYPE                                   | REQUIRED | DEFAULT     |
| ---------------------- | -------------------------------------- | -------- | ----------- |
| `children`             | `ReactNode`                            | No       | `undefined` |
| `childrenWrapperProps` | `Omit<Partial<TextProps>, 'children'>` | No       | `undefined` |

```tsx
<BannerBase
  title="Children as text content"
  children="Children content rendered in Text."
  childrenWrapperProps={{ testID: 'banner-base-children' }}
/>
```

### `actionButtonOnPress`

Optional press handler for the action button.
When provided, `actionButtonLabel` is required. Use `actionButtonProps` to pass additional props to the action `Button`; `variant` is not supported and defaults to primary.

| PROP                  | TYPE                                                               | REQUIRED                                                       | DEFAULT     |
| --------------------- | ------------------------------------------------------------------ | -------------------------------------------------------------- | ----------- |
| `actionButtonOnPress` | `(event: GestureResponderEvent) => void`                           | No                                                             | `undefined` |
| `actionButtonLabel`   | `string`                                                           | Conditionally: required when `actionButtonOnPress` is provided | `undefined` |
| `actionButtonProps`   | `Omit<Partial<ButtonProps>, 'children' \| 'onPress' \| 'variant'>` | No                                                             | `undefined` |

```tsx
<BannerBase
  title="Action prop demo"
  actionButtonLabel="Learn more"
  actionButtonOnPress={() => undefined}
  actionButtonProps={{ testID: 'banner-base-action-button' }}
/>
```

### `onClose`

Optional close callback. If passed, a close button is shown. Use `closeButtonProps` to pass additional props to the close `ButtonIcon`, including `testID` when needed for testing.

| PROP               | TYPE                                                                                                             | REQUIRED | DEFAULT     |
| ------------------ | ---------------------------------------------------------------------------------------------------------------- | -------- | ----------- |
| `onClose`          | `() => void`                                                                                                     | No       | `undefined` |
| `closeButtonProps` | `Omit<Partial<ButtonIconProps>, 'iconName' \| 'onPress'> & { onPress?: (event: GestureResponderEvent) => void }` | No       | `undefined` |

```tsx
<BannerBase
  title="onClose demo"
  onClose={() => undefined}
  closeButtonProps={{ testID: 'banner-base-close-button' }}
/>
```

### `startAccessory`

Optional node rendered at the start of the banner.

| PROP             | TYPE        | REQUIRED | DEFAULT     |
| ---------------- | ----------- | -------- | ----------- |
| `startAccessory` | `ReactNode` | No       | `undefined` |

### `twClassName`

Optional Tailwind classes merged onto the root container.

| PROP          | TYPE     | REQUIRED | DEFAULT     |
| ------------- | -------- | -------- | ----------- |
| `twClassName` | `string` | No       | `undefined` |

### `style`

Use `style` to customize the component's appearance with React Native styles. For consistent styling, prefer using `twClassName` with Tailwind classes when possible. Use `style` with `tw.style()` for conditionals or dynamic values.

| PROP    | TYPE                   | REQUIRED | DEFAULT     |
| ------- | ---------------------- | -------- | ----------- |
| `style` | `StyleProp<ViewStyle>` | No       | `undefined` |

```tsx
import { useTailwind } from '@metamask/design-system-twrnc-preset';

export const ConditionalStyleExample = ({
  isActive,
}: {
  isActive: boolean;
}) => {
  const tw = useTailwind();

  return (
    <BannerBase
      title="Dynamic style example"
      style={tw.style('bg-default', isActive && 'bg-success-default')}
    />
  );
};
```

## Migration from Mobile Component Library

For detailed migration instructions from the Mobile component-library, see the [Migration Guide](https://github.com/MetaMask/metamask-design-system/blob/main/packages/design-system-react-native/MIGRATION.md#bannerbase-component).

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
