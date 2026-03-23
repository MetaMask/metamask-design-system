# Component Migration Tracking

Guide for tracking component migrations and updating Jira tickets during the migration process.

## Purpose

**This rule** provides guidance for:

- Tracking migration progress in the migration trackers
- Creating Jira tickets for new migrations
- Updating existing tickets with PR links and status

**NOT for:**

- Actually implementing the migration (see @.cursor/rules/component-migration.md)

## When to Use This

Use this rule when:

- Starting a new component migration
- Updating migration progress
- Creating adoption tickets for extension/mobile

## Migration Trackers

### Extension Tracker

`docs/extension-migration-tracker.md`

### Mobile Tracker

`docs/mobile-migration-tracker.md`

### Project Overview

`docs/component-migration-project.md`

## Workflow

### 1. Starting a New Migration

When starting a new component migration:

```bash
# 1. Update the tracker to mark component as "In Progress"
# Edit docs/extension-migration-tracker.md or docs/mobile-migration-tracker.md

# 2. Create Jira ticket
gh issue create \
  --title "Migrate [ComponentName] to MMDS" \
  --body "$(cat <<'EOF'
## Summary
Migrate [ComponentName] from [Extension|Mobile] component-library to MMDS

## Details
- **Source:** ui/components/component-library/[path]/
- **Target:** @metamask/design-system-[react|react-native]
- **Epic:** [DSYS-272|DSYS-302]

## Acceptance Criteria
- [ ] Shared types created in design-system-shared
- [ ] React implementation complete
- [ ] React Native implementation complete (if applicable)
- [ ] Storybook stories added
- [ ] Figma Code Connect files added (if applicable)
- [ ] Tests added
- [ ] Migration guide added to package MIGRATION.md
- [ ] Adoption ticket created for [Extension|Mobile]
EOF
)" \
  --label "component-migration" \
  --label "needs-pr" \
  --project "Design System"
```

### 2. Updating Progress

When the migration is complete:

```bash
# 1. Update tracker status to "Migrated"
# Edit the appropriate tracker file

# 2. Update Jira ticket with PR link
gh issue close [ticket-number]
# or
gh issue edit [ticket-number] --add-label "done"
```

### 3. Creating Adoption Tickets

After migration is complete, create tickets for adoption in extension/mobile:

```bash
# Extension Adoption Ticket
gh issue create \
  --title "[Extension] Adopt [ComponentName] from MMDS" \
  --body "$(cat <<'EOF'
## Summary
Replace [ComponentName] in extension with @metamask/design-system-react

## Migration Guide
See: https://github.com/MetaMask/metamask-design-system/blob/main/packages/design-system-react/MIGRATION.md#[component]

## Replacement
- Old: import from '../../component-library/[component]'
- New: import from '@metamask/design-system-react'

## Components to Update
[List all files that need updating]

## Verification
- [ ] All imports updated
- [ ] Tests pass
- [ ] No TypeScript errors
- [ ] Storybook renders correctly
EOF
)" \
  --label "adoption" \
  --label "extension"

# Mobile Adoption Ticket
gh issue create \
  --title "[Mobile] Adopt [ComponentName] from MMDS" \
  --body "$(cat <<'EOF'
## Summary
Replace [ComponentName] in mobile with @metamask/design-system-react-native

## Migration Guide
See: https://github.com/MetaMask/metamask-design-system/blob/main/packages/design-system-react-native/MIGRATION.md#[component]

## Replacement
- Old: import from '../../../component-library/components/[ComponentPath]'
- New: import from '@metamask/design-system-react-native'

## Platforms
- [ ] iOS
- [ ] Android

## Verification
- [ ] All imports updated
- [ ] Tests pass
- [ ] No TypeScript errors
- [ ] Renders correctly on both platforms
EOF
)" \
  --label "adoption" \
  --label "mobile"
```

## Jira API Alternative

If using the Jira API directly:

```bash
# Get auth token from environment or config
JIRA_TOKEN="your-token"
JIRA_BASE_URL="https://consensyssoftware.atlassian.net"

# Create issue under epic
curl -X POST \
  -H "Authorization: Bearer $JIRA_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "fields": {
      "project": {"key": "DSYS"},
      "summary": "Migrate ComponentName to MMDS",
      "description": {
        "type": "doc",
        "version": 1,
        "content": [
          {
            "type": "paragraph",
            "content": [
              {"type": "text", "text": "Migration details..."}
            ]
          }
        ]
      },
      "issuetype": {"name": "Task"},
      "parent": {"key": "DSYS-272"},
      "labels": ["component-migration"]
    }
  }' \
  "$JIRA_BASE_URL/rest/api/3/issue"
```

## Tracker Update Checklist

When marking a component as migrated, update ALL of:

- [ ] `docs/component-migration-project.md` - Main tracker table
- [ ] `docs/extension-migration-tracker.md` OR `docs/mobile-migration-tracker.md` - Platform-specific tracker
- [ ] `packages/design-system-react/MIGRATION.md` OR `packages/design-system-react-native/MIGRATION.md` - Package migration guide
- [ ] Jira ticket - Update with PR link and close/complete

## Quick Commands

```bash
# Check if component is in trackers
grep -i "ComponentName" docs/*-migration-tracker.md docs/component-migration-project.md

# List all migration tickets
gh issue list --label "component-migration" --state all

# List adoption tickets
gh issue list --label "adoption" --state all

# View epic progress
# DSYS-272: https://consensyssoftware.atlassian.net/browse/DSYS-272
# DSYS-302: https://consensyssoftware.atlassian.net/browse/DSYS-302
```

## Epic Links

| Platform  | Epic     | URL                                                     |
| --------- | -------- | ------------------------------------------------------- |
| Extension | DSYS-272 | https://consensyssoftware.atlassian.net/browse/DSYS-272 |
| Mobile    | DSYS-302 | https://consensyssoftware.atlassian.net/browse/DSYS-302 |

## Related Documentation

- @.cursor/rules/component-migration.md - Component migration implementation
- @docs/component-migration-project.md - Project overview
- @docs/extension-migration-tracker.md - Extension component tracker
- @docs/mobile-migration-tracker.md - Mobile component tracker
