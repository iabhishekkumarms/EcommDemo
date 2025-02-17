import {Theme} from '@react-navigation/native';
import {FontStyle} from './FontStyle';

export interface ThemeColors {
  primary: string;
  text: string;
  background: string;
  backgroundSecondary: string; // Extra
  tertiary: string; // Extra
  btnColor: string;
  btnColorSecondary: string;
  btnTextPrimary: string; // Extra
  btnTextSecondary: string; // Extra
  border: string;
  placeholderText: string; // Extra
  placeholder: string;
  card: string;
  notification: string; // Required by React Navigation
  errorColor: string;
  transparent: string;
}

export interface ThemeFonts {
  regular: FontStyle;
  regularItalic: FontStyle;
  medium: FontStyle;
  mediumItalic: FontStyle;
  bold: FontStyle;
  boldItalic: FontStyle;
  heavy: FontStyle;
  heavyItalic: FontStyle;
  light: FontStyle;
  lightItalic: FontStyle;
}

export interface AppTheme extends Theme {
  colors: ThemeColors;
  fonts: ThemeFonts;
}

// Declare the module for @react-navigation/native to provide correct type support for the useTheme hook
// declare module '@react-navigation/native' {
//   export function useTheme(): AppTheme;
// }
