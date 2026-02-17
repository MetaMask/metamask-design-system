# Input

Input is a light-weight borderless input component used inside of TextField.

```tsx
import { Input, TextVariant } from '@metamask/design-system-react-native';

<Input placeholder="Enter text" textVariant={TextVariant.BodyMd} />;
```

## Props

This component extends React Native's [TextInput](https://reactnative.dev/docs/textinput) component.

### `textVariant`

Optional enum to select between Typography variants.

| TYPE          | REQUIRED | DEFAULT              |
| ------------- | -------- | -------------------- |
| `TextVariant` | No       | `TextVariant.BodyMd` |

### `isDisabled`

Optional boolean to disable Input.

| TYPE      | REQUIRED | DEFAULT |
| --------- | -------- | ------- |
| `boolean` | No       | `false` |

### `isReadonly`

Optional boolean to show readonly input.

| TYPE      | REQUIRED | DEFAULT |
| --------- | -------- | ------- |
| `boolean` | No       | `false` |

### `isStateStylesDisabled`

Optional boolean to disable state styles.

| TYPE      | REQUIRED | DEFAULT |
| --------- | -------- | ------- |
| `boolean` | No       | `false` |

### `twClassName`

Use the `twClassName` prop to add Tailwind CSS classes to the component. These classes will be merged with the component's default classes.

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

```tsx
import { Input } from '@metamask/design-system-react-native';

<Input twClassName="mt-4" placeholder="With margin" />;
```

## Usage

```tsx
import { Input, TextVariant } from '@metamask/design-system-react-native';

<Input
  textVariant={TextVariant.BodyMd}
  isReadonly
  isDisabled
  isStateStylesDisabled
  placeholder="Sample placeholder"
  value="Sample value"
/>;
```
