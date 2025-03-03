import {colors} from './colors';
import {AppTheme} from './theme';
import {typography} from './typography';

export const DarkTheme: AppTheme = {
  dark: true,
  colors: {
    primary: colors.violetsAreBlue,
    text: colors.white,
    background: colors.raisinBlack,
    backgroundSecondary: '#1E1E1E',
    tertiary: colors.charlestonGreen,
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
    success: colors.success,
    danger: colors.danger,
    info: colors.info,
    warning: colors.warning,
  },
  fonts: typography,
};
