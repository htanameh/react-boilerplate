/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */
if (process.env.NODE_ENV === 'production') {
  module.exports = require('./webpack.production.config');
} else if (process.env.NODE_ENV === 'qe') {
  module.exports = require('./webpack.qe.config');
} else if (process.env.NODE_ENV === 'staging') {
  module.exports = require('./webpack.staging.config');
} else {
  module.exports = require('./webpack.development.config');
}
