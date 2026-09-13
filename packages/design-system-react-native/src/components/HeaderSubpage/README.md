# HeaderSubpage

HeaderSubpage is a subpage navigation row with optional back and close actions. It composes [ListItem](../ListItem/README.md) for left-aligned identity content (avatar, title, description) and applies header shell styling (`h-14`, optional safe-area inset). Use [HeaderStandard](../HeaderStandard/README.md) for centered-title headers. Use [TitleSubpage](../TitleSubpage/README.md) for the rich title block below this row (amount, bottom label, and similar).

```tsx
import {
  AvatarToken,
  AvatarTokenSize,
  HeaderSubpage,
  Icon,
  IconColor,
  IconName,
} from '@metamask/design-system-react-native';

<HeaderSubpage
  avatar={<AvatarToken name="Ethereum" size={AvatarTokenSize.Lg} />}
  title="Ethereum"
  description="ETH"
  titleEndAccessory={
    <Icon name={IconName.VerifiedFilled} color={IconColor.PrimaryDefault} />
  }
  onBack={() => navigation.goBack()}
/>;
```

## Props

Inherits [ListItem](../ListItem/README.md) / [Content](../Content/README.md) props (`value`, `variant`, `testID`, and other root `View` props). `isInteractive` and `children` are not supported. Secondary text uses **`description`** (ListItem), not `subtitle` ([HeaderStandard](../HeaderStandard/README.md) / [TitleSubpage](../TitleSubpage/README.md)).

### `title`

Primary identity label in the header row. Pass a string for default [Content](../Content/README.md) body styling, or a node for custom content. Use `titleProps` to pass props to the `Text` component when `title` is a string. Use `titleEndAccessory` to render a badge or other accessory beside the title.

| PROP                | TYPE                 | REQUIRED | DEFAULT     |
| ------------------- | -------------------- | -------- | ----------- |
| `title`             | `ReactNode`          | No       | `undefined` |
| `titleProps`        | `Partial<TextProps>` | No       | `undefined` |
| `titleEndAccessory` | `ReactNode`          | No       | `undefined` |

```tsx
<HeaderSubpage title="Ethereum" onBack={goBack} />

<HeaderSubpage
  title={<Text variant={TextVariant.HeadingSm}>Custom title</Text>}
  onBack={goBack}
/>
```

### `description`

Secondary line below the title. Pass a string for default [Content](../Content/README.md) body styling, or a node for custom content. Use `descriptionProps` to pass props to the `Text` component when `description` is a string.

| PROP               | TYPE                 | REQUIRED | DEFAULT     |
| ------------------ | -------------------- | -------- | ----------- |
| `description`      | `ReactNode`          | No       | `undefined` |
| `descriptionProps` | `Partial<TextProps>` | No       | `undefined` |

```tsx
<HeaderSubpage title="Ethereum" description="ETH" onBack={goBack} />
```

### `avatar`

Leading visual in the identity row (for example a token avatar). Use `AvatarToken` at `AvatarTokenSize.Lg` (40×40) for the default layout.

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

```tsx
<HeaderSubpage
  avatar={<AvatarToken name="Ethereum" size={AvatarTokenSize.Lg} />}
  title="Ethereum"
  description="ETH"
  onBack={goBack}
/>
```

### `onBack`

If set, renders a start [ButtonIcon](../ButtonIcon/README.md) with a back arrow. Use `backButtonProps` for the back `ButtonIcon` (excluding `iconName`, which is fixed). Supplying `backButtonProps` also shows the back button; `backButtonProps.onPress` takes precedence over `onBack` when both are provided.

| PROP              | TYPE                                | REQUIRED | DEFAULT     |
| ----------------- | ----------------------------------- | -------- | ----------- |
| `onBack`          | `() => void`                        | No       | `undefined` |
| `backButtonProps` | `Omit<ButtonIconProps, 'iconName'>` | No       | `undefined` |

```tsx
<HeaderSubpage title="Ethereum" onBack={() => navigation.goBack()} />

<HeaderSubpage
  title="Ethereum"
  backButtonProps={{
    onPress: goBack,
    testID: 'header-subpage-back',
    accessibilityLabel: 'Go back',
  }}
/>
```

### `onClose`

If set, appends a close `ButtonIcon` to the end actions. Use `closeButtonProps` for the close `ButtonIcon` (excluding `iconName`). `closeButtonProps.onPress` takes precedence over `onClose` when both are set.

