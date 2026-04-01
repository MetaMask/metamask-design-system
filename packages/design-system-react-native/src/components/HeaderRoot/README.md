# HeaderRoot

HeaderRoot is a header component with a left section (custom children or title row) and an end section (endAccessory or endButtonIconProps). It supports optional top safe area inset.

```tsx
import { HeaderRoot } from '@metamask/design-system-react-native';

<HeaderRoot
  title="Screen Title"
  endButtonIconProps={[{ iconName: IconName.Close, onPress: handleClose }]}
/>;
```

## Props

Extends React Native [ViewProps](https://reactnative.dev/docs/view). Key props:

| PROP                 | TYPE                 | REQUIRED | DEFAULT                                     |
| -------------------- | -------------------- | -------- | ------------------------------------------- |
| `children`           | `ReactNode`          | No       | `undefined`                                 |
| `title`              | `ReactNode`          | No       | `undefined`                                 |
| `titleAccessory`     | `ReactNode`          | No       | `undefined`                                 |
| `titleProps`         | `Partial<TextProps>` | No       | `undefined` (only when `title` is a string) |
| `endAccessory`       | `ReactNode`          | No       | `undefined`                                 |
| `endButtonIconProps` | `ButtonIconProps[]`  | No       | `undefined`                                 |
| `includesTopInset`   | `boolean`            | No       | `false`                                     |
| `twClassName`        | `string`             | No       | `undefined`                                 |

## Usage

```tsx
import {
  HeaderRoot,
  Text,
  TextVariant,
} from '@metamask/design-system-react-native';

<HeaderRoot title="Wallet" />

<HeaderRoot
  title={<Text variant={TextVariant.HeadingLg}>Custom title</Text>}
  endButtonIconProps={[{ iconName: IconName.Close, onPress: onClose }]}
/>

<HeaderRoot
  title="Details"
  titleAccessory={<BadgeStatus status={BadgeStatusStatus.Active} />}
  endButtonIconProps={[
    { iconName: IconName.Close, onPress: onClose },
  ]}
/>

<HeaderRoot includesTopInset title="With safe area" />
```
