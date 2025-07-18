# Spinner

Spinner is used to render loading indicators within an interface.

```tsx
import { Spinner } from '@metamask/design-system-react-native';

<Spinner />;
```

## Props

### `color`

The color of the spinner icon.

Available colors:

- `IconColor.IconDefault`
- `IconColor.IconPrimary`
- `IconColor.IconSuccess`
- `IconColor.IconError`
- `IconColor.IconWarning`

| TYPE | REQUIRED | DEFAULT |
|------|----------|---------|
| `IconColor` | No | `IconColor.IconDefault` |

```tsx
<Spinner color={IconColor.IconPrimary} />
```

### `size`

The size of the spinner.

Available sizes:

- `SpinnerSize.Sm`
- `SpinnerSize.Md`
- `SpinnerSize.Lg`

| TYPE | REQUIRED | DEFAULT |
|------|----------|---------|
| `SpinnerSize` | No | `SpinnerSize.Md` |

```tsx
<Spinner size={SpinnerSize.Lg} />
```

### `loadingText`

Optional text to display next to the spinner.

| TYPE | REQUIRED | DEFAULT |
|------|----------|---------|
| `string` | No | `undefined` |

```tsx
<Spinner loadingText="Loading data..." />
```

### `loadingTextProps`

Optional props to customize the loading text appearance.

| TYPE | REQUIRED | DEFAULT |
|------|----------|---------|
| `Partial<TextProps>` | No | `undefined` |

```tsx
<Spinner 
  loadingText="Loading..."
  loadingTextProps={{
    variant: TextVariant.BodyMd,
    color: TextColor.PrimaryDefault,
  }}
/>
```

### `twClassName`

Use the `twClassName` prop to add Tailwind CSS classes to the component. These classes will be merged with the component's default classes using `twMerge`, allowing you to:

- Add new styles that don't exist in the default component
- Override the component's default styles when needed

| TYPE | REQUIRED | DEFAULT |
|------|----------|---------|
| `string` | No | `undefined` |

```tsx
import { Spinner } from '@metamask/design-system-react-native';

// Add additional styles
<Spinner twClassName="opacity-70">
  Semi-transparent Spinner
</Spinner>

// Override default styles
<Spinner twClassName="!text-error-100">
  Override Color
</Spinner>
```

### `style`

Use the `style` prop to customize the component's appearance with React Native styles. For consistent styling, prefer using `twClassName` with Tailwind classes when possible, and use `style` for dynamic values or styles not available in Tailwind.

| TYPE | REQUIRED | DEFAULT |
|------|----------|---------|
| `StyleProp<ViewStyle>` | No | `undefined` |

```tsx
const styles = StyleSheet.create({
  custom: {
    marginVertical: 8,
    marginHorizontal: 16,
  },
});

export const StyleExample = () => (
  <Spinner style={styles.custom} />
);
```

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
