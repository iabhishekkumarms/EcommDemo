import {StyleSheet, TextStyle} from 'react-native';
import {spacing} from 'src/theme/spacing';
import {ThemeColors, ThemeFonts} from 'src/theme/theme';
import {s, vs} from 'src/utils';

const makeStyles = (colors: ThemeColors, fonts: ThemeFonts) =>
  StyleSheet.create({
    contentContainerStyle: {
      paddingHorizontal: s(spacing.md),
      marginTop: vs(spacing.lg),
      marginBottom: vs(spacing.lg),
      flexDirection: 'column',
    },
    headerConatiner: {
      flexGrow: 1,
      justifyContent: 'space-between',
      flexDirection: 'row',
      alignItems: 'center',
    },
    userImage: {
      width: vs(40),
      height: vs(40),
      borderRadius: vs(25),
    },
    text: {
      color: colors.text,
    } as TextStyle,
    categoryContainer: {
      marginTop: vs(spacing.md),
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    categoryText: {
      fontFamily: fonts.medium.fontFamily,
      color: colors.text,
    } as TextStyle,
    seeAllText: {
      fontFamily: fonts.regular.fontFamily,
      color: colors.text,
    } as TextStyle,
    listContainer: {
      justifyContent: 'space-between', // Ensure equal spacing between items
    },
    cartIconContainer: {
      position: 'relative',
    },
    cartBadge: {
      position: 'absolute',
      top: -vs(5),
      right: -vs(5),
      backgroundColor: 'red',
      borderRadius: vs(10),
      width: vs(20),
      height: vs(20),
      justifyContent: 'center',
      alignItems: 'center',
    },
    cartBadgeText: {
      color: 'white',
      fontSize: vs(12),
      fontWeight: 'bold',
    },
  });

export default makeStyles;
