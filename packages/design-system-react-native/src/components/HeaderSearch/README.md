# HeaderSearch

HeaderSearch is a header component that combines a search field with either a back button (screen variant) or cancel button (inline variant).

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

## Props

Discriminated union by `variant`:

### Screen variant

| PROP                   | TYPE                                             | REQUIRED |
| ---------------------- | ------------------------------------------------ | -------- |
| `variant`              | `HeaderSearchVariant.Screen`                     | Yes      |
| `textFieldSearchProps` | `Omit<TextFieldSearchProps, 'style'>`            | Yes      |
| `onPressBackButton`    | `() => void`                                     | Yes      |
| `backButtonProps`      | `Omit<ButtonIconProps, 'iconName' \| 'onPress'>` | No       |

### Inline variant

| PROP                   | TYPE                                  | REQUIRED |
| ---------------------- | ------------------------------------- | -------- |
| `variant`              | `HeaderSearchVariant.Inline`          | Yes      |
| `textFieldSearchProps` | `Omit<TextFieldSearchProps, 'style'>` | Yes      |
| `onPressCancelButton`  | `() => void`                          | Yes      |
| `cancelButtonProps`    | `Omit<ButtonProps, ...>`              | No       |

## Usage

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

<HeaderSearch
  variant={HeaderSearchVariant.Inline}
  onPressCancelButton={handleCancel}
  textFieldSearchProps={{
    value: query,
    onChangeText: setQuery,
    onPressClearButton: () => setQuery(''),
    placeholder: 'Search...',
  }}
/>
```
