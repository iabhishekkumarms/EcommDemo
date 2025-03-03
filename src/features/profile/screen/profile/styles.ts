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
    userImage: {
      width: vs(60),
      height: vs(60),
      borderRadius: vs(25),
      marginTop: vs(25),
    },
    userDetailConatiner: {
      backgroundColor: colors.btnColorSecondary,
      padding: vs(18),
      width: '100%',
      borderRadius: vs(10),
      marginTop: vs(32),
    },
    userNameTxt: {
      color: colors.text,
      fonts: fonts.bold.fontFamily,
      fontSize: vs(18),
    } as TextStyle,
    userEmailTxt: {
      color: colors.text,
      fonts: fonts.regular.fontFamily,
      fontSize: vs(14),
    } as TextStyle,
  });

export default makeStyles;
