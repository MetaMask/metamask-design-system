/* eslint-disable @typescript-eslint/no-var-requires, @typescript-eslint/no-require-imports */
import { lightTheme } from './lightTheme';

const jsonLightThemeTokens = require('../../../figma/lightTheme.json');
const designTokens = require('../../../figma/tokens.json');

describe('Light Theme', () => {
  it('color tokens are exported from lightTheme by checking a random color token', () => {
    expect(
      lightTheme.colors.background.defaultHover.toLowerCase(),
    ).toStrictEqual(
      jsonLightThemeTokens.background['default-hover'].value.toLowerCase(),
    );
  });

  it('typography tokens are exported from lightTheme by checking first typography token', () => {
    expect(lightTheme.typography.sDisplayMD.fontFamily).toStrictEqual(
      designTokens.global.fontFamilies['centra-no1'].value,
    );
  });

  it('shadow tokens are exported from lightTheme by checking first shadow size object', () => {
    const shadowColor = lightTheme.shadows.size.xs.shadowColor.toLowerCase();
    const expectedShadowColor =
      jsonLightThemeTokens.shadow.default.value.toLowerCase();

    expect({
      ...lightTheme.shadows.size.xs,
      shadowColor,
    }).toStrictEqual({
      shadowColor: expectedShadowColor,
      shadowOffset: {
        width: Number(designTokens.light.shadows.xs.value.x),
        height: Number(designTokens.light.shadows.xs.value.y),
      },
      shadowOpacity: 1,
      shadowRadius: Number(designTokens.light.shadows.xs.value.blur),
    });
  });
});
