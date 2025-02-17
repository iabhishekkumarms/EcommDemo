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

export interface ButtonProps extends TouchableOpacityProps {
  /**
   * The text to be displayed on the button.
   */
  btnText?: string;

  /**
   * The predefined style preset for the button.
   */
  preset?: 'default' | 'link';

  /**
   * Callback function to be executed when the button is pressed.
   */
  onPress: TouchableOpacityProps['onPress'];

  /**
   * Style overrides for the button container.
   */
  style?: StyleProp<ViewStyle>;

  /**
   * Style overrides for the button text.
   */
  textStyle?: StyleProp<TextStyle>;

  /**
   * Determines whether the button is in a disabled state.
   */
  isDisabled?: boolean;

  /**
   * Additional text props for the button text component.
   */
  restTextProps?: TextProps;

  /**
   * Additional button props for the button icon component
   */
  btnIcon?: IconTypes;

  /**
   * The size of the icon.
   */
  btnIconSize?: number;
}

type Preset = Exclude<ButtonProps['preset'], undefined>;
type Size = TextProps['size'];

type TextSizeType = {
  [P in Preset]: Size | undefined;
};

export const Button = (props: ButtonProps) => {
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
        <Icon icon={btnIcon} size={btnIconSize} color={colors.primary} />
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
      justifyContent: 'center',
      backgroundColor: colors.btnColor,
      marginBottom: vs(spacing.md),
      flexDirection: 'row',
    } as ViewStyle,
    link: {
      paddingHorizontal: s(spacing.xs),
      flexDirection: 'row',
      alignItems: 'center',
    } as ViewStyle,
    btnText: {
      color: colors.btnTextPrimary,
      letterSpacing: vs(1),
    } as TextStyle,
    linkText: {
      color: colors.primary,
      fontFamily: fonts.medium.fontFamily,
    } as TextStyle,
    isDisabledStyle: {backgroundColor: colors.placeholderText} as ViewStyle,
    isDisabledLinkStyle: {backgroundColor: colors.transparent} as ViewStyle,
  });
