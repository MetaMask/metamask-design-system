import type { Config } from 'tailwindcss';

import { colors } from './colors';

const tailwindConfig: Config = {
  content: [],
  theme: {
    extend: {
      ...colors,
    },
  },
  plugins: [],
};

export default tailwindConfig;

module.exports = tailwindConfig;
