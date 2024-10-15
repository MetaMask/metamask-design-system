const exclusionList = require('metro-config/src/defaults/exclusionList');
const path = require('path');

module.exports = {
  projectRoot: path.resolve(__dirname),
  watchFolders: [path.resolve(__dirname, '../../node_modules')],
  resolver: {
    blacklistRE: exclusionList([
      // Avoid conflicts with duplicate modules
      new RegExp(
        `${path.resolve(__dirname, '../../node_modules/react-native')}.*`,
      ),
    ]),
    extraNodeModules: new Proxy(
      {},
      {
        get: (target, name) => path.resolve(__dirname, `node_modules/${name}`),
      },
    ),
  },
};
