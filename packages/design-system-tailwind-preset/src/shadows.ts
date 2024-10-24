import plugin from 'tailwindcss/plugin';

export const shadows = {
  xs: 'var(--shadow-size-xs) var(--shadow-color, var(--color-shadow-default))',
  sm: 'var(--shadow-size-sm) var(--shadow-color, var(--color-shadow-default))',
  md: 'var(--shadow-size-md) var(--shadow-color, var(--color-shadow-default))',
  lg: 'var(--shadow-size-lg) var(--shadow-color, var(--color-shadow-default))',
};

export const shadowColors = {
  default: 'var(--color-shadow-default)',
  primary: 'var(--color-shadow-primary)',
  error: 'var(--color-shadow-error)',
};

// Define and export the shadow plugin
export const shadowPlugin = plugin(function ({
  addUtilities,
}: {
  addUtilities: (
    utilities: Record<string, Record<string, string>>,
    options?: Partial<{
      respectPrefix: boolean;
      respectImportant: boolean;
    }>,
  ) => void;
}) {
  const shadowColorUtilities: Record<string, Record<string, string>> = {};

  Object.entries(shadowColors).forEach(([key, value]) => {
    shadowColorUtilities[`.shadow-${key}`] = {
      '--shadow-color': value, // This ensures that --shadow-color is set to the correct color value
    };
  });

  // Add the utilities with Tailwind’s addUtilities method
  addUtilities(shadowColorUtilities, {
    respectPrefix: false,
    respectImportant: true,
  });
});
