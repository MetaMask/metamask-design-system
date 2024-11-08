import { readFileSync } from 'fs';
import { resolve } from 'path';

const lightThemePath = resolve(__dirname, '../figma/lightTheme.json');
const lightThemeCSSPath = resolve(__dirname, 'light-theme-colors.css');

const lightTheme = JSON.parse(readFileSync(lightThemePath, 'utf8'));
const lightThemeCSS = readFileSync(lightThemeCSSPath, 'utf8');

describe('Light Theme Colors CSS', () => {
  for (const section in lightTheme) {
    if (Object.prototype.hasOwnProperty.call(lightTheme, section)) {
      for (const key in lightTheme[section]) {
        if (Object.prototype.hasOwnProperty.call(lightTheme[section], key)) {
          const variableName = `--color-${section}-${key.replace(/_/gu, '-')}`;
          const { value } = lightTheme[section][key];

          let cssValue: string;
          if (value.startsWith('{')) {
            const parts: string[] = value.slice(1, -1).split('.');
            const color: string | undefined = parts[0];
            const shade: string | undefined = parts[1];
            if (color && shade) {
              cssValue = `var(--brand-colors-${color}-${color}${shade})`;
            } else {
              throw new Error(`Invalid color or shade: ${value as string}`);
            }
          } else {
            cssValue = value;
          }

          it(`should have the correct value for ${variableName}`, () => {
            expect(lightThemeCSS).toContain(`${variableName}: ${cssValue};`);
          });
        }
      }
    }
  }
});
