import{j as n}from"./iframe-BknD6R0A.js";import{useMDXComponents as s}from"./index-DH6Ulk9s.js";import{b as i,c as r}from"./blocks-Du73VAkD.js";import"./index-CmxWr2Xc.js";const a=`# Storybook React

Storybook serves as the primary documentation and development environment for the MetaMask design system, showcasing both design tokens and React components. It provides a comprehensive view of our design system's building blocks and their implementation.

## Overview

Storybook instance contains:

- Design Tokens documentation from \`@metamask/design-tokens\`
- React Components documentation from \`@metamask/design-system-react\`

## Running Storybook

To start the Storybook server locally, run the following command:

\`\`\`bash
yarn storybook
\`\`\`

For React Native components, please use:

\`\`\`bash
yarn storybook:ios
\`\`\`

## Accessibility Testing

Our Storybook setup includes accessibility testing capabilities. See [Accessibility Testing Documentation](../../docs/accessibility-testing.md).

Quick start:

\`\`\`bash
# Run storybook
yarn storybook
\`\`\`

\`\`\`bash
# In a new terminal run accessibility tests for all components
yarn test:storybook

# Run tests for a specific component
yarn test:storybook "ComponentName"
\`\`\`
`;function e(t){return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"Getting Started / Introduction"}),`
`,n.jsx(r,{children:a})]})}function d(t={}){const{wrapper:o}={...s(),...t.components};return o?n.jsx(o,{...t,children:n.jsx(e,{...t})}):e()}export{d as default};
