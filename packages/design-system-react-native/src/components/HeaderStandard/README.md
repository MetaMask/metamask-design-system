# HeaderStandard

HeaderStandard is a header component with centered title and optional back/close buttons. It extends [HeaderBase](../HeaderBase/README.md) with convenient props for common header patterns.

```tsx
import {
  HeaderStandard,
  getHeaderStandardNavbarOptions,
} from '@metamask/design-system-react-native';

<HeaderStandard title="Page Title" onBack={handleBack} onClose={handleClose} />;
```

## Props

Extends [HeaderBaseProps](../HeaderBase/README.md). Key props:

| PROP               | TYPE                                | REQUIRED | DEFAULT     |
| ------------------ | ----------------------------------- | -------- | ----------- |
| `title`            | `string \| ReactNode`               | No       | `undefined` |
| `subtitle`         | `string \| ReactNode`               | No       | `undefined` |
| `onBack`           | `() => void`                        | No       | `undefined` |
| `onClose`          | `() => void`                        | No       | `undefined` |
| `backButtonProps`  | `Omit<ButtonIconProps, 'iconName'>` | No       | `undefined` |
| `closeButtonProps` | `Omit<ButtonIconProps, 'iconName'>` | No       | `undefined` |
| `twClassName`      | `string`                            | No       | `undefined` |

## Usage

```tsx
<HeaderStandard title="Settings" onBack={() => navigation.goBack()} />

<HeaderStandard
  title="Modal Title"
  onClose={() => setModalVisible(false)}
/>

<HeaderStandard
  title="Page Title"
  subtitle="Subtitle text"
  onBack={handleBack}
  onClose={handleClose}
/>
```
