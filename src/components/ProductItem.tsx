import {
  View,
  StyleSheet,
  TextStyle,
  ViewStyle,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {vs} from 'src/utils';
import {Text} from './Text';
import {ThemeColors, ThemeFonts} from 'src/theme/theme';
import FastImage from 'react-native-fast-image';
import {Product} from 'src/shared/models/product';
import {navigate} from 'src/navigation';
import BookmarkButton from './BookmarkButton';

type Props = {
  item: Product;
  colors: ThemeColors;
  fonts: ThemeFonts;
};

const ProductItem = ({item, colors, fonts}: Props) => {
  const styles = makeStyles(colors, fonts);

  const onPressProduct = async () => {
    try {
      navigate('productDetails', {product: item});
    } catch (error) {}
  };

  return (
    <TouchableOpacity onPress={onPressProduct}>
      <View style={styles.productConatiner}>
        <FastImage
          source={{uri: item.images[0]}}
          style={styles.productImage}
          resizeMode={FastImage.resizeMode.cover}
        />
        <BookmarkButton
          product={item}
          height={vs(20)}
          width={vs(20)}
          style={styles.bookmarkIcon}
        />
        <Text style={styles.productTitle} numberOfLines={2}>
          {item.title}
        </Text>
        <Text style={styles.productPrice}>${item.price}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProductItem;

const makeStyles = (colors: ThemeColors, fonts: ThemeFonts) =>
  StyleSheet.create({
    productImage: {
      width: ' 100%',
      height: vs(150),
      borderRadius: vs(10),
    },
    productConatiner: {
      margin: vs(10),
      backgroundColor: colors.btnColorSecondary,
      height: vs(225),
      width: vs(150),
      borderRadius: vs(10),
      padding: vs(10),
    },
    productTitle: {
      color: colors.text,
      fontFamily: fonts.bold.fontFamily,
    } as TextStyle,
    productPrice: {
      color: colors.text,
      fontFamily: fonts.heavy.fontFamily,
    } as TextStyle,
    bookmarkIcon: {
      position: 'absolute',
      right: vs(10),
      top: vs(10),
    } as ViewStyle,
  });
