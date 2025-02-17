import React, {useEffect, useRef, useState, useCallback} from 'react';
import {
  ActivityIndicator,
  Animated,
  StyleSheet,
  ViewStyle,
  StyleProp,
  TextStyle,
  ActivityIndicatorProps,
} from 'react-native';
import {useAppTheme} from 'src/theme/useAppTheme';
import {Text} from 'components';
import {ThemeColors} from 'src/theme/theme';
import {s} from 'src/utils';
import {spacing} from 'src/theme/spacing';

interface SpinnerProps extends ActivityIndicatorProps {
  loading: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  spinnerStyle?: StyleProp<ViewStyle>;
  textStyles?: StyleProp<TextStyle>;
}

export const Spinner = (props: SpinnerProps) => {
  const {
    loading,
    color,
    containerStyle,
    spinnerStyle,
    textStyles,
    ...restProps
  } = props;
  const {colors} = useAppTheme();
  const styles = themedStyle(colors);

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [showSpinner, setShowSpinner] = useState(loading);

  // Use useCallback to define the animation function
  const animateSpinner = useCallback(
    (isLoading: boolean) => {
      if (isLoading) {
        setShowSpinner(true);
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }).start();
      } else {
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 100,
          useNativeDriver: true,
        }).start(() => setShowSpinner(false));
      }
    },
    [fadeAnim], // No longer causes ESLint warning
  );

  useEffect(() => {
    animateSpinner(loading);
  }, [loading, animateSpinner]);

  if (!showSpinner) return null;

  return (
    <Animated.View
      style={[styles.container, {opacity: fadeAnim}, containerStyle]}>
      <Animated.View style={[styles.spinner, spinnerStyle]}>
        <ActivityIndicator
          animating={loading}
          size="small"
          color={color || colors.primary}
          style={styles.activityIndicatorStyle}
          {...restProps}
        />
        <Text style={[styles.loadingText, textStyles]}>Loading...</Text>
      </Animated.View>
    </Animated.View>
  );
};

const themedStyle = (colors: ThemeColors) =>
  StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1,
      backgroundColor: colors.backgroundSecondary,
    } as ViewStyle,
    spinner: {
      backgroundColor: colors.background,
      padding: s(spacing.sm),
      borderRadius: s(spacing.sm),
      alignItems: 'center',
    } as ViewStyle,
    activityIndicatorStyle: {
      marginBottom: s(spacing.xs),
    } as ViewStyle,
    loadingText: {
      textAlign: 'center',
      color: colors.text,
    } as TextStyle,
  });
