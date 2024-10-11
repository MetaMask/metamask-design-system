import type { Config } from 'tailwindcss';

import { colors } from './colors';
import { shadows } from './shadows';
import { typography } from './typography';

const tailwindConfig: Config = {
  content: ['./node_modules/@metamask/ui/src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      ...colors,
      ...typography,
      ...shadows,
    },
  },
  plugins: [],
};

export default tailwindConfig;

module.exports = tailwindConfig;
