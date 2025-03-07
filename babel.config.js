module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '*': '.',
          src: './src',
          navigation: './src/navigation',
          utils: './src/utils',
          components: './src/components',
          i18n: './src/i18n',
        },
      },
    ],
  ],
};
