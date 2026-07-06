// Package entry re-exports the public component API. Keep this file free of side-effect
// imports (e.g. polyfills): they mark the barrel as side-effectful, which causes Vite/Rolldown
// to eagerly initialize unrelated modules in Storybook static builds and can race on cold CDN
// loads (React error #130). TextEncoder is provided natively by Hermes (RN >= 0.76).
export * from './components';
