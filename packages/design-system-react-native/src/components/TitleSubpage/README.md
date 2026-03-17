# TitleSubpage

TitleSubpage displays a title with optional accessories in a left-aligned layout, with an optional startAccessory to the left of the content.

```tsx
import { TitleSubpage } from '@metamask/design-system-react-native';

<TitleSubpage
  startAccessory={<AvatarToken />}
  title="Token Name"
  bottomLabel="$1,234.56"
/>;
```

## Props

| PROP               | TYPE                 | REQUIRED | DEFAULT     |
| ------------------ | -------------------- | -------- | ----------- |
| `title`            | `string`             | No       | `undefined` |
| `titleAccessory`   | `ReactNode`          | No       | `undefined` |
| `startAccessory`   | `ReactNode`          | No       | `undefined` |
| `bottomAccessory`  | `ReactNode`          | No       | `undefined` |
| `bottomLabel`      | `string`             | No       | `undefined` |
| `titleProps`       | `Partial<TextProps>` | No       | `undefined` |
| `bottomLabelProps` | `Partial<TextProps>` | No       | `undefined` |
| `testID`           | `string`             | No       | `undefined` |
| `twClassName`      | `string`             | No       | `undefined` |

## Usage

```tsx
<TitleSubpage title="Token Name" />

<TitleSubpage
  startAccessory={<AvatarToken size={AvatarTokenSize.Sm} />}
  title="Ethereum"
  bottomLabel="$1,234.56"
/>

<TitleSubpage
  title="Details"
  titleAccessory={<ButtonIcon iconName={IconName.Info} size={ButtonIconSize.Sm} />}
  bottomLabel="Subtitle"
/>
```
