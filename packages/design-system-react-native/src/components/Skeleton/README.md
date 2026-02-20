# Skeleton

Skeleton is a placeholder component used to indicate loading content. It displays a pulsing animation that simulates the shape of the content being loaded.

```tsx
import { Skeleton } from '@metamask/design-system-react-native';

<Skeleton height={32} width={300} />;
```

## Props

### `height`

Optional prop to set the height of the Skeleton.

| TYPE               | REQUIRED | DEFAULT     |
| ------------------ | -------- | ----------- |
| `number \| string` | No       | `undefined` |

```tsx
<Skeleton height={32} width={300} />
<Skeleton height="50%" width="100%" />
```

### `width`

Optional prop to set the width of the Skeleton.

| TYPE               | REQUIRED | DEFAULT     |
| ------------------ | -------- | ----------- |
| `number \| string` | No       | `undefined` |

```tsx
<Skeleton height={32} width={300} />
<Skeleton height={16} width={250} />
```

### `children`

Optional content to display within the skeleton. When provided without `hideChildren`, children are rendered directly. When provided with `hideChildren`, children are rendered invisibly to preserve layout dimensions.

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ReactNode` | No       | `undefined` |

```tsx
import { Skeleton } from '@metamask/design-system-react-native';

<Skeleton hideChildren style={{ alignSelf: 'flex-start' }}>
  <Text>Content to load</Text>
</Skeleton>;
```

### `hideChildren`

When true, children are rendered invisibly while the skeleton animation plays, preserving layout dimensions.

| TYPE      | REQUIRED | DEFAULT |
| --------- | -------- | ------- |
| `boolean` | No       | `false` |

```tsx
import { Skeleton } from '@metamask/design-system-react-native';

// Show skeleton while loading
<Skeleton hideChildren style={{ alignSelf: 'flex-start' }}>
  <Text>Content to load</Text>
</Skeleton>

// Show content when loaded
<Skeleton hideChildren={false}>
  <Text>Content to load</Text>
</Skeleton>
```

### `autoPlay`

Whether to automatically start the shimmer animation. When true, the opacity animation starts automatically when the skeleton is visible (no children or children are hidden).

| TYPE      | REQUIRED | DEFAULT |
| --------- | -------- | ------- |
| `boolean` | No       | `true`  |

```tsx
import { Skeleton } from '@metamask/design-system-react-native';

// Auto-playing (default)
<Skeleton height={32} width={300} />

// Static skeleton (no animation)
<Skeleton height={32} width={300} autoPlay={false} />
```

### `childrenWrapperProps`

Props spread to the children wrapper View. Use this for testID or accessibilityLabel on the children container.

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ViewProps` | No       | `undefined` |

```tsx
import { Skeleton } from '@metamask/design-system-react-native';

<Skeleton
  hideChildren
  childrenWrapperProps={{
    testID: 'skeleton-children',
    accessibilityLabel: 'Loading content',
  }}
>
  <Text>Content to load</Text>
</Skeleton>;
```

### `animatedViewProps`

Props spread to the animated background View. Use this for testID or accessibilityLabel on the animated element.

| TYPE        | REQUIRED | DEFAULT     |
| ----------- | -------- | ----------- |
| `ViewProps` | No       | `undefined` |

```tsx
import { Skeleton } from '@metamask/design-system-react-native';

<Skeleton
  height={32}
  width={300}
  animatedViewProps={{ testID: 'skeleton-animation' }}
/>;
```

### `twClassName`

Use the `twClassName` prop to add Tailwind CSS classes to the skeleton container. These classes will be merged with the component's default classes.

| TYPE     | REQUIRED | DEFAULT     |
| -------- | -------- | ----------- |
| `string` | No       | `undefined` |

```tsx
import { Skeleton } from '@metamask/design-system-react-native';

<Skeleton height={32} width={300} twClassName="rounded-lg" />;
```

### `style`

Use the `style` prop to customize the component's appearance with React Native styles. For consistent styling, prefer using `twClassName` with Tailwind classes when possible, and use `style` for dynamic values or styles not available in Tailwind.

| TYPE                   | REQUIRED | DEFAULT     |
| ---------------------- | -------- | ----------- |
| `StyleProp<ViewStyle>` | No       | `undefined` |

```tsx
import { Skeleton } from '@metamask/design-system-react-native';

<Skeleton height={32} width={300} style={{ alignSelf: 'flex-start' }} />;
```

## References

[MetaMask Design System Guides](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940)
