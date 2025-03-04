import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import React, {FC} from 'react';
import {ThemeColors, ThemeFonts} from 'src/theme/theme';
import {vs} from 'src/utils';
import SvgIcArrow from 'src/assets/svgs/IcArrow';

interface ShippingAddressProps {
  title: string;
  text: string;
  themeColors: ThemeColors;
  fonts: ThemeFonts;
  onPress: TouchableOpacityProps['onPress'];
}

const ShippingAddress: FC<ShippingAddressProps> = ({
  title,
  text,
  themeColors,
  fonts,
  onPress,
}) => {
  const styles = makeStyles(themeColors, fonts);

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text
            style={styles.titleStyle}
            numberOfLines={1}
            ellipsizeMode="tail">
            {title}
          </Text>
          <Text style={styles.textStyle} numberOfLines={1} ellipsizeMode="tail">
            {text}
          </Text>
        </View>
        <SvgIcArrow height={vs(24)} width={vs(24)} color={themeColors.text} />
      </View>
    </TouchableOpacity>
  );
};

export default ShippingAddress;

const makeStyles = (colors: ThemeColors, fonts: ThemeFonts) =>
  StyleSheet.create({
    container: {
      backgroundColor: colors.btnColorSecondary,
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: vs(10),
      flexDirection: 'row',
      borderRadius: vs(10),
      marginHorizontal: vs(10),
      marginVertical: vs(8),
      width: '100%',
      height: vs(72),
    },
    textStyle: {
      color: colors.text,
      fontFamily: fonts.regular.fontFamily,
      fontSize: vs(18),
    } as TextStyle,
    textContainer: {
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      flex: 1,
    },
    titleStyle: {
      color: colors.text,
      fontFamily: fonts.regular.fontFamily,
      fontSize: vs(12),
      flex: 1,
    } as TextStyle,
  });
