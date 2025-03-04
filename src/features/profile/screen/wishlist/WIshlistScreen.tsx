import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useAppTheme} from 'src/theme/useAppTheme';
import makeStyles from './style';
import {useTranslation} from 'react-i18next';
import {Screen} from 'src/components';
import {useHeaderHeight} from '@react-navigation/elements';
import {useAppSelector} from 'src/store/reduxHook';
import {selectWishlist} from './slice/wishlistSlice';
import ProductItem from 'src/components/ProductItem';

const WishlistScreen = () => {
  const {colors, fonts} = useAppTheme(); // Get colors & fonts from theme
  const styles = makeStyles(colors, fonts);
  const {t} = useTranslation();
  const headerSpace = useHeaderHeight();
  const wishlist = useAppSelector(selectWishlist);

  const renderProductItem = ({item}: any) => (
    <View style={styles.productItemContainer}>
      <ProductItem item={item} colors={colors} fonts={fonts} />
    </View>
  );

  return (
    <Screen
      safeAreaEdges={['top', 'bottom', 'left', 'right']}
      preset="fixed"
      contentContainerStyle={[
        styles.contentContainerStyle,
        {paddingTop: headerSpace},
      ]}>
      <FlatList
        data={wishlist}
        numColumns={2}
        keyExtractor={item => item.id.toString()}
        renderItem={renderProductItem}
        contentContainerStyle={styles.flatListContentContainer}
      />
    </Screen>
  );
};

export default WishlistScreen;
