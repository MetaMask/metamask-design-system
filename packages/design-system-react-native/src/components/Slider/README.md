# Slider

Slider is a controlled numeric range input with a draggable thumb. Use it when users need to select a value along a continuous or stepped range. Optionally show percent labels and track dots at common step positions.

_Developer Note: This is a fully controlled component — manage `value` with `onValueChange` in the parent. Wrap your app in `GestureHandlerRootView` from `react-native-gesture-handler` when using Slider outside Storybook._

```tsx
import { Slider } from '@metamask/design-system-react-native';
import { useState } from 'react';

function MyComponent() {
  const [value, setValue] = useState(50);

  return <Slider value={value} onValueChange={setValue} />;
}
```

## Props

### `value`

Required controlled value for the slider. This component is fully controlled, so you must manage this state in your parent component.

| TYPE     | REQUIRED | DEFAULT |
| -------- | -------- | ------- |
| `number` | Yes      | N/A     |

```tsx
import { Slider } from '@metamask/design-system-react-native';
import { useState } from 'react';

const [value, setValue] = useState(25);

<Slider value={value} onValueChange={setValue} />;
```

### `onValueChange`

Required callback when the slider value changes during drag, track tap, or range-label press.

| TYPE                      | REQUIRED | DEFAULT |
| ------------------------- | -------- | ------- |
| `(value: number) => void` | Yes      | N/A     |

```tsx
import { Slider } from '@metamask/design-system-react-native';
import { useState } from 'react';

const [value, setValue] = useState(50);

<Slider value={value} onValueChange={setValue} />;
```

### `onDragEnd`

Optional callback when the user lifts their finger after a drag, taps the track, or presses a range label.

| TYPE                      | REQUIRED | DEFAULT     |
| ------------------------- | -------- | ----------- |
| `(value: number) => void` | No       | `undefined` |

```tsx
import { Slider } from '@metamask/design-system-react-native';
import { useState } from 'react';

const [value, setValue] = useState(50);

<Slider
  value={value}
  onValueChange={setValue}
  onDragEnd={(finalValue) => console.log('Committed:', finalValue)}
/>;
```

### `minimumValue`

Optional minimum value of the slider range.

| TYPE     | REQUIRED | DEFAULT |
| -------- | -------- | ------- |
| `number` | No       | `0`     |

```tsx
import { Slider } from '@metamask/design-system-react-native';
import { useState } from 'react';

const [value, setValue] = useState(50);

<Slider
  value={value}
  onValueChange={setValue}
  minimumValue={10}
  maximumValue={110}
/>;
```

### `maximumValue`

Optional maximum value of the slider range.

| TYPE     | REQUIRED | DEFAULT |
| -------- | -------- | ------- |
| `number` | No       | `100`   |

```tsx
import { Slider } from '@metamask/design-system-react-native';
import { useState } from 'react';

const [value, setValue] = useState(50);

<Slider value={value} onValueChange={setValue} maximumValue={200} />;
```

### `step`

Optional step increment for value changes. Used by the default linear mapper; custom `mapTrackPercentToValue` hooks handle stepping for non-linear scales.

| TYPE     | REQUIRED | DEFAULT |
| -------- | -------- | ------- |
| `number` | No       | `1`     |

```tsx
import { Slider } from '@metamask/design-system-react-native';
import { useState } from 'react';

const [value, setValue] = useState(50);

<Slider value={value} onValueChange={setValue} step={5} />;
```

### `isDisabled`

Optional prop that when true, disables slider interaction.

| TYPE      | REQUIRED | DEFAULT |
| --------- | -------- | ------- |
| `boolean` | No       | `false` |

```tsx
import { Slider } from '@metamask/design-system-react-native';
import { useState } from 'react';

const [value, setValue] = useState(50);

<Slider value={value} onValueChange={setValue} isDisabled />;
```

### `showRangeLabels`

Optional prop that when true, renders tappable labels below the track at each `rangeLabelSteps` position.

| TYPE      | REQUIRED | DEFAULT |
| --------- | -------- | ------- |
| `boolean` | No       | `false` |

```tsx
import { Slider } from '@metamask/design-system-react-native';
import { useState } from 'react';

const [value, setValue] = useState(50);

<Slider value={value} onValueChange={setValue} showRangeLabels />;
```

### `showRangeDots`

Optional prop that when true, renders dots on the track at each `rangeLabelSteps` position.

| TYPE      | REQUIRED | DEFAULT |
| --------- | -------- | ------- |
| `boolean` | No       | `false` |

