// Import polyfill for TextEncoder/TextDecoder in React Native
// This dependency is required for text encoding used by `stringToBytes` from @metamask/utils
// in CAIP address processing. It's already installed in mobile via @wallet-connect/react-native
import 'fast-text-encoding';

export * from './components';
