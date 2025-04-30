#!/usr/bin/env node
const fetch = require('node-fetch');

async function announceBuild() {
  const {
    GITHUB_TOKEN,
    GITHUB_REPOSITORY,
    GITHUB_EVENT_PATH,
    GITHUB_SHA,
    AWS_S3_BUCKET,
    AWS_REGION,
  } = process.env;

  if (!GITHUB_EVENT_PATH) {
    console.warn(`No pull request event detected for commit "${GITHUB_SHA}"`);
    return;
  }

  try {
    const event = require(process.env.GITHUB_EVENT_PATH);
    const PR_NUMBER = event.pull_request.number;
    const SHORT_SHA = GITHUB_SHA.slice(0, 7);

    // Construct S3 URL for storybook preview
    const storybookUrl = `https://${AWS_S3_BUCKET}.s3.${AWS_REGION}.amazonaws.com/${GITHUB_REPOSITORY}/${PR_NUMBER}/storybook-build/index.html`;

    // Create comment body with markdown formatting
    const commentBody = `
## 🎨 Storybook Preview Ready [${SHORT_SHA}]

### 🔍 Preview Links
- [View Storybook](${storybookUrl})

### 📝 Details
- **PR**: #${PR_NUMBER}
- **Commit**: ${SHORT_SHA}
- **Build Type**: Pull Request Preview
    `;

    const POST_COMMENT_URI = `https://api.github.com/repos/${GITHUB_REPOSITORY}/issues/${PR_NUMBER}/comments`;

    console.log(`Posting preview comment to PR #${PR_NUMBER}`);

    const response = await fetch(POST_COMMENT_URI, {
      method: 'POST',
      body: JSON.stringify({ body: commentBody }),
      headers: {
        'User-Agent': 'metamaskbot',
        Authorization: `token ${GITHUB_TOKEN}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to post comment: ${response.statusText}`);
    }

    console.log('Successfully posted preview comment');
  } catch (error) {
    console.error('Error in announceBuild:', error);
    throw error;
  }
}

// Execute the announcement
announceBuild().catch((error) => {
  console.error('Script failed:', error);
  process.exit(1);
});