| PROP               | TYPE                                | REQUIRED | DEFAULT     |
| ------------------ | ----------------------------------- | -------- | ----------- |
| `onClose`          | `() => void`                        | No       | `undefined` |
| `closeButtonProps` | `Omit<ButtonIconProps, 'iconName'>` | No       | `undefined` |

```tsx
<HeaderSubpage title="Ethereum" onClose={() => navigation.pop()} />

<HeaderSubpage
  title="Ethereum"
  closeButtonProps={{ onPress: close, testID: 'header-subpage-close' }}
/>
```

### `startAccessory`

Custom start content. Use `startButtonIconProps` to render a start [ButtonIcon](../ButtonIcon/README.md) when `startAccessory` is not provided. `startAccessory` takes priority over `startButtonIconProps` and back shortcuts; `startButtonIconProps` takes priority over `onBack` / `backButtonProps`.

| PROP                   | TYPE              | REQUIRED | DEFAULT     |
| ---------------------- | ----------------- | -------- | ----------- |
| `startAccessory`       | `ReactNode`       | No       | `undefined` |
| `startButtonIconProps` | `ButtonIconProps` | No       | `undefined` |

```tsx
<HeaderSubpage
  title="Ethereum"
  startAccessory={<CustomBackControl onPress={goBack} />}
/>

<HeaderSubpage
  title="Ethereum"
  startButtonIconProps={{
    iconName: IconName.Menu,
    onPress: openMenu,
    testID: 'header-subpage-menu',
  }}
/>
```

### `endAccessory`

Custom end content. Use `endButtonIconProps` to append additional [ButtonIcon](../ButtonIcon/README.md)s after the close shortcut when `endAccessory` is not provided. Items are rendered in reverse order (first item appears rightmost). `endAccessory` takes priority over `endButtonIconProps` and close shortcuts.

| PROP                 | TYPE                | REQUIRED | DEFAULT     |
| -------------------- | ------------------- | -------- | ----------- |
| `endAccessory`       | `ReactNode`         | No       | `undefined` |
| `endButtonIconProps` | `ButtonIconProps[]` | No       | `undefined` |

```tsx
<HeaderSubpage
  title="Ethereum"
  endAccessory={<CustomCloseControl onPress={close} />}
/>

<HeaderSubpage
  title="Ethereum"
  onBack={goBack}
  onClose={close}
  endButtonIconProps={[{ iconName: IconName.Search, onPress: openSearch }]}
/>
```

### `includesTopInset`

When `true`, applies the device top safe-area inset as `marginTop` on the root ListItem so the header clears the notch.

| TYPE      | REQUIRED | DEFAULT |
| --------- | -------- | ------- |
| `boolean` | No       | `false` |

```tsx
<HeaderSubpage title="Ethereum" onBack={goBack} includesTopInset />
```

### `accessoryGap`

Gap between row shell accessories and inner content. Uses design-system spacing tokens (`BoxSpacing`); `2` is 8px.

| TYPE         | REQUIRED | DEFAULT |
| ------------ | -------- | ------- |
| `BoxSpacing` | No       | `2`     |

```tsx
<HeaderSubpage title="Ethereum" accessoryGap={2} onBack={goBack} />
```

### `twClassName`

Use the `twClassName` prop to add Tailwind CSS classes to the component. These classes will be merged with the component's default classes using `twMerge`, allowing you to:

- Add new styles that don't exist in the default component
- Override the component's default styles when needed

Default shell classes include `h-14 px-2 py-0 justify-center` (overriding ListItem padding for header density).

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

```tsx
import { HeaderSubpage } from '@metamask/design-system-react-native';

// Add additional styles
<HeaderSubpage title="Ethereum" twClassName="border-b border-muted" onBack={goBack} />

// Override default styles
<HeaderSubpage title="Ethereum" twClassName="px-4" onBack={goBack} />
```

### `style`

Use the `style` prop to customize the component's appearance with React Native styles. For consistent styling, prefer using `twClassName` with Tailwind classes when possible. Use `style` with `tw.style()` for conditionals or dynamic values.

| TYPE                   | REQUIRED | DEFAULT     |
| ---------------------- | -------- | ----------- |
| `StyleProp<ViewStyle>` | No       | `undefined` |

```tsx
import { useTailwind } from '@metamask/design-system-twrnc-preset';

export const HeaderSubpageExample = () => {
  const tw = useTailwind();

  return (
    <HeaderSubpage
      title="Ethereum"
      style={tw.style('bg-background-default')}
      onBack={goBack}
    />
  );
};
```

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)

## Content guidelines

- Title children: sentence case for multi-word screen titles, no period
