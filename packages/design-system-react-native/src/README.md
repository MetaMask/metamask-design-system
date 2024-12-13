# Design System Component Structure

This design system organizes components into two distinct folders:

## 1. `base-components`

The `base-components` folder contains foundational building blocks for constructing components in the `components` folder. These are the lower-level, reusable primitives used internally within the design system.

### Key Points:

- **Purpose:** To provide the fundamental functionality and styling upon which higher-level components are built.
- **Intended Usage:**
  - Developers working on the design system should use `base-components` when creating new components for the `components` folder.
  - End users or consumers of the design system **should not** directly use components from `base-components`.
- **Examples:**
  - A `BaseButton` component with minimal styling and functionality used to create higher-level button variants (e.g., `ButtonPrimary`, `ButtonSecondary`).

### Guidelines:

- `base-components` should remain minimal and abstract, focusing on functionality and avoiding domain-specific design decisions.
- Ensure these components are well-documented and thoroughly tested to ensure reliability across the system.

## 2. `components`

The `components` folder contains fully realized components intended for direct use by end users or consumers of the design system. These components encapsulate the functionality and styling defined in the `base-components`, offering a cohesive and user-friendly API.

### Key Points:

- **Purpose:** To provide ready-to-use components that adhere to the design system's guidelines and standards.
- **Intended Usage:**
  - Consumers of the design system should exclusively use components from this folder.
  - These components are designed with a consistent API and pre-defined styling to fit seamlessly into applications.
- **Examples:**
  - A `Button` component that provides variants (e.g., `primary`, `secondary`) and responsive styling.

### Guidelines:

- Components in this folder should avoid re-implementing functionality available in `base-components`. Instead, they should compose and extend the `base-components`.
- Provide comprehensive documentation and usage examples for each component to help consumers integrate them effectively.

## Best Practices

- **Clear Separation:** Maintain a clear distinction between `base-components` and `components` to prevent direct usage of `base-components` by end users.
- **Naming Conventions:**
  - Prefix all `base-components` with `Base` (e.g., `BaseButton`, `BaseInput`) to signal their purpose.
  - Use descriptive and intuitive names for components in the `components` folder.
- **Documentation:** Clearly indicate in the documentation of `base-components` that they are internal and not intended for external use.
- **Testing:** Ensure robust testing for both `base-components` and `components`, with an emphasis on user-facing functionality in the `components` folder.

## Example Project Structure

```plaintext
src/
├── base-components/
│   ├── ButtonBase.tsx
│   └── ...Base.tsx
├── components/
│   ├── Button.tsx
│   ├── Icon.tsx
│   ├── Text.tsx
│   └── ....tsx
```

By adhering to this structure, the design system ensures a clean separation of concerns, promoting maintainability and ease of use for all consumers.
