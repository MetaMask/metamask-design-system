# Jira Ticket Creation Guide

Guide for creating and managing Jira tickets for component migrations.

## Epic Structure

| Platform  | Epic                          | Key      | URL                                                     |
| --------- | ----------------------------- | -------- | ------------------------------------------------------- |
| Extension | Extension Component Migration | DSYS-272 | https://consensyssoftware.atlassian.net/browse/DSYS-272 |
| Mobile    | Mobile Component Migration    | DSYS-302 | https://consensyssoftware.atlassian.net/browse/DSYS-302 |

## Ticket Types

### 1. Migration Ticket (Sub-task)

Created under the epic when starting a component migration.

**Template:**

```
Summary: Migrate [ComponentName] to MMDS
Type: Sub-task
Parent: DSYS-272 (Extension) or DSYS-302 (Mobile)
Labels: component-migration
```

**Acceptance Criteria:**

```
- [ ] Shared types created in design-system-shared
- [ ] React implementation complete (if applicable)
- [ ] React Native implementation complete (if applicable)
- [ ] Storybook stories added
- [ ] Figma Code Connect files added (if applicable)
- [ ] Tests added
- [ ] Migration guide added to package MIGRATION.md
- [ ] Adoption ticket created for [Extension|Mobile]
```

### 2. Adoption Ticket

Created after migration is complete, to track adoption in the platform.

**Template:**

```
Summary: [Extension|Mobile] - Adopt [ComponentName] from MMDS
Type: Task
Labels: adoption, extension OR mobile
Epic: DSYS-272 (Extension) or DSYS-302 (Mobile)
```

## Creating Tickets

### Using GitHub CLI (Recommended)

```bash
# Migration Ticket
gh issue create \
  --title "Migrate [ComponentName] to MMDS" \
  --body "$(cat <<'EOF'
## Summary
Migrate [ComponentName] from [Extension|Mobile] component-library to MMDS

## Details
- **Source:** ui/components/component-library/[path]/
- **Target:** @metamask/design-system-[react|react-native]
- **Epic:** DSYS-272 (Extension) or DSYS-302 (Mobile)

## Migration Guide
See package MIGRATION.md for component-specific guidance.

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
  --label "needs-pr"

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

### Using Jira REST API

#### Authentication

Set up your Jira API token:

```bash
# Option 1: Environment variable
export JIRA_TOKEN="your-api-token"
export JIRA_EMAIL="your-email@consensys.net"
export JIRA_BASE_URL="https://consensyssoftware.atlassian.net"

# Option 2: .env file (gitignored)
echo "JIRA_TOKEN=your-token" >> .env
echo "JIRA_EMAIL=your-email@consensys.net" >> .env
```

#### Create Migration Ticket

```bash
curl -X POST \
  -H "Authorization: Basic $(echo -n $JIRA_EMAIL:$JIRA_TOKEN | base64)" \
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
            "type": "heading",
            "attrs": {"level": 2},
            "content": [{"type": "text", "text": "Summary"}]
          },
          {
            "type": "paragraph",
            "content": [{"type": "text", "text": "Migrate ComponentName from [Extension|Mobile] component-library to MMDS."}]
          },
          {
            "type": "heading",
            "attrs": {"level": 2},
            "content": [{"type": "text", "text": "Details"}]
          },
          {
            "type": "bulletList",
            "content": [
              {"type": "listItem", "content": [{"type": "paragraph", "content": [{"type": "text", "text": "Source: ui/components/component-library/[path]/"}]}]},
              {"type": "listItem", "content": [{"type": "paragraph", "content": [{"type": "text", "text": "Target: @metamask/design-system-[react|react-native]"}]}]}
            ]
          },
          {
            "type": "heading",
            "attrs": {"level": 2},
            "content": [{"type": "text", "text": "Acceptance Criteria"}]
          },
          {
            "type": "orderedList",
            "content": [
              {"type": "listItem", "content": [{"type": "paragraph", "content": [{"type": "text", "text": "Shared types created in design-system-shared"}]}]},
              {"type": "listItem", "content": [{"type": "paragraph", "content": [{"type": "text", "text": "React implementation complete"}]}]},
              {"type": "listItem", "content": [{"type": "paragraph", "content": [{"type": "text", "text": "React Native implementation complete"}]}]},
              {"type": "listItem", "content": [{"type": "paragraph", "content": [{"type": "text", "text": "Storybook stories added"}]}]},
              {"type": "listItem", "content": [{"type": "paragraph", "content": [{"type": "text", "text": "Tests added"}]}]},
              {"type": "listItem", "content": [{"type": "paragraph", "content": [{"type": "text", "text": "Migration guide added"}]}]}
            ]
          }
        ]
      },
      "issuetype": {"name": "Sub-task"},
      "parent": {"key": "DSYS-272"},
      "labels": ["component-migration"]
    }
  }' \
  "$JIRA_BASE_URL/rest/api/3/issue"
