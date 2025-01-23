# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [5.0.0]

### Added

- **BREAKING:** Following the unintentional breaking change in `4.2.0` we are now exporting the types from root index instead of requiring deep imports ([#340](https://github.com/MetaMask/metamask-design-system/pull/340)). See the [migration guide](./MIGRATION.md#from-version-410-to-500) for details.

- Added 8 new colors (4 muted-hover & 4 muted-pressed) to design-tokens Figma Json. ([#325](https://github.com/MetaMask/metamask-design-system/pull/325))

## [4.2.0]

### Added

- feat: color updates to the design tokens package ([#230](https://github.com/metamask/metamask-design-system/pull/230))

- **BREAKING:** `@metamask/design-tokens` package migrated from standalone repository into the design system monorepo, which unintentionally broke type imports ([128](https://github.com/MetaMask/metamask-design-system/pull/128)). See the [migration guide](./MIGRATION.md#from-version-410-to-500) for details on the fix in 5.0.0.

## [4.1.0]

### Added

- Adding (MIT OR Apache 2.0) license aligning with MetaMask's open-source standards ([#738](https://github.com/MetaMask/design-tokens/pull/738))
- Adding dark/light classname ([#729](https://github.com/MetaMask/design-tokens/pull/729))

## [4.0.0]

### Changed

- chore: updated js variables based on updated json ([#709](https://github.com/MetaMask/design-tokens/pull/709))
- chore: updated css variables based on updated json ([#708](https://github.com/MetaMask/design-tokens/pull/708))
- chore: adding overlay.inverse colors to json ([#715](https://github.com/MetaMask/design-tokens/pull/715))
- chore: upgrading storybook to 8.1.4 ([#703](https://github.com/MetaMask/design-tokens/pull/703))
- chore: updating doc components and helpers ([#706](https://github.com/MetaMask/design-tokens/pull/706))
- fix: updating brand color figma json ([#702](https://github.com/MetaMask/design-tokens/pull/702))

## [3.0.0]

### Added

- Enabled MetaMask security code scanner ([#635](https://github.com/MetaMask/design-tokens/pull/635)).
- Added initial JSON generated from Figma ([#665](https://github.com/MetaMask/design-tokens/pull/665)).

### Changed

- Refactored color swatch component and CSS stories to use CSS variables instead of hex values ([#696](https://github.com/MetaMask/design-tokens/pull/696)).
- Upgraded Storybook to 8.1.2 ([#690](https://github.com/MetaMask/design-tokens/pull/690)).
- Updated README to add tooling section that links to eslint-plugin ([#689](https://github.com/MetaMask/design-tokens/pull/689)).
- Cleaned JSON token names ([#679](https://github.com/MetaMask/design-tokens/pull/679)).
- Refactored CSS and improved build to adhere to workspace conventions ([#676](https://github.com/MetaMask/design-tokens/pull/676)).
- Upgraded Storybook to version 8 ([#674](https://github.com/MetaMask/design-tokens/pull/674)).
- Added initial JSON generated from Figma variables ([#673](https://github.com/MetaMask/design-tokens/pull/673)).
- Upgraded LavaMoat ([#670](https://github.com/MetaMask/design-tokens/pull/670)).
- Aligned release docs with the latest standards ([#634](https://github.com/MetaMask/design-tokens/pull/634)).

### Fixed

- Fixed CSS theme variables doc display ([#672](https://github.com/MetaMask/design-tokens/pull/672)).
- Fixed build to align with module template ([#667](https://github.com/MetaMask/design-tokens/pull/667)).

### Security

- Bumped `webpack-dev-middleware` from 6.1.1 to 6.1.2 ([#636](https://github.com/MetaMask/design-tokens/pull/636)).
- Bumped `express` from 4.18.2 to 4.19.2 ([#638](https://github.com/MetaMask/design-tokens/pull/638)).
- Bumped `tar` from 6.2.0 to 6.2.1 ([#652](https://github.com/MetaMask/design-tokens/pull/652)).

## [2.1.1]

### Changed

- fix: move data attribute to light theme variables ([#631](https://github.com/MetaMask/design-tokens/pull/631))
- Bump ip from 2.0.0 to 2.0.1 ([#630](https://github.com/MetaMask/design-tokens/pull/630))

## [2.1.0]

### Changed

- feat: adding data theme light attribute to stylesheet to provide dynamic theming ([#627](https://github.com/MetaMask/design-tokens/pull/627))

## [2.0.3]

### Changed

- chore: updating package.json css path ([#622](https://github.com/MetaMask/design-tokens/pull/622))

## [2.0.2]

### Changed

- bug: fix css exports ([#614](https://github.com/MetaMask/design-tokens/pull/614))

## [2.0.1]

### Changed

- chore: updating package.json and constraints.pro config to allow for css export ([#609](https://github.com/MetaMask/design-tokens/pull/609))

## [2.0.0]

### Changed

- Dependencies upgrade and module template sync ([#601](https://github.com/MetaMask/design-tokens/pull/601))

## [1.13.0]

### Changed

- Adding CSS and JS token display in storybook ([#594](https://github.com/MetaMask/design-tokens/pull/594))
- Refactoring the brand color object ([#585](https://github.com/MetaMask/design-tokens/pull/585))
- Added sets of hover& pressed tokens. Also updated warning/success/inverses ([#586](https://github.com/MetaMask/design-tokens/pull/586))
- Updating documentation ([#593](https://github.com/MetaMask/design-tokens/pull/593))
- Upgrading storybook from 7.5 to 7.6 ([#592](https://github.com/MetaMask/design-tokens/pull/592))
- Revert "Adding brand colors to CSSinJS exports" ([#589](https://github.com/MetaMask/design-tokens/pull/589))
- Enhancements to CircleCI Script and Storybook Build ([#583](https://github.com/MetaMask/design-tokens/pull/583))
- Adding brand colors to CSSinJS exports ([#582](https://github.com/MetaMask/design-tokens/pull/582))
- devDeps: storybook v7 ([#538](https://github.com/MetaMask/design-tokens/pull/538))
- ci: fix build-test workflow ([#539](https://github.com/MetaMask/design-tokens/pull/539))
- Bump @metamask/auto-changelog from 3.4.3 to 3.4.4 ([#571](https://github.com/MetaMask/design-tokens/pull/571))
- bump webpack@4, webpack@5 ([#536](https://github.com/MetaMask/design-tokens/pull/536))
- ci: remove broken require-additional-reviewer workflow ([#537](https://github.com/MetaMask/design-tokens/pull/537))
- Bump @metamask/auto-changelog from 3.4.2 to 3.4.3 ([#544](https://github.com/MetaMask/design-tokens/pull/544))
- Bump @metamask/auto-changelog from 3.4.1 to 3.4.2 ([#542](https://github.com/MetaMask/design-tokens/pull/542))
- Bump @metamask/auto-changelog from 3.3.0 to 3.4.1 ([#541](https://github.com/MetaMask/design-tokens/pull/541))
- Bump decode-uri-component from 0.2.0 to 0.2.2 ([#535](https://github.com/MetaMask/design-tokens/pull/535))
- Bump loader-utils from 1.4.0 to 1.4.2 ([#533](https://github.com/MetaMask/design-tokens/pull/533))
- Bump json5 from 1.0.1 to 1.0.2 ([#534](https://github.com/MetaMask/design-tokens/pull/534))
- Bump @babel/traverse from 7.18.11 to 7.23.2 ([#532](https://github.com/MetaMask/design-tokens/pull/532))
- Bump @metamask/auto-changelog from 3.2.0 to 3.3.0 ([#516](https://github.com/MetaMask/design-tokens/pull/516))
- Bump @metamask/auto-changelog from 3.1.0 to 3.2.0 ([#497](https://github.com/MetaMask/design-tokens/pull/497))
- Bump @metamask/auto-changelog from 2.6.1 to 3.1.0 ([#248](https://github.com/MetaMask/design-tokens/pull/248))

## [1.12.0]

### Changed

- Hover & Pressed color updates ([#487](https://github.com/MetaMask/design-tokens/pull/487))
- Add body medium font weight ([#486](https://github.com/MetaMask/design-tokens/pull/486))

## [1.11.1]

### Changed

- Updating primary, error and info colors to meet AA accessibility standards for light mode ([#255](https://github.com/MetaMask/design-tokens/pull/255))
- Adding storybook a11y plugin ([#258](https://github.com/MetaMask/design-tokens/pull/258))

## [1.11.0]

### Changed

- added sepolia test network colors ([#243](https://github.com/MetaMask/design-tokens/pull/243))
- rename action ([#239](https://github.com/MetaMask/design-tokens/pull/239))

## [1.10.0]

### Changed

- Updating descriptions and deprecated tags ([#235](https://github.com/MetaMask/design-tokens/pull/235))
- Adding test network and flask color tokens ([#223](https://github.com/MetaMask/design-tokens/pull/223))
- Hover and pressed color tokens ([#233](https://github.com/MetaMask/design-tokens/pull/233))
- 230 revert to old storybook build and update main branch storybook de… ([#231](https://github.com/MetaMask/design-tokens/pull/231))
- Feat/196/fix gh pages font ([#228](https://github.com/MetaMask/design-tokens/pull/228))

## [1.9.1]

### Changed

- 196: update gh pages storybook build ([#226](https://github.com/MetaMask/design-tokens/pull/226))
- DS-214: add fonts and font awesome to docs ([#217](https://github.com/MetaMask/design-tokens/pull/217))
- Also attempting to fix font for Github pages build of storybook with this release

## [1.9.0]

### Changed

- 210: update typography line height tokens to be REM based ([#211](https://github.com/MetaMask/design-tokens/pull/211))
- Upgrading storybook to 6.5 ([#212](https://github.com/MetaMask/design-tokens/pull/212))
- Replaced Heading-SM-Regular by Body-LG-Medium ([#194](https://github.com/MetaMask/design-tokens/pull/194))
- Updated Light Theme Shadows to match Storybook ([#195](https://github.com/MetaMask/design-tokens/pull/195))

## [1.8.0]

### Changed

- Adding shadows to design tokens ([#137](https://github.com/MetaMask/design-tokens/pull/137))
- Bump @metamask/auto-changelog from 2.6.0 to 2.6.1 ([#178](https://github.com/MetaMask/design-tokens/pull/178))

## [1.7.0]

### Changed

- Adding themes to token architecture for CSS-in-JS ([#148](https://github.com/MetaMask/design-tokens/pull/148))
- Fix for readme badge to show correct version ([#163](https://github.com/MetaMask/design-tokens/pull/163))
- Updating readme with npm and storybook badges ([#150](https://github.com/MetaMask/design-tokens/pull/150))
- Updating typography tests and some token json ([#147](https://github.com/MetaMask/design-tokens/pull/147))
- Fixing wrong token mappings & Naming Typo for Typography ([#144](https://github.com/MetaMask/design-tokens/pull/144))
- Bump @metamask/auto-changelog from 2.5.0 to 2.6.0 ([#142](https://github.com/MetaMask/design-tokens/pull/142))

## [1.6.5]

### Changed

- Update readme ([#120](https://github.com/MetaMask/design-tokens/pull/120))
- [FIX] Update js font weight to string ([#127](https://github.com/MetaMask/design-tokens/pull/127))

## [1.6.4]

### Changed

- Setting storybook folder to root for gh-pages ([#133](https://github.com/MetaMask/design-tokens/pull/133))

## [1.6.3]

### Changed

- Adding homepage to package.json for gh pages ([#131](https://github.com/MetaMask/design-tokens/pull/131))

## [1.6.2]

### Changed

- Adding yarn setup to gh pages action ([#129](https://github.com/MetaMask/design-tokens/pull/129))

## [1.6.1]

### Changed

- Adding storybook pages to publish release action ([#121](https://github.com/MetaMask/design-tokens/pull/121))
- Fixing some case mistakes in figma token json ([#123](https://github.com/MetaMask/design-tokens/pull/123))

## [1.6.0]

### Changed

- Adding initial typography tokens ([#94](https://github.com/MetaMask/design-tokens/pull/94))
- Adding Circle CI and storybook builds for PRs ([#105](https://github.com/MetaMask/design-tokens/pull/105))
- CSS in JS description update ([#104](https://github.com/MetaMask/design-tokens/pull/104))
- Adding icon alternative ([#102](https://github.com/MetaMask/design-tokens/pull/102))
- updated warning.default to #DA8301 ([#99](https://github.com/MetaMask/design-tokens/pull/99))
- Updated Light Theme Color Token descriptions to the latest ([#86](https://github.com/MetaMask/design-tokens/pull/86))
- Updating icon/default and text/alternative colors ([#90](https://github.com/MetaMask/design-tokens/pull/90))

## [1.5.1]

### Changed

- Fixing descriptions for dark theme overlays ([#79](https://github.com/MetaMask/design-tokens/pull/79))

## [1.5.0]

### Changed

- Updating dark theme background and overlay colors ([#72](https://github.com/MetaMask/design-tokens/pull/72))
- background default and background alternative values swapped
- overlays changed to dark for both light and dark themes

## [1.4.4]

### Changed

- Add types and documentation to DS code library ([#61](https://github.com/MetaMask/design-tokens/pull/61))

## [1.4.3]

### Changed

- Fixing secondary default color for CSS in JS ([#57](https://github.com/MetaMask/design-tokens/pull/57))

## [1.4.2]

### Changed

- Fix overlays, muted and disabled alpha channel ([#48](https://github.com/MetaMask/design-tokens/pull/48))

## [1.4.1]

### Changed

- Bump overlay alternative from 75% opacity to 80% ([#46](https://github.com/MetaMask/design-tokens/pull/46))

## [1.4.0]

### Added

- Add overlay alternative color for light and dark themes ([#40](https://github.com/MetaMask/design-tokens/pull/40))
- Updating dark theme overlay.inverse to grey800: #24272A

## [1.3.1]

### Changed

- Token update generate library code ([#39](https://github.com/MetaMask/design-tokens/pull/39))
- Changing hsla to HEX with alpha values. Updating Hex values and documentation.

## [1.3.0]

### Changed

- Changing theme class to data attribute ([#30](https://github.com/MetaMask/design-tokens/pull/30))

## [1.2.0]

### Changed

- token updates ([#22](https://github.com/MetaMask/design-tokens/pull/22))
- Adding storybook and design token documentation ([#19](https://github.com/MetaMask/design-tokens/pull/19))

## [1.1.0]

### Changed

- Adding css stylesheet containing color design tokens ([#17](https://github.com/MetaMask/design-tokens/pull/17))
- Add issue template ([#20](https://github.com/MetaMask/design-tokens/pull/20))

## [1.0.0]

### Changed

- Initial release.

[Unreleased]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-tokens@5.0.0...HEAD
[5.0.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-tokens@4.2.0...@metamask/design-tokens@5.0.0
[4.2.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-tokens@4.1.0...@metamask/design-tokens@4.2.0
[4.1.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-tokens@4.0.0...@metamask/design-tokens@4.1.0
[4.0.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-tokens@3.0.0...@metamask/design-tokens@4.0.0
[3.0.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-tokens@2.1.1...@metamask/design-tokens@3.0.0
[2.1.1]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-tokens@2.1.0...@metamask/design-tokens@2.1.1
[2.1.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-tokens@2.0.3...@metamask/design-tokens@2.1.0
[2.0.3]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-tokens@2.0.2...@metamask/design-tokens@2.0.3
[2.0.2]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-tokens@2.0.1...@metamask/design-tokens@2.0.2
[2.0.1]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-tokens@2.0.0...@metamask/design-tokens@2.0.1
[2.0.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-tokens@1.13.0...@metamask/design-tokens@2.0.0
[1.13.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-tokens@1.12.0...@metamask/design-tokens@1.13.0
[1.12.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-tokens@1.11.1...@metamask/design-tokens@1.12.0
[1.11.1]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-tokens@1.11.0...@metamask/design-tokens@1.11.1
[1.11.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-tokens@1.10.0...@metamask/design-tokens@1.11.0
[1.10.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-tokens@1.9.1...@metamask/design-tokens@1.10.0
[1.9.1]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-tokens@1.9.0...@metamask/design-tokens@1.9.1
[1.9.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-tokens@1.8.0...@metamask/design-tokens@1.9.0
[1.8.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-tokens@1.7.0...@metamask/design-tokens@1.8.0
[1.7.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-tokens@1.6.5...@metamask/design-tokens@1.7.0
[1.6.5]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-tokens@1.6.4...@metamask/design-tokens@1.6.5
[1.6.4]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-tokens@1.6.3...@metamask/design-tokens@1.6.4
[1.6.3]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-tokens@1.6.2...@metamask/design-tokens@1.6.3
[1.6.2]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-tokens@1.6.1...@metamask/design-tokens@1.6.2
[1.6.1]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-tokens@1.6.0...@metamask/design-tokens@1.6.1
[1.6.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-tokens@1.5.1...@metamask/design-tokens@1.6.0
[1.5.1]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-tokens@1.5.0...@metamask/design-tokens@1.5.1
[1.5.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-tokens@1.4.4...@metamask/design-tokens@1.5.0
[1.4.4]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-tokens@1.4.3...@metamask/design-tokens@1.4.4
[1.4.3]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-tokens@1.4.2...@metamask/design-tokens@1.4.3
[1.4.2]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-tokens@1.4.1...@metamask/design-tokens@1.4.2
[1.4.1]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-tokens@1.4.0...@metamask/design-tokens@1.4.1
[1.4.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-tokens@1.3.1...@metamask/design-tokens@1.4.0
[1.3.1]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-tokens@1.3.0...@metamask/design-tokens@1.3.1
[1.3.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-tokens@1.2.0...@metamask/design-tokens@1.3.0
[1.2.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-tokens@1.1.0...@metamask/design-tokens@1.2.0
[1.1.0]: https://github.com/MetaMask/metamask-design-system/compare/@metamask/design-tokens@1.0.0...@metamask/design-tokens@1.1.0
[1.0.0]: https://github.com/MetaMask/metamask-design-system/releases/tag/@metamask/design-tokens@1.0.0
