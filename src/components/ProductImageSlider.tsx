import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ThemeColors, ThemeFonts} from 'src/theme/theme';
import FastImage from 'react-native-fast-image';
import {vs} from 'src/utils';

type Props = {
  imageList: string[];
  colors: ThemeColors;
  fonts: ThemeFonts;
};

const ProductImageSlider = ({imageList, colors, fonts}: Props) => {
  const styles = makeStyles(colors, fonts);

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={imageList}
        renderItem={({item}) => (
          <View style={styles.productImageContainer}>
            <FastImage
              source={{uri: item}}
              style={styles.productImage}
              resizeMode={FastImage.resizeMode.center}
            />
          </View>
        )}
      />
    </View>
  );
};

export default ProductImageSlider;

const makeStyles = (colors: ThemeColors, fonts: ThemeFonts) =>
  StyleSheet.create({
    container: {
      width: '100%',
      alignItems: 'center',
    },
    productImage: {
      width: ' 100%',
      height: ' 100%',
      borderRadius: vs(10),
    },
    productImageContainer: {
      width: vs(160),
      height: vs(248),
      borderRadius: vs(10),
      backgroundColor: colors.btnColorSecondary,
      margin: vs(10),
    },
  });
