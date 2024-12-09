/* eslint-disable @typescript-eslint/no-var-requires, @typescript-eslint/no-require-imports */
import { shadows } from './shadows';

const jsonLightThemeTokens = require('../../../figma/lightTheme.json');
const designTokens = require('../../../figma/tokens.json');

describe('Shadows', () => {
  it('js tokens shadows.size.xs matches figma tokens shadows.xs', () => {
    expect(shadows.size.xs.shadowColor.toLowerCase()).toStrictEqual(
      jsonLightThemeTokens.shadow.default.value.toLowerCase(),
    );

    expect(shadows.size.xs.shadowOffset.width).toStrictEqual(
      Number(designTokens.light.shadows.xs.value.x),
    );

    expect(shadows.size.xs.shadowOffset.height).toStrictEqual(
      Number(designTokens.light.shadows.xs.value.y),
    );

    expect(shadows.size.xs.shadowOpacity).toBe(1);

    expect(shadows.size.xs.shadowRadius).toStrictEqual(
      Number(designTokens.light.shadows.xs.value.blur),
    );
  });

  it('js tokens shadows.size.sm matches figma tokens shadows.sm', () => {
    expect(shadows.size.sm.shadowColor.toLowerCase()).toStrictEqual(
      jsonLightThemeTokens.shadow.default.value.toLowerCase(),
    );

    expect(shadows.size.sm.shadowOffset.width).toStrictEqual(
      Number(designTokens.light.shadows.sm.value.x),
    );

    expect(shadows.size.sm.shadowOffset.height).toStrictEqual(
      Number(designTokens.light.shadows.sm.value.y),
    );

    expect(shadows.size.sm.shadowOpacity).toBe(1);

    expect(shadows.size.sm.shadowRadius).toStrictEqual(
      Number(designTokens.light.shadows.sm.value.blur),
    );
  });

  it('js tokens shadows.size.md matches figma tokens shadows.md', () => {
    expect(shadows.size.md.shadowColor.toLowerCase()).toStrictEqual(
      jsonLightThemeTokens.shadow.default.value.toLowerCase(),
    );

    expect(shadows.size.md.shadowOffset.width).toStrictEqual(
      Number(designTokens.light.shadows.md.value.x),
    );

    expect(shadows.size.md.shadowOffset.height).toStrictEqual(
      Number(designTokens.light.shadows.md.value.y),
    );

    expect(shadows.size.md.shadowOpacity).toBe(1);

    expect(shadows.size.md.shadowRadius).toStrictEqual(
      Number(designTokens.light.shadows.md.value.blur),
    );
  });

  it('js tokens shadows.size.lg matches figma tokens shadows.lg', () => {
    expect(shadows.size.lg.shadowColor.toLowerCase()).toStrictEqual(
      jsonLightThemeTokens.shadow.default.value.toLowerCase(),
    );

    expect(shadows.size.lg.shadowOffset.width).toStrictEqual(
      Number(designTokens.light.shadows.lg.value.x),
    );

    expect(shadows.size.lg.shadowOffset.height).toStrictEqual(
      Number(designTokens.light.shadows.lg.value.y),
    );

    expect(shadows.size.lg.shadowOpacity).toBe(1);

    expect(shadows.size.lg.shadowRadius).toStrictEqual(
      Number(designTokens.light.shadows.lg.value.blur),
    );
  });
});
