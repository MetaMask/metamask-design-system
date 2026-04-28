/**
 * Determines the appropriate contrast text color (black or white) based on the given background color.
 * The function takes into account the alpha transparency of the hex color, blending it with the background color if necessary.
 *
 * @param hexcolor - The hex color code which may include alpha transparency (e.g., '#RRGGBBAA').
 * @param backgroundColor - The hex color code of the default background color hexcolor will appear on (e.g., '#RRGGBB').
 * @returns Returns 'black' if the contrast is better with black text, otherwise returns 'white'.
 */
export const getContrastYIQ = (
  hexcolor: string,
  backgroundColor: string,
): string => {
  // Remove the '#' from the hex color if present
  const modifiedHexcolor = hexcolor.replace('#', '');

  // Variables to store the red, green, blue, and alpha values
  let red: number;
  let green: number;
  let blue: number;
  let a = 1; // Default alpha value is 1 (fully opaque)

  // Check if the hex color includes alpha transparency
  if (modifiedHexcolor.length === 8) {
    // If alpha is present (RRGGBBAA)
    red = parseInt(modifiedHexcolor.slice(0, 2), 16);
    green = parseInt(modifiedHexcolor.slice(2, 4), 16);
    blue = parseInt(modifiedHexcolor.slice(4, 6), 16);
    a = parseInt(modifiedHexcolor.slice(6, 8), 16) / 255; // Convert alpha to a range of 0 to 1
  } else {
    // If no alpha is present (RRGGBB)
    red = parseInt(modifiedHexcolor.slice(0, 2), 16);
    green = parseInt(modifiedHexcolor.slice(2, 4), 16);
    blue = parseInt(modifiedHexcolor.slice(4, 6), 16);
  }

  // Extract the RGB values from the background color
  const bgR = parseInt(backgroundColor.slice(1, 3), 16);
  const bgG = parseInt(backgroundColor.slice(3, 5), 16);
  const bgB = parseInt(backgroundColor.slice(5, 7), 16);

  // Blend the text color with the background color based on the alpha value
  red = Math.round(red * a + (1 - a) * bgR);
  green = Math.round(green * a + (1 - a) * bgG);
  blue = Math.round(blue * a + (1 - a) * bgB);

  // Calculate the YIQ value to determine the brightness
  const yiq = (red * 299 + green * 587 + blue * 114) / 1000;

  // Return 'black' if the YIQ value is 128 or greater, otherwise return 'white'
  return yiq >= 128 ? 'black' : 'white';
};
