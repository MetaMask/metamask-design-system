# TextFieldSearch

`TextFieldSearch` is a controlled search input with a leading search icon and
an optional clear button. Use it for filtering or search experiences.

```tsx
import { TextFieldSearch } from '@metamask/design-system-react-native';

<TextFieldSearch
  accessibilityLabel="Search tokens"
  placeholder="Search"
  value={search}
  onChangeText={setSearch}
  onPressClearButton={() => setSearch('')}
/>;
```

## Accessibility

When there is no visible label, set `accessibilityLabel` to give the inner
`TextInput` an accessible name without rendering visible text.

## Props

- `accessibilityLabel`: Accessible name for the inner `TextInput`.
- `clearButtonProps`: Additional props for the clear button.
- `onPressClearButton`: Called when the clear button is pressed.

All other `TextField` props are supported.

# TextFieldSearch

TextFieldSearch is an input component that allows users to enter text to search. It extends the [TextField](../TextField/README.md) component with a search icon and optional clear button.

```tsx
import { TextFieldSearch } from '@metamask/design-system-react-native';

const [searchText, setSearchText] = useState('');

<TextFieldSearch
  value={searchText}
  onChangeText={setSearchText}
  onPressClearButton={() => setSearchText('')}
  placeholder="Search..."
/>;
```

## Props

This component extends [TextField](../TextField/README.md) props.

### Clear Button Behavior

The clear button is automatically shown when the input has a value. No additional prop is needed to control its visibility.

### `onPressClearButton`

Function to trigger when pressing the clear button.

| TYPE     | REQUIRED |
| -------- | -------- |
| Function | Yes      |

### `clearButtonProps`

Optional prop to pass any additional props to the clear button (e.g. [ButtonIconProps](../ButtonIcon/README.md)).

| TYPE                     | REQUIRED |
| ------------------------ | -------- |
| Partial<ButtonIconProps> | No       |

## Usage

```tsx
import { TextFieldSearch } from '@metamask/design-system-react-native';

const [searchText, setSearchText] = useState('');

<TextFieldSearch
  value={searchText}
  onChangeText={setSearchText}
  onPressClearButton={() => setSearchText('')}
  placeholder="Search..."
/>;
```

## Content guidelines

- Sentence case
- Imperative verb starters: "Search"
- Ellipsis only for genuinely open-ended input; prefer specificity

```
✅ "Search tokens, sites, and URLs"
❌ "Search Tokens, Sites, And URLs..."
```
