# `@metamask/design-system-shared`

Shared code for MetaMask Design System components across React and React Native packages

## Installation

`yarn add @metamask/design-system-shared`

or

`npm install @metamask/design-system-shared`

## Package Structure

This package is organized to handle different types of shared code:

```
src/
├── types/           # Shared type definitions and enums
├── utils/           # Shared utility functions  
├── constants/       # Shared constants and default values
└── index.ts         # Main export file
```

## Usage

### Types
```typescript
import { AvatarAccountVariant, BaseAvatarAccountProps } from '@metamask/design-system-shared';
```

### Future Utils (example)
```typescript
import { validateAddress, formatEthereumAddress } from '@metamask/design-system-shared';
```

### Future Constants (example)
```typescript
import { DEFAULT_AVATAR_SIZE, SUPPORTED_NETWORKS } from '@metamask/design-system-shared';
```

## Adding New Shared Code

- **Types/Enums**: Add to `src/types/` directory
- **Utility Functions**: Add to `src/utils/` directory  
- **Constants**: Add to `src/constants/` directory

All exports are automatically re-exported from the main index file.

## Contributing

This package is part of a monorepo. Instructions for contributing can be found in the [monorepo README](https://github.com/MetaMask/metamask-design-system#readme).