# Create Component Script

The create-component script is a utility for generating new React components in the MetaMask Design System with consistent structure and boilerplate code.

## Usage

From the root directory, run:

```bash
yarn create-component:react --name ComponentName --description "Brief description of the component"
```

### Required Arguments

- `--name`: The name of the component in PascalCase (e.g., Button, TextField, Modal)
- `--description`: A brief description of the component's purpose in quotes

### Example

```bash
yarn create-component:react --name Button --description "A reusable button component that supports different variants and sizes"
```

## Generated Files

The script will create a new directory under `packages/design-system-react/src/components` with the following structure:

```
button/
├── Button.constants.ts
├── Button.stories.tsx
├── Button.test.tsx
├── Button.tsx
├── Button.types.ts
├── README.mdx
└── index.ts
```

### File Descriptions

- `ComponentName.constants.ts`: Constants and classname mappings
- `ComponentName.stories.tsx`: Storybook stories for component documentation
- `ComponentName.test.tsx`: Jest test suite
- `ComponentName.tsx`: Main component implementation
- `ComponentName.types.ts`: TypeScript interfaces and types
- `README.mdx`: Component documentation and usage examples
- `index.ts`: Exports for the component

The script will also automatically:

1. Create the component directory with all necessary files
2. Update `src/components/index.ts` to export the new component
3. Add proper TypeScript types and basic tests
4. Set up Storybook documentation

## Best Practices

1. Use PascalCase for the component name
2. Provide a clear, concise description
3. After generating the component:
   - Add proper styling using Tailwind classes
   - Implement comprehensive tests
   - Add meaningful Storybook stories
   - Update the README.mdx with usage examples

## Example Component Creation

```bash
yarn create-component:react --name TextField --description "A text input component that supports various input types and states"
```

This will create a new TextField component with all the necessary files and boilerplate code.
