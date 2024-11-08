/* eslint-disable @typescript-eslint/no-var-requires, @typescript-eslint/no-require-imports */
import { darkTheme } from './darkTheme';

const jsonDarkThemeTokens = require('../../../figma/darkTheme.json');
const designTokens = require('../../../figma/tokens.json');

describe('dark Theme', () => {
  it('color tokens are exported from darkTheme by checking a random color token', () => {
    expect(
      darkTheme.colors.background.defaultHover.toLowerCase(),
    ).toStrictEqual(jsonDarkThemeTokens.background['default-hover'].value);
  });

  it('typography tokens are exported from darkTheme by checking first typography token', () => {
    expect(darkTheme.typography.sDisplayMD.fontFamily).toStrictEqual(
      designTokens.global.fontFamilies['euclid-circular-b'].value,
    );
  });

  it('shadow tokens are exported from darkTheme by checking first shadow size object', () => {
    expect(darkTheme.shadows.size.xs).toStrictEqual({
      shadowColor: jsonDarkThemeTokens.shadow.default.value,
      shadowOffset: {
        width: Number(designTokens.dark.shadows.xs.value.x),
        height: Number(designTokens.dark.shadows.xs.value.y),
      },
      shadowOpacity: 1,
      shadowRadius: Number(designTokens.dark.shadows.xs.value.blur),
    });
  });
});
