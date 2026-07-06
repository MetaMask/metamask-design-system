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
