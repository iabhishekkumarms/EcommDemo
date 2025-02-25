import {StyleSheet, ViewStyle} from 'react-native';
import {spacing} from 'src/theme/spacing';
import {ThemeColors, ThemeFonts} from 'src/theme/theme';
import {s, vs} from 'src/utils';

const makeStyles = (colors: ThemeColors, fonts: ThemeFonts) =>
  StyleSheet.create({
    contentContainerStyle: {
      paddingHorizontal: s(spacing.md),
      marginTop: vs(spacing.lg),
      marginBottom: vs(spacing.lg),
    } as ViewStyle,
    header: {
      fontSize: 24,
      fontWeight: 'bold',
      margin: 20,
    },
    productList: {
      width: '100%',
    },
    productItem: {
      padding: 10,
      marginVertical: 8,
      marginHorizontal: 16,
      backgroundColor: '#f9c2ff',
      borderRadius: 10,
    },
    productTitle: {
      fontSize: 18,
    },
    productPrice: {
      fontSize: 16,
      color: '#888',
    },
    addToCartButton: {
      marginTop: 10,
      padding: 10,
      backgroundColor: '#ff6347',
      borderRadius: 5,
    },
    addToCartButtonText: {
      color: '#fff',
      textAlign: 'center',
    },
  });

export default makeStyles;
