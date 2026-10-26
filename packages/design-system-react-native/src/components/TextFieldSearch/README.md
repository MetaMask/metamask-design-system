# TextFieldSearch

TextFieldSearch is an input component that allows users to enter text to search. It extends the [TextField](../TextField/README.md) component with a search icon and optional clear button.

```tsx
import { TextFieldSearch } from '@metamask/design-system-react-native';

const [searchText, setSearchText] = useState('');

<TextFieldSearch
  inputAccessibilityLabel="Search tokens"
  value={searchText}
  onChangeText={setSearchText}
  onPressClearButton={() => setSearchText('')}
  placeholder="Search"
/>;
```

These fields usually have no visible label, so set `inputAccessibilityLabel` to name the inner `TextInput`. It renders no text.

## Props

This component extends [TextField](../TextField/README.md) props.

### `inputAccessibilityLabel`

Accessible name for the inner `TextInput`. Set it when the field has no visible label. It takes precedence over `inputProps.accessibilityLabel`.

| TYPE   | REQUIRED |
| ------ | -------- |
| string | No       |

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
  inputAccessibilityLabel="Search tokens"
  value={searchText}
  onChangeText={setSearchText}
  onPressClearButton={() => setSearchText('')}
  placeholder="Search"
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
