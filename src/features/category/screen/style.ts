import {StyleSheet} from 'react-native';
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
      paddingVertical: vs(spacing.md),
    },
    listContainer: {
      justifyContent: 'space-between', // Ensure equal spacing between items
    },
  });

export default makeStyles;
