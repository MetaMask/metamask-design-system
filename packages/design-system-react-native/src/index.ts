// index.ts

import ButtonComponent from './components/Button';
import { withThemeProvider } from './hocs/withThemeProvider';

// Wrap the Button component
export const Button = withThemeProvider(ButtonComponent);

// Export other components similarly
// import OtherComponent from './components/OtherComponent';
// export const OtherComponent = withThemeProvider(OtherComponent);
