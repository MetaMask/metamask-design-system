# Icon

The `Icon` component is a customizable SVG icon component for React Native applications, integrating with Tailwind CSS classes via `twrnc`. It allows you to display various icons by name, with optional size and color customizations.

## Props

### `name`

**Required**. Specifies which icon to render from the icon set.

| TYPE                             | REQUIRED |
| :------------------------------- | :------- |
| [IconName](./Icon.types.ts#L---) | Yes      |

You can find the full list of available icons in `Icon.types.ts`, under the `IconName` enum.

### `size`

Optional prop that controls the size of the icon in pixels.  
All sizes map to numeric pixel values.

| TYPE                             | REQUIRED | DEFAULT       |
| :------------------------------- | :------- | :------------ |
| [IconSize](./Icon.types.ts#L---) | No       | `IconSize.Md` |

Available `IconSize` options:

- `IconSize.Xs` (12px)
- `IconSize.Sm` (16px)
- `IconSize.Md` (20px)
- `IconSize.Lg` (24px)
- `IconSize.Xl` (32px)

### `color`

Optional prop to set the icon color using predefined theme classes.

| TYPE                              | REQUIRED | DEFAULT                 |
| :-------------------------------- | :------- | :---------------------- |
| [IconColor](./Icon.types.ts#L---) | No       | `IconColor.IconDefault` |

Available `IconColor` options include:

- `IconDefault` (text-icon-default)
- `IconAlternative` (text-icon-alternative)
- `IconMuted` (text-icon-muted)
- `OverlayInverse` (text-overlay-inverse)
- `PrimaryDefault` (text-primary-default)
- `PrimaryInverse` (text-primary-inverse)
- `ErrorDefault` (text-error-default)
- `ErrorInverse` (text-error-inverse)
- `SuccessDefault` (text-success-default)
- `SuccessInverse` (text-success-inverse)
- `WarningDefault` (text-warning-default)
- `WarningInverse` (text-warning-inverse)
- `InfoDefault` (text-info-default)
- `InfoInverse` (text-info-inverse)

### `twClassName`

Optional prop to add custom `twrnc` class names for additional styling overrides.

| TYPE     | REQUIRED | DEFAULT |
| :------- | :------- | :------ |
| `string` | No       | `''`    |

### Additional ViewProps

All additional `ViewProps` are spread onto the underlying SVG component for further customization and accessibility.

## Usage

```javascript
import React from 'react';
import Icon from '@metamask/design-system-react-native/lib/components/Icon';
import {
  IconName,
  IconSize,
  IconColor,
} from '@metamask/design-system-react-native/lib/components/Icon/Icon.types';

// Basic usage
<Icon name={IconName.Home} />;

// Specify size
<Icon name={IconName.Home} size={IconSize.Lg} />;

// Change color
<Icon name={IconName.Home} color={IconColor.PrimaryDefault} />;

// Add custom Tailwind class names
<Icon name={IconName.Home} twClassName="text-yellow-500" />;

// Combine multiple props
<Icon
  name={IconName.Warning}
  size={IconSize.Xl}
  color={IconColor.WarningDefault}
  twClassName="mr-2"
/>;
```

## Example with All Props

```javascript
<Icon
  name={IconName.Info}
  size={IconSize.Sm}
  color={IconColor.InfoInverse}
  twClassName="mr-1"
  accessibilityLabel="Info icon"
/>
```

## Notes

- The `Icon` component is designed to be flexible and works seamlessly with `twrnc` for styling.
- When using `twClassName`, ensure the class names are compatible with your Tailwind configuration.
- Custom styles can be applied via the `style` prop, which merges with the styles generated from `twClassName` and other props.

## Importing Types

If you need to use the enums for `name`, `color`, or `size`, you can import them as follows:

```javascript
import {
  IconSize,
  IconName,
  IconColor,
} from '@metamask/design-system-react-native';
```

## Accessibility

- Consider using `accessibilityLabel` and other accessibility props to provide a text equivalent for users of assistive technologies.
- Ensure icons that convey information have accessible labels.

## Contributing

When contributing to the `Icon` component, please ensure:

- All new icons are flatten, exported, and optimized properly.
- Make sure to remove colors from new icons.
- Add new icons to the assets folder.
- Run `yarn workspace @metamask/design-system-react-native ts-node src/components/Icons/Icon/scripts/generate-assets.scripts.ts` from root.

---

For questions or further assistance, refer to the React Native SVG documentation or contact the maintainers of the design system.
