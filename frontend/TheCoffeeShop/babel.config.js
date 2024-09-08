module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      ["@babel/plugin-transform-private-methods",{ "loose": true }],
      [
        require.resolve('babel-plugin-module-resolver'),
        {
          root: ['.'],
          alias: {
            '@/assets': './src/assets',
            '@/components': './src/components',
            '@/features': './src/features',
            '@/configs': './src/configs',
            '@/services': './src/services',
            '@/hooks': './src/hooks',
            '@/screens': './src/screens',
            '@/locales': './src/locales',
            '@/utils': './src/utils',
            '@/app': './src/app',
            '@/hocs': './src/hocs',
            '@/containers': './src/containers',
          },
          extensions: ['.ts', '.tsx'],
        },
      ],
      'react-native-reanimated/plugin',
    ],
    env: {
      production: {
        plugins: ['transform-remove-console'],
      },
    },
  };
};
