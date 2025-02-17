import {Platform, StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {fontSize} from 'src/theme/fontSize';
import {spacing} from 'src/theme/spacing';
import {ThemeColors, ThemeFonts} from 'src/theme/theme';
import {s, vs} from 'utils';

export const makeStyles = (colors: ThemeColors, fonts: ThemeFonts) =>
  StyleSheet.create({
    outerWrapper: {
      marginBottom: vs(spacing.lg),
    } as ViewStyle,
    inputWrapperStyles: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderRadius: s(spacing.xs),
      paddingHorizontal: s(spacing.xs),
      backgroundColor: colors.placeholder,
    } as ViewStyle,
    inputStyles: {
      flex: 1,
      height: vs(50),
      paddingHorizontal: s(spacing.xs),
      fontSize: fontSize.body,
      fontFamily: fonts.regular.fontFamily,
      color: colors.placeholderText,
      paddingTop: Platform.OS === 'android' ? 2 : 0,
      paddingBottom: 0,
    } as TextStyle,
    errorText: {
      marginLeft: s(spacing.xxxs),
      marginTop: vs(spacing.xxs),
    } as TextStyle,
  });
