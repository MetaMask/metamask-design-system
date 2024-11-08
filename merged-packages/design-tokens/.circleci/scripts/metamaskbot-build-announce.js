#!/usr/bin/env node
const fetch = require('node-fetch');

start().catch((error) => {
  console.error(error);
  process.exit(1);
});

async function start() {
  const {
    GITHUB_COMMENT_TOKEN,
    CIRCLE_PULL_REQUEST,
    CIRCLE_SHA1,
    CIRCLE_WORKFLOW_JOB_ID,
  } = process.env;

  if (!CIRCLE_PULL_REQUEST) {
    console.warn(`No pull request detected for commit "${CIRCLE_SHA1}"`);
    return;
  }

  const CIRCLE_PR_NUMBER = CIRCLE_PULL_REQUEST.split('/').pop();
  const SHORT_SHA1 = CIRCLE_SHA1.slice(0, 7);
  const BUILD_LINK_BASE = `https://output.circle-artifacts.com/output/job/${CIRCLE_WORKFLOW_JOB_ID}/artifacts/0`;

  const storybookUrl = `${BUILD_LINK_BASE}/storybook/index.html`;
  const storybookLink = `<a href="${storybookUrl}">Storybook</a>`;

  const commentBody = `Builds ready [${SHORT_SHA1}]\n\nStorybook: ${storybookLink}`;

  const JSON_PAYLOAD = JSON.stringify({ body: commentBody });
  const POST_COMMENT_URI = `https://api.github.com/repos/metamask/design-tokens/issues/${CIRCLE_PR_NUMBER}/comments`;

  console.log(`Posting to: ${POST_COMMENT_URI}`);

  const response = await fetch(POST_COMMENT_URI, {
    method: 'POST',
    body: JSON_PAYLOAD,
    headers: {
      'User-Agent': 'metamaskbot',
      Authorization: `token ${GITHUB_COMMENT_TOKEN}`,
    },
  });
  if (!response.ok) {
    throw new Error(`Post comment failed with status '${response.statusText}'`);
  }
}
