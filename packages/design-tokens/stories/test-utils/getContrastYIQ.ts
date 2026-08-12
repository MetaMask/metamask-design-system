type Rgba = {
  red: number;
  green: number;
  blue: number;
  alpha: number;
};

/**
 * Expands 3/4-digit hex to 6/8-digit form. Leaves other color strings unchanged.
 *
 * @param value - A CSS color string.
 * @returns Long-form hex when given short hex; otherwise the original value.
 */
const expandShortHex = (value: string): string => {
  const match = /^#([0-9a-f]{3,4})$/iu.exec(value.trim());
  if (!match?.[1]) {
    return value.trim();
  }

  return `#${[...match[1]].map((char) => `${char}${char}`).join('')}`;
};

/**
 * Parses a CSS color into RGBA channel values.
 *
 * Supports `transparent`, `#RGB(A)`, `#RRGGBB(AA)`, `rgb()`, and `rgba()`.
 *
 * @param value - A CSS color string.
 * @returns Parsed channels, or null when the format is unsupported.
 */
const parseCssColor = (value: string): Rgba | null => {
  const trimmed = value.trim().toLowerCase();

  if (trimmed === 'transparent') {
    return { red: 0, green: 0, blue: 0, alpha: 0 };
  }

  const hex = expandShortHex(trimmed).replace('#', '');
  if (/^[0-9a-f]{6}$/u.test(hex)) {
    return {
      red: parseInt(hex.slice(0, 2), 16),
      green: parseInt(hex.slice(2, 4), 16),
      blue: parseInt(hex.slice(4, 6), 16),
      alpha: 1,
    };
  }
  if (/^[0-9a-f]{8}$/u.test(hex)) {
    return {
      red: parseInt(hex.slice(0, 2), 16),
      green: parseInt(hex.slice(2, 4), 16),
      blue: parseInt(hex.slice(4, 6), 16),
      alpha: parseInt(hex.slice(6, 8), 16) / 255,
    };
  }

  const rgbMatch =
    /^rgba?\(\s*([0-9.]+)\s*,\s*([0-9.]+)\s*,\s*([0-9.]+)(?:\s*,\s*([0-9.]+))?\s*\)$/u.exec(
      trimmed,
    );
  if (rgbMatch) {
    return {
      red: Number(rgbMatch[1]),
      green: Number(rgbMatch[2]),
      blue: Number(rgbMatch[3]),
      alpha: rgbMatch[4] === undefined ? 1 : Number(rgbMatch[4]),
    };
  }

  return null;
};

/**
 * Determines the appropriate contrast text color (black or white) based on the given background color.
 * The function takes into account the alpha transparency of the color, blending it with the background color if necessary.
 *
 * @param color - CSS color which may include alpha transparency
 * (e.g. `transparent`, `#RGB`, `#RGBA`, `#RRGGBB`, `#RRGGBBAA`, `rgb()`, `rgba()`).
 * @param backgroundColor - The color the swatch appears on (e.g. `#RRGGBB`).
 * @returns Returns 'black' if the contrast is better with black text, otherwise returns 'white'.
 */
export const getContrastYIQ = (
  color: string,
  backgroundColor: string,
): string => {
  const foreground = parseCssColor(color) ??
    parseCssColor(backgroundColor) ?? {
      red: 255,
      green: 255,
      blue: 255,
      alpha: 1,
    };
  const background = parseCssColor(backgroundColor) ?? {
    red: 255,
    green: 255,
    blue: 255,
    alpha: 1,
  };

  // Blend the foreground with the background based on alpha (transparent → background only)
  const red = Math.round(
    foreground.red * foreground.alpha + (1 - foreground.alpha) * background.red,
  );
  const green = Math.round(
    foreground.green * foreground.alpha +
      (1 - foreground.alpha) * background.green,
  );
  const blue = Math.round(
    foreground.blue * foreground.alpha +
      (1 - foreground.alpha) * background.blue,
  );

  const yiq = (red * 299 + green * 587 + blue * 114) / 1000;

  return yiq >= 128 ? 'black' : 'white';
};
