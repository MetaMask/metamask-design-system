# Toast

Toast is a component that slides up from the bottom of the screen. It is typically used to show post-confirmation information such as account switches, network changes, or transaction confirmations.

```tsx
import { Toast, ToastVariant } from '@metamask/design-system-react-native';
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
import {
  Toast,
  ToastVariant,
  AvatarAccountVariant,
} from '@metamask/design-system-react-native';

const Content = () => {
  const handlePress = () => {
    Toast.show({
      variant: ToastVariant.Account,
      hasNoTimeout: false,
      labelOptions: [
        { label: 'Switching to' },
        { label: ' Account 2.', isBold: true },
      ],
      accountAddress: '0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8',
      accountAvatarType: AvatarAccountVariant.Jazzicon,
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

### `labelsContainerProps`

Props spread to the labels container View (e.g., `testID` for testing).

| TYPE                                     | REQUIRED | DEFAULT     |
| ---------------------------------------- | -------- | ----------- |
| `Omit<ViewProps, 'children' \| 'style'>` | No       | `undefined` |

```tsx
<Toast labelsContainerProps={{ testID: 'toast-labels' }} />
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

Slides a toast up with the provided options. Requires `<Toast />` to be mounted.

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

## Toast Variants

- `ToastVariant.Plain` - Simple text toast
- `ToastVariant.Account` - Toast with account avatar
- `ToastVariant.Network` - Toast with network avatar
- `ToastVariant.App` - Toast with app favicon
- `ToastVariant.Icon` - Toast with icon avatar

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
