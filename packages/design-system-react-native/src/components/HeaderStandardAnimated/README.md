# HeaderStandardAnimated

HeaderStandardAnimated extends [HeaderStandard](../HeaderStandard/README.md) with scroll-driven animation: the compact center title appears when the user scrolls past the title section. Use with `useHeaderStandardAnimated` and Animated.ScrollView.

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
/>
<Animated.ScrollView onScroll={onScroll} scrollEventThrottle={16}>
  <View onLayout={(e) => setTitleSectionHeight(e.nativeEvent.layout.height)}>
    <TitleStandard title="Page Title" subtitle="Subtitle" />
  </View>
  ...
</Animated.ScrollView>
```

## Props

Extends HeaderStandardProps (without `children`). Additional props:

| PROP                 | TYPE                  | REQUIRED |
| -------------------- | --------------------- | -------- |
| `scrollY`            | `SharedValue<number>` | Yes      |
| `titleSectionHeight` | `SharedValue<number>` | Yes      |
| `title`              | `string \| ReactNode` | No       |
| `subtitle`           | `string \| ReactNode` | No       |
| `twClassName`        | `string`              | No       |

## useHeaderStandardAnimated

Returns:

- `scrollY`: SharedValue for scroll offset
- `titleSectionHeightSv`: SharedValue for title section height
- `setTitleSectionHeight`: Call with layout height of title section
- `onScroll`: Animated scroll handler for ScrollView
