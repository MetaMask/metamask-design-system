import type { TestRunnerConfig } from '@storybook/test-runner';
import { getStoryContext } from '@storybook/test-runner';
import { injectAxe, checkA11y, configureAxe } from 'axe-playwright';

/*
 * See https://storybook.js.org/docs/writing-tests/test-runner#test-hook-api
 * to learn more about the test-runner hooks API.
 */
const config: TestRunnerConfig = {
  async preVisit(page) {
    await injectAxe(page);
  },
  async postVisit(page, context) {
    // Get the entire context of a story, including parameters, args, argTypes, etc.
    const storyContext = await getStoryContext(page, context);

    // The default example in the docs doesn't disable the region rule, but we need to
    // because Storybook renders components in isolation inside #storybook-root.
    // This means components aren't wrapped in landmark regions (nav, main, etc.)
    // which would normally be present in a full application.
    await configureAxe(page, {
      rules: [
        // Disable the region rule globally since it's a Storybook infrastructure issue
        { id: 'region', enabled: false },
        // Allow additional per-story rule configurations
        ...(storyContext.parameters?.a11y?.config?.rules || []),
      ],
    });

    // Allow per-story element targeting
    const element = storyContext.parameters?.a11y?.element ?? 'body';

    // Skip a11y tests if explicitly disabled for the story
    if (storyContext.parameters?.a11y?.disable) {
      return;
    }

    await checkA11y(page, element, {
      detailedReport: true,
      detailedReportOptions: {
        html: true,
      },
    });
  },
};

export default config;
