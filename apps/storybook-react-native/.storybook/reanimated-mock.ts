/**
 * Inline ESM stub for react-native-reanimated in the web Storybook build.
 *
 * See `.storybook/main.ts` (the alias entry pointing to this file) for the
 * full root-cause analysis and links to upstream issues. Summary:
 *
 *   Reanimated 4 ships a web implementation, but vite-plugin-rnw does not
 *   resolve `.web.js` for directory index imports during esbuild pre-
 *   bundling. The native ReanimatedModule loads in the browser and crashes
 *   module initialization, leaving Reanimated's default export undefined.
 *
 *   Tracked: https://github.com/dannyhw/vite-plugin-rnw/issues/13
 *            https://github.com/storybookjs/storybook/issues/34768
 *
 * This stub provides no-op / pass-through implementations of every API used
 * by `design-system-react-native` components and by `react-native-gesture-
 * handler` (which calls into Reanimated via require namespace access).
 * Components render in their initial, non-animated state.
 *
 * Limitations: anything driven by `useSharedValue` re-renders (BottomSheet
 * slide-in, scroll-linked animations, gesture transforms) appears static.
 * iOS Storybook is the source of truth for interactive testing.
 *
 * Remove this file and the alias in `.storybook/main.ts` once either upstream
 * issue ships a fix.
 */
import React from 'react';
import { View, Text, ScrollView, Image, FlatList } from 'react-native';

// ─── Types ───────────────────────────────────────────────────────────────────

export type SharedValue<T> = { value: T };
export type AnimatedStyle<T = object> = T;
export type AnimatedRef<T> = { current: T | null };
export type AnimatableValue = number | string;

// ─── Shared values ────────────────────────────────────────────────────────────

export const useSharedValue = <T>(init: T): SharedValue<T> => {
  // React ref keeps value stable across renders
  const ref = React.useRef<{ value: T }>({ value: init });
  return ref.current;
};

export const makeMutable = <T>(init: T): SharedValue<T> => ({ value: init });

// ─── Style hooks ──────────────────────────────────────────────────────────────

export const useAnimatedStyle = (cb: () => object, _deps?: unknown[]): object =>
  cb();

export const useAnimatedProps = (cb: () => object, _deps?: unknown[]): object =>
  cb();

export const useDerivedValue = <T>(cb: () => T, _deps?: unknown[]): SharedValue<T> =>
  ({ value: cb() });

export const useAnimatedScrollHandler = () => ({});
export const useAnimatedRef = <T>(): AnimatedRef<T> => ({ current: null });
export const useAnimatedReaction = () => {};
export const useScrollViewOffset = () => ({ value: 0 });
// Used by react-native-gesture-handler's GestureDetector via require() namespace
// access (Reanimated.useEvent). Return value is passed as onGestureHandlerEvent
// prop with no methods called on it, so an empty object is sufficient.
export const useEvent = () => ({});

// ─── Animation factories ──────────────────────────────────────────────────────

export const withTiming = (val: unknown) => val;
export const withSpring = (val: unknown) => val;
export const withDecay = () => 0;
export const withDelay = (_delay: unknown, val: unknown) => val;
export const withRepeat = (val: unknown) => val;
export const withSequence = (...vals: unknown[]) => vals[vals.length - 1];
export const withClamp = (_opts: unknown, val: unknown) => val;
export const cancelAnimation = () => {};
export const stopAnimation = () => {};

// ─── Easing ───────────────────────────────────────────────────────────────────

const _id = (t: number) => t;
export const Easing = {
  linear: _id,
  ease: _id,
  quad: _id,
  cubic: _id,
  poly: () => _id,
  sin: _id,
  circle: _id,
  exp: _id,
  elastic: () => _id,
  back: () => _id,
  bounce: _id,
  bezier: () => _id,
  bezierFn: () => _id,
  in: (fn: typeof _id) => fn,
  out: (fn: typeof _id) => fn,
  inOut: (fn: typeof _id) => fn,
  steps: () => _id,
};

// ─── Threading ────────────────────────────────────────────────────────────────

export const runOnJS = <T extends (...args: unknown[]) => unknown>(fn: T): T => fn;
export const runOnUI = <T extends (...args: unknown[]) => unknown>(fn: T): T => fn;
export const runOnUIAsync = <T extends (...args: unknown[]) => unknown>(fn: T): T => fn;

// ─── Utilities ────────────────────────────────────────────────────────────────

export const interpolate = (
  value: number,
  inputRange: number[],
  outputRange: number[],
): number => {
  const i = inputRange.findIndex((v) => v >= value);
  if (i <= 0) return outputRange[0];
  if (i >= inputRange.length) return outputRange[outputRange.length - 1];
  const t = (value - inputRange[i - 1]) / (inputRange[i] - inputRange[i - 1]);
  return outputRange[i - 1] + t * (outputRange[i] - outputRange[i - 1]);
};

export const interpolateColor = () => 'transparent';
export const convertToRGBA = () => [0, 0, 0, 1];
export const processColor = (color: unknown) => color;
export const isColor = () => false;

export const scrollTo = () => {};
export const measure = () => null;
export const getRelativeCoords = () => null;

export const isSharedValue = () => false;

// ─── Animated component factory ───────────────────────────────────────────────

function createAnimatedComponent<T extends React.ComponentType<any>>(
  Component: T,
): T {
  return Component;
}

// ─── Animated namespace (default export) ──────────────────────────────────────

const Animated = {
  View,
  Text,
  ScrollView,
  Image,
  FlatList,
  createAnimatedComponent,
};

export default Animated;
export { createAnimatedComponent };

// ─── Misc re-exports ──────────────────────────────────────────────────────────

export const ReduceMotion = { Never: 'never', Always: 'always', System: 'system' };
export const SensorType = {};
export const IOSReferenceFrame = {};
export const InterfaceOrientation = {};
export const KeyboardState = {};

export const setUpTests = () => {};
export const withReanimatedTimer = (cb: () => void) => cb();
export const advanceAnimationByFrame = () => {};
export const advanceAnimationByTime = () => {};
export const getAnimatedStyle = () => ({});
export const Extrapolation = { CLAMP: 'clamp', EXTEND: 'extend', IDENTITY: 'identity' };

