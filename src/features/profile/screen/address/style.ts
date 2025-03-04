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
    },
    textFiledContainer: {
      marginTop: vs(spacing.md),
    },
    buttonConatiner: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: colors.background,
      padding: vs(16),
    },
  });

export default makeStyles;
