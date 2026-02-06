# Styling

Component styling using design tokens, Tailwind CSS (web), and TWRNC (React Native).

## Critical Rules

### Component-First Approach

- **ALWAYS** use design system components (Box, Text, Button) over raw JSX elements
- **ALWAYS** prefer component props over className/twClassName when available
- **ONLY** use className/twClassName when no equivalent prop exists

**React Web:**

```tsx
// ❌ Wrong
<div className="rounded-lg bg-alternative flex-1 p-4">
  <span className="text-default text-s-body-md">Content</span>
</div>

// ✅ Correct
<Box
  borderRadius={BoxBorderRadius.Lg}
  backgroundColor={BoxBackgroundColor.BackgroundAlternative}
  p={4}
  className="flex-1" // No flex-1 prop exists, so className is fine
>
  <Text variant={TextVariant.BodyMd}>Content</Text>
</Box>
```

**React Native:**

```tsx
// ❌ Wrong
<View style={{ borderRadius: 8, backgroundColor: '#F2F4F6', padding: 16 }}>
  <Text style={{ color: '#24272A', fontSize: 16 }}>Content</Text>
</View>

// ✅ Correct
<Box
  borderRadius={BoxBorderRadius.Lg}
  backgroundColor={BoxBackgroundColor.BackgroundAlternative}
  p={4}
  twClassName="flex-1" // No flex-1 prop exists, so twClassName is fine
>
  <Text variant={TextVariant.BodyMd}>Content</Text>
</Box>
```

### Design Tokens Only

