# Mobile Component Migration Tracker

**Source:** [metamask-mobile/app/component-library](https://github.com/MetaMask/metamask-mobile/tree/main/app/component-library)  
**Target:** `@metamask/design-system-react-native`  
**Epic:** [DSYS-302](https://consensyssoftware.atlassian.net/browse/DSYS-302)  
**Last Updated:** 2026-03-23

## Summary

| Status         | Count  |
| -------------- | ------ |
| ✅ Migrated    | 5      |
| 🔄 In Progress | 4      |
| ⬜ Pending     | 38     |
| **Total**      | **47** |

## ✅ Migrated Components

These components have been migrated to MMDS and have migration guides.

| Component   | MMDS Location                                                     | Migration Guide                                                                        | Notes                          |
| ----------- | ----------------------------------------------------------------- | -------------------------------------------------------------------------------------- | ------------------------------ |
| BannerAlert | `packages/design-system-react-native/src/components/BannerAlert/` | [Guide](../packages/design-system-react-native/MIGRATION.md#banneralert-component)     | Error→Danger rename            |
| Box         | `packages/design-system-react-native/src/components/Box/`         | [Guide](../packages/design-system-react-native/MIGRATION.md#box-component)             | Custom spacing via twClassName |
| ButtonIcon  | `packages/design-system-react-native/src/components/ButtonIcon/`  | [Guide](../packages/design-system-react-native/MIGRATION.md#from-version-0100-to-0110) | Variant prop replacement       |
| Icon        | `packages/design-system-react-native/src/components/Icon/`        | [Guide](../packages/design-system-react-native/MIGRATION.md#icon-component)            | Size/color enum changes        |
| Text        | `packages/design-system-react-native/src/components/Text/`        | [Guide](../packages/design-system-react-native/MIGRATION.md#text-component)            | Font weight separation         |

## 🔄 In Progress

These components are currently being migrated.

| Component  | Owner | Ticket | PR  | Notes |
| ---------- | ----- | ------ | --- | ----- |
| Button     | -     | -      | -   | -     |
| ButtonBase | -     | -      | -   | -     |
| Checkbox   | -     | -      | -   | -     |
| TextButton | -     | -      | -   | -     |

## ⬜ Pending Components

### Avatar Components

| Component     | Mobile Path                         | Priority | Ticket | Notes |
| ------------- | ----------------------------------- | -------- | ------ | ----- |
| AvatarAccount | `components/Avatars/AvatarAccount/` | Medium   | -      | -     |
| AvatarBase    | `components/Avatars/AvatarBase/`    | Medium   | -      | -     |
| AvatarFavicon | `components/Avatars/AvatarFavicon/` | Medium   | -      | -     |
| AvatarGroup   | `components/Avatars/AvatarGroup/`   | Medium   | -      | -     |
| AvatarIcon    | `components/Avatars/AvatarIcon/`    | Medium   | -      | -     |
| AvatarNetwork | `components/Avatars/AvatarNetwork/` | Medium   | -      | -     |
| AvatarToken   | `components/Avatars/AvatarToken/`   | Medium   | -      | -     |

### Badge Components

| Component    | Mobile Path                      | Priority | Ticket | Notes |
| ------------ | -------------------------------- | -------- | ------ | ----- |
| BadgeCount   | `components/Badge/BadgeCount/`   | Low      | -      | -     |
| BadgeIcon    | `components/Badge/BadgeIcon/`    | Low      | -      | -     |
| BadgeNetwork | `components/Badge/BadgeNetwork/` | Low      | -      | -     |
| BadgeStatus  | `components/Badge/BadgeStatus/`  | Low      | -      | -     |
| BadgeWrapper | `components/Badge/BadgeWrapper/` | Low      | -      | -     |

### Banner Components

| Component  | Mobile Path                       | Priority | Ticket | Notes |
| ---------- | --------------------------------- | -------- | ------ | ----- |
| BannerBase | `components/Banners/Banner/base/` | Medium   | -      | -     |

### Bottom Sheet Components

| Component          | Mobile Path                                  | Priority | Ticket | Notes |
| ------------------ | -------------------------------------------- | -------- | ------ | ----- |
| BottomSheet        | `components/BottomSheet/BottomSheet/`        | High     | -      | -     |
| BottomSheetDialog  | `components/BottomSheet/BottomSheetDialog/`  | High     | -      | -     |
| BottomSheetFooter  | `components/BottomSheet/BottomSheetFooter/`  | High     | -      | -     |
| BottomSheetHeader  | `components/BottomSheet/BottomSheetHeader/`  | High     | -      | -     |
| BottomSheetOverlay | `components/BottomSheet/BottomSheetOverlay/` | High     | -      | -     |

### Button Components

| Component      | Mobile Path                         | Priority | Ticket | Notes |
| -------------- | ----------------------------------- | -------- | ------ | ----- |
| ButtonFilter   | `components/Button/ButtonFilter/`   | Medium   | -      | -     |
| ButtonHero     | `components/Button/ButtonHero/`     | Medium   | -      | -     |
| ButtonSemantic | `components/Button/ButtonSemantic/` | Medium   | -      | -     |

### Card Components

| Component | Mobile Path             | Priority | Ticket | Notes |
| --------- | ----------------------- | -------- | ------ | ----- |
| Card      | `components/Card/Card/` | Medium   | -      | -     |

### Form Components

| Component | Mobile Path                       | Priority | Ticket | Notes |
| --------- | --------------------------------- | -------- | ------ | ----- |
| Input     | `components/Input/Input/`         | High     | -      | -     |
| TextField | `components/TextField/TextField/` | High     | -      | -     |

### Header Components

| Component  | Mobile Path                     | Priority | Ticket | Notes |
| ---------- | ------------------------------- | -------- | ------ | ----- |
| HeaderBase | `components/Header/HeaderBase/` | Medium   | -      | -     |

### KeyValue Components

| Component   | Mobile Path               | Priority | Ticket | Notes |
| ----------- | ------------------------- | -------- | ------ | ----- |
| KeyValueRow | `components/KeyValueRow/` | Medium   | -      | -     |

### Layout Components

| Component | Mobile Path                 | Priority | Ticket | Notes |
| --------- | --------------------------- | -------- | ------ | ----- |
| Label     | `components/Label/`         | Medium   | -      | -     |
| ListItem  | `components/List/ListItem/` | High     | -      | -     |

### Other Components

| Component        | Mobile Path                               | Priority | Ticket | Notes |
| ---------------- | ----------------------------------------- | -------- | ------ | ----- |
| MainActionButton | `components/Buttons/MainActionButton/`    | Medium   | -      | -     |
| RadioButton      | `components/RadioButton/RadioButton/`     | Medium   | -      | -     |
| SensitiveText    | `components/SensitiveText/SensitiveText/` | Low      | -      | -     |
| Skeleton         | `components/Skeleton/Skeleton/`           | Low      | -      | -     |
| TabEmptyState    | `components/TabEmptyState/TabEmptyState/` | Low      | -      | -     |
| Toast            | `components/Toast/Toast/`                 | Medium   | -      | -     |

## Migration Workflow

### Step 1: Audit Component

1. Locate component in mobile: `app/component-library/components/[ComponentPath]/`
2. Document current API (props, types, variants)
3. Check if shared types already exist in `packages/design-system-shared/src/types/`

### Step 2: Create Migration Plan

1. Identify shared props vs platform-specific props
2. Decide on Conservative vs Unified approach
3. Create comparison table (Mobile API vs MMDS patterns)

### Step 3: Implement

```bash
# Create component scaffolding
yarn create-component:react-native --name ComponentName --description "Brief description"

# Follow component-migration.md workflow
```

### Step 4: Document

1. Add migration section to `packages/design-system-react-native/MIGRATION.md`
2. Create adoption ticket for mobile

### Step 5: Track

1. Update this tracker with:
   - Jira ticket number
   - PR link
   - Migration completion date

## Quick Reference

| Task                   | Command                                                             |
| ---------------------- | ------------------------------------------------------------------- |
| Check component status | Search this file for component name                                 |
| Update status          | Edit this file and commit                                           |
| Create ticket          | Use Jira API or web UI with template                                |
| View epic              | [DSYS-302](https://consensyssoftware.atlassian.net/browse/DSYS-302) |

## Mobile-Specific Considerations

### React Native Patterns

- Use `twClassName` instead of `className`
- Use `Pressable` instead of `onClick` (use `onPress`)
- Use `twrnc` preset for Tailwind utilities
- Test on both iOS and Android

### Native-Specific Components

The following components are React Native specific (not in web package):

- BottomSheet family
- Toast
- KeyValueRow
- MainActionButton
- TabEmptyState
- Skeleton

## Related Documentation

- [Project Overview](./component-migration-project.md)
- [Migration Strategy](./component-migration-strategy.md)
- [Component Migration Cursor Rule](../.cursor/rules/component-migration.md)
- [Mobile Source](https://github.com/MetaMask/metamask-mobile/tree/main/app/component-library)
