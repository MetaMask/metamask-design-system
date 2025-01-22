# Design System Component Structure

This design system organizes components into three distinct folders:

## 1. primitives

The `primitives` folder contains foundational building blocks for constructing components in the `components` or `temp-components` folder. These are the lower-level, reusable primitives used internally within the design system.

### Key Points

**Purpose:**

- To provide the fundamental functionality and styling upon which higher-level components are built.

**Intended Usage:**

- Developers working on the design system should use `primitives` when creating new components for the `components` folder.
- End users or consumers of the design system should not directly use components from `primitives`.

**Examples:**

- A `ButtonBase` component with minimal styling and functionality used to create higher-level button variants (e.g., `ButtonPrimary`, `ButtonSecondary`).

**Guidelines:**

- `primitives` should remain minimal and abstract, focusing on functionality and avoiding domain-specific design decisions.
- Ensure these components are well-documented and thoroughly tested to ensure reliability across the system.

---

## 2. components

The `components` folder contains fully realized components intended for direct use by end users or consumers of the design system. These components encapsulate the functionality and styling defined in the `primitives`, offering a cohesive and user-friendly API.

### Key Points

**Purpose:**

- To provide ready-to-use components that adhere to the design system's guidelines and standards.

**Intended Usage:**

- Consumers of the design system should exclusively use components from this folder.
- These components are designed with a consistent API and pre-defined styling to fit seamlessly into applications.

**Examples:**

- A `Button` component that provides variants (e.g., primary, secondary) and responsive styling.

**Guidelines:**

- Components in this folder should avoid re-implementing functionality available in `primitives`. Instead, they should compose and extend the `primitives`.
- Provide comprehensive documentation and usage examples for each component to help consumers integrate them effectively.

---

## 3. temp-components

The `temp-components` folder is for temporary components that are not yet officially vested by the team but are planned for future inclusion in the design system.

### Key Points

**Purpose:**

- To serve as a staging area for experimental or under-review components before they are finalized and moved to the `components` folder.

**Intended Usage:**

- Developers can use `temp-components` to collaborate on new component ideas and gather feedback.
- These components are not intended for use by end users or consumers until they are officially promoted to the `components` folder.

**Examples:**

- A `TempCard` component that is being evaluated for inclusion as a new `Card` component.

**Guidelines:**

- Clearly mark all components in this folder as experimental in their documentation.
- Ensure basic functionality and tests are implemented for these components to facilitate feedback and iteration.
- Regularly review and decide on the future of components in this folder to avoid stagnation.

---

## Best Practices

### Clear Separation

Maintain a clear distinction between `primitives`, `components`, and `temp-components` to prevent direct usage of `primitives` and `temp-components` by end users.

### Naming Conventions

- Prefix all `primitives` with `Base` (e.g., `BaseButton`, `BaseInput`) to signal their purpose.
- Use descriptive and intuitive names for components in the `components` folder.
- Prefix temporary components in `temp-components` with `Temp` (e.g., `TempCard`, `TempModal`).

### Documentation

- Clearly indicate in the documentation of `primitives` and `temp-components` that they are internal or experimental and not intended for external use.

### Testing

- Ensure robust testing for `primitives`, `components`, and `temp-components`, with an emphasis on user-facing functionality in the `components` folder.

---

## Example Project Structure

```
src/
├── primitives/
│   ├── ButtonBase/
│   └── InputBase/
├── components/
│   ├── Button/
│   └── Input/
├── temp-components/
│   ├── TempCard/
│   └── TempModal/
```

By adhering to this structure, the design system ensures a clean separation of concerns, promoting maintainability and ease of use for all consumers.