- **ALWAYS** use design token generated classes (bg-default, text-error-default)
- **NEVER** use default Tailwind colors (bg-blue-500, text-gray-700)
- **NEVER** use arbitrary values (bg-[#4459ff], p-[16px]) unless critical
- **ALWAYS** use Text component for typography, never Tailwind text classes

**React Web:**

```tsx
// ❌ Wrong - Default Tailwind colors and arbitrary values
<div className="bg-[#4459ff] text-white">
  <p className="text-gray-900 text-lg font-medium">Title</p>
</div>

// ✅ Correct - Design tokens and Text component
<Box backgroundColor={BoxBackgroundColor.BackgroundDefault}>
  <Text
    variant={TextVariant.HeadingSm}
    color={TextColor.TextDefault}
  >
    Title
  </Text>
</Box>
```

**React Native:**

```tsx
// ❌ Wrong - Hardcoded values in StyleSheet
<View style={{ backgroundColor: '#4459ff', padding: 16 }}>
  <Text style={{ color: '#ffffff', fontSize: 14 }}>Title</Text>
</View>

// ✅ Correct - Design tokens and Text component
<Box backgroundColor={BoxBackgroundColor.BackgroundDefault}>
  <Text
    variant={TextVariant.HeadingSm}
    color={TextColor.TextDefault}
  >
    Title
  </Text>
</Box>
```

### Platform-Specific Props

- **React Web:** Use `className` for Tailwind utilities
- **React Native:** Use `twClassName` for TWRNC utilities OR `useTailwind()` hook
- **NEVER** mix inline styles with Tailwind classes
- **NEVER** import twrnc directly (use design system preset)

**React Web:**

```tsx
// ❌ Wrong - Mixing inline styles with className
<div style={{ padding: '16px' }} className="bg-default">
  Content
</div>

// ✅ Correct - Component props + className when needed
<Box
  backgroundColor={BoxBackgroundColor.BackgroundDefault}
  padding={4}
  className="hover:bg-hover active:bg-pressed"
>
  <Text>Content</Text>
</Box>
```

**React Native:**

```tsx
// ❌ Wrong - Mixing StyleSheet with twClassName
<View
  style={[{ padding: 16 }, tw`bg-default`]}
>
  <Text>Content</Text>
</View>

// ✅ Correct - Component props + twClassName when needed
<Box
  backgroundColor={BoxBackgroundColor.BackgroundDefault}
  padding={4}
  twClassName="flex-1"
>
  <Text>Content</Text>
</Box>
```

## Platform Patterns

### React Web

**Interactive states (hover/active):**

```tsx
<Box width={BoxWidth.Full} className="hover:bg-hover active:bg-pressed">
  <Text>Clickable content</Text>
</Box>
```

**className for unsupported props:**

```tsx
<Text
  variant={TextVariant.BodyMd}
  color={TextColor.TextDefault}
  className="mt-4" // margin-top not available as prop
>
  Content with margin
</Text>
```

**CVA Integration (Coming Soon):**

Class Variance Authority for managing component variants. See [Issue #282](https://github.com/MetaMask/metamask-design-system/issues/282)

### React Native

**useTailwind hook from preset:**

```tsx
import { useTailwind } from '@metamask/design-system-twrnc-preset';

const MyComponent = () => {
  const tw = useTailwind(); // Handles theme switching automatically

  return (
    <View style={tw`bg-default p-4`}>
      <Text style={tw`mt-4`}>Content</Text>
    </View>
  );
};
```

**twClassName for Box components:**

```tsx
<Box
  flexDirection={BoxFlexDirection.Row}
  twClassName="px-4 py-4 border-b border-muted"
>
  <Text>Content</Text>
</Box>
```

**Interactive states with Pressable:**

```tsx
<Pressable
  style={({ pressed }) =>
    tw.style(
      'w-full flex-row items-center justify-between px-4 py-2',
      pressed && 'bg-pressed',
    )
  }
>
  <Text>Interactive content</Text>
</Pressable>
```

**NEVER import twrnc directly:**

```tsx
// ❌ Wrong
import tw from 'twrnc';

// ✅ Correct
import { useTailwind } from '@metamask/design-system-twrnc-preset';
```

## Commands

```bash
# Validate Tailwind classes
yarn lint

# Auto-fix class ordering
yarn lint:fix
```

## Golden Path Examples

**React Web Box with props + className:**

- @packages/design-system-react/src/components/Box/Box.tsx
- @packages/design-system-react/src/components/Button/Button.tsx

**React Native Box with props + twClassName:**

- @packages/design-system-react-native/src/components/Box/Box.tsx
- @packages/design-system-react-native/src/components/Button/Button.tsx

**React Native useTailwind hook:**

- @packages/design-system-react-native/src/components/Button/
- @packages/design-system-twrnc-preset/src/useTailwind.ts

**Design token generated classes:**

- @packages/design-system-tailwind-preset/ (React Web)
- @packages/design-system-twrnc-preset/ (React Native)

**Text component typography:**

- @packages/design-system-react/src/components/Text/Text.tsx
- @packages/design-system-react-native/src/components/Text/Text.tsx

## Verification

After styling changes, verify:

- [ ] No raw HTML/JSX elements (div, span, p) with Tailwind classes
- [ ] Component props used where available
- [ ] className/twClassName only when no equivalent prop exists
- [ ] No default Tailwind colors (bg-blue-500, text-gray-700)
- [ ] No arbitrary values (unless documented as necessary)
- [ ] No inline styles mixed with Tailwind classes
- [ ] Platform-specific prop used (className for web, twClassName for native)
- [ ] Text component used for all typography, not Tailwind classes
- [ ] React Native: useTailwind from preset, not direct twrnc import
- [ ] ESLint passes: `yarn lint`

## References

- Component creation: @.cursor/rules/component-creation.md (coming in Phase 2)
- Cross-platform patterns: @.cursor/rules/cross-platform.md (coming in Phase 2)
- Design tokens: @packages/design-tokens/
- MetaMask React guidelines: https://github.com/MetaMask/contributor-docs/blob/main/docs/react-guidelines.md
- VSCode Tailwind IntelliSense: @.vscode/settings.json
- ESLint config: @.eslintrc.js (eslint-plugin-tailwindcss rules)
