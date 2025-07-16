const config = require('./dist/tailwind.config.cjs');

module.exports = config.default;
module.exports.createTailwindConfig = config.createTailwindConfig;
