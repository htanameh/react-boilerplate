// eslint-disable-next-line @typescript-eslint/no-var-requires
const Visualizer = require('webpack-visualizer-plugin');

export default {
  plugins: [
    new Visualizer({
      filename: './statistics.html',
    }),
  ],
};
