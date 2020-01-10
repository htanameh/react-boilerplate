import commonConfig from './webpack.common';
import devConfig from './webpack.dev';
import prodConfig from './webpack.prod';
import bundleAnalyzeConfig from './addons/webpack.bundleanayze';
import bundleVisualizerConfig from './addons/webpack.bundlevisualizer';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const WebpackMerge = require('webpack-merge');

interface Env {
  env: string;
  addon?: string;
}

function getMergedConfig(env: Env) {
  // eslint-disable-next-line no-console
  let envConfig = devConfig;
  let addOnConfig = {};
  if (env.env === 'production') {
    envConfig = prodConfig;
  }
  // eslint-disable-next-line no-console
  console.log('****', env);
  if (env.addon === 'bundleanalyze') {
    addOnConfig = bundleAnalyzeConfig;
  }
  if (env.addon === 'bundlevisualizer') {
    addOnConfig = bundleVisualizerConfig;
  }
  return WebpackMerge(commonConfig, envConfig, addOnConfig);
}

export default getMergedConfig;
