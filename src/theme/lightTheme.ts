import {colors} from './colors';
import {AppTheme} from './theme';
import {typography} from './typography';

export const LightTheme: AppTheme = {
  dark: false,
  colors: {
    primary: '#6200EE',
    text: colors.charlestonGreen,
    background: colors.white,
    backgroundSecondary: '#F5F5F5',
    tertiary: '#757575',
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
  },
  fonts: typography,
};
