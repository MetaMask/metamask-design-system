# Tailwind CSS Best Practices for MetaMask Design System

A comprehensive guide for using Tailwind effectively and consistently across our design system monorepo.

## 🎯 Core Principles

### 1. Component-First Approach

- **Use Design System Components**: Always prefer our design system components over raw JSX elements with Tailwind classes
- **Props Over Classes**: Utilize component props to control variants and styles instead of direct class manipulation
- **Example**:

  ```tsx
  // ❌ Don't
  <div className="rounded-lg bg-alternative p-4">
    <span className="text-default text-s-body-md font-medium">Content</span>
  </div>

  // ✅ Do
  <Box
    borderRadius={BoxBorderRadius.Lg}
    backgroundColor={BoxBackgroundColor.BackgroundAlternative}
    p={4}
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
- **No Default Tailwind Values**: Never use Tailwind's default color palette or typography scale (these should be removed in the projects tailwind.config.js to prevent usage)
- **Typography**: Always use the `Text` component for text styling instead of Tailwind's typography classes
- **Colors**: Use only design token generated color classes (e.g., `bg-default`, `text-error-default`)
- **Example**:

  ```tsx
  // ❌ Don't - Using default Tailwind colors or direct typography
  <div className="bg-blue-500 text-white text-sm">
    <p className="text-gray-900 text-lg font-medium">Title</p>
    <span className="text-gray-600">Content</span>
  </div>

  // ❌ Don't - Using raw typography classes
  <div className="bg-default">
    <p className="text-default text-s-body-md font-medium">Title</p>
    <span className="text-alternative text-s-body-sm">Content</span>
  </div>

  // ✅ Do - Using design token colors and Text component with enums
  <Box backgroundColor={BoxBackgroundColor.BackgroundDefault}>
    <Text
      variant={TextVariant.HeadingSm}
      color={TextColor.Default}
    >
      Title
    </Text>
    <Text
      variant={TextVariant.BodySm}
      color={TextColor.Alternative}
    >
      Content
    </Text>
  </Box>
  ```

## 💻 Platform-Specific Guidelines

### 3. React Web Components

- **Use Tailwind Utilities**: Leverage Tailwind's utility classes for styling
- **CVA Integration**: Coming soon - We are looking at implementing Class Variance Authority (CVA) for managing component variants. See [GitHub Issue #282](https://github.com/MetaMask/metamask-design-system/issues/282)
- **Example**:

  ```tsx
  // ❌ Don't
  const styles = {
    backgroundColor: '#F2F4F6',
    padding: '16px',
  };

  // ✅ Do - Using Box component with enums
  <Box backgroundColor={BoxBackgroundColor.BackgroundDefault} padding={4}>
    <Text variant={TextVariant.BodyMd}>Content</Text>
  </Box>;
  ```

### 4. React Native Components

- **TWRNC Usage**: Use `twrnc` for React Native styling
- **Consistent API**: Maintain consistent class names between web and native
- **Example**:

  ```tsx
  // ❌ Don't
  const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.neutral100,
      padding: 16,
    },
  });

  // ✅ Do
  const styles = tw`bg-neutral-100 p-4`;
  ```

## 🛠️ Developer Tools & Configuration

### 5. IDE Integration

- **Enable Tailwind IntelliSense**: Use VSCode with Tailwind CSS IntelliSense plugin
- **Configure Workspace**: Follow `.vscode/settings.json` configuration:
  - Use experimental config file setup for monorepo
  - Enable string suggestions
  - Support custom functions: `tw`, `twClassName`, `twMerge`

### 6. Code Formatting

- **Prettier Integration**: Use Prettier with tailwind plugin
- **Consistent Ordering**: Maintain consistent class ordering through prettier-plugin-tailwindcss
- **Multiple Configs**: Respect the different Tailwind configs for React and React Native

## 🎨 Style Guidelines

### 7. Class Organization

- **Logical Grouping**: Group related classes together
- **Consistent Order**: Follow the order: layout → spacing → colors → other visual properties
- **Typography**: Never include typography classes directly, use the Text component instead
- **Example**:

  ```tsx
  // ❌ Don't
  className =
    'flex items-center gap-4 p-4 text-s-body-md font-medium text-default bg-default';

  // ✅ Do
  <Box
    display={BoxDisplay.Flex}
    alignItems={BoxAlignItems.Center}
    gap={4}
    backgroundColor={BoxBackgroundColor.BackgroundDefault}
    padding={4}
  >
    <Text variant={TextVariant.BodyMd}>Content</Text>
  </Box>;
  ```

### 8. Responsive Design

- **Mobile First**: Start with mobile styles, then add responsive variants
- **Breakpoint Usage**: Use our defined breakpoints consistently
- **Example**:

  ```tsx
  // ❌ Don't - Mixing typography utilities with responsive classes
  className = 'text-s-body-sm md:text-l-body-sm text-default';

  // ✅ Do - Using Text component handles responsive sizes
  <Text variant={TextVariant.BodySm} color={TextColor.TextDefault} />;
  ```

## ⚠️ Common Pitfalls

### 9. Anti-patterns to Avoid

- **No Arbitrary Values**: Don't use `[]` syntax for arbitrary values
- **No Direct Styles**: Avoid inline `style` objects
- **No @apply**: Don't use `@apply` in CSS files
- **No Style Mixing**: Don't mix Tailwind with other styling approaches in the same component
- **No Default Colors**: Never use Tailwind's default color palette
- **No Direct Typography**: Never use typography classes directly
- **Example**:

  ```tsx
  // ❌ Don't - Mixing different approaches
  <div
    style={{ padding: '16px' }}
    className={`
      bg-default
      text-s-body-md
      ${isActive ? 'bg-[#1EA672]' : 'bg-gray-500'}
    `}
  >

  // ✅ Do - Using components with enums
  <Box
    backgroundColor={isActive ? BoxBackgroundColor.SuccessDefault : BoxBackgroundColor.BackgroundMuted}
    padding={BoxPadding.Four}
  >
    <Text
      variant={TextVariant.BodyMd}
      color={TextColor.Default}
    >
      Content
    </Text>
  </Box>
  ```

## 🔄 Maintenance & Updates

### 10. Documentation

- Keep component documentation up to date with Tailwind usage examples
- Document any deviations from standard Tailwind practices
- Maintain a catalog of common patterns and solutions

### 11. Version Control

- Document Tailwind config changes in commit messages
- Review class usage in PR reviews
- Ensure changes align with design system tokens

---

> This guide is a living document and will be updated as our design system evolves. For questions or suggestions, please reach out to the design system team.
