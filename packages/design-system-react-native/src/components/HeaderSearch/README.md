# HeaderSearch

HeaderSearch is a header row that combines `TextFieldSearch` with either a back icon (`Screen` variant) or a tertiary **Cancel** action (`Inline` variant). Props are a discriminated union on `variant`.

```tsx
import {
  HeaderSearch,
  HeaderSearchVariant,
} from '@metamask/design-system-react-native';

<HeaderSearch
  variant={HeaderSearchVariant.Screen}
  onPressBackButton={handleBack}
  textFieldSearchProps={{
    value: searchText,
    onChangeText: setSearchText,
    onPressClearButton: () => setSearchText(''),
    placeholder: 'Search...',
  }}
/>;
```

## When to use

- Use **`Screen`** when the search field sits on its own route or full-width header and users expect a **back** control (for example, after navigating into global search).
- Use **`Inline`** when search is toggled **inside** an existing screen and users dismiss it with **Cancel** instead of the stack back affordance.
- Prefer this component over composing `Box`, `ButtonIcon`, and `TextFieldSearch` by hand when you want consistent spacing, height, and token styling across products.

## Props

The component extends root layout props from `Box` (except `children`). Required handlers depend on `variant`.

### `variant`

Selects layout and primary chrome: back button versus cancel button.

Available values:

- `HeaderSearchVariant.Screen` — `ButtonIcon` with `ArrowLeft` on the start edge.
- `HeaderSearchVariant.Inline` — `Button` (tertiary) labeled **Cancel** on the end edge.

| TYPE                  | REQUIRED | DEFAULT     |
| --------------------- | -------- | ----------- |
| `HeaderSearchVariant` | Yes      | `undefined` |

```tsx
import {
  HeaderSearch,
  HeaderSearchVariant,
} from '@metamask/design-system-react-native';

<HeaderSearch
  variant={HeaderSearchVariant.Screen}
  onPressBackButton={() => {}}
  textFieldSearchProps={{
    value: '',
    onChangeText: () => {},
    onPressClearButton: () => {},
    placeholder: 'Search',
  }}
/>;

<HeaderSearch
  variant={HeaderSearchVariant.Inline}
  onPressCancelButton={() => {}}
  textFieldSearchProps={{
    value: '',
    onChangeText: () => {},
    onPressClearButton: () => {},
    placeholder: 'Search',
  }}
/>;
```

### `textFieldSearchProps`

Forwarded to `TextFieldSearch` (same contract as that component, except `style` is omitted so layout stays consistent).

| TYPE                                  | REQUIRED | DEFAULT     |
| ------------------------------------- | -------- | ----------- |
| `Omit<TextFieldSearchProps, 'style'>` | Yes      | `undefined` |

```tsx
<HeaderSearch
  variant={HeaderSearchVariant.Screen}
  onPressBackButton={() => navigation.goBack()}
  textFieldSearchProps={{
    value: query,
    onChangeText: setQuery,
    onPressClearButton: () => setQuery(''),
    placeholder: 'Search tokens, sites, URLs',
  }}
/>
```

### `onPressBackButton`

Called when the screen variant’s back `ButtonIcon` is pressed.

| TYPE         | REQUIRED                        | DEFAULT     |
| ------------ | ------------------------------- | ----------- |
| `() => void` | Yes, when `variant` is `Screen` | `undefined` |

```tsx
<HeaderSearch
  variant={HeaderSearchVariant.Screen}
  onPressBackButton={() => navigation.goBack()}
  textFieldSearchProps={{
    value: query,
    onChangeText: setQuery,
    onPressClearButton: () => setQuery(''),
    placeholder: 'Search',
  }}
/>
```

### `onPressCancelButton`

Called when the inline variant’s **Cancel** `Button` is pressed.

| TYPE         | REQUIRED                        | DEFAULT     |
| ------------ | ------------------------------- | ----------- |
| `() => void` | Yes, when `variant` is `Inline` | `undefined` |

