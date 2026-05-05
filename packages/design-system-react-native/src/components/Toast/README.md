# Toast

`Toast` is the presentational toast surface. `Toaster` is the mounted root renderer, and `toast(...)` is the imperative API used to display a toast from anywhere.

```tsx
import {
  Toast,
  Toaster,
  toast,
  BannerAlertSeverity,
} from '@metamask/design-system-react-native';
```

## Setup

Using the runtime toast API is a two-step process:

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

`<Toaster />` must be rendered exactly once. On mount it registers the `toast(...)` / `toast.hide()` / `toast.dismiss()` API so it can be called from anywhere — React components, hooks, controllers, services, or plain utilities.

### 2. Call `toast(...)` from anywhere

```tsx
import { toast, BannerAlertSeverity } from '@metamask/design-system-react-native';

const Content = () => {
  const handlePress = () => {
    toast({
      title: 'Toast message',
      description: 'Description of toast',
      severity: BannerAlertSeverity.Success,
      hasNoTimeout: false,
      actionButtonLabel: 'Action',
      actionButtonOnPress: () => {
        console.log('Toast action pressed');
      },
    });
  };

  return <Button onPress={handlePress}>Show Toast</Button>;
};
```

Call `toast.hide()` or `toast.dismiss()` to dismiss the currently visible toast.

`toast(...)`, `toast.show(...)`, `toast.hide()`, and `toast.dismiss()` throw a descriptive error if called before `<Toaster />` is mounted.

## Direct Render

Use `Toast` when you want to render a single toast surface directly in Storybook, docs, or bespoke layouts.

```tsx
import { Toast, BannerAlertSeverity } from '@metamask/design-system-react-native';

<Toast
  title="Toast message"
  description="Description of toast"
  severity={BannerAlertSeverity.Success}
  actionButtonLabel="Action"
  actionButtonOnPress={() => {}}
  onClose={() => {}}
/>;
```

## Props

### `Toaster` Props

#### `twClassName`

Optional Tailwind CSS classes applied to the rendered toast surface.

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

```tsx
<Toaster twClassName="mx-2" />
```

#### `testID`

Test identifier for the root element, inherited from `ViewProps`.

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

```tsx
<Toaster testID="my-toaster" />
```

### `Toast` Props

`Toast` accepts the same content API as `BannerBase`, plus toast-specific severity props:

- `title`, `titleProps`
- `description`, `descriptionProps`
- `children`, `childrenWrapperProps`
- `actionButtonLabel`, `actionButtonOnPress`, `actionButtonProps`
- `startAccessory`
- `onClose`, `closeButtonProps`
- `severity` - Optional semantic state used to choose the default icon.
- `iconProps` - Optional props merged onto the default severity icon.
- `twClassName` - Optional extra classes for the toast surface.

## Imperative API

### `toast(options: ToastOptions)`

Slides a toast up with the provided options. Requires `<Toaster />` to be mounted. `startAccessory` overrides the default severity icon when you need custom content such as a network avatar or bespoke glyph.

| PARAMETER | TYPE           | DESCRIPTION         |
| --------- | -------------- | ------------------- |
| options   | `ToastOptions` | Toast configuration |

### `toast.show(options: ToastOptions)`

Alias for `toast(options)`.

### `toast.hide()`

Dismisses the currently visible toast with a slide-down animation.

### `toast.dismiss()`

Alias for `toast.hide()`.

## `Toaster` Ref (advanced)

The underlying ref is still forwarded for advanced cases. Prefer `toast(...)` in application code.

```tsx
const ref = useRef<ToasterRef>(null);
<Toaster ref={ref} />;
ref.current?.showToast(options);
ref.current?.closeToast();
```

## Toast Severity

- Omit `severity` to render no default leading icon.
- `BannerAlertSeverity.Info` - Info toast with the info icon
- `BannerAlertSeverity.Success` - Success toast with the confirmation icon
- `BannerAlertSeverity.Warning` - Warning toast with the warning icon
- `BannerAlertSeverity.Danger` - Danger toast with the danger icon

## Toast Options

- `title`, `titleProps` - Main toast content and optional text props.
- `description`, `descriptionProps` - Optional secondary content and text props.
- `children`, `childrenWrapperProps` - Optional extra content rendered below the description.
- `actionButtonLabel`, `actionButtonOnPress`, `actionButtonProps` - Optional action button content and handler.
- `onClose` - Optional callback invoked when the toast closes.
- `closeButtonProps` - Optional props merged onto the close `ButtonIcon`.
- `startAccessory` - Optional leading accessory that overrides the severity icon.
- `severity` - Optional semantic state used to choose the default icon.
- `iconProps` - Optional props merged onto the default severity icon.
- `bottomOffset` - Optional offset from the bottom of the screen.
- `hasNoTimeout` - When `true`, the toast stays visible until dismissed.

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
