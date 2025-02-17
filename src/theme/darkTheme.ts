import {colors} from './colors';
import {AppTheme} from './theme';
import {typography} from './typography';

export const DarkTheme: AppTheme = {
  dark: true,
  colors: {
    primary: '#BB86FC',
    text: colors.white,
    background: colors.raisinBlack,
    backgroundSecondary: '#1E1E1E',
    tertiary: '#BDBDBD',
    btnColor: colors.violetsAreBlue,
    btnColorSecondary: colors.onyx,
    btnTextPrimary: colors.white,
    btnTextSecondary: colors.white,
    border: '#333333',
    placeholderText: colors.white,
    placeholder: colors.onyx,
    card: '#1E1E1E',
    notification: '#FF4081', // Required by React Navigation
    errorColor: colors.red,
    transparent: colors.transparent,
  },
  fonts: typography,
};
