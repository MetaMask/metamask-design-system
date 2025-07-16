# Tailwind CSS Best Practices

A comprehensive guide for using Tailwind effectively and consistently across our design system monorepo and engineering organization.

## 🎯 Core Principles

### 1. Component-First Approach

- **Use Design System Components**: Always prefer our design system components over raw JSX elements with Tailwind classes
- **Props Over Classes**: Prefer component props to control variants and styles, but use `className`/`twClassname`/`tw` when no equivalent prop exists
- **Example**:

  **React Web:**

  ```tsx
  // ❌ Don't
  <div className="rounded-lg bg-alternative flex-1 p-4">
    <span className="text-default text-s-body-md font-medium">Content</span>
  </div>

  // ✅ Do
  <Box
    borderRadius={BoxBorderRadius.Lg}
    backgroundColor={BoxBackgroundColor.BackgroundAlternative}
    p={4}
    className="flex-1" // Not supported by box so fine to add as className
  >
    <Text
      variant={TextVariant.BodyMd}
      fontWeight={FontWeight.Medium}
    >
      Content
    </Text>
  </Box>
  ```

  **React Native:**

  ```tsx
  // ❌ Don't
  <View style={StyleSheet.create({ container: { borderRadius: 8, backgroundColor: '#F2F4F6', padding: 16 } }).container}>
    <Text style={{ color: '#24272A', fontSize: 16, fontWeight: '500' }}>Content</Text>
  </View>

  // ✅ Do
  <Box
    borderRadius={BoxBorderRadius.Lg}
    backgroundColor={BoxBackgroundColor.BackgroundAlternative}
    p={4}
    twClassName="flex-1" // Not supported by box so fine to add as className
  >
    <Text
      variant={TextVariant.BodyMd}
      fontWeight={FontWeight.Medium}
    >
      Content
    </Text>
  </Box>
  ```

### 2. Design Token Integration

- **Use Design Token Generated Classes Only**: Always use design token based classes that are generated from our design system
- **No Default Tailwind Values**: Never use Tailwind's default color palette or typography scale (these should be removed in the projects `tailwind.config.js` to prevent usage)
- **Typography**: Always use the `Text` component for text styling instead of Tailwind's typography classes
- **Colors**: Use only design token generated color classes (e.g., `bg-default`, `text-error-default`)
- **Example**:

  **React Web:**

  ```tsx
  // ❌ Don't - Using default Tailwind colors, arbitrary color values or direct typography
  <div className="bg-[#4459ff] text-white text-sm">
    <p className="text-gray-900 text-lg font-medium">Title</p>
    <span className="text-gray-600">Content</span>
  </div>

  // ✅ Do - Using design token colors and Text component with enums
  <Box backgroundColor={BoxBackgroundColor.BackgroundDefault}>
    <Text
      variant={TextVariant.HeadingSm}
      color={TextColor.TextDefault}
    >
      Title
    </Text>
    <Text
      variant={TextVariant.BodySm}
      color={TextColor.TextAlternative}
    >
      Content
    </Text>
  </Box>
  ```

  **React Native:**

  ```tsx
  // ❌ Don't - Using StyleSheet with hardcoded values
  <View style={{ backgroundColor: '#4459ff', padding: 16 }}>
    <Text style={{ color: '#ffffff', fontSize: 14 }}>Title</Text>
    <Text style={{ color: '#6B7280' }}>Content</Text>
  </View>

  // ✅ Do - Using design token colors and Text component with enums
  <Box backgroundColor={BoxBackgroundColor.BackgroundDefault}>
    <Text
      variant={TextVariant.HeadingSm}
      color={TextColor.TextDefault}
    >
      Title
    </Text>
    <Text
      variant={TextVariant.BodySm}
      color={TextColor.TextAlternative}
    >
      Content
    </Text>
  </Box>
  ```

## 📝 Static Class Name Principle

### 3. Static Class Name Principle

**Always use complete, static Tailwind class names. Never construct class names using string interpolation, variables, or partial pieces.**

This principle ensures:
- **Linting Support**: ESLint can validate and order your classes
- **IntelliSense**: IDE autocomplete and validation work properly  
- **Build Reliability**: Classes work consistently across local and CI environments
- **Debugging**: Easy to trace and search for class names
- **Performance**: No runtime class construction overhead

**Examples:**

**React Web:**
```tsx
// ❌ Don't - Constructing class names with variables
const variant = 'body-sm';
const className = `text-${variant}`;
const dynamicClasses = `bg-${bgColor} text-${textColor}`;

// ❌ Don't - String interpolation in template literals
const buttonClass = `px-4 py-2 bg-${isActive ? 'primary' : 'secondary'}`;

// ✅ Do - Complete, static class names
const className = "text-body-sm";
const buttonClass = isActive ? "px-4 py-2 bg-primary" : "px-4 py-2 bg-secondary";

// ✅ Do - Use component props for variants instead
<Text variant={TextVariant.BodySm} />
<Button variant={isActive ? ButtonVariant.Primary : ButtonVariant.Secondary} />
```

