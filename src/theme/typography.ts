import {ThemeFonts} from './theme';

/**
 * List of font families supported by app
 * How to add/update font assets:
 * Add fonts to assets/fonts folder
 * run command: "npx react-native-asset" in project folder
 * Add font name in theme/typography file
 */
export const typography: ThemeFonts = {
  light: {fontFamily: 'CircularStd-Book', fontWeight: '300'},
  lightItalic: {fontFamily: 'CircularStd-BookItalic', fontWeight: '300'},

  regular: {fontFamily: 'CircularStd-Book', fontWeight: '400'},
  regularItalic: {fontFamily: 'CircularStd-BookItalic', fontWeight: '400'},

  medium: {fontFamily: 'CircularStd-Medium', fontWeight: '500'},
  mediumItalic: {fontFamily: 'CircularStd-MediumItalic', fontWeight: '500'},

  bold: {fontFamily: 'CircularStd-Bold', fontWeight: '700'},
  boldItalic: {fontFamily: 'CircularStd-BoldItalic', fontWeight: '700'},

  heavy: {fontFamily: 'CircularStd-Black', fontWeight: '900'},
  heavyItalic: {fontFamily: 'CircularStd-BlackItalic', fontWeight: '900'},
};
