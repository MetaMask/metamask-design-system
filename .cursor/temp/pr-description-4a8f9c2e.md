## **Description**

Removes the DOMPurify dependency from the Maskicon component by replacing the direct SVG injection approach with a safer data URI implementation. The component now renders an `<img>` element with an encoded SVG data URI instead of using `dangerouslySetInnerHTML`, eliminating the need for HTML sanitization while maintaining the same visual output and improving security.

## **Related issues**

Fixes: <!-- Add issue links if applicable -->

## **Manual testing steps**

1. Navigate to the Maskicon component in Storybook
2. Verify that Maskicon renders correctly with various Ethereum addresses
3. Test different size props to ensure proper scaling
4. Confirm that custom props (data-testid, styles) are properly forwarded to the img element
5. Run `yarn workspace @metamask/design-system-react test:verbose src/components/temp-components/Maskicon/Maskicon.test.tsx` to verify all tests pass

## **Screenshots/Recordings**

<!-- Visual changes are minimal as the component renders the same SVG content, just through an img element instead of direct injection -->

### **Before**

<!-- Component rendered SVG directly in a div using dangerouslySetInnerHTML with DOMPurify -->

### **After**

<!-- Component renders SVG via img element with data URI, maintaining identical visual appearance -->

## **Pre-merge author checklist**

- [x] I've followed [MetaMask Contributor Docs](https://github.com/MetaMask/contributor-docs)
- [x] I've completed the PR template to the best of my ability
- [x] I've included tests if applicable
- [x] I've documented my code using [JSDoc](https://jsdoc.app/) format if applicable
- [ ] I've applied the right labels on the PR (see [labeling guidelines](https://github.com/MetaMask/metamask-extension/blob/develop/.github/guidelines/LABELING_GUIDELINES.md)). Not required for external contributors.

## **Pre-merge reviewer checklist**

- [ ] I've manually tested the PR (e.g. pull and build branch, run the app, test code being changed).
- [ ] I confirm that this PR addresses all acceptance criteria described in the ticket it closes and includes the necessary testing evidence such as recordings and or screenshots.
