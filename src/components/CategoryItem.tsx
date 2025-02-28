import {
  Image,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {Category} from 'src/features/home/api/api.types';
import {ThemeColors, ThemeFonts} from 'src/theme/theme';
import {vs} from 'src/utils';
import {spacing} from 'src/theme/spacing';

type Props = {
  item: Category;
  colors: ThemeColors;
  fonts: ThemeFonts;
};

const CategoryItem = ({item, colors, fonts}: Props) => {
  const styles = makeStyles(colors, fonts);
  return (
    <View style={styles.CategoryItem}>
      <Image
        source={{
          uri: 'https://images.pexels.com/photos/2836961/pexels-photo-2836961.jpeg',
        }}
        style={styles.categoryImage}
      />
      <Text style={styles.categoryText}>{item.name}</Text>
    </View>
  );
};

export default CategoryItem;

const makeStyles = (colors: ThemeColors, fonts: ThemeFonts) =>
  StyleSheet.create({
    categoryImage: {
      width: vs(50),
      height: vs(50),
      borderRadius: vs(25),
    },
    categoryText: {
      color: colors.text,
      fontFamily: fonts.medium.fontFamily,
      marginTop: vs(spacing.sm),
      textAlign: 'center', // Center the text
      flexWrap: 'wrap', // Allow text to wrap to the next line
    } as TextStyle,
    CategoryItem: {
      marginVertical: vs(10),
      alignItems: 'center',
      justifyContent: 'center',
      width: vs(100), // Set a fixed width for each item to ensure equal spacing
    } as ViewStyle,
  });