```

#### Create Adoption Ticket

```bash
curl -X POST \
  -H "Authorization: Basic $(echo -n $JIRA_EMAIL:$JIRA_TOKEN | base64)" \
  -H "Content-Type: application/json" \
  -d '{
    "fields": {
      "project": {"key": "DSYS"},
      "summary": "[Extension] Adopt ComponentName from MMDS",
      "description": {
        "type": "doc",
        "version": 1,
        "content": [
          {
            "type": "paragraph",
            "content": [{"type": "text", "text": "Replace ComponentName in extension with @metamask/design-system-react."}]
          },
          {
            "type": "heading",
            "attrs": {"level": 2},
            "content": [{"type": "text", "text": "Migration Guide"}]
          },
          {
            "type": "paragraph",
            "content": [{"type": "text", "text": "See: https://github.com/MetaMask/metamask-design-system/blob/main/packages/design-system-react/MIGRATION.md#component"}]
          },
          {
            "type": "heading",
            "attrs": {"level": 2},
            "content": [{"type": "text", "text": "Replacement"}]
          },
          {
            "type": "codeBlock",
            "attrs": {"language": "typescript"},
            "content": [
              {"type": "text", "text": "// Old\nimport { ComponentName } from '../../component-library/component';\n\n// New\nimport { ComponentName } from '@metamask/design-system-react';"}
            ]
          }
        ]
      },
      "issuetype": {"name": "Task"},
      "labels": ["adoption", "extension"],
      "priority": {"name": "Medium"}
    }
  }' \
  "$JIRA_BASE_URL/rest/api/3/issue"
```

## Bulk Ticket Creation

To create tickets for all pending components:

```bash
#!/bin/bash
# create-migration-tickets.sh

COMPONENTS=(
  "AvatarAccount"
  "AvatarBase"
  "AvatarFavicon"
  "AvatarGroup"
  "AvatarIcon"
  "AvatarNetwork"
  "AvatarToken"
)

for component in "${COMPONENTS[@]}"; do
  gh issue create \
    --title "Migrate $component to MMDS" \
    --body "## Summary
Migrate $component from extension component-library to MMDS

## Details
- **Source:** ui/components/component-library/[component-path]/
- **Target:** @metamask/design-system-react
- **Epic:** DSYS-272

## Acceptance Criteria
- [ ] Shared types created
- [ ] React implementation complete
- [ ] Storybook stories added
- [ ] Tests added
- [ ] Migration guide added
- [ ] Adoption ticket created" \
    --label "component-migration" \
    --label "needs-pr"

  echo "Created ticket for: $component"
done
```

## Ticket Labels

| Label               | Description                                    |
| ------------------- | ---------------------------------------------- |
| component-migration | Ticket for migrating a component to MMDS       |
| adoption            | Ticket for adopting MMDS component in platform |
| extension           | Extension-specific ticket                      |
| mobile              | Mobile-specific ticket                         |
| needs-pr            | Waiting for PR                                 |
| blocked             | Blocked on dependency                          |

## Viewing Epic Progress

### Web UI

- Extension Epic: https://consensyssoftware.atlassian.net/browse/DSYS-272
- Mobile Epic: https://consensyssoftware.atlassian.net/browse/DSYS-302

### CLI

```bash
# List all component migration tickets
gh issue list --label "component-migration" --state all

# List by platform
gh issue list --label "component-migration" --label "extension" --state open
gh issue list --label "component-migration" --label "mobile" --state open

# List adoption tickets
gh issue list --label "adoption" --state open
```

## Related Documentation

- @.cursor/rules/component-migration-tracking.md - Tracking workflow
- @docs/component-migration-project.md - Project overview
- @docs/extension-migration-tracker.md - Extension tracker
- @docs/mobile-migration-tracker.md - Mobile tracker
