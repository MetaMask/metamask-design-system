module.exports = {
  typescript: true,
  dimensions: false,
  ref: true,
  svgProps: {
    fill: 'currentColor',
  },
  template: require('./template').default,
  svgoConfig: {
    plugins: [
      {
        name: 'preset-default',
        params: {
          overrides: {
            removeViewBox: false,
          },
        },
      },
      {
        name: 'addAttributesToSVGElement',
        params: {
          attributes: [{ fill: 'currentColor' }],
        },
      },
    ],
  },
};
