# ButtonHero

A branded, high-impact button reserved for the most important actions in Trade. Use sparingly for key user actions that require emphasis and visual prominence.

Use for:

- Swapping tokens
- Claiming winnings (e.g., Polymarket bets)
- Claiming rewards
- Other critical, high-value actions

## Usage

```tsx
import { ButtonHero } from '@metamask/design-system-react-native';

<ButtonHero>Button Hero</ButtonHero>;
```

## Props

### `children`

**Required prop** for the content to be rendered within the ButtonHero.

| TYPE              | REQUIRED | DEFAULT     |
| ----------------- | -------- | ----------- |
| `React.ReactNode` | Yes      | `undefined` |

#### Example

```tsx
<ButtonHero>Primary Action</ButtonHero>
```

### `size`

ButtonHero supports three sizes.

Available sizes:

- `ButtonHeroSize.Sm` (32px)
- `ButtonHeroSize.Md` (40px)
- `ButtonHeroSize.Lg` (48px)

| TYPE             | REQUIRED | DEFAULT             |
| ---------------- | -------- | ------------------- |
| `ButtonHeroSize` | No       | `ButtonHeroSize.Lg` |

#### Example

```tsx
import { ButtonHero, ButtonHeroSize } from '@metamask/design-system-react-native';

<ButtonHero size={ButtonHeroSize.Sm}>Small</ButtonHero>
<ButtonHero size={ButtonHeroSize.Md}>Medium</ButtonHero>
<ButtonHero size={ButtonHeroSize.Lg}>Large</ButtonHero>
```

### `isFullWidth`

ButtonHero can be set to take up the full width of its container.

| TYPE      | REQUIRED | DEFAULT |
| --------- | -------- | ------- |
| `boolean` | No       | `false` |

#### Example

```tsx
<ButtonHero isFullWidth>Full Width Button</ButtonHero>
```

### `startIconName`

ButtonHero can display an icon at the start of the button.

| TYPE       | REQUIRED | DEFAULT     |
| ---------- | -------- | ----------- |
| `IconName` | No       | `undefined` |

#### Example

```tsx
import { ButtonHero, IconName } from '@metamask/design-system-react-native';

<ButtonHero startIconName={IconName.AddSquare}>Start Icon</ButtonHero>;
```

### `endIconName`

ButtonHero can display an icon at the end of the button.

| TYPE       | REQUIRED | DEFAULT     |
| ---------- | -------- | ----------- |
| `IconName` | No       | `undefined` |

#### Example

```tsx
import { ButtonHero, IconName } from '@metamask/design-system-react-native';

<ButtonHero endIconName={IconName.ArrowRight}>End Icon</ButtonHero>;
```

### `isDisabled`

Whether the button is disabled.

| TYPE      | REQUIRED | DEFAULT |
| --------- | -------- | ------- |
| `boolean` | No       | `false` |

#### Example

```tsx
<ButtonHero isDisabled>Disabled Button</ButtonHero>
```

### `isLoading`

Whether the button is in a loading state.

| TYPE      | REQUIRED | DEFAULT |
| --------- | -------- | ------- |
| `boolean` | No       | `false` |

#### Example

```tsx
<ButtonHero isLoading loadingText="Loading...">
  Loading Button
</ButtonHero>
```

### `loadingText`

Optional text to display when button is in loading state.

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

#### Example

```tsx
<ButtonHero isLoading loadingText="Submitting...">
  Submit Form
</ButtonHero>
```

### `onPress`

Callback function invoked when the button is pressed.

| TYPE         | REQUIRED | DEFAULT     |
| ------------ | -------- | ----------- |
| `() => void` | No       | `undefined` |

#### Example

```tsx
<ButtonHero onPress={() => console.log('Button pressed')}>Press Me</ButtonHero>
```

### `twClassName`

Use the `twClassName` prop to add custom Tailwind classes to the component.

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

#### Example

```tsx
<ButtonHero twClassName="mb-4">Custom Styled Button</ButtonHero>
```

## Accessibility

ButtonHero includes built-in accessibility features:

- **Role**: Automatically set to `button`
- **Accessibility Label**: Auto-generated from children or `loadingText` when loading
- **Accessibility State**: Reflects disabled and loading states
- **Accessibility Hint**: Auto-generated for loading state

### Custom Accessibility Props

You can override the default accessibility behavior:

```tsx
<ButtonHero
  accessibilityLabel="Primary action"
  accessibilityHint="Performs the main action"
>
  Hero Button
</ButtonHero>
```

## Theme

ButtonHero is **locked to light theme** colors regardless of the app's theme setting. It uses:

- Background: `bg-primary-default` (light theme)
- Text: `text-primary-inverse` (light theme)
- Pressed: `bg-primary-default-pressed` (light theme)

This ensures consistent branding for high-impact actions across different theme modes.

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
