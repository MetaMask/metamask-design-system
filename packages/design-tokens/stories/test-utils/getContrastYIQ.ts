/**
 * Determines the appropriate contrast text color (black or white) based on the given background color.
 * The function takes into account the alpha transparency of the hex color, blending it with the background color if necessary.
 *
 * @param hexcolor - The hex color code which may include alpha transparency (e.g., '#RRGGBBAA').
 * @param backgroundColor - The hex color code of the default background color hexcolor will appear on (e.g., '#RRGGBB').
 * @returns Returns 'black' if the contrast is better with black text, otherwise returns 'white'.
 */
/**
 * Expands shorthand hex (e.g. 'fff' → 'ffffff', 'f0fa' → 'ff00ffaa').
 *
 * @param hex - A hex color string without the '#' prefix.
 * @returns The expanded 6 or 8 character hex string.
 */
const expandHex = (hex: string): string =>
  hex.length <= 4
    ? hex
        .split('')
        .map((c) => c + c)
        .join('')
    : hex;

export const getContrastYIQ = (
  hexcolor: string,
  backgroundColor: string,
): string => {
  const modifiedHexcolor = expandHex(hexcolor.replace('#', ''));

  const bgHex = expandHex(backgroundColor.replace('#', ''));

  let red = parseInt(modifiedHexcolor.slice(0, 2), 16);
  let green = parseInt(modifiedHexcolor.slice(2, 4), 16);
  let blue = parseInt(modifiedHexcolor.slice(4, 6), 16);
  const a =
    modifiedHexcolor.length === 8
      ? parseInt(modifiedHexcolor.slice(6, 8), 16) / 255
      : 1;

  const bgR = parseInt(bgHex.slice(0, 2), 16);
  const bgG = parseInt(bgHex.slice(2, 4), 16);
  const bgB = parseInt(bgHex.slice(4, 6), 16);

  red = Math.round(red * a + (1 - a) * bgR);
  green = Math.round(green * a + (1 - a) * bgG);
  blue = Math.round(blue * a + (1 - a) * bgB);

  const yiq = (red * 299 + green * 587 + blue * 114) / 1000;
  return yiq >= 128 ? 'black' : 'white';
};
