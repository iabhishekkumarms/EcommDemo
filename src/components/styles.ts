import {StyleSheet, ViewStyle} from 'react-native';
import {verticalScale} from '../utils/scale';
import {ThemeColors, ThemeFonts} from '../theme/theme';

const makeCommanStyles = (colors: ThemeColors, typography: ThemeFonts) =>
  StyleSheet.create({
    contentContainerStyle: {
      flexGrow: 1,
      justifyContent: 'space-between',
    } as ViewStyle,
    headerBackground: {
      backgroundColor: colors.background,
    },
    header: {
      backgroundColor: colors.background,
      borderBottomWidth: 0,
      shadowColor: colors.background,
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.15,
      shadowRadius: 5.65,
      elevation: 6,
    } as ViewStyle,
    headerTitle: {
      fontSize: verticalScale(16),
      fontFamily: typography.medium.fontFamily,
      fontWeight: undefined,
      color: colors.text,
    },
  });

export default makeCommanStyles;
