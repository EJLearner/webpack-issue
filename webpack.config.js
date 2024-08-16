export default {
  target: ['web'],
  optimization: {
    minimize: false,
  },
  output: {
    module: true,
    library: {
      type: 'module',
    },
  },
  experiments: {
    outputModule: true,
  },
};
