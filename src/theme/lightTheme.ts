import {colors} from './colors';
import {AppTheme} from './theme';
import {typography} from './typography';

export const LightTheme: AppTheme = {
  dark: false,
  colors: {
    primary: colors.violetsAreBlue,
    text: colors.charlestonGreen,
    background: colors.white,
    backgroundSecondary: '#F5F5F5',
    tertiary: colors.charlestonGreen,
    btnColor: colors.violetsAreBlue,
    btnColorSecondary: colors.cultured,
    btnTextPrimary: colors.white,
    btnTextSecondary: colors.charlestonGreen,
    border: '#E0E0E0',
    placeholderText: colors.charlestonGreen,
    placeholder: colors.cultured,
    card: '#FFFFFF',
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
