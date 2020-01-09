import * as webpackMerge from 'webpack-merge';
import commonConfig from './webpack.common';
import devConfig from './webpack.dev';
import prodConfig from './webpack.prod';
import bundleAnalyzeConfig from './addons/webpack.bundleanayze';
import bundleVisualizerConfig from './addons/webpack.bundlevisualizer';

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
  return webpackMerge(commonConfig, envConfig, addOnConfig);
}

export default getMergedConfig;
