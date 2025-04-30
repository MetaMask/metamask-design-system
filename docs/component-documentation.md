# Component Documentation Best Practices

This guide outlines the best practices for documenting components in the MetaMask Design System.

## Documentation Structure

Each component should have a README file that serves as the comprehensive documentation:

- For React components: `packages/design-system-react/src/components/ComponentName/README.mdx`
- For React Native components: `packages/design-system-react-native/src/components/ComponentName/README.md`

## Example Templates

We provide example templates for both platforms that demonstrate the proper documentation structure:

- [React Component Documentation Example](./component-readme-examples/react-readme-example.mdx)
- [React Native Component Documentation Example](./component-readme-examples/react-native-readme-example.md)

### Required Sections

1. **Component Overview**

   - Component name
   - Brief description of the component's purpose
   - Basic usage example with imports

2. **Props Documentation**
   It should then describe each prop and an example of it's usage
   - `propName`
   - Brief description of the prop and its usage
   - Any enums that are used with that prop
   - Prop type table documenting type, required, defaults
   - Story or code example
   - The bottom of the props should end with style and classname prop for react or twClassName for react native
   - Component API for React for now

## Best Practices Checklist

Common Requirements:

- [x] Component purpose clearly stated
- [x] All props documented with types
- [x] Basic usage example provided
- [x] Code examples tested and working
- [x] Storybook stories of each prop implemented

React-Specific:

- [x] Interactive code examples with Canvas
- [x] Tailwind class examples
- [x] Component API controls documented

React Native-Specific:

- [x] Storybook stories implemented
- [x] Clear code examples
- [x] Tailwind (twClassName) examples

## Key Differences Between Platforms

### React (.mdx)

- Uses Storybook Canvas for interactive examples
- Includes Component API controls
- Uses className for Tailwind styling
- Example: [React Template](./component-readme-examples/react-readme-example.mdx)

### React Native (.md)

- Uses code blocks for examples
- Markdown tables for prop documentation
- Uses twClassName for Tailwind styling
- Example: [React Native Template](./component-readme-examples/react-native-readme-example.md)