```tsx
import { Slider } from '@metamask/design-system-react-native';
import { useState } from 'react';

const [value, setValue] = useState(50);

<Slider value={value} onValueChange={setValue} showRangeDots />;
```

### `rangeLabelSteps`

Optional track-percent positions (0–100) for markers and labels — not domain values.

| TYPE                | REQUIRED | DEFAULT                |
| ------------------- | -------- | ---------------------- |
| `readonly number[]` | No       | `[0, 25, 50, 75, 100]` |

```tsx
import { Slider } from '@metamask/design-system-react-native';
import { useState } from 'react';

const [value, setValue] = useState(50);

<Slider
  value={value}
  onValueChange={setValue}
  showRangeLabels
  showRangeDots
  rangeLabelSteps={[25, 50, 75]}
/>;
```

### `onGrip`

Optional callback fired when the user begins or ends dragging the thumb. Use for haptic feedback. Not fired on track tap or range-label press.

| TYPE         | REQUIRED | DEFAULT     |
| ------------ | -------- | ----------- |
| `() => void` | No       | `undefined` |

```tsx
import { Slider } from '@metamask/design-system-react-native';
import { useState } from 'react';

const [value, setValue] = useState(50);

<Slider
  value={value}
  onValueChange={setValue}
  onGrip={() => triggerHaptic()}
/>;
```

### `onTick`

Optional callback fired when the track percent crosses a `tickThresholds` entry while dragging or when a range label is pressed.

| TYPE         | REQUIRED | DEFAULT     |
| ------------ | -------- | ----------- |
| `() => void` | No       | `undefined` |

```tsx
import { Slider } from '@metamask/design-system-react-native';
import { useState } from 'react';

const [value, setValue] = useState(50);

<Slider
  value={value}
  onValueChange={setValue}
  onTick={() => triggerHaptic()}
  tickThresholds={[25, 50, 75]}
/>;
```

### `tickThresholds`

Optional track-percent thresholds (0–100) for `onTick` — not domain values.

| TYPE                | REQUIRED | DEFAULT        |
| ------------------- | -------- | -------------- |
| `readonly number[]` | No       | `[25, 50, 75]` |

```tsx
import { Slider } from '@metamask/design-system-react-native';
import { useState } from 'react';

const [value, setValue] = useState(50);

<Slider
  value={value}
  onValueChange={setValue}
  onTick={() => triggerHaptic()}
  tickThresholds={[33, 66]}
/>;
```

### `mapValueToTrackPercent`

Optional mapper from domain value to a 0–100 track position. Default: linear percent clamped to 0–100. When provided, the function must include a `'worklet';` directive because it runs inside Reanimated gesture handlers.

| TYPE                        | REQUIRED | DEFAULT     |
| --------------------------- | -------- | ----------- |
| `(value: number) => number` | No       | `undefined` |

```tsx
import { Slider } from '@metamask/design-system-react-native';
import { useState } from 'react';

const [value, setValue] = useState(50);

// Omit for default linear 0–100 behavior
<Slider value={value} onValueChange={setValue} />;
```

### `mapTrackPercentToValue`

Optional mapper from 0–100 track position to domain value. Apply step rounding and snapping here for non-linear scales. Default: linear inverse of track percent with step rounding. When provided, the function must include a `'worklet';` directive.

| TYPE                               | REQUIRED | DEFAULT     |
| ---------------------------------- | -------- | ----------- |
| `(trackPercent: number) => number` | No       | `undefined` |

```tsx
import { Slider } from '@metamask/design-system-react-native';
import { useState } from 'react';

const percentToAmount = (trackPercent: number) => {
  'worklet';
  return Math.round(trackPercent * 10);
};

const [value, setValue] = useState(500);

<Slider
  value={value}
  onValueChange={setValue}
  minimumValue={0}
  maximumValue={1000}
  mapTrackPercentToValue={percentToAmount}
/>;
```

### `formatStepLabel`

Optional formatter for a `rangeLabelSteps` entry. Default: `` `${step}%` ``.

| TYPE                       | REQUIRED | DEFAULT     |
| -------------------------- | -------- | ----------- |
| `(step: number) => string` | No       | `undefined` |

```tsx
import { Slider } from '@metamask/design-system-react-native';
import { useState } from 'react';

const [amount, setAmount] = useState(1000);

<Slider
  value={amount}
  onValueChange={setAmount}
  rangeLabelSteps={[0, 50, 100]}
  showRangeLabels
  formatStepLabel={(step) => {
    if (step === 0) return '$100';
    if (step === 50) return '$1,000';
    return '$10,000';
  }}
/>;
```

