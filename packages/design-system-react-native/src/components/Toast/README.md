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
            hasNoTimeout: false,
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

## Setup

Using the toast API is a two-step process:

### 1. Render `<Toaster />` once at the root of the app

```tsx
import { Toaster } from '@metamask/design-system-react-native';

const App = () => (
  <>
    <RootComponent />
    <Toaster />
  </>
);
```

`<Toaster />` must be rendered exactly once. On mount it registers the `toast(...)` / `toast.dismiss()` API so it can be called from anywhere in your app.

### 2. Call `toast(...)`

Call `toast(...)` from any component, hook, controller, service, or utility after `<Toaster />` has mounted.

Call `toast.dismiss()` to dismiss the currently visible toast.

`toast(...)` and `toast.dismiss()` throw a descriptive error if called before `<Toaster />` is mounted.

## Usage

### Title and Description

Use `title` for the primary message and `description` for supporting content.

```tsx
toast({
  title: 'Account switched',
  description: 'You are now using Account 2.',
  hasNoTimeout: false,
});
```

### Severity

Use `severity` to show a semantic default start icon.

Available severities:

- `ToastSeverity.Default` - No default leading icon
- `ToastSeverity.Success` - Confirmation icon
- `ToastSeverity.Warning` - Warning icon
- `ToastSeverity.Danger` - Error icon

```tsx
toast({
  title: 'Network changed',
  description: 'You are now connected to Linea.',
  severity: ToastSeverity.Success,
  hasNoTimeout: false,
});
```

### Action Button

Use `actionButtonLabel` and `actionButtonOnPress` together when the toast needs a secondary action.

```tsx
toast({
  title: 'Privacy policy update',
  description: 'Review how Consensys handles your data.',
  actionButtonLabel: 'Read more',
  actionButtonOnPress: () => {
    console.log('Action pressed');
  },
  hasNoTimeout: false,
});
```

### Custom Start Accessory

Use `startAccessory` to replace the default severity icon with custom content such as an icon, avatar, or network badge.

```tsx
import { Icon, IconName, IconSize } from '@metamask/design-system-react-native';

toast({
  title: 'Withdrawal pending',
  description: 'Your withdrawal is processing.',
  startAccessory: <Icon name={IconName.Clock} size={IconSize.Lg} />,
  hasNoTimeout: false,
});
```

## Imperative API

### `toast(options: ToastOptions)`

Shows a toast with the provided options.

| PARAMETER | TYPE           | DESCRIPTION         |
| --------- | -------------- | ------------------- |
| options   | `ToastOptions` | Toast configuration |

### `toast.dismiss()`

Dismisses the currently visible toast with a slide-down animation.

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