**React Native:**
```tsx
// ❌ Don't - Constructing class names with variables
const size = 'md';
const textClass = `text-body-${size}`;
const style = tw`${textClass} text-default`;

// ❌ Don't - Building classes from partial pieces
const getTextStyle = (variant: string) => tw`text-${variant}`;

// ✅ Do - Complete, static class names
const style = tw`text-body-md text-default`;

// ✅ Do - Use component props for variants instead
<Text variant={TextVariant.BodyMd} color={TextColor.TextDefault} />

// ✅ Do - If conditional classes needed, use complete class names
const style = tw`${isLarge ? 'text-body-lg' : 'text-body-sm'} text-default`;
```

## 💻 Platform-Specific Guidelines

### 4. React Web Components

- **Use Tailwind Utilities**: Leverage Tailwind's utility classes for styling via `className`
- **CVA Integration**: Coming soon - We are looking at implementing Class Variance Authority (CVA) for managing component variants. See [GitHub Issue #282](https://github.com/MetaMask/metamask-design-system/issues/282)
- **Example**:

  ```tsx
  // ❌ Don't
  const styles = {
    backgroundColor: '#F2F4F6',
    padding: '16px',
  };

  // ✅ Do - Using Box component with className for additional styling
  <Box
    backgroundColor={BoxBackgroundColor.BackgroundDefault}
    padding={4}
    className="hover:bg-hover active:bg-pressed"
  >
    <Text variant={TextVariant.BodyMd}>Content</Text>
  </Box>

  // ✅ Also acceptable - Using className when no prop exists
  <Text
    variant={TextVariant.BodyMd}
    color={TextColor.TextDefault}
    className="mt-4"
  >
    Content with margin
  </Text>
  ```

### 5. React Native Components

- **Design System TWRNC Preset**: Use `useTailwind` hook from `@metamask/design-system-twrnc-preset` instead of importing `twrnc` directly
- **Theme Integration**: The preset automatically handles light/dark theme switching and design token integration
- **Consistent API**: Maintain consistent class names between web and native
- **Example**:

  ```tsx
  // ❌ Don't - Direct twrnc import
  import tw from 'twrnc';
  const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.background.default,
      padding: 16,
    },
  });

  // ❌ Don't - Raw twrnc without design system integration
  const styles = tw`bg-default p-4`;

  // ✅ Do - Use design system preset with theme support
  import { useTailwind } from '@metamask/design-system-twrnc-preset';

  const MyComponent = () => {
    const tw = useTailwind();

    return (
      <View style={tw`bg-default p-4`}>
        <Text style={tw`mt-4`}>Content</Text>
      </View>
    );
  };

  // ✅ Do - Using Box component with twClassName for additional styling
  <Box
    backgroundColor={BoxBackgroundColor.BackgroundDefault}
    padding={4}
    twClassName="flex-1"
  >
    <Text variant={TextVariant.BodyMd}>Content</Text>
  </Box>

  // ✅ Do - Using Pressable with tw function for interactive states
  <Pressable
    style={({ pressed }) =>
      tw.style(
        'w-full flex-row items-center justify-between px-4 py-2',
        pressed && 'bg-pressed',
      )
    }
  >
    <Text>Interactive Content</Text>
  </Pressable>
  ```

## 🎨 Style Guidelines

### 6. Platform-Specific Styling Patterns

**React Web - className usage:**

```tsx
// Layout and spacing
<Box>
  <ButtonBase className="h-auto flex-1 flex-col justify-center rounded-lg bg-muted py-4 hover:bg-muted-hover active:bg-muted-pressed">
    <Icon name={IconName.Bank} className="mb-2" />
    Buy/Sell
  </ButtonBase>
</Box>

// Interactive states (web supports hover/active)
<Box width={BoxWidth.Full} className="hover:bg-hover active:bg-pressed">
  <Text>Clickable content</Text>
</Box>
```

**React Native - twClassName and tw usage:**

```tsx
// Layout and spacing with twClassName
<Box
  flexDirection={BoxFlexDirection.Row}
  twClassName="px-4 py-4 border-b border-muted"
>
  <ButtonBase twClassName="h-20 flex-1 rounded-lg bg-muted px-0 py-4">
    <Box
      flexDirection={BoxFlexDirection.Column}
      alignItems={BoxAlignItems.Center}
    >
      <Icon name={IconName.Bank} />
      <Text fontWeight={FontWeight.Medium}>Buy/Sell</Text>
    </Box>
  </ButtonBase>
</Box>

// Interactive states with tw function
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

// Direct tw usage for simple styling
<ScrollView style={tw`flex-1 bg-default`}>
  <View style={tw`p-4`}>
    <Text style={tw`text-default`}>Content</Text>
  </View>
</ScrollView>
```

## 🛠️ Developer Tools & Configuration

### 7. IDE Integration

- **Static Class Names Only**: Always use complete, static class names (e.g., `text-body-sm`, `bg-primary-default`) to ensure proper IntelliSense, linting, and build reliability
- **Enable Tailwind IntelliSense**: Use VSCode with Tailwind CSS IntelliSense plugin
- **Configure Workspace**: Follow `.vscode/settings.json` configuration:
  - Use experimental config file setup for monorepo
  - Enable string suggestions
  - Support custom functions: `tw`, `twClassName`, `twMerge`

### 8. Code Formatting

- **ESLint Integration**: Use `eslint-plugin-tailwindcss` for Tailwind class validation and ordering
- **Static Analysis**: ESLint can only validate complete, static class names - dynamic construction breaks linting rules and validation
- **Consistent Ordering**: Maintain consistent class ordering through ESLint rules
- **Class Validation**: ESLint enforces proper class usage, prevents contradictory classes, and encourages shorthand utilities

## ⚠️ Common Pitfalls

### 9. Anti-patterns to Avoid

#### ❌ Dynamic Class Construction
The most critical anti-pattern is constructing Tailwind class names dynamically:

```tsx
// ❌ Never do this - String interpolation
const textClass = `text-${variant}`;
const colorClass = `bg-${color}-${shade}`;
const sizeClass = `w-${width} h-${height}`;

// ❌ Never do this - Template literals with variables
const className = `px-4 py-2 text-${isActive ? 'primary' : 'secondary'}`;

// ❌ Never do this - Function-based class generation
const getButtonClass = (variant: string, size: string) => `btn-${variant}-${size}`;

// ❌ Never do this - Array joining with variables
const classes = ['text', variant, color].join('-');
```

#### ✅ Correct Alternatives

```tsx
// ✅ Use complete, static class names
const textClass = "text-body-sm";
const colorClass = "bg-primary-default";
const sizeClass = "w-full h-10";

// ✅ Use conditional logic with complete classes
const className = isActive ? "px-4 py-2 text-primary" : "px-4 py-2 text-secondary";

// ✅ Use mapping objects with complete class names
const BUTTON_CLASSES = {
  primary: "bg-primary-default text-primary-inverse",
  secondary: "bg-secondary-default text-secondary-inverse",
} as const;

// ✅ Use component props instead of manual class construction
<Button variant={ButtonVariant.Primary} size={ButtonSize.Medium} />
```

#### Other Anti-patterns:
- **No Arbitrary Values**: Avoid `[]` syntax except for one-off cases
- **No @apply**: Don't use `@apply` in CSS files
- **No Style Mixing**: Don't mix Tailwind with inline styles
- **No Default Colors**: Never use Tailwind's default color palette
- **No Direct Typography**: Always use the Text component

**Platform-specific examples:**

**React Web:**

```tsx
// ❌ Don't - Mixing inline styles with Tailwind classes
<div
  style={{ padding: '16px' }}
  className="bg-default text-s-body-md"
>
  Content
</div>

// ✅ Do - Using components with consistent patterns
<Box backgroundColor={BoxBackgroundColor.BackgroundDefault} padding={4}>
  <Text variant={TextVariant.BodyMd}>Content</Text>
</Box>

// ✅ Also acceptable - Combining props with className when no prop exists
<Text
  variant={TextVariant.BodyMd}
  color={TextColor.TextDefault}
  className="mt-4"
>
  Content with margin
</Text>
```

**React Native:**

```tsx
// ❌ Don't - Mixing StyleSheet with twrnc
<View
  style={[
    StyleSheet.create({ container: { padding: 16 } }).container,
    tw`bg-default`
  ]}
>
  <Text style={tw`text-default`}>Content</Text>
</View>

// ✅ Do - Using components with consistent patterns
<Box backgroundColor={BoxBackgroundColor.BackgroundDefault} padding={4}>
  <Text variant={TextVariant.BodyMd}>Content</Text>
</Box>

// ✅ Also acceptable - Combining props with twClassName when no prop exists
<Text
  variant={TextVariant.BodyMd}
  color={TextColor.TextDefault}
  twClassName="mt-4"
>
  Content with margin
</Text>
```

---

> This guide is a living document and will be updated as our design system evolves. For questions or suggestions, please reach out to the design system team.
