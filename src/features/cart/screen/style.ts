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
    contentContainerStyle: {
      marginBottom: vs(spacing.lg),
      paddingBottom: vs(spacing.gigantic),
      flex: 1,
    },
    emptyConatiner: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    emptyText: {
      color: colors.text,
      marginHorizontal: vs(spacing.md),
      fontFamily: fonts.bold.fontFamily,
      fontSize: vs(24),
      padding: vs(24),
    } as TextStyle,
    exploreBtnStyle: {
      padding: vs(8),
    },
    listContainer: {
      padding: vs(8),
    },
    totalPriceView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: vs(10),
      backgroundColor: colors.btnColorSecondary,
      borderRadius: vs(5),
      marginTop: vs(spacing.lg),
      marginBottom: vs(spacing.lg),
    },
    totalText: {
      color: colors.text,
    } as TextStyle,
    totalPrice: {
      color: colors.text,
      fontFamily: fonts.bold.fontFamily,
      fontSize: vs(18),
    } as TextStyle,
    btnCheckout: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: colors.background,
      padding: vs(16),
    },
  });

export default makeStyles;
