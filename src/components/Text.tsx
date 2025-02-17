import React from 'react';
import {
  StyleProp,
  Text as RNText,
  TextProps as RNTextProps,
  TextStyle,
  StyleSheet,
} from 'react-native';
import {useAppTheme} from 'src/theme/useAppTheme'; // Use your theme hook
import {ThemeColors, ThemeFonts} from 'src/theme/theme';
import {fontSize, lineHeight} from 'src/theme/fontSize';

export interface TextProps extends RNTextProps {
  /**
   * The text to display if not using `tx` or nested components.
   */
  text?: string;
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<TextStyle>;
  /**
   * Text size modifier.
   */
  size?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'body'
    | 'body1'
    | 'body2'
    | 'error';
  /**
   * Children components.
   */
  children?: React.ReactNode;
}

/**
 * For your text displaying needs.
 * This component is a HOC over the built-in React Native one.
 * @param {TextProps} props - The props for the `Text` component.
 * @returns {JSX.Element} The rendered `Text` component.
 */
export function Text(props: TextProps): JSX.Element {
  const {text, children, style: styleOverride, size = 'body', ...rest} = props;
  const {colors, fonts} = useAppTheme(); // Get colors from your theme
  const styles = makeStyles(colors, fonts);

  const content = text || children;
  const $styles: StyleProp<TextStyle> = [
    styles.text,
    styles[size],
    styleOverride,
  ];

  return (
    <RNText {...rest} style={$styles}>
      {content}
    </RNText>
  );
}

/**
 * Generates styles dynamically based on theme
 */
const makeStyles = (colors: ThemeColors, fonts: ThemeFonts) =>
  StyleSheet.create({
    text: {
      color: colors.text,
      fontFamily: fonts.regular.fontFamily,
      fontWeight: fonts.regular.fontWeight,
    },
    h1: {
      fontSize: fontSize.h1,
      lineHeight: lineHeight[fontSize.h1],
      fontFamily: fonts.bold.fontFamily,
      fontWeight: fonts.bold.fontWeight,
    },
    h2: {
      fontSize: fontSize.h2,
      lineHeight: lineHeight[fontSize.h2],
      fontFamily: fonts.bold.fontFamily,
      fontWeight: fonts.bold.fontWeight,
    },
    h3: {
      fontSize: fontSize.h3,
      lineHeight: lineHeight[fontSize.h3],
      fontFamily: fonts.bold.fontFamily,
      fontWeight: fonts.bold.fontWeight,
    },
    h4: {
      fontSize: fontSize.h4,
      lineHeight: lineHeight[fontSize.h4],
      fontFamily: fonts.medium.fontFamily,
      fontWeight: fonts.medium.fontWeight,
    },
    h5: {
      fontSize: fontSize.h5,
      lineHeight: lineHeight[fontSize.h5],
      fontFamily: fonts.medium.fontFamily,
      fontWeight: fonts.medium.fontWeight,
    },
    h6: {
      fontSize: fontSize.h6,
      lineHeight: lineHeight[fontSize.h6],
      fontFamily: fonts.medium.fontFamily,
      fontWeight: fonts.medium.fontWeight,
    },
    body: {
      fontSize: fontSize.body,
      lineHeight: lineHeight[fontSize.body],
      fontFamily: fonts.regular.fontFamily,
      fontWeight: fonts.regular.fontWeight,
    },
    body1: {
      fontSize: fontSize.body1,
      lineHeight: lineHeight[fontSize.body1],
      fontFamily: fonts.regular.fontFamily,
      fontWeight: fonts.regular.fontWeight,
    },
    body2: {
      fontSize: fontSize.body2,
      lineHeight: lineHeight[fontSize.body2],
      fontFamily: fonts.regular.fontFamily,
      fontWeight: fonts.regular.fontWeight,
    },
    error: {
      fontSize: fontSize.body1,
      lineHeight: lineHeight[fontSize.body1],
      color: colors.errorColor,
      fontFamily: fonts.bold.fontFamily,
      fontWeight: fonts.bold.fontWeight,
    },
  });