### `stepToValue`

Optional converter from a tapped `rangeLabelSteps` entry to a domain value. Default: `(step / 100) * (max - min) + min`. Use together with `formatStepLabel`, `mapValueToTrackPercent`, and `mapTrackPercentToValue` for non-linear scales.

| TYPE                       | REQUIRED | DEFAULT     |
| -------------------------- | -------- | ----------- |
| `(step: number) => number` | No       | `undefined` |

```tsx
import { Slider } from '@metamask/design-system-react-native';
import { useState } from 'react';

const MIN_AMOUNT = 100;
const MAX_AMOUNT = 10000;

const amountToPercent = (amount: number) => {
  'worklet';
  if (amount <= 100) return 0;
  if (amount <= 1000) return ((amount - 100) / 900) * 50;
  return 50 + ((amount - 1000) / 9000) * 50;
};

const percentToAmount = (trackPercent: number) => {
  'worklet';
  if (trackPercent <= 0) return 100;
  if (trackPercent <= 50) return Math.round(100 + (trackPercent / 50) * 900);
  return Math.round(1000 + ((trackPercent - 50) / 50) * 9000);
};

const [amount, setAmount] = useState(1000);

<Slider
  value={Math.min(amount, MAX_AMOUNT)}
  onValueChange={setAmount}
  minimumValue={MIN_AMOUNT}
  maximumValue={MAX_AMOUNT}
  step={1}
  rangeLabelSteps={[0, 50, 100]}
  showRangeDots
  showRangeLabels
  formatStepLabel={(step) => {
    if (step === 0) return '$100';
    if (step === 50) return '$1,000';
    return '$10,000';
  }}
  stepToValue={(step) => {
    if (step === 0) return 100;
    if (step === 50) return 1000;
    return 10000;
  }}
  mapValueToTrackPercent={amountToPercent}
  mapTrackPercentToValue={percentToAmount}
/>;
```

### `testID`

Optional test id for the root container. Internal track and thumb elements do not inherit this id.

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

```tsx
import { Slider } from '@metamask/design-system-react-native';
import { useState } from 'react';

const [value, setValue] = useState(50);

<Slider value={value} onValueChange={setValue} testID="amount-slider" />;
```

### Layout and accessibility (`Box` / `View`)

The root `Box` sets `accessibilityRole="adjustable"` with increment/decrement actions. Use top-level `View` props for layout and accessibility overrides (`accessibilityLabel`, `accessibilityHint`, `pointerEvents`, etc.). Keys reserved by Slider (`style`, `twClassName`, `testID`, and keys owned by the Slider API surface) are not passed through from this intersection.

Accessibility increment/decrement uses linear `step` on the domain value. For non-linear scales, consumers may need custom handling outside the slider for screen-reader stepping.

```tsx
import { Slider } from '@metamask/design-system-react-native';
import { useState } from 'react';

const [value, setValue] = useState(50);

<Slider
  value={value}
  onValueChange={setValue}
  accessibilityLabel="Position size"
  accessibilityHint="Adjust position size as a percentage of maximum"
/>;
```

### `twClassName`

Use the `twClassName` prop to add Tailwind CSS classes to the component. These classes will be merged with the component's default classes using `twMerge`, allowing you to:

- Add new styles that don't exist in the default component
- Override the component's default styles when needed

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

```tsx
import { Slider } from '@metamask/design-system-react-native';
import { useState } from 'react';

const [value, setValue] = useState(50);

// Add additional styles
<Slider value={value} onValueChange={setValue} twClassName="mt-4" />

// Override default styles
<Slider value={value} onValueChange={setValue} twClassName="mx-0" />
```

### `style`

Use the `style` prop to customize the component's appearance with React Native styles. For consistent styling, prefer using `twClassName` with Tailwind classes when possible. Use `style` with `tw.style()` for conditionals or dynamic values.

| TYPE                   | REQUIRED | DEFAULT     |
| ---------------------- | -------- | ----------- |
| `StyleProp<ViewStyle>` | No       | `undefined` |

```tsx
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { Slider } from '@metamask/design-system-react-native';
import { useState } from 'react';

export const ConditionalExample = ({ isActive }: { isActive: boolean }) => {
  const tw = useTailwind();
  const [value, setValue] = useState(50);

  return (
    <Slider
      value={value}
      onValueChange={setValue}
      style={tw.style('bg-default', isActive && 'bg-success-default')}
    />
  );
};
```

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
