# Extension Component Migration Tracker

**Source:** [metamask-extension/ui/components/component-library](https://github.com/MetaMask/metamask-extension/tree/main/ui/components/component-library)  
**Target:** `@metamask/design-system-react`  
**Epic:** [DSYS-272](https://consensyssoftware.atlassian.net/browse/DSYS-272)  
**Last Updated:** 2026-03-23

## Summary

| Status         | Count  |
| -------------- | ------ |
| ✅ Migrated    | 5      |
| 🔄 In Progress | 4      |
| ⬜ Pending     | 26     |
| **Total**      | **35** |

## ✅ Migrated Components

These components have been migrated to MMDS and have migration guides.

| Component   | MMDS Location                                              | Migration Guide                                                                 | Notes                        |
| ----------- | ---------------------------------------------------------- | ------------------------------------------------------------------------------- | ---------------------------- |
| BannerAlert | `packages/design-system-react/src/components/BannerAlert/` | [Guide](../packages/design-system-react/MIGRATION.md#banneralert-component)     | Severity values standardized |
| Box         | `packages/design-system-react/src/components/Box/`         | [Guide](../packages/design-system-react/MIGRATION.md#box-component)             | Responsive spacing changed   |
| ButtonIcon  | `packages/design-system-react/src/components/ButtonIcon/`  | [Guide](../packages/design-system-react/MIGRATION.md#from-version-0100-to-0110) | Variant prop replacement     |
| Icon        | `packages/design-system-react/src/components/Icon/`        | [Guide](../packages/design-system-react/MIGRATION.md#icon-component)            | Color enum changes           |
| Text        | `packages/design-system-react/src/components/Text/`        | [Guide](../packages/design-system-react/MIGRATION.md#text-component)            | Font weight separation       |

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

| Component     | Extension Path            | Priority | Ticket | Notes |
| ------------- | ------------------------- | -------- | ------ | ----- |
| AvatarAccount | `avatars/avatar-account/` | Medium   | -      | -     |
| AvatarBase    | `avatars/avatar-base/`    | Medium   | -      | -     |
| AvatarFavicon | `avatars/avatar-favicon/` | Medium   | -      | -     |
| AvatarGroup   | `avatars/avatar-group/`   | Medium   | -      | -     |
| AvatarIcon    | `avatars/avatar-icon/`    | Medium   | -      | -     |
| AvatarNetwork | `avatars/avatar-network/` | Medium   | -      | -     |
| AvatarToken   | `avatars/avatar-token/`   | Medium   | -      | -     |

### Badge Components

| Component    | Extension Path   | Priority | Ticket | Notes |
| ------------ | ---------------- | -------- | ------ | ----- |
| BadgeCount   | `badge-count/`   | Low      | -      | -     |
| BadgeIcon    | `badge-icon/`    | Low      | -      | -     |
| BadgeNetwork | `badge-network/` | Low      | -      | -     |
| BadgeStatus  | `badge-status/`  | Low      | -      | -     |
| BadgeWrapper | `badge-wrapper/` | Low      | -      | -     |

### Banner Components

| Component  | Extension Path         | Priority | Ticket | Notes |
| ---------- | ---------------------- | -------- | ------ | ----- |
| BannerBase | `banners/banner/base/` | Medium   | -      | -     |

### Button Components

| Component    | Extension Path   | Priority | Ticket | Notes |
| ------------ | ---------------- | -------- | ------ | ----- |
| ButtonFilter | `button-filter/` | Medium   | -      | -     |
| ButtonHero   | `button-hero/`   | Medium   | -      | -     |

### Form Components

| Component | Extension Path       | Priority | Ticket | Notes |
| --------- | -------------------- | -------- | ------ | ----- |
| Input     | `inputs/input/`      | High     | -      | -     |
| TextField | `inputs/text-field/` | High     | -      | -     |

### Layout Components

| Component  | Extension Path | Priority | Ticket | Notes |
| ---------- | -------------- | -------- | ------ | ----- |
| Card       | `card/`        | Medium   | -      | -     |
| HeaderBase | `header/base/` | Medium   | -      | -     |

### Other Components

| Component     | Extension Path       | Priority | Ticket | Notes |
| ------------- | -------------------- | -------- | ------ | ----- |
| Label         | `label/`             | Medium   | -      | -     |
| ListItem      | `list-items/`        | High     | -      | -     |
| Modal         | `modal/`             | High     | -      | -     |
| RadioButton   | `radio/RadioButton/` | Medium   | -      | -     |
| SearchToken   | `search-token/`      | Low      | -      | -     |
| SensitiveText | `sensitive-text/`    | Low      | -      | -     |
| Skeleton      | `skeleton/`          | Low      | -      | -     |
| Tag           | `tag/`               | Low      | -      | -     |
| Tooltip       | `tooltip/`           | Medium   | -      | -     |

## Migration Workflow

### Step 1: Audit Component

1. Locate component in extension: `ui/components/component-library/[component-path]/`
2. Document current API (props, types, variants)
3. Check if shared types already exist in `packages/design-system-shared/src/types/`

### Step 2: Create Migration Plan

1. Identify shared props vs platform-specific props
2. Decide on Conservative vs Unified approach
3. Create comparison table (Extension API vs MMDS patterns)

### Step 3: Implement

```bash
# Create component scaffolding
yarn create-component:react --name ComponentName --description "Brief description"

# Follow component-migration.md workflow
```

### Step 4: Document

1. Add migration section to `packages/design-system-react/MIGRATION.md`
2. Create adoption ticket for extension

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
| View epic              | [DSYS-272](https://consensyssoftware.atlassian.net/browse/DSYS-272) |

## Related Documentation

- [Project Overview](./component-migration-project.md)
- [Migration Strategy](./component-migration-strategy.md)
- [Component Migration Cursor Rule](../.cursor/rules/component-migration.md)
- [Extension Source](https://github.com/MetaMask/metamask-extension/tree/main/ui/components/component-library)
