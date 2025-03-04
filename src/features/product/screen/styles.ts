import {StyleSheet, TextStyle} from 'react-native';
import {spacing} from 'src/theme/spacing';
import {ThemeColors, ThemeFonts} from 'src/theme/theme';
import {s, vs} from 'src/utils';

const makeStyles = (colors: ThemeColors, fonts: ThemeFonts) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    contentContainerStyle: {
      paddingHorizontal: s(spacing.md),
      marginBottom: vs(spacing.lg),
      paddingBottom: vs(spacing.gigantic),
    },
    productDetailsContainer: {
      paddingHorizontal: s(spacing.md),
      marginTop: vs(spacing.lg),
    },
    productTitle: {
      color: colors.text,
      fontFamily: fonts.bold.fontFamily,
      fontSize: s(16),
    } as TextStyle,
    productPrice: {
      color: colors.primary,
      fontFamily: fonts.bold.fontFamily,
      fontSize: s(16),
      marginTop: vs(spacing.sm),
    } as TextStyle,
    description: {
      color: colors.text,
      fontFamily: fonts.light.fontFamily,
      fontSize: s(14),
      marginTop: vs(spacing.sm),
    } as TextStyle,
    boldText: {
      color: colors.text,
      fontFamily: fonts.heavy.fontFamily,
      fontSize: s(16),
      marginTop: vs(spacing.lg),
    } as TextStyle,
    shipping: {
      color: colors.text,
      fontFamily: fonts.light.fontFamily,
      fontSize: s(16),
      marginTop: vs(spacing.xs),
    } as TextStyle,
    rating: {
      color: colors.text,
      fontFamily: fonts.heavy.fontFamily,
      fontSize: s(24),
      marginTop: vs(spacing.xs),
    } as TextStyle,
    quantityContainer: {
      backgroundColor: colors.btnColorSecondary,
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
      paddingHorizontal: vs(20),
      borderRadius: vs(50),
      width: '100%',
      height: vs(60),
      marginVertical: vs(25),
    },
    productItemContainer: {
      flex: 1,
      margin: vs(8),
    },
    flatListContentContainer: {
      paddingBottom: vs(16),
    },
    ratingReview: {
      color: colors.text,
    },
  });

export default makeStyles;
