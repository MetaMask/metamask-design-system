import '@testing-library/jest-dom';

import { preloadIconsForTests } from './src/components/Icon/Icon.registry';

// Preload all icon modules once per Jest worker so Icon renders synchronously
// in tests. Production code still lazy-loads icons for per-icon code splitting.
beforeAll(async () => {
  await preloadIconsForTests();
});
