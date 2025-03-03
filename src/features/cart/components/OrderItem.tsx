import {StyleSheet, Text, TextStyle, View} from 'react-native';
import React, {FC} from 'react';
import {vs} from 'src/utils';
import {ThemeColors, ThemeFonts} from 'src/theme/theme';
import FastImage from 'react-native-fast-image';
import ItemeIncrementButton from 'src/components/ItemIncerementButton';

const OrderItem: FC<{
  item: any;
  themeColors: ThemeColors;
  fonts: ThemeFonts;
}> = ({item, themeColors, fonts}) => {
  const styles = makeStyles(themeColors, fonts);
  return (
    <View style={styles.flexRow}>
      <FastImage
        source={{uri: item.images[0]}}
        style={styles.productImage}
        resizeMode={FastImage.resizeMode.cover}
      />
      <View style={styles.prodcutDesciption}>
        <Text style={styles.productTitle}>{item.title}</Text>
        <Text style={styles.productPrice}>${item.price}</Text>
        <ItemeIncrementButton item={item} colors={themeColors} fonts={fonts} />
      </View>
    </View>
  );
};

export default OrderItem;

const makeStyles = (_colors: ThemeColors, _fonts: ThemeFonts) =>
  StyleSheet.create({
    flexRow: {
      justifyContent: 'space-between',
      flexDirection: 'row',
      alignItems: 'flex-start',
      marginBottom: vs(10),
      paddingVertical: vs(10),
      padding: vs(10),
      backgroundColor: _colors.btnColorSecondary,
      borderRadius: vs(10),
    },
    productImage: {
      width: ' 25%',
      height: vs(150),
      borderRadius: vs(5),
      justifyContent: 'center',
      alignItems: 'center',
    },
    prodcutDesciption: {
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
    productTitle: {
      color: _colors.text,
      fontFamily: _fonts.bold.fontFamily,
      textAlign: 'left',
      padding: vs(5),
    } as TextStyle,
    productPrice: {
      color: _colors.text,
      fontFamily: _fonts.heavy.fontFamily,
      padding: vs(10),
    } as TextStyle,
  });
