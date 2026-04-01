# HeaderStandardAnimated

HeaderStandardAnimated extends [HeaderStandard](../HeaderStandard/README.md) with scroll-driven animation: a compact center title fades in when the user scrolls past the measured title section. Use with `useHeaderStandardAnimated` and `Animated.ScrollView` from `react-native-reanimated` so scroll updates run on the UI thread.

```tsx
import {
  HeaderStandardAnimated,
  useHeaderStandardAnimated,
} from '@metamask/design-system-react-native';
import Animated from 'react-native-reanimated';

const { scrollY, titleSectionHeightSv, setTitleSectionHeight, onScroll } =
  useHeaderStandardAnimated();

<HeaderStandardAnimated
  title="Page Title"
  subtitle="Subtitle"
  scrollY={scrollY}
  titleSectionHeight={titleSectionHeightSv}
/>;
<Animated.ScrollView onScroll={onScroll} scrollEventThrottle={16}>
  <View onLayout={(e) => setTitleSectionHeight(e.nativeEvent.layout.height)}>
    <TitleStandard title="Page Title" />
  </View>
</Animated.ScrollView>;
```

## Props

Extends [HeaderStandard](../HeaderStandard/README.md) props **except** `children` (the animated center content is provided internally). Additional props:

### `scrollY`

Shared value for vertical scroll offset from the scroll view (`contentOffset.y`).

| TYPE                  | REQUIRED |
| --------------------- | -------- |
| `SharedValue<number>` | Yes      |

### `titleSectionHeight`

Shared value for the height of the title section (first scrollable region), typically from `onLayout` on the wrapper around your page title.

| TYPE                  | REQUIRED |
| --------------------- | -------- |
| `SharedValue<number>` | Yes      |

### Other props

`title`, `subtitle`, `titleProps`, `subtitleProps`, `onBack`, `backButtonProps`, `onClose`, `closeButtonProps`, and other [HeaderStandard](../HeaderStandard/README.md) props behave the same as HeaderStandard. `twClassName` is merged with a default background class on the header.

## useHeaderStandardAnimated

Hook that returns:

| Property                | Description                                           |
| ----------------------- | ----------------------------------------------------- |
| `scrollY`               | Shared value for scroll offset (starts at `0`)        |
| `titleSectionHeightSv`  | Shared value for title section height (starts at `0`) |
| `setTitleSectionHeight` | Call with `height` from `onLayout`                    |
| `onScroll`              | Animated scroll handler for `Animated.ScrollView`     |

## Usage

```tsx
const { scrollY, onScroll, setTitleSectionHeight, titleSectionHeightSv } =
  useHeaderStandardAnimated();

<Box twClassName="flex-1">
  <HeaderStandardAnimated
    scrollY={scrollY}
    titleSectionHeight={titleSectionHeightSv}
    title="Market"
    onBack={handleBack}
  />
  <Animated.ScrollView onScroll={onScroll} scrollEventThrottle={16}>
    <Box onLayout={(e) => setTitleSectionHeight(e.nativeEvent.layout.height)}>
      <TitleStandard topLabel="Perps" title="ETH-PERP" />
    </Box>
    {/* page body */}
  </Animated.ScrollView>
</Box>;
```

## Accessibility

- Provide clear string `title` and `subtitle` when possible so assistive technologies read the same labels as the animated header.
- Pass `testID`, `titleProps`, and `subtitleProps` (including `accessibilityLabel` / `accessibilityRole` as needed) for tests and custom announcements.

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
