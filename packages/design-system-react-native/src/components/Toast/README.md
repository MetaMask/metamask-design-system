# Toast

Toast is a component that slides up from the bottom of the screen. It is used to show compact, dismissible status updates with an optional description, action button, and leading accessory.

```tsx
import { Toast, ToastSeverity } from '@metamask/design-system-react-native';
```

## Setup

Using Toast is a two-step process:

### 1. Render `<Toast />` once at the root of the app

```tsx
import { Toast } from '@metamask/design-system-react-native';

const App = () => (
  <>
    <RootComponent />
    <Toast />
  </>
);
```

`<Toast />` must be rendered exactly once. On mount it registers itself with the `Toast.show` / `Toast.hide` static methods so they can be called from anywhere — React components, hooks, controllers, services, or plain utilities.

### 2. Call `Toast.show` from anywhere

```tsx
import { Toast, ToastSeverity } from '@metamask/design-system-react-native';

const Content = () => {
  const handlePress = () => {
    Toast.show({
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

Call `Toast.hide()` to dismiss the currently visible toast.

Both `Toast.show` and `Toast.hide` throw a descriptive error if called before `<Toast />` is mounted.

## Props

### `twClassName`

Optional Tailwind CSS classes for the toast container.

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

```tsx
<Toast twClassName="mx-2" />
```

### `testID`

Test identifier for the root element, inherited from `ViewProps`.

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

```tsx
<Toast testID="my-toast" />
```

## Static Methods

### `Toast.show(options: ToastOptions)`

Slides a toast up with the provided options. Requires `<Toast />` to be mounted. `startAccessory` overrides the default severity icon when you need custom content such as a network avatar or bespoke glyph.

| PARAMETER | TYPE           | DESCRIPTION         |
| --------- | -------------- | ------------------- |
| options   | `ToastOptions` | Toast configuration |

### `Toast.hide()`

Dismisses the currently visible toast with a slide-down animation.

## Instance Methods (advanced)

The underlying ref is still forwarded for advanced cases (for example, Storybook stories with multiple isolated toasts). Prefer the static API in application code.

```tsx
const ref = useRef<ToastRef>(null);
<Toast ref={ref} />;
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
- `onClose` - Optional callback invoked when the close button is pressed.
- `closeButtonProps` - Optional props merged onto the close `ButtonIcon`.
- `startAccessory` - Optional leading accessory that overrides the severity icon.
- `severity` - Optional semantic state used to choose the default icon.
- `bottomOffset` - Optional offset from the bottom of the screen.
- `hasNoTimeout` - When `true`, the toast stays visible until dismissed.

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
