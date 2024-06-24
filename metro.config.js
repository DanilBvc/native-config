// eslint-disable-next-line @typescript-eslint/no-var-requires
const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

module.exports = function (baseConfig) {
  const defaultConfig = mergeConfig(baseConfig, getDefaultConfig(__dirname));
  const {
    resolver: { assetExts, sourceExts },
  } = defaultConfig;

  return mergeConfig(defaultConfig, {
    resolver: {
      assetExts: assetExts.filter((ext) => ext !== 'svg'),
      sourceExts: [...sourceExts, 'svg', 'tsx', 'ts'],
    },
    transformer: {
      assetPlugins: ['expo-asset/tools/hashAssetFiles'],
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: false,
        },
      }),
    },
  });
};
