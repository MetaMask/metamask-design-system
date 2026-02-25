# Toast

Toast is a component that slides up from the bottom of the screen. It is typically used to show post-confirmation information such as account switches, network changes, or transaction confirmations.

```tsx
import {
  Toast,
  ToastContext,
  ToastContextWrapper,
} from '@metamask/design-system-react-native';
```

## Setup

Using Toast requires a three-step process:

### 1. Wrap root with ToastContextWrapper

```tsx
import { ToastContextWrapper } from '@metamask/design-system-react-native';

const App = () => (
  <ToastContextWrapper>
    <RootComponent />
  </ToastContextWrapper>
);
```

### 2. Render Toast with ref from context

```tsx
import { useContext } from 'react';
import { Toast, ToastContext } from '@metamask/design-system-react-native';

const RootComponent = () => {
  const { toastRef } = useContext(ToastContext);

  return (
    <>
      <Content />
      <Toast ref={toastRef} />
    </>
  );
};
```

### 3. Call showToast from any child

```tsx
import { useContext } from 'react';
import {
  ToastContext,
  ToastVariant,
} from '@metamask/design-system-react-native';

const Content = () => {
  const { toastRef } = useContext(ToastContext);

  const handlePress = () => {
    toastRef.current?.showToast({
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

## Props

### `twClassName`

Optional Tailwind CSS classes for the toast container.

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

```tsx
<Toast ref={toastRef} twClassName="mx-2" />
```

### `labelsContainerProps`

Props spread to the labels container View (e.g., `testID` for testing).

| TYPE                                     | REQUIRED | DEFAULT     |
| ---------------------------------------- | -------- | ----------- |
| `Omit<ViewProps, 'children' \| 'style'>` | No       | `undefined` |

```tsx
<Toast ref={toastRef} labelsContainerProps={{ testID: 'toast-labels' }} />
```

### `testID`

Test identifier for the root element, inherited from `ViewProps`.

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

```tsx
<Toast ref={toastRef} testID="my-toast" />
```

## Methods

### `showToast(options: ToastOptions)`

Triggers the toast to slide up with the provided options.

| PARAMETER | TYPE           | DESCRIPTION         |
| --------- | -------------- | ------------------- |
| options   | `ToastOptions` | Toast configuration |

### `closeToast()`

Dismisses the toast with a slide-down animation.

## Toast Variants

- `ToastVariant.Plain` - Simple text toast
- `ToastVariant.Account` - Toast with account avatar
- `ToastVariant.Network` - Toast with network avatar
- `ToastVariant.App` - Toast with app favicon
- `ToastVariant.Icon` - Toast with icon avatar

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
