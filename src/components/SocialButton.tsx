import React from 'react';
import {
  StyleSheet,
  TouchableOpacityProps,
  ViewStyle,
  StyleProp,
  TextStyle,
  TouchableOpacity,
} from 'react-native';
import {Text, TextProps, Icon, IconTypes} from 'components';
import {s, vs} from 'utils';
import {useAppTheme} from 'src/theme/useAppTheme';
import {ThemeColors, ThemeFonts} from 'src/theme/theme';
import {spacing} from 'src/theme/spacing';
/**
 * Defines the possible types of icons:
 * - `string`: Uses predefined `IconTypes`.
 * - `React.FC`: Accepts imported SVG components.
 */
export type SocialButtonIcon = IconTypes | React.ReactElement;

export interface SocialButtonProps extends TouchableOpacityProps {
  btnText?: string;
  preset?: 'default' | 'link';
  onPress: TouchableOpacityProps['onPress'];
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  isDisabled?: boolean;
  restTextProps?: TextProps;
  btnIcon?: SocialButtonIcon; // Accepts both predefined and SVG icons
  btnIconSize?: number;
}

type Preset = Exclude<SocialButtonProps['preset'], undefined>;
type Size = TextProps['size'];

type TextSizeType = {
  [P in Preset]: Size | undefined;
};

export const SocialButton = (props: SocialButtonProps) => {
  const {
    btnText,
    preset = 'default',
    onPress,
    style: styleOverride,
    textStyle: textStyleOverride,
    disabled = false,
    restTextProps,
    btnIcon,
    btnIconSize = vs(30),
    ...restProps
  } = props;
  const {colors, fonts} = useAppTheme();
  const styles = makeStyles(colors, fonts);

  const presets = {
    default: {
      buttonStyles: styles.container,
      disabledStyle: styles.isDisabledStyle,
      btnTextStyle: styles.btnText,
    },
    link: {
      buttonStyles: styles.link,
      disabledStyle: styles.isDisabledLinkStyle,
      btnTextStyle: styles.linkText,
    },
  };

  const textSize: TextSizeType = {
    default: 'h3',
    link: 'body',
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={Boolean(disabled)}
      style={[
        presets[preset].buttonStyles,
        styleOverride,
        disabled ? presets[preset].disabledStyle : null,
      ]}
      {...restProps}>
      {btnIcon && (
        <Icon
          style={styles.btnIcon}
          icon={btnIcon}
          size={btnIconSize}
          color={colors.primary}
        />
      )}

      <Text
        size={textSize[preset]}
        style={[presets[preset].btnTextStyle, textStyleOverride]}
        {...restTextProps}>
        {btnText}
      </Text>
    </TouchableOpacity>
  );
};

const makeStyles = (colors: ThemeColors, fonts: ThemeFonts) =>
  StyleSheet.create({
    container: {
      height: vs(50),
      borderRadius: s(spacing.xxl),
      alignItems: 'center',
      backgroundColor: colors.btnColorSecondary,
      marginBottom: vs(spacing.md),
      flexDirection: 'row',
    } as ViewStyle,
    link: {
      paddingHorizontal: s(spacing.xs),
      flexDirection: 'row',
      alignItems: 'center',
    } as ViewStyle,
    btnText: {
      color: colors.btnTextSecondary,
      letterSpacing: vs(1),
      textAlign: 'center',
      position: 'absolute',
      left: 0,
      right: 0,
    } as TextStyle,
    linkText: {
      color: colors.primary,
      fontFamily: fonts.medium.fontFamily,
    } as TextStyle,
    btnIcon: {
      paddingStart: s(spacing.lg),
      paddingVertical: s(spacing.xs),
    } as ViewStyle,
    isDisabledStyle: {backgroundColor: colors.placeholderText} as ViewStyle,
    isDisabledLinkStyle: {backgroundColor: colors.transparent} as ViewStyle,
  });
