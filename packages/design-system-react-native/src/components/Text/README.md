# Text

The `Text` component is a customizable text component for React Native applications, leveraging Tailwind CSS for styling. It allows you to display text with various typography variants, colors, font weights, and styles.

## Props

### `variant`

Optional enum to select between typography variants.

| TYPE                           | REQUIRED | DEFAULT              |
| :----------------------------- | :------- | :------------------- |
| [TextVariant](./Text.types.ts) | No       | `TextVariant.BodyMd` |

Available `TextVariant` options:

- `TextVariant.DisplayMd`
- `TextVariant.HeadingLg`
- `TextVariant.HeadingMd`
- `TextVariant.HeadingSm`
- `TextVariant.BodyLg`
- `TextVariant.BodyMd`
- `TextVariant.BodySm`
- `TextVariant.BodyXs`

### `children`

Text content to be displayed.

| TYPE                    | REQUIRED |
| :---------------------- | :------- |
| `string` or `ReactNode` | Yes      |

### `color`

Optional prop to set the text color.

| TYPE                         | REQUIRED | DEFAULT                 |
| :--------------------------- | :------- | :---------------------- |
| [TextColor](./Text.types.ts) | No       | `TextColor.TextDefault` |

Available `TextColor` options:

- `TextColor.TextDefault`
- `TextColor.TextAlternative`
- `TextColor.TextMuted`
- `TextColor.OverlayInverse`
- `TextColor.PrimaryDefault`
- `TextColor.PrimaryInverse`
- `TextColor.ErrorDefault`
- `TextColor.ErrorAlternative`
- `TextColor.ErrorInverse`
- `TextColor.SuccessDefault`
- `TextColor.SuccessInverse`
- `TextColor.WarningDefault`
- `TextColor.WarningInverse`
- `TextColor.InfoDefault`
- `TextColor.InfoInverse`
- `TextColor.Transparent`

### `fontWeight`

Optional prop to adjust the font weight.

| TYPE                          | REQUIRED | DEFAULT              |
| :---------------------------- | :------- | :------------------- |
| [FontWeight](./Text.types.ts) | No       | `FontWeight.Regular` |

Available `FontWeight` options:

- `FontWeight.Regular` (Weight `400`)
- `FontWeight.Medium` (Weight `500`)
- `FontWeight.Bold` (Weight `700`)

### `fontStyle`

Optional prop to adjust the font style.

| TYPE                         | REQUIRED | DEFAULT            |
| :--------------------------- | :------- | :----------------- |
| [FontStyle](./Text.types.ts) | No       | `FontStyle.Normal` |

Available `FontStyle` options:

- `FontStyle.Normal`
- `FontStyle.Italic`

### `twClassName`

Optional prop to add custom `twrnc` class names for additional styling.

| TYPE     | REQUIRED | DEFAULT |
| :------- | :------- | :------ |
| `string` | No       | `''`    |

## Usage

```javascript
import React from 'react';
import { Text } from '@metamask/design-system-react-native';
import {
  TextVariant,
  TextColor,
  FontWeight,
  FontStyle,
} from '@metamask/design-system-react-native/lib/components/Text/Text.types';

// Basic usage with default props
<Text>Sample Text</Text>;

// Using a specific variant
<Text variant={TextVariant.HeadingLg}>Heading Large Text</Text>;

// Applying a text color
<Text color={TextColor.PrimaryDefault}>Primary Colored Text</Text>;

// Setting font weight to bold
<Text fontWeight={FontWeight.Bold}>Bold Text</Text>;

// Setting font style to italic
<Text fontStyle={FontStyle.Italic}>Italic Text</Text>;

// Combining multiple styling props
<Text
  variant={TextVariant.BodyMd}
  color={TextColor.SuccessDefault}
  fontWeight={FontWeight.Bold}
  fontStyle={FontStyle.Italic}
>
  Bold Italic Success Text
</Text>;

// Adding custom Tailwind class names
<Text twClassName="underline">Underlined Text</Text>;

// Passing additional props to the underlying Text component
<Text numberOfLines={1} ellipsizeMode="tail">
  This is a very long text that will be truncated at the end.
</Text>;

// Using custom styles alongside twClassName
<Text style={{ marginVertical: 10 }} twClassName="tracking-wide">
  Custom Styled Text
</Text>;

// Nested Text components
<Text>
  This is a <Text fontWeight={FontWeight.Bold}>nested</Text> text example.
</Text>;
```

## Example with All Props

```javascript
<Text
  variant={TextVariant.DisplayMd}
  color={TextColor.ErrorDefault}
  fontWeight={FontWeight.Bold}
  fontStyle={FontStyle.Italic}
  twClassName="underline text-center"
  numberOfLines={2}
  ellipsizeMode="tail"
>
  This is a bold, italic, underlined, centered text with error color.
</Text>
```

## Notes

- The `Text` component is designed to be flexible and works seamlessly with `twrnc` for styling.
- When using `twClassName`, ensure the class names are compatible with your Tailwind configuration.
- The `variant` prop controls the overall typography, including font size and line height.
- Custom styles can be applied via the `style` prop, which merges with the styles generated from `twClassName` and other props.

## Importing Types

If you need to use the enums for `variant`, `color`, `fontWeight`, or `fontStyle`, you can import them as follows:

```javascript
import {
  TextVariant,
  TextColor,
  FontWeight,
  FontStyle,
} from '@metamask/design-system-react-native/';
```

## Accessibility

- The `Text` component sets `accessibilityRole` to `"text"` by default to enhance accessibility support.
- Ensure that any interactive text elements are wrapped appropriately (e.g., within a `TouchableOpacity`) and have the correct accessibility roles and labels.

## Contributing

When contributing to the `Text` component, please ensure:

- All new variants, colors, font weights, or styles are added to the respective enums in `Text.types.ts`.
- Updates to the component maintain consistency with the design system guidelines.
- All changes are accompanied by appropriate tests and documentation updates.

---

For any questions or further assistance, please refer to the [React Native Text documentation](https://reactnative.dev/docs/text) or reach out to the maintainers of the design system.
