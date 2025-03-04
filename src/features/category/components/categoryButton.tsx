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

interface CategoryButtonProps {
  text: string;
  themeColors: ThemeColors;
  fonts: ThemeFonts;
  onPress: TouchableOpacityProps['onPress'];
}

const CategoryButton: FC<CategoryButtonProps> = ({
  text,
  themeColors,
  fonts,
  onPress,
}) => {
  const styles = makeStyles(themeColors, fonts);

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.textStyle}>{text}</Text>
        <SvgIcArrow height={vs(24)} width={vs(24)} color={themeColors.text} />
      </View>
    </TouchableOpacity>
  );
};

export default CategoryButton;

const makeStyles = (colors: ThemeColors, fonts: ThemeFonts) =>
  StyleSheet.create({
    container: {
      backgroundColor: colors.btnColorSecondary,
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: vs(10),
      flexDirection: 'row',
      borderRadius: vs(10),
      marginVertical: vs(8),
      width: '100%',
      height: vs(62),
    },
    textStyle: {
      color: colors.text,
      fontFamily: fonts.regular.fontFamily,
      fontSize: vs(18),
    } as TextStyle,
  });
