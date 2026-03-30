# dsys-616-migration-docs-cross-repo

This file is now an index for the DSYS-616 automation suite split into three automation specs:

1. `MMDS docs authoring`:
   - `@.cursor/automations/dsys-616-mmds-create-update-migration-docs.md`
2. `Mobile single-instance migration`:
   - `@.cursor/automations/dsys-616-mobile-replace-single-instance.md`
3. `Extension single-instance migration`:
   - `@.cursor/automations/dsys-616-extension-replace-single-instance.md`

All three specs share these contracts:

- PR title format:
  - `chore: [DSYS-616] create/update {ComponentName} migration docs`
  - `chore: [DSYS-616] replace single {ComponentName} instance and update @deprecated JSDoc`
- Jira linking in PR body:
  - `Fixes: DSYS-<story-number>`
- Jira workflow:
  - transition to `In Progress` on first qualifying PR open
  - no auto-close (manual close after all required PRs are merged)
- Upstream orchestration label:
  - `dsys-616-migration-docs` on qualifying MMDS docs PRs
- Client rerun determinism marker:
  - `Processed MIGRATION_DOCS_VERSION: <version>` in mobile/extension PR bodies