```tsx
<HeaderSearch
  variant={HeaderSearchVariant.Inline}
  onPressCancelButton={() => setSearchOpen(false)}
  textFieldSearchProps={{
    value: query,
    onChangeText: setQuery,
    onPressClearButton: () => setQuery(''),
    placeholder: 'Search',
  }}
/>
```

### `backButtonProps`

Optional props passed to the screen variant’s `ButtonIcon`. `iconName` and `onPress` are set by the component and cannot be overridden via this object.

| TYPE                                             | REQUIRED | DEFAULT     |
| ------------------------------------------------ | -------- | ----------- |
| `Omit<ButtonIconProps, 'iconName' \| 'onPress'>` | No       | `undefined` |

```tsx
<HeaderSearch
  variant={HeaderSearchVariant.Screen}
  onPressBackButton={() => navigation.goBack()}
  backButtonProps={{ accessibilityLabel: 'Go back', testID: 'search-back' }}
  textFieldSearchProps={{
    value: query,
    onChangeText: setQuery,
    onPressClearButton: () => setQuery(''),
    placeholder: 'Search',
  }}
/>
```

### `cancelButtonProps`

Optional props passed to the inline variant’s `Button`. `variant`, `onPress`, and `children` are controlled by the component.

| TYPE                                                      | REQUIRED | DEFAULT     |
| --------------------------------------------------------- | -------- | ----------- |
| `Omit<ButtonProps, 'variant' \| 'onPress' \| 'children'>` | No       | `undefined` |

```tsx
<HeaderSearch
  variant={HeaderSearchVariant.Inline}
  onPressCancelButton={() => setSearchOpen(false)}
  cancelButtonProps={{
    testID: 'search-cancel',
    textProps: { twClassName: 'font-medium' },
  }}
  textFieldSearchProps={{
    value: query,
    onChangeText: setQuery,
    onPressClearButton: () => setQuery(''),
    placeholder: 'Search',
  }}
/>
```

### `twClassName`

Merged with the component’s built-in root row classes (`height`, `flex-row`, spacing). Document overrides here rather than Storybook controls.

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

```tsx
<HeaderSearch
  variant={HeaderSearchVariant.Screen}
  onPressBackButton={() => navigation.goBack()}
  twClassName="border-b border-muted"
  textFieldSearchProps={{
    value: query,
    onChangeText: setQuery,
    onPressClearButton: () => setQuery(''),
    placeholder: 'Search',
  }}
/>
```

### `testID`

Forwarded to the root `Box` for tests and automation.

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

```tsx
<HeaderSearch
  variant={HeaderSearchVariant.Screen}
  onPressBackButton={() => {}}
  testID="asset-search-header"
  textFieldSearchProps={{
    value: '',
    onChangeText: () => {},
    onPressClearButton: () => {},
    placeholder: 'Search',
  }}
/>
```

### `style`

Use the `style` prop to customize the root container with React Native styles. For token-aligned layout, prefer `twClassName`. Use `style` with `tw.style()` from the preset when you need conditionals or dynamic values.

| TYPE                   | REQUIRED | DEFAULT     |
| ---------------------- | -------- | ----------- |
| `StyleProp<ViewStyle>` | No       | `undefined` |

```tsx
import { useTailwind } from '@metamask/design-system-twrnc-preset';

export const ConditionalHeaderSearch = ({
  isScrolled,
}: {
  isScrolled: boolean;
}) => {
  const tw = useTailwind();

  return (
    <HeaderSearch
      variant={HeaderSearchVariant.Screen}
      onPressBackButton={() => {}}
      style={tw.style('border-b border-muted', isScrolled && 'shadow-sm')}
      textFieldSearchProps={{
        value: '',
        onChangeText: () => {},
        onPressClearButton: () => {},
        placeholder: 'Search',
      }}
    />
  );
};
```

Other `Box` props are also forwarded to the root (for example `accessibilityLabel`, `hitSlop`) where applicable.

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
