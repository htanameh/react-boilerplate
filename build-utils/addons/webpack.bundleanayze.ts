import WebpackBundleAnalyzer from 'webpack-bundle-analyzer';

const { BundleAnalyzerPlugin } = WebpackBundleAnalyzer;

export default {
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      reportFilename: './report.html',
      openAnalyzer: false,
    }),
  ],
};
