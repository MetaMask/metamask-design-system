# Toast

`Toast` is the presentational toast surface. `Toaster` is the mounted root renderer, and `toast(...)` is the imperative API used to display a toast from anywhere.

```tsx
import {
  Toast,
  Toaster,
  toast,
  ToastSeverity,
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
import { toast, ToastSeverity } from '@metamask/design-system-react-native';

const Content = () => {
  const handlePress = () => {
    toast({
      text: 'Toast message',
      description: 'Description of toast',
      severity: ToastSeverity.Success,
      hasNoTimeout: false,
      actionText: 'Action',
      onActionPress: () => {
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
import { Toast, ToastSeverity } from '@metamask/design-system-react-native';

<Toast
  text="Toast message"
  description="Description of toast"
  severity={ToastSeverity.Success}
  actionText="Action"
  onActionPress={() => {}}
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

`Toast` accepts the display props for a single toast surface:

- `text` - Main toast content. Accepts plain text or rich React content.
- `description` - Optional secondary content shown below the main text.
- `actionText` and `onActionPress` - Optional action button content and handler.
- `onClose` - Required close handler for direct rendering.
- `closeButtonProps` - Optional props merged onto the close `ButtonIcon`.
- `startAccessory` - Optional leading accessory that overrides the severity icon.
- `severity` - Optional semantic state used to choose the default icon.
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

- `ToastSeverity.Default` - Neutral toast with the default circle icon
- `ToastSeverity.Success` - Success toast with the confirmation icon
- `ToastSeverity.Warning` - Warning toast with the danger icon
- `ToastSeverity.Error` - Error toast with the error icon

## Toast Options

- `text` - Main toast content. Accepts plain text or rich React content.
- `description` - Optional secondary content shown below the main text.
- `actionText` and `onActionPress` - Optional action button content and handler.
- `onClose` - Optional callback invoked when the toast closes.
- `closeButtonProps` - Optional props merged onto the close `ButtonIcon`.
- `startAccessory` - Optional leading accessory that overrides the severity icon.
- `severity` - Optional semantic state used to choose the default icon.
- `bottomOffset` - Optional offset from the bottom of the screen.
- `hasNoTimeout` - When `true`, the toast stays visible until dismissed.

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
