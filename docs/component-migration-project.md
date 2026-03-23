# Component Migration Project

**Status:** Active  
**Epic - Extension:** [DSYS-272](https://consensyssoftware.atlassian.net/browse/DSYS-272)  
**Epic - Mobile:** [DSYS-302](https://consensyssoftware.atlassian.net/browse/DSYS-302)  
**Last Updated:** 2026-03-23

## Overview

This document tracks the comprehensive component migration from MetaMask Extension and Mobile component-libraries into the MetaMask Design System (MMDS) monorepo.

## Migration Scope

### Extension Components

**Source:** [metamask-extension/ui/components/component-library](https://github.com/MetaMask/metamask-extension/tree/main/ui/components/component-library)  
**Target:** `@metamask/design-system-react`  
**Epic:** DSYS-272

| Component     | Status         | Replacement | Jira Ticket | Notes                                                                                  |
| ------------- | -------------- | ----------- | ----------- | -------------------------------------------------------------------------------------- |
| BannerAlert   | ✅ Migrated    | -           | -           | See [MIGRATION.md](../packages/design-system-react/MIGRATION.md#banneralert-component) |
| Box           | ✅ Migrated    | -           | -           | See [MIGRATION.md](../packages/design-system-react/MIGRATION.md#box-component)         |
| Button        | 🔄 In Progress | -           | -           | -                                                                                      |
| ButtonBase    | 🔄 In Progress | -           | -           | -                                                                                      |
| ButtonIcon    | ✅ Migrated    | -           | -           | -                                                                                      |
| Checkbox      | 🔄 In Progress | -           | -           | -                                                                                      |
| Icon          | ✅ Migrated    | -           | -           | See [MIGRATION.md](../packages/design-system-react/MIGRATION.md#icon-component)        |
| Text          | ✅ Migrated    | -           | -           | See [MIGRATION.md](../packages/design-system-react/MIGRATION.md#text-component)        |
| TextButton    | 🔄 In Progress | -           | -           | -                                                                                      |
| AvatarAccount | ⬜ Pending     | -           | -           | -                                                                                      |
| AvatarBase    | ⬜ Pending     | -           | -           | -                                                                                      |
| AvatarFavicon | ⬜ Pending     | -           | -           | -                                                                                      |
| AvatarGroup   | ⬜ Pending     | -           | -           | -                                                                                      |
| AvatarIcon    | ⬜ Pending     | -           | -           | -                                                                                      |
| AvatarNetwork | ⬜ Pending     | -           | -           | -                                                                                      |
| AvatarToken   | ⬜ Pending     | -           | -           | -                                                                                      |
| BadgeCount    | ⬜ Pending     | -           | -           | -                                                                                      |
| BadgeIcon     | ⬜ Pending     | -           | -           | -                                                                                      |
| BadgeNetwork  | ⬜ Pending     | -           | -           | -                                                                                      |
| BadgeStatus   | ⬜ Pending     | -           | -           | -                                                                                      |
| BadgeWrapper  | ⬜ Pending     | -           | -           | -                                                                                      |
| BannerBase    | ⬜ Pending     | -           | -           | -                                                                                      |
| ButtonFilter  | ⬜ Pending     | -           | -           | -                                                                                      |
| ButtonHero    | ⬜ Pending     | -           | -           | -                                                                                      |
| Card          | ⬜ Pending     | -           | -           | -                                                                                      |
| HeaderBase    | ⬜ Pending     | -           | -           | -                                                                                      |
| Input         | ⬜ Pending     | -           | -           | -                                                                                      |
| Label         | ⬜ Pending     | -           | -           | -                                                                                      |
| ListItem      | ⬜ Pending     | -           | -           | -                                                                                      |
| Modal         | ⬜ Pending     | -           | -           | -                                                                                      |
| RadioButton   | ⬜ Pending     | -           | -           | -                                                                                      |
| SearchToken   | ⬜ Pending     | -           | -           | -                                                                                      |
| SensitiveText | ⬜ Pending     | -           | -           | -                                                                                      |
| Skeleton      | ⬜ Pending     | -           | -           | -                                                                                      |
| Tag           | ⬜ Pending     | -           | -           | -                                                                                      |
| TextField     | ⬜ Pending     | -           | -           | -                                                                                      |
| Tooltip       | ⬜ Pending     | -           | -           | -                                                                                      |

### Mobile Components

**Source:** [metamask-mobile/app/component-library](https://github.com/MetaMask/metamask-mobile/tree/main/app/component-library)  
**Target:** `@metamask/design-system-react-native`  
**Epic:** DSYS-302

| Component          | Status         | Replacement | Jira Ticket | Notes                                                                                         |
| ------------------ | -------------- | ----------- | ----------- | --------------------------------------------------------------------------------------------- |
| BannerAlert        | ✅ Migrated    | -           | -           | See [MIGRATION.md](../packages/design-system-react-native/MIGRATION.md#banneralert-component) |
| Box                | ✅ Migrated    | -           | -           | See [MIGRATION.md](../packages/design-system-react-native/MIGRATION.md#box-component)         |
| Button             | 🔄 In Progress | -           | -           | -                                                                                             |
| ButtonBase         | 🔄 In Progress | -           | -           | -                                                                                             |
| ButtonIcon         | ✅ Migrated    | -           | -           | -                                                                                             |
| Checkbox           | 🔄 In Progress | -           | -           | -                                                                                             |
| Icon               | ✅ Migrated    | -           | -           | See [MIGRATION.md](../packages/design-system-react-native/MIGRATION.md#icon-component)        |
| Text               | ✅ Migrated    | -           | -           | See [MIGRATION.md](../packages/design-system-react-native/MIGRATION.md#text-component)        |
| TextButton         | 🔄 In Progress | -           | -           | -                                                                                             |
| AvatarAccount      | ⬜ Pending     | -           | -           | -                                                                                             |
| AvatarBase         | ⬜ Pending     | -           | -           | -                                                                                             |
| AvatarFavicon      | ⬜ Pending     | -           | -           | -                                                                                             |
| AvatarGroup        | ⬜ Pending     | -           | -           | -                                                                                             |
| AvatarIcon         | ⬜ Pending     | -           | -           | -                                                                                             |
| AvatarNetwork      | ⬜ Pending     | -           | -           | -                                                                                             |
| AvatarToken        | ⬜ Pending     | -           | -           | -                                                                                             |
| BadgeCount         | ⬜ Pending     | -           | -           | -                                                                                             |
| BadgeIcon          | ⬜ Pending     | -           | -           | -                                                                                             |
| BadgeNetwork       | ⬜ Pending     | -           | -           | -                                                                                             |
| BadgeStatus        | ⬜ Pending     | -           | -           | -                                                                                             |
| BadgeWrapper       | ⬜ Pending     | -           | -           | -                                                                                             |
| BannerBase         | ⬜ Pending     | -           | -           | -                                                                                             |
| BottomSheet        | ⬜ Pending     | -           | -           | -                                                                                             |
| BottomSheetDialog  | ⬜ Pending     | -           | -           | -                                                                                             |
| BottomSheetFooter  | ⬜ Pending     | -           | -           | -                                                                                             |
| BottomSheetHeader  | ⬜ Pending     | -           | -           | -                                                                                             |
| BottomSheetOverlay | ⬜ Pending     | -           | -           | -                                                                                             |
| ButtonFilter       | ⬜ Pending     | -           | -           | -                                                                                             |
| ButtonHero         | ⬜ Pending     | -           | -           | -                                                                                             |
| ButtonSemantic     | ⬜ Pending     | -           | -           | -                                                                                             |
| Card               | ⬜ Pending     | -           | -           | -                                                                                             |
| HeaderBase         | ⬜ Pending     | -           | -           | -                                                                                             |
| Input              | ⬜ Pending     | -           | -           | -                                                                                             |
| KeyValueRow        | ⬜ Pending     | -           | -           | -                                                                                             |
| Label              | ⬜ Pending     | -           | -           | -                                                                                             |
| ListItem           | ⬜ Pending     | -           | -           | -                                                                                             |
| MainActionButton   | ⬜ Pending     | -           | -           | -                                                                                             |
| RadioButton        | ⬜ Pending     | -           | -           | -                                                                                             |
| SensitiveText      | ⬜ Pending     | -           | -           | -                                                                                             |
| Skeleton           | ⬜ Pending     | -           | -           | -                                                                                             |
| TabEmptyState      | ⬜ Pending     | -           | -           | -                                                                                             |
| TextField          | ⬜ Pending     | -           | -           | -                                                                                             |
| Toast              | ⬜ Pending     | -           | -           | -                                                                                             |

## Status Legend

| Symbol         | Meaning                                             |
| -------------- | --------------------------------------------------- |
| ✅ Migrated    | Component migrated to MMDS, migration guide written |
| 🔄 In Progress | Migration currently underway                        |
| ⬜ Pending     | Not yet started                                     |
| ❌ Deprecated  | Deprecated in source, replacement available         |

## Migration Checklist

### Per Component (both platforms)

- [ ] Create shared types in `packages/design-system-shared/src/types/ComponentName/`
- [ ] Create React implementation in `packages/design-system-react/src/components/ComponentName/`
- [ ] Create React Native implementation in `packages/design-system-react-native/src/components/ComponentName/`
- [ ] Add Storybook stories for both platforms
- [ ] Add Figma Code Connect files for both platforms
- [ ] Add tests for both platforms
- [ ] Update package MIGRATION.md with component-specific guide
- [ ] Create Jira ticket for adoption in Extension/Mobile
- [ ] Update this tracker with ticket number and status

## Jira Ticket Template

### Epic Tickets

- **DSYS-272**: Extension Component Migration to MMDS
- **DSYS-302**: Mobile Component Migration to MMDS

### Component Sub-task Template

```
## Summary
Migrate [ComponentName] from [Extension|Mobile] component-library to MMDS

## Acceptance Criteria
- [ ] Component implemented in design-system-react (if applicable)
- [ ] Component implemented in design-system-react-native (if applicable)
- [ ] Shared types created in design-system-shared
- [ ] Storybook stories added
- [ ] Figma Code Connect files added
- [ ] Tests added
- [ ] Migration guide added to package MIGRATION.md
- [ ] Adoption ticket created for [Extension|Mobile]
```

## Related Documentation

- [Component Migration Strategy](./component-migration-strategy.md)
- [React Migration Guide](../packages/design-system-react/MIGRATION.md)
- [React Native Migration Guide](../packages/design-system-react-native/MIGRATION.md)
- [Component Migration Cursor Rule](../.cursor/rules/component-migration.md)
- [Migration Tracking Cursor Rule](../.cursor/rules/component-migration-tracking.md)

## References

- [ADR-0003: Enum to String Union Migration](https://github.com/MetaMask/decisions/blob/main/decisions/design-system/0003-enum-to-string-union-migration.md)
- [ADR-0004: Centralized Types Architecture](https://github.com/MetaMask/decisions/blob/main/decisions/design-system/0004-centralized-types-architecture.md)
- [Extension component-library](https://github.com/MetaMask/metamask-extension/tree/main/ui/components/component-library)
- [Mobile component-library](https://github.com/MetaMask/metamask-mobile/tree/main/app/component-library)
- [MMDS Monorepo](https://github.com/MetaMask/metamask-design-system)
