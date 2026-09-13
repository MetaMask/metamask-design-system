/**
 * Storybook web shim for expo-image.
 *
 * expo-image pulls in expo-modules-core, whose ts-declarations use type-only
 * exports that Rolldown cannot pre-bundle. For browser-based Storybook tests we
 * only need raster rendering, so delegate to react-native-web's Image (same as
 * packages/design-system-react-native/jest.setup.js).
 */
import { Image as RNImage } from 'react-native';

export const Image = RNImage;
export const ImageBackground = RNImage;

export function useImage() {
  return { image: null, error: null, isLoading: false };
}
