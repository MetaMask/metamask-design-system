import '@testing-library/jest-dom';

import { iconLoaders } from './src/components/Icon/icons';

// Preload all icon modules so React.lazy resolves synchronously in tests.
// Production code still lazy-loads icons for per-icon code splitting.
beforeAll(async () => {
  await Promise.all(Object.values(iconLoaders).map((loader) => loader()));
});
