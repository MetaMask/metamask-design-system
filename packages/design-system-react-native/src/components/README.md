# Design System Component Structure

This design system organizes components into two primary groups under the `components` folder:

1. **Core Components** – Fully realized components ready for use by consumers of the design system.
2. **Temp Components** – Temporary or experimental components under review, now located in `components/temp-components`.

Additionally, low-level building blocks (previously in `primitives/`) are now folded into component subdirectories when necessary.

---

## Folder Structure

```
src/
├── components/
│   ├── Button/
│   ├── Input/
│   ├── Spinner/
│   └── temp-components/
│       └── TextOrChildren/
```

---

## Components

The `components` folder contains production-ready components intended for direct consumption by product teams or application developers.

### 🔹 Purpose

To expose consistent, accessible, and design-compliant components that abstract away implementation details.

### 🔹 Usage

- Use components in this folder across applications.
- These components may internally use shared utility functions or abstracted logic, but all public APIs are stable and documented.

### 🔹 Examples

- `Button`: Offers various visual and interactive variants like Primary, Secondary, etc.
- `Input`: Encapsulates label handling, validation states, and styling.

### 🔹 Guidelines

- All components must use internal abstractions (like `ButtonBase`, etc.) if needed, but only expose high-level props.
- Components should be thoroughly tested and documented.

---

## Temp Components

The `temp-components` subfolder inside `components` is reserved for in-progress or experimental components.

### 🔹 Purpose

To serve as a staging area for new components that are under active development, review, or iteration.

### 🔹 Usage

- Developers working on the design system can collaborate and iterate on new ideas here.
- These components **should not** be consumed by external teams until promoted.

### 🔹 Guidelines

- All files in this folder must be clearly marked as **experimental**.
- Include basic usage and test coverage to gather early feedback.
- Periodically review to either promote the component to `components/` or remove it.

---

## Best Practices

### ✅ Separation of Concerns

- Core components are grouped under `components/` and should be the only ones consumed outside the design system.
- Temporary or under-review components live in `components/temp-components/`.

### ✅ Naming Conventions

- Use intuitive, PascalCase directory names that match the component name (e.g., `Button/`, `Spinner/`).

### ✅ Documentation

- Components in `components/` must include usage examples and prop documentation.
- Temp components must be clearly marked with a disclaimer indicating their in-progress status.

### ✅ Testing

- All components, whether stable or experimental, should have test coverage to prevent regressions and support ongoing development.

---

By following this updated structure, the design system supports scalable growth, encourages experimentation, and maintains a clear boundary between internal development and external consumption.
