# HeaderStandardAnimated

HeaderStandardAnimated is a scroll-linked variant of [HeaderStandard](../HeaderStandard/README.md). It uses the same center title and subtitle layout as `HeaderStandard`, but fades and shifts that center block based on scroll position so the compact header title area stays readable once the page title section has scrolled away.

Use [HeaderStandard](../HeaderStandard/README.md) when you do not need scroll-driven center animation. Use `HeaderStandardAnimated` when the header sits above an `Animated.ScrollView` and you want the large title block to hide as the user scrolls past the first section.

```tsx
import {
  HeaderStandardAnimated,
  useHeaderStandardAnimated,
} from '@metamask/design-system-react-native';
import Animated from 'react-native-reanimated';

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
      {/* First scroll section — height drives when the compact title appears */}
    </Box>
    {/* page body */}
  </Animated.ScrollView>
</Box>;
```

## Props

Inherits [HeaderStandardProps](../HeaderStandard/README.md) except `children` is not supported; the center is always built from `title` and `subtitle` like `HeaderStandard`. Additional props:

### `scrollY`

Reanimated shared value for vertical scroll offset (`contentOffset.y`), typically from `useHeaderStandardAnimated`.

| TYPE                  | REQUIRED | DEFAULT |
| --------------------- | -------- | ------- |
| `SharedValue<number>` | Yes      | —       |

### `titleSectionHeight`

Reanimated shared value for the height (in pixels) of the first scroll section below the header. When `scrollY` is at or above this height, the animated center block is fully shown in its compact state.

| TYPE                  | REQUIRED | DEFAULT |
| --------------------- | -------- | ------- |
| `SharedValue<number>` | Yes      | —       |

## `useHeaderStandardAnimated`

Returns `scrollY`, `titleSectionHeightSv`, `setTitleSectionHeight`, and `onScroll`. Pass `scrollY` and `titleSectionHeightSv` into `HeaderStandardAnimated` as `scrollY` and `titleSectionHeight`. Wire `onScroll` to `Animated.ScrollView`. Call `setTitleSectionHeight` from `onLayout` on the wrapper whose height should match the “large title” region.

## Usage

```tsx
const { scrollY, onScroll, setTitleSectionHeight, titleSectionHeightSv } =
  useHeaderStandardAnimated();

<HeaderStandardAnimated
  scrollY={scrollY}
  titleSectionHeight={titleSectionHeightSv}
  title="Settings"
  subtitle="Account"
  onBack={() => navigation.goBack()}
/>;
```

## Accessibility

Same guidance as [HeaderStandard](../HeaderStandard/README.md): `testID`, `titleProps`, `subtitleProps`, and `backButtonProps` / `closeButtonProps` for labels and test hooks.

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
