# TitleStandard

TitleStandard displays a title with optional accessories in a left-aligned layout (top label, title, title accessory, bottom label/accessory).

```tsx
import { TitleStandard } from '@metamask/design-system-react-native';

<TitleStandard
  topLabel="Send"
  title="$4.42"
  titleAccessory={<Icon name={IconName.Info} />}
/>;
```

## Props

| PROP               | TYPE                 | REQUIRED | DEFAULT     |
| ------------------ | -------------------- | -------- | ----------- |
| `title`            | `string`             | No       | `undefined` |
| `titleAccessory`   | `ReactNode`          | No       | `undefined` |
| `topAccessory`     | `ReactNode`          | No       | `undefined` |
| `topLabel`         | `string`             | No       | `undefined` |
| `bottomAccessory`  | `ReactNode`          | No       | `undefined` |
| `bottomLabel`      | `string`             | No       | `undefined` |
| `titleProps`       | `Partial<TextProps>` | No       | `undefined` |
| `topLabelProps`    | `Partial<TextProps>` | No       | `undefined` |
| `bottomLabelProps` | `Partial<TextProps>` | No       | `undefined` |
| `testID`           | `string`             | No       | `undefined` |
| `twClassName`      | `string`             | No       | `undefined` |

## Usage

```tsx
<TitleStandard title="$1,234.56" />

<TitleStandard topLabel="Total Balance" title="$5,432.10" />

<TitleStandard
  topLabel="Send"
  title="$4.42"
  bottomLabel="0.002 ETH"
/>

<TitleStandard
  topLabel="Balance"
  title="$4.42"
  titleAccessory={<Icon name={IconName.Info} />}
/>
```
