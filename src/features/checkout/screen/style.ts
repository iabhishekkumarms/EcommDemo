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
    shippingAddressContainer: {},
    buttonContainer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: colors.background,
      padding: vs(16),
    },
    addButton: {
      backgroundColor: colors.btnColor,
      paddingVertical: vs(16),
      borderRadius: vs(25),
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
      paddingHorizontal: s(spacing.lg),
    },
    addButtonText: {
      color: colors.btnTextPrimary,
      fontSize: vs(16),
      fontWeight: 'bold',
    },
    oderPlacedConatiner: {
      flex: 1,
      backgroundColor: colors.primary,
      alignItems: 'center',
      width: '100%',
    },
    orderPlacedImage: {
      width: vs(200),
      height: vs(200),
      marginBottom: vs(20),
      marginTop: '25%',
    },
    orderPlacedTextConatiner: {
      flex: 1,
      backgroundColor: colors.background,
      alignItems: 'center',
      width: '100%',
      borderEndStartRadius: vs(20),
      paddingHorizontal: s(spacing.lg),
      borderStartStartRadius: vs(20),
      paddingTop: vs(spacing.lg),
    },
    orderPlacedText: {
      color: colors.text,
      fontFamily: fonts.heavy.fontFamily,
      fontSize: vs(24),
      textAlign: 'center',
      marginBottom: vs(spacing.lg),
    } as TextStyle,
    orderPlacedEmailText: {
      color: colors.text,
      fontFamily: fonts.regular.fontFamily,
      fontSize: vs(18),
      textAlign: 'center',
      marginBottom: vs(spacing.lg),
      padding: vs(18),
    } as TextStyle,
    orderPlacedButtonContainer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: colors.background,
      padding: vs(16),
    },
  });

export default makeStyles;
