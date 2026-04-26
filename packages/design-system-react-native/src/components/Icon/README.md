# Icon

Icons are read-only symbols that represent ideas or objects, offered in standard sizes.

> **Note:** The `assets/` folder in this directory is auto-generated. The source of truth for all SVG assets is `packages/design-system-shared/src/assets/icons/`. Run `yarn generate:icons` from the repo root to regenerate.

```tsx
import { Icon, IconName } from '@metamask/design-system-react-native';

<Icon name={IconName.CheckBold} />;
```

## Props

### `name`

The icon name to display.

| TYPE       | REQUIRED | DEFAULT     |
| ---------- | -------- | ----------- |
| `IconName` | Yes      | `undefined` |

```tsx
<Icon name={IconName.CheckBold} />
```

### `size`

The size of the icon.

Available sizes:

- `IconSize.Xs` (12px)
- `IconSize.Sm` (16px)
- `IconSize.Md` (20px)
- `IconSize.Lg` (24px)
- `IconSize.Xl` (32px)

| TYPE       | REQUIRED | DEFAULT       |
| ---------- | -------- | ------------- |
| `IconSize` | No       | `IconSize.Md` |

```tsx
<Icon name={IconName.CheckBold} size={IconSize.Sm} />
<Icon name={IconName.CheckBold} />
<Icon name={IconName.CheckBold} size={IconSize.Lg} />
```

### `color`

The color of the icon.

`IconColor` values are shared with web (see `@metamask/design-system-shared`). Common tokens include:

- **Neutral:** `IconColor.IconDefault`, `IconColor.IconAlternative`, `IconColor.IconMuted`, `IconColor.OverlayInverse`
- **Primary:** `IconColor.PrimaryDefault`, `IconColor.PrimaryAlternative`, `IconColor.PrimaryInverse`
- **Semantic:** `IconColor.ErrorDefault`, `IconColor.ErrorAlternative`, `IconColor.ErrorInverse`, `IconColor.WarningDefault`, `IconColor.WarningInverse`, `IconColor.SuccessDefault`, `IconColor.SuccessInverse`, `IconColor.InfoDefault`, `IconColor.InfoInverse`

| TYPE        | REQUIRED | DEFAULT                 |
| ----------- | -------- | ----------------------- |
| `IconColor` | No       | `IconColor.IconDefault` |

```tsx
<Icon name={IconName.CheckBold} color={IconColor.SuccessDefault} />
<Icon name={IconName.Warning} color={IconColor.WarningDefault} />
```

### `twClassName`

Use the `twClassName` prop to add Tailwind CSS classes to the component. These classes will be merged with the component's default classes using `twMerge`, allowing you to:

- Add new styles that don't exist in the default component
- Override the component's default styles when needed

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

```tsx
import { Icon, IconName } from '@metamask/design-system-react-native';

// Add additional styles
<Icon
  name={IconName.CheckBold}
  twClassName="opacity-70"
/>

// Override default styles
<Icon
  name={IconName.CheckBold}
  twClassName="!text-error-100"
/>
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
  <Icon name={IconName.CheckBold} style={styles.custom} />
);
```

## Migration from Mobile Component Library

For detailed migration instructions from the Mobile component-library, see the [Migration Guide](https://github.com/MetaMask/metamask-design-system/blob/main/packages/design-system-react-native/MIGRATION.md#icon-component).

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
