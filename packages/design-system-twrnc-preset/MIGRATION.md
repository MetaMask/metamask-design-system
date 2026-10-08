# Migration Guide

This guide describes breaking changes in `@metamask/design-system-twrnc-preset`.

## Table of Contents

- [From version 0.X.0 to 0.Y.0](#from-version-0x0-to-0y0)

## From version 0.X.0 to 0.Y.0

<a id="from-version-0x0-to-0y0"></a>

### React peer dependency

**What changed:**

The `react` peer dependency is now `>=19.2.3`, matching MetaMask Mobile. The previous range was `>=18.2.0`.

**Migration:**

```bash
yarn add react@>=19.2.3
```

**Impact:**

- Apps on React 18 will get a peer dependency warning until they upgrade to React 19.2.3 or newer.
- MetaMask Mobile already depends on React 19.2.3, so no app change is required there.
