module.exports = {
  /**
   * How to add/update font assets:
   * Add fonts to assets/fonts folder
   * run command: "npx react-native-asset" in project folder
   * Add font name in theme/typography file
   */
  assets: ['./src/assets/fonts/'],
  dependencies: {
    'react-native-vector-icons': {
      platforms: {
        ios: null, // Disable auto-linking for iOS if you are using CocoaPods
      },
    },
  },
};
