import {StyleSheet, TextStyle} from 'react-native';
import {spacing} from 'src/theme/spacing';
import {ThemeColors, ThemeFonts} from 'src/theme/theme';
import {s, vs} from 'src/utils';

const makeStyles = (colors: ThemeColors, fonts: ThemeFonts) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      paddingHorizontal: s(spacing.md),
      marginTop: vs(spacing.lg),
      alignItems: 'center',
    },
    contentContainerStyle: {
      marginBottom: vs(spacing.lg),
      paddingBottom: vs(spacing.gigantic),
      flex: 1,
    },
  });

export default makeStyles;
