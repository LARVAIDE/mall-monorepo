const deps = require('../package.json').dependencies;

module.export = {
  react: {
    version: deps.react,
  },
  'react-dom': {
    version: deps['react-dom'],
  },
};
