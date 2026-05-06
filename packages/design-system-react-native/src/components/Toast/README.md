# Toast

Toast is a component that slides up from the bottom of the screen. It is typically used to show post-confirmation information such as account switches, network changes, or transaction confirmations.

```tsx
import { Button, Toaster, toast } from '@metamask/design-system-react-native';

const Demo = () => {
  return (
    <>
      <Button
        onPress={() => {
          toast({
            title: 'Title is sentence case no period',
            description: "Description shouldn't repeat title. 1-3 lines.",
          });
        }}
      >
        Show Toast
      </Button>
      <Toaster />
    </>
  );
};
```

## Usage

Render the `Toaster` component once in your app, then create a toast by calling `toast(...)`.

```tsx
import { Button, Toaster, toast } from '@metamask/design-system-react-native';

const Demo = () => {
  return (
    <>
      <Button
        onPress={() => {
          toast({
            title: 'Title is sentence case no period',
            description: "Description shouldn't repeat title. 1-3 lines.",
          });
        }}
      >
        Show Toast
      </Button>
      <Toaster />
    </>
  );
};
```

`<Toaster />` must be rendered exactly once. On mount it registers the `toast(...)` / `toast.dismiss()` API so it can be called from anywhere in your app.

Call `toast.dismiss()` to dismiss the currently visible toast.

Use `closeButtonProps` to access the always-visible close button element when you need to set a `testID`, override its accessibility label, or customize its press behavior.

`toast(...)` and `toast.dismiss()` throw a descriptive error if called before `<Toaster />` is mounted.

### `title`

Use `title` for the primary message. Use `titleProps` to access the title `Text` element when you need to set a `testID`, accessibility props, or other `Text` overrides.

```tsx
toast({
  title: 'Account switched',
});
```

### `description`

Use `description` for supporting content below the title. Use `descriptionProps` to access the description `Text` element when you need to set a `testID`, accessibility props, or other `Text` overrides.

```tsx
toast({
  title: 'Account switched',
  description: 'You are now using Account 2.',
});
```

### `severity`

Use `severity` to show a semantic default start icon. Use `iconAlertProps` to access the default `IconAlert` element when you need to set a `testID`, accessibility props, or other icon overrides for a non-default severity.

Available severities:

- `ToastSeverity.Default` - No default leading icon
- `ToastSeverity.Success`
- `ToastSeverity.Warning`
- `ToastSeverity.Danger`

```tsx
toast({
  title: 'Network changed',
  description: 'You are now connected to Linea.',
  severity: ToastSeverity.Success,
});
```

### `actionButtonOnPress`

Use `actionButtonOnPress` together with `actionButtonLabel` when the toast needs a secondary action. Use `actionButtonProps` to access the rendered button element when you need to set a `testID`, accessibility props, or other button overrides.

```tsx
toast({
  title: 'Privacy policy update',
  description: 'Review how Consensys handles your data.',
  actionButtonLabel: 'Read more',
  actionButtonOnPress: () => {
    console.log('Action pressed');
  },
});
```

### `startAccessory`

Use `startAccessory` to replace the default severity icon with custom content such as an icon, avatar, or network badge. Use `children` and `childrenWrapperProps` when you need to render additional content below the description, or to access that content wrapper for a `testID` and other view-level overrides.

```tsx
import { Icon, IconName, IconSize } from '@metamask/design-system-react-native';

toast({
  title: 'Withdrawal pending',
  description: 'Your withdrawal is processing.',
  startAccessory: <Icon name={IconName.Clock} size={IconSize.Lg} />,
});
```

## Toast Options

- `title`, `titleProps` - Main toast content and optional text props.
- `description`, `descriptionProps` - Optional secondary content and text props.
- `children`, `childrenWrapperProps` - Optional extra content rendered below the description.
- `actionButtonLabel`, `actionButtonOnPress`, `actionButtonProps` - Optional action button content and handler.
- `onClose` - Optional callback invoked when the toast closes.
- `closeButtonProps` - Optional props merged onto the always-visible close `ButtonIcon`.
- `startAccessory` - Optional leading accessory that overrides the severity icon.
- `severity` - Optional semantic state used to choose the default icon. Defaults to `ToastSeverity.Default`, which shows no icon.
- `iconAlertProps` - Optional props merged onto the default `IconAlert`.
- `bottomOffset` - Optional offset from the bottom of the screen.
- `hasNoTimeout` - When `true`, the toast stays visible until dismissed.

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
