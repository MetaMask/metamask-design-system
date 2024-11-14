declare const config: {
  content: string[];
  theme: {
    extend: {
      colors: Record<string, string>;
    };
  };
  plugins: unknown[];
};

export default config;
