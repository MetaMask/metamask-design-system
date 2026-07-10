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

Optional prop that when true, renders tappable labels below the track for ticks that define a `label`.

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

Optional prop that when true, renders dots on the track at each tick position.

| TYPE      | REQUIRED | DEFAULT |
| --------- | -------- | ------- |
| `boolean` | No       | `false` |

```tsx
import { Slider } from '@metamask/design-system-react-native';
import { useState } from 'react';

const [value, setValue] = useState(50);

<Slider value={value} onValueChange={setValue} showRangeDots />;
```

### `ticks`

Optional tick markers along the track. Each entry defines a track-percent position (`step`), optional `label`, optional domain `value`, optional theme `color`, and optional `haptic` threshold for `onTick`.

When no tick defines `color`, the slider uses default track and thumb colors. When at least one tick has `color`, thumb and fill colors interpolate smoothly as the user drags.

| TYPE                    | REQUIRED | DEFAULT         |
| ----------------------- | -------- | --------------- |
| `readonly SliderTick[]` | No       | `DEFAULT_TICKS` |

```tsx
import { Slider, TickColor } from '@metamask/design-system-react-native';
import { useState } from 'react';

const [value, setValue] = useState(50);

<Slider
  value={value}
  onValueChange={setValue}
  showRangeLabels
  showRangeDots
  ticks={[
    { step: 0, label: '0%' },
    { step: 50, label: '50%' },
    { step: 100, label: '100%' },
  ]}
/>;
```

#### Themed ticks with `TickColor`

Use `TickColor` for design token colors, or pass a raw hex/rgb string for custom colors:

```tsx
import { Slider, TickColor } from '@metamask/design-system-react-native';
import { useState } from 'react';

const [leverage, setLeverage] = useState(20);

<Slider
  value={leverage}
  onValueChange={setLeverage}
  minimumValue={1}
  maximumValue={40}
  showRangeLabels
  showRangeDots
  ticks={[
    { step: 0, label: '1x', value: 1, color: TickColor.SuccessDefault },
    { step: 25 },
    { step: 50, label: '20x', value: 20 },
    { step: 75 },
    { step: 100, label: '40x', value: 40, color: TickColor.ErrorDefault },
  ]}
/>;
```

Ticks without `label` render as dot-only markers. Ticks without `color` use default slider colors (`icon-alternative` fill, `icon-default` thumb) during interpolation.

### `onGrip`

Optional callback that fires once when pan begins and once when pan ends. Use for haptic feedback (e.g. `ImpactMoment.SliderGrip`). Not fired on track tap or range-label press.

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

Optional callback fired when the track percent crosses a haptic tick threshold while dragging or when a labeled tick is pressed. Haptic thresholds default to ticks with a `label`; override per tick with `haptic: true` or `haptic: false`.

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
  ticks={[
    { step: 0, label: '0%' },
    { step: 50, label: '50%', haptic: true },
    { step: 100, label: '100%' },
  ]}
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

### Non-linear scale with custom ticks

Use `ticks` with explicit `label` and `value` per stop, together with `mapValueToTrackPercent` and `mapTrackPercentToValue` for non-linear scales:

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
  ticks={[
    { step: 0, label: '$100', value: 100 },
    { step: 50, label: '$1,000', value: 1000 },
    { step: 100, label: '$10,000', value: 10000 },
  ]}
  showRangeDots
  showRangeLabels
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

The root container applies a default horizontal inset (`trackInset`, 16px) so the thumb can overhang the track at min/max without clipping. Override with `trackInset={0}` when the parent already provides edge padding, or pass `style={{ marginHorizontal: 0 }}` to reset the default margin.

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

### `trackInset`

Optional horizontal inset on the root container so the thumb can overhang the track at min/max without clipping. Defaults to `16` (matches thumb half-width). Set to `0` when the parent already provides edge padding.

| TYPE     | REQUIRED | DEFAULT |
| -------- | -------- | ------- |
| `number` | No       | `16`    |

```tsx
import { Slider } from '@metamask/design-system-react-native';
import { useState } from 'react';

const [value, setValue] = useState(50);

<Slider value={value} onValueChange={setValue} trackInset={0} />;
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
