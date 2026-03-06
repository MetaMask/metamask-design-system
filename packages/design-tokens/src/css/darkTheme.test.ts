import { readFileSync } from 'fs';
import { resolve } from 'path';

const darkThemePath = resolve(__dirname, '../figma/darkTheme.json');
const darkThemeCSSPath = resolve(__dirname, 'dark-theme-colors.css');

const darkTheme = JSON.parse(readFileSync(darkThemePath, 'utf8'));
const darkThemeCSS = readFileSync(darkThemeCSSPath, 'utf8');

describe('Dark Theme Colors CSS', () => {
  for (const section in darkTheme) {
    if (Object.prototype.hasOwnProperty.call(darkTheme, section)) {
      for (const key in darkTheme[section]) {
        if (Object.prototype.hasOwnProperty.call(darkTheme[section], key)) {
          const variableName = `--color-${section}-${key.replace(/_/gu, '-')}`;
          const { value } = darkTheme[section][key];

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
            cssValue = value.toLowerCase();
          }

          it(`should have the correct value for ${variableName}`, () => {
            expect(darkThemeCSS.toLowerCase()).toContain(
              `${variableName}: ${cssValue};`.toLowerCase(),
            );
          });
        }
      }
    }
  }
});
