import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {spacing} from 'src/theme/spacing';
import {ThemeColors} from 'src/theme/theme';
import {s, vs} from 'utils';

const makeStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    contentContainerStyle: {
      paddingHorizontal: s(spacing.md),
      marginTop: vs(spacing.mega),
      marginBottom: vs(spacing.lg),
    } as ViewStyle,
    signUpTextView: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
    },
    CreateAccountText: {
      color: colors.text,
    } as TextStyle,
    textFiledContainer: {
      marginTop: vs(spacing.md),
    },
    socailLoginContainer: {
      marginTop: vs(spacing.jumbo),
    },
  });

export default makeStyles;
